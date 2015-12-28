package com.et.utils;

import android.app.Activity;
import android.content.ContentResolver;
import android.provider.Settings;
import android.view.WindowManager;

public class LightnessControl {
	
	public static final int MAX_LIGHT = 255;
	
	// 改变亮度
	public static void setLightness(Activity act, int value) {
		try {
			WindowManager.LayoutParams lp = act.getWindow().getAttributes();
			lp.screenBrightness = (value <= 0 ? 10 : value) / 255f;
			act.getWindow().setAttributes(lp);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 获取亮度
	public static int getLightness(Activity context) {
		return (int) (context.getWindow().getAttributes().screenBrightness * 255);
	}

	// reset light
	public static void restoreBrightness(Activity context) {
		WindowManager.LayoutParams lp = context.getWindow().getAttributes();
		lp.screenBrightness = WindowManager.LayoutParams.BRIGHTNESS_OVERRIDE_NONE;
		context.getWindow().setAttributes(lp);
	}

	// update light mode
	public static int updateBrightness(Activity context) {
		if (isAutoBrightness(context)){
			setLightness(context, (int) (LightnessControl.MAX_LIGHT * 0.8));
		}
		int light = getLightness(context);
		if (light <= 0){
			setLightness(context, (int) (LightnessControl.MAX_LIGHT * 0.8));
			light = (int) (LightnessControl.MAX_LIGHT * 0.8);
		}
		return light;
	}
	
	// 判断是否开启了自动亮度调节
	public static boolean isAutoBrightness(Activity context) {
		boolean automicBrightness = false;
		ContentResolver aContentResolver = context.getContentResolver();
		try {
			automicBrightness = Settings.System.getInt(aContentResolver, Settings.System.SCREEN_BRIGHTNESS_MODE) == Settings.System.SCREEN_BRIGHTNESS_MODE_AUTOMATIC;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return automicBrightness;
	}
}