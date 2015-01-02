package net.hb.model;


public class Main1128 {
	public static void main(String[] msg){
		
		StarPrinter star = new StarPrinter();
		System.out.println("Q.직각삼각형 그리기 ?");
		star.m1();
		star.m2();
		star.m3();
		star.m4();
	
		System.out.println();
		System.out.println("Q.1부터 10까지 합 ?");
		OneTenHap oth = new OneTenHap();
		int resultVal = oth.getHap();
		System.out.println("1부터 10까지 합은 "+resultVal+" 입니다.");
	
	}
	
}
