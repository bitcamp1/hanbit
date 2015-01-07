<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>[note.jsp]</title>
	<style type="text/css">
		a{text-decoration: none; font-weight: bold; color: black;}
		a:hover{text-decoration: underline;color: blue;}
	</style>
</head>
<%
	int g_sabun = 7789, g_pay=35;
	String g_name = "sky", g_ttl = "blue";
	
	String g_param = g_sabun+"&name="+g_name+"&title="+g_ttl+"&pay="+g_pay;
%>
<body>
	<img src="../img/aaa.gif" alt="" />
	<img src="../img/aaa.gif" alt="" />
	<img src="../img/aaa.gif" alt="" /><br>
	
	<h1>	
	
		<a href="bbb.jsp?
		sabun=<%=g_sabun%>
		&name=<%=g_name%>
		&title=<%=g_ttl%>
		&pay=<%=g_pay%>
		>">[bbb.jsp]</a> &nbsp;
	</h1>
</body>
</html>