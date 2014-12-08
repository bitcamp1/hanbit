package net.hb.model;


public class RockPaperScissors {
	
	
	int rock;
	int paper;
	int scissors;
	String rpsValue;
	
	public int getRock() {
		return rock;
	}
	public void setRock(int rock) {
		this.rock = 2;
	}
	public int getPaper() {
		return paper;
	}
	public void setPaper(int paper) {
		this.paper = 3;
	}
	public int getScissors() {
		return scissors;
	}
	public void setScissors(int scissors) {
		this.scissors = 1;
	}
	public String getRpsValue() {
		return rpsValue;
	}
	public String setRpsValue(int value) {
		
		switch(value){
		case 1: rpsValue="가위";break;
		case 2: rpsValue="바위";break;
		case 3: rpsValue="보";break;
		}
		return rpsValue;
		
	}
	
	
	
	

	
	
}
