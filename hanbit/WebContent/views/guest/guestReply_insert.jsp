<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*"   %>
<%@ page import="java.sql.*"   %>
<%!
	private Connection cn;
	private Statement st; 
	private PreparedStatement pst;
	private CallableStatement cst;
	private ResultSet rs;
	private int g_sabun, tot, g_pay;
	private String g_name, g_ttl;
%>
<%
	try{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		String url = "jdbc:oracle:thin:@localhost:1521:XE";
		cn = DriverManager.getConnection(url,"system","oracle");
	}catch(Exception e){
		e.printStackTrace();
	}
%>
 <%
		 String writer = request.getParameter("writer");
		 String content = request.getParameter("content");
		 int sabun = Integer.parseInt(request.getParameter("sabun"));
		 String sql = "insert into guestreply values(guestreply_seq.nextVal,?,?,?)";
				
		 
		 	pst = cn.prepareStatement(sql);
			
			pst.setString(1, writer);
			pst.setString(2, content);
			pst.setInt(3, sabun);
			pst.executeUpdate();
			response.sendRedirect("template.jsp?page=guestList");
 %>






