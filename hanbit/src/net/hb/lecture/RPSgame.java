package net.hb.lecture;


public class RPSgame {
	
	
	int win=1;
	int loss=2;
	int tie=3;
	static String resultValue;
	String result = "";
	
	public static String getResultValue(int result){
		
		switch (result){
		case 1 : resultValue="승리";break;
		case 2 : resultValue="패배";break;
		case 3 : resultValue="비김";break;
		default : break;
		}
		return resultValue;
		
		
	}
	
	
	public String playGame(int a, int b){
		if(a==b){
			result=getResultValue(3);
			return result;
		}
		switch (a){
			case 1 : result = ( b == 2 )? getResultValue(2):getResultValue(1);break;
			case 2 : result = ( b == 3 )? getResultValue(2):getResultValue(1);break;
			case 3 : result = ( b == 1 )? getResultValue(2):getResultValue(1);break;
			default : result="다시 해주세요";break;
		}
		return result;
		
	}
	public String getResult(String result){
		return result;
	}
	
}
	
	
