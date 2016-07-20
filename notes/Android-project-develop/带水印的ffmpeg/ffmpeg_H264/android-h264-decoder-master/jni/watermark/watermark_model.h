//
// Created by admin on 2016/4/14.
//

#ifndef ALIVEAPP_MODEL_H
#define ALIVEAPP_MODEL_H

#include <stdint.h>
#include <stdbool.h>
typedef struct _rgb{
    uint8_t  _r;
    uint8_t _g;
    uint8_t _b;
}RGB;

typedef struct _YUV{
    uint8_t _Y;
    uint8_t _Cb;
    uint8_t _Cr;
}YUV;

typedef enum _yuv_type{
    YUV420,
    YUV422
}YUV_TYPE ;

typedef struct _frame_yuv{
    uint8_t *data;
    int length;
    int w;
    int h;
    YUV_TYPE type;
}YUV_FRAME;

bool rgbEqual(RGB* a,RGB* b);
bool yuvEqual(YUV* a,YUV* b);
bool frameCheck(YUV_FRAME* frame);

#endif //ALIVEAPP_MODEL_H
