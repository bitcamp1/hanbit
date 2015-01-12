<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="java.util.*" %>
    <%@ page import="java.text.*" %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>날짜</title>
</head>
<body>
	<%
		Calendar date = Calendar.getInstance();
		SimpleDateFormat today = new SimpleDateFormat("yyyy년-MM월-dd일 ");
		SimpleDateFormat now = new SimpleDateFormat("hh시:mm분:ss초");
		
	%>
	
	<font size="7">
	
	<b> 
		오늘은 <%=today.format(date.getTime()) %> 입니다.
		<br />
		지금 시각은 <%=now.format(date.getTime()) %> 입니다.
	</b>
	
	</font>
	
</body>
</html>