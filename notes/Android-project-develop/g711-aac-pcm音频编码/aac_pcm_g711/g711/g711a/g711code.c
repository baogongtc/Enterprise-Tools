#include <jni.h>
#include <android/log.h>
#include <stdio.h>
#include <malloc.h>
#include <stdbool.h>
#include "audio/faac.h"
#include "audio/faaccfg.h"
#include "audio/faad.h"

#define LOG_TAG "AAC_JNI"
#define LOGD(...) __android_log_print(ANDROID_LOG_DEBUG, LOG_TAG, __VA_ARGS__)
#define LOGI(...) __android_log_print(ANDROID_LOG_INFO, LOG_TAG, __VA_ARGS__)

JNIEXPORT void JNICALL Java_com_ff_aacdemo_jni_G711Coder_g711Topcm
  (JNIEnv *env, jobject obj){
	FILE* fpOut = fopen("/storage/emulated/0/t/pcm_to_g711.pcm", "wb");
	FILE* fpIn = fopen("/storage/emulated/0/t/pcm_to_g711.g711", "rb");

	int g711_BufferSize = 1024;
	char g711_Buffer[g711_BufferSize];

	int len;
	while((len = fread(g711_Buffer, 1, g711_BufferSize, fpIn)) > 0){
		LOGD("g711topcm length = %d", len);
		char pcmBuffer[len]; //TODO  len * 2 应该是没有错误的...
		int pcmbufsize = g711_decode(pcmBuffer, g711_Buffer, len);
		fwrite(pcmBuffer, 1, pcmbufsize, fpOut);
	}
	LOGD("g711topcm end");
	fclose(fpIn);
	fclose(fpOut);
}

JNIEXPORT void JNICALL Java_com_ff_aacdemo_jni_G711Coder_pcmTog711
  (JNIEnv *env, jobject obj){
	FILE* fpIn = fopen("/storage/emulated/0/t/pcm_to_g711.pcm", "rb");
	FILE* fpOut = fopen("/storage/emulated/0/t/pcm_to_g711.g711", "wb");

	LOGD("pcmTog711 1");

	int pcm_BufferSize = 1024;
	char pcm_Buffer[pcm_BufferSize];

	int len;
	while((len = fread(pcm_Buffer, 1, pcm_BufferSize, fpIn)) > 0){
		LOGD("pcmTog711 length = %d", len);
		char g711Buffer[len];
		int  g711BufSize = g711_encode(g711Buffer, pcm_Buffer, len);
		fwrite(g711Buffer, 1, g711BufSize, fpOut);
	}
	LOGD("pcmTog711 end");
	fclose(fpIn);
	fclose(fpOut);
}

JNIEXPORT jint JNICALL Java_com_ff_aacdemo_jni_G711Coder_g711ToAAC
  (JNIEnv *env, jobject obj){
	unsigned long sampleRate = 8000;
	unsigned int channels = 1;
	unsigned int pcmBitSize = 16;// 量化位数

	long inputSamples;
	long maxOutputBytes;
	faacEncHandle codeHandle = faacEncOpen(sampleRate, channels, &inputSamples, &maxOutputBytes);
	int maxInputBytes = inputSamples * pcmBitSize / 8;
	LOGD("inputSamples = %ld, maxOutputBytes = %ld, maxInputBytes = %d", inputSamples, maxOutputBytes, maxInputBytes);

	faacEncConfigurationPtr pConfigPtr = faacEncGetCurrentConfiguration(codeHandle);
	pConfigPtr->inputFormat = FAAC_INPUT_16BIT;//输入数据类型
	pConfigPtr->outputFormat = 1; //0-Raw ; 1-ADTS
	pConfigPtr->useTns= 0;//瞬时噪声定形(temporal noise shaping，TNS)滤波器
	pConfigPtr->useLfe= 0;//低频效果
	pConfigPtr->aacObjectType= LOW; //编码类型
	pConfigPtr->shortctl=SHORTCTL_NORMAL;
	pConfigPtr->quantqual=50; // 编码质量
	pConfigPtr->mpegVersion = MPEG2;
	faacEncSetConfiguration(codeHandle, pConfigPtr);

	int m_nMaxInputBytes = inputSamples * pcmBitSize / 8;
	char pbPCMBuffer[m_nMaxInputBytes]; // 读取PCM数据
	char pbAACBuffer[maxOutputBytes];
	LOGD("g711topcm m_nMaxInputBytes = %d", m_nMaxInputBytes);
	LOGD("g711topcm maxOutputBytes = %d", maxOutputBytes);

	FILE* fpIn = fopen("/storage/emulated/0/t/pcm_to_g711.g711","rb");
	FILE* fpOut = fopen("/storage/emulated/0/t/pcm_to_g711.aac", "wb");

	size_t g711_BufferSize = m_nMaxInputBytes / 2;
	LOGD("g711topcm g711_BufferSize = %d", g711_BufferSize);
	char g711_Buffer[g711_BufferSize];
	size_t len;

	LOGD("********************************");
	while((len = fread(g711_Buffer, 1, g711_BufferSize, fpIn)) > 0){
		LOGD("g711topcm length = %d", len);
		char pcmBuffer[len];
		int pcmbufsize = g711_decode(pcmBuffer, g711_Buffer, len); // g711 -> pcm  (g711 转为 pcm 后其体积会增加一倍)
		LOGD("g711topcm pcmbufsize = %d", pcmbufsize);

		// pcm -> aac
		int inputSamples = pcmbufsize / (pcmBitSize / 8);
		LOGD("g711topcm inputSamples = %d", inputSamples);
		int nRetVal = faacEncEncode(codeHandle, (int*) pcmBuffer, inputSamples, pbAACBuffer, maxOutputBytes);
		LOGD("g711topcm nRetVal = %d", nRetVal);
		fwrite(pbAACBuffer, 1, nRetVal, fpOut);
		LOGD("----------------------------------");
	}
	fclose(fpIn);
	fclose(fpOut);
	faacEncClose(codeHandle);
	return 0;
}
