#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>

#include "libavformat/avformat.h"
#include "libavcodec/avcodec.h"
#include "libswscale/swscale.h"

#include "h264decoder.h"
//#include "../debug.h"
#include <android/log.h>

#define COLOR_FORMAT_YUV420		0
#define COLOR_FORMAT_RGB565LE	1
#define COLOR_FORMAT_BGR32		2

#define  dbg(x...)  __android_log_print(ANDROID_LOG_INFO, "DanaleDecoder", x)

static void av_log_callback( void *ptr, int level, const char *fmt, __va_list vl )
{
	static char line[1024] = { 0 };
	vsnprintf( line, sizeof(line), fmt, vl );
	dbg( line );
}


DecoderContext* H264Decoder_init(int color_format)
{
	av_register_all();
	
	av_log_set_callback( av_log_callback );

	DecoderContext *ctx = calloc( 1, sizeof(DecoderContext) );

//	dbg( "Creating native H264 decoder context" );

	switch ( color_format )
	{
	case COLOR_FORMAT_YUV420:
		ctx->color_format = PIX_FMT_YUV420P;
		break;
	case COLOR_FORMAT_RGB565LE:
		ctx->color_format = PIX_FMT_RGB565LE;
		break;
	case COLOR_FORMAT_BGR32:
		ctx->color_format = PIX_FMT_BGR32;
		break;
	}

	ctx->codec	= avcodec_find_decoder( CODEC_ID_H264 );
	ctx->codec_ctx	= avcodec_alloc_context3( ctx->codec );

	ctx->codec_ctx->pix_fmt = PIX_FMT_YUV420P;
	ctx->codec_ctx->flags2	|= CODEC_FLAG2_CHUNKS;

	ctx->src_frame	= av_frame_alloc();
	ctx->dst_frame	= av_frame_alloc();

	avcodec_open2( ctx->codec_ctx, ctx->codec, NULL );

	return ctx;
}


void H264Decoder_destroy(DecoderContext *ctx)
{
//	dbg( "Destroying native H264 decoder context" );
	avcodec_close( ctx->codec_ctx );
	av_free( ctx->codec_ctx );
	av_free( ctx->src_frame );
	av_free( ctx->dst_frame );
	free( ctx );
}


int H264Decoder_consumeNalUnitsFromDirectBuffer(DecoderContext *ctx, uint8_t * nal_units, int num_bytes, int64_t pkt_pts )
{
	if ( nal_units == NULL ) {
		dbg( "Received null buffer, sending empty packet to decoder" );
		return(-1);
	}

	AVPacket packet = {
		.data	= (uint8_t *) nal_units,
		.size	= num_bytes,
		.pts	= pkt_pts
	};

	int	frameFinished	= 0;
	int	res		= avcodec_decode_video2( ctx->codec_ctx, ctx->src_frame, &frameFinished, &packet );

	if ( frameFinished )
		ctx->frame_ready = true;

	return(res);
}


_Bool H264Decoder_isFrameReady(DecoderContext *ctx)
{
	return ctx->frame_ready;
}


int H264Decoder_getWidth(DecoderContext *ctx)
{
	return ctx->codec_ctx->width;
}

int H264Decoder_getHeight(DecoderContext *ctx)
{
	return ctx->codec_ctx->height;
}

int H264Decoder_getOutputByteSize(DecoderContext *ctx)
{
	return (avpicture_get_size( ctx->color_format, ctx->codec_ctx->width, ctx->codec_ctx->height ) );
}

int64_t H264Decoder_decodeFrameToDirectBuffer(DecoderContext *ctx, uint8_t *out_buf, long out_buf_len)
{
	if ( !ctx->frame_ready )
		return(-1);

	if ( out_buf == NULL )
	{
		dbg( "Error getting direct buffer address" );
		return(-1);
	}

	int pic_buf_size = avpicture_get_size( ctx->color_format, ctx->codec_ctx->width, ctx->codec_ctx->height );

	if ( out_buf_len < pic_buf_size ) {
		dbg( "Input buffer too small" );
		return(-1);
	}

	if ( ctx->color_format == COLOR_FORMAT_YUV420 ) {
		memcpy( out_buf, ctx->src_frame->data, pic_buf_size );
	}else  {
		if ( ctx->convert_ctx == NULL ) {
			ctx->convert_ctx = sws_getContext( ctx->codec_ctx->width, ctx->codec_ctx->height, ctx->codec_ctx->pix_fmt, ctx->codec_ctx->width, ctx->codec_ctx->height, ctx->color_format, SWS_FAST_BILINEAR, NULL, NULL, NULL );
		}
		avpicture_fill( (AVPicture *) ctx->dst_frame, (uint8_t *) out_buf, ctx->color_format, ctx->codec_ctx->width, ctx->codec_ctx->height );
		sws_scale( ctx->convert_ctx, (const uint8_t * *) ctx->src_frame->data, ctx->src_frame->linesize, 0, ctx->codec_ctx->height, ctx->dst_frame->data, ctx->dst_frame->linesize );
	}

	ctx->frame_ready = false;

	if ( ctx->src_frame->pkt_pts == AV_NOPTS_VALUE ) {
		dbg( "No PTS was passed from avcodec_decode!" );
	}

	return (ctx->src_frame->pkt_pts);
}