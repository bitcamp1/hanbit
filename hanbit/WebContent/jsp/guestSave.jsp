<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />w
	<title>[guestSave.jsp]</title>
	<style type="text/css">
		input,b{font-size: 20pt;font-weight: bold;}
	</style>
</head>
<body>
	<font size="7" color="blue">[guestSave.jsp]</font><p></p>
	<%
		String data1 = request.getParameter("sabun");
		String data2 = request.getParameter("name");
		String data3 = request.getParameter("title");
		int data4 = Integer.parseInt(request.getParameter("pay"));
		
		out.println("<font size=6>사번="+data1+"</font><br />");
		out.println("<font size=6>이름="+data2+"</font><br />");
		out.println("<font size=6>제목="+data3+"</font><br />");
		out.println("<font size=6>급여="+data4+"</font><br />");
		
	%>
	
	<h1>
		<a href="guest.jsp">입력</a>&nbsp;
		<a href="guestDelete.jsp">삭제</a>&nbsp;
		<a href="guestList.jsp">출력</a>&nbsp;
	</h1>
	<p><br /><br /><br /><br /><br />
	
	
	
	
</body>
</html>