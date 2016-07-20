//
// Created by admin on 2016/4/12.
//

#ifndef ALIVEAPP_LLOG_H
#define ALIVEAPP_LLOG_H

#include <android/log.h>


#define LOG_I(fmt,...) __android_log_print(ANDROID_LOG_INFO,"alive",fmt,__VA_ARGS__)
#define LOG_E(fmt,...) __android_log_print(ANDROID_LOG_ERROR,"alive",fmt,__VA_ARGS__)

#endif //ALIVEAPP_LLOG_H
