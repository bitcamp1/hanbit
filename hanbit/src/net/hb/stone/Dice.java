package net.hb.stone;

public class Dice {
	private int diceValue;

	public int getDiceValue() {
		return diceValue;
	}

	public void setDiceValue() {
		this.diceValue = (int)((Math.random()*6)+1);
		
		/*
		(int)(Math.random()*6)+1
		6은 범위 , 1은 시작값
		예를들어 0부터 100까지이면
		(int)Math.random()*100 + 0
		
		Math.floor(Math.random()*10)=1
		Math.round(Math.random()*10)=2
		 * */
	}
	@Override
	public String toString() {
		return "주사위를 던진 값은 "+getDiceValue()+" 입니다.";
	}
	
	
}
