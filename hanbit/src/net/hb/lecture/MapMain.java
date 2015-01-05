package net.hb.lecture;

import java.util.Hashtable;
import java.util.Iterator;

/*
 * ===================================================================
 Map 인터페이스

 1. Key와 Key에 대응하는 값으로 이루어진 구조 

 2. 키가 존재하면 값을 검색하는 과정이 쉬워진다. 

 ====================================================================
 Hashtable 테스트 

 * 
 * */
public class MapMain {
	// 키는 중복이 되어서는 안된다.
	static final String[] name = { "홍길동", "이순신", "강감찬", "이성계", "정약용", "황희" };
	static final String[] tel = { "111-1111", "222-2222", "333-3333",
			"444-4444", "555-5555", "666-6666" };

	public static void main(String[] args) {

		// Hashtable에서 <String, String>은 키와 값을 지정한 것.
		Hashtable<String, String> h = new Hashtable<String, String>();

		// 배열의 자료를 Hashtable에 입력=> put() 메소드 사용
		// 키는 중복된 자료를 가급적 피해야 한다.
		// 값은 중복된 자료라도 상관없다
		for (int i = 0; i < name.length; i++) {
			h.put(tel[i], name[i]); // put(키, 값)
		}

		// 반복자를 이용한 출력
		// Map 구조에서는 Iterator가 없다.
		// 키는 Set 구조 지원하며,
		// Set은 Iterator를 지원하므로
		// Hashtable의 keySet() 메소드로 Set를 먼저 구하고
		// Set의 Iterator를 구하면
		// Map 구조에서 항목을 하나씩 가져올 수 있다.
		Iterator<String> it = h.keySet().iterator();
		while (it.hasNext()) {
			String key = it.next(); // 키 가져오기
			String value = h.get(key); // 키를 이용한 값 가져오기
			System.out.printf("%s : %s%n", key, value);
		}
		// =>주의. 출력은 입력된 순서와 일치하지 않는다.

		// Vector에서는 요소를 가져올때 get(인덱스) 사용
		// Hashtable에서는 요소를 가져올때 get(키) 사용

		// 검색 과정을 비교한다면
		// 창고에서 물건을 찾는다고 가정한다면
		// Vector은 창고에서 처음부터 끝까지 확인하면서 찾음
		// Hashtable은 먼저 장부를 보고(key) 창고 위치(value)를 확인한 후 직접 찾음

		// 특정 키를 가진 값 출력
		System.out.println(h.get("111-1111")); // 일치하는 value를 나타냄
		// 특정 키가 존재하는지 여부 확인
		System.out.println(h.containsKey("222-2222")); // true 나 false 로 나타남
		// 특정 데이터가 존재하는지 여부 확인
		System.out.println(h.contains("강감찬")); // true 나 false 로 나타남
		// 특정 데이터 삭제 => 키 기준
		h.remove("333-3333");
		// 삭제 후 전체 출력
		Iterator<String> it2 = h.keySet().iterator();
		while (it2.hasNext()) {
			String key = it2.next(); // 키 가져오기
			String value = h.get(key); // 키를 이용한 값 가져오기
			System.out.printf("%s : %s%n", key, value);
		}

		// 키가 중복된 경우 값을 유지하지 못하게 된다.
		// 동일한 키를 가진 값 입력 시도
		h.put("111-1111", "이민종"); // 기존 값은 홍길동.
		System.out.println(h.get("111-1111"));
		// => 홍길동이 아니라 이민종 출력됨.
		// => 기존 값에 덮어쓰기가 되버리므로 주의.
		// => 기존 값을 수정하고자 할때 사용하면 좋다.
		Iterator<String> it3 = h.keySet().iterator();
		while (it3.hasNext()) {
			String key = it3.next(); // 키 가져오기
			String value = h.get(key); // 키를 이용한 값 가져오기
			System.out.printf("%s : %s%n", key, value);
		}
	}
}
