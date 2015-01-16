<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<html>
<head> <title> [template.jsp] </title> 
	<style type="text/css">
	    input, b{ font-size:16pt; font-weight:bold;}
		td,th{ font-size:16pt; font-weight:bold;}
		a{font-size:16pt; color:black;  font-weight:bold; text-decoration:none;}
		a:hover{font-size:20pt;  color:red; font-weight:bold; text-decoration:underline;}  
	</style>
	<script src="../../resources/js/guest.js"></script>
</head>
	<%
		String pageFile = request.getParameter("page");
		if(pageFile==""||pageFile==null){
			pageFile="main.jsp";
		}else if(pageFile.equals("guest")){
			pageFile = "../guest/guest.jsp";
		}else if(pageFile.equals("guestList")){
			pageFile="../guest/guestList.jsp";
		}else if(pageFile.equals("guestDelete")){
			pageFile="../guest/guestDelete.jsp";
		}else if(pageFile.equals("main")){
			pageFile="../guest/main.jsp";
		}else if(pageFile.equals("guestDetail")){
			pageFile="../guest/guestDetail.jsp";
		}else if(pageFile.equals("guestEdit")){
			pageFile="../guest/guestEdit.jsp";
		}else{
			pageFile = "template.jsp";
		}
			
	
	%>
	<table width="100%" height="100%" border="1" cellspacing="0" >
		<tr>
			<td width="100%" colspan=3 height="45" align="left">
				<jsp:include page="top.jsp" />
			</td>
		</tr>
		
		<tr>
			<td width="15%">
				<jsp:include page="left.jsp" />
			</td>
			<td colspan=2 align="center">
				<jsp:include page="<%=pageFile%>"   /> 
			</td>
		</tr>
		
		<tr>
			<td  width="100%" colspan=3 height="40" align="left">
				<jsp:include page="bottom.jsp" />
			</td>
		</tr>
	</table>
	
<body>
</body>
</html>


