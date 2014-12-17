package net.hb.service;

import net.hb.model.DBbean;

public class DBsql {

	public DBsql() {
		System.out.println(("DBSQL() 기본생성자"));
		
	}
	public int dbInsert(DBbean bean){
		int ok = 0;
		System.out.println("INSERT");
		return ok;
	}
	public void dbDelete(int sabun){
		System.out.println("DELETE");
	}
	
}
