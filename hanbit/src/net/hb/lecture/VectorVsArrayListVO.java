package net.hb.lecture;

public class VectorVsArrayListVO {
	 //멤버변수 (변수 하나당 int와 String을 주지 않아도 된다.)
	 private String hak, name; 

	 private int kor, eng, mat;
	 private int tot;
	 
	 public VectorVsArrayListVO(String hak, String name, int kor, int eng, int mat){
		  this.hak = hak;
		  this.name = name;
		  this.kor = kor;
		  this.eng = eng;
		  this.mat = mat;
	 }

	public String getHak() {
		return hak;
	}

	public void setHak(String hak) {
		this.hak = hak;
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

	public int getMat() {
		return mat;
	}

	public void setMat(int mat) {
		this.mat = mat;
	}

	public int getTot() {
		 //성적에 대한 합계를 계산한 후 tot에 저장
		  tot = kor + eng + mat;
		  return tot;
	}
	//사용하지 않는 setTot()는 주석 처리 
	 //이유는 토탈은 임의로 외부에서 값을 넣으면 안되기 때문에
	    /*
	 public void setTot(int tot) {
	  this.tot = tot;
	 }
	 */
	//객체 비교를 위한 equals() 메소드 오버라이딩 정의
	 //SungVO 객체가 가지고 있는 학번을 가지고 비교를 하려면 
	 //SungVO 객체끼리 비교하면 항상 다른 주소를 가지고 있어서 
	 //같은 객체를 찾을 수 없게 된다. 
	 //SungVO 객체의 특정 항목만을 가지고 비교하고자 한다면
	 //equals() 메소들에 대한 오버라이딩이 필요한다. 
	/* @Override
	 public boolean equals(Object obj) { //외부에서 들어온 값 Object 
	  boolean flag = false;
	  if (obj instanceof SungVO) {
	   SungVO vo = (SungVO)obj;
	   if(this.name.equals(vo.name) && this.hak.equals(vo.hak))
	    flag = true;
	  }
	  return flag;
	 }*/
	 
	 //출력을 위한 toString() 메소드 오버라이딩 정의 
	 @Override
	 public String toString() {
	  if (this.hak == null || this.name == null)
	   return null;
	  String str = String.format("%5s %10s %4d %4d %4d %4d %5.1f"
	    , hak, name, kor, eng, getMat(), getTot(), getTot()/3.0);
	    //this가 생략된 상태 getMat()로 mat를 쓸수 있다.
	  return str;
	 }
	 
}
