<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <script src="../../resources/js/member.js"></script>
	<form action='login.do' method='post' name='frm'>
		<table style='width:300px;'>
			<tr>
				<td>아이디</td>
				<td><input type="text" name='userid' value="${userid }" /></td>
			</tr>
			<tr>
				<td>암 호</td>
				<td><input type="password" name="pwd" /></td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<input type="submit" value="로그인" onclick='return member.check()'/>&nbsp;&nbsp;
					<input type="reset" value="취소" />&nbsp;&nbsp;
					<button type="button" onclick="location.href='join.do'">회원가입</button>
					
				</td>
			</tr>
			<tr>
				<td colspan="2">
					${message}
				</td>
			</tr>
		</table>
	</form>

