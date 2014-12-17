package net.hb.stone;

public class UpperCase {
	private char upperCase;
	private char lowerCase;
	public char getUpperCase() {
		return upperCase;
	}
	public void setUpperCase() {
		this.upperCase = (char)(Math.random()*26+65);
	}
	public char getLowerCase() {
		return lowerCase;
	}
	public void setLowerCase(char lowerCase) {
		this.lowerCase = lowerCase;
	}
	@Override
	public String toString() {
		return "임의의 알파벳 대문자는 "+getUpperCase()+" 입니다.";
	}
	
	
	
	
	
}
