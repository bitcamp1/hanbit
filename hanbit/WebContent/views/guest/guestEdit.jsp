<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <%!
	    private String g_sabun, g_name, g_ttl, g_pay;
    %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title> [guestEdit.jsp] </title> 
	<style type="text/css">
	   input,b{ font-size:16pt; font-weight:bold; }
	</style>
	
	<script type="text/javascript">
	   function move(){
		   myform.submit();
	   }
	</script>
</head>
<body>
	<%
		g_sabun = request.getParameter("sabun");
		g_name = request.getParameter("name");
		g_ttl = request.getParameter("title");
		g_pay = request.getParameter("pay");
	
	%>
 <font size=7 color=blue>[guestEdit.jsp] </font><p>
	<form name="myform"  method="get" action="guestEditSave.jsp">
		<b>���:</b> 
		<input type=text name="sabun" onFocus="message()" value=<%=g_sabun %> readonly="readonly"> <br>
		<b>�����̸�:</b> <input type=text name="name" value=<%=g_name %>> <br>
		<b>��������:</b> <input type=text name="title" value=<%=g_ttl %>> <br>   
		<b>�����޿�:</b> <input type=text name="pay" value=<%=g_pay %>> <p>
		<input type="button" value="����" onclick="move()"> &nbsp;
		<input type="reset"  value="���">
	</form>
 <p>
 
 <h1>
 	<a href="guestList.jsp">[���]</a> 
 </h1>
 <p><br><br><br><br>
</body>
</html>






