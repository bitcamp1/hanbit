<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>movie list</title>
	<style>
		table{border-collapse: collapse;border:1px solid black;}
		table tr td{border:1px solid black;}
	</style>
</head>
<body>
	<%
		String[] list = {"타이타닉","타잔","시네마","혹성","킹콩",};
		pageContext.setAttribute("list", list); // request 를 pageContext 로 치환
	%>
	<div style='margin:0 auto; width:700px;'>
	<table style='width:50%;text-align: center;'>
		<tr>
			<th>index</th>
			<th>count</th>
			<th>title</th>
		</tr>
		<c:forEach var="movie" items="${list }" varStatus="stat">
			<tr>
				<td>${stat.index }</td>
				<td>${stat.count }</td>
				<td>${movie }</td>
			</tr>
		</c:forEach>
	</table>
	<p>
		<ul>
			<c:forEach var="city" items="${list}" varStatus="stat">
				<c:choose>
					<c:when test="${stat.first}">
						<li style="font-weight: bold;color: red;">
							${city}
						</li>
					</c:when>
					<c:otherwise>
						<li>${city}</li>
					</c:otherwise>
					
				</c:choose>
			</c:forEach>
		</ul>
	<p>
	<c:set var="dan" value="${7}"/>
	<c:forEach var="gugu" begin="1" end="9" step="1">
		${dan * gugu}
	</c:forEach>
	<p>
	<c:set var="a" value="${1200}"/>
	<c:set var="now" value="<%=new java.util.Date()%>"/>	
	<fmt:formatDate value="${now}" type="date" pattern="yyy년 MM월 dd일 hh시 mm분 ss초"/>
	
	
	</div>
	
	
	
</body>
</html>