package net.hb.lecture;

public class AssertGugudan {
	
	public void gugudan(int dan){
		assert dan > 1 && dan < 10 : "2 ~ 9 단 중 하나를 입력하세요";
		
		System.err.println(dan+"단");
		System.out.println("--------------");
		StringBuffer buf = new StringBuffer();
		for(int i=0;i<9;i++){
			buf.delete(0, buf.length());
			buf.append(dan);
			buf.append("*");
			buf.append(i+1);
			buf.append("=");
			buf.append(dan*(i+1));
			System.out.println(buf.toString());
		}
		
	}
	
	
	
}
