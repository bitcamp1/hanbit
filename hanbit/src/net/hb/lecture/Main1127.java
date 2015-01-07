package net.hb.lecture;

import java.util.InputMismatchException;
import java.util.NoSuchElementException;
import java.util.Scanner;

import net.hb.gugudan.Gugudan;

public class Main1127 {
	public static void main(String[] args) {
		Main1127 m = new Main1127();
		m.showGugudan();
		// m.showCurTime();
		// m.sumKorAndEng();
	}

	public void showGugudan() {
		
		while(true){
			System.out.print("단 입력? ");
			try {
				Scanner sc = new Scanner(System.in);
				Gugudan ggd = new Gugudan();
				ggd.getGugudan(sc.nextInt());
			} catch (InputMismatchException e) {
				System.out.println("2부터 9까지 정수만 입력하세요");
			}catch(NoSuchElementException e2){
				System.out.println("프로그램을 종료합니다.");
			}
		}
	
	}

	public void sumKorAndEng() {
		Scanner sc = new Scanner(System.in);
		System.out.println("국어점수 ? ");
		int kor=0,eng=0;
		kor=sc.nextInt();
		System.out.println("영어점수 ? ");
		eng=sc.nextInt();
		
		System.out.println("국어="+kor);
		System.out.println("영어="+eng);
		System.out.println("합계="+(kor+eng));
	}

	public  void showCurTime() {
		NowTime nt = new NowTime();
		System.out.println("\n\n 현재시간 ? "+nt.getCurTime());
	}
}
