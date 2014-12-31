<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   
<!doctype html>
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
	<script>
		function nullCheck(){
			var a = document.myform.sabun.value;
			var b = myform.name.value;
			if(a.length!=4){
				alert("사번은 4자리입니다.");
				myform.sabun.value="";
				myform.sabun.focus();
				return; // 아래 문장을 수행하지 않음
				// 즉 이름까지 체크할 필요도 없음
			}else{
				myform.name.focus();
			}
			if(a.length)
			if(b==""){
				alert("이름이 공백입니다.");
				myform.name.focus();
				return;
			}else{
				myform.title.focus();
			}
			
			// 공백이 없으면 form 태그 action 연결
			document.myform.submit(); 
			// 액션 속성과 연결
			
		}
		function message() {
			myform.sabun.value = "";
			myform.sabun.focus();
		}
		function notice() {
			open("popup.jsp", "title", 
					"toolbar=no,menubar=no,width=350,height=400,left=200,top=100")
		}
	</script>
	</head>
	<body >
		<font size="7" color="blue">[guest.jsp]</font><p>
			<form name="myform" action="guestSave.jsp" method="get">
				
				<b>사번 :</b><input type="text" name="sabun" onFocus="message()" value="사번  4자리 입력"/><br />
				<b>이름 :</b><input type="text" name="name" /><br />
				<b>제목 :</b><input type="text" name="title"/><br />
				<b>급여 :</b><input type="text" name="pay"/><br />
				<input type="button" onClick="nullCheck()" value="저장" />&nbsp;&nbsp;&nbsp;
				<input type="reset" value="취소" />
			</form>
		<p>
		<h1>
			<a href="guest.jsp">입력</a>&nbsp;
			<a href="guestDelete.jsp">삭제</a>&nbsp;
			<a href="gyestList.jsp">출력</a>&nbsp;
		</h1>
		<p><br><br><br><br></p>
		
	</body>
</html>