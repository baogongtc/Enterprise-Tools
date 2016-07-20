/*******************************************************************************
Copyright (C), 2009-2012, Huawei Tech. Co., Ltd.
File name: IHWVideo_Typedef.h
Author & ID: 宋小刚+00133955 张丽萍+00139017 曹俊茂+00103648
Version: 1.00
Date:  2010-03-01
Description: 本文件包括了常用数据类型重定义的宏（windows、linux平台）
Function List:
History:
* Revision 1.00  2010/03/01 10:00:00  songxg+00133955
* 初始版本编码完成
*
* Revision 1.01  2010/03/02 14:15:00  songxg+00133955
* 根据曹俊茂和张丽萍意见添加INT40、UINT40、BOOL类型及将防重定义宏去除
*
* Revision 1.02  2012/02/16 14:15:00  wangmx+00135579
* 视频算法整理接口时统一，增加export和版本信息，同时增加DSP平台的宏定义区分
*******************************************************************************/
#ifndef __IHWVIDEO_TYPEDEF_H__
#define __IHWVIDEO_TYPEDEF_H__

#ifdef __cplusplus
#if __cplusplus
extern "C" {
#endif    /* __cpluscplus*/
#endif    /* __cpluscplus*/

/******************************************************************************
*                             数据类型重定义
*******************************************************************************/
// 整数数据类型重定义
typedef signed char        INT8;
typedef signed short       INT16;
typedef signed int         INT32;
typedef unsigned char      UINT8;
typedef unsigned short     UINT16;
typedef unsigned int       UINT32;

#if defined(__GNUC__) || defined(__TMS320C6X_PLATFORM__)
typedef          long long INT64;
typedef unsigned long long UINT64;
//typedef         signed int intptr_t;
#else
typedef          __int64   INT64;
typedef unsigned __int64   UINT64;
#endif

#ifdef __TMS320C6X_PLATFORM__  //__TMS320C6X__
// 40位数据类型重定义, 定义仅限于TI DSP平台使用
typedef unsigned long       UINT40;
typedef long                INT40;
#else
// 40位数据类型重定义, 定义仅限于VC平台使用
typedef INT64               UINT40;
typedef INT64               INT40;
#endif

// 浮点数据类型重定义
typedef float              FLOAT32;
typedef double             FLOAT64;

// 布尔数据类型重定义
typedef char               BOOL8;
typedef short              BOOL16;
typedef int                BOOL32;

#ifndef TRUE
#define TRUE               1
#endif

#ifndef FALSE
#define FALSE              0
#endif

#define OUTPUT_TEST_ARM              0

/******************************************************************************
*                             动态库静态库相关配置
*******************************************************************************/
#if defined(_MSC_VER)

#if defined(HW_VIDEO_ALG_EXPORTS_DLL)
#define HW_VIDEO_ALG_EXPORT_API extern __declspec(dllexport)
#elif defined(HW_VIDEO_ALG_EXPORTS_LIB)
#define HW_VIDEO_ALG_EXPORT_API extern __declspec(dllimport)
#else 
#define HW_VIDEO_ALG_EXPORT_API 
#endif

#define inline __inline

#elif defined(__GNUC__)
#define HW_VIDEO_ALG_EXPORT_API 
#else
#define HW_VIDEO_ALG_EXPORT_API 
#endif

/******************************************************************************
*                      版本信息、log级别、回调函数等各算法共用定义
*******************************************************************************/
// Version
#define IHWVIDEO_ALG_VERSION_LENGTH   48      // 版本号数组长度
#define IHWVIDEO_ALG_TIME_LENGTH      28      // 模块编译时间数组长2011-6-10 13:14度
typedef struct tagIHWVIDEO_ALG_VERSION
{
    INT8    cVersionChar[IHWVIDEO_ALG_VERSION_LENGTH];   // library version
    INT8    cReleaseTime[IHWVIDEO_ALG_TIME_LENGTH];      // compiled time   
    UINT32  uiCompileVersion;                       // compiler version
}IHWVIDEO_ALG_VERSION_STRU;


// LOG等级
typedef enum tagIHWVIDEO_ALG_LOG_LEVEL
{
    IHWVIDEO_ALG_LOG_ERROR = 0,   // 出错时的LOG信息
    IHWVIDEO_ALG_LOG_WARNING,     // 报警时的LOG信息
    IHWVIDEO_ALG_LOG_INFO,        // 打印的辅助信息
    IHWVIDEO_ALG_LOG_DEBUG        // 打印的调试信息，用于开发人员调试

}IHWVIDEO_ALG_LOG_LEVEL;

// 所有CODEC CMD需统一
typedef enum tagIHWVIDEO_ALG_CMD
{
    IHWVIDEO_ALG_CMD_SETPARAM = 0,   // 设置动态参数
    IHWVIDEO_ALG_CMD_GETPARAM        // 获取动态参数
    
}IHWVIDEO_ALG_CMD;


/******************************************************************************
* 说明   :  内存分配回调函数类型
*
* 参数   :  uiChannelID - [in] 通道ID
*           uiSize      - [in] 内存大小
*
* 返回值 :  成功返回内存地址
*           失败返回NULL
*******************************************************************************/
typedef void *(* IHWVIDEO_ALG_MALLOC_FXN)( UINT32 uiChannelID, UINT32 uiSize);


/******************************************************************************
* 说明   :  内存释放回调函数类型
*
* 参数   :  uiChannelID - [in] 通道ID
*           pMem        - [in] 内存地址
*
* 返回值 :  无
*******************************************************************************/
typedef void  (* IHWVIDEO_ALG_FREE_FXN)( UINT32 uiChannelID, void *pMem);

/******************************************************************************
* 说明   :  日志回调函数类型
*
* 参数   :  uiChannelID - [in]  通道ID
*           eLevel      - [in] 设置日志级别
*           pszMsg      - [in] 日志的内容(字符串)
*           ...         - [in] 可变参数
*
* 返回值 :  无
*******************************************************************************/
typedef void  (* IHWVIDEO_ALG_LOG_FXN)( UINT32 uiChannelID, IHWVIDEO_ALG_LOG_LEVEL eLevel, INT8 *pszMsg, ...);


#ifdef __cplusplus
#if __cplusplus
}
#endif    /* __cpluscplus*/
#endif    /* __cpluscplus*/

#endif /**< __IHWVIDEO_TYPEDEF_H__ */

