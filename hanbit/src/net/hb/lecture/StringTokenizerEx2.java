package net.hb.lecture;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class StringTokenizerEx2 {
	
	public List<String> getDates(){
		List<String> dates = new ArrayList<String>();
		StringTokenizer st = new StringTokenizer("2015/08//15","/");
		String year = st.nextToken();
		String month = st.nextToken();
		String day = st.nextToken();
		dates.add(year);
		dates.add(month);
		dates.add(day);
		return dates;
	}
	
	
	
	
	
}
