package net.hb.controller;
import java.util.InputMismatchException;
import java.util.NoSuchElementException;
import java.util.Scanner;

import net.hb.model.HanbitDayCounter;
import net.hb.model.MatchGame;
import net.hb.model.MatchGame2;
import net.hb.model.StringTokenizerEx;

public class Main1205 {
	
	public static void main(String[] args) {
		Main1205 m = new Main1205();
		 m.exeSSN();
		// m.exeSplit();
		// m.exeArr();
		// m.exeStringBuffer();
		// m.exeStringTokenizer();
		// m.matchGame();
		// m.matchGame2();
		
		m.countHanbit();
	}
	public void countHanbit(){
		HanbitDayCounter hdc = new HanbitDayCounter();
		int counter = 0;
		while(true){
			try {
				hdc.token();
			} catch (NoSuchElementException e) {
				System.out.println("...");
			}
			counter++;
			if(counter==2)break;
		}
		
	}
	
	public void matchGame2(){
		MatchGame2 mg2 = new MatchGame2();
		System.out.println("☆☆☆☆ 최단횟수로 맞추는 사람이 승리하는 게임입니다.");
		mg2.setCom();
		int compNum = mg2.getCom();
		System.out.println("딜러의 숫자는 정해졌습니다.");
	//	System.out.println(compNum);
		int counter = 0;
		while(true){
			System.out.println("▷▷▷▷  1부터 100까지 정수 입력하세요");
			Scanner sc = new Scanner(System.in);
			int result = 0;
			int playerNum = 0;
			
			try {
				
				playerNum = sc.nextInt();
				mg2.setPlayer(playerNum);
				playerNum = mg2.getPlayer();
				if(playerNum<1 || playerNum>100 ){
					System.out.println("1부터 100 까지 정수만 입력해야 합니다.");
					continue;
				}else{
					
				}
			} catch (InputMismatchException e) {
				System.out.println("문자는 안됩니다.");
				continue;
			}
			if(playerNum==0){
				System.out.println("다시 입력해 주십시오.");
			}else{
				
				result = mg2.game(compNum, playerNum);
			}
			if(result==0){
				System.out.println("당신은 "+counter+" 회전 만에 맞췄습니다. "
						+ "\n게임을 종료합니다.");
				break;
			}else if(result==-1){
				System.out.println("플레이어값이 딜러값보다 작습니다.");
			}else if(result==1){
				System.out.println("플레이어값이 딜러값보다 큽니다.");
			}else{
				System.out.println("결정되지 않은 에러 발생입니다. !!!!!");
			}
			counter++;
			System.out.println(counter+"회전 중입니다.");
		}
	}
	
	public void matchGame(){
		MatchGame mg = new MatchGame();
		System.out.println("총 3회만 입력가능합니다.");
		for(int i=0;i<3;i++){
			System.out.println("◁ 1부터 5까지 정수 입력하세요▷");
			Scanner sc = new Scanner(System.in);
			int result = 0;

			try {
				
				int input = sc.nextInt();
				mg.setPlayer(input);
			} catch (InputMismatchException e) {
				System.out.println("문자는 안됩니다.");
			}
			if(mg.getPlayer()==0){
				System.out.println("다시 입력해 주십시오.");
			}else{
				mg.setCom();
				result = mg.game(mg.getCom(), mg.getPlayer());
			}
			if(result==1){
				System.out.println("맞췄습니다. "
						+ "\n게임을 종료합니다.");
				break;
			}else if(i==2){
				System.out.println("3회 모두 참여했습니다. "
						+ "\n게임에서 패배했습니다."
						+ "\n게임을 종료합니다.");
				break;
			}
		}
		
		
		
	}
	
	public void exeStringTokenizer(){
		StringTokenizerEx stex = new StringTokenizerEx("Happy Day");
		stex.print();
		StringTokenizerEx stex2 = new StringTokenizerEx("2015/08/12","/");
		stex2.print();
	}
	
	public void exeStringBuffer(){
		StringBuffer buf = new StringBuffer();
		// System.out.println("buf 에 주어진 기본 용량 capacity() : "+buf.capacity());
		// System.out.println("length() : "+buf.length());
		StringBuffer buf1 = new StringBuffer("A B C");
		StringBuffer buf2 = buf1.append("D E F");
		String msg = "";
		if(buf1 == buf2){
			msg = "1==2";
		}else{
			msg = "1!=2";
		}
		System.out.println(msg);
		System.out.println(buf1.toString());		
		System.out.println(buf2.toString());
		/*
		 buf2 는 새롭게 생성되어 전달된 객체가 아니며,
		 buf1 이 내부적으로 수정되어 전달 받음으로
		 동일한 주소값을 참조한다.
		 
		 StringBuffer 클래스는 String 클래스와 다르게 무분별하게
		 객체 생성을 하지 않는다.
		 그리고, 직접 수정할 수 있는 가변성의 특징이 있다.
		 그러므로 빈번한 문자열 수정 작업이 필요한 경우 
		 String 클래스 보다 StringBuffer 클래스가 더 유익하다.
		 [출판사]한빛아카데미 자바5.0 p.195
		 * */
		
		
	}
	public void exeArr(){
		int[] arr ; // 선언
		arr = new int[4]; // 생성
		arr[0] = 4; // 할당
		arr[1] = 5; // 할당
		arr[2] = 6; // 할당
		arr[3] = 7; // 할당
		// arr = new int[]{4,5,6,7}; // 생성 + 할당
		// int[] arr = {4,5,6,7};    // 선언 + 생성 + 할당
		for( int i=0; i<arr.length; i++){
		     System.out.print("\t"+arr[i]);
		}
		System.out.println();
		System.out.println("향상 for loop 출력");
		for(int i : arr){
			System.out.print("\t"+i);
		}
	}
	public void exeSplit(){
		String fruit = "apple,banana,cherry,orange";
		String[] fruits = fruit.split(",");
		for(int i=0;i<fruits.length;i++){
			System.out.print("\t"+fruits[i]);
		}
		
		
	}
	
	public void exeToLocationString(){
		/*
		 * toString() toLocationString()

			toString 메서드는 배열의 모든 원소를 문자열로 변환하고 쉼표(,)로 분리한 목록을 반환한다
			
			변환된 문자열은 구분자를 포함하지 않는다
			
			toLocationString()은 toString의 지역화 버전
			
			[1, 2, 3].toString(); //결과 '1, 2, 3'
			
			["a", "b", "c"].toString(); //결과 'a, b, c'
			
			[1,['a','b'], 2].toString; //결과 '1,a,b,2'

		 * */
		
	}
	public void exeSSN(){
		String ssn = "850719-2566789";
		char isMan = ssn.charAt(ssn.indexOf("-")+1); 
		switch (isMan) {
			case '1' : System.out.println("남성");break;
			case '2' : System.out.println("여성");break;
			default : System.out.println("잘못된 값");break;
		}
		String birthday = ssn.substring(0,ssn.indexOf(ssn.charAt(ssn.indexOf("-"))));
		System.out.println(ssn.charAt(ssn.indexOf("-")-1));
		System.out.println("생년월일 : "+birthday);
	}
	
	public void exeStringEquals(){
		String s1 = "A B C";
		String s2 = "a b c";
		String msg = null;
		
		if(s1.equals(s2)){
			msg = "s1 과 s2 는 내용이 같다";
		}else{
			msg = "s1 과 s2 는 내용이 다르다";
		}
		System.out.println(msg);
		
		// equalsIgnoreCase(String str) 관련 예제는 건너 띔
		
		msg = String.format("%20s , %s", s1, s2); 
		// %20s 는 20칸 만큼 공백이 생김
		
	
	}
}
