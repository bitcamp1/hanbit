package net.hb.model;

public class MemberInner {
	int a = 10;
	private int b = 100;
	static int c = 200;
	
	public class Inner{
		public void printData(){
			System.out.println("int a :"+a);
			System.out.println("※ private int b :"+b); 
			// private 이라도 멤버변수 접근에 제한이 없다
			System.out.println("static int c :"+c);
		}
	}
	
}
