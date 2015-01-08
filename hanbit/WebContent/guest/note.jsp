<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%!
    	private int g_sabun = 1000;
    	private String g_name = "test";
    %>
<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>[note.jsp]</title>
	<style type="text/css">
		input{font-size: 16px;font-weight: bold;}
		a{font-size: 20pt;font-weight: bold; text-decoration: none;}
	</style>
	<script>
		function sendAddress(a, b){
			var nsg = a+""+b;
			opener.myform.address.value=msg;
		}
	</script>
</head>
<body>
	<font size="7">
		<b>
			<a href="javascript:sendAddress('<%=g_sabun%>','<%=g_name%>')">sendAddr 함수</a>
			<input type="button" value="GUEST" onClick="javascript:location.href='guest.jsp'" />&nbsp;&nbsp;&nbsp;
			<input type="button" value="LIST" onClick="javascript:location.href='guestList.jsp'" />&nbsp;&nbsp;&nbsp;
			<input type="button" value="DELETE" onClick="javascript:location.href='guestDelete.jsp'" />&nbsp;&nbsp;&nbsp;
		</b>
	</font>
</body>
</html>