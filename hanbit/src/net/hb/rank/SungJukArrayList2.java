package net.hb.rank;

import  java.io.*; 
import  java.util.*; 

class  SungJuk2 { 
	 private  String name ;
	 private  int kor, eng, tot, rank ;
	 
	public SungJuk2( ){  } ;//기본생성자
	public SungJuk2( String name, int kor, int eng){
		this.name=name;  this.kor=kor;  this.eng=eng;
		this.tot=kor+eng ;  rank=1 ; 
	} //end
	
	public String getName() { 		return name;	}
	public int getKor() {		return kor;	}
	public int getEng() { 		return eng;	}
	public int getTot() {	 return tot;	}
	public int getRank() { 	return rank; 	} 
	public void  plusRank( ) {  rank++;  }
	public void  clearRank( ) {  rank=1; }

	public void setKor(int kor) {	this.kor=kor;  this.tot=kor+eng;  	}
	public void setEng(int eng) { 	this.eng=eng;  this.tot=kor+eng; 	}	
} //SungJuk  END

class Process2 {
	private  BufferedReader  br ;
	private  ArrayList<SungJuk>  list;   // ArrayList대신 HashSet클래스변경
	public Process2( ) {
		try{
			InputStreamReader  isr = new  InputStreamReader(System.in) ;
			br=new BufferedReader( isr) ;
			list = new ArrayList<SungJuk>( ) ; 
		}catch(Exception ex) {  }
	} //end
	
	public void input( ) {
		try{
			System.out.print("이름입력? " ) ;   String name=br.readLine() ;
			System.out.print("국어입력? " ) ;   int kor=Integer.parseInt

(br.readLine() ) ;
			System.out.print("영어입력? " ) ;   int eng=Integer.parseInt

(br.readLine() ) ;
			SungJuk sj = null ; //해결
			//리스트에 항목 추가 
		}catch(Exception ex) {  }
		rank( ) ;  //호출한 이유
	} //end
	
	public void display( ) {
		System.out.println("이름\t 국어\t 영어\t 총점\t 순위");
		for(int i=0 ; i<list.size() ; i++ ){
				System.out.print( "이름데이타" + "\t ") ;
				// 출력
				System.out.print( "순위데이타" + "\n ") ;
		}
	}  //end
	
	
	public void rank( ) {
		 SungJuk[ ]  sj = new  SungJuk[list.size()] ;
		 list.toArray( sj ) ;  //ArrayList<SungJuk>  list; 배열이 아님
		 for(int i=0; i<sj.length ; i++){
			 sj[i].clearRank() ; 
			 for(int j=0; j<sj.length; j++) {
				 //if비교 plusRank( )함수호출
			 }
		 }
	} //end
	
	public void edit( ) throws Exception  {
		System.out.print("수정할 이름입력? " ) ; //수정할이름여부확인
		String name=br.readLine() ;
		boolean  flag=false ;
		for(int i=0 ; i<list.size() ; i++) {
			SungJuk edit= (SungJuk)list.get(i) ;
			if(name.equals(edit.getName()) ) {
				System.out.println("kor=" + edit.getKor() +"\t\teng=" + 

edit.getEng()) ;
				System.out.println("-------------------");
				System.out.print("변경할 kor? ") ;   int 

kor=Integer.parseInt(br.readLine() ) ;
				System.out.print("변경할 eng? ") ;   int 

eng=Integer.parseInt(br.readLine() ) ;
				edit.setKor(kor);   edit.setEng(eng) ;  flag=true; 
			}
		} //for end
		if( flag==true) rank( ) ;
		else { System.out.println("수정할 " +name +"학생이 없습니다") ;  }
	} //end
	
	public void delete( ) throws Exception  {
		System.out.print("삭제할 이름입력? " ) ; 
		String name=br.readLine() ;
		boolean  flag=false ;
		for(int i=0 ; i<list.size() ; i++) {
		 //삭제처리  list.remove()
		}
		if( flag==true) rank( ) ;
		else { System.out.println("삭제할 " +name +"학생이 없습니다") ;  }
	} //end
} //Process  class End

public class SungJukArrayList2 {
	public static void main(String[] args) throws Exception {
		Process  ob = new  Process( ); //Process클래스가 참조는 SungJuk클래스
		Scanner sc = null ;
		int sel=0, end=0 ;
		while(true) {
			System.out.print("\n1.등록 2.출력 3.삭제 4.수정 5.종료?  ") ;
			//sel= Integer.parset( sc.nextInt( )) ;
			if(sel==5) break ;
			switch(sel) {
				case 1: ob.input(); break ;
				case 2: ob.display(); break ;
				case 3: ob.delete(); break ;
				case 4: ob.edit(); break ;
				default: System.out.println("숫자를 입력하세요\n") ;
			}
		} //while end
		 System.out.println("데이타처리 프로그램을 종료합니다") ;
	} //main end
} //class END






