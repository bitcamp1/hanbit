package net.hb.model;

public class IndexOfEx {
	private String str = "Kown Sun Ae";
	public void getIdx() {
		
		System.out.println("테스트용 단어 : "+str);
		int idx = str.indexOf('n');
		System.out.println("맨 처음 문자  n 의 위치 : " + (idx +1) +"번째");
		idx = str.indexOf("Sun");
		System.out.println("문자 Sun 의 위치 : "+(idx+1)+"번째");
		idx = str.lastIndexOf('n');
		System.out.println("맨 마지막 문자 n 의 위치 : " + (idx+1)+"번째");
		char c = str.charAt(idx);
		System.out.println("추출한 문자 : " + c);
		idx = str.indexOf('S');
		String str2 = str.substring(idx);
		System.out.println("대문자 S로부터 끝까지 잘라내기 : " + str2);
		
		int length = str.length();
		System.out.println("str의 길이" + length);
		String[] arr = str.split(" ");
		for(int i=0;i<arr.length;i++){
			System.out.println("arr["+i+"] : "+ arr[i]);
		}
		
	}

	
	
	
	
}
