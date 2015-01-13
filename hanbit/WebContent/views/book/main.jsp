<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
    <title>Example of Twitter Bootstrap</title>
    
  	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="../../resources/css/bootstrap.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="../../resources/css/bootstrap-theme.css">


	<script src="https://code.jquery.com/jquery-2.1.3.js"></script>

	<!-- Latest compiled and minified JavaScript -->
	
	<style type="text/css">
		body { text-align: center; }

	</style>
	<script src="../../resources/js/bootstrap.js"></script>
  	<script type="text/javascript">
  	$(document).ready(function(){

  	});
  	</script>
  	
  </head>
<body>

<div>
	<h1>Hello, World !!</h1>
</div>
	
  
  
  <div class="container">
      <h2>Labels</h2>
      <p>The different .label classes insert a label within an element (will automatically fit the size of the element):</p>                  
      <h1>Heading 1 <span class="label label-default">New</span></h1>
      <h3>Heading 3 <span class="label label-default">New</span></h3>
      <h5>Heading 5 <span class="label label-default">New</span></h5>                        
      <p>Paragraph <span class="label label-default">New</span></p>                                    
    </div>
  
  
<div class="modal-body">
    <p>한 멋진 본문…</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn222" data-dismiss="modal" aria-hidden="true">닫기ggg</button>
    <button class="btn btn-primary">변경사항 저장</button>
    <input type="button" class='btn222' value="테스트" />
  </div>
 모달을 켜고 끄는 버튼 
<a href="#myModal" role="button" class="btn" data-toggle="modal">모달 시연 시작</a>
 
<div class="modal hide fade">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    <h3>모달 제목</h3>
  </div>
  <div class="modal-body">
    <p>한 멋진 본문…</p>
  </div>
  
  <div class="modal-footer">
    <a href="#" class="btn">닫기</a>
    <a href="#" class="btn btn-primary">변경사항 저장</a>
  </div>
</div>
<button type="button" id='example' onclick="al()">버튼</button><br />

<a href="#" data-toggle="tooltip" title="첫번째 툴팁">여기에 마우스 올림</a>-->
</body>
</html>