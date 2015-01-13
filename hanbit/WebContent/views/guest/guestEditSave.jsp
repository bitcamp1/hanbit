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
		cn = DriverManager.getConnection(url, "system","oracle");
	}catch(Exception e){
		e.printStackTrace();
	}
%>
<body>
 <font size=7 color=blue>수정실행</font><p>
 <%
 		 
		 g_name = request.getParameter("name");
		 g_ttl = request.getParameter("title");
		 g_pay = Integer.parseInt(request.getParameter("pay"));	
		 g_sabun = Integer.parseInt(request.getParameter("sabun"));
		 
 		String sql = "update guest set name=?, title=?, nalja=sysdate, pay=? where sabun=?";
 		
		
		try{
			pst = cn.prepareStatement(sql);
			pst.setString(1, g_name);
			pst.setString(2, g_ttl);
			pst.setInt(3, g_pay);
			pst.setInt(4, g_sabun);
			pst.executeUpdate();
			response.sendRedirect("template.jsp?page=guestList");
		}catch(Exception e){
			System.out.println("수정실패: "+e.toString());
			response.sendRedirect("template.jsp?page=guestList");
		}finally{
			try{
				if(pst!=null)pst.close();
				if(cn!=null)pst.close();	
			}catch(Exception e){
				System.out.println(e.toString());
			}
		}
 %>
	</body>
</html>






