<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.util.*"   %>
<%@ page import="java.sql.*"   %>
<%!
	private Connection cn;
	private Statement st; 
	private PreparedStatement pst;
	private CallableStatement cst;
	private ResultSet rs;
	private int g_sabun, tot=27, g_pay;
	private String g_name, g_ttl;
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
		cn = DriverManager.getConnection(url,"system","oracle");
	}catch(Exception e){
		e.printStackTrace();
	}
%>
<body>
 <font size=7 color=blue>[guestSave.jsp-단독실행X] </font><p>
 <%
		 String sql = "insert into guest values(?,?,?,sysdate,?)";
		 g_name = request.getParameter("name");
		 g_ttl = request.getParameter("title");
		 g_sabun = Integer.parseInt(request.getParameter("sabun"));
		 g_pay = Integer.parseInt(request.getParameter("pay"));
		
		try{
			
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
	 <h1>
	 	<a href="guest.jsp">[입력]</a> &nbsp;
	 	<a href="guestDelete.jsp">[삭제]</a> &nbsp;
	 	<a href="guestList.jsp">[목록]</a> 
	 </h1>
	 <p><br><br><br><br>
	 <p><br><br><br><br>
	</body>
</html>






