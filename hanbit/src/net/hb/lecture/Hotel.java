package net.hb.lecture;

import java.util.*;

public class Hotel {
	private int floor;
	private int room;
	public static String[][] name = new String[3][5]; // 투숙객 이름

	public void alertMsg(int num) {
		switch (num) {
		case 1:
			System.out.println("\n!!! 숫자만 입력가능합니다 !!!");
			break;
		case 2:
		case 3:
		case 4:
		case 5:
			System.out.println("\n!!!! 1 ~ " + num + " 숫자만 입력 가능합니다. !!!!");
			process();
			break;

		case 6:
			System.out.println("\n!!! 그 방은 이미 예약중입니다 !!!");
			process();
			break;
		case 7:
			System.out.println("\n!!! 그 방은 이미 빈방입니다 !!!");
			process();
			break;
		case 9:
			System.out.println("\n!!! 프로그램을 종료합니다 !!!");
			break;
		}
	}

	public int inputCheck(String input, int first, int last) {

		int sel = Integer.parseInt(input);

		if (sel < first || sel > last) { // 범위값 외의 숫자를 입력했을경우
			if (last == 4)
				alertMsg(4); // 초기메뉴 (1~4)에서 범위값 외의 수를 입력했을경우
			else if (last == 3)
				alertMsg(3); // 층수 (1~3)에서 범위값 외의 수를 입력했을경우
			else if (last == 5)
				alertMsg(5); // 호수(1~5)에서 범위값 외의 수를 입력했을경우

			else
				return 0; // 0을 리턴
		}

		return sel; // 올바른 값을 입력했을경우 입력받은 수를 리턴한다
	}

	public void checkIn() {
		Scanner sc = new Scanner(System.in);
		String ro, fl, guestName;

		while (true) {
			try {

				System.out.print("몇층에 입실? ");
				fl = sc.nextLine();
				floor = this.inputCheck(fl, 1, 3);
				if (floor == 0)
					continue; // 0 이 넘어왔다면 while 문으로 돌아가 입력을 다시 받는다

				System.out.print("몇호에 입실? ");
				ro = sc.nextLine();
				room = this.inputCheck(ro, 1, 5);
				if (room == 0)
					continue; // 0 이 넘어왔다면 while 문으로 돌아가 입력을 다시 받는다

				if (name[floor - 1][room - 1] != null) { // 이미 이름이 있다면(예약중)
					alertMsg(6);
					continue; // 입실하지 않고, 입력을 다시받는다.
				} else {
					// 이름이 없다면 checkIn 시킨다.
					System.out.print("고객님 이름? ");
					guestName = sc.nextLine();

					name[floor - 1][room - 1] = guestName;

					System.out.println(guestName + "님 checkIn 완료 되셨습니다");
					break;

				}
			} catch (Exception ex) {
				alertMsg(1); // int 데이터형에 문자가 들어왔을경우 예외처리
								// 숫자만 입력하세요.
			}

		} // while end
	} // end

	public void checkOut() {
		Scanner sc = new Scanner(System.in);
		String ro, fl, guestName;

		while (true) {
			try {

				System.out.print("몇층에서 퇴실? ");
				fl = sc.nextLine();
				floor = this.inputCheck(fl, 1, 3);
				if (floor == 0)
					continue; // 0 이 넘어왔다면 입력을 다시 받는다

				System.out.print("몇호에서 퇴실? ");
				ro = sc.nextLine();
				room = this.inputCheck(ro, 1, 5);
				if (room == 0)
					continue; // 0 이 넘어왔다면 입력을 다시 받는다

				if (name[floor - 1][room - 1] == null) { // 방에 이름이 없다면..
					alertMsg(7); // 이미 빈방입니다 메세지
					continue; // 퇴실처리 다시
				} else {
					guestName = name[floor - 1][room - 1]; // 방에 이름이 있다면 해당 배열주소
															// null처리
					name[floor - 1][room - 1] = null;

					System.out.println(guestName + "님 checkOut 완료 되셨습니다");
					break;

				}
			} catch (Exception ex) {
				alertMsg(1); // int 데이터형에 문자가 들어왔을경우 예외처리(숫자만)
			}

		} // while end
	} // end

	public void showStatus() {
		System.out.println("\n\n\t***************  호텔의 투숙상태 *****************");
		// 중첩for if문
		for (int i = 0; i < name.length; i++) {
			for (int j = 0; j < name[i].length; j++) {
				if (name[i][j] == null) {
					System.out.print("" + (i + 1) + "0" + (j + 1) + "호"
							+ " □\t" + "\t");
				} else {
					System.out.print("" + (i + 1) + "0" + (j + 1) + "호"
							+ " ■\t" + name[i][j] + "\t");
				}
			}
			System.out.println();
		}

	} // end

	public void process() {
		Scanner sc = new Scanner(System.in);

		int sel = 0;
		String input;

		while (true) {
			this.showStatus(); // 체크인 상태를 무조건 보면서 입실퇴실

			try {
				System.out.print("1.투숙  2.퇴실  3.전체보기  4.종료? ");
				input = sc.nextLine();

				sel = this.inputCheck(input, 1, 4);
			} catch (Exception ex) {
				alertMsg(1); // 숫자만입력하세요
			}

			switch (sel) {
			case 1:
				this.checkIn();
				break; // 체크인
			case 2:
				this.checkOut();
				break; // 체크아웃
			case 3:
				this.process();
				break; // 현황보기
			case 4:
				alertMsg(9);
				System.exit(1); // 프로그램을 종료합니다.

			}

		} // while end
	}// end

	

	public void roomReset() { // 모든방 빈방으로 초기화시키기
		for (int i = 0; i < name.length; i++) {
			for (int j = 0; j < name[i].length; j++) {
				name[i][j] = null;
			}
		}
	} // end

}// class END
