//
// Created by admin on 2016/4/14.
//

#include "watermark_mark.h"
#include "LogoArray.h"
#include <malloc.h>
#include <memory.h>
#include <stdbool.h>

#define KR 0.299
#define KG 0.587
#define KB 0.114

typedef struct _wm_cache{
    YUV *yuv;
    int *cursor;
    bool usable;
    int pointer;
}Wm_cache;

typedef struct _watermark{
    YUV_FRAME* wm_frame;
    RGB* trans_color;
    YUV* yuv_color;
    Wm_cache* cache;
    int offsetInSrc_x;
    int offsetInSrc_y;
}watermark;
static watermark *sWaterMark;

YUV *formatColor(RGB *pRgb);

void watermark_init(YUV_FRAME *mark, RGB *trans_color, int cacheSize){
    sWaterMark = (watermark *)calloc(1,sizeof(watermark));
    if(!frameCheck(mark)){
        return;
    }

    sWaterMark->wm_frame=mark;
    sWaterMark->trans_color=trans_color;
    sWaterMark->yuv_color=formatColor(trans_color);
    sWaterMark->cache=(Wm_cache*)calloc(1,sizeof(Wm_cache));
    sWaterMark->cache->cursor = (int*)calloc(cacheSize, sizeof(int));
    sWaterMark->cache->yuv = (YUV*)calloc(cacheSize, sizeof(YUV));
    sWaterMark->cache->usable=false;
    sWaterMark->cache->pointer==0;


}

YUV *formatColor(RGB *pRgb) {
    YUV* yuv = calloc(1, sizeof(YUV));
    yuv->_Y = (uint8_t)  (KR*pRgb->_r + KG*pRgb->_g + KB*pRgb->_b);
    //yuv->_Cb = (uint8_t) (0.564*(pRgb->_b- yuv->_Y));
	yuv->_Cb = (uint8_t) (-0.148*pRgb->_r - 0.291*pRgb->_g +0.439*pRgb->_b+128);
    //yuv->_Cr = (uint8_t) (0.713*pRgb->_r - yuv->_Y);
	yuv->_Cr = (uint8_t) (0.439*pRgb->_r -0.368*pRgb->_g - 0.071*pRgb->_b+128);
    return yuv;
}

void watermark_init_default(){
    RGB *transcolor = (RGB*)calloc(1, sizeof(RGB));
    transcolor->_r=0;
    transcolor->_g=0;
    transcolor->_b=0;
    int w=360;
    int h=360;


    YUV_FRAME* frame = (YUV_FRAME*)calloc(1, sizeof(YUV_FRAME));

    int cacheSize = w*h*3/2;
    int wh=w*h;
    frame->w=w;
    frame->h=h;
    frame->length=w*h*3/2;
    frame->type=YUV420;
    uint8_t *data=(uint8_t*)calloc(frame->length, sizeof(uint8_t));
//    memcpy(data,watermark_y,wh);
    for(int i=0;i<wh;i++){
    	if(watermark_y[i]<240){
    		data[i]=(uint8_t)(watermark_y[i]);
    	}else{
    		data[i]=(uint8_t)255;
    	}
    }

    memcpy(data + wh,watermark_u,wh/4);

    memcpy(data+wh*5/4,watermark_v,wh/4);
    frame->data=data;
    watermark_init(frame,transcolor,cacheSize);
}

YUV getYuv420(YUV_FRAME *pYuv, int i,int w,int h);

void putCache(int index, YUV yuv);

/**
 * yuv1 target yuv
 * yuv2 reference yuv
 */
bool selectable(YUV* yuv1,YUV* yuv2){
	//transparent color
	if(yuv1->_Y==0)
		return false;

	if(yuv1->_Y!=yuv2->_Y)
		return true;
};

int waterwatermark_run(YUV_FRAME *srcFrame){
    if(!sWaterMark->cache->usable){
        int len = sWaterMark->wm_frame->w*sWaterMark->wm_frame->h;
        YUV tyuv;
        for(int i=0;i<len;i++){
            tyuv = getYuv420(sWaterMark->wm_frame, i,sWaterMark->wm_frame->w,sWaterMark->wm_frame->h);
            if(selectable(&tyuv,sWaterMark->yuv_color)){
                putCache(i,tyuv);
            }
        }
        sWaterMark->cache->usable=true;
    }

    int offset_x = (srcFrame->w-sWaterMark->wm_frame->w)/2;
    int offset_y = (srcFrame->h-sWaterMark->wm_frame->h)/2;
    sWaterMark->offsetInSrc_x=offset_x;
    sWaterMark->offsetInSrc_y=offset_y;

    for(int i=0;i<sWaterMark->cache->pointer;i++){
        int index =sWaterMark->cache->cursor[i];
        YUV wm_yuv = sWaterMark->cache->yuv[i];
//        YUV src_yuv = getYuv420(srcFrame,index+sWaterMark->offsetInSrc);
        int x=index%sWaterMark->wm_frame->w;
        int y=index/sWaterMark->wm_frame->w;
        int src_x = x+sWaterMark->offsetInSrc_x;
        int src_y = y+sWaterMark->offsetInSrc_y;
//        int i_src = x+(y+sWaterMark->offsetInSrc)*srcFrame->w;

        srcFrame->data[src_x+srcFrame->w*src_y]=wm_yuv._Y;
        srcFrame->data[(src_x>>1)+(src_y>>1)*(srcFrame->w>>1)+srcFrame->w*srcFrame->h]=wm_yuv._Cb;
        srcFrame->data[(src_x>>1)+(src_y>>1)*(srcFrame->w>>1)+srcFrame->w*srcFrame->h*5/4]=wm_yuv._Cr;
    }

    return NO_ERR;
}

void putCache(int index, YUV yuv) {
    sWaterMark->cache->cursor[sWaterMark->cache->pointer]=index;
    sWaterMark->cache->yuv[sWaterMark->cache->pointer]=yuv;
    sWaterMark->cache->pointer++;
}

YUV getYuv420(YUV_FRAME *pYuv, int i,int w,int h) {
    YUV yuv;
    yuv._Y = pYuv->data[i];
    int x = i%w;
    int y = i/w;
    yuv._Cb = pYuv->data[pYuv->w*pYuv->h+x/2+(y/2)*(w/2)];
    yuv._Cr = pYuv->data[pYuv->w*pYuv->h*5/4+x/2+(y/2)*(w/2)];
    return yuv;
}

void watermark_destroy(){
    free(sWaterMark->cache->yuv);
    free(sWaterMark->cache->cursor);
    sWaterMark->cache->pointer=0;
    sWaterMark->cache->usable=false;
    free(sWaterMark->cache);
    free(sWaterMark->wm_frame->data);
    free(sWaterMark->wm_frame);
    free(sWaterMark->trans_color);
    free(sWaterMark->yuv_color);
    free(sWaterMark);
}
