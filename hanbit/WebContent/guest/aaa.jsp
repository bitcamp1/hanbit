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
	int g_sabun = 1234;
%>
<body>
	<img src="../img/aaa.gif" alt="" />
	<img src="../img/aaa.gif" alt="" />
	<img src="../img/aaa.gif" alt="" /><br>
	<a href="bbb.jsp?idx="<%=g_sabun%>>[bbb.jsp]</a> &nbsp;
	<a href="guest.jsp">[guest 입력]</a> &nbsp;
	<a href="guestList.jsp">[guest 출력]</a> &nbsp;
	
</body>
</html>