<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import = "java.util.*" %>
    <%@ page import = "java.sql.* "%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>guestList.jsp</title>
	<style type="text/css">
table { background:white; text-align:center; width: 800px;border-collapse:collapse;class='center'}
	tr td{border:1px solid black}
    .bg_yellow{background:yellow;}
		a{text-decoration: none; font-weight: bold; color: black;}
		a:hover{text-decoration: underline;color: blue;}
		.center{margin: 0 auto;width:1000px;}


	</style>
</head>
<%!
	Connection cn;
	Statement st; 
	PreparedStatement pst;
	CallableStatement cst;
	ResultSet rs;
	String sql, data, g_name, g_ttl;
	int g_sabun,g_pay;
%>
<body>
<font size="7" color="blue">guestList.jsp</font>

<table  cellpadding="0" cellspacing="1">
	

<%
	try{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		String url = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
		cn = DriverManager.getConnection(url,"system","oracle");
		data = request.getParameter("idx");
		sql = "select * from guest where sabun="+data;
		st = cn.createStatement();
		rs = st.executeQuery(sql);
		if(rs.next()==true){
			g_sabun = rs.getInt("sabun");
			g_name = rs.getString("name");
			g_ttl = rs.getString("title");
			g_pay = rs.getInt("pay"); 
%>
			<tr bgcolor="yellow" height="50" align="center">
				<td>사번</td>
				<td>이름</td>
				<td>제목</td>
				<td>급여</td>
			</tr>
			<tr align="center">
				<td colspan="4">
					<font size="7" color="blue" face="궁서체">
						<b>
							<%= g_name %> 님의 상세정보 출력
						</b>
					</font>
				</td>
			</tr>
			<tr>
				 <td><%= g_sabun %></td>
				 <td><%= g_ttl %></td>
				 <td><%= rs.getDate("nalja") %></td>
				 <td><%= g_pay%></td>
				 
			 </tr>
<%
		}
	}catch(Exception e){
		
	}
 %>
 </table>
 <p>
 <h1>
 	<a href="guest.jsp">데이타입력</a> &nbsp;
 	<a href="guestDelete.jsp">데이타삭제</a> &nbsp;
 	<a href="guestList.jsp">데이타출력</a> 
 </h1>
 <p><br><br><br><br>
 <p><br><br><br><br>
</body>
</html>