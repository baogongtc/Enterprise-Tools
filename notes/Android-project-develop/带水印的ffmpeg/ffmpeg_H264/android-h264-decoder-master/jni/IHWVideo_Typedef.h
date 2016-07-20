/*******************************************************************************
Copyright (C), 2009-2012, Huawei Tech. Co., Ltd.
File name: IHWVideo_Typedef.h
Author & ID: ��С��+00133955 ����Ƽ+00139017 �ܿ�ï+00103648
Version: 1.00
Date:  2010-03-01
Description: ���ļ������˳������������ض���ĺ꣨windows��linuxƽ̨��
Function List:
History:
* Revision 1.00  2010/03/01 10:00:00  songxg+00133955
* ��ʼ�汾�������
*
* Revision 1.01  2010/03/02 14:15:00  songxg+00133955
* ���ݲܿ�ï������Ƽ������INT40��UINT40��BOOL���ͼ������ض����ȥ��
*
* Revision 1.02  2012/02/16 14:15:00  wangmx+00135579
* ��Ƶ�㷨����ӿ�ʱͳһ������export�Ͱ汾��Ϣ��ͬʱ����DSPƽ̨�ĺ궨������
*******************************************************************************/
#ifndef __IHWVIDEO_TYPEDEF_H__
#define __IHWVIDEO_TYPEDEF_H__

#ifdef __cplusplus
#if __cplusplus
extern "C" {
#endif    /* __cpluscplus*/
#endif    /* __cpluscplus*/

/******************************************************************************
*                             ���������ض���
*******************************************************************************/
// �������������ض���
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
// 40λ���������ض���, ���������TI DSPƽ̨ʹ��
typedef unsigned long       UINT40;
typedef long                INT40;
#else
// 40λ���������ض���, ���������VCƽ̨ʹ��
typedef INT64               UINT40;
typedef INT64               INT40;
#endif

// �������������ض���
typedef float              FLOAT32;
typedef double             FLOAT64;

// �������������ض���
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
*                             ��̬�⾲̬���������
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
*                      �汾��Ϣ��log���𡢻ص������ȸ��㷨���ö���
*******************************************************************************/
// Version
#define IHWVIDEO_ALG_VERSION_LENGTH   48      // �汾�����鳤��
#define IHWVIDEO_ALG_TIME_LENGTH      28      // ģ�����ʱ�����鳤2011-6-10 13:14��
typedef struct tagIHWVIDEO_ALG_VERSION
{
    INT8    cVersionChar[IHWVIDEO_ALG_VERSION_LENGTH];   // library version
    INT8    cReleaseTime[IHWVIDEO_ALG_TIME_LENGTH];      // compiled time   
    UINT32  uiCompileVersion;                       // compiler version
}IHWVIDEO_ALG_VERSION_STRU;


// LOG�ȼ�
typedef enum tagIHWVIDEO_ALG_LOG_LEVEL
{
    IHWVIDEO_ALG_LOG_ERROR = 0,   // ����ʱ��LOG��Ϣ
    IHWVIDEO_ALG_LOG_WARNING,     // ����ʱ��LOG��Ϣ
    IHWVIDEO_ALG_LOG_INFO,        // ��ӡ�ĸ�����Ϣ
    IHWVIDEO_ALG_LOG_DEBUG        // ��ӡ�ĵ�����Ϣ�����ڿ�����Ա����

}IHWVIDEO_ALG_LOG_LEVEL;

// ����CODEC CMD��ͳһ
typedef enum tagIHWVIDEO_ALG_CMD
{
    IHWVIDEO_ALG_CMD_SETPARAM = 0,   // ���ö�̬����
    IHWVIDEO_ALG_CMD_GETPARAM        // ��ȡ��̬����
    
}IHWVIDEO_ALG_CMD;


/******************************************************************************
* ˵��   :  �ڴ����ص���������
*
* ����   :  uiChannelID - [in] ͨ��ID
*           uiSize      - [in] �ڴ��С
*
* ����ֵ :  �ɹ������ڴ��ַ
*           ʧ�ܷ���NULL
*******************************************************************************/
typedef void *(* IHWVIDEO_ALG_MALLOC_FXN)( UINT32 uiChannelID, UINT32 uiSize);


/******************************************************************************
* ˵��   :  �ڴ��ͷŻص���������
*
* ����   :  uiChannelID - [in] ͨ��ID
*           pMem        - [in] �ڴ��ַ
*
* ����ֵ :  ��
*******************************************************************************/
typedef void  (* IHWVIDEO_ALG_FREE_FXN)( UINT32 uiChannelID, void *pMem);

/******************************************************************************
* ˵��   :  ��־�ص���������
*
* ����   :  uiChannelID - [in]  ͨ��ID
*           eLevel      - [in] ������־����
*           pszMsg      - [in] ��־������(�ַ���)
*           ...         - [in] �ɱ����
*
* ����ֵ :  ��
*******************************************************************************/
typedef void  (* IHWVIDEO_ALG_LOG_FXN)( UINT32 uiChannelID, IHWVIDEO_ALG_LOG_LEVEL eLevel, INT8 *pszMsg, ...);


#ifdef __cplusplus
#if __cplusplus
}
#endif    /* __cpluscplus*/
#endif    /* __cpluscplus*/

#endif /**< __IHWVIDEO_TYPEDEF_H__ */

