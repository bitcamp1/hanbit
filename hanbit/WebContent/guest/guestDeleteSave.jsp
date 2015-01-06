<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.util.*"   %>
<%@ page import="java.sql.*"   %>
<%!
	Connection cn;
	Statement st; 
	PreparedStatement pst;
	CallableStatement cst;
	ResultSet rs;
	int g_sabun, tot=27, g_pay;
	String g_name, g_ttl, sql, url, uid, pass;
%>
<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>[guestSave.jsp] </title>
		<style type="text/css">
	   input,b{ font-size:20pt; font-weight:bold; }
	</style>
	
</head>
<body>
 <font size=7 color=blue>[guestDeleteSave.jsp] </font><p>
 <%
 url = "jdbc:oracle:thin:@localhost:1521:XE";
 uid = "system";
 pass = "oracle";
 
 int data = Integer.parseInt(request.getParameter("sabun"));
 System.out.println("넘어온 값"+data);
 sql = "delete from guest where sabun="+data;

 
try{
	Class.forName("oracle.jdbc.driver.OracleDriver");
	cn = DriverManager.getConnection(url,uid,pass);
	st = cn.createStatement();
	st.executeUpdate(sql);
	// insert , delete where, update set where 은 executeUpdate()  처리
	// select 은 executeQuery()
	System.out.println("guestDeleteSave.jsp 저장 성공");
	response.sendRedirect("guestList.jsp");
	
	
}catch(Exception e){
	System.out.println("삭제실패: "+e.toString());
	response.sendRedirect("guestList.jsp");
}finally{
	try{
		if(pst!=null)pst.close();
		if(cn!=null)pst.close();	
	}catch(Exception e){
		System.out.println(e.toString());
	}
	
	
}
 
 %>
<font size=7>
	넘어온사번:  <br>
	넘어온이름:  <br>
	넘어온제목:  <br>
	넘어온급여:  <br>
</font>

 <h1>
 	<a href="guest.jsp">데이타입력</a> &nbsp;
 	<a href="guestDelete.jsp">데이타삭제</a> &nbsp;
 	<a href="guestList.jsp">데이타출력</a> 
 </h1>
 <p><br><br><br><br>
 <p><br><br><br><br>
</body>
</html>






