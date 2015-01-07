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
	private int g_sabun, tot, g_pay;
	private String g_name, g_ttl;
%>
<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>[openIDsave.jsp] </title>
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
 <%
		 int data = Integer.parseInt(request.getParameter("userid"));
 try{
		 String sql_cnt = "select count(*) as cnt from guest where sabun="+data;
		 st = cn.createStatement();
		 rs = st.executeQuery(sql_cnt);
		 tot = 0;
		 if(rs.next()==true){
			 tot = rs.getInt("cnt");
		 }
		
		 if(tot>0){
		%>
			 <script>
			 	alert("<%=g_sabun%>사번이 이미 등록되었습니다.");
			 	
			 </script>
			 
			 <%
		 }else{
		 %>
		 
		  <script>
			 	alert("<%=g_sabun%>은 사용 가능합니다.");
			 </script>
		 <%
		 }
		 
		}catch(Exception e){
			System.out.println("저장실패: "+e.toString());
			response.sendRedirect("guestList.jsp");
		}finally{
			try{
				if(pst!=null)pst.close();
				if(cn!=null)pst.close();	
			}catch(Exception e){
				System.out.println(e.toString());
			}
		}
		 }// else end
 %>
	</body>
</html>






