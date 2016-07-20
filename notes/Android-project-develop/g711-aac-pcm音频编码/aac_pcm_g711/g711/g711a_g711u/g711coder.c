/*
 * g711coder.c
 *
 *  Created on: 2016-4-15
 *      Author: Administrator
 */
#include <jni.h>
#include <android/log.h>

#define LOG_TAG "G711_JNI"
#define LOGD(...) __android_log_print(ANDROID_LOG_DEBUG, LOG_TAG, __VA_ARGS__)
#define LOGI(...) __android_log_print(ANDROID_LOG_INFO, LOG_TAG, __VA_ARGS__)

typedef struct CoderResultClazz{
	jclass coderJclazz;
	jmethodID coderArrDataMethod;
	jfieldID coderArrLenID;
} CoderResultInfo;

CoderResultInfo *resultInfo;
JNIEXPORT void JNICALL Java_com_ff_audio_jni_G711Coder_g711CoderInit
  (JNIEnv *env, jobject coder){
	resultInfo = (CoderResultInfo*)malloc(sizeof(CoderResultInfo));
	resultInfo->coderJclazz = (*env)->FindClass(env, "com/ff/audio/jni/G711Coder$CoderResult");
	resultInfo->coderArrLenID = (*env)->GetFieldID(env, resultInfo->coderJclazz, "dataLen", "I");
	resultInfo->coderArrDataMethod = (*env)->GetMethodID(env, resultInfo->coderJclazz, "setDataArr", "([B)V");
}

JNIEXPORT void JNICALL Java_com_ff_audio_jni_G711Coder_g711aEncode
  (JNIEnv *env, jobject coder, jbyteArray pcmDataArr, jint dataLen, jobject coderResult){
	char* tPcmDataArr = (*env)->GetByteArrayElements(env, pcmDataArr, 0);
	unsigned char g711DataArr[dataLen / 2];
	int g711DataLen = g711a_encode(g711DataArr, (short *)tPcmDataArr, dataLen / 2);
	(*env)->SetIntField(env, coderResult, resultInfo->coderArrLenID, g711DataLen);

	jbyteArray arr = (*env)->NewByteArray(env, g711DataLen);
	(*env)->SetByteArrayRegion(env, arr, 0 ,g711DataLen, (jbyte*)g711DataArr);
	(*env)->CallVoidMethod(env, coderResult, resultInfo->coderArrDataMethod, arr);
	(*env)->DeleteLocalRef(env, arr);
	(*env)->ReleaseByteArrayElements(env, pcmDataArr, tPcmDataArr, 0);
}

JNIEXPORT void JNICALL Java_com_ff_audio_jni_G711Coder_g711uEncode
  (JNIEnv *env, jobject coder, jbyteArray pcmDataArr, jint dataLen, jobject coderResult){
	char* tPcmDataArr = (*env)->GetByteArrayElements(env, pcmDataArr, 0);
	unsigned char g711DataArr[dataLen / 2];
	int g711DataLen = g711u_encode(g711DataArr, (short *)tPcmDataArr, dataLen / 2);

	jbyteArray arr = (*env)->NewByteArray(env, g711DataLen);
	(*env)->SetByteArrayRegion(env, arr, 0 ,g711DataLen, (jbyte*)g711DataArr);
	(*env)->CallVoidMethod(env, coderResult, resultInfo->coderArrDataMethod, arr);
	(*env)->SetIntField(env, coderResult, resultInfo->coderArrLenID, g711DataLen);

	(*env)->DeleteLocalRef(env, arr);
	(*env)->ReleaseByteArrayElements(env, pcmDataArr, tPcmDataArr, 0);

}

JNIEXPORT void JNICALL Java_com_ff_audio_jni_G711Coder_g711aDecode
  (JNIEnv *env, jobject coder, jbyteArray g711DataArr, jint dataLen, jobject coderResult){
	char* tG711DataArr = (*env)->GetByteArrayElements(env, g711DataArr, 0);
	unsigned char pcmDataArr[dataLen * 2];
	int pcmDataLen = g711a_decode((short *)pcmDataArr, tG711DataArr, dataLen);

	jbyteArray arr = (*env)->NewByteArray(env, pcmDataLen);
	(*env)->SetByteArrayRegion(env, arr, 0, pcmDataLen, (jbyte*)pcmDataArr);
	(*env)->CallVoidMethod(env, coderResult, resultInfo->coderArrDataMethod, arr);
	(*env)->SetIntField(env, coderResult, resultInfo->coderArrLenID, pcmDataLen);

	(*env)->DeleteLocalRef(env, arr);
	(*env)->ReleaseByteArrayElements(env, g711DataArr, tG711DataArr, 0);
}

JNIEXPORT void JNICALL Java_com_ff_audio_jni_G711Coder_g711uDecode
  (JNIEnv *env, jobject coder, jbyteArray g711DataArr, jint dataLen, jobject coderResult){
	char* tG711DataArr = (*env)->GetByteArrayElements(env, g711DataArr, 0);
	unsigned char pcmDataArr[dataLen * 2];
	int pcmDataLen = g711u_decode((short *)pcmDataArr, tG711DataArr, dataLen);

	jbyteArray arr = (*env)->NewByteArray(env, pcmDataLen);
	(*env)->SetByteArrayRegion(env, arr, 0, pcmDataLen, (jbyte*)pcmDataArr);
	(*env)->CallVoidMethod(env, coderResult, resultInfo->coderArrDataMethod, arr);
	(*env)->SetIntField(env, coderResult, resultInfo->coderArrLenID, pcmDataLen);

	(*env)->DeleteLocalRef(env, arr);
	(*env)->ReleaseByteArrayElements(env, g711DataArr, tG711DataArr, 0);
}

JNIEXPORT void JNICALL Java_com_ff_audio_jni_G711Coder_g711CoderRelease
  (JNIEnv *env, jobject coder){
	free(resultInfo);
}

