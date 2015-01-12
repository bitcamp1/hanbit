<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import = "java.util.*" %>
    <%@ page import = "java.sql.* "%>
 <%!
	private Connection cn ;
	private Statement st; 
	private PreparedStatement pst;
	private CallableStatement cst;
	private ResultSet rs;
	private String sql;
	private int g_sabun, tot, g_pay;
	private String g_name, g_ttl, url;
%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>guestList.jsp</title>
	<style type="text/css">
		table { background:white; text-align:center; width: 800px;border-collapse:collapse;class='center'}
		th{background-color: yellow;border:1px solid black;}
		tr td{border:1px solid black}
	    .bg_yellow{background:yellow;}
		a{text-decoration: none; font-weight: bold; color: black;}
		a:hover{text-decoration: underline;color: blue;}
		.center{margin: 0 auto;width:1000px;}

	</style>

</head>
<%
	try{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		url = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
		cn = DriverManager.getConnection(url,"system","oracle");
	}catch(Exception e){
		e.printStackTrace();
	}
%>
<body>
<div >
<font size="7" color="blue">guestList.jsp</font>

 	<a href="guest.jsp">[등록]</a> 
 
<%
	try{
		sql = "select count(*) as cnt from guest";
		st = cn.createStatement();
		rs = st.executeQuery(sql);	
		if(rs.next()==true){
			tot = rs.getInt("cnt");
		}
	}catch(Exception e){
		e.printStackTrace();
	}
	
%>
<table  >
	<tr align="right">
		<td colspan="5"> <font size="6"> 레코드 갯수 : <%=tot %></font>&nbsp;&nbsp;&nbsp;&nbsp;</td>
	</tr>
	<tr bgcolor="yellow" height="50" align="center">
		<th>사번</th>
		<th>이름</th>
		<th>제목</th>
		<th>날짜</th>
		<th>급여</th>
	</tr>

	<%
		try{
			
			sql = "select * from guest order by sabun asc";
			st = cn.createStatement();
			rs = st.executeQuery(sql);
			while(rs.next()==true){
				g_sabun = rs.getInt("sabun");
				g_name = rs.getString("name");
				g_ttl = rs.getString("title");
				g_pay = rs.getInt("pay"); 
	%>
			<tr
				onmousemove="this.style.backgroundColor='#00FFFF' "
				onmouseout="this.style.backgroundColor='' "
			
			>
				 <td><%= g_sabun %></td>
				 <td><%= g_name %></td>
				 <td><a href="guestDetail.jsp?idx=<%=g_sabun %>"><%= g_ttl %></a></td>
				 <td><%= rs.getDate("nalja") %></td>
				 <td><%= g_pay%></td>
				 
			 </tr>
	<%
		}
		}catch(Exception e){
			
		}
	 %>
	
 </table>
 
 <p><br><br><br><br>
 <p>
 </div>
</body>
</html>