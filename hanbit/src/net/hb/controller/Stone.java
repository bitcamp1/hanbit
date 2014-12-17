package net.hb.controller;

import java.util.Scanner;

import net.hb.stone.ArithmeticSequence;
import net.hb.stone.ComputerPerformance;
import net.hb.stone.DateInfo;
import net.hb.stone.Dice;
import net.hb.stone.Fruit;
import net.hb.stone.FruitImpl;
import net.hb.stone.Gugudan;
import net.hb.stone.One_Ten_Excep3Multi;
import net.hb.stone.SutdaCard;
import net.hb.stone.TwoMultiOr3multi;
import net.hb.stone.UpperCase;

public class Stone {
	public static void main(String[] args) {
		Stone m = new Stone();
	//	m.showSutdaCard();
	//	m.until5_Gugudan();
	//	m.showFruit();
	//	m.getArithSeq();
	//	m.getDiceValue();
	//	m.getUpperCase();
	//	m.getReqTime();
	//	System.out.print("1부터 10까지 수 중에서 3의 배수를 제외한 수는 ? \n");m.getExcep3Multi();
	//	m.is2MultiOr3Multi();
		m.dateInfo();
		
	}
	public void dateInfo(){
		DateInfo di = new DateInfo();
		di.getToday();
		di.getTime();
	}
	public void is2MultiOr3Multi(){
		TwoMultiOr3multi is2or3 = new TwoMultiOr3multi();
		is2or3.isTwoMultiOr3multi();
	}
	
	public void getExcep3Multi(){
		One_Ten_Excep3Multi ote = new One_Ten_Excep3Multi();
		ote.getNum();
		
	}
	
	public void getReqTime(){
		/* 컴퓨터 소요시간 측정 매서드*/
		ComputerPerformance cp = new ComputerPerformance();
		cp.setCurTime(System.currentTimeMillis());
		long start = cp.getCurTime();
		for(int i=0;i<100000000;i++){
			;
		}
		cp.setCurTime(System.currentTimeMillis());
		long end = cp.getCurTime();
		System.out.println("소요시간은 "+(end-start)+" 초입니다.");
		
	}
	
	public void getUpperCase(){
		UpperCase uc = new UpperCase();
		uc.setUpperCase();
		System.out.println(uc.toString());
	}
	
	public void getDiceValue(){
		Dice d = new Dice();
		d.setDiceValue();
		System.out.println(d.toString());
	}
	
	public void getArithSeq(){
		System.out.println("1부터 X까지의 합을 구하려고 한다. X의 값을 입력하시오 (단, 정수만)");
		ArithmeticSequence as = new ArithmeticSequence();
		Scanner sc = new Scanner(System.in);
		as.setNum(sc.nextInt());
		as.setSum(as.getNum());
		System.out.println(as.toString());
	}
	
	public void showFruit(){
		FruitImpl fi = new FruitImpl();
		Fruit f = fi;
		System.out.printf(
				"%s ( %s : %s%s )",
				fi.getItems(),
				fi.getName(),
				fi.getPrice(),
				FruitImpl.WON
		);
		System.out.println();
		System.out.println("※ 결과물은 같지만 윗 쪽 코드가 더 간결하다.");
		System.out.print("과일 ( ");
		System.out.print(f.getName());
		System.out.print(" : ");
		System.out.print(f.getPrice());
		System.out.println("원 )");
		/*
		 업캐스팅 : 상위 자료형에 하위 자료형의 값을 지정하는 것
		 Fruit 인터페이스는 개체 생성이 불가능한 자료형
		 상위 자료형의 변수를 이용해서 하위 자료형의 
		 멤버를 호출할 수 있다.
		 
		 * */
		
	}
	
	public void showSutdaCard() {
		SutdaCard card1 = new SutdaCard();
		SutdaCard card2 = new SutdaCard(1,true);
		System.out.println(card1.toString());
		System.out.println(card2.toString());
	}
	public void until5_Gugudan(){
		Gugudan g = new Gugudan();
		g.until5_Gugudan();
	}
}
