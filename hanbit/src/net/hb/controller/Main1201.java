package net.hb.controller;

import java.util.Scanner;

import net.hb.model.BigNum;
import net.hb.model.Gugudan;
import net.hb.model.Multi5;
import net.hb.model.SimpleCalc;

public class Main1201 {
	public static void main(String[] args) {
		Main1201 m = new Main1201();
		m.getSumAvg(); 
		//m.altShiftM();
		
		//System.out.println("데이터등록처리 50라인");
		//System.out.println("데이터조회처리 23라인");
		//System.out.println("데이터삭제처리 35라인");
		
		//m.getBigNum();
		
		// m.getFullGugudan();
		
		
		
	}
	public void getFullGugudan() {
		Gugudan ggd = new Gugudan();
		ggd.getFullGugudan();
	}
	public void getBigNum() {
		BigNum bn = new BigNum();
		int a = 23;
		int b = 79;
		int c = 14;
		bn.getBig(a, b, c);
	}
	public void dbInsert(){}
	public void dbSearch(){}
	public void dbDelete(){}
	

	public void getSumAvg(){
		Scanner sc = new Scanner(System.in);
		System.out.println("영어점수 입력");
		int eng = sc.nextInt();
		System.out.println("국어점수 입력");
		int kor = sc.nextInt();
		Main1201 m = new Main1201();
		m.setSum(eng,kor);
	}
	
	public void setSum(int a,int b) {
		
		
		SimpleCalc cal = new SimpleCalc();
			cal.setResult(a, '+', b);
			System.out.println("총합 :"+cal.getResult());
			cal.setResult((int)cal.getResult(), '/', 2);
			System.out.println("평균 :"+cal.getResult());
	}


	public void altShiftM() {
		Multi5 dh = new Multi5();
		dh.getDanhang();
	}
}
