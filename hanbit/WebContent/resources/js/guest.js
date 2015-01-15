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
function numberCheck( ){
	  var a = myform.sabun.value;
	  var mylen = myform.sabun.value.length;
	  var i=0;
	  for(i=0; i<mylen; i++){
		if(a.charAt(i)<'0' || a.charAt(i) > '9'){
			alert("숫자가 아닙니다");
			 myform.sabun.value = myform.sabun.value.substring(0,i);  
			 myform.sabun.focus( );
		}//if end
	  }//for end
} //numberCheck end

function  move( ){
	   var str=myform.sabun.value;
	   var size=myform.sabun.value.length ; 
	   if(str=="") { 
		   alert("삭제할 사번=비번 입력하세요");
		   myform.sabun.focus( );
		   return ;
	    }
	   
	   if( size != 4 ){
		   alert("삭제할 사번자릿수 4자리입니다");
		   myform.sabun.value=""; //ta.setText("");
		   myform.sabun.focus( );
		   return ;
	   }
	   document.myform.submit( ); //input type=submit같은역할
} //move end
function sendAddress(zipc,si,gu,dong){
	var addr = si+" "+gu+" "+dong;
	opener.myform.zipcode.value=zipc;
	opener.myform.address.value=addr;
	self.close();
}
function send(){
	subform.dong.focus();
	
}