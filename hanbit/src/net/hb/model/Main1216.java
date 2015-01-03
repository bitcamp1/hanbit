package net.hb.model;

import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;


public class Main1216 {
	public static void main(String[] args) {
		Main1216 m = new Main1216();
		m.new InnerClassEx();
	}
	class InnerClassEx {
		
		
		public class Fruit{
			public void getApple(){}
			public void getBanana(){}
		}
		class MyExit extends WindowAdapter{

		//	@Override
			public void windowClosing(WindowEvent we) {
				System.out.println("MyExit 클래스 windowClosing(we)");
				System.exit(0);
			}
			// 원하는 메소드만 재정의 
			
		}
	}
	
}
