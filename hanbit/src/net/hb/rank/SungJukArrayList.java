package net.hb.rank;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Scanner;

class SungJuk {
	private String name;
	private int kor, eng, tot, rank;

	public SungJuk() {
		System.out.println("SungJuk클래스 기본생성자");
	} // end

	public SungJuk(String name, int kor, int eng) {
		this.name = name;
		this.kor = kor;
		this.eng = eng;
		this.tot = kor + eng;
		rank = 1;
	} // end

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getKor() {
		return kor;
	}

	public int getEng() {
		return eng;
	}

	public int getTot() {
		return tot;
	}

	public int getRank() {
		return rank;
	}

	public void plusRank() {
		rank++;
	} // 추가

	public void clearRank() {
		rank = 1;
	} // 추가

	public void setRank(int rank) {
		this.rank = rank;
	}

	public void setKor(int kor) {
		this.kor = kor;
		this.tot = this.kor + this.eng;
	}// end

	public void setEng(int eng) {
		this.eng = eng;
		this.tot = this.kor + this.eng;
	}// end

	public void setTot(int tot) {
		this.tot = this.kor + this.eng;
	}// end
} // class SungJuk END

class Process {
	private BufferedReader br;
	private ArrayList<SungJuk> list;

	public Process() {
		try {
			InputStreamReader isr = new InputStreamReader(System.in);
			br = new BufferedReader(isr);
			list = new ArrayList<SungJuk>();
		} catch (Exception ex) {
		}
	} // Process 생성자 end

	public void input() {
		try {
			System.out.print("이름입력? ");
			String name = br.readLine();
			System.out.print("국어입력? ");
			int kor = Integer.parseInt(br.readLine());
			System.out.print("영어입력? ");
			int eng = Integer.parseInt(br.readLine());
			SungJuk sj = new SungJuk(name, kor, eng);
			list.add(sj); // list개체 add대상이 성적 sj
		} catch (Exception ex) {
		}
		rank(); // 순위구하는 함수는 아직 미처리
	} // input end

	public void rank() {

	}// rank end

	public void display() {
		System.out.println();
		System.out.println("이름\t국어\t영어\t총점\t순위");
		for (int i = 0; i < list.size(); i++) {
			SungJuk sk = (SungJuk) list.get(i);
			System.out.print(sk.getName() + "\t");
			System.out.print(sk.getKor() + "\t");
			System.out.print(sk.getEng() + "\t");
			System.out.print(sk.getTot() + "\t");
			System.out.print(sk.getRank() + "\n");
		}
	}// display end

	public void edit() throws Exception {
		System.out.print("수정할 이름입력? "); // 수정할이름여부확인
		String name = br.readLine();
		boolean flag = false;
		for (int i = 0; i < list.size(); i++) {
			SungJuk edit = (SungJuk) list.get(i);
			if (name.equals(edit.getName())) {
				System.out.println("kor=" + edit.getKor() + "\t\teng=" +

				edit.getEng());
				System.out.println("----------------------------");
				System.out.print("변경할 kor? ");
				int

				kor = Integer.parseInt(br.readLine());
				System.out.print("변경할 eng? ");
				int

				eng = Integer.parseInt(br.readLine());
				edit.setKor(kor);
				edit.setEng(eng);
				flag = true; // 변경수정한 내용이 있으면 rank( )호출
			}
		} // for end
		if (flag == true)
			rank();
		else {
			System.out.println("수정할 " + name + "학생이 없습니다");
		}
	} // edit end

	public void delete() throws Exception {
		System.out.print("삭제할 이름입력? ");
		String name = br.readLine();
		boolean flag = false;
		for (int i = 0; i < list.size(); i++) {
			SungJuk del = (SungJuk) list.get(i);
			// if제어문으로 name.equals(del.getName( ))
			// 삭제처리 list.remove(i)
		}
		if (flag == true)
			rank();
		else {
			System.out.println("삭제할 " + name + "학생이 없습니다");
		}
	} // delete end
} // class Process END

public class SungJukArrayList {
	public static void main(String[] args) throws Exception {
		Process pc = new Process();
		Scanner sc = new Scanner(System.in);
		int sel = 0, end = 0;
		while (true) {
			System.out.print("\n1.등록 2.출력 3.삭제 4.수정 5.종료?  ");
			sel = Integer.parseInt(sc.nextLine());
			if (sel == 5)
				break;
			switch (sel) {
			case 1:
				pc.input();
				break;
			case 2:
				pc.display();
				break;
			case 3:
				pc.delete();
				break;
			case 4:
				pc.edit();
				break;
			default:
				System.out.println("숫자를 입력하세요\n");
			}
		} // while end
		System.out.println("데이타처리 프로그램을 종료합니다");
	} // main end
} // class END
