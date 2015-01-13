<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>useBeanDemo</title>
</head>

<body>
	<jsp:useBean id="member" class="net.hb.beans.MemberBean">
		<font size="6">
			<%
				member.setName("홍길동");
				member.setUserId("애플");
			%>
			<b>
				이름 : <%=member.getName()%>
				아이디 : <%=member.getUserId() %>
			</b>
		</font>
	</jsp:useBean>
	<jsp:setProperty name="member" property="name" value="전수빈"/>
	<jsp:setProperty name="member" property="userId" value="cheon"/>
			이름 : <jsp:getProperty name="member" property="name"/>
			아이디 : <jsp:getProperty name="member" property="userId"/>
</body>
</html>