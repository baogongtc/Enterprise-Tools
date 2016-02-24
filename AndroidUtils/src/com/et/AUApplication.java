package com.et;

import android.app.Application;
import android.content.Context;

public class AUApplication extends Application {

	public static Context mContext;

	@Override
	public void onCreate() {
		super.onCreate();
		mContext = AUApplication.this;

	}

}
