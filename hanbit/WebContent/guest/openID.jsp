<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
	<title>삭제</title>
	<style type="text/css">
	input,b{font-size: 16px;font-weight: bold;}
	</style>
	<script type="text/javascript">
		function send(){
			console.log("uuu"+opener.myform.sabun.value);
			subform.userid.value=opener.myform.sabun.value;
			subform.userid.focus();
		}
	</script>
</head>
<body bgcolor="pink" onload='send()'>
 
		<form name="subform" action="openIDsave.jsp">
			<b><font color="red">아이디</font> :</b>
			<input type="text" name="userid" />
			<input type="submit" value="확 인" />&nbsp;&nbsp;&nbsp;
		</form>
</body>
</html>