<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<html>
<head> <title> [guest.jsp] </title> 
	<style type="text/css">
	   input,b{ font-size:16pt; font-weight:bold; }
	</style>
	
	<script type="text/javascript">
	   function nullCheck( ){
		   var a = myform.sabun.value;
		   var b = myform.name.value;
		   if(a == ""){
			   alert("사번이 공백입니다") ;
			   myform.sabun.focus( );
			   return;//아래문장 수행하지 않음 
		   }else{
			   myform.name.focus( );
		   }
		   
		   //사번자릿수 4자리=> myform.sabun.value.length
		   if(myform.sabun.value.length != 4 ){
			   alert("사번자릿수가 틀렸습니다") ;
			   myform.sabun.value = ""; //tf.setText("");
			   myform.sabun.focus( );
			   return ;
		   }
		   
		   if(b==""){
			  alert("이름이 공백입니다") ;
			  myform.name.focus( );
			  return;//아래문장 수행하지 않음 
		   }else { myform.title.focus(); }
		   
		   document.myform.submit( ); //action속성연결 
	   }//nullCheck end
	   
	   function message( ){
		   myform.sabun.value = ""; //tf.setText("");
		   myform.sabun.focus( );
	   }//message end
	   
	   function  notice( ){
		   window.open("popup.jsp", "title", "toobar=no, menubar=no, width=380, height=600, left=200, top=100 ") ;
		   //open("1", "2", "~height=700,left=200,top=100") ;
	   }//notice end
	</script>
</head>
<body>
 <font size=7 color=blue>[guest.jsp] </font><p>
	<form name="myform"  method="get" action="guestSave.jsp">
		<b>사번:</b> 
		<input type=text name="sabun" onFocus="message()" value="사번 4자리 입력" > <br>
		<b>이름:</b> <input type=text name="name"> <br>
		<b>제목:</b> <input type=text name="title" value="snow"> <br>   
		<b>급여:</b> <input type=text name="pay" value="71"> <p>
		<input type="button" onClick="nullCheck( )"  value="데이타저장"> &nbsp;
		<input type="reset"  value="입력취소">
	</form>
 <p>
 
 <h1>
 	<a href="guest.jsp">데이타입력</a> &nbsp;
 	<a href="guestDelete.jsp">데이타삭제</a> &nbsp;
 	<a href="guestList.jsp">데이타출력</a> 
 </h1>
 <p><br><br><br><br>
</body>
</html>






