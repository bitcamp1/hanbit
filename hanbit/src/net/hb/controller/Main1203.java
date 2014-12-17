package net.hb.controller;

import net.hb.model.Grade;

public class Main1203 {
	public static void main(String[] args) {
		Grade gr = new Grade();
		int kor = 78;
		int eng = 92;
		gr.setSum(kor,eng);
		gr.setAvg(gr.getSum());		
		System.out.println("총점은 "+gr.getSum()+" 이고,");
		System.out.println("평균은 "+gr.getAvg()+" 이고,");
		gr.setGrade(gr.getAvg());
		
	}
}
