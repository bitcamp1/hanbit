package net.hb.dao;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public class MemberDAO {
	
	private MemberDAO(){}
	private static MemberDAO instance = new MemberDAO();
	public static MemberDAO getInstance() {
		return instance;
	}
	public Connection getConnection() {
		Connection cn = null;
		try {
			Context init = new InitialContext();
			Context ctx = (Context) init.lookup("java:/comp/env");
			DataSource ds = (DataSource) ctx.lookup("jdbc/myOracle");
			cn = ds.getConnection();
			return cn;
		} catch (NamingException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return cn;
	}
}
