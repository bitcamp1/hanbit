<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<jsp:include page="../common/header.jsp"></jsp:include>
<body>
	<%
		String sabun = request.getParameter("sabun");
		String name = request.getParameter("name");
		String file = request.getParameter("file_good");
		String idx = request.getParameter("idx");
	%>
	<div class='divCenter'>
	<font>
		<b>넘어온 사번 : <%=sabun %><br />
			넘어온 이름 : <%=name %><br />
			넘어온 파일 : <%=file %><br />
			넘어온 색인 : <%=idx %><br />
		</b>
	</font>
		<img src="../../resources/img/aaa.gif" width="300" height="200" alt="" />
		
		<h1>
			<a href="fileSelect.jsp"></a>
		</h1>
	
	</div>
	
	
</body>
</html>