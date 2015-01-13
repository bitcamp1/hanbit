<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<html>
<head> <title> [left.jsp] </title> 
	<style type="text/css">
	    input{ font-size:12pt; font-weight:bold;}
		td,th{ font-size:16pt; font-weight:bold;}
		a{font-size:20pt;color:black; font-weight:bold; text-decoration:none;}
		a:hover{font-size:24pt;  color:red;font-weight:bold; text-decoration:underline;}  
	</style>
</head>

<body>
    <form>
      <b>아이디:</b><input type=text name="user" size="12"><br>
      <b>비밀번:</b><input type=password name="pwd" size="10">
      &nbsp;&nbsp;<input type=button  value="로그인">
      &nbsp;&nbsp;<input type=reset  value="취 소">
    </form>
    
    <p>
	<div>
		<img src="../../resources/img/ddd.gif"><p>
		<a href="template.jsp?page=main">main폼</a><p> 
		<a href="template.jsp?page=guest">등록화면</a><p>
		<a href="template.jsp?page=guestList">리스트</a><p>
		<a href="template.jsp?page=guestDelete">삭제화면</a>
	</div>
	
	<br><br><br><br>
</body>
</html>



