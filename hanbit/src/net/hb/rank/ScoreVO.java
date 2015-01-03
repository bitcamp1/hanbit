package net.hb.rank;

import java.util.List;


public class ScoreVO {
	private String name;
	private int kor, eng, tot, rank;
	private List<ScoreVO> list ;
	
	public ScoreVO(){}
	public ScoreVO(String name,int kor, int eng){
		this.name = name;
		this.kor = kor;
		this.eng = eng;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getKor() {
		return kor;
	}
	public void setKor(int kor) {
		this.kor = kor;
	}
	public int getEng() {
		return eng;
	}
	public void setEng(int eng) {
		this.eng = eng;
		
	}
	public int getTot() {
		return this.tot = this.kor + this.eng;
	}
	/*
	 * tot 은 외부에서 입력하면 안됨..
	public void setTot(int tot) {
		this.tot = tot;
	}
	*/
	public void clearRank(){
		rank = 1;
	}
	public int plusRank() {
		return rank++;
	}
	public void addRank(){
		rank++;
	}
	@Override
	public boolean equals(Object o) {
		boolean flag = false;
		if(o instanceof ScoreVO){
			ScoreVO s = (ScoreVO) o;
			if (this.name.equals(s.name)) {
				flag = true;
			}
		}
		return flag;
	}
	@Override
	public String toString() {
		return ""+getName() 
				+ getKor()+"\t"
				+ getEng()+"\t" 
				+ getTot() ;
				
	}
	
	
}
