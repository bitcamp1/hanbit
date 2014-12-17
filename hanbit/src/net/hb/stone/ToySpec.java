package net.hb.stone;

import java.util.HashMap;
import java.util.Map;

import net.hb.stone.ToySpec;

public class ToySpec {
	private Map<String,Object>props;

	public ToySpec() {
		props = new HashMap<String,Object>();
	}
	public enum ToyType{
		FIGURE, DOLL;
	}
	public enum ToyUser{
		ADULT, CHILD;
	}
	/*
	public Map<String, Object> getProps() {
		return props;
	}

	public void setProps(Map<String, Object> props) {
		this.props = props;
	}
	*/
	public Object getProps(String pName) {
		return props.get(pName);
	}
	
	public void setProps(String pName, Object pValue) {
		props.put(pName, pValue);
	}
	public boolean match(ToySpec spec){ // 비교검색
		String specStr = "";
		String thisStr = "";
		if(spec.getProps("ToyUser")!=null){
			specStr += spec.getProps("ToyUser");
			thisStr += getProps("ToyUser");
		}
		if(spec.getProps("ToyType")!=null){
			specStr += spec.getProps("ToyType");
			thisStr += getProps("ToyType");
		}
		return spec.equals(thisStr);
	}
	@Override
	public boolean equals(Object obj) {
		return super.equals(obj);
	}
	/*
	 * toString()을 선언하지 않으면 주소값만 출력된다.
	 * */
	
	@Override
	public String toString() {
		return props.toString();
	}

	
}

