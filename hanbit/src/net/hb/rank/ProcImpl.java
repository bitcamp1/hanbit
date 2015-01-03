package net.hb.rank;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ProcImpl implements Proc{
	private ScoreVO vo;
	BufferedReader in;
	List<ScoreVO> list;
	
	public ProcImpl(){
		vo = new ScoreVO();
		in = new BufferedReader(new InputStreamReader(System.in));
		list = new ArrayList<ScoreVO>();
	}
	
	@Override
	public void input() {
		
		try {
			System.out.print("이름 입력 ?");
			String name = in.readLine() ;
			System.out.print("국어 입력 ?");
			int kor =Integer.parseInt(in.readLine());
			System.out.print("영어 입력 ?");
			int eng = Integer.parseInt(in.readLine());
			vo = new ScoreVO(name,kor,eng);
			list.add(vo);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
	}

	@Override
	public void display() {
		
		Iterator<ScoreVO> it = list.iterator();
		System.out.println("이름\t국어\t영어\t총점");
		while(it.hasNext()){
			ScoreVO s = it.next();
			System.out.print(s.getName()+"\t");
			System.out.print(s.getKor()+"\t");
			System.out.print(s.getEng()+"\t");
			System.out.print(s.getTot()+"\n");
			
		}
	}

	@Override
	public void edit() {
		System.out.println("수정할 이름 입력 ?");
		try {
			String name = in.readLine();
			boolean flag = false;
			for(int i=0;i<list.size();i++){
				ScoreVO vo = list.get(i);
				if(name.equals(vo.getName())){
					System.out.println("국어="+vo.getKor()+"\t"
							+ "영어="+vo.getEng());
					System.out.println("국어점수 변경 ?");
					int kor = Integer.parseInt(in.readLine());
					int eng = Integer.parseInt(in.readLine());
					vo.setKor(kor);
					vo.setEng(eng);
					flag=true;
				}
			}
			if(flag==true)rank();
			else{System.out.print("수정할"+name+"이 없습니다.");}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
			
		
		
	}

	@Override
	public void delete() {
		System.out.println("국어\t영어\t총점\t평균\t순위");
		for(int i=0;i<list.size();i++){
			System.out.println("이름데이터 : \t");
			System.out.println("순위데이터 : \n");
		}
		
	}
	public void rank(){
		
	}


	@Override
	public void search() {
		// TODO Auto-generated method stub
		
	}
}
