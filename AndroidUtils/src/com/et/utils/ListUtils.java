package com.et.utils;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import android.view.View;
import android.view.ViewGroup;
import android.widget.ListAdapter;
import android.widget.ListView;

public class ListUtils {

	/**
	 * 为空或者长度为0
	 * 
	 * @Title: isEmpty
	 * 
	 *         <pre>
	 * isEmpty(null)   =   true;
	 * isEmpty({})     =   true;
	 * isEmpty({1})    =   false;
	 * </pre>
	 * @param sourceList
	 *            源集合
	 * @return boolean 如果list是空或者长度为0，返回ture,其它返回false
	 */
	public static <V> boolean isEmpty(List<V> sourceList) {
		return (sourceList == null || sourceList.size() == 0);
	}

	/**
	 * 不是为空且长度为0
	 * 
	 * @Title: isEmpty
	 * 
	 *         <pre>
	 * isNotEmpty(null)   =   false;
	 * isNotEmpty({})     =   false;
	 * isNotEmpty({1})    =   true;
	 * </pre>
	 * @param sourceList
	 *            源集合
	 * @return boolean 如果list是空或者长度为0，返回false,其它返回true
	 */
	public static <V> boolean isNotEmpty(List<V> sourceList) {
		return (sourceList != null && sourceList.size() > 0);
	}

	/**
	 * 清空不为空的所有数据
	 * 
	 * @Title: clear
	 * @param sourceList
	 *            源集合
	 */
	public static <V> void clear(List<V> sourceList) {
		if (isNotEmpty(sourceList))
			sourceList.clear();
	}

	public static <V> int getCount(List<V> sourceList) {
		return (sourceList == null || sourceList.isEmpty()) ? 0 : sourceList.size();
	}

	public static <V> Object getItem(List<V> sourceList, int position) {
		return !sourceList.isEmpty() ? sourceList.get(position) : null;
	}

	public static void setListViewHeightBasedOnChildren(ListView listView) {
		ListAdapter listAdapter = listView.getAdapter();
		if (listAdapter == null) {
			// pre-condition
			return;
		}

		int totalHeight = 0;
		for (int i = 0; i < listAdapter.getCount(); i++) {
			View listItem = listAdapter.getView(i, null, listView);
			listItem.measure(0, 0);
			totalHeight += listItem.getMeasuredHeight();
		}

		ViewGroup.LayoutParams params = listView.getLayoutParams();
		params.height = totalHeight + (listView.getDividerHeight() * (listAdapter.getCount() - 1));
		listView.setLayoutParams(params);
	}

	public static <T> List<T> removeDuplicate(List<T> list) {
		Set<T> set = new HashSet<T>();
		List<T> newList = new ArrayList<T>();
		for (Iterator<T> iter = list.iterator(); iter.hasNext();) {
			T element = iter.next();
			if (set.add(element))
				newList.add(element);
		}
		return newList;
	}

}
