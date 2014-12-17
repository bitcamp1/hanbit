package net.hb.stone;

public class FruitImpl implements Fruit{

	@Override
	public int getPrice() {
		// TODO Auto-generated method stub
		return 5000;
	}

	@Override
	public String getName() {
		// TODO Auto-generated method stub
		return "사과";
	}
	public String getItems(){
		return "과일";
	}

}
