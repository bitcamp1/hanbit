/**
 * 
 */
function  notice( ){
		   window.open("popup.jsp", "title", "toobar=no, menubar=no, width=380, height=600, left=200, top=100 ") ;
}
function  sabunCheck( ){
	   if(myform.sabun.value==""){
	   alert("사번이 공백입니다.");
	   myform.sabun.focus();
	   return;
	   }  
	   var url = "openID.jsp"
		window.open(url, "title", "toobar=no, menubar=no, width=380, height=300, left=200, top=100 ") ;
}
function  zipCheck( ){
	   var url = "zipCheck.jsp"
   window.open(url, "title", "toobar=no, menubar=no, width=500, height=300, left=200, top=100 ") ;
}