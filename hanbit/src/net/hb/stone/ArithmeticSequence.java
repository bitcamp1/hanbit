package net.hb.stone;

import java.util.Scanner;

public class ArithmeticSequence {
	private int num;
	private int sum;
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		
		 this.num = num;
	}
	public int getSum() {
		
		return sum;
	}
	public void setSum(int num) {
		for(int i=1;i<=num;i++){
			sum+=i;
		}
	}
	@Override
	public String toString() {
		return "답 : 1 부터 "+getNum()+" 까지의 합은 "+sum+" 입니다.";
	}
	
	
}
