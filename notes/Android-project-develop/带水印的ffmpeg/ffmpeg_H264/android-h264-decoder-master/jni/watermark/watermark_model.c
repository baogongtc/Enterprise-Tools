//
// Created by admin on 2016/4/14.
//

#include "watermark_model.h"

bool rgbEqual(RGB* a,RGB* b){
    if(a==NULL || b==NULL)
        return false;
    return a->_r==b->_r && a->_g==b->_g && a->_b==b->_b;
}
bool yuvEqual(YUV* a,YUV* b){
    if(a==NULL || b==NULL)
        return false;
    return a->_Cb==b->_Cb && a->_Cr==b->_Cr;
}
bool frameCheck(YUV_FRAME* frame){
    //todo more check at length

    return frame!=NULL;
}
