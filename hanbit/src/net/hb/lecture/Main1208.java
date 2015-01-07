package net.hb.lecture;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.StringTokenizer;

import net.hb.rps.game.RockPaperScissors;
import net.hb.service.RPSgame;

import com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo;

public class Main1208 {
	public static void main(String[] args) {
		Main1208 m = new Main1208();
		// m.splitEx();
		
		// m.getStringTokenizeEx2();
		
		// m.sortTest();
		m.gameRPS();
		
	}
	public void gameRPS(){
		System.out.println("가위바위보 게임을 시작합니다.");
		while(true){
			RockPaperScissors rps = new RockPaperScissors();
			Scanner sc = new Scanner(System.in);
			
			System.out.println("가위:1 바위:2 보:3 을 입력해주세요");
			
			ValidationUtil util = new ValidationUtil();
			
			try {
				int player = sc.nextInt();
				int a=1;
				int b=3;
				if(player<a||player>b){
					System.out.println(util.showRange(a,b));
					continue;
				}
				String playerRPS = rps.setRpsValue(player);
				System.out.println("당신은 "+playerRPS+" 를 냈습니다.");
				int computer = (int)((Math.random()*3)+1);
				String computerRPS = rps.setRpsValue(computer);
				
				RPSgame rpsg = new RPSgame();
				System.out.println("컴퓨터는 "+computerRPS+"이고, 결과는 "+rpsg.playGame(player, computer)+" 입니다.");
			} catch (java.util.InputMismatchException e) {
				System.out.println(util.showWrongType());
				continue;
			}
			
		}
		
		
	}
	
	public void sortTest(){
		SortUtil util = new SortUtil();
		SortUtil util2 = new SortUtil();
		List<Integer> list = new ArrayList<Integer>();
		List<Integer> list2 = new ArrayList<Integer>();
		int[] arr = {8,6,2,5,7,1};
		list = util.getAscSort(arr);
		list2 = util2.getDescSort(arr);
		System.out.println("오른차순 정렬 : "+list.toString());
		System.out.println("내림차순 정렬 : "+list2.toString());
	}
	public void ex03(){
		String ssn = "850101-1234567";
		ssn.charAt(7);
		ssn.indexOf("-");
		Math.random();
		System.currentTimeMillis();
		Integer.parseInt("12000");
		Scanner scan = new Scanner(System.in);
		
	}
	
	
	public void splitEx(){
		System.out.println("▶String.spliit() Exercise");
		String date = "2015/08//15";
		String[] sp = date.split("/",5);
		for(int i=0;i<sp.length;i++){
			System.out.println("sp["+i+"] : "+sp[i]);
		}
		Main1208 m = new Main1208();
		m.tokEx();
		
	}
	public void tokEx (){
		System.out.println("▶StringTokenizer Exercise");
		String date = "2015/08//15";
		StringTokenizer st = new StringTokenizer(date,"/");
		int index=0;
		while(st.hasMoreTokens()){
			String token = st.nextToken();
			System.out.println("sp["+index+"] : "+token);
			index++;
			
		}
	}
	public void getStringTokenizeEx2(){
		StringTokenizerEx2 stx2 = new StringTokenizerEx2();
		System.out.println("StringTokenizerEx2 의 출력값");
		for(int i=0;i<stx2.getDates().size();i++){
			System.out.println(stx2.getDates().get(i));
			
		}
		
	}
}
