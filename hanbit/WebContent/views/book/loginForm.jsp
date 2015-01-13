<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>loginForm</title>
	
</head>
<body>
	<form action="login.jsp">
		아이디 : <input type="text" name="userID" />
		비밀번호 : <input type="password" name="userPW" />
		<input type="radio" name="loginCheck" value="user" checked="checked" />사용자
		<input type="radio" name="loginCheck" value="manager"  />관리자<br />
		<input type="submit" value="로그인" />
	</form>
</body>
</html>