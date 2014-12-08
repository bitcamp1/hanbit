package net.hb.model;

public class LottoNumGen {
	private int[][] lottoNums;
	private int lottoNum;
	private int lottoMoney;
	boolean dupl;
	
	
	private static LottoNumGen instance = null;
	

	public LottoNumGen() {}
	
	
	public LottoNumGen(int lottoMoney) {
		this.lottoNums = null;
		this.lottoMoney = 0;
	}
	
	
	
	
	public static LottoNumGen getInstance() {
		if(instance==null){
			synchronized (LottoNumGen.class) {
				if(instance==null){
					instance=new LottoNumGen();
				}
			}
		}
		return instance;
	}




	public boolean isDupl(int count, int lottoNum) {
		for(int i=0;i<lottoNums[count].length;i++){
			if(lottoNums[count][i]==lottoNum){
				return true;
			}
		}
		return false;
	}


	public void setDupl(boolean dupl) {
		this.dupl = dupl;
	}


	public int getLottoNum() {
		return lottoNum;
	}


	public void setLottoNum() {  // 로또 번호 생성
		this.lottoNum = (int)((Math.random()*45)+1);
	}


	public int[][] getLottoNums() {
		int[][] lotto = null;
		for(int i=0;i<lottoNums.length;i++){
			SortUtil util = new SortUtil();
			util.getAscSort(lottoNums[i]);
			for(int j=0;j<lottoNums[i].length;j++){
				System.out.println(lottoNums[i][j]+"\t");
			}
			System.out.println();
		}
		return lotto;
	}
	public void setLottoNums() {
		int count=0;
		int i=0;
		
		for(count=0;count<lottoNums.length;count++){
			while(true){
				int lottoNum = getInstance().getLottoNum();
				if(isDupl(count,lottoNum)){
					continue;
				}
				lottoNums[count][i] = lottoNum;
				i++;
				if(i==lottoNums[count].length){
					i=0;
					break;
				}
			}
		}
	}
	public int getLottoMoney() {
		return lottoMoney;
	}
	public void setLottoMoney(int lottoMoney) {  // 금액 투입
		this.lottoMoney = lottoMoney;
		lottoNums = new int[lottoMoney/1000][6];
	}
	
	
	
}
