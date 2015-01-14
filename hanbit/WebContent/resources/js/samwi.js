/**
 * 2.2.2 data 입력받기
 */
var x = document.body.innerHTML;
var samwi = {
		init : (function(){
			isMan();
		})()
}
function isMan(){
	
//	var g_id = document.getElementById(doc);
	document.write("결과 :");
	
	
	if(confirm("남자?")===true){
		gender="남";
	}else{
		gender="여";
	}
	x +=gender + "탕으로 가시오.";
	promptEx();
	
	
}
function promptEx(){
	// alert("여기는"+prompt("이곳은 어디?")+"입니다.");
	x = "여기는"+prompt("이곳은 어디?")+"입니다.";
	
	x = "<input id='txt1' type='text' /><br/>";
	x += "<button id='btn2' type='button' onclick='changeColor()'>이벤트2</button>";
	
}
function changeColor(){
		 alert("입력ID 는 "+ document.getElementById('txt1').value);
		 document.body.innerHTML = "<input id='txt2' type='text' /><br/>";
	//	return document.getElementById('txt1').value;
	
	
}
