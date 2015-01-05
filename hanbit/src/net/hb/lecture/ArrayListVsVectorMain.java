package net.hb.lecture;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

/*
 * 
 * =====================================================================================================
 ArrayList 클래스

 1. ArrayList와 Vector Class는 List를 크기 변경이 가능한 배열로 구현한 것으로 차이점은 Vector 클래
 스의 객체는 원래 기본적으로 동기화 되지만, ArrayList는 그렇지 않다.

 2. 비 동기화된 컬렉션은 동기화된 컬렉션보다 더 나은 성능을 제공하며 스레드들이 컬렉션을 공유하
 지 않는 프로그램에서는 일반적으로 ArrayList를 Vector보다 더 선호하며 ArrayList는 동기화를 고려하
 지 않는 Vector처럼 동작함으로써 스레드 동기화에 따르는 부담을 가지지 않기 때문에 Vector보다 빠
 르게 실행된다.
 -----------------------------------------------------
 ArrayList 클래스 테스트 
 * */
public class ArrayListVsVectorMain {
	public static void main(String[] args) {
		// Vector는 내부적을 String 사용. 속도 느림. 동기화 지원
		// ArrayList는 내부적으로 StringBuffer 사용. 동기화 지원 안함
		ArrayList<String> lists = new ArrayList<String>();

		// 항목 추가
		lists.add("서울");
		lists.add("부산");
		lists.add("대구");

		// 출력=> 반복자 이용
		Iterator<String> it1 = lists.iterator();
		while (it1.hasNext()) {
			System.out.printf("%s", it1.next());
		}
		System.out.println();

		ListIterator<String> it2 = lists.listIterator();
		while (it2.hasNext()) {
			System.out.printf("%s", it2.next());
			// 다운 캐스팅 필요없다.String이 될 예정
		}
		System.out.println();

		// 끝에서 처음 위치로 이동하면 데이터 가져오기
		while (it2.hasPrevious()) {
			System.out.printf("%s", it2.previous()); // ListIterator에서만 가능
		}
		System.out.println();

		// 전체 요소를 한 번에 입력
		List<String> lists2 = new ArrayList<String>();
		lists2.addAll(lists); // 서울, 부산, 대구 입력

		// 반복 출력=> 확장 for문
		for (String s : lists2)
			System.out.printf("%s", s);
		System.out.println();

		// 검색 명령을 위한 데이터 추가
		lists2.add("광주");
		lists2.add("인천");
		lists2.add("대전");

		// 검색 기능
		Iterator<String> it3 = lists2.iterator();
		String str;
		while (it3.hasNext()) {
			str = it3.next();
			if (str.startsWith("대")) // => "대"로 시작하는 문자열 검색
				System.out.printf("%s ", str);
		}
		System.out.println();

		// 동일한 자료를 입력 시도.
		lists2.add("대전");
		lists2.add("대전");
		lists2.add("서울");

		Iterator<String> it4 = lists2.iterator();
		while (it4.hasNext()) {
			System.out.printf("%s ", it4.next());
		}
		System.out.println();
	}

}
