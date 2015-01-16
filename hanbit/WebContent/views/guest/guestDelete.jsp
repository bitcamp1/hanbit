 <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<jsp:include page="header.jsp"/>
	


			<%
				String idx = request.getParameter("sabun");
			%>
			<form name="myform" action="guestDeleteSave.jsp">
				<b><font color="red">삭제할 사번</font> :</b>
				<input type="text" name="sabun" onKeyUp="numberCheck()" value="<%=idx %>"/> <!-- onKeyUp="numberCheck() -->
				<input type="button" onClick="move()" value="삭 제" />&nbsp;&nbsp;&nbsp;
			</form>
		<p>
		<h1>
			<a href="template.jsp?guestList">[취소]</a>&nbsp;
		</h1>
		<p><br><br><br><br></p>
