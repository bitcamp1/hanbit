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
	table { background:red; text-align:center; width: 800px }
    table td { background:white; padding:10px; }
    .bg_yellow{background:yellow;}


	</style>
</head>
<%!
	private Connection cn;
	private Statement st; 
	private PreparedStatement pst;
	private CallableStatement cst;
	private ResultSet rs;
	private String sql;
	private int g_sabun, tot=27, g_pay;
	private String g_name, g_ttl;
%>
<body>
<font size="7" color="blue">guestList.jsp</font>

<table  cellpadding="0" cellspacing="1">
	<tr bgcolor="yellow" height="50" align="center">
		<td class='bg_yellow'>사번</td>
		<td class='bg_yellow'>이름</td>
		<td class='bg_yellow'>제목</td>
		<td class='bg_yellow'>날짜</td>
		<td class='bg_yellow'>급여</td>
	</tr>

<%
	try{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		String url = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
		cn = DriverManager.getConnection(url,"system","oracle");
	}
	catch(Exception e){
			e.printStackTrace();
		}
try{
	
		sql = "select * from guest";
		st = cn.createStatement();
		rs = st.executeQuery(sql);
		while(rs.next()==true){
			g_sabun = rs.getInt("sabun");
			g_name = rs.getString("name");
			g_ttl = rs.getString("title");
			g_pay = rs.getInt("pay"); 
%>
			<tr>
				 <td><%= g_sabun %></td>
				 <td><%= g_name %></td>
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