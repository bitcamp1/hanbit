<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head> <title> [guest.jsp] </title> 
	<style type="text/css">
	   input,b{ font-size:16pt; font-weight:bold; }
	   .dv{margin-top: 10px};
	</style>
	<link rel="stylesheet" href="../css/robin.css" type="text/css" />
	<script src="../js/robin2.js"></script>
	<script src="../js/robin.js"></script>
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
	   function  zipCheck( ){
		   var url = "zipCheck.jsp"
		   window.open(url, "title", "toobar=no, menubar=no, width=500, height=300, left=200, top=100 ") ;
	   }
	</script>
</head>
<body > 
<div style="width:100%;height:400px;" class="relative">
	<div style="width:400px;height:400px;" class=" top center aqua_b">
		 
			<form name="myform" action="guestSave.jsp" class="lf ">
			<div class='lf'>
				<font size=7 color=blue>[guest.jsp] </font><p>
			</div>
			<div>
				<b>사번:</b>
				<input type=text name="sabun" size="10">
				<input type="button" onClick="check()" value="중복체크"/>
			</div>
			<div style="clear:both"></div>
			<div>
				<b>이름:</b>
				<input type=text name="name"> <br>
			</div>
			<div>
				<b class='carrot2'>제목:</b> 
				<input type=text name="title" value="snow"/>
			</div>
			<div>
				<b>급여:</b> 
				<input type=text name="pay" value="71"/>
			</div>	 
			<div>
				<b>우편:</b> 
				<input type=text name="zipcode" size="10" /> 
				<input type="button" onClick="zipCheck()" value="우편번호찾기"/> 
			</div>
			<div>
				<b>주소:</b>
				<input type=text name="address" size='20'> 
			</div>	
			<div>
				<input type="submit" value="저장"/> &nbsp;
				<input type="reset"  value="취소"/>
			</div>
			
			</form>
		 <p>
		 <div class=>
		 	<a href="guest.jsp">[입력]</a> &nbsp;
		 	<a href="guestDelete.jsp">[삭제]</a> &nbsp;
		 	<a href="guestList.jsp">[목록]</a> 
		 </div>
		 <p><br><br><br><br>
	</div> 
</div>
</body>
</html>
