#include <jni.h>
#include <android/log.h>
#include <stdbool.h>
#include <stdio.h>
#include <malloc.h>
#include <faac_src/include/faac.h>

#define LOG_TAG "AAC_JNI"
#define LOGD(...) __android_log_print(ANDROID_LOG_DEBUG, LOG_TAG, __VA_ARGS__)
#define LOGI(...) __android_log_print(ANDROID_LOG_INFO, LOG_TAG, __VA_ARGS__)

//http://blog.csdn.net/jwzhangjie/article/details/8782656
//http://www.myexception.cn/program/1833150.html
//http://iask.sina.com.cn/b/10699938.html
//http://www.zhihu.com/question/20035259?utm_campaign=rss&utm_medium=rss&utm_source=rss&utm_content=title

/*
 * PCM -> AAC 测试代码

 */
JNIEXPORT void JNICALL Java_com_ff_aac_jni_AacEncoder_sendRecordData
  (JNIEnv *env, jobject obj, jbyteArray arr){
	faacEncHandle hEncoder;
	faacEncConfigurationPtr pConfigPtr;

//	unsigned long sampleRate =	48000;
//	unsigned int numChannels = 2;
	unsigned long sampleRate =	8000;
	unsigned int numChannels = 1;
	unsigned long inputSamples;
	unsigned long maxOutputBytes;
	//faacEncHandle FAACAPI faacEncOpen(unsigned long sampleRate,unsigned int numChannels,unsigned long *inputSamples,unsigned long *maxOutputBytes)
	/*
	 * smapleRate: 编码输入信息的采样率
	 * numChannels: 编码输入信息的通道数量, 1-单声道  2-立体声
	 * inputSamples : 编码后的数据长度
	 * maxOutputBytes : 编码后的信息最大长度
	 */
	hEncoder = faacEncOpen(sampleRate, numChannels, &inputSamples, &maxOutputBytes);
	LOGD("inputSamples = %d, maxOutputBytes = %d", inputSamples, maxOutputBytes);
	//inputSamples = 2048, maxOutputBytes = 1536  双通道
	//inputSamples = 1024, maxOutputBytes = 768    单通道

	pConfigPtr = faacEncGetCurrentConfiguration(hEncoder);
	if(!pConfigPtr){
		LOGD("faacEncGetCurrentConfiguration ERROR!");
		faacEncClose(hEncoder);
		return;
	}

	// FRAM INFO:  bytesconsumed= 168, channels= 2, header_type= 2,object_type= 5, samples= 4096, samplerate= 48000
	pConfigPtr->version = MPEG2; //设置版本, 录制MP4文件时要用MPEG4
	pConfigPtr->inputFormat = FAAC_INPUT_16BIT;//输入数据类型
	pConfigPtr->outputFormat = 1; //0-Raw ; 1-ADTS
	pConfigPtr->useTns= 0;//瞬时噪声定形(temporal noise shaping，TNS)滤波器
	pConfigPtr->useLfe= 0;//低频效果
	pConfigPtr->aacObjectType= LOW; //编码类型
	pConfigPtr->shortctl=SHORTCTL_NORMAL;
	pConfigPtr->quantqual=30; // 编码质量
	pConfigPtr->mpegVersion = MPEG2;

	int nRetVal = faacEncSetConfiguration(hEncoder, pConfigPtr);
	LOGD("nRetVal = %d", nRetVal);

//	int FAACAPI faacEncEncode(faacEncHandle hEncoder,
//	                          int32_t *inputBuffer,
//	                          unsigned int samplesInput,
//	                          unsigned char *outputBuffer,
//	                          unsigned int bufferSize
//	                          )
	int nPCMBitSize = 16; // 量化位数
	int m_nMaxInputBytes = inputSamples * nPCMBitSize / 8;

	char pbPCMBuffer[m_nMaxInputBytes]; // 读取PCM数据
	char pbAACBuffer[maxOutputBytes];

	// 设置输入输出文件
	FILE* fpIn = fopen("/storage/emulated/0/t/pcm_to_g711.pcm", "rb");
	FILE* fpOut = fopen("/storage/emulated/0/t/pcm_to_g711.aac", "wb");

	while((nRetVal = fread(pbPCMBuffer,1,m_nMaxInputBytes,fpIn)) > 0){
		inputSamples = nRetVal / (nPCMBitSize / 8);
		LOGD("read inputSamples = %d, nRetVal = %d", inputSamples, nRetVal);
		// read inputSamples = 2048, nRetVal = 4096
		nRetVal = faacEncEncode(hEncoder, (int*) pbPCMBuffer, inputSamples, pbAACBuffer, maxOutputBytes);
		LOGD("read XXX nRetVal = %d", nRetVal);
		fwrite(pbAACBuffer, 1, nRetVal, fpOut);
	}

	faacEncClose(hEncoder);
	fclose(fpOut);
	fclose(fpIn);
}

//-----------------------------------------------------------ENCODE-----------------------------------------------------------
struct AacDecoderInfo{
	faacEncHandle hEncoder;
	char* pcmBuffer;
	char* aacBuffer;
	int maxInputBytes;
	int maxOutputBytes;
	int bitSize;
	int inputSamples;
	FILE* ftOutFile;
};
bool isRecord = false;
struct AacDecoderInfo *aacDecoderInfo;
/*
 * Class:     com_ff_aac_jni_AacEncoder
 * Method:    stopSendRecodData
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_com_ff_aac_jni_AacEncoder_initAACEncoder
  (JNIEnv *env, jobject obj){


	unsigned long sampleRate = 8000;
	unsigned int numChannels = 1;
	unsigned long inputSamples;
	unsigned long maxOutputBytes;
	faacEncHandle hEncoder = faacEncOpen(sampleRate, numChannels, &inputSamples, &maxOutputBytes);
	LOGD("inputSamples = %d, maxOutputBytes = %d, sampleRate = %d", inputSamples, maxOutputBytes);

	faacEncConfigurationPtr pConfigPtr;
	pConfigPtr = faacEncGetCurrentConfiguration(hEncoder);
	if(!pConfigPtr){
		LOGD("faacEncGetCurrentConfiguration ERROR!");
		faacEncClose(hEncoder);
		hEncoder = NULL;
		return;
	}

	pConfigPtr->inputFormat = FAAC_INPUT_16BIT;//输入数据类型
	pConfigPtr->outputFormat = 1; //0-Raw ; 1-ADTS
	pConfigPtr->bitRate = 8000;
//	pConfigPtr->useTns= 0;//瞬时噪声定形(temporal noise shaping，TNS)滤波器
//	pConfigPtr->useLfe= 0;//低频效果
	pConfigPtr->aacObjectType= LOW; //编码类型
	pConfigPtr->shortctl=SHORTCTL_NORMAL;
	pConfigPtr->quantqual=20;
	pConfigPtr->mpegVersion = MPEG2;
	int nRetVal = faacEncSetConfiguration(hEncoder, pConfigPtr);
	LOGD("nRetVal = %d", nRetVal);

	int nPCMBitSize = 16; // 量化位数
	int m_nMaxInputBytes = inputSamples * nPCMBitSize / 8;
	LOGD("m_nMaxInputBytes = %d", m_nMaxInputBytes);

	char pbPCMBuffer[m_nMaxInputBytes]; // 读取PCM数据
	char pbAACBuffer[maxOutputBytes];

	FILE* fpOut = fopen("/storage/emulated/0/t/pcm2aac.aac", "wb");
	aacDecoderInfo = malloc(sizeof(struct AacDecoderInfo));
	aacDecoderInfo->hEncoder = hEncoder;
	aacDecoderInfo->pcmBuffer = pbPCMBuffer;
	aacDecoderInfo->aacBuffer = pbAACBuffer;
	aacDecoderInfo->maxInputBytes = m_nMaxInputBytes;
	aacDecoderInfo->maxOutputBytes = maxOutputBytes;
	aacDecoderInfo->bitSize = nPCMBitSize;
	aacDecoderInfo->inputSamples = inputSamples;
	aacDecoderInfo->ftOutFile = fpOut;

	isRecord = true;
}

/*
 * http://blog.csdn.net/jwzhangjie/article/details/8782656 (如果不这样设置将导致编码失败)
 *
 *  */
size_t read_int16(int16_t *outbuf, size_t num, unsigned char *inputbuf){
	size_t i = 0 , j = 0;
	unsigned char bufi[8];
	while(i < num){
		memcpy(bufi, inputbuf+j, (aacDecoderInfo->bitSize / 8));
		j+= (aacDecoderInfo->bitSize / 8);
		int16_t s = ((int16_t*)bufi)[0];
		outbuf[i] = s;
		i++;
	}
	return 0;
}

/**
*  PCM -> AAC
*/
JNIEXPORT void JNICALL Java_com_ff_aac_jni_AacEncoder_sendRecordData
  (JNIEnv *env, jobject obj, jbyteArray arr){
	LOGD("sendRecordData isRecord = %d", isRecord);
	if(isRecord){
		jsize size = (*env)->GetArrayLength(env, arr);
		LOGD("sendRecordData arr size = %d", size);
		int inputSamples = size / (aacDecoderInfo->bitSize / 8);
		LOGD("sendRecordData intputSamples = %d, default intputSamples = %d", inputSamples, aacDecoderInfo->inputSamples);
		memset(aacDecoderInfo->aacBuffer, 0, aacDecoderInfo->maxOutputBytes);
		char* cArr = (*env)->GetByteArrayElements(env,arr,false);

		int pumbuff_size = size / (aacDecoderInfo->bitSize / 8);
		int pumBuf[pumbuff_size];
		read_int16(pumBuf, size, cArr);

		int nRetVal = faacEncEncode(aacDecoderInfo->hEncoder, pumBuf, inputSamples, aacDecoderInfo->aacBuffer, aacDecoderInfo->maxOutputBytes);
		LOGD("sendRecordData nRetVal = %d", nRetVal);
		(*env)->ReleaseByteArrayElements(env, arr, cArr, 0);
		fwrite(aacDecoderInfo->aacBuffer, 1, nRetVal, aacDecoderInfo->ftOutFile);
	}
}

/*
 * Class:     com_ff_aac_jni_AacEncoder
 * Method:    stopSendRecodData
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_com_ff_aac_jni_AacEncoder_stopSendRecodData
  (JNIEnv *env, jobject obj){
	isRecord = false;
	fclose(aacDecoderInfo->ftOutFile);
	faacEncClose(aacDecoderInfo->hEncoder);
	free(aacDecoderInfo);
}
