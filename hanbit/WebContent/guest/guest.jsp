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
			   alert("����� �����Դϴ�.");
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
		<b>���:</b> 
		<input type=text name="sabun" size="10"> 
		<input type="button" onClick="check()" value="�ߺ�üũ" />
		<br>
		<b>�̸�:</b> <input type=text name="name"> <br>
		<b>����:</b> <input type=text name="title" value="snow"> <br>   
		<b>�޿�:</b> <input type=text name="pay" value="71"> <p>
		<input type="submit" value="����"> &nbsp;
		<input type="reset"  value="���">
	</form>
 <p>
 
 <h1>
 	<a href="guest.jsp">[�Է�]</a> &nbsp;
 	<a href="guestDelete.jsp">[����]</a> &nbsp;
 	<a href="guestList.jsp">[���]</a> 
 </h1>
 <p><br><br><br><br>
</body>
</html>






