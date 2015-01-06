package net.hb.cafe.lotto;

public class Lotto {
	int[] arr = new int[6];

	public int[] getArr() {
		return arr;
	}

	public void setArr() {
		for(int i=0;i<arr.length;i++){
			int val = (int) (Math.random()*45+1);
			arr[i] = val;
			for(int j=0;j<i;j++){
				if(arr[i]==arr[j]){
					i--;
					break;
				}
			}
			i++;
		}
	}
	
	

	
	
	
	
}
