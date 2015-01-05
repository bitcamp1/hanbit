package net.hb.lecture;

import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;
import java.util.Vector;

public class VectorVsArrayListImpl implements VectorVsArrayList{
	//컬렉션으로 Vector<SungVO>()안으로 객체를 받는다. 
	 private List<VectorVsArrayListVO> lists = new Vector<VectorVsArrayListVO>();

	 @Override
	 public void input() {

	  String hak, name;
	  int kor, eng, mat;
	  
	  Scanner sc = new Scanner(System.in);

	  System.out.print("학번 이름 국어 영어 수학?");
	  hak = sc.next();
	  name = sc.next();
	  kor = sc.nextInt();
	  eng = sc.nextInt();
	  mat = sc.nextInt();
	  
	  //한 명분의 성적처리를 할 수 있는 SungVO 객체를 생성한다. 
	  //SungVO 객체를 생성한 후 Vector 객체에 저장한다. 
	  VectorVsArrayListVO obj = new VectorVsArrayListVO(hak, name, kor, eng, mat);
	  lists.add(obj);
	 }

	 @Override
	 public void print() {
	  //Vector 객체에 저장된 모든 요소를 출력.
	  //Iterator 를 이용한 출력.    

	  Iterator<VectorVsArrayListVO> it = lists.iterator();
	  while(it.hasNext()){
		  VectorVsArrayListVO vo = it.next(); //다운 캐스팅이 필요 없다. 
	   
	   //toString() 오버라이딩 지정 전   
	   /*System.out.printf("%s %s %d %d %d%n" 
	     //,vo.hak, vo.name //->오류. 접근제어자가 private이기 때문에.
	     //-> getter를 이용해서 접근할수 있다.
	     , vo.getHak(), vo.getName()
	     , vo.getKor(), vo.getEng()
	     , vo.getMat());*/
	 
	   //=> 이 부분을 전용 출력문으로 만들기 위해서 
	   //toString() 메소드 오버라이딩 지정할 예정
	     
	   //toString() 오버라이딩 지정 후
	   System.out.println(vo.toString()); //toString이 설정 안되었을시 클래스이름만 출력된다.
	  }
	 }

	 @Override
	 public void searchHak() {
	  //학번을 기준으로 검색.
	  Scanner sc = new Scanner(System.in);
	  System.out.print("검색할 학번?");
	  String hak= sc.next();
	  
	  Iterator<VectorVsArrayListVO> it = lists.iterator();
	  while(it.hasNext()) {
		  VectorVsArrayListVO vo = it.next();
	   
	   //String 클래스에서는 equals() 메소드가 
	   //자체적으로 오버라이딩된 상태임.
	   if(vo.getHak().equals(hak)) { 
	    //vo.getHak()은 매번다른값이 온다 while문안에 있기 때문에
	    // hak은 문자열로 들어온다.  
	    //객체비교는 객체 == 객체 X ,객체.equlas(객체) O
	    //객체의 특정항목을 비교할시엔 equlas를 오버라이딩해야 한다.
	    
	    //toString() 오버라이딩 지정 후
	    System.out.println(vo.toString()); 
	    //한번만 실행된다. if문의 특성상 equals가 한번 실행되기 때문에
	   }
	   else
	    System.out.println("없음");
	  }  
	 }

	 @Override
	 public void searchName() {
	  //이름을 기준으로 검색.
	  Scanner sc = new Scanner(System.in);
	  System.out.print("검색할 이름?");
	  String name= sc.next();
	  
	  Iterator<VectorVsArrayListVO> it = lists.iterator();
	  while(it.hasNext()) {
		  VectorVsArrayListVO vo = it.next();
	   
	   //String 클래스에서는 equals() 메소드가 
	   //자체적으로 오버라이딩된 상태임.
	   if(vo.getName().equals(name)) { 
	    //vo.getHak()은 매번다른값이 온다 while문안에 있기 때문에
	    // hak은 문자열로 들어온다.  
	    //객체비교는 객체 == 객체 X ,객체.equlas(객체) O
	    //객체의 특정항목을 비교할시엔 equlas를 오버라이딩해야 한다.
	    
	    //toString() 오버라이딩 지정 후
	    System.out.println(vo.toString()); 
	    //한번만 실행된다. if문의 특성상 equals가 한번 실행되기 때문에
	   }
	   else
	    System.out.println("없음");    
	  }    
	 }

	 @Override
	 public void descSortTot() {
	  //총점 기준 내림차순 정렬
	  //객체 내부의 특정 항목을 기준으로 정렬하려면 
	  //Comparator 인터페이스 설정 필요
	  //익명클래스  상위 클래스의 메소드 하나만 재정의
	  Comparator<VectorVsArrayListVO> comp = new Comparator<VectorVsArrayListVO>() { 
	   
	   @Override
	   public int compare(VectorVsArrayListVO o1, VectorVsArrayListVO o2) {
	    //현재 기준은 getTot() 결과값인 총점이 됩니다. 
	    return o1.getTot() < o2.getTot() ? 1 : 0; //내림차순 10 9 ....
	    //return o1.getTot() > o2.getTot() ? 1 : 0; //오름차순 1 2 ...
	   }

	  };
	  //실제 정렬하는 부분
	  //컬렉션 클래스일때만 사용 Collections.sort();
	  Collections.sort(lists, comp);
	  //정렬 결과 출력 부분
	  Iterator<VectorVsArrayListVO> it = lists.iterator();
	  while (it.hasNext()) {
		  VectorVsArrayListVO vo = it.next();
	   System.out.println(vo.toString());
	  }  
	 }

	 @Override
	 public void ascSortHak() {
	  //학번 기준 오름차순 정렬
	  //객체 내부의 특정 항목을 기준으로 정렬하려면 
	  //Comparator 인터페이스 설정 필요
	  //익명클래스  상위 클래스의 메소드 하나만 재정의
	  //학번은 문자열이므로 비교시 compareTo() 메소드 사용
	  Comparator<VectorVsArrayListVO> comp = new Comparator<VectorVsArrayListVO>() { 
	   
	   @Override
	   public int compare(VectorVsArrayListVO o1, VectorVsArrayListVO o2) {
	    //현재 기준은 getHak() 결과값인 총점이 됩니다. 
	    return o1.getHak().compareTo(o2.getHak()); //내림차순 10 9 ....
	    //return o1.getHak() > o2.getHak() ? 1 : 0; //오름차순 1 2 ...
	   }
	  };
	  //실제 정렬하는 부분
	  //컬렉션 클래스일때만 사용 Collections.sort();
	  Collections.sort(lists, comp);
	  //정렬 결과 출력 부분
	  Iterator<VectorVsArrayListVO> it = lists.iterator();
	  while (it.hasNext()) {
		  VectorVsArrayListVO vo = it.next();
	   System.out.println(vo.toString());
	  }  
	 }
}
