<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"></jsp:include>
<body > 
<div id='guest_wrap'>
	<div id='guest_tbl_wrap' class=" top center aqua_b">
		 
			<form name="myform" action="guestSave.jsp">
			<table id='guest_tbl'>
				<tr>
					<td colspan="2"><font size=7 color=blue>[guest.jsp] </font><p></td>
				</tr>
				<tr >
					<td style='width:30%;'><b>사번:</b></td>
					<td >
						<input type=text name="sabun" size="10" class="lf">
						<input type="button" onClick="sabunCheck()" value="중복체크"/>
					</td>
				</tr>
				<tr>
					<td><b>이름:</b></td>
					<td>
						<input type=text name="name"> <br>
					</td>
				</tr>
				<tr>
					<td><b >제목:</b> </td>
					<td>
						<input type=text name="title" value="snow"/>
					</td>
				</tr>
				<tr>
					<td><b>급여:</b> </td>
					<td>
						<input type=text name="pay" value="71"/>
					</td>
				</tr>
				<tr>
					<td><b>우편:</b> </td>
					<td>
						<input type=text name="zipcode" size="10" /> 
						<input type="button" onClick="zipCheck()" value="우편번호찾기"/> 
					</td>
				</tr>
				<tr>
					<td><b>주소:</b></td>
					<td>
						<input type=text name="address" size='20'> 
					</td>
				</tr>
					<tr>
					<td><b>좋아하는 계절:</b></td>
					<td>
						<%
							String[] seasonArr = {"봄","여름","가을","겨울"};
						%> 
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<input type="submit" value="저장"/> &nbsp;
						<input type="reset"  value="취소"/>
					</td>
				</tr>
			</table>
			</form>
		 <p>
		 <div class=>
		 	<a href="guest.jsp">[입력]</a> &nbsp;
		 	<a href="guestDelete.jsp">[삭제]</a> &nbsp;
		 	<a href="guestList.jsp">[목록]</a> 
		 </div>
		 <p><br><br><br><br>
	</div> 
</div>
</body>
</html>
