//http://www.easydarwin.org/article/Streaming/38.html
//https://github.com/EasyDarwin/EasyAACEncoder/blob/master/g711.cpp
//http://www.oschina.net/code/snippet_1173523_38946
//http://blog.csdn.net/rightorwrong/article/details/4209467  PCM 2 G711  G711 2 PCM

unsigned char encode(short pcm);
short decode(unsigned char alaw);

int g711_encode(unsigned char* pCodecBits, const char* pBuffer, int nBufferSize)
{
	short* buffer = (short*)pBuffer;
	int i;
	for(i=0; i<nBufferSize/2; i++)
	{
		pCodecBits[i] = encode(buffer[i]);
	}

	return nBufferSize/2;
}

int g711_decode(char* pRawData, const unsigned char* pBuffer, int nBufferSize)
{
	short *out_data = (short*)pRawData;
	int i;
	for(i=0; i<nBufferSize; i++)
	{
		out_data[i] = decode(pBuffer[i]);
	}

	return nBufferSize*2;
}

#define MAX 32635
unsigned char encode(short pcm)
{
    int sign = (pcm & 0x8000) >> 8;
    if (sign != 0)
        pcm = -pcm;
    if (pcm > MAX) pcm = MAX;
    int exponent = 7;
    int expMask;
    for (expMask = 0x4000; (pcm & expMask) == 0
		&& exponent>0; exponent--, expMask >>= 1) { }
    int mantissa = (pcm >> ((exponent == 0) ? 4 : (exponent + 3))) & 0x0f;
    unsigned char alaw = (unsigned char)(sign | exponent << 4 | mantissa);
    return (unsigned char)(alaw^0xD5);
}

short decode(unsigned char alaw)
{
    alaw ^= 0xD5;
    int sign = alaw & 0x80;
    int exponent = (alaw & 0x70) >> 4;
    int data = alaw & 0x0f;
    data <<= 4;
    data += 8;
    if (exponent != 0)
        data += 0x100;
    if (exponent > 1)
        data <<= (exponent - 1);

    return (short)(sign == 0 ? data : -data);
}


