<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="java.sql.*" %>
    <%@ include file="var.jsp" %>

<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>[allMember]</title>
	<%@include file="css.jsp" %>
</head>
	<%@include file="cn.jsp" %>
<body>
	<div id='wrapper'>
		<table>
			<%
				try{
					String sql = "select count(*)as cnt from member ";
					st = cn.createStatement();
					rs = st.executeQuery(sql);
					if(rs.next()==true){
						cnt = rs.getInt("cnt");
					}
				}catch(Exception e){
					e.printStackTrace();
				}
			%>
			<tr align="right">
				<th colspan="6" ><h4>회원수 :<font color="red" size="14"><%=cnt %></font></h4>&nbsp;&nbsp;&nbsp;&nbsp;</th>
			</tr>
			<tr>
				<th>이름</th>
				<th>아이디</th>
				<th>비밀번호</th>
				<th>이메일</th>
				<th>전화번호</th>
				<th>권한</th>
			</tr>
		<%
			try{
				String sql = "select * from member order by name asc";
				st = cn.createStatement();
				rs = st.executeQuery(sql);
				while(rs.next()){
					name = rs.getString("name");
					userid = rs.getString("userid");
					pwd = rs.getString("pwd");
					email = rs.getString("email");
					phone = rs.getString("phone");
					admin = rs.getInt("admin");
					System.out.println("userid :"+userid);
					%>
					
					<tr
						onmouseover="this.style.backgroundColor='#0000FF'"
						onmouseout="this.style.backgroundColor=''"
					
					>
						<td><a href="detailMember.jsp?userid="<%=userid %>><%=name %></a></td>		
						<td><%=userid %></td>
						<td><%=pwd %></td>
						<td><%=email %></td>
						<td><%=phone %></td>
						<td><%=admin %></td>
											
					</tr>
					
					<%
				}
			}catch(Exception e){
				e.printStackTrace();
			}finally{
				try{
					if(rs!=null)rs.close();
					if(st!=null)st.close();
					if(cn!=null)cn.close();
				}catch(Exception e){
					e.printStackTrace();
				}finally{
					
				}
				
			}
			
		%>
		 <tr>
	 	<td colspan="6"><a href="addMemberForm.jsp">추가</a></td>
	 </tr>
		</table>
	</div>
</body>
</html>