#ifndef _H264_DECODER_H_
#define _H264_DECODER_H_

#include <stdbool.h>
#include <inttypes.h>

#define COLOR_FORMAT_YUV420	0
#define COLOR_FORMAT_RGB565LE	1
#define COLOR_FORMAT_BGR32	2

#ifdef __cplusplus
extern "C"
{
#endif

typedef struct DecoderContext {
	int			color_format;
	struct AVCodec		*codec;
	struct AVCodecContext	*codec_ctx;
	struct AVFrame		*src_frame;
	struct AVFrame		*dst_frame;
	struct SwsContext	*convert_ctx;
	_Bool			frame_ready;
} DecoderContext;

DecoderContext* H264Decoder_init(int color_format);
void H264Decoder_destroy(DecoderContext *ctx);
int H264Decoder_consumeNalUnitsFromDirectBuffer(DecoderContext *ctx, uint8_t * nal_units, int num_bytes, int64_t pkt_pts );
_Bool H264Decoder_isFrameReady(DecoderContext *ctx);
int H264Decoder_getWidth(DecoderContext *ctx);
int H264Decoder_getHeight(DecoderContext *ctx);
int H264Decoder_getOutputByteSize(DecoderContext *ctx);
int64_t H264Decoder_decodeFrameToDirectBuffer(DecoderContext *ctx, uint8_t *out_buf, long out_buf_len);


#ifdef __cplusplus
}
#endif
#endif
