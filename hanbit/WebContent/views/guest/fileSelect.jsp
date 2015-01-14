<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"></jsp:include>
<head>

	<link rel="stylesheet" href="../../resources/css/guest.css" />
</head>
<body>
	<div class='guest_wrap'>
	<div class='divCenter'>
		<form action="fileUpload.jsp" method="post">
		<b>사번 :</b> <input type="text" name="sabun" value="2234" /><br />
		<b>이름 :</b> <input type="text" name="name" value="LEE" /><br />
		<b>파일 :</b> <input type="file"  name="file_good" /><br />
		<input type="hidden" name="idx" value="78" /><p>
		<button type="submit">파일업로드</button>
		<button type="reset">취소</button>
	</form>
	</div>
	</div>
</body>
</html>