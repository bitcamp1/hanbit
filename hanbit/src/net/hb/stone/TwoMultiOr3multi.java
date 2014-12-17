package net.hb.stone;

public class TwoMultiOr3multi {

	public void isTwoMultiOr3multi() {
		int x = (int)(Math.random()*100+1);
		if(x%2==0 || x%3==0){
			System.out.println("x는 "+x+" 이며, 2 또는 3의 배수 입니다.");
		}else{
			System.out.println("x는 "+x+" 이며, 2 또는 3의 배수가 아닙니다.");
		}
	}
	
}
