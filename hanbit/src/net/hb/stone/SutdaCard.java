package net.hb.stone;

public class SutdaCard {
	int cardNo;
	boolean isGwang;
	public SutdaCard(int cardNo, boolean isGwang) {
		super();
		this.cardNo = cardNo;
		this.isGwang = isGwang;
	}
	public SutdaCard(){
		this(3,false);
	}
	
	public int getCardNo() {
		return cardNo;
	}
	public void setCardNo(int cardNo) {
		this.cardNo = cardNo;
		
	}
	public boolean isGwang() {
		return isGwang;
	}
	public void setGwang(boolean isGwang) {
		this.isGwang = isGwang;
	}
	@Override
	public String toString() {
		return cardNo + (isGwang ? "광" : "");
	}
	
}
