package net.hb.stone;

public class Gugudan {
	public void until5_Gugudan(){
		Loop1 : for(int dan=2;dan<10;dan++){
			for(int su=1;su<10;su++){
				if(dan==5)
					continue Loop1;
					System.out.println(dan+"*"+su+"="+dan*su);
				
			}
		}
	}
}
