package net.hb.books;

import java.util.HashSet;


public class MainHanBitBook7 {
	public static void main(String[] args) {
		MainHanBitBook7 hs = new MainHanBitBook7();
		hs.new HashSetEx().testHashSet();
	}
	 class HashSetEx {
			public void testHashSet(){
				String[] arr = {"A","B","A","C"};
				HashSet<String> h1 = new HashSet<String>();
				HashSet<String> h2 = new HashSet<String>();
				for(String n: arr){
					if(!h1.add(n)){
						h2.add(n);
					}
				}
				System.out.println("h1 : " + h1); // HashSet 은 중복 허용 X
				System.out.println("h2 : " + h2);
				h1.removeAll(h2);
				System.out.println("h1 : " + h1);
				System.out.println("h2 : " + h2);
			}
		}

}
