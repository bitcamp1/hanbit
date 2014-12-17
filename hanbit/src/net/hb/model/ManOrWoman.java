package net.hb.model;

public class ManOrWoman {
	String ssn = "851027-2871935";
	
	public void isManOrWoman(){
		char ch = ssn.charAt(7);
		if(ch == '1'){  /*싱글쿼터 주의*/
			System.out.println("이 사람은 남자입니다.");
		}else if(ch == '2'){
			System.out.println("이 사람은 여자입니다.");
		}else{
			System.out.println("잘못된 값입니다.");
		}
	}
	public void outputSsnBack(){
		// String ssnBack = ssn.substring(7); 
		// String ssnBack = ssn.substring(7, 13+1); 
		// 이렇게 해도 되지만 좀 더 가독성 좋은 방법은 ...아래
		String ssnBack = ssn.substring((ssn.indexOf('-')+1));
		System.out.println("주민번호 뒷자리는 ? " + ssnBack);
	}
}
