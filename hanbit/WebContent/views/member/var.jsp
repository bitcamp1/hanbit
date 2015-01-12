<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="java.sql.*" %>
<%!
	Statement st = null;
	PreparedStatement pst = null;
	CallableStatement cst = null;
	ResultSet rs = null;
	String name, userid, pwd, email, phone;
	int admin, cnt;
%>