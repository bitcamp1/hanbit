<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
	</head>
	<body>
		<font size="7" color="blue">[guest.jsp]</font><p>
			<form action="guestSave.jsp" method="post">
			<!-- 사번 4자리수 정수형 첫번째, 두번째 숫자는 동일 -->
				<b>사번 :</b><input type="text" name="sabun" maxlength="4" value="1234"/><br />
				<b>이름 :</b><input type="text" name="name" value="김구"/><br />
				<b>제목 :</b><input type="text" name="title" value="snow"/><br />
				<!-- 급여 -->
				<b>급여 :</b><input type="text" name="pay" value="100" /><br />
				<input type="submit" value="저장" />&nbsp;&nbsp;&nbsp;
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