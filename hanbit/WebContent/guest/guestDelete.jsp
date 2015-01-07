 <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   <%!
   		int g_sabun;
   %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>삭제</title>
	<style type="text/css">
		a{text-decoration: none; font-weight: bold; color: black;}
		a:hover{text-decoration: underline;color: blue;}
		.center{margin: 0 auto;width:1000px;}
	</style>
	<script>
		function move(){
			myform.submit();
		}
	</script>
	
</head>
<body>
	<font size="7" color="blue">[guestDelete.jsp]</font><p>
	<%
		g_sabun = Integer.parseInt(request.getParameter("sabun"));
	%>
			<form name="myform" action="guestDeleteSave.jsp">
				<b><font color="red">삭제할 사번</font> :</b>
				<input type="text" name="sabun" value="<%=g_sabun %>" onKeyUp="numberCheck()" /> <!-- onKeyUp="numberCheck() -->
				<input type="button" onClick="move()" value="삭 제" />&nbsp;&nbsp;&nbsp;
			</form>
		<p>
		<h1>
			<a href="guestList.jsp">[목록]</a>&nbsp;
		</h1>
		<p><br><br><br><br></p>
		
</body>
</html>