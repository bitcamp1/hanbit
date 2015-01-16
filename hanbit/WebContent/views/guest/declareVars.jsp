<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
      <%@ page import = "java.util.*" %>
    <%@ page import = "java.sql.* "%>
 <%!
	private Connection cn ;
	private Statement st,st_2, st_3; 
	private PreparedStatement pst;
	private CallableStatement cst;
	private ResultSet rs,rs_2, rs_3;
	private String sql,sql_2, sql_3;
	private int g_sabun, tot, g_pay, pageNum, pageSize, start, end, pageCnt, startPage, r_tot;
	private String g_name, g_ttl,  sVal, sKey, r_writer, r_title;
%>