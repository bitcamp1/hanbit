<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%!
    	String str = "안녕하세요";
    	int a = 5, b= -5;
    	
    	public int abs(int n){
    		if(n<0){
    			n = -n;
    		}
    		return n;
    	}
    	
    %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>dec_jsp</title>
</head>
<body>
	<%=str+"<br>" %>
	<%=a+"의 절대값 :"+abs(a)+"<br>" %>
	<%=b+"의 절대값 :"+abs(b)+"<br>" %>
</body>
</html>