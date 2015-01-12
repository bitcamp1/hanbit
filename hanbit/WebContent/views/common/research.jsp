<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>설문 조사 결과</title>
	<style type="text/css">
		b{font-size: 16pt;}
	</style>
</head>
<body>
	<h2>설문 조사 결과</h2>
	<%
		request.setCharacterEncoding("UTF-8");
		String name = request.getParameter("name");
		out.println("이름 :<b>"+name+"</b>");
		String gender = request.getParameter("gender");
		out.println("성별 :<b>"+gender+"</b>");
		if(gender.equals("male")){
			out.println("<b>남자</b>");
		}else{
			out.println("<b>여자</b>");
		}
		
		String[] seasonArr = request.getParameterValues("season");
		out.println("당신이 좋아하는 계절은 ");
		for(String season : seasonArr){
			int n = Integer.parseInt(season);
			switch(n){
			case 1 : out.println("<b>봄</b> 입니다.");break;
			case 2 : out.println("<b>여름</b> 입니다.");break;
			case 3 : out.println("<b>가을</b>");break;
			case 4 : out.println("<b>겨울</b>");break;
			
			}
		}
	%>
	<br />
	<b><a href="javascript:history.go(-1)">다시</a></b>
</body>
</html>