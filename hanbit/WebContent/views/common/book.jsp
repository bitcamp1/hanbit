<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>[book.jsp]</title>
	<style type="text/css">
		td,tr{font-size: 20pt; font-weight: bold;}
	</style>
	<script src="../../resources/js/initialize.js"></script>
	<script>
		window.onload = (function (){
			init.browserCheck
		})();
	</script>
</head>
<body>
	<font size="7" color="blue"><b>[book.jsp]</b></font><p>
	<table>
		<tr>
			<td colspan="3">
				<img src="img/bar.gif" alt="막대기" width="center"/>
			</td>
			
		</tr>
		<tr height="60" bgcolor="yellow" align="center"> 
			<td>자바기초반</td>
			<td>디자인기초</td>
			<td>Server기초</td>
		</tr>
		<tr>
			<td>신촌 4:37</td>
			<td>문화일보센터</td>
			<td>신촌한빛센터</td>
		</tr>
		<tr>
			<td>제어,반복,함수</td>
			<td>html,CSS,JS</td>
			<td>IO,Thread,Net</td>
		</tr>
		<tr>
			<td>연산,출력,static</td>
			<td>자바스크립트JS</td>
			<td>NetWork프로그램</td>
		</tr>
	</table>
	<p></p>
	<font size="7">
		<b>
			윗첨자 sup, 아래첨자 sub 연습<br />
			X <sup>2</sup> + Y <sup>2</sup> = (XY) <sup>2</sup><br />
			H <sub>2</sub> O <p></p>
			<img src="img/bar.gir" alt="막대기" />
			&lt;img src="img/bar.gir" width=900 &gt;
		</b>
	</font>
	<script>
		init();
	</script>
</body>
</html>