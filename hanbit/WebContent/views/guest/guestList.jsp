<%@page import="com.sun.xml.internal.txw2.Document"%>
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
	private int g_sabun, tot, g_pay, pageNum, pageSize, start, end, pageCnt, startPage;
	private String g_name, g_ttl,  sVal, sKey;
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
		String url = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
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
	
	sKey = request.getParameter("keyField");
	sVal = request.getParameter("keyword");
	
	try{
		
			if(sVal==""||sVal==null){
				
				sql = "select count(*) as cnt from guest";
				st = cn.createStatement();
				rs = st.executeQuery(sql);	
				if(rs.next()==true){
					tot = rs.getInt("cnt");
				}
			}else{
				sql = "select count(*) as cnt from guest where "+sKey+" like '%"+sVal+"%'";
				st = cn.createStatement();
				rs = st.executeQuery(sql);	
				if(rs.next()==true){
					tot = rs.getInt("cnt");
			}
		}
	}catch(Exception e){
		e.printStackTrace();
	}
	
%>
<table id='guest_list_tbl' >
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
			
			String pnum = request.getParameter("pageNum");
			if(pnum==""||pnum==null){
				pnum = "1";
			}
			pageNum = Integer.parseInt(pnum);
			pageSize = 10;
			if(tot%pageSize==0){
				pageCnt = tot/pageSize;
			}else{
				pageCnt = (tot/pageSize)+1;
			}
			
			start = (pageNum-1)*pageSize + 1;
			end = pageNum*pageSize;
			
			if(sVal==""||sVal==null){
				sql=" select seq, sabun, name, title, nalja, pay from ";
				sql+= "(select rownum as seq, g.* from guest g order by seq asc)";
				sql+= "where seq between '"+start+"' and '" +end+"' "; 
			}else{
				sql=" select * from ";
				sql+= "(select rownum as seq, g.* from guest g ";
				sql+= " where "+sKey.trim()+" like '%"+sVal+"%'";
				sql+=" order by seq desc) ";
				sql+= "where seq between '"+start+"' and '" +end+"' "; 
			}
			
		
		
			
			st = cn.createStatement();
			rs = st.executeQuery(sql);
		
	
			
			int tmp = (pageNum-1)%pageSize;
			startPage = pageNum-tmp;
			
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
		
		
		<%
		if((startPage-pageSize)>0){
			out.println("<a href=guestList.jsp?pageNum="+(startPage-pageSize)+">◀이전</a>");
		}
		for(int i=startPage;i<(startPage+pageSize);i++){
			if(i==pageNum){
				out.println("<font color=red>["+i+"]</font>");
			}else{
				out.println("<a href=guestList.jsp?pageNum="+i+">["+i+"]</a>");
			}
			if(i>=pageCnt)break;
		}
			
		if((startPage+pageSize)<=pageCnt){
			out.println("<a href=guestList.jsp?pageNum="+(startPage+pageSize)+">다음▶</a>");
		}
		%>
		</td>
	</tr>
	<tr align="center">
		<form action="guestList.jsp">
			<td colspan="6">
				검색 : &nbsp;
				<select name="keyField">
					<option value="name" selected="selected">이 름</option>
					<option value="title">제 목</option>
					<option value="content">내 용</option>
				</select>
				<input type="text" name="keyword" value='' />
				<input type="submit" value="검 색" />
			</td>
		</form>
	</tr>
 </table>
 
 <p><br><br><br><br>
 <p>
 </div>
</body>
</html>