
include $(CLEAR_VARS)
LOCAL_MODULE    := faac
LOCAL_C_INCLUDES :=      							\
				$(LOCAL_PATH)/libfaac				\
				$(LOCAL_PATH)/libfaac/kis_fft

LOCAL_SRC_FILES := 					 				\
				libfaac/kiss_fft/kiss_fft.c			\
				libfaac/kiss_fft/kiss_fftr.c		\
				libfaac/aacquant.c					\
				libfaac/backpred.c					\
				libfaac/bitstream.c					\
				libfaac/channels.c					\
				libfaac/fft.c						\
				libfaac/filtbank.c					\
				libfaac/frame.c						\
				libfaac/huffman.c					\
				libfaac/ltp.c						\
				libfaac/midside.c					\
				libfaac/psychkni.c					\
				libfaac/tns.c						\
				libfaac/util.c						

include $(BUILD_STATIC_LIBRARY)

include $(CLEAR_VARS)
LOCAL_MODULE    := faad
LOCAL_C_INCLUDES :=      							\
				$(LOCAL_PATH)/libfaad				\
				$(LOCAL_PATH)/libfaad/codebook		\

LOCAL_SRC_FILES := 					 						\				
				libfaad/bits.c			\
				libfaad/cfft.c			\
				libfaad/common.c		\
				libfaad/decoder.c		\
				libfaad/drc.c			\
				libfaad/drm_dec.c		\
				libfaad/error.c			\
				libfaad/filtbank.c		\
				libfaad/hcr.c			\
				libfaad/huffman.c		\
				libfaad/ic_predict.c	\
				libfaad/is.c			\
				libfaad/lt_predict.c	\
				libfaad/mdct.c			\
				libfaad/mp4.c			\
				libfaad/ms.c			\
				libfaad/output.c		\
				libfaad/pns.c			\
				libfaad/ps_dec.c		\
				libfaad/ps_syntax.c		\
				libfaad/pulse.c			\
				libfaad/rvlc.c			\
				libfaad/sbr_dct.c		\
				libfaad/sbr_dec.c		\
				libfaad/sbr_e_nf.c		\
				libfaad/sbr_fbt.c		\
				libfaad/sbr_hfadj.c		\
				libfaad/sbr_hfgen.c		\
				libfaad/sbr_huff.c		\
				libfaad/sbr_qmf.c		\
				libfaad/sbr_syntax.c	\
				libfaad/sbr_tf_grid.c	\
				libfaad/specrec.c		\
				libfaad/ssr_fb.c		\
				