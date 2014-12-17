package net.hb.stone;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateInfo {
	
	
	Date today = new Date();
	
	public void getToday() {
		SimpleDateFormat date = new SimpleDateFormat("yyyy/MM/dd");
		System.out.println("오늘 날짜 : "+date.format(today));
	}
	public void getTime() {
		SimpleDateFormat time = new SimpleDateFormat("hh:mm:ss a");
		System.out.println("현재 시간 : "+time.format(today));
	}
	
	
}
