<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@include file="var.jsp" %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>[addMember]</title>
	<%@include file="css.jsp" %>
</head>
<%@include file="cn.jsp" %>
<body>
	<%
		
		
		name = request.getParameter("name");
		userid = request.getParameter("userid");
		pwd = request.getParameter("pwd");
		email = request.getParameter("email");
		phone = request.getParameter("phone");
		admin = Integer.parseInt(request.getParameter("admin"));
		String sql = "insert into member values(?,?,?,?,?,?)";
		try{
			pst = cn.prepareStatement(sql);
			pst.setString(1,name);
			pst.setString(2,userid);
			pst.setString(3, pwd);
			pst.setString(4, email);
			pst.setString(5, phone);
			pst.setInt(6, admin);
			pst.executeUpdate();
			response.sendRedirect("allMember.jsp");
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			try{
				if(pst!=null)pst.close();
				if(cn!=null)pst.close();	
			}catch(Exception e){
				System.out.println(e.toString());
			}
		}
	
	%>
</body>
</html>