package net.hb.lecture;

import static java.lang.System.out;

import java.util.Iterator;
import java.util.Scanner;
import java.util.Vector;

import net.hb.lotto.my.Lotto;
import net.hb.lotto.my.Lotto2;







public class Main1209 {
	public static void main(String[] args) {
		Main1209 m = new Main1209();
		// m.dblArr();
		// m.buyLotto2(); Vector 를 출력하기
		// m.buyLotto();
		// m.doubleArrEx();
		// m.runHotel();
		 m.runMotel();
	}
	public void runMotel(){
			Motel mm= new Motel();
			mm.process();
	}
	
	public void runHotel(){
		
			Hotel ht = new Hotel();
			// ht.roomReset(); //초기화
			ht.process(); // 호텔시스템 선택메뉴 메소드 호출
	}
	
	public void doubleArrEx(){
		DoubleArr da = new DoubleArr();
		// da.test1();
		da.test2();
	}
	public void buyLotto2(){
		Vector<String> vc = new Vector<String>();
		
		System.out.println("▶▶▶로또 시작");
		Lotto2 lotto = new Lotto2();
		System.out.println("얼마치를 구입합니까?");
		Scanner sc = new Scanner(System.in);
		int money = sc.nextInt();
		int[][] arr = new int[lotto.getCount(money)][6];
		lotto.extractLottos(money);
		System.out.println("로또번호 출력");
		vc = lotto.getLottos();
		Iterator<String> it =  vc.iterator();
		while(it.hasNext()){
			System.out.print(it.next()+"\t");
			it.remove();
		}
		
		
		
	}
	public void buyLotto(){
		System.out.println("▶▶▶로또 시작");
		Lotto lotto = new Lotto();
		// lotto.setLottoMoney(5000);
		// lotto.getLottoNums();
		System.out.println("얼마치를 구입합니까?");
		Scanner sc = new Scanner(System.in);
		int money = sc.nextInt();
		lotto.extractLottos(money);
		System.out.println("로또번호 출력");
		lotto.printLottos();
		
	}
	
	public void dblArr(){
		int[][] fiveDblArr = new int[5][5];
		int k=0;
		for(int i=0; i<5;i++){
			for(int j=0;j<5;j++){
				k+=5;
				fiveDblArr[i][j]=k;
				System.out.printf("%5d",fiveDblArr[i][j]);
			}
			System.out.println("\n");
		}
	}
}
