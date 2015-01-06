<%@page import="java.sql.ResultSet"%>
<%@page import="java.beans.Statement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%!
    	Connection cn = null;
    	Statement st = null;
    	ResultSet rs = null;
    	String url = "jdbc:oracle:thin:@localhost:1521:XE";
    	String uid = "system";
    	String pass = "oracle";
    	String sql = "select * from member";
    %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>allMember</title>
</head>
<body>
	<table>
		<tr>
			<th>이름</th>
			<th>아이디</th>
			<th>암호</th>
			<th>이메일</th>
			<th>전화번호</th>
			<th>권한(1:관리자,2:일반회원)</th>
			<td></td>
		</tr>
		<%
			try{
				Class.forName("oracle.jdbc.driver.OracleDriver");
				
			}catch(Exception e){
				e.printStackTrace();
			}
		%>
	</table>	
</body>
</html>