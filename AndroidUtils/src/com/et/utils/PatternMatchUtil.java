package com.et.utils;

import java.util.regex.Pattern;

public class PatternMatchUtil {

	/**
	 * 匹配Email地址
	 * @param email
	 * @return
	 */
	public static boolean isEmailAddress(String email) {
		final String expression = "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$";
		return Pattern.matches(expression, email);
	}

	public static boolean isIPAddress(String data) {
		Pattern pattern = Pattern.compile(
				"^((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])$");
		return pattern.matcher(data).matches();
	}

	/**
	 * 匹配当前number字符串是否是长度为length的数字串
	 * @param number
	 * @param length
	 * @return
	 */
	public static boolean isNumber(String number, int length) {
		final String expression = "\\d{" + length + "}";
		return Pattern.matches(expression, number);
	}

	/**
	 * judge whether character is a mixed with numbers and characters
	 * @param character
	 * @return
	 */
	public static boolean isNumberMixedCharacter(String character) {
		final String expression = "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$";
		return Pattern.matches(expression, character);
	}

	/**
	 * 在一定范围内匹配数字长度
	 * @param number
	 * @param leftRange
	 * @param rightRange
	 * @return
	 */
	public static boolean isNumberLengthInRange(String number, int leftRange, int rightRange) {
		int length = number.length();
		if (length >= leftRange && length <= rightRange) {
			return true;
		}
		return false;
	}

	/**
	 * 
	 * @param number
	 * @return
	 */
	public static boolean isNumber(String number) {
		final String expression = "^[0-9]*$";
		return Pattern.matches(expression, number);
	}

	/**
	* 匹配当前字符串是否未ip地址
	* @param ipAddress
	*/

	public static boolean isIpAddress(String ipAddress) {
		final String expression = "^((25[0-5]|2[0-4]\\d|(1\\d|[1-9])?\\d)\\.){3}(25[0-5]|2[0-4]\\d|(1\\d|[1-9])?\\d)$";
		return Pattern.matches(expression, ipAddress);
	}

}
