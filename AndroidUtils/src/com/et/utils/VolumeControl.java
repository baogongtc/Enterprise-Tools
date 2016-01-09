package com.et.utils;

import com.et.AUApplication;

import android.content.Context;
import android.media.AudioManager;

public class VolumeControl {

	public static int MAX_VOLUME = 100;

	public static int systemMaxVolume = 0;

	static {
		AudioManager audioManager = (AudioManager) AUApplication.mContext.getSystemService(Context.AUDIO_SERVICE);
		systemMaxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
	}

	public static int getVolume(Context context) {
		AudioManager audioManager = (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);
		int volume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
		return Math.round(((float) volume / systemMaxVolume) * MAX_VOLUME);
	}

	public static void setVolume(Context context, int volume) {
		AudioManager audioManager = (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);
		audioManager.setStreamVolume(AudioManager.STREAM_MUSIC,
				Math.round((float) volume / MAX_VOLUME * systemMaxVolume), AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE);
	}
}
