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
	private String g_name, g_ttl,zipc, si_1, gu_2, dong_3, bunzi_4;
	private boolean flag=false;
%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<style type="text/css">
	 input,b{font-size: 12pt;font-weight: bold;}
	 a{font-size: 12pt;font-weight: bold;text-decoration: none;}
	 a :HOVER{font-size: 14pt;font-weight: bold;text-decoration: underline;}
	</style>
	<script>
		function sendAddress(zipc,si,gu,dong){
			var addr = si+" "+gu+" "+dong;
			opener.myform.zipcode.value=zipc;
			opener.myform.address.value=addr;
			self.close();
		}
		function send(){
			subform.dong.focus();
			
		}
	</script>
</head>
<body bgcolor="pink" onload='send()'>

 
		<form name="subform" action="zipCheckSave.jsp">
			<b><font color="red">동이름 :</font> :</b>
			<input type="text" name="dong" />
			<input type="submit" value="우편번호검색" />&nbsp;&nbsp;&nbsp;
		</form>

<%
  try{
  	Class.forName("oracle.jdbc.driver.OracleDriver");
    String url="jdbc:oracle:thin:@127.0.0.1:1521:XE";
    cn=DriverManager.getConnection(url, "system","oracle");  
  }catch(Exception ex){
  	System.out.println("에러: " + ex.toString() );
  }
%>

<body>
<%
	String data = request.getParameter("dong"); 

  try{
  	String sql="select * from zipcode  where area3 like'%"+data+"%'"; 
  	st=cn.createStatement();
  	rs=st.executeQuery(sql);
  	flag = rs.next();
  	if(flag == true){
  		do{
  			zipc = rs.getString("zipcode");
  	  		si_1 = rs.getString("area1");
  	  		gu_2 = rs.getString("area2");
  	  		dong_3 = rs.getString("area3");
  	  		%>
  	  		<br />
  	  		<a href="javascript:sendAddress('<%=zipc%>','<%=si_1%>','<%=gu_2%>','<%=dong_3%>')">
  	  			<%=zipc %> : <%=si_1 %> <%=gu_2 %> <%=dong_3 %>
  	  		</a>
  	  		<%
  		}while(rs.next()==true);
  	}else{
  		out.println("<h1>검색한 "+data+"가 없습니다.</h1>");
  	}
  	
  	
  } catch (Exception ex) {
		response.sendRedirect("guest.jsp");
		out.println("<h1>에러 :"+ex.toString()+"</h1>");
	}
%>
</body>
</html>






