package net.hb.model;

import java.util.StringTokenizer;

public class StringTokenizerEx {
	StringTokenizer tok;
	public StringTokenizerEx(String str) {
		tok = new StringTokenizer(str);
	}
	public StringTokenizerEx(String str, String delim) {
		tok = new StringTokenizer(str, delim);
	}
	public StringTokenizerEx(String str, String delim, Boolean returnDelims) {
		tok = new StringTokenizer(str, delim, returnDelims);
	}
	public void print(){
		System.out.println("Token count : "+ tok.countTokens());
		while(tok.hasMoreTokens()){
			String token = tok.nextToken();
			System.out.println(token);
		}
		System.out.println("----------------------------");
	}
}
