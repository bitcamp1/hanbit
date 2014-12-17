package net.hb.controller;

class MyRunnableOne implements Runnable{
	
	
	
	@Override
	public void run() {
		System.out.println("run");
		first();
		
	}

	public void first() {
		System.out.println("first");
		second();
		
	}

	public void second() {
		System.out.println("second");
		
	}
	

}

public class UncertainThread{
	public static void main(String[] args) {
		System.out.println("main start");
		Thread myThr = new Thread(new MyRunnableOne());
		myThr.start();
		
		try {
			myThr.join(); // main end 를 나중으로 미뤄버린다.
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		System.out.println("main end");  // main Thread 가 우선이다.
	}
}
