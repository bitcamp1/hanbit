<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<html>
<head> <title> [guest.jsp] </title> 
	<style type="text/css">
	   input,b{ font-size:16pt; font-weight:bold; }
	</style>
	
	<script type="text/javascript">
	   function nullCheck( ){
		   var a = myform.sabun.value;
		   var b = myform.name.value;
		   if(a == ""){
			   alert("����� �����Դϴ�") ;
			   myform.sabun.focus( );
			   return;//�Ʒ����� �������� ���� 
		   }else{
			   myform.name.focus( );
		   }
		   
		   //����ڸ��� 4�ڸ�=> myform.sabun.value.length
		   if(myform.sabun.value.length != 4 ){
			   alert("����ڸ����� Ʋ�Ƚ��ϴ�") ;
			   myform.sabun.value = ""; //tf.setText("");
			   myform.sabun.focus( );
			   return ;
		   }
		   
		   if(b==""){
			  alert("�̸��� �����Դϴ�") ;
			  myform.name.focus( );
			  return;//�Ʒ����� �������� ���� 
		   }else { myform.title.focus(); }
		   
		   document.myform.submit( ); //action�Ӽ����� 
	   }//nullCheck end
	   
	   function message( ){
		   myform.sabun.value = ""; //tf.setText("");
		   myform.sabun.focus( );
	   }//message end
	   
	   function  notice( ){
		   window.open("popup.jsp", "title", "toobar=no, menubar=no, width=380, height=600, left=200, top=100 ") ;
		   //open("1", "2", "~height=700,left=200,top=100") ;
	   }//notice end
	</script>
</head>
<body>
 <font size=7 color=blue>[guest.jsp] </font><p>
	<form name="myform"  method="get" action="guestSave.jsp">
		<b>���:</b> 
		<input type=text name="sabun" onFocus="message()" value="��� 4�ڸ� �Է�" > <br>
		<b>�̸�:</b> <input type=text name="name"> <br>
		<b>����:</b> <input type=text name="title" value="snow"> <br>   
		<b>�޿�:</b> <input type=text name="pay" value="71"> <p>
		<input type="button" onClick="nullCheck( )"  value="����Ÿ����"> &nbsp;
		<input type="reset"  value="�Է����">
	</form>
 <p>
 
 <h1>
 	<a href="guest.jsp">����Ÿ�Է�</a> &nbsp;
 	<a href="guestDelete.jsp">����Ÿ����</a> &nbsp;
 	<a href="guestList.jsp">����Ÿ���</a> 
 </h1>
 <p><br><br><br><br>
</body>
</html>






