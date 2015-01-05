package net.hb.lecture;

import java.util.Scanner;

public class Main1204 {
	public static void main(String[] args) {
		Main1204 m = new Main1204();
		
		
		m.showAssertionGugudan(args);
		
		
		
		// m.sumEx(m);
		
		// m.tryCatchEx(m);
		
	}
	public void showAssertionGugudan(String[] args) {
		AssertGugudan ag = new AssertGugudan();
		
		try {
			int dan = 12;
			ag.gugudan(dan);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public  void tryCatchEx(Main1204 m) {
		int a=5, b=0;
		int mok=0, nmg=0;
		
		try {
			mok=a/b;
			nmg=a%b;
		} catch (ArithmeticException e) {
			System.out.println("0으로 나눌수 없습니다.");
		}
		System.out.println(a+" / "+b+" = "+mok);
		System.out.println(a+" % "+b+" = "+nmg);
		System.out.println();
	}
	public void handleError(String str){
		System.out.println(str);
		System.exit(1);
	}
	
	public void sumEx(Main1204 m) {
		int a=90, b=80, c=70;
		m.sum(a,b,c);
		
		int[] arr = new int[3];
		arr[0]=90; arr[1]=80; arr[2]=70;
		m.sum(arr);
	}
	public void sum(int a, int b, int c){
		int sum=0;
		sum = a + b + c;
		System.out.println("매개변수 3개의 합계 : "+sum);
	}
	public void sum(int arr[]){
		int sum=0;
		//sum = arr[0] + arr[1] + arr[2]; 
		for(int i=0;i<arr.length;i++){
			sum+=arr[i];
		}
		
		System.out.println("매개변수 1개의 합계 : "+sum);
	}
}
