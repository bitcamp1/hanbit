package net.hb.lecture;


public class Lotto {
	private int money;
	int[][] lottos;
	int[][] arr;
	
	public void inputMoney(int money) {
		this.money = money;
		lottos = new int[money/1000][6];
	}
	public static int getRandomNum() { // 랜덤 번호 생성
		return (int)((Math.random()*45)+1);
	}
	public boolean isDuplication(int count,int num) {
		
		for(int i=0;i<lottos[count].length;i++){
			if(lottos[count][i]==num){
				return true;
			}
		}
		return false;
	}
	public static void sort(int[] array) {
		  for (int i = 0; i < array.length - 1; i++) {
		   for (int j = 0; j < array.length - i - 1; j++) {
		    if (array[j] > array[j + 1]) {
		     int temp;
		     temp = array[j];
		     array[j] = array[j + 1];
		     array[j + 1] = temp;
		    }
		   }
		  }
		 }

	public void extractLottos(int money){
		inputMoney(money);
		int count = this.getCount(money);
		int i = 0;
		for(count=0;count<lottos.length;count++){
			
			while(true){
				int num = getRandomNum();
				if(isDuplication(count,num)){
					continue;
				}
				lottos[count][i]=num;
				i++;
				if(i==lottos[count].length){
					i=0;
					break;
				}
			}
		}
	}
	public void printLottos() {
		
		for(int i=0;i<lottos.length;i++){
			sort(lottos[i]);
			for(int j=0;j<lottos[i].length;j++){
				System.out.print(lottos[i][j]+"\t");
			}
			System.out.println();
		}
		
	}
	public int getCount(int money) {
		
		if(money < 1000 ){
			
			return 0;
		}
		
		return (int) Math.ceil(money/1000);
	}
	
}
