package net.hb.rank;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		ScoreVO r = new ScoreVO();
		ProcImpl p = new ProcImpl();
		Scanner sc = new Scanner(System.in);
		int sel = 0;
		while(true){
			System.out.print("\n1.등록 2.출력 3.삭제 4.수정 5.종료?  ") ;
			sel = sc.nextInt();
			if(sel<0 || sel>9)break;
			 if(sel==5)break;
			switch(sel){
			case 1:p.input(); break;
			case 2:p.display(); break;
			case 3:p.delete(); break;
			case 4:p.edit(); break;
			default : System.out.println("메뉴에서 선택해 주세요");break;
			}
		}
		System.out.println("시스템 종료");
	}
}
