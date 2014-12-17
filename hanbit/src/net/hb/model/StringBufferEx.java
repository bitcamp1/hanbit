package net.hb.model;

public class StringBufferEx {
	int capa;
	StringBuffer buf;
	
	public StringBufferEx() {
	}
	
	public int getCapa() {
		
		return capa;
	}

	public void setCapa(int capa) {
		buf=new StringBuffer("A-B-C");
		this.capa=buf.capacity();
	}

	public StringBuffer getBuf() {
		return buf;
	}
	public void setBuf(StringBuffer buf) {
		this.buf = buf;
	}
	
	
}
