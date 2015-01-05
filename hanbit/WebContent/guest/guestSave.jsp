<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<%@ page import="java.util.*"   %>
<%@ page import="java.sql.*"   %>
<html>
<head> <title> [guestSave.jsp] </title> 
	<style type="text/css">
	   input,b{ font-size:20pt; font-weight:bold; }
	</style>
</head>
<%!
	private Connection cn;
	private Statement st; 
	private PreparedStatement pst;
	private CallableStatement cst;
	private ResultSet rs;
	private String sql;
	private int g_sabun, tot=27;
	private String g_name, g_ttl;
%>

<body>
 <font size=7 color=blue>[guestSave.jsp-단독실행X] </font><p>
 <%
 try{
	 Class.forName("oracle.jdbc.driver.OracleDriver");
	 String url = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
	 String uid = "system";
	 String pass = "oracle";
	 cn = DriverManager.getConnection(url,uid,pass);
	 
	 st = cn.createStatement();
	 rs = st.executeQuery(sql);
	 while(rs.next()){
		 out.println("<tr>");
		 out.println("<td>"+rs.getString("name")+"</td>"); 
		 out.println();
		 out.println();
		 out.println();
		 out.println();
		 out.println();
		 out.println("</tr>");
	 }
	 out.println("<h1>DB연결 성공</h1><br>");
 }catch(Exception e){
	 out.println("<h1>DB연결 실패</h1><br>");
	 e.printStackTrace();
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






