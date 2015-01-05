package net.hb.lecture;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class HanbitDayCounter {
	
	final String startDate = "2014-11-24";
	int day, month, startYear, startMonth, startDay;
	
	public List<Integer> token(){
		StringTokenizer tok = new StringTokenizer(startDate,"-");
		/*
		 이것은 디버깅 이고...
		 while(tok.hasMoreTokens()){
			String token = tok.nextToken();
			System.out.println(token);
		}
		난 다음 것들이 필요하다.
		*/
		int startYear = Integer.parseInt(tok.nextToken());
		int startMonth = Integer.parseInt(tok.nextToken());
		int startDay = Integer.parseInt(tok.nextToken());
		
		List<Integer> tokens = new ArrayList<Integer>();
		tokens.add(startYear);
		tokens.add(startMonth);
		tokens.add(startDay);
		return tokens;
	}
	
	public int getStartYear() {
		return startYear;
	}

	public void setStartYear(int startYear) {
		
		this.startYear = Integer.parseInt(String.valueOf(startDate.substring(0, 3)));
	}

	public int getStartMonth() {
		return startMonth;
	}

	public void setStartMonth(int startMonth) {
		//String[] units = 
		//this.startMonth = startDate.substring(startDate.charAt("-")+1, endIndex);
	}

	public int getStartDay() {
		return startDay;
	}

	public void setStartDay(int startDay) {
		this.startDay = startDay;
	}

	public String getStartDate() {
		return startDate;
	}

	public int getDay() {
		
		/*	int startYear 
		int days=0;
		int months=getMonth();
		switch(){}
		days = getMonth() * 30;*/
		
		return day;
	}

	public void setDay(int day) {
		this.day = day;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}
	
	
	
}
