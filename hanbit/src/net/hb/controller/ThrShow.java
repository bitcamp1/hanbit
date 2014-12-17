package net.hb.controller;

import java.util.Scanner;

public class ThrShow implements Runnable{
	
	@Override
	public void run() {
		int num=0;
		while(true){
			num++;
			try{
				Thread.sleep(500);
			}catch(Exception ex){
				
			}
			System.out.print(num+"\t");
			if(((num%5)==0)){
				System.out.println();
			}
			
			else if(num==20){
				break;
			}
		}
		
	}
	
	
	public static void main(String[] args) {
		
		new Thread(new ThrShow()).start(); 
		
		
		
		
		Scanner sc = new Scanner(System.in);
		int dan=1;
		System.out.println("단입력");
		dan = sc.nextInt();
		for(int i=0;i<10;i++){
			System.out.println(dan+"*"+i+"*"+(dan*i));
			if(i==5)break;
		}
		
		
	}


	


}

