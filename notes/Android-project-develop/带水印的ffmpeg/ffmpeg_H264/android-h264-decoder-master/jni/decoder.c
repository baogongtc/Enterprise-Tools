/*
 *  h264decoder.c
 *  JNI H.264 video decoder module
 *
 *  Copyright (c) 2012, Dropcam
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 *  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 *  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

#include <jni.h>
#include <stdio.h>
#include <stdlib.h>
#include <inttypes.h>
#include <stdarg.h>
#include <stdbool.h>

#include <android/log.h>

#include <libavformat/avformat.h>
#include <libavutil/dict.h>
#include <libavcodec/avcodec.h>
#include <libswscale/swscale.h>
#include <IHWYUVDec_Api.h>
#include "watermark/watermark_mark.h"

// (Must match defines in H264Decoder.java)
#define COLOR_FORMAT_YUV420 0
#define COLOR_FORMAT_RGB565LE 1
#define COLOR_FORMAT_BGR32 2

#define AV_OPT_FLAG_ENCODING_PARAM  1   ///< a generic parameter which can be set by the user for muxing or encoding
#define AV_OPT_FLAG_DECODING_PARAM  2   ///< a generic parameter which can be set by the user for demuxing or decoding
#if FF_API_OPT_TYPE_METADATA
#define AV_OPT_FLAG_METADATA        4   ///< some data extracted or inserted into the file like title, comment, ...
#endif
#define AV_OPT_FLAG_AUDIO_PARAM     8
#define AV_OPT_FLAG_VIDEO_PARAM     16
#define AV_OPT_FLAG_SUBTITLE_PARAM  32
/**
 * The option is inteded for exporting values to the caller.
 */
#define AV_OPT_FLAG_EXPORT          64
/**
 * The option may not be set through the AVOptions API, only read.
 * This flag only makes sense when AV_OPT_FLAG_EXPORT is also set.
 */
#define AV_OPT_FLAG_READONLY        128
#define AV_OPT_FLAG_FILTERING_PARAM (1<<16) ///<

#define AV_OPT_SEARCH_CHILDREN   0x0001 /**< Search in possible children of the
                                             given object first. */
/**
 *  The obj passed to av_opt_find() is fake -- only a double pointer to AVClass
 *  instead of a required pointer to a struct containing AVClass. This is
 *  useful for searching for options without needing to allocate the corresponding
 *  object.
 */
#define AV_OPT_SEARCH_FAKE_OBJ   0x0002


#  define  D(x...)  __android_log_print(ANDROID_LOG_ERROR, "h264decoder", x)

typedef struct DecoderContext {
  int color_format;
  struct AVCodec *codec;
  struct AVCodecContext *codec_ctx;
  struct AVFrame *src_frame;
  struct AVFrame *dst_frame;
  struct SwsContext *convert_ctx;
  int frame_ready;
} DecoderContext;

static void set_ctx(JNIEnv *env, jobject thiz, void *ctx) {
  jclass cls = (*env)->GetObjectClass(env, thiz);
  jfieldID fid = (*env)->GetFieldID(env, cls, "cdata", "I");
  (*env)->SetIntField(env, thiz, fid, (jint)ctx);
}

static void *get_ctx(JNIEnv *env, jobject thiz) {
  jclass cls = (*env)->GetObjectClass(env, thiz);
  jfieldID fid = (*env)->GetFieldID(env, cls, "cdata", "I");
  return (void*)(*env)->GetIntField(env, thiz, fid);
}

static void av_log_callback(void *ptr, int level, const char *fmt, __va_list vl) {
  static char line[1024] = {0};
  vsnprintf(line, sizeof(line), fmt, vl);
}

JNIEXPORT jint JNI_OnLoad(JavaVM *vm, void *reserved) {
  av_register_all();
  av_log_set_callback(av_log_callback);

  return JNI_VERSION_1_4;
}

JNIEXPORT void JNICALL JNI_OnUnload(JavaVM *vm, void *reserved) {
}


int check_stream_specifier(AVFormatContext *s, AVStream *st, const char *spec)
{
    int ret = avformat_match_stream_specifier(s, st, spec);
    if (ret < 0){
        av_log(s, AV_LOG_ERROR, "Invalid stream specifier: %s.\n", spec);
    }
    return ret;
}

AVDictionary *filter_codec_opts(AVDictionary *opts, enum AVCodecID codec_id,
                                AVFormatContext *s, AVStream *st, AVCodec *codec)
{
    AVDictionary *ret = NULL;
    AVDictionaryEntry *t = NULL;
    int	flags = s->oformat ? AV_OPT_FLAG_ENCODING_PARAM
                                      : AV_OPT_FLAG_DECODING_PARAM;
    char prefix = 0;
    const AVClass *cc = avcodec_get_class();

    if (!codec){
        codec = s->oformat ? avcodec_find_encoder(codec_id) : avcodec_find_decoder(codec_id);
    }

    switch (st->codec->codec_type) {
    case AVMEDIA_TYPE_VIDEO:
        prefix  = 'v';
        flags  |= AV_OPT_FLAG_VIDEO_PARAM;
        break;
    case AVMEDIA_TYPE_AUDIO:
        prefix  = 'a';
        flags  |= AV_OPT_FLAG_AUDIO_PARAM;
        break;
    case AVMEDIA_TYPE_SUBTITLE:
        prefix  = 's';
        flags  |= AV_OPT_FLAG_SUBTITLE_PARAM;
        break;
    }

    while (t = av_dict_get(opts, "", t, AV_DICT_IGNORE_SUFFIX)) {
        char *p = strchr(t->key, ':');

        /* check stream specification in opt name */
        if (p){
            switch (check_stream_specifier(s, st, p + 1)) {
				case  1:
					*p = 0;
            		break;
            	case  0:
            		continue;
            	default:
            		return NULL;
            }
        }

        if (av_opt_find(&cc, t->key, NULL, flags, AV_OPT_SEARCH_FAKE_OBJ) ||
            (codec && codec->priv_class &&
             av_opt_find(&codec->priv_class, t->key, NULL, flags,
                         AV_OPT_SEARCH_FAKE_OBJ))){
            av_dict_set(&ret, t->key, t->value, 0);

        }else if (t->key[0] == prefix &&
                 av_opt_find(&cc, t->key + 1, NULL, flags,
                             AV_OPT_SEARCH_FAKE_OBJ)){
            av_dict_set(&ret, t->key + 1, t->value, 0);
        }

        if (p){
            *p = ':';
        }
    }
    return ret;
}



JNIEXPORT void JNICALL Java_com_danale_video_jni_Decoder_nativeInit(JNIEnv* env, jobject thiz,jint jtype) {

	  DecoderContext *ctx = calloc(1, sizeof(DecoderContext));

	  if(ctx == NULL){
		  return;
	  }

	  //init watermark
	  watermark_init_default();

	  int scan_all_pmts_set = 0;
	  AVDictionaryEntry *t;
	  AVDictionary **opts;
	  int orig_nb_streams;
	  int ret;
	  int err;
	  int i;

	  AVFormatContext *my_ic = avformat_alloc_context();
	  if(!my_ic){
		  return;
	  }
	  av_format_inject_global_side_data(my_ic);
	  AVStream *my_st = avformat_new_stream(my_ic, NULL);
	  if(jtype == 1){
		  ctx->codec = avcodec_find_decoder(AV_CODEC_ID_H264);
		  opts = filter_codec_opts(NULL, AV_CODEC_ID_H264, my_ic, my_ic->streams[0], ctx->codec);
	  }else if(jtype == 4){
		  ctx->codec = avcodec_find_decoder(AV_CODEC_ID_HEVC);
		  opts = filter_codec_opts(NULL, AV_CODEC_ID_HEVC, my_ic, my_ic->streams[0], ctx->codec);
	  }else if(jtype == 3){
		  ctx->codec = avcodec_find_decoder(AV_CODEC_ID_MJPEG);
		  opts = filter_codec_opts(NULL, AV_CODEC_ID_MJPEG, my_ic, my_ic->streams[0], ctx->codec);
	  }

	  if (!av_dict_get(opts, "threads", NULL, 0)){
		  av_dict_set(&opts, "threads", "auto", 0);
	  }
	  av_dict_set(&opts, "refcounted_frames", "1", 0);
	  if (ctx->codec_ctx == NULL) {
		  ctx->codec_ctx	= avcodec_alloc_context3( ctx->codec);
		  //g_codec_ctx->flags2	|= CODEC_FLAG2_CHUNKS;
	  }
	  //初始化解码器
	  ret = avcodec_open2(ctx->codec_ctx, ctx->codec, &opts);

	  if ((t = av_dict_get(opts, "", NULL, AV_DICT_IGNORE_SUFFIX))) {
		  return;
	  }
	  my_ic->streams[0]->discard = AVDISCARD_DEFAULT;
	  //申请内存
	  ctx->src_frame = av_frame_alloc();
	  ctx->dst_frame = av_frame_alloc();
	  // 实时编码
	//  av_opt_set(ctx->codec_ctx->priv_data, "preset", "superfast", 0);
	//  av_opt_set(ctx->codec_ctx->priv_data, "tune", "zerolatency", 0);

	  //将解码器句柄保存到java变量中
	  set_ctx(env, thiz, ctx);
}

JNIEXPORT void JNICALL Java_com_danale_video_jni_Decoder_nativeSetFormat(JNIEnv* env, jobject thiz, jint color_format){
		DecoderContext *ctx = get_ctx(env,thiz);

		if(ctx == NULL){
			return;
		}

		//设置目标类型
		  switch (color_format) {
		  case COLOR_FORMAT_YUV420:
	//		ctx->color_format = PIX_FMT_YUV420P;
			 ctx->color_format = AV_PIX_FMT_YUV420P;
			break;
		  case COLOR_FORMAT_RGB565LE:
	//		ctx->color_format = PIX_FMT_RGB565LE;
			ctx->color_format = AV_PIX_FMT_RGB565LE;
			break;
		  case COLOR_FORMAT_BGR32:
	//		ctx->color_format = PIX_FMT_BGR32;
			ctx->color_format = AV_PIX_FMT_BGR32;
			break;
		  }

}

JNIEXPORT void JNICALL Java_com_danale_video_jni_Decoder_nativeDestroy(JNIEnv* env, jobject thiz) {
	  DecoderContext *ctx = get_ctx(env, thiz);
	  if(ctx == NULL){
		  return;
	  }

	  void watermark_destroy();

	  if(ctx->codec_ctx != NULL){
		  //关闭解码器并释放内存
		  avcodec_close(ctx->codec_ctx);
		  av_free(ctx->codec_ctx);
	  }

	  if(ctx->src_frame != NULL){
		  av_free(ctx->src_frame);
	  }

	  if(ctx->dst_frame != NULL){
		  av_free(ctx->dst_frame);
	  }

	  free(ctx);
	  set_ctx(env, thiz, NULL);
}

JNIEXPORT jint JNICALL Java_com_danale_video_jni_Decoder_consumeNalUnitsFromDirectBuffer(JNIEnv* env, jobject thiz, jobject nal_units, jint num_bytes, jlong pkt_pts) {

	  if(thiz == NULL){
		  return -1;
	  }

	  DecoderContext *ctx = get_ctx(env, thiz);

	  if(ctx == NULL){
		  return -1;
	  }
	  void *buf = NULL;
	  if (nal_units == NULL) {
		D("Received null buffer, sending empty packet to decoder");
		return -1;
	  } else {
		buf = (*env)->GetDirectBufferAddress(env, nal_units);
		if (buf == NULL) {
		  D("Error getting direct buffer address");
		  return -1;
		}
	  }

	  AVPacket packet = {
		  .data = (uint8_t*)buf,
		  .size = num_bytes,
		  .pts = pkt_pts
	  };

	  int frameFinished = 0;
	  //解码

	  if(ctx->codec_ctx == NULL || ctx->src_frame == NULL){
		  return -1;
	  }

	  int res = avcodec_decode_video2(ctx->codec_ctx, ctx->src_frame, &frameFinished, &packet);

	  //如果已经解码出一帧则设置标志量
	  if (frameFinished)
		ctx->frame_ready = 1;

	  return res;
}

//判断是否已经有一帧数据解码完成
JNIEXPORT jboolean JNICALL Java_com_danale_video_jni_Decoder_isFrameReady(JNIEnv* env, jobject thiz) {
	  DecoderContext *ctx = get_ctx(env, thiz);
	  if(ctx != NULL){
		  return ctx->frame_ready ? JNI_TRUE : JNI_FALSE;
	  }else{
		  return JNI_FALSE;
	  }
}

JNIEXPORT jint JNICALL Java_com_danale_video_jni_Decoder_getWidth(JNIEnv* env, jobject thiz) {
	  DecoderContext *ctx = get_ctx(env, thiz);
	  if(ctx != NULL && ctx->codec_ctx != NULL){
		  return ctx->codec_ctx->width;
	  }else{
		  return -1;
	  }
}

JNIEXPORT jint JNICALL Java_com_danale_video_jni_Decoder_getHeight(JNIEnv* env, jobject thiz) {
	  DecoderContext *ctx = get_ctx(env, thiz);
	  if(ctx != NULL && ctx->codec_ctx != NULL){
		  return ctx->codec_ctx->height;
	  }else{
		  return -1;
	  }
}

JNIEXPORT jint JNICALL Java_com_danale_video_jni_Decoder_getOutputByteSize(JNIEnv* env, jobject thiz) {
	  DecoderContext *ctx = get_ctx(env, thiz);
	  if(ctx != NULL && ctx->codec_ctx != NULL){
		  return avpicture_get_size(ctx->color_format, ctx->codec_ctx->width, ctx->codec_ctx->height);
	  }else{
		  return -1;
	  }
}

JNIEXPORT jlong JNICALL Java_com_danale_video_jni_Decoder_decodeFrameToDirectBuffer(JNIEnv* env, jobject thiz, jobject out_buffer) {
	  DecoderContext *ctx = get_ctx(env, thiz);

	  if(ctx == NULL){
		  return -1;
	  }

	  if (!ctx->frame_ready){
		  return -1;
	  }

	  if(ctx->codec_ctx == NULL){
		  return -1;
	  }

	  void *out_buf = (*env)->GetDirectBufferAddress(env, out_buffer);
	  if (out_buf == NULL) {
		D("Error getting direct buffer address");
		return -1;
	  }

	  long out_buf_len = (*env)->GetDirectBufferCapacity(env, out_buffer);


	  int pic_buf_size = avpicture_get_size(ctx->color_format, ctx->codec_ctx->width, ctx->codec_ctx->height);

	  if (out_buf_len < pic_buf_size) {
	     D("Input buffer too small");
	     return -1;
	  }

	//  if(ctx->color_format == PIX_FMT_YUV420P){
	  if(ctx->color_format == AV_PIX_FMT_YUV420P){
		  int yStride = ctx->src_frame->linesize[0];
		  int uVStride = ctx->src_frame->linesize[1];
		  int decWidth = ctx->codec_ctx->width;
		  int decHeight = ctx->codec_ctx->height;
		  int i;

		  if(yStride == 0 || uVStride == 0){
			  return -1;
		  }


		  //复制y数据到buffer
		  for (i=0;i<decHeight;i++)
		  {
			memcpy(out_buf + i*decWidth, ctx->src_frame->data[0] + i * yStride, decWidth);
		  }

		  //复制u数据到buffer
		  for (i=0;i<((decHeight)>>1);i++)
		  {
			memcpy(out_buf + decHeight * decWidth + i * (decWidth >> 1), ctx->src_frame->data[1] + i * uVStride, decWidth >> 1);
		  }

		  //复制v数据到buffer
		  for (i=0;i<((decHeight)>>1);i++)
		  {
			memcpy(out_buf + decHeight * decWidth *5/4 + i * (decWidth >> 1), ctx->src_frame->data[2] + i * uVStride, decWidth >> 1);
		  }


		  //todo add watermark to a frame @zrk
		  YUV_FRAME* wm_frame = calloc(1,sizeof(YUV_FRAME));
		  wm_frame->data = (uint8_t*)out_buf;
		  wm_frame->w=decWidth;
		  wm_frame->h=decHeight;
		  wm_frame->length=decWidth*decHeight*3/2;
		  wm_frame->type=YUV420;
		  waterwatermark_run(wm_frame);

	  }else{
		  if (ctx->convert_ctx == NULL) {
			  ctx->convert_ctx = sws_getContext(ctx->codec_ctx->width, ctx->codec_ctx->height, ctx->codec_ctx->pix_fmt,
				  ctx->codec_ctx->width, ctx->codec_ctx->height, ctx->color_format, SWS_FAST_BILINEAR, NULL, NULL, NULL);
			}

			avpicture_fill((AVPicture*)ctx->dst_frame, (uint8_t*)out_buf, ctx->color_format, ctx->codec_ctx->width,
				ctx->codec_ctx->height);

			sws_scale(ctx->convert_ctx, (const uint8_t**)ctx->src_frame->data, ctx->src_frame->linesize, 0, ctx->codec_ctx->height,
				ctx->dst_frame->data, ctx->dst_frame->linesize);
	  }

	  ctx->frame_ready = 0;

	  if (ctx->src_frame->pkt_pts == AV_NOPTS_VALUE) {
		D("No PTS was passed from avcodec_decode!");
	  }

	  return ctx->src_frame->pkt_pts;
}

JNIEXPORT jint JNICALL Java_com_danale_video_jni_Decoder_copyFrameDataToRGB(JNIEnv* env, jobject thiz, jobject out_buffer){
	DecoderContext *ctx = get_ctx(env, thiz);

	if(ctx == NULL){
		return -1;
	}

	void *out_buf = (*env)->GetDirectBufferAddress(env, out_buffer);
	if (out_buf == NULL) {
	    D("Error getting direct buffer address");
	    return -1;
	}

	long out_buf_len = (*env)->GetDirectBufferCapacity(env, out_buffer);

	int pic_buf_size = avpicture_get_size(ctx->color_format, ctx->codec_ctx->width, ctx->codec_ctx->height);

	if (out_buf_len < pic_buf_size) {
	  D("Input buffer too small");
	  return -1;
	}

	if (ctx->convert_ctx == NULL) {
	  ctx->convert_ctx = sws_getContext(ctx->codec_ctx->width, ctx->codec_ctx->height, ctx->codec_ctx->pix_fmt,
//		  ctx->codec_ctx->width, ctx->codec_ctx->height, PIX_FMT_BGR32, SWS_FAST_BILINEAR, NULL, NULL, NULL);
			  		  ctx->codec_ctx->width, ctx->codec_ctx->height, AV_PIX_FMT_BGR32, SWS_FAST_BILINEAR, NULL, NULL, NULL);
	}

	avpicture_fill((AVPicture*)ctx->dst_frame, (uint8_t*)out_buf, ctx->color_format, ctx->codec_ctx->width,
		ctx->codec_ctx->height);

	sws_scale(ctx->convert_ctx, (const uint8_t**)ctx->src_frame->data, ctx->src_frame->linesize, 0, ctx->codec_ctx->height,
		ctx->dst_frame->data, ctx->dst_frame->linesize);

	return 1;
}


