package net.hb.lecture;

import net.hb.service.TestInterface;


public class AnonyInner {
	public void test(){
		new TestInterface() {
			
			@Override
			public void printData() {
				System.out.println("data :"+data);
				
			}
		}.printData();;
	}
}
