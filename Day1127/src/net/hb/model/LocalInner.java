package net.hb.model;

public class LocalInner {
	int a = 100;
	public void innerTest(int k){
		int b = 200;
		final int c = k;
		class Inner{
			public void getDate(){
				System.out.println("멤버변수 a: "+a);
				System.out.println("상수 c: "+c);
				/*
				 Local 내부 클래스에서는 외부 클래스의 멤버를 접근하는데 있어서
				 제한이 따른다. 우선 외부 클래스의 멤버변수는 접근할 수 있다.
				 하지만 메서드 내에 있는 지역변수는 접근할 수 없다.
				 * */
				// System.out.println("지역변수 b" + b);
				// 이렇게 코딩하면 b에서 에러메시지가 뜬다.
			}
		}
		Inner i = new Inner();
		i.getDate();
	}
	
}
