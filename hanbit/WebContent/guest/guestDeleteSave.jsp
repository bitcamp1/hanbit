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
 System.out.println("�Ѿ�� ��"+data);
 sql = "delete from guest where sabun="+data;

 
try{
	Class.forName("oracle.jdbc.driver.OracleDriver");
	cn = DriverManager.getConnection(url,uid,pass);
	st = cn.createStatement();
	st.executeUpdate(sql);
	// insert , delete where, update set where �� executeUpdate()  ó��
	// select �� executeQuery()
	System.out.println("guestDeleteSave.jsp ���� ����");
	response.sendRedirect("guestList.jsp");
	
	
}catch(Exception e){
	System.out.println("��������: "+e.toString());
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
	�Ѿ�»��:  <br>
	�Ѿ���̸�:  <br>
	�Ѿ������:  <br>
	�Ѿ�±޿�:  <br>
</font>

 <h1>
 	<a href="guest.jsp">����Ÿ�Է�</a> &nbsp;
 	<a href="guestDelete.jsp">����Ÿ����</a> &nbsp;
 	<a href="guestList.jsp">����Ÿ���</a> 
 </h1>
 <p><br><br><br><br>
 <p><br><br><br><br>
</body>
</html>






