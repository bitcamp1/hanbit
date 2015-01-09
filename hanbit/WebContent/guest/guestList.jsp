<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import = "java.util.*" %>
    <%@ page import = "java.sql.* "%>
 <%!
	private Connection cn ;
	private Statement st; 
	private PreparedStatement pst;
	private CallableStatement cst;
	private ResultSet rs;
	private String sql;
	private int g_sabun, tot, g_pay, pageNum, limit, pageSize, start, end, pageCnt, startPage;
	private String g_name, g_ttl, url, pnum, sVal, sKey, sQry;
%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>guestList.jsp</title>
	<style type="text/css">
		table { background:white; text-align:center; width: 800px;border-collapse:collapse;class='center'}
		th{background-color: yellow;border:1px solid black;}
		tr td{border:1px solid black}
	    .bg_yellow{background:yellow;}
		a{text-decoration: none; font-weight: bold; color: black;}
		a:hover{text-decoration: underline;color: blue;}
		.center{margin: 0 auto;width:1000px;}

	</style>

</head>
<%
	try{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		url = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
		cn = DriverManager.getConnection(url,"system","oracle");
	}catch(Exception e){
		e.printStackTrace();
	}
%>
<body>
<div >
<font size="7" color="blue">guestList.jsp</font>

 	<a href="guest.jsp">[등록]</a> 
 
<%
	try{
		sql = "select count(*) as cnt from guest";
		st = cn.createStatement();
		rs = st.executeQuery(sql);	
		if(rs.next()==true){
			tot = rs.getInt("cnt");
		}
	}catch(Exception e){
		e.printStackTrace();
	}
	
%>
<table  >
	<tr align="right">
		<td colspan="6"> <font size="6"> 레코드 갯수 : <%=tot %></font>&nbsp;&nbsp;&nbsp;&nbsp;</td>
	</tr>
	<tr bgcolor="yellow" height="50" align="center">
		<th>글번호</th>
		<th>사번</th>
		<th>이름</th>
		<th>제목</th>
		<th>날짜</th>
		<th>급여</th>
	</tr>

	<%
		try{
			
		//	sql = "select rownum,sabun,name,title,nalja,pay from guest order by rownum desc";
			pnum = request.getParameter("pageNum");
			if(pnum==""||pnum==null){
				pnum = "1";
			}
			pageNum = Integer.parseInt(pnum);
			limit = 10;
			pageSize = 10;
			start = (pageNum-1)*pageSize + 1;
			end = pageNum*pageSize;
			startPage = 1;
			int tmp = 0;
			if(tot%pageSize==0){
				pageCnt = tot/pageSize;
			}else{
				pageCnt = (tot/pageSize)+1;
			}
			
			sKey = request.getParameter("keyField");
			sVal = request.getParameter("keyWord");
			if(sKey==""||sKey==null||sVal==""||sVal==null){
				sKey = " name ";
				sVal = "";
			}else{
				sQry = " where "+sKey.trim()+"'%"+sVal+"%'";
			}
			sQry = " ";
			
			
			sql=" select * from ";
			sql+= "(select rownum as seq, sabun, name, title, nalja, pay from guest order by seq desc)";
			sql+= "  where seq between '"+start+"' and '" +end+"' "; 
			
			st = cn.createStatement();
			rs = st.executeQuery(sql);
			while(rs.next()==true){
				
				g_sabun = rs.getInt("sabun");
				g_name = rs.getString("name");
				g_ttl = rs.getString("title");
				g_pay = rs.getInt("pay"); 
	%>
			<tr
				onmousemove="this.style.backgroundColor='#00FFFF' "
				onmouseout="this.style.backgroundColor='' "
			
			>
				 <td><%= rs.getInt("seq") %></td>
				 <td><%= g_sabun %></td>
				 <td><%= g_name %></td>
				 <td><a href="guestDetail.jsp?idx=<%=g_sabun %>"><%= g_ttl %></a></td>
				 <td><%= rs.getDate("nalja") %></td>
				 <td><%= g_pay%></td>
				 
			 </tr>
	<%
		}
		}catch(Exception e){
			
		}
	 %>
	<tr align="center" >
		<td colspan="6" style="font-size: 14pt;">
			<a href="guestList.jsp?pageNum=1">[1]</a>
			<a href="guestList.jsp?pageNum=2">[2]</a>
			<a href="guestList.jsp?pageNum=3">[3]</a>
			<a href="guestList.jsp?pageNum=4">[4]</a>
			<a href="guestList.jsp?pageNum=5">[5]</a>
			<a href="guestList.jsp?pageNum=6">[6]</a>
		</td>
	</tr>
	<tr align="center">
		<form action="guestList.jsp">
			
		</form>
	</tr>
 </table>
 
 <p><br><br><br><br>
 <p>
 </div>
</body>
</html>