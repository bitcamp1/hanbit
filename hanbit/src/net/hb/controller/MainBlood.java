package net.hb.controller;

import java.util.List;
import java.util.Scanner;

import net.hb.controller.MainBlood;
import net.hb.stone.KaupIndex;
import net.hb.stone.Toy;
import net.hb.stone.ToyMachine;
import net.hb.stone.ToySpec;
import net.hb.stone.ToySpec.ToyType;
import net.hb.stone.ToySpec.ToyUser;

public class MainBlood {
	public static void main(String[] args) {
		MainBlood m = new MainBlood();
		// m.getKaupIndex();
		m.catchToy();
	}

	public void catchToy() {
		ToyMachine tm = new ToyMachine();
		ToySpec ts = new ToySpec();
		ts.setProps("사용자", ToyUser.ADULT);
		ts.setProps("타입",ToyType.FIGURE);
		tm.setToy("스파이더맨", 50000, ts);
		List<Toy> toyList = tm.getAllToy();
		for(Toy toy : toyList){
			System.out.println(toy);
		}
	}

	public void getKaupIndex() {
		Scanner s = new Scanner(System.in);
        System.out.println("키를 입력해주세요");
        double height = s.nextDouble();
        System.out.println("몸무게를 입력해주세요");
        double weight = s.nextDouble();
		KaupIndex k = new KaupIndex(height, weight);
		
		System.out.println(k.toString());
        System.out.print("완료");
	}
}
