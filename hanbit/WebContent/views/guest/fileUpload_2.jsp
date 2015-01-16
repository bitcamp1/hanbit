<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="java.util.*" %>
    <%@ page import="java.io.*" %>
    <%@ page import="com.oreilly.servlet.MultipartRequest" %>
    <%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy" %>
	<%
		ServletContext ctx = config.getServletContext();
		String filePath = ctx.getRealPath("filesave");
		System.out.println("파일패스 : "+filePath);
		int size = 5*1024*1024;
		DefaultFileRenamePolicy dp = new DefaultFileRenamePolicy(); 
		String encType="UTF-8";
		File file = new File(filePath);
		file.mkdir();
		
		MultipartRequest mul = new MultipartRequest(
					request,
					filePath,
					size,
					encType,
					dp
				);
		String sabun = mul.getParameter("sabun");
		String name = mul.getParameter("name");
		String data = mul.getFilesystemName("file_good");
		String idx = mul.getParameter("idx");
	%>
	<div class='divCenter'>
	<font size="5">
		<b>넘어온 사번 : <%=sabun %><br />
			넘어온 이름 : <%=name %><br />
			넘어온 파일 : <%=file %><br />
			넘어온 색인 : <%=idx %><br />
			경로 : <%=filePath %>
		</b>
		 	<img src="<%= request.getContextPath()%>/filesave/<%=data%>"  width=500 height=300><br>
		<h1>
			<a href="fileSelect.jsp">[파일 업로드 문서]</a>
		</h1>
	</div>
