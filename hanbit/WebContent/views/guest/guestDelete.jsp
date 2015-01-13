 <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>삭제</title>
	<style type="text/css">
		 input{ font-size:10pt; font-weight:bold;}
		td,th{ font-size:10pt; font-weight:bold;}
		a{font-size:10pt;color:black; font-weight:bold; text-decoration:none;}
		a:hover{font-size:10pt;  color:red;font-weight:bold; text-decoration:underline;}  
	</style>
	<script>
	 function numberCheck( ){
		  var a = myform.sabun.value;
		  var mylen = myform.sabun.value.length;
		  var i=0;
		  for(i=0; i<mylen; i++){
			if(a.charAt(i)<'0' || a.charAt(i) > '9'){
				alert("숫자가 아닙니다");
				 myform.sabun.value = myform.sabun.value.substring(0,i);  
				 myform.sabun.focus( );
			}//if end
		  }//for end
	   } //numberCheck end
	   
	   function  move( ){
		   var str=myform.sabun.value;
		   var size=myform.sabun.value.length ; 
		   if(str=="") { 
			   alert("삭제할 사번=비번 입력하세요");
			   myform.sabun.focus( );
			   return ;
		    }
		   
		   if( size != 4 ){
			   alert("삭제할 사번자릿수 4자리입니다");
			   myform.sabun.value=""; //ta.setText("");
			   myform.sabun.focus( );
			   return ;
		   }
		   document.myform.submit( ); //input type=submit같은역할
	   } //move end
	</script>
	
</head>
<body>
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
		
</body>
</html>