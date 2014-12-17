package net.hb.controller;

import net.hb.model.CarGameTest;
import net.hb.model.Note;
import net.hb.model.WindowEventEx;

public class Main1215 {
	
	public static void main(String[] args) {
		Main1215 m = new Main1215();
	//	m.getWindowEventEx();
		
	//	 m.getCarGameTest();
		
	//	m.getGabbGame();
		
		m.getNote();
	}
	public void getNote(){
		Note note = new Note();
	}
	
	public void getWindowEventEx(){
		new WindowEventEx();
	}
	public void getCarGameTest(){
		new CarGameTest();
	}
	
	

}
