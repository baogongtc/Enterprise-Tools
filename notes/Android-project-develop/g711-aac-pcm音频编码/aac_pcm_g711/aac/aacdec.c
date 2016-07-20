#include <jni.h>
#include <android/log.h>
#include <stdbool.h>
#include <stdio.h>
#include "include/neaacdec.h"

#define LOG_TAG "AAC_JNI"
#define LOGD(...) __android_log_print(ANDROID_LOG_DEBUG, LOG_TAG, __VA_ARGS__)
#define LOGI(...) __android_log_print(ANDROID_LOG_INFO, LOG_TAG, __VA_ARGS__)

const unsigned int g_frmMaxLen = 1024;
const unsigned int g_bufMaxLen = 1024 * 170;
bool isDecoder = true;


/**
* 测试代码 AAC -> PCM
*/
int main_aac(){
	LOGD("aac 1");
	unsigned char aacFrm[g_frmMaxLen];
	unsigned char buffer[g_bufMaxLen];
	LOGD("aac 2");
	//目前代码通过本地文件进行
	char* src_file = "/storage/emulated/0/aac/tmp.aac";
	char* des_file = "/storage/emulated/0/aac/tmp.pcm";

	FILE* ifile = NULL;
	FILE* dfile = NULL;
	unsigned long samplerate = 0;
	unsigned char channels = 0;
	NeAACDecHandle decoder = NULL;

	size_t data_size;
	size_t size;
	//04-01 20:22:27.210: A/libc(4570): Fatal signal 11 (SIGSEGV) at 0x76a3b628 (code=2), thread 4606 (Thread-3896)

	NeAACDecFrameInfo frame_info;
	memset(&frame_info, 0, sizeof(frame_info));
	unsigned char* input_data = buffer;
	unsigned char* pcm_data = NULL;
	LOGD("aac 3");

	ifile = fopen(src_file, "rb"); //"rb" 以二进制的方式只读
	dfile = fopen(des_file, "wb");

	LOGD("aac 4");
	if(ifile == NULL){
		LOGD("open file failed");
		return -1;
	}else{
		LOGD("open file success");
	}

	if(dfile == NULL){
		LOGD("des file failed");
		return -1;
	}else{
		LOGD("des file success");
	}

	//读取AAC文件
	data_size = fread(buffer, 1, g_bufMaxLen, ifile);
	LOGD("aac 5 ; %d", data_size);

	//打开解码器
	decoder = NeAACDecOpen();
	LOGD("aac 6");

	//初始化解码器
	if(get_one_ADTS_frame(buffer, g_bufMaxLen, aacFrm, &size) < 0){
		LOGD("get init one ADTS frame failed");
		return -1;
	}

	//NeAACDecInit(NeAACDecHandle hpDecoder,unsigned char *buffer,unsigned long buffer_size,unsigned long *samplerate,unsigned char *channels)
	long decApi = NeAACDecInit(decoder, aacFrm, size, &samplerate, &channels);
	LOGD("devApi = %d; samplerate = %d; channels = %d", decApi, samplerate, channels);

//	NeAACDecConfigurationPtr conf = NeAACDecGetCurrentConfiguration(decoder);
//	conf->defObjectType = LC;
//	conf->defSampleRate = 48000;
//	conf->outputFormat = FAAD_FMT_16BIT;
//	conf->dontUpSampleImplicitSBR = 1;
//	NeAACDecSetConfiguration(decoder, conf);

	LOGD("**********************************************");
	while(get_one_ADTS_frame(input_data, data_size, aacFrm, &size) == 0 ){
		//NEAACDECAPI NeAACDecDecode(NeAACDecHandle hpDecoder, NeAACDecFrameInfo *hInfo, unsigned char *buffer, unsigned long buffer_size)
		pcm_data = (unsigned char*)NeAACDecDecode(decoder, &frame_info, aacFrm, size);
		if(frame_info.error > 0){
			char* errorMsg = NeAACDecGetErrorMessage(frame_info.error);
			LOGD("ERROR,code = %d, msg = %s", frame_info.error, errorMsg);

		}else if(pcm_data && frame_info.samples > 0){
			LOGD("FRAM INFO:  bytesconsumed= %d, channels= %d, header_type= %d,object_type= %d, samples= %d, samplerate= %d",
					frame_info.bytesconsumed, frame_info.channels,
					frame_info.header_type, frame_info.object_type,
					frame_info.samples, frame_info.samplerate);
			LOGD("pcm_data_size = %d, size = %d", sizeof(pcm_data), size);
			fwrite(pcm_data, 1, (frame_info.samples * frame_info.channels), dfile);

		}else {
			LOGD("* FRAM INFO:  bytesconsumed= %d, channels= %d, header_type= %d,object_type= %d, samples= %d, samplerate= %d",
					frame_info.bytesconsumed, frame_info.channels,
					frame_info.header_type, frame_info.object_type,
					frame_info.samples, frame_info.samplerate);
			LOGD("* pcm_data_size = %d, size = %d", sizeof(pcm_data), size);
		}
		data_size -= size;
		input_data += size;//指针偏移size位
		LOGD("##data_size = %d", data_size);
		LOGD("------------------------------------------------");
	}
	NeAACDecClose(decoder);
	fclose(ifile);
	fclose(dfile);
	return 0;
}

JNIEXPORT void JNICALL Java_com_ff_aac_jni_AacDecoder_startDecoder_TEST
  (JNIEnv *env, jobject obj, jobject callback){
	LOGD("aac start");
	main_aac();
	LOGD("aac ent");
}

//----------------------------------------------------------------------DEOC-------------------------------------------
//http://www.bubuko.com/infodetail-1006535.html
/**
 * 解析一帧的数据
 *
 * buffer aac   文件的缓冲内容
 * buf_size     文件的大小
 * data         aac文件一帧内容的缓冲
 * data_size    aac文件一帧内容缓冲的大小
 */
int get_one_ADTS_frame(unsigned char* buffer , size_t buf_size, unsigned char* data, size_t* data_size){
	size_t size = 0;
	if(!buffer || !data || !data_size){
		LOGD("!buffer || !data || !data_size");
		return -1;
	}

	while(true){
		if(buf_size < 7){ // 当  ProtectionAbsent == 1 ? 7 : 9 时
			LOGD("buf_size < 7");
			return -1;
		}
		if((buffer[0] == 0xff) && (buffer[1] & 0xf0) == 0xf0){ //判断是否为aac头信息,并计算一帧的长度
			size |= ((buffer[3] & 0x03) << 11);  // heigh  2 bit
			size |= buffer[4] << 3;              // middle 8 bit
			size |= ((buffer[5] & 0xe0) >> 5);   // low    3 bit
			LOGD("is header tag size = %d",size);
			break;
		}
		--buf_size;
		++buffer;
		LOGD("WHILE buf_size(%d) : size(%d)", buf_size,size);
	}
	if(buf_size < size){ //剩余大小不够一帧
		LOGD("buf_size(%d) < size(%d)", buf_size,size);
		LOGD("buf_size(%d) < size(%d)", buf_size,size);
		return -1;
	}
	memcpy(data, buffer, size);
	*data_size = size;
	return 0;
}

/*
 * AAC -> PCM
 */
JNIEXPORT void JNICALL Java_com_ff_aac_jni_AacDecoder_startDecoder  //TODO
  (JNIEnv *env, jobject obj, jobject callback){
	LOGD("aac start");
	//获取callback实例
	// jclass      (*FindClass)(JNIEnv*, const char*);
	jclass clazz = (*env)->FindClass(env, "com/ff/aac/jni/AacDecoder$AudioCallBack");
	//jmethodID   (*GetMethodID)(JNIEnv*, jclass, const char*, const char*);
	jmethodID methodID = (*env)->GetMethodID(env, clazz, "onReceiveAudio", "([B)V");
	//jbyteArray    (*NewByteArray)(JNIEnv*, jsize);

	isDecoder = true;
	jbyteArray arr = NULL;
	unsigned char aacFrm[g_frmMaxLen];
	unsigned char buffer[g_bufMaxLen];
	//目前代码通过本地文件进行
//	char* src_file = "/storage/emulated/0/aac/tmp.aac";
	char* src_file = "/storage/emulated/0/t/pcm_to_g711.aac";

	FILE* ifile = NULL;
	unsigned long samplerate = 0;
	unsigned char channels = 0;
	NeAACDecHandle decoder = NULL;

	size_t data_size;
	size_t size;

	NeAACDecFrameInfo frame_info;
	memset(&frame_info, 0, sizeof(frame_info));
	unsigned char* input_data = buffer;
	unsigned char* pcm_data = NULL;

	ifile = fopen(src_file, "rb"); //"rb" 以二进制的方式只读
	if(ifile == NULL){
		LOGD("open file failed");
		return ;
	}else{
		LOGD("open file success");
	}

	//读取AAC文件
	data_size = fread(buffer, 1, g_bufMaxLen, ifile);
	LOGD("aac 5 ; %d", data_size);

	//打开解码器
	decoder = NeAACDecOpen();
	LOGD("aac 6");

	//初始化解码器
	if(get_one_ADTS_frame(buffer, g_bufMaxLen, aacFrm, &size) < 0){
		LOGD("get init one ADTS frame failed");
		return ;
	}

	//NeAACDecInit(NeAACDecHandle hpDecoder,unsigned char *buffer,unsigned long buffer_size,unsigned long *samplerate,unsigned char *channels)
	long decApi = NeAACDecInit(decoder, aacFrm, size, &samplerate, &channels);
	LOGD("devApi = %d; samplerate = %d; channels = %d", decApi, samplerate, channels);

	LOGD("**********************************************");
	while(get_one_ADTS_frame(input_data, data_size, aacFrm, &size) == 0 && isDecoder){
		//NEAACDECAPI NeAACDecDecode(NeAACDecHandle hpDecoder, NeAACDecFrameInfo *hInfo, unsigned char *buffer, unsigned long buffer_size)
		pcm_data = (unsigned char*)NeAACDecDecode(decoder, &frame_info, aacFrm, size);
		if(frame_info.error > 0){
			char* errorMsg = NeAACDecGetErrorMessage(frame_info.error);
			LOGD("ERROR,code = %d, msg = %s", frame_info.error, errorMsg);

		}else if(pcm_data && frame_info.samples > 0){
			LOGD("FRAM INFO:  bytesconsumed= %d, channels= %d, header_type= %d,object_type= %d, samples= %d, samplerate= %d",
					frame_info.bytesconsumed, frame_info.channels,
					frame_info.header_type, frame_info.object_type,
					frame_info.samples, frame_info.samplerate);
			LOGD("pcm_data_size = %d, size = %d", sizeof(pcm_data), size);


			arr = (*env)->NewByteArray(env, frame_info.samples * frame_info.channels);
			(*env)->SetByteArrayRegion(env, arr, 0, frame_info.samples * frame_info.channels, (jbyte*)pcm_data);
			(*env)->CallVoidMethod(env, callback, methodID, arr);
			(*env)->DeleteLocalRef(env, arr);

		}else {
			LOGD("* FRAM INFO:  bytesconsumed= %d, channels= %d, header_type= %d,object_type= %d, samples= %d, samplerate= %d",
					frame_info.bytesconsumed, frame_info.channels,
					frame_info.header_type, frame_info.object_type,
					frame_info.samples, frame_info.samplerate);
			LOGD("* pcm_data_size = %d, size = %d", sizeof(pcm_data), size);
		}
		data_size -= size;
		input_data += size;//指针偏移size位
		LOGD("##data_size = %d", data_size);
		LOGD("------------------------------------------------");
	}
	LOGD("isDecoder = %d", isDecoder);
	// void  (*DeleteLocalRef)(JNIEnv*, jobject);
	(*env)->DeleteLocalRef(env, arr);
	NeAACDecClose(decoder);
	fclose(ifile);
	LOGD("aac end");
}

/*
 * Class:     com_ff_aac_jni_AacDecoder
 * Method:    stopDecoder
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_com_ff_aac_jni_AacDecoder_stopDecoder
  (JNIEnv *env, jobject obj){
	isDecoder = false;
}













