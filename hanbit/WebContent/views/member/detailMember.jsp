<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@include file="var.jsp" %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>[detailMember]</title>
	<%@include file="css.jsp" %>
</head>
<%@include file="cn.jsp" %>
<body>
	<table>
		<%
			try{
				userid = request.getParameter("userid");
				System.out.println("ID :"+userid);
				String sql = "select * from member where userid="+userid;
				st = cn.createStatement();
				rs = st.executeQuery(sql);
				if(rs.next()==true){
					name = rs.getString("name");
					userid = rs.getString("userid");
					pwd = rs.getString("pwd");
					email = rs.getString("email");
					phone = rs.getString("phone");
					admin = rs.getInt("admin");
				}
				%>
				<tr align="center">
						<td colspan="6">
							<font size="7" color="blue" face="궁서체">
								<b>
									<%= name %> 님의 상세정보 출력
								</b>
							</font>
						</td>
					</tr>
				<tr>
					<th>이름</th>
					<th>아이디</th>
					<th>비밀번호</th>
					<th>이메일</th>
					<th>전화번호</th>
					<th>관리자권한</th>
				</tr>
				<tr>
					<td><%=name %></td>
					<td><%=userid %></td>
					<td><%=pwd %></td>
					<td><%=email %></td>
					<td><%=phone %></td>
					<td><%=admin %></td>
				</tr>
				<%
					
			}catch(Exception e){
				e.printStackTrace();
			}
		%>
	</table>
	 <p>
		 <h1>
		 	<a href="editMember.jsp?id=<%=userid %>
		 		&name=<%=name%>
		 		&pwd=<%=pwd%>
		 		&email=<%=email%>
		 		&phone=<%=phone%>
		 		&admin=<%=admin%>
		 		">[수정]</a> &nbsp;
		 	<a href="deleteMember.jsp?id=<%=userid%>">[삭제]</a> &nbsp;
		 	<a href="allMember.jsp">[목록]</a> 
		 </h1>
		 <p><br><br><br><br>
		 <p><br><br><br><br>
</body>
</html>