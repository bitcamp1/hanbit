<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>[guestDeleteSave.jsp]</title>
	<style type="text/css">
		input,b{font-size: 20pt;font-weight: bold;}
	</style>
</head>
<%!
	String data2, data3;
	int data1, data4;

%>
<body>

	<font size="7" color="blue">[guestDeleteSave.jsp]</font><p></p>
	<%
	
		String data = request.getParameter("sabun");
		out.println("<font size7> 삭제할 사번"+"</font><br>");
	%>
	<h1>
		<a href="guest.jsp">입력</a>&nbsp;
		<a href="guestDelete.jsp">삭제</a>&nbsp;
		<a href="guestList.jsp">출력</a>&nbsp;
	</h1>
	<p><br /><br /><br /><br /><br />
	
	
	
	
</body>
</html>