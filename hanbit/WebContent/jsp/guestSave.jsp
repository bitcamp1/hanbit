<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import = "java.util.Calendar "%>
   <%!
	private String sql;
	private String data2, data3;
	private int data1, data4;
	private Calendar cal;
	

%>  
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>[guestSave.jsp]</title>
	<style type="text/css">
		input,b{font-size: 20pt;font-weight: bold;}
	</style>
</head>

<body>

	<font size="7" color="blue">[guestSave.jsp]</font><p></p>
	<%
		 request.setCharacterEncoding("UTF-8");
		 cal = Calendar.getInstance();
		 
		 data1 = Integer.parseInt(request.getParameter("sabun"));
		 data2 =new String(request.getParameter("name"));
		 data3 = request.getParameter("title");
		 data4 = Integer.parseInt(request.getParameter("pay"));	
	// try catch 가 있으면 에전 값을 톰캣이 가지고 있다...
		
	
		
		// out.println("<font size=6>사번="+data1+"</font><br />");
		// out.println("<font size=6>이름="+data2+"</font><br />");
		// out.println("<font size=6>제목="+data3+"</font><br />");
		// out.println("<font size=6>급여="+data4+"</font><br />");
		
	%>
	<font size="5">
	sql = "insert into guest values(<%= data1 %>,'<%= data2 %>','<%= data3 %>',
	
		<%=cal.get(Calendar.YEAR) %>년	<%=cal.get(Calendar.MONTH)+1 %> 월 <%=cal.get(Calendar.DAY_OF_MONTH) %>일 
		<%=cal.get(Calendar.AM_PM) %>
		<%=cal.get(Calendar.HOUR) %>시 <%=cal.get(Calendar.MINUTE) %> 분
	,<%= data4 %>)";
	
	</font>
<br />	
	<font size="7">
		
		넘어온 사번 : <%= data1 %> <br />
		넘어온 이름 : <%= data2 %><br />
		넘어온 제목 : <%= data3 %><br />
		넘어온 급여 : <%= data4 %><br />
	</font>
	<h1>
		<a href="guest.jsp">입력</a>&nbsp;
		<a href="guestDelete.jsp">삭제</a>&nbsp;
		<a href="guestList.jsp">출력</a>&nbsp;
	</h1>
	<p><br /><br /><br /><br /><br />
	
	
	
	
</body>
</html>