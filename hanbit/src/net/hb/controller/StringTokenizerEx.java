package net.hb.controller;

import java.util.StringTokenizer;

public class StringTokenizerEx {
	public static void main(String[] args) {
		String tx = "15 홍길동은살이다.";
		StringTokenizer tok  = new StringTokenizer(tx,"|");
		int year = Integer.parseInt(tok.nextToken());
		System.out.println(year);
		System.out.println(tok.countTokens()+"개");
	/*	while(tok.hasMoreTokens()){
			System.out.println(tok.nextToken());
		}*/
	}
}
