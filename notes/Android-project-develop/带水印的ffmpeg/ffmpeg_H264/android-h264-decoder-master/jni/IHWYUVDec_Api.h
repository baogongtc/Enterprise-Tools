#ifndef __IHWYUVDEC_API_H__  /* Macro sentry to avoid redundant including */
#define __IHWYUVDEC_API_H__

#ifdef __cplusplus
extern "C"{
#endif 

#include "IHWVideo_Typedef.h"

typedef void* IHYUVDEC_HANDLE;   // ���������������������������

// ������������������������������
typedef enum
{
	DECODER_INVALID = 0x00224466,   // ������������������������������
	DECODER_VALID   = 0x11335577,   // ������������������������������������������������

}DECODER_STATUS;

typedef enum tagHWYUVD_DECODESTATUS
{
    IHYUVD_GETDISPLAY     = 0,
    IHYUVD_NEED_MORE_BITS,
    IHYUVD_NO_PICTURE,
    IHYUVD_ERR_HANDLE
} HWYUVD_DECODESTATUS;

typedef struct tagIHYUVDEC_OUTARGS
{
    UINT32              uiChannelID;// [out] ��������ID��������������������������������������
    UINT32              uiBytsConsumed;

    UINT64              uiTimeStamp; 

    UINT32              uiDecWidth;
    UINT32              uiDecHeight;
	UINT32              uiYStride;
    UINT32              uiUVStride;
#if OUTPUT_TEST_ARM
    UINT32              uiCropLeft;
    UINT32              uiCropTop;
    UINT32              uiCropWidth;
    UINT32              uiCropHeight;
#endif

	UINT8               *pucOutYUV[3];// YUV�������������������������������YUV
    
	// bitlen
	UINT32              uiCodingBytesOfCurFrm;    

	// vui
	UINT32	            uiAspectRatioIdc;
    UINT32              uiSarWidth;
	UINT32	            uiSarHeight;

	// vps
	UINT32              uiVpsNumUnitsInTick;
	UINT32              uiVpsTimeScale;
    // errorinfo
    BOOL32              bIsError;
}IHYUVDEC_OUTARGS;

#ifdef __cplusplus
}
#endif
#endif

