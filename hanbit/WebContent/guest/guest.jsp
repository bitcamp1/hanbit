<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<html>
<head> <title> [guest.jsp] </title> 
	<style type="text/css">
	   input,b{ font-size:16pt; font-weight:bold; }
	</style>
	
	<script type="text/javascript">
	  
	   function  notice( ){
		   window.open("popup.jsp", "title", "toobar=no, menubar=no, width=380, height=600, left=200, top=100 ") ;
	   }
	   function  check( ){
		    if(myform.sabun.value==""){
			   alert("사번이 공백입니다.");
			   myform.sabun.focus();
			   return;
		   }  
		   var url = "openID.jsp"
		   window.open(url, "title", "toobar=no, menubar=no, width=380, height=300, left=200, top=100 ") ;
	   }
	</script>
</head>
<body > 
 <font size=7 color=blue>[guest.jsp] </font><p>
	<form name="myform" action="guestSave.jsp">
		<b>사번:</b> 
		<input type=text name="sabun" size="10"> 
		<input type="button" onClick="check()" value="중복체크" />
		<br>
		<b>이름:</b> <input type=text name="name"> <br>
		<b>제목:</b> <input type=text name="title" value="snow"> <br>   
		<b>급여:</b> <input type=text name="pay" value="71"> <p>
		<input type="submit" value="저장"> &nbsp;
		<input type="reset"  value="취소">
	</form>
 <p>
 
 <h1>
 	<a href="guest.jsp">[입력]</a> &nbsp;
 	<a href="guestDelete.jsp">[삭제]</a> &nbsp;
 	<a href="guestList.jsp">[목록]</a> 
 </h1>
 <p><br><br><br><br>
</body>
</html>






