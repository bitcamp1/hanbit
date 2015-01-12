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
	String g_name, g_ttl;
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
	<%
		try{
			Class.forName("oracle.jdbc.driver.OracleDriver");
			String url = "jdbc:oracle:thin:@localhost:1521:XE";
			cn = DriverManager.getConnection(url, "system", "oracle");
		}catch(Exception e){
			e.printStackTrace();
		}
	%>
<body>
	 <font size=7 color=blue>[guestDeleteSave.jsp] </font><p>
	 <%
		try{
			int data = Integer.parseInt(request.getParameter("sabun"));
			String sql = "delete from guest where sabun="+data;
			st = cn.createStatement();
			st.executeUpdate(sql);
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
	 <h1>
	 	<a href="guestList.jsp">[목록]</a> 
	 </h1>
	 <p><br><br><br><br>
	 <p><br><br><br><br>
</body>
</html>






