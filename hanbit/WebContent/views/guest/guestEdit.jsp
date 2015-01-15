<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
	<%
		String sabun = request.getParameter("sabun");
		String name = request.getParameter("name");
		String ttl = request.getParameter("title");
		String pay = request.getParameter("pay");
	
	%>
	<form name="myform"  method="get" action="guestEditSave.jsp">
		<b>사번:</b> 
		<input type=text name="sabun" onFocus="message()" value=<%=sabun %> readonly="readonly"> <br>
		<b>수정이름:</b> <input type=text name="name" value=<%=name %>> <br>
		<b>수정제목:</b> <input type=text name="title" value=<%=ttl %>> <br>   
		<b>수정급여:</b> <input type=text name="pay" value=<%=pay %>> <p>
		<input type="button" value="수정" onclick="move()"> &nbsp;
		<input type="reset"  value="취소">
	</form>
 <p>
	<script type="text/javascript">
	   function move(){
		   myform.submit();
	   }
	</script>






