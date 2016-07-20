LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := decoder
LOCAL_SRC_FILES := decoder.c \
				watermark/watermark_defs.c \
				watermark/watermark_mark.c \
				watermark/watermark_model.c \

ifeq ($(TARGET_ARCH_ABI),armeabi-v7a)
	LOCAL_C_INCLUDES := $(LOCAL_C_INCLUDES) $(LOCAL_PATH)/ffmpeg-android/armv7-a/include
	LOCAL_LDFLAGS := -L$(LOCAL_PATH)/ffmpeg-android/armv7-a/lib
endif

ifeq ($(TARGET_ARCH_ABI),armeabi)
	LOCAL_C_INCLUDES := $(LOCAL_C_INCLUDES) $(LOCAL_PATH)/ffmpeg-android/armv5te/include
	LOCAL_LDFLAGS := -L$(LOCAL_PATH)/ffmpeg-android/armv5te/lib
endif

ifeq ($(TARGET_ARCH_ABI),x86)
	LOCAL_C_INCLUDES := $(LOCAL_C_INCLUDES) $(LOCAL_PATH)/ffmpeg-android/i686/include
	LOCAL_LDFLAGS := -L$(LOCAL_PATH)/ffmpeg-android/i686/lib
endif

LOCAL_C_INCLUDES += $(LOCAL_C_INCLUDES) $(LOCAL_PATH)/watermark

LOCAL_CFLAGS := -std=c99 -Wall -fvisibility=default
LOCAL_LDFLAGS := $(LOCAL_LDFLAGS) -Wl,--gc-sections 
LOCAL_LDLIBS := -llog -lavformat -lavcodec -lswscale -lavutil 

include $(BUILD_SHARED_LIBRARY)
