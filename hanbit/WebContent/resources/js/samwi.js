var samwi = {
		x : "당신은 ",
		init : function(){
			this.isMan();
		},
		
		isMan : function(){
			document.write(this.x);
			
			
			if(confirm("남자?")===true){
				gender="남";
			}else{
				gender="여";
			}
			this.x +=gender + "탕으로 가시오.";
			this.promptEx();
			
		},
		promptEx : function(){
			this.x = "여기는"+prompt("이곳은 어디?")+"입니다.";
			
			x = "<input id='txt1' type='text' /><br/>";
			x += "<button id='btn2' type='button' onclick='changeColor()'>이벤트2</button>";
		},
		changeColor : function(){
			 alert("입력ID 는 "+ document.getElementById('txt1').value);
			 document.body.innerHTML = "<input id='txt2' type='text' /><br/>";
		}
}

