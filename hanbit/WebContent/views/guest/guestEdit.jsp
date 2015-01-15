<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <%!
	    private String g_sabun, g_name, g_ttl, g_pay;
    %>
	<%
		g_sabun = request.getParameter("sabun");
		g_name = request.getParameter("name");
		g_ttl = request.getParameter("title");
		g_pay = request.getParameter("pay");
	
	%>
	<form name="myform"  method="get" action="guestEditSave.jsp">
		<b>사번:</b> 
		<input type=text name="sabun" onFocus="message()" value=<%=g_sabun %> readonly="readonly"> <br>
		<b>수정이름:</b> <input type=text name="name" value=<%=g_name %>> <br>
		<b>수정제목:</b> <input type=text name="title" value=<%=g_ttl %>> <br>   
		<b>수정급여:</b> <input type=text name="pay" value=<%=g_pay %>> <p>
		<input type="button" value="수정" onclick="move()"> &nbsp;
		<input type="reset"  value="취소">
	</form>
 <p>
	<script type="text/javascript">
	   function move(){
		   myform.submit();
	   }
	</script>






