package net.hb.stone;

public class One_Ten_Excep3Multi {
	private int num;

	public int getNum() {
		for(int i=0;i<10;i++){
			if(i%3==0){
				continue;
			}System.out.print(i+"\t");
		}
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}
	
}
