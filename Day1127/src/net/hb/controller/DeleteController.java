package net.hb.controller;


import net.hb.service.DBsql;

public class DeleteController {
	/*
	 1211 
	 * */
	
	static void user(String msg,String pos){
		System.out.println("DELETE");
		int id=1200;
		DBsql dbs = new DBsql();
		dbs.dbDelete(id);
	}
	public static void main(String[] args) {
		
		user("a","b");
	}
}
