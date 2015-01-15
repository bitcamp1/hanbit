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
	private String sql,sql_2, sql_3; // 3:reply
	private int g_sabun, tot, g_pay, pageNum, pageSize, start, end, pageCnt, startPage, r_tot;
	private String g_name, g_ttl,  sVal, sKey, r_writer, r_title, r_content;
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

		<table >
			<tr bgcolor="yellow" height="50" align="center">
						<td>닉네임</td>
						<td colspan="2">내용표시 삭제</td>
			</tr>
		<%
			
		String sabun = request.getParameter("sabun");
		String name = request.getParameter("name");
		
		try{
				
				String sql_3 = "select * from guestreply where sabun="+sabun;
				st_3 = cn.createStatement();
				rs_3 = st_3.executeQuery(sql_3);
				while(rs_3.next()==true){
					r_writer = rs_3.getString("writer");
					r_content = rs_3.getString("content");
					
		%>
			<tr>
				<td><%=r_writer %></td>
				<td><%=r_content %></td>
				<td><a href="javascript:del(123)">[삭 제]</a></td>
			</tr>	
			
				
		<%
				}
			}catch(Exception e){
				
			}
		 %>
		 </table>
		 <table>
		 	<tr>
				<td >
					<form action="guestReply_insert.jsp">
						닉네임 :<input type="text" name='writer' /><br />
						내용 :<input type="text" name='content' />
						<input type="hidden" name='sabun' value="<%=sabun %>" /><br />
						<input type="submit" value="전송"/>
						<input type="reset" value="취소"/>
					</form>
				</td>
		 </table>
	
