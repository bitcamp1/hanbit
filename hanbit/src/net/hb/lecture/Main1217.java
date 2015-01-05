package net.hb.lecture;

import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

import net.hb.books.ThrShow;

public class Main1217 {
	public static void main(String[] args) {
		
		Main1217 m = new Main1217();
		m.new ThrFileWriterGugudan();
	}
	class ThrFileWriterGugudan implements Runnable{
		ThrFileWriterGugudan(){
			getThrGugudan();
		}
		
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
		void getThrGugudan(){
			new Thread(new ThrShow()).start(); 
			System.out.println("단입력");
			Scanner sc = new Scanner(System.in);
			int dan=1;
			dan = sc.nextInt();
			
			try {
				File file = new File("c:"+File.separator+"myFolder");
				if(!file.exists()){
					file.mkdir();
				}
				File txt = new File("c:"+File.separator+"myFolder"+File.separator+"gugudan.txt");
				PrintWriter pw = new PrintWriter(txt);
				for(int i=0;i<10;i++){
					pw.printf("%d * %d = %d\t",dan ,i ,dan*i);
					pw.println("");
					if(i==5)break;
				}
				System.out.println("저장성공!!");
				pw.close();
			} catch (java.util.NoSuchElementException e) {
				System.out.println("갑작스러운 종료입니다.");
			}catch(Exception e2){
				e2.printStackTrace();
			}
		}
		
	}
	
	

}
/*
13장. 쓰레드

자바에서 Thread  구현은 Thread, Runnable 인터페이스
자바에서 Thread 는 무한루프 처리를 독립적으로 처리

무한루프 처리를 반드시 run() 함수에서 구현
run() 함수는 start() 메소드로 호출
안드로이드에서  Handler 클래스로도 구현가능


 * 
 * */