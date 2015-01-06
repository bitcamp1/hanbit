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
		String data=request.getParameter("idx");
		out.println("<h1>넘어온 값"+data+"</h1>");
	%>
	
	<a href="aaa.jsp">[aaa.jsp]</a> &nbsp;
	<a href="guest.jsp">[guest 입력]</a> &nbsp;
	<a href="uestList.jsp">[guest 출력]</a> &nbsp;
	<br />
</body>
</html>