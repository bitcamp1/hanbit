<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>[addMemberForm]</title>
	<%@include file="css.jsp" %>
	<script>
		function move(){
			addMember.submit();
		}
	</script>
</head>
<body>
	<form name='addMember' action="addMember.jsp">
	<table style='width:600px'>
		
		
		<tr>
			<td style='width:200px' class='yellow'>이름</td>
			<td><input type="text" name="name" size="20"></td>
		</tr>
		<tr>
			<td class='yellow'>아이디</td>
			<td><input type="text" name="userid" size="20"></td>
		</tr>	
		<tr>
			<td class='yellow'>비밀번호</td>
			<td><input type="text" name="pwd" size="20"></td>
		</tr>
		<tr>
			<td class='yellow'>이메일</td>
			<td><input type="text" name="email" size="20"></td>
		</tr>
		<tr>
			<td class='yellow'>전화번호</td>
			<td><input type="text" name="phone" size="11"></td>
		</tr>
		<tr>
			<td class='yellow'>등급</td>
			<td>
				<input type="radio" name="admin" value="1" checked="checked" />관리자
				<input type="radio" name="admin" value="2" />일반회원
			</td>
		</tr>
		<tr>
			<td colspan="2"><input type="submit" value="전송"/>&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="reset" value="취소"/></td>
		</tr>
		
	</table>	
	</form>
</body>
</html>