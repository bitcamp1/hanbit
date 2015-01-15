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
		 g_name = request.getParameter("name");
		 g_ttl = request.getParameter("title");
		 g_sabun = Integer.parseInt(request.getParameter("sabun"));
		 g_pay = Integer.parseInt(request.getParameter("pay"));		
		 String sql_cnt = "select count(*) as cnt from guest where sabun="+g_sabun;
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
			 	location.href =" guest.jsp";
			 	
			 </script>
			 
			 <%
		 }else{
		 %>
		 
		  <script>
			 	alert("<%=g_sabun%>은 등록이 가능합니다.");
			 	
			 	
			 </script>
		 
		 <%
 		 String sql = "insert into guest values(?,?,?,sysdate,?)";
		 
		
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
		 }// else end
 %>






