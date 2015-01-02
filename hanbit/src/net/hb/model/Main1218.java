package net.hb.model;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Main1218 {
	/*
	 * io
	 * InputStream is  = System.in;
	 * PrintStream ps = System.out;
	 * 
	 * */
	
	public static void main(String[] args) throws IOException {
		Main1218 m = new Main1218();
		System.out.println("진행 프로스세 번호 입력");
		
		int flag=m.getNumScanner();
		switch(flag){
			case 1 : m.exDataInputStream();break;    // 한글 깨짐
			case 2 : m.getGugudan();break;
			case 3 : m.getYourName();break;
			case 4 : m.exScanner();break;
			case 5 : m.exFileReader();break;
			default : System.out.println("선택값이 없습니다.");break;
		}
		
		
		
	}
	
	
	
	public void exFileReader() throws IOException{
		FileReader fr = null; 
		try {
			int readChar;
			fr = new FileReader("c:"+File.separator+"myFolder"+File.separator+"whitesnow.txt");
			while((readChar = fr.read())!=-1){
				System.out.print((char)readChar);
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}finally{
		if(fr!=null)
			try {
				fr.close();
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		}
	}
	
	
	public void exScanner(){
		Scanner sc = new Scanner(System.in);
		System.out.println("이름 입력 ?");
		System.out.println("이름 : "+sc.nextLine());
	}
	
	public void exDataInputStream() throws IOException{
		String name = "";
		DataInputStream dis  = new DataInputStream(System.in);
		System.out.println("이름 입력 ?");
		name = dis.readLine();
		System.out.printf("당신의 이름은 %s 입니다", name);
		
	}
	
	public void getGugudan() throws IOException {
		
		System.out.println("단 입력 ?");
		int dan = getNumScanner();
		for(int i=0;i<10;i++){
			System.out.printf("%d * %d = %d\n",dan, i, dan*i);
		}
	}
	public int getNumScanner() throws NumberFormatException, IOException{
		
		int num=0;
		try {
			num = Integer.parseInt(new BufferedReader(new InputStreamReader(System.in)).readLine());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return num;
	}
	public String getStrScanner(){
		
		String str = "";
		
		try {
			str = new BufferedReader(new InputStreamReader(System.in)).readLine();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return str;
	}
	public void getYourName(){
		System.out.print("당신의 이름을 입력하세요.");
		String name = "";
		try {
			name = new BufferedReader(new InputStreamReader(System.in)).readLine();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.printf("당신의 이름은 %s 입니다.",name);
	}
	
}
