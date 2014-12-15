package net.hb.model;

import java.util.Scanner;


public class Motel {
	private int floor;	//층	//3층까지
	private int room;	//호	//5호까지
	String name[][] = new String[3][5];	//3층5호
	
	public void process(){
		Scanner sc = new Scanner(System.in);
		int sel = 0;
		while(true){
			showStatus();
			System.out.print("1.투숙  2.퇴실  3.map  4.종료? ");
			sel = inputCheck(4);
			
			switch(sel){
				case 1:	//투숙
					checkIn();
					break;
				case 2:	//퇴실
					checkOut();
					break;
				case 3:	//전체보기
					showStatus();
					break;
				case 4:
					System.out.println("종료하겠습니다.");
					return;
			}
			
		}//while end
	}//end

	public int inputCheck(int n){
		Scanner sc = new Scanner(System.in);
		int r = 0;
		
		while(true){
			try{
				r = sc.nextInt();
			}catch(Exception e){
				System.out.println("범위에 맞는 숫자를 다시 입력해주세요");
				sc.next();
				continue;
			}
			if(r <= n && r > 0){
				return r;
			}else{
				System.out.println("범위에 맞는 숫자를 다시 입력해주세요");
				continue;
			}
		} //while end
	}//end
	
	public void checkIn(){
		Scanner sc = new Scanner(System.in);
		
		System.out.print("> 몇층에 투숙? ");
		this.floor = inputCheck(3);
		System.out.print("> 몇호에 투숙? ");
		this.room = inputCheck(5);
		if( this.name[floor-1][room-1] != null ){
			System.out.println("# 이미 투숙중인 방입니다.");
			return ;
		}
		System.out.print("> ????투숙객 이름? ");
		this.name[floor-1][room-1] =sc.nextLine(); 
		System.out.println("# 성공적으로 checkIn 되었습니다.");
	}//end
	
	public void checkOut(){
		System.out.print("> 몇층에서 퇴실? ");
		this.floor = inputCheck(3);
		System.out.print("> 몇호에서 퇴실? ");
		this.room = inputCheck(5);
		if( this.name[floor-1][room-1] == null ){
			System.out.println("# 이미 빈 방입니다.");
			return ;
		}
		this.name[floor-1][room-1] = null;
		System.out.println("# 성공적으로 checkOut 되었습니다.");
	}//end
	
	public void showStatus(){
		System.out.println("\t[ 호텔의 투숙 상태 ]");
		for(int i = 0; i < 3; i++){
			for(int j = 0; j < 5; j++){
				System.out.print((i+1)+"0"+(j+1)+"\t");
			}
			System.out.println("");
			for(int j = 0; j < 5; j++){
				if(this.name[i][j] == null){
					System.out.print("\t");
					continue;
				}
				System.out.print(this.name[i][j]+"\t");
			}
			System.out.println("");
			System.out.println("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
		}
		System.out.println("");
	} //end
	
	

} //class END
