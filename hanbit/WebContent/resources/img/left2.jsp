<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<html>
<head>
	<style type="text/css">
	 a {  text-decoration:none ;font-family:Comic Sans MS; }
	 a:hover {  text-decoration:underline;  font-size:22pt ; font-family:Comic Sans MS;  }    
  </style>
</head>
<body>
<img src="./images/x.gif"> 
<img src="./images/y.gif"> 
<img src="./images/z.gif">
<br>
<table>
 <tr>
	<td> <font color=red>사번:</font>	</td>
	<td> <input type=text  name="sabun" size=20></td>
 </tr>
  <tr>
	<td> <font color=red>이름:</font> 	</td>
	<td> <input type=text  name="name" size=20></td>
 </tr>
 <tr>
 	<td  colspan=2>	
 	&nbsp;&nbsp;
 	<input type=submit  value="인증">
 	<input type=reset  value="취소">
 	<input type=button  value="가입">
 	</td>
 </tr>
</table>
<p>
<img src="./images/pen2.gif"  border=0>
<a href="./template.jsp?page=main2">메인화면</a><p>
<img src="./images/pen2.gif"  border=0>
<a href="./template.jsp?page=writeForm2">등록화면</a><p>
<img src="./images/pen2.gif"  border=0>
<a href="./template.jsp?page=list2">리스트화면</a><p>
	
</body>
</html>