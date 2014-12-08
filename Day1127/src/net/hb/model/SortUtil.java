package net.hb.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SortUtil {
	List<Integer> list = new ArrayList<Integer>();
	
	public List<Integer> getDescSort(int[] arr) {
		int temp=0;
		for(int i=0;i<arr.length;i++){
			for(int j=i;j<arr.length;j++){
				if(arr[i]<arr[j]){
					temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		for(int k:arr){
			list.add(k);
		}
		return list;
	}


	
	public List<Integer> getAscSort(int[] arr){
	/*public void setAscSort(int[] arr){
		for(int i=0;i<arr.length-1;i++){
			for(int j=0;j<arr.length;j++){
				if(arr[j]>arr[j+1]){
					int tmp;
					tmp = arr[j+1];
					arr[j+1]=tmp;
				}
			}
		}
	}
		이 과정을 Arrays 클래스로 한 줄 처리
	*/
		Arrays.sort(arr);
		for(int k : arr){
			list.add(k);
		}
		return list;
		
	}
}
