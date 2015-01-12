<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>fruitSelectForm.jsp</title>
</head>
<body>
	<form action="fruitSelect.jsp">
		<label for="fruit">과일을 선택하세요</label>
		<select name="fruit" id="fruit">
			<option value="1">사과</option>
			<option value="2">메론</option>
			<option value="3">바나나</option>
		</select>
		<input type="submit" value="전송" />
	</form>
</body>
</html>
