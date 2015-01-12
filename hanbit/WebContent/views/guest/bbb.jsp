<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>[note.jsp]</title>
	<style type="text/css">
		a{text-decoration: none; font-weight: bold; color: black;}
		a:hover{text-decoration: underline;color: blue;}
	</style>
</head>
<body>
<font size="7" color="blue">[bbb.jsp]</font>
	<img src="../img/bar.gif" alt="" />
	<img src="../img/bar.gif" alt="" />
	<img src="../img/bar.gif" alt="" /><br />
	
	
	<%
		String sabun=request.getParameter("sabun");
		String name=request.getParameter("name");
		String title=request.getParameter("title");
		String pay=request.getParameter("pay");
		out.println("<h1>넘어온 사번"+sabun+"</h1>");
		out.println("<h1>넘어온 이름"+name+"</h1>");
		out.println("<h1>넘어온 페이"+pay+"</h1>");
	%>
	
	<a href="aaa.jsp">[aaa.jsp]</a> &nbsp;
	<br />
</body>
</html>