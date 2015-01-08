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
<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<style type="text/css">
	   input,b{ font-size:20pt; font-weight:bold; }
	</style>
</head>
<body>

<%
  try{
  	Class.forName("oracle.jdbc.driver.OracleDriver");
    String url="jdbc:oracle:thin:@127.0.0.1:1521:XE";
    cn=DriverManager.getConnection(url, "system","oracle"); 
  	System.out.println("<h1>DB서버 연결 성공!!!!! </h1>");
  }catch(Exception ex){
  	System.out.println("에러: " + ex.toString() );
  }
%>

<body>
<%
  int data = Integer.parseInt(request.getParameter("userid")); 
  try{
  	String sql_cnt="select count(*) as cnt from guest  where sabun = " + data ; 
  	st=cn.createStatement();
  	rs=st.executeQuery(sql_cnt);
  	if(rs.next()==true){
  		tot=rs.getInt("cnt");
  	}
  	
   if(tot>0){ 
%>
  <script type="text/javascript">
  	alert("<%= data %>사번은 이미 등록었습니다");
  	opener.myform.sabun.value="";
 	opener.myform.sabun.focus( );
  	self.close( ); 
  </script>
  	
<%  			
   }else{ 
%>
  <script type="text/javascript">
  	alert("<%= data %>사번은 사용가능합니다");
  	self.close( ); 
  </script>
<%  
   }
  }catch(Exception ex){ response.sendRedirect("guestList.jsp"); }
 %>
</body>
</html>






