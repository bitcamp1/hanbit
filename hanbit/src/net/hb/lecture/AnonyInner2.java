package net.hb.lecture;

public class AnonyInner2{
	public TestAbs inn = new TestAbs(){  // 추상클래스

		@Override
		public void printData() {
			System.out.println("data :"+data);
			
		}
		
	};
}

