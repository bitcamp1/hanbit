package net.hb.model;

import java.text.DecimalFormat;
import java.text.NumberFormat;

public class SimpleCalc {
	
	int a;
	int b;
	Float result = (float) 0.0;
	
	public SimpleCalc() {
		
	}
	public int getA(int a) {
		return a;
	}
	public void setA(int a) {
		this.a = a;
	}
	public int getB(int b) {
		return b;
	}
	public void setB(int b) {
		this.b = b;
	}
	public float getResult() {
		return result;
	}
	public void setResult(int a,char op, int b) {
		NumberFormat nf = new DecimalFormat("#.#");
		
		switch(op){
		case '+': result = (float) (a+b);break;
		case '-': result = Float.parseFloat(nf.format(a-b));break;
		case '*': result = (float) (a*b);break;
		case '/': result = Float.parseFloat(nf.format((a/b))) ;break;
		case '%': result = (float) (a%b);break;
		default : result = null;break;
		}		
		
	}
	
	
	
	
}
