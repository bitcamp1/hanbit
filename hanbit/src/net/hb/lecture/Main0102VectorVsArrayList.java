package net.hb.lecture;

import java.util.Scanner;

public class Main0102VectorVsArrayList {
	public static void main(String[] args) {
		// SungImpl 클래스의 객체 생성
		// SungImpl의 부모클래스인 Sung을 써서 업캐스팅 할수 있다.
		VectorVsArrayList s = new VectorVsArrayListImpl();

		// 여기에 표기된 input() 메소드는
		// 상위 객체인 Sung 인터페이스의 input()이 호출되는 것이 아니고
		// 하위 객체인 SungImpl 클래스의 input()이 호출된다.
		// => 상속 관계에서 메소드가 오버라이딩된 경우만 해당함.
		// s.input(); //Sung의 input이 아닌
		// s.input(); //SungImpl의 오버라이딩된 input이 온다
		// s.print();

		// 무한 실행 가능한 메뉴 만들기
		Scanner sc = new Scanner(System.in);
		int ch;
		while (true) {
			// true라는 것은 무한실행이라는 뜻
			// break라는 것도 무의미 하다. System.exit(0); 이 명령문을 멈출수 있다.
			do {
				System.out.println("--------------------------");
				System.out.println("1.Input");
				System.out.println("2.Print");
				System.out.println("3.HakSearch");
				System.out.println("4.NameSearch");
				System.out.println("5.descSortTot");
				System.out.println("6.ascSortHak");
				System.out.println("7.End");
				System.out.print("Select=>");
				ch = sc.nextInt();
			} while (ch < 1); // 1보다 작으면 무한실행
			switch (ch) {
			case 1:
				s.input();
				break;
			case 2:
				s.print();
				break;
			case 3:
				s.searchHak();
				break;
			case 4:
				s.searchName();
				break;
			case 5:
				s.descSortTot();
				break;
			case 6:
				s.ascSortHak();
				break;
			default:
				System.out.println("프로그램 종료.");
				System.exit(0); // 프로그램 강제 종료
			}
		}

	}
}
