<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
	<title>우편번호</title>
	<style type="text/css">
	input,b{font-size: 12pt;font-weight: bold;}
	</style>
	<script type="text/javascript">
		function send(){
			subform.dong.focus();
			
		}
		function sendAddress(zipc, si,gu,dong,bunzi){
			var addr = zipc;
			alert(addr);
			opener.myform.zipcode.value=addr;
			self.close();
		}
	</script>
</head>
<body bgcolor="pink" onload='send()'>
 
		<form name="subform" action="zipCheckSave.jsp">
			<b><font color="red">동이름 :</font> :</b>
			<input type="text" name="dong" />
			<input type="submit" value="우편번호검색" />&nbsp;&nbsp;&nbsp;
		</form>
</body>
</html>