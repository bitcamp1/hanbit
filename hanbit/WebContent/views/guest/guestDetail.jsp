<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import = "java.util.*" %>
    <%@ page import = "java.sql.* "%>
 <%!
	private Connection cn ;
	private Statement st,st_2, st_3; 
	private PreparedStatement pst;
	private CallableStatement cst;
	private ResultSet rs,rs_2, rs_3;
	private String sql,sql_2, sql_3;
	private int g_sabun, tot, g_pay, pageNum, pageSize, start, end, pageCnt, startPage, r_tot;
	private String g_name, g_ttl,  sVal, sKey, r_writer, r_title;
%>
<%
	try{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		String url = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
		cn = DriverManager.getConnection(url,"system","oracle");
	}catch(Exception e){
		e.printStackTrace();
	}
%>
		<table  cellpadding="0" cellspacing="1">
		<%
			try{
				
				String data = request.getParameter("idx");
				String sql = "select * from guest where sabun="+data;
				st = cn.createStatement();
				rs = st.executeQuery(sql);
				if(rs.next()==true){
					g_sabun = rs.getInt("sabun");
					g_name = rs.getString("name");
					g_ttl = rs.getString("title");
					g_pay = rs.getInt("pay"); 
		%>
					
					<tr align="center">
						<td colspan="4">
							<font size="7" color="blue" face="궁서체">
									<%= g_name %> 님의 상세정보 출력
							</font>
						</td>
					</tr>
					<tr bgcolor="yellow" height="50" align="center">
						<td>사번</td>
						<td>이름</td>
						<td>제목</td>
						<td>급여</td>
					</tr>
					<tr>
						 <td><%= g_sabun %></td>
						 <td><%= g_ttl %></td>
						 <td><%= rs.getDate("nalja") %></td>
						 <td><%= g_pay%></td>
						 
					 </tr>
					 <tr>
						 	<td colspan="4">
							 	<a href="template.jsp?page=guestEdit&sabun=<%=g_sabun %>
							 		&name=<%=g_name%>
							 		&title=<%=g_ttl%>
							 		&pay=<%=g_pay %>">[수정]</a> &nbsp;
							 	<a href="template.jsp?page=guestDelete&sabun=<%=g_sabun%>">[삭제]</a> &nbsp;
							 	<a href="template.jsp?page=guestList">[목록]</a> 
						 	</td>
					 </tr>
		<%
				}
			}catch(Exception e){
				
			}
		 %>
		 </table>
		 <p>
		
		 <hr color=red><p>
	
<jsp:include page="guestReply.jsp">
	<jsp:param value="<%=g_sabun %>" name="sabun"/>
	<jsp:param value="<%=g_name %>" name="name"/>
</jsp:include>