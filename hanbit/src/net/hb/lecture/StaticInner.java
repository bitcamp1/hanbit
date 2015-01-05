package net.hb.lecture;

public class StaticInner {
	int a = 10;
	private int b = 100;
	static int c = 200;
	
	public static class Inner{
		static int d = 1000;
		public void printData(){
			// System.out.println("int a : "+a); 
			// a 에 에러가 발생한다.
			// 즉 static 내부 클래스는 사실 더 이상의 내부 클래스가 아니다.
			// 또한 외부클래스를 거치지 않고도 접근할 수 있다.
			// 따라서 top level class 라고 하여 최상위 클래스라 한다.
			// 어쩔수 없이 내부 클래스를 static 으로 선언해야 할 경우가 있다.
			// 그건 바로 내부 클래스의 멤버들 중 하나라도
			// static 멤버가 있을 경우다.
			// System.out.println("private int b :" +b ); 에러
			System.out.println("static int c :" + c);
		}
	}
}
