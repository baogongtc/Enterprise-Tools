//
// Created by admin on 2016/4/14.
//

#ifndef ALIVEAPP_MARK_H
#define ALIVEAPP_MARK_H

#include "watermark_model.h"
#include "watermark_defs.h"

#define CACHE_SIZE 1024

void watermark_init(YUV_FRAME *watermark, RGB *trans_color, int cacheSize);
void watermark_init_default();
int waterwatermark_run(YUV_FRAME *srcFrame);
void watermark_destroy();

#endif //ALIVEAPP_MARK_H
