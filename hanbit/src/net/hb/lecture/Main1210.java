package net.hb.lecture;

import java.awt.Frame;

public class Main1210 {
	public static void main(String[] args) {
		Main1210 m = new Main1210();
		
		m.getAnonyInner();

		// m.getStaticInner();
		
		// m.getLocatInner();
		
		// m.getMemberInner();
	}
	
	public void getAnonyInner2(){
		
		AnonyInner2 ai = new AnonyInner2();
		ai.inn.printData();  // 추상클래스
		
		/*
		 앞의 인터페이스와 추상클래스를 구분지어 쓰는 이유는 무엇인가
		 추상클래스 디렉토리에는 AnonyInner2$1.class 라는 파일이 존재한다.
		 이런 파일들이 바로 익명 내부 클래스들이 컴파일되어 생성된 바이트 코드이다.
		 이름이 정의 되지 않아 컴파일러가 임의로 숫자를 붙여 클래스 이름을 정한 것이다.
		 
		 추상클래스는 객체인 inn 이 정의되어서 여러군데애서 사용 가능한 점이 다르다.
		 * */
	}
	
	public void getAnonyInner(){
		AnonyInner ai = new AnonyInner();
		ai.test(); // 인터페이스
	}
	
	public void getStaticInner(){
		StaticInner.Inner inner = new StaticInner.Inner();
		inner.printData();
	}
	
	public void getLocatInner(){
		LocalInner outer = new LocalInner();
		outer.innerTest(1000);
	
	}
	public  void getMemberInner() {
		MemberInner.Inner inner = new MemberInner().new Inner();
		inner.printData();
	}
	//Android 에서 많이 사용. 내부클래스
	class Game extends Thread{
	     class MyExit extends Frame{}
	}
}


