package net.hb.lecture;

import java.text.DecimalFormat;

public class Grade {
	private int sum;
	private double avg;
	private char grade;
	public int getSum() {
		return sum;
	}
	public void setSum(int a, int b) {
		this.sum = a + b;
	}
	public double getAvg() {
		
		return avg;
	}
	public void setAvg(int sum) {
		DecimalFormat df = new DecimalFormat("#.#");
		double avg  = Double.parseDouble(df.format(sum/2));
		this.avg = avg;
	}
	public char getGrade() {
		return grade;
	}
	public void setGrade(double avg) {
		int intAvg = (int)(getAvg()/10);		
		char grade;
		switch (intAvg){
		case 9 : grade = 'A';break;
		case 8 : grade = 'B';break;
		case 7 : grade = 'C';break;
		case 6 : grade = 'D';break;
		case 5 : grade = 'E';break;
		default : grade = 'F';break;
		}
		System.out.println("학점은 "+ grade + "입니다.");
		
		
	}
	
	
}
