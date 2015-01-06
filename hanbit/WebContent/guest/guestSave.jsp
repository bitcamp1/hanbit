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
 <font size=7 color=blue>[guestSave.jsp-단독실행X] </font><p>
 <%
 sql = "insert into guest values(?,?,?,sysdate,?)";
 g_name = request.getParameter("name");
 g_ttl = request.getParameter("title");
 g_sabun = Integer.parseInt(request.getParameter("sabun"));
 g_pay = Integer.parseInt(request.getParameter("pay"));
 url = "jdbc:oracle:thin:@localhost:1521:XE";
 uid = "system";
 pass = "oracle";
 
try{
	Class.forName("oracle.jdbc.driver.OracleDriver");
	cn = DriverManager.getConnection(url,uid,pass);
	pst = cn.prepareStatement(sql);
	pst.setInt(1, g_sabun);
	pst.setString(2, g_name);
	pst.setString(3, g_ttl);
	pst.setInt(4, g_pay);
	pst.executeUpdate();
	response.sendRedirect("guestList.jsp");
	
	
}catch(Exception e){
	System.out.println("저장실패: "+e.toString());
	response.sendRedirect("guest.jsp");
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






