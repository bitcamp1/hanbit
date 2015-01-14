

function AddWindowEvent(fn)
{
    if (window.addEventListener){
	    window.addEventListener("load", fn, false)
    } else{
	    window.attachEvent("onload", fn)
    }
}

/* ie Check */

//if (window.addEventListener){
//	window.addEventListener("load", ieChecker, false)
//} else{
//	window.attachEvent("onload", ieChecker)
//}

//var ieCheck = false;

//function ieChecker(){
//	if (navigator.appName != "Microsoft Internet Explorer")	ieCheck = true;
//}

function layerDisplay(objId, displayType){
	var dis = document.getElementById(objId);
	if(!displayType) displayType = 'block';
	if(dis.style.display != displayType) dis.style.display = displayType;
	else dis.style.display = 'none';
}

function windowOpen(objLink, wid, hei, winTit){
	if (!winTit){
		var winTit = "nullTit";
	}
	window.open(objLink, winTit, 'scrollbars=no, status=no,width='+wid+',height='+hei);
}

/* Flash load(parent element id) */
function flashRewrite(objId) {
	var obj = document.getElementById(objId);
	if (window.ActiveXObject && obj) {
		obj.innerHTML = obj.innerHTML;
	}
}

/* Flash load(url, width, height, id) */
function getFlash(swfName, widLength, heiLength, id, replaceTag){
	/*
	swfName = swfName.substring(0, swfName.lastIndexOf(".swf"));
	if (checkVersion()) {
		AC_FL_RunContent(
			"src", swfName,
			"width", widLength,
			"height", heiLength,
			"id", id,
			"quality", "high",
			"name", id,
			"allowScriptAccess","always",
			"type", "application/x-shockwave-flash",
			"pluginspage", "http://www.adobe.com/go/getflashplayer"
		);
	}
	*/
	var isHTTPS = window.location.href.indexOf("https://") != -1;
	if (isHTTPS) document.write(getSSLFlashTag(swfName, widLength, heiLength, id, replaceTag));
	else document.write(getFlashTag(swfName, widLength, heiLength, id, replaceTag));
}

function getSSLFlash(swfName, widLength, heiLength, id, replaceTag){
	document.write(getSSLFlashTag(swfName, widLength, heiLength, id, replaceTag));
}

/* Flash Transparent load(url, width, height, id) */
function getFlashTrans(swfName, widLength, heiLength, id, replaceTag){
	/*
	swfName = swfName.substring(0, swfName.lastIndexOf(".swf"));
	if (checkVersion()) {
		AC_FL_RunContent(
			"src", swfName,
			"width", widLength,
			"height", heiLength,
			"id", id,
			"quality", "high",
			"wmode", "transparent",
			"name", id,
			"allowScriptAccess","always",
			"type", "application/x-shockwave-flash",
			"pluginspage", "http://www.adobe.com/go/getflashplayer"
		);
	}
	*/
	document.write(getFlashTag(swfName, widLength, heiLength, id, replaceTag));
}

function addFlashTrans(layerId, swfName, widLength, heiLength, id, replaceTag){
	var layer = $(layerId);
	if (layer) {
	    layer.innerHTML = getFlashTag(swfName, widLength, heiLength, id, replaceTag);
	}
}


/*	플래쉬 태그 스트링 Return - 20080115 이승연 추가	*/
function getFlashTag(swfName, widLength, heiLength, id, replaceTag){

    var str = '';
    
//    str += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+widLength+'" height="'+heiLength+'" id="'+id+'">';
//	str += '<param name="movie" value="'+swfName+'">';
//	str += '<param name="quality" value="high">';
//	str += '<param name="allowScriptAccess" value="always">';
//	str += '<param name="wmode" value="transparent">';
//	
//	str += '<!--[if !IE]> <-->';
//    str += '<object type="application/x-shockwave-flash" data="' + swfName + '" width="' + widLength + '" height="' + heiLength + '>';
//    str += '<param name="allowScriptAccess" value="always">';
//	str += '<param name="wmode" value="transparent">';
//    if (replaceTag) {
//        str += replaceTag;
//    }
//    str += '</object>';
//    str += '<!--> <![endif]-->';
    
    
	if (navigator.appName == "Microsoft Internet Explorer") {
        str += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + widLength + '" height="' + heiLength + '" id="'+id+'">';
        str += '<param name="movie" value="'+swfName+'">';
        str += '<param name="quality" value="high">';
        str += '<param name="allowScriptAccess" value="always">';
        str += '<param name="wmode" value="transparent">';
       
	}
	else    {
	    //str += '<!--[if !IE]> <-->';
        str += '<object type="application/x-shockwave-flash" data="' + swfName + '" width="' + widLength + '" height="' + heiLength + '" id="'+id+'">';
        str += '<param name="allowScriptAccess" value="always">';
	    str += '<param name="wmode" value="transparent">';
        if (replaceTag) {
            str += replaceTag;
        }
        str += '</object>';
        //str += '<!--> <![endif]-->';
    }
    
    str += '</object>';

    
	return str;
}

function getSSLFlashTag(swfName, widLength, heiLength, id, replaceTag){

    var str = '';
    
	if (navigator.appName == "Microsoft Internet Explorer") {
	    str += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+widLength+'" height="'+heiLength+'" id="'+id+'">';
	    str += '<param name="movie" value="'+swfName+'">';
	    str += '<param name="quality" value="high">';
	    str += '<param name="allowScriptAccess" value="always">';
	    str += '<param name="wmode" value="transparent">';
	}
	else    {
	    //str += '<!--[if !IE]> <-->';
        str += '<object type="application/x-shockwave-flash" data="' + swfName + '" width="' + widLength + '" height="' + heiLength + '" id="'+id+'">';
        str += '<param name="allowScriptAccess" value="always">';
	    str += '<param name="wmode" value="transparent">';
        if (replaceTag) {
            str += replaceTag;
        }
        str += '</object>';
        //str += '<!--> <![endif]-->';
    }
    str += '</object>';

	return str;
}

/* Media Player Control :: START */

var MUrl;
function wmpCreate(url, width, height, id) {
    var str = "";
    if (navigator.appName == "Microsoft Internet Explorer") {
         str = '<object id="'+id+'" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" width="'+ width +'" height="'+ height +'">';
    } else {
         str = '<object id="'+id+'" type="application/x-ms-wmp" data="'+url+'" width="'+ width +'" height="'+ height +'">';
    }

    str += '<param name="URL" value="'+url+'" />';
    str += '<param name="uiMode" value="none">';
	str += '<param name="autostart" value="true">';
	str += '<param name="showcontrols" value="false">';
	str += '<param name="showstatusbar" value="false">';

    str += '</object>';
	MUrl = url;

	return str
}


function setDefaultImg(obj , imageSize ){

    var filename = "default80x55.gif";


    if(imageSize== 55 ) {
        filename = "default55x31.gif";
    }
    if(imageSize== 80 ) {
        filename = "default80x55.gif";
    }
    if(imageSize== 100 ) {
        filename = "default100x60.gif";
    }
    if(imageSize== 114 ) {
        filename = "default114x65.gif";
    }

    if(imageSize== 113 ) {
        filename = "default113x70.gif";
    }

    if(imageSize== 125 ) {
        filename = "default125x70.gif";
    }

    if(imageSize== 135 ) {
        filename = "default135x87.gif";
    }


    if(imageSize== 157 ) {
        filename = "default157x96.gif";
    }

    if(imageSize== 288 ) {
        filename = "default288x196.gif";
    }


    obj.src = "http://openimage.interpark.com/tourpark/tour/common/defaultImg/" + filename ;


}


function setDefaultImg_01(obj, imageSize)
{
    var filename = "defaultImg_2dan_95x67.gif";
    
    if(imageSize== 125 ) {
        filename = "defaultImg_3dan_128x98.gif";
    }
    
    obj.src = "http://openimage.interpark.com/tourpark/tour/common/defaultImg/" + filename ;
    
    //128
}

function setDefaultImg_02(obj, imageSize)
{
    var filename = "defaultImg_spot_300x200.jpg";
    
    if(imageSize== 125 ) {
        filename = "defaultImg_spot_300x200.jpg";
    }
    
    obj.src = "http://openimage.interpark.com/tourpark/tour/common/defaultImg/" + filename ;
    
    //128
}



var stats = "on";
function movieMute(id){
	if (stats == 'on') {
		document.getElementById(id).settings.mute = true;
		document.getElementById('muteBtn').alt = "소리";
		stats = "off";
	}
	else {
		document.getElementById(id).settings.mute = false;
		document.getElementById('muteBtn').alt = "음소거";
		stats = "on";
	}
}
/* //Media Player Control :: E N D */

/* Ajax Request 값받기 */
function RequestAjax(url, params, cbfn)
{
    new Ajax.Request(
        url,
       {parameters: params,
        onSuccess: cbfn}
    );
}

var ajaxO = {};

ajaxO.Request = function(method, url, params, callback, response ) {
    this.method = method;
	this.url = url;
	this.params = params;
	this.callback = callback;
	this.response = (response) ? response : "TEXT";
	this.send();
}

ajaxO.Request.prototype = {
	getXMLHttpRequest: function() {
		if (window.ActiveXObject) {
			try {
				return new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				try {
					return new ActiveXObject("Microsoft.XMLHTTP");
				} catch(e1) { return null; }
			}
		} else if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		} else {
			return null;
		}		
	},
	send: function() {
		var reqObj = this;
		
		reqObj.req = reqObj.getXMLHttpRequest();
		reqObj.broweser = reqObj.checkBrowser();
		
		var httpMethod = reqObj.method ? reqObj.method : 'GET';
		if (httpMethod != 'GET' && httpMethod != 'POST') {
			httpMethod = 'GET';
		}
		var httpParams = (reqObj.params == null || reqObj.params == '') ? null : reqObj.params;
		var httpUrl = reqObj.url;
		if (httpMethod == 'GET' && httpParams != null) {
			httpUrl += "?" + httpParams + "&time=" + (new Date()).getTime();
		}else{
		    httpUrl += "?time=" + (new Date()).getTime();
		}
		
		
		reqObj.req.open(httpMethod, httpUrl, true);
		reqObj.req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		
        if(reqObj.broweser.Opera || reqObj.broweser.Safari || reqObj.broweser.Mozilla){
	        reqObj.req.onload = function (){
						        reqObj.onStateChange.call(reqObj);
					        };
        }else{
	        reqObj.req.onreadystatechange = function(){
						        if(reqObj.req.readyState == 4)
							        reqObj.onStateChange.call(reqObj);
					        };
        }
        
		reqObj.req.send(httpMethod == 'POST' ? httpParams : null);
		
	},
	onStateChange: function() {
	    //var responseObj = (this.response == "XML") ? this.req.responseXML : this.req.responseText;
		//this.callback(responseObj);
	    if (this.response == "XML") {
	        this.callback(this.req.responseXML);
	    } else {
		    this.callback(this.req.responseText);
		}
	},
	checkBrowser: function(){
        var name = navigator.appName;
	    var version = navigator.appVersion;
	    var IE  = (name.indexOf("Explorer") > -1) ? true : false;
	    var Opera = (name.indexOf("Opera") > -1) ? true : false;
	    var Mozilla = (name.indexOf("Netscape") > -1) ? true : false;
	    var Safari = (name.indexOf("Safari") > -1) ? true : false;

	    return {name:name, version: version, IE:IE, Opera:Opera, Mozilla:Mozilla, Safari:Safari};
    }
    
}


// 로그인 요청
function reqLogin(MemID, MemPWD, LoginCallback)
{	
	reqLoginSaveID(MemID, MemPWD, "", true, LoginCallback);
}

// 로그인 요청
// 아이디저장 기능 추가 (2012-10-04)
// IsPopup 변수 추가 (2012-11-07)
function reqLoginSaveID(MemID, MemPWD, SaveID, IsPopup, LoginCallback)
{
    reqLoginAutologin(MemID, MemPWD, SaveID, "N", IsPopup, LoginCallback);
}

// 로그인 요청
// 아이디저장 기능 추가 (2012-10-04)
// IsPopup 변수 추가 (2012-11-07)
// 자동로그인 기능 추가 (2013-04-29)
function reqLoginAutologin(MemID, MemPWD, SaveID, AutoLogin, IsPopup, LoginCallback)
{
    var strParam = '';
    strParam += 'MemID=' + encodeURIComponent(MemID);
    strParam += '&MemPWD=' + encodeURIComponent(MemPWD);
    strParam += '&SaveID=' + encodeURIComponent(SaveID);
    strParam += '&AutoLogin=' + encodeURIComponent(AutoLogin);

	new ajaxO.Request(
        "POST",
		"/Exporter/ws/GateService.asmx/GetLoginInfoAutologin",
		strParam,
		function(result){
		    var item = result.getElementsByTagName("result")[0];
            var code = item.getElementsByTagName("code")[0].childNodes[0].nodeValue;
            var message = item.getElementsByTagName("message")[0].childNodes[0].nodeValue;
            var data = result.getElementsByTagName("data")[0];
            var pwdFailCnt = data.getElementsByTagName("PwdFailCnt")[0].childNodes[0].nodeValue;
            var redirected = false;

            if (code == "200") {
                var gourl = getRequest("goUrl");
                if(gourl == "") {
                    gourl = escape("http://tour.interpark.com");
                }
                var openurl = "http://tour.interpark.com/gate/MemberSiteAgree.aspx?GPage=" + gourl;
                
                if (IsPopup == true) {   // 팝업 로그인이면 마케팅동의를 새창으로 띄운다
                    window.open(openurl, "_blank");
                }
                else {
                    window.location.href = openurl;
                    redirected = true;
                }
            }
            
            if(Number(pwdFailCnt) >= 5) {
                var pwdurl = "https://incorp.interpark.com/member/matchpwd.do?_method=initialPopUp";
	            var pwdWindow = window.open(pwdurl, "password", "width=480,height=275,scrollbars=no");
	        }
            
            if (!redirected)
                LoginCallback(code, message, pwdFailCnt);
		}
		,"XML"
	);	
}

/* Request Parameter 값받기 */
function getRequest(strParamName)
{
    var fullUrl = window.location.href;

    var intStartNum = fullUrl.indexOf("?") + 1;
    var intEndNum = fullUrl.length;
    var arrParam = fullUrl.substr(intStartNum,intEndNum).split("&");

    for (i = 0 ; i < arrParam.length ; i++ )
    {
        if (arrParam[i].split("=")[0] == strParamName)
        {
            return arrParam[i].split("=")[1];
        }
    }
    return '';
}

/* Request Parameter 값받기 */
function getRequestReplace(strParamName)
{
    var fullUrl = window.location.href;

    var intStartNum = fullUrl.indexOf("?") + 1;
    var intEndNum = fullUrl.length;
    var arrParam = fullUrl.substr(intStartNum,intEndNum).split("&");

    for (i = 0 ; i < arrParam.length ; i++ )
    {
        if (arrParam[i].split("=")[0] == strParamName)
        {
            return ReplaceSpecialChars(arrParam[i].split("=")[1]);
        }
    }
    return '';
}

function ReplaceSpecialChars(param)
{
    param = param.replace(/</g, "&lt;");
    param = param.replace(/>/g, "&gt;");
    param = param.replace(/"/g, "&quot;");
    param = param.replace(/'/g, "&#039;");
    
    return param;
}

//마우스 오버시 안내문구 보여주기
//하나투어, 모두투어 상세페이지에서만 사용-그외사용금지
function moveTo(obj,xL,yL) { obj.left = xL + 'px'; obj.top = yL + 'px'; }
function cClick() { hideObject(over); sw=0; }
//function layerWrite(txt) { document.all["resisttext"].innerHTML = txt }
function showObject(obj) { obj.display = "block" }
function hideObject(obj) { obj.display = "none" }
//var x = 0;
//var y = 0;
//var dir = 1;
//var offsetx = 0;
//var offsety = 0;
//var width = 290;
//var height = 50;
/*레이어 over시 깜박임 현상으로 제외
document.onmousemove = function(e) {
	try {
		var evt = e ? e : window.event; //firefox 등 타browser와 ie 호환 처리
        x=evt.x + document.documentElement.scrollLeft+10;
        y=evt.y + document.documentElement.scrollTop;
        if (x+width-document.documentElement.scrollLeft > document.documentElement.clientWidth) x=x-width-25;
        if (y+height-document.documentElement.scrollTop > document.documentElement.clientHeight) y=y-height;

        if (snow) {
          if (dir == 2) { moveTo(over,x+offsetx-(width/2),y+offsety); } // Center
          if (dir == 1) { moveTo(over,x+offsetx,y+offsety); } // Right
          if (dir == 0) { moveTo(over,x-offsetx-width,y+offsety); } // Left
        }
    } catch (e) { }
}
*/
var snow = 0;
var sw = 0;
var cnt = 0;
function nd() {
    if ( cnt >= 1 ) { sw = 0 };
    if ( sw == 0 ) { snow = 0; hideObject(over); }
    else { cnt++; }
}
function disp(obj) {
    parm = eval(obj);
    over = parm.style;
    var dir = 1;
    var offsetx = 0;
    var offsety = 0;
    var width = 290;
    var height = 50;
    var evt = window.event;
    var x = evt.x + document.documentElement.scrollLeft+10;
    var y = evt.y + document.documentElement.scrollTop;
    if (x+width-document.documentElement.scrollLeft > document.documentElement.clientWidth) x=x-width-25;
    if (y+height-document.documentElement.scrollTop > document.documentElement.clientHeight) y=y-height;
    if (snow == 0) {
      if (dir == 2) { moveTo(over,x+offsetx-(width/2),y+offsety); } // Center
      if (dir == 1) { moveTo(over,x+offsetx,y+offsety); } // Right
      if (dir == 0) { moveTo(over,x-offsetx-width,y+offsety); } // Left
      showObject(over);
      snow = 1;
    }
}

function HideInfoLayerbyEvent() {
    if ( cnt >= 1 ) { sw = 0 };
    if ( sw == 0 ) { snow = 0; hideObject(over); }
    else { cnt++; }
}
function ShowInfoLayerbyEvent(obj, e) {
    parm = eval(obj);
    over = parm.style;
    var dir = 1;
    var offsetx = 0;
    var offsety = 0;
    var width = 290;
    var height = 50;
    var evt = e ? e : event;
    var x = evt.x ? evt.x + document.documentElement.scrollLeft+10 : evt.pageX;
    var y = evt.y ? evt.y + document.documentElement.scrollTop - 40 : evt.pageY;
    if (x+width-document.documentElement.scrollLeft > document.documentElement.clientWidth) { x=x-width; }
    if (y+height-document.documentElement.scrollTop > document.documentElement.clientHeight){ y=y-height; }
    if (snow == 0) {
      if (dir == 2) { moveTo(over,x+offsetx-(width/2),y+offsety); } // Center
      if (dir == 1) { moveTo(over,x+offsetx,y+offsety); } // Right
      if (dir == 0) { moveTo(over,x-offsetx-width,y+offsety); } // Left
      showObject(over);
      snow = 1;
    }
}
function ShowInfoLayerbyEventNew(obj, e) {
    parm = eval(obj);
    over = parm.style;
    var dir = 1;
    var offsetx = 0;
    var offsety = 0;
    var width = 100;
    var height = 50;
    var evt = e ? e : event;
    var x = evt.clientX;
    var y = evt.clientY;
    if (x+width-document.documentElement.scrollLeft > document.documentElement.clientWidth) { x=x-width; }
    if (y+height-document.documentElement.scrollTop > document.documentElement.clientHeight){ y=y-height; }
    if (snow == 0) {
      if (dir == 2) { moveTo(over,x+offsetx-(width/2),y+offsety); } // Center
      if (dir == 1) { moveTo(over,x+offsetx,y+offsety); } // Right
      if (dir == 0) { moveTo(over,x-offsetx-width,y+offsety); } // Left
      showObject(over);
      snow = 1;
    }
}

function ShowInfoLayer(id, self)
{
	var pos = findPos(self);
	var layer = document.getElementById(id);
	var Lwidth = 290;
	var Lheight = 50;
	if (pos[0]+Lwidth-document.documentElement.scrollLeft > document.documentElement.clientWidth) pos[0]=pos[0]-Lwidth;
    if (pos[1]+Lheight-document.documentElement.scrollTop > document.documentElement.clientHeight) pos[1]=pos[1]-Lheight;
        
    layer.style.display = "block";
	layer.style.top = pos[1] + 15 + 'px';
	layer.style.left = pos[0] + 15 + 'px';
}

function ShowInfoLayerPosition(id, self, top, left)
{
	var pos = findPos(self);
	var layer = document.getElementById(id);
	var Lwidth = 290;
	var Lheight = 50;
	if (pos[0]+Lwidth-document.documentElement.scrollLeft > document.documentElement.clientWidth) pos[0]=pos[0]-Lwidth;
    if (pos[1]+Lheight-document.documentElement.scrollTop > document.documentElement.clientHeight) pos[1]=pos[1]-Lheight;
        
    layer.style.display = "block";
	layer.style.top = pos[1] + top + 'px';
	layer.style.left = pos[0] + left + 'px';
}

//레이어처리-----------------------------------------------------
function getScrollOffsetY()
{
    var y;
    if (self.pageYOffset) // all except Explorer
    {
	    y = self.pageYOffset;
    }
    else if (document.documentElement && document.documentElement.scrollTop) // Explorer 6 Strict
    {
	    y = document.documentElement.scrollTop;
    }
    else if (document.body) // all other Explorers
    {
	    y = document.body.scrollTop;
    }
    return y;
}


function ShowLayer(layerID) {
    ShowPosLayer(layerID, 200);
}

function ShowPosLayer(layerID, TopPos) {
    var scrollTop = getScrollOffsetY();
    
	var clientWidth = document.body.clientWidth;
	var clientHeight= document.body.clientHeight;
	
    var layer = $(layerID);
    var layerDimensions = layer.getDimensions();
    
    var left = (clientWidth - layerDimensions.width) / 2;
    var top = scrollTop + TopPos;
    
    moveTo(layer.style, left,  top);
    layer.style.display = "block";
}

function ShowObjLayer(layerID, obj, TopPos, LeftPos) {
    if(TopPos == null) TopPos = 20;
    if(LeftPos == null) TopPos = 80;
    var pos = findPos(obj);  
    var layer = $(layerID);
    var layerDimensions = layer.getDimensions();
    
    var left = (pos[0] - layerDimensions.width/2) + LeftPos;
    var top = pos[1] + TopPos;
	
    moveTo(layer.style, left,  top);
    layer.style.display = "block";
}

function ShowObjLayer2(layerID, obj, TopPos, LeftPos) {
    if(TopPos == null) TopPos = 20;
    if(LeftPos == null) TopPos = 80;
    var pos = findPos2(obj);  
    var layer = $(layerID);
    var layerDimensions = layer.getDimensions();
    
  
    var left = (pos[0] - layerDimensions.width/2) + LeftPos;
    var top = pos[1] + TopPos ;
	
    moveTo(layer.style, left,  top);
    layer.style.display = "block";
}
function ShowObjLayer3(layerID, obj, TopPos) {


    if(TopPos == null) TopPos = 20;
    var clientWidth = document.body.clientWidth;
    
    var pos = findPos(obj);  
    var layer = $(layerID);
    var layerDimensions = layer.getDimensions();
    
  
    var left = (clientWidth - layerDimensions.width) / 4;
    var top = pos[1] + TopPos ;
	
    moveTo(layer.style, left,  top);
    layer.style.display = "block";
    
}
		
function ShowTopLayer(layerID) {
    var scrollTop = getScrollOffsetY();
    
	var clientWidth = document.body.clientWidth;
	var clientHeight= document.body.clientHeight;
	
    var layer = $(layerID);
    var layerDimensions = layer.getDimensions();
    
    var left = (clientWidth - layerDimensions.width) / 2;
    var top = scrollTop + 140;
    
    moveTo(layer.style, left,  top);
    layer.style.display = "block";
    layer.style.zIndex = 999;
}   

function CenterLayer(layerID){

    var yp=document.documentElement.scrollTop;
    var xp=document.documentElement.scrollLeft;

    var t = document.documentElement;
	if(t.clientHeight<12) t = document.body;

	var width = t.clientWidth;
	var height= t.clientHeight;
    var objId = document.getElementById(layerID);
    
    moveTo(objId.style , (width- objId.offsetWidth)/2 ,  (height- objId.offsetHeight)/2 );
    objId.style.display = "block";
}


function HideLayer(layerID){
    var objId = document.getElementById(layerID);
    if (objId) objId.style.display = "none";
}

function HideLayerHTML(layerID){
    var objId = document.getElementById(layerID);
    if (objId) {
        objId.innerHTML = "";
        objId.style.display = "none";
    }
}


/*이메일주소 유효성 체크*/
function CheckEmailValid(email) 
{
	var invalidChars = "\"|&;<>!*\'\\"   ;
	for (var i = 0; i < invalidChars.length; i++) 
	{
		if (email.indexOf(invalidChars.charAt ) != -1) 
		  return false;
	}
	
	if (email.indexOf("@")==-1)
		return false;

	if (email.indexOf(" ") != -1)
		return false;

	if (window.RegExp) 
	{
		var reg1str = "(@.*@)|(\\.\\.)|(@\\.)|(\\.@)|(^\\.)";
		var reg2str = "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$";
		var reg1 = new RegExp (reg1str);
		var reg2 = new RegExp (reg2str);

		if (reg1.test(email) || !reg2.test(email))			  
			return false;

	}
	return true;
} 

//입력글수 제한
function updateChar(FieldName, contentName, textlimitName){
		var strCount = 0;
		var tempStr, tempStr2;
		var frm = document.getElementById(contentName);
		var size = frm.value.length;
		for(i = 0;i < size;i++)
		{
			tempStr = frm.value.charAt(i);
			if(escape(tempStr).length > 4) strCount += 2;
				else strCount += 1 ;
		}
		if (strCount > FieldName){
			alert("최대 " + FieldName + "byte이므로 초과된 글자수는 자동으로 삭제됩니다.");
			strCount = 0;
			tempStr2 = "";
			for(i = 0; i < size; i++)
			{
				tempStr = frm.value.charAt(i);
				if(escape(tempStr).length > 4) strCount += 2;
				else strCount += 1 ;
				if (strCount > FieldName)
				{
					if(escape(tempStr).length > 4) strCount -= 2;
					else strCount -= 1 ;
					break;
				}
				else tempStr2 += tempStr;
			}
			frm.value = tempStr2;
		}

		if(textlimitName!='')
		    document.getElementById(textlimitName).innerHTML = strCount;
}

/* PNG 이미지 스크립트 */
function setPng24(obj)
{
    obj.width=obj.height=1;
    obj.className=obj.className.replace(/\bpng24\b/i,'');	
    var ip=/\.png/i, al="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='";
    var es=obj.style, elc=obj.currentStyle, elb=elc.backgroundImage;
    
    if(obj.src&&obj.src.match(ip)&&!es.filter)
    {
	    es.filter=al+obj.src+"',sizingMethod='image')";
	    obj.src = "http://openimage.interpark.com/tourpark/tour/etc/error/clear.gif";
    }
    else if(elb.match(ip))
	{
		var path=elb.split('"'),rep=(elc.backgroundRepeat=='no-repeat')?'crop':'scale',elkids=obj.getElementsByTagName('*'),j=elkids.length;
		es.filter=al+path[1]+"',sizingMethod='"+rep+"')";
		es.height=obj.clientHeight+'px';
		es.backgroundImage='none';
		if(j!=0)
		{
			if(elc.position!="absolute")es.position='static';
			while(j-->0)
				if(!elkids[j].style.position)elkids[j].style.position="relative";
		}
	}
    
    return '';
}


// 팝업 리사이즈
// <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 이 있을 경우 버젼.
// 팝업창 열 때 변경되어야 할 크기보다 작게 열어야 함.
function resizePop_doctype()
{
	// 추후 Explorer 가 아닌 버젼 기능이 필요할 경우
    if (self.pageYOffset) // all except Explorer
    {
		
    }
    else	// Explorer
    {
		var de = document.documentElement;
		
		if (window.navigator.userAgent.indexOf("MSIE 6") != -1 ) // Explorer 6
		{
			window.resizeBy(de.scrollWidth - de.offsetWidth + 4, de.scrollHeight - de.offsetHeight + 4);
		}
		else if (window.navigator.userAgent.indexOf("MSIE 7") != -1 ) // Explorer 7
		{
			window.resizeBy(de.scrollWidth - de.offsetWidth, de.scrollHeight - de.offsetHeight);
		}
		else{
			window.resizeTo('600','600');
		}
    }
}

// 팝업 리사이즈
// <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 이 없을 경우 버젼.
// 팝업창 열 때 변경되어야 할 크기보다 작게 열어야 함.
function resizePop()
{
	// 추후 Explorer 가 아닌 버젼 기능이 필요할 경우
    if (self.pageYOffset) // all except Explorer
    {
    }
    else	// Explorer
    {
		var de = document.body;
		
		if (window.navigator.userAgent.indexOf("MSIE 6") != -1 ) // Explorer 6
		{
			window.resizeBy(de.scrollWidth - de.offsetWidth + 4, de.scrollHeight - de.offsetHeight + 4);
		}
		else if (window.navigator.userAgent.indexOf("MSIE 7") != -1 ) // Explorer 7
		{
			window.resizeBy(de.scrollWidth - de.offsetWidth + 4, de.scrollHeight - de.offsetHeight + 4);
		}
		else 
		{
		    window.resizeBy(de.scrollWidth - de.offsetWidth, de.scrollHeight - de.offsetHeight);
		}
    }
}

function PopupResize(w, h)
{
    if (window.navigator.userAgent.indexOf("MSIE 7") != -1 || window.navigator.userAgent.indexOf("MSIE 8") != -1) // Explorer 7 | 8
    {
        h = h + 22;
    } 

    window.resizeTo( w, h );
}

/*fck------------------------------------------------------------*/
function getFckXHTMLContents (){
	    var oEditor = FCKeditorAPI.GetInstance('fckEditor_FCKeditor1') ;
        return oEditor.GetXHTML();
}

function getFckHTMLContents (){
	    var oEditor = FCKeditorAPI.GetInstance('fckEditor_FCKeditor1') ;
        return oEditor.GetHTML();
}

function getFckTextContents (){
	    var div = document.createElement("DIV");
        div.innerHTML = getFckHTMLContents ();
        return  div.innerText;
}


function setFckHTMLContents (htmlvalue){
	    var oEditor = FCKeditorAPI.GetInstance('fckEditor_FCKeditor1') ;
        oEditor.SetHTML(htmlvalue);
}


function fckImageUrlAttache(imgURL , position, id){
    //var oEditor = FCKeditorAPI.GetInstance('fckEditor_FCKeditor1') ;
    var oEditor = FCKeditorAPI.GetInstance(id) ;
    
    if(!oEditor.HasFocus) {
        oEditor.Focus;
    }
    
    var addHtml = "";
     
    if(position == 0 ) {
        addHtml = "<img src='"+imgURL+ "' border='0'>"
    }
    
    if(position == 1 ) {
        addHtml = "<img src='"+imgURL+ "' border='0' align='bottom' >"
    }
    
    if(position == 2 ) {
        addHtml = "<img src='"+imgURL+ "' border='0' align='left' >"
    }
    
    if(position == 3 ) {
        addHtml = "<img src='"+imgURL+ "' border='0' align='right' >"
    }
    
    oEditor.InsertHtml(addHtml);  
}


function fckImageUrlAttacheAsSize(imgURL , position, id, imgWidth, imgHeight){
 

    
    var oEditor = FCKeditorAPI.GetInstance(id) ;
    if(!oEditor.HasFocus) {
        oEditor.Focus;
    }
    var addHtml = "";
	var max_width = 620;   // 이미지의 최대 크기     
    

    if ( imgWidth > max_width ) 
    {  
		imgHeight = imgHeight/(imgWidth / max_width);
		imgWidth = max_width;
    }     

    
    if(position == 0 ) {
        addHtml = "<img src='"+imgURL+ "' border='0' width='" + imgWidth + "' height='" + imgHeight + "'>"
    }
    
    if(position == 1 ) {
        addHtml = "<img src='"+imgURL+ "' border='0' align='bottom' width='" + imgWidth + "' height='" + imgHeight + "'>"
    }
    
    if(position == 2 ) {
        addHtml = "<img src='"+imgURL+ "' border='0' align='left' width='" + imgWidth + "' height='" + imgHeight + "'>"
    }
    
    if(position == 3 ) {
        addHtml = "<img src='"+imgURL+ "' border='0' align='right' width='" + imgWidth + "' height='" + imgHeight + "'>"
    }
    
    oEditor.InsertHtml(addHtml);   
}

function EditSetImage(response) 
{
    if (response.substr(0, 2) == 'OK') {
        var files = null;
        try {
            files = eval("[" + response.substr(3) + "]"); //substr(3):반환받은 문자에서 필요없는 문자("OK,")를 잘라낸다.
        }
        catch (e) {
            alert(e.message);
        }

        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                fckImageUrlAttache(files[i].storageUrl, 0, files[i].inputObjId);
            }
        }
    }        
}

function InputSetImage(response)
{
    if (response.substr(0, 2) == 'OK') {
        var files = null;
        try {
            files = eval("[" + response.substr(3) + "]"); //substr(3):반환받은 문자에서 필요없는 문자("OK,")를 잘라낸다.
        }
        catch (e) {
            alert(e.message);
        }

        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                document.getElementById(files[i].inputObjId).value = files[i].storageUrl;
            }
        }
    }       
}

function OpenTopLocation(reUrl){
    top.location.href = reUrl;
}

function imageUploadPopup(value1){
    try {
        if(FCKeditorAPI.GetInstance(value1).EditorWindow.getSelection().rangeCount == 0) {
            alert("사진을 삽입할 위치를 선택해주세요.");
            return;
        }
    } catch(e) { }
    
    var url = 'http://tour.interpark.com/global/tbsimage/tdimage.html?c=EditSetImage' + '&type=BBS&filelen=20&inputObjId=' + value1;
    var width = 800;
    var height = 620;
    var features = 'width=' + width + ',height=' + height + 'toolbar=no,menubar=no,resizable=yes,scrollbars=no,scrolling=no,location=no';
    var spotImageInsertWin = window.open(url, "", features);
    spotImageInsertWin.focus();
            
    //window.open('http://tour.interpark.com/global/popup/imageUpload.aspx?id=' + value1, 'Uploader', 'resizable=no, scrollbars=no, status=no, width=436, height=330');
}

function imageUploadPopup2(value1){
    try {
        if(FCKeditorAPI.GetInstance(value1).EditorWindow.getSelection().rangeCount == 0) {
            alert("사진을 삽입할 위치를 선택해주세요.");
            return;
        }
    } catch(e) { }
    
    var url = 'http://tour.interpark.com/global/tbsimage/tdimage.html?c=EditSetImage' + '&type=HousingGoodsBBS&filelen=20&inputObjId=' + value1;
    var width = 800;
    var height = 620;
    var features = 'width=' + width + ',height=' + height + 'toolbar=no,menubar=no,resizable=yes,scrollbars=no,scrolling=no,location=no';
    var spotImageInsertWin = window.open(url, "", features);
    spotImageInsertWin.focus();
    
    //window.open('http://tour.interpark.com/global/popup/imageUpload.aspx?id=' + value1 + '&type=HousingGoodsBBS', 'Uploader', 'resizable=no, scrollbars=no, status=no, width=436, height=330');
}

//사진게시판 - 리스트 대표이미지 등록 이미지업로드 팝업창
function PhotoBBSListImgUploadPopup(value1){
    
    var url = 'http://tour.interpark.com/global/tbsimage/tdimage.html?c=InputSetImage' + '&type=photoBBS&filelen=1&inputObjId=' + value1;
    var width = 800;
    var height = 620;
    var features = 'width=' + width + ',height=' + height + 'toolbar=no,menubar=no,resizable=yes,scrollbars=no,scrolling=no,location=no';
    var spotImageInsertWin = window.open(url, "", features);
    spotImageInsertWin.focus();
    
    //window.open('http://tour.interpark.com/global/popup/imageUpload.aspx?id=' + value1 + '&type=photoBBS', 'Uploader', 'resizable=no, scrollbars=no, status=no, width=436, height=330');
}


/*
	하나의 항목을 기록하는 함수 ( 오늘본 항목 )
	세가지 항목을 ,, 로 구분해서 todaysView1, todaysView2... 식의 이름으로 쿠키에 저장
	ex ) todaysView1 이 이미 쿠키에 존재하면 숫자만 하나 증가시켜 todaysView2로 저장
	
	categoryGubun = 카테고리 구분  (T:여행, H:숙박, M:모텔, A:항공권)
	linkParam = 파라미터
	imageUrl  = 이미지 주소
	title	  = 제목
	-----------------------------------------------------------------------------------
	2007.10.31 leemoge 수정
*/
function setData( categoryGubun, imageUrl, title ) {

    /*
    메인 개편 후 퀵서치 오늘 본 상품 노출 안함    
	var sameURL = 0;
	var newCookie = "";
	var newValue  = "";
	var cookieName = "todaysView";
	var arrcookieValue = new Array();
	var i = 0;
	var j = 0;
	var linkParam = "";
	var sTempUrl= "";
	var docUrl = document.URL;
	
	sTempUrl = docUrl.split("?");
	linkParam = sTempUrl[1];
	
	
	if ( categoryGubun == "A" ) 
	{
		title = "할인항공권-" + title;
		if ( linkParam.indexOf("arr_text=") < 0 )
			sameURL = 1;
	}
	
	// 숙박상품 GoodsCode로만 중복구분
	if ( categoryGubun == "H" && linkParam.indexOf("&") >= 0 ) 
	{
		linkParam = linkParam.substring(0,linkParam.indexOf("&"));
	}
	
	if ( categoryGubun == "L" && title.length > 20)
	{
	    title = title.substring(0,20);
	}
	else if ( categoryGubun != "L" && title.length > 12)
	{
		title = title.substring(0,12);
	}
	
	newValue = categoryGubun + "|" + linkParam + "|" + imageUrl + "|" + title;

	// 현재까지의 오늘본항목 쿠키
	var tmp = getCookie( cookieName );
	
	if (tmp != null && tmp != "")   //if ( isNotEmpty( tmp ) )
	{
		arrcookieValue = tmp.split("^");
		
		if ( arrcookieValue.length >= 10 ) 
			j = 1;

		if ( sameURL != 1 )
		{
			for ( i = j; i < arrcookieValue.length; i++ )
			{
				if (arrcookieValue[i] != newValue)
					newCookie += arrcookieValue[i] + "^";
			} 
			newCookie += newValue;
		}
	}
	else 
	{
		if ( sameURL != 1 )
			newCookie = newValue; 
	}
	
	setCookie( cookieName, newCookie, 1 );
	*/
}

/* rolling */
AddWindowEvent(rollImg);

var rollImgBlanks;
var rollImgAlt;
function roll(rollNum){
	if (imgs){
		var obj = imgs[rollNum];
		var link = links[rollNum];
		var rollImg = document.getElementById('rollImg');
		var Src = rollImg.src.split(/\//);
		var fileName = Src[Src.length-1]
		rollImg.src = rollImg.src.replace(fileName, obj);
		rollImg.parentNode.href = links[rollNum];
		
		if (rollImgBlanks != null) {
		    rollImg.parentNode.target = rollImgBlanks[rollNum];
        }
        if (rollImgAlt != null){
            rollImg.alt = rollImgAlt[rollNum];
        }
		    
		var rollBtn = document.getElementById('rollBtn');
		if (rollBtn) {
		    rollBtn = rollBtn.getElementsByTagName('img');
		    //alert(rollNum);
		    for (var i=0; i < rollBtn.length; i++){
			    if (i == rollNum) rollBtn[i].src = rollBtn[i].src.replace("Off.gif", "On.gif");
			    else rollBtn[i].src = rollBtn[i].src.replace("On.gif", "Off.gif");
		    }
		}
	}
}

var stats = false;
var rollImgcount = 0;
function rollImg(){
	if(document.getElementById('rollImg')){
		var rollImg = document.getElementById('rollImg');
		rollImg.onmouseover = function (){
			stats = true;
		}
		rollImg.onmouseout = function (){
			stats = false;
		}
		
		rollInterval = (rollInterval ? rollInterval : '2500');
		setInterval(function(){
			if (!stats){
				rollImgcount ++;
				if (rollImgcount == imgs.length){
					rollImgcount = 0;
				}
				roll(rollImgcount);
			}
		}, rollInterval);
	}
}


/* 이벤트 롤링 신규버전 */
var event_stats = false;
var event_rollImgcount = 0;
var event_imgAlt;
function Event_rollImg(){
	if(document.getElementById('event_rollImg')){
		var rollImg = document.getElementById('event_rollImg');
		var rollBtn = document.getElementById('event_rollBtn');
		rollImg.onmouseover = function (){
			event_stats = true;
		}
		rollImg.onmouseout = function (){
			event_stats = false;
		}
		rollBtn.onmouseover = function (){
			event_stats = true;
		}
		rollBtn.onmouseout = function (){
			event_stats = false;
		}
		
		event_rollInterval = (event_rollInterval ? event_rollInterval : '2500');
		setInterval(function(){
			if (!event_stats){
				event_rollImgcount ++;
				if (event_rollImgcount == event_imgs.length){
					event_rollImgcount = 0;
				}
				event_roll(event_rollImgcount);
			}
		}, event_rollInterval);
	}
}

function event_roll(rollNum){
	if (event_imgs){
		var obj = event_imgs[rollNum];
		var link = event_links[rollNum];
		var rollImg = document.getElementById('event_rollImg');
		var Src = rollImg.src.split(/\//);
		var fileName = Src[Src.length-1]
		rollImg.src = rollImg.src.replace(fileName, obj);
		rollImg.parentNode.href = event_links[rollNum];
		
		if (event_rollImgBlanks != null) {
		    rollImg.parentNode.target = event_rollImgBlanks[rollNum];
        }
        if( event_imgAlt != null){
            
            rollImg.alt = event_imgAlt[rollNum];
        }
        
        
        var rollBtn = document.getElementById('event_rollBtn');
		if (rollBtn) {
		    rollBtn.li = rollBtn.getElementsByTagName('li');
		    for (var i=0; i < rollBtn.li.length; i++){
		        rollBtn.li[i].className = rollBtn.li[i].className.replace('on','');
		        if (i == rollNum) {
		            rollBtn.li[i].className = rollBtn.li[i].className + ' on';
		        }
		    }
        }
        
        //카테고리서브~
        var rollTitle = document.getElementById('event_rollTitle_' + rollNum);
        if (rollTitle) {
            for (var i = 0; i < event_imgs.length; i++) {
                document.getElementById('event_rollTitle_' + i).style.display = 'none';
            }
            rollTitle.style.display = '';
        }
	}
}


/* Start 카테고리 메인 테마별 영역 rolling */
var tabStats = false;
function mainTabMn(tabID, stopRollTabID, rollTabInterval, rollTabCnt)
{
	if(document.getElementById(tabID))
	{
		var mainTabMn = document.getElementById(stopRollTabID);
		
		mainTabMn.onmouseover = function (){
			tabStats = true;
		}
		mainTabMn.onmouseout = function (){
			tabStats = false;
		}
		var count = 0;
		rollTabInterval = (rollTabInterval ? rollTabInterval : '3500');
		
		setInterval(function(){
			if (!tabStats){
				count ++;
				if (count == rollTabCnt){
					count = 0;
				}
				mainTab(count);
			}
		}, rollTabInterval);
	}
}

/* 탭처리------------------------------- */
function detailTab(obj){
    try{
	var detailTab = document.getElementById('detailTab');

	detailTab.a = detailTab.getElementsByTagName('a');
	for (var i=0; detailTab.a.length > i; i++){
			detailTab.a[i].className='';
	}
	obj.className = 'on';
	}
	catch (e){
    }
}

function selectDetailTab(tabObjectID){
 try{
    var obj = document.getElementById(tabObjectID);
	detailTab(obj);
	obj.onclick();
	if(obj.getAttribute('href') && obj.getAttribute('target')) document.getElementById(obj.getAttribute('target')).src = obj.getAttribute('href');
	obj.scrollIntoView();
	}
	catch (e){
    }
}

function viewDetailTab(tabObjectID){
 try{
    var obj = document.getElementById(tabObjectID);
	detailTab(obj);
	/////obj.click();
	obj.scrollIntoView();
	}
	catch (e){
    }
}   


function searchTab(obj){

	var condition = document.getElementById('condition');
	var startDate = document.getElementById('startDate');
    
    if(obj == 'startDate')
    {
        document.getElementById('MaxValue').value = thisMovie("slider243").getMaxValue();
        document.getElementById('MinValue').value = thisMovie("slider243").getMinValue();
        
    }

	condition.style.display = 'none';
	startDate.style.display = 'none';
	document.getElementById(obj).style.display = 'block';

	document.getElementById('conditionBtn').className = '';
	document.getElementById('startDateBtn').className = '';
	document.getElementById(obj+ "Btn").className = 'on';
    if(obj == 'condition')
    {
        try
        {
            tabValue();
        }
        catch(e)
        {
            setTimeout(tabValue,150);
        }
    }
}


function mainTab(tabNum)
{
	var mainTabMn = document.getElementById('mainTabMn');
	for (var i=0; i < mainTabMn.getElementsByTagName('a').length; i++)
	{
		if (i==tabNum)
		{
			mainTabMn.getElementsByTagName('a')[i].className = 'on';
			document.getElementById('themeList' + i).style.display = 'block';
		} 
		else 
		{
			mainTabMn.getElementsByTagName('a')[i].className = '';
			document.getElementById('themeList' + i).style.display = 'none';
		}
	}
}

/* 제품 상세 시간표 - display control */
function timeTable(obj , baseGoodsCD ){
	var time = obj.parentNode.nextSibling;


	if( obj.parentNode.nextSibling.innerHTML == "" ){ //데이터 없으면 로딩

	    obj.parentNode.nextSibling.innerHTML =  getTimeTableByPriceHtml(baseGoodsCD);
	}

	if(time.style.display != 'block') {
		time.style.display = 'block';
		obj.childNodes[0].src = obj.childNodes[0].src.replace("BB", "TB");
	}
	else {
		time.style.display = 'none';
		obj.childNodes[0].src = obj.childNodes[0].src.replace("TB", "BB");
	}

}


/* 묶음 상품의 가격대별 상품리스트 HTML */
function getTimeTableByPriceHtml(baseGoodsCD){
        return virtualGET('/global/ajax/goodsByPrice.aspx?baseGoodsCD='+ baseGoodsCD);
}

/* 상품 내역 열고 닫기 - display control */
function productView(productId, thisImg  ,baseGoodsCD ){

	var productId = document.getElementById(productId)

	if(productId.style.display != 'block') {

	    var navLen = productId.childNodes.length;
	    if (navLen == 0) { //데이터 없으면 로딩
	        productId.innerHTML =  getPakProductHtml(baseGoodsCD);
	    }
		productId.style.display = 'block';
		thisImg.childNodes[0].src = thisImg.childNodes[0].src.replace("Open", "Close");
		thisImg.childNodes[0].alt = "상품닫기"
	} else {
		productId.style.display = 'none';
		thisImg.childNodes[0].src = thisImg.childNodes[0].src.replace("Close", "Open");
		thisImg.childNodes[0].alt = "상품열기"
	}
}

/* 2D,3D '상품보기'버튼 상품리스트 보기 */
function productViewForPakage(productId, thisImg, baseGoodsCD, cate){

	var productId = document.getElementById(productId)

	if(productId.style.display != 'block') {

	    var navLen = productId.childNodes.length;
	    if (navLen == 0) { //데이터 없으면 로딩
	        productId.innerHTML =  getGoodsViewByPriceHTML(baseGoodsCD, cate);
	    }
		productId.style.display = 'block';
		thisImg.childNodes[0].src = thisImg.childNodes[0].src.replace("Open", "Close");
		thisImg.childNodes[0].alt = "상품닫기"
	} else {
		productId.style.display = 'none';
		thisImg.childNodes[0].src = thisImg.childNodes[0].src.replace("Close", "Open");
		thisImg.childNodes[0].alt = "상품열기"
	}
}

function productViewForResort( baseGoodsCD ){

	var productId = document.getElementById('productDiv');
	productId.innerHTML =  getPakProductHtml(baseGoodsCD);

}


/* 상품상세 출발일별 상품리스트 보기 */
/* 호출페이지 : goods/detail.aspx	 */
function goodsViewByDeparture(baseGoodsCD , departureDate, cate){
	var productId = document.getElementById('productViewBydeparture') ;

	var imgObjByPrice = document.getElementById('imgObjByPrice') ;
	var imgObjByDeparture = document.getElementById('imgObjByDeparture') ;
	
	imgObjByPrice.src = imgObjByPrice.src.replace("On", "Off");
	imgObjByDeparture.src = imgObjByDeparture.src.replace("Off", "On");

	productId.innerHTML =  getGoodsViewByDepartureHTML(baseGoodsCD, departureDate, cate);

}


/* 상품상세 가격대별 상품리스트 보기 */
/* 호출페이지 : goods/detail.aspx	 */
function goodsViewByPrice(baseGoodsCD, cate){
	var productId = document.getElementById('productViewBydeparture') ;

	var imgObjByPrice = document.getElementById('imgObjByPrice') ;
	var imgObjByDeparture = document.getElementById('imgObjByDeparture') ;
	
	imgObjByPrice.src = imgObjByPrice.src.replace("Off", "On");
	imgObjByDeparture.src =  imgObjByDeparture.src.replace("On", "Off");

	productId.innerHTML =  getGoodsViewByPriceHTML(baseGoodsCD, cate);
}


/* 묶음 상품의 묶인 상품리스트 HTML */
function getPakProductHtml(baseGoodsCD){
        return virtualGET('/global/ajax/packageByPrice.aspx?baseGoodsCD='+ baseGoodsCD);
}

/* 상품 상세  가격대별 상품리스트 HTML */
function getGoodsViewByPriceHTML(baseGoodsCD, cate){
        return virtualGET('/global/ajax/goodsByPriceWithTitle.aspx?baseGoodsCD='+ baseGoodsCD + '&cate=' + cate);
}

/* 상품 상세  가격대별 상품리스트 HTML - Iframe용 */
function getGoodsViewIframeByPriceHTML(baseGoodsCD, cate){
        return virtualGET('/global/ajax/goodsByPriceWithTitle.aspx?baseGoodsCD='+ baseGoodsCD + '&cate=' + cate + '&type=iframe');
}

/* 상품 상세  출발일별 상품리스트 HTML */
function getGoodsViewByDepartureHTML(baseGoodsCD, departureDate, cate){
        return virtualGET('/global/ajax/goodsByDeparture.aspx?baseGoodsCD=' + baseGoodsCD + '&DepartureDT=' + departureDate + '&cate=' + cate);
}

/* 제품 상세 이미지 보기 */
function imgChange(obj){
	var li =document.getElementById('thumb').getElementsByTagName('li');
	for (i=0; li.length > i; i++){
		li[i].getElementsByTagName('a')[0].className = '';
	}
	obj.className = "over";
	document.getElementById('photoView').src = obj.childNodes[0].src;
}

function selectImage(imgURL , imgTxt){
    var objImg = document.getElementById('PhotoViewDetailImg');
    var objText = document.getElementById('PhotoViewDetailText');

    objImg.src= imgURL;
    objText.innerHTML= imgTxt;
}


/* 상품상세 ajax 호출 스크립트-----------------------------------------------------------------------------*/

function ShowRecommMailForm(GoodsCD){
    var objId = document.getElementById('recommMailForm');
    objId.innerHTML = virtualGET('/global/ajax/recommMailForm.aspx?GoodsCD=' + GoodsCD);
    ShowLayer('recommMailForm');
}

function resetContents(objectID){
    var objId = document.getElementById(objectID);
    objId.value= "";
}

function ShowQnAForm(baseGoodsCD){
    if (getLoginYN() != "Y") {
        goLogin();    
        return false;
    }
    var objId = document.getElementById('writeQnaForm');
    objId.innerHTML = virtualGET('/global/ajax/writeQnaForm.aspx?baseGoodsCD=' + baseGoodsCD);
    ShowLayer('writeQnaForm');
}

function ShowModeQnAForm(baseGoodsCD){
 
    if (baseGoodsCD.length < 8) {
        alert('상품 정보가 없습니다.');
        return;
    }
    
    if (getLoginYN() != "Y") {
        parent.goLogin();    
        return false;
    }
    
    
    var str = '<iframe width="595" height="663" frameborder="0" scrolling="no" src="http://tour.interpark.com/global/iframe/detail/qnaWrite.aspx?baseGoodsCD=' + baseGoodsCD + '"></iframe>';
    
    if (document.getElementById('writeModeQnaForm'))
    {
        document.getElementById('writeModeQnaForm').innerHTML = str;
    }
    else
    {   
        var obj = document.createElement("div");
        obj.setAttribute("id","writeModeQnaForm");
        obj.style.position = "absolute";
        //obj.style.display = "none";
        obj.style.zIndex = "100";
        //obj.style.width = "585";
        obj.innerHTML = str;
        document.body.appendChild(obj);
    }
    
    ShowLayer('writeModeQnaForm');
}

function ShowQnAFormForModify(baseGoodsCD, replySeq){

    if (getLoginYN() != "Y") {
        goLogin();    
        return false;
    }
    
    var objId = document.getElementById('writeQnaForm');
    objId.innerHTML = virtualGET('/global/ajax/writeQnaForm.aspx?baseGoodsCD=' + baseGoodsCD + '&ReplySeq=' + replySeq);
    ShowLayer('writeQnaForm');
}


function ShowModeQnAFormForModify(baseGoodsCD, replySeq){
    
    if (baseGoodsCD.length < 8 || replySeq.length <= 0) {
        alert('해당 글 정보가 없습니다.');
        return;
    }
    
    if (getLoginYN() != "Y") {
        goLogin();    
        return false;
    }
    
    var str = '<iframe width="595" height="663" frameborder="0" scrolling="no" src="http://tour.interpark.com/global/iframe/detail/qnaWrite.aspx?baseGoodsCD=' + baseGoodsCD + '&ReplySeq=' + replySeq +'"></iframe>';
    
    if (document.getElementById('writeModeQnaForm'))
    {
        document.getElementById('writeModeQnaForm').innerHTML = str;
    }
    else
    {   
        var obj = document.createElement("div");
        obj.setAttribute("id","writeModeQnaForm");
        obj.style.position = "absolute";
        //obj.style.display = "none";
        obj.style.zIndex = "100";
        //obj.style.width = "585";
        obj.innerHTML = str;
        document.body.appendChild(obj);
    }

    ShowLayer('writeModeQnaForm');
    
}

function ShowMovieViewer(baseGoodsCD){
    var objId = document.getElementById('movieViewer');
    objId.innerHTML = virtualGET('/global/ajax/resortMovieViewer.aspx?baseGoodsCD=' + baseGoodsCD );
    ShowLayer('movieViewer');
}

function ShowPhotoViewer(baseGoodsCD){
    var objId = document.getElementById('photoViewer');
    objId.innerHTML = virtualGET('/global/ajax/photoViewer.aspx?baseGoodsCD=' + baseGoodsCD);
    ShowLayer('photoViewer');
}

function ShowPhotoViewerForMode(tourIDX){
    var objId = document.getElementById('photoViewer');
    objId.innerHTML = virtualGET('/global/ajax/photoViewerForMode.aspx?tourIDX=' + tourIDX);
    ShowLayer('photoViewer');
}

function ShowPrintForm(GoodsCD){
    var objId = document.getElementById('printForm');
    objId.innerHTML = virtualGET('/global/ajax/printForm.aspx?GoodsCD='+ GoodsCD);
    ShowLayer('printForm');
}

function ShowPrintChkForm(GoodsCD,BaseGoodsCD){
    var objId = document.getElementById('printForm');
    objId.innerHTML = virtualGET('/global/ajax/printChkForm.aspx?GoodsCD='+ GoodsCD + '&BaseGoodsCD='+ BaseGoodsCD);
    ShowLayer('printForm');
}

function ShowPrintFormForDetail(GoodsCD,GoodsTypeCD){
    var objId = document.getElementById('printForm');
    objId.innerHTML = virtualGET('/global/ajax/printForm.aspx?GoodsCD='+ GoodsCD + '&GoodsTypeCD=' + GoodsTypeCD);
    ShowLayer('printForm');
}

function ShowProductCommentFormForModify(ReservationNo , EvalNO){
    if (getLoginYN() != "Y") {
        goLogin();    
        return false;
    }
    
    var objId = document.getElementById('modifyProductComment');
    objId.innerHTML = virtualGET('/global/ajax/modifyProductForm.aspx?ReservationNo=' + ReservationNo + '&EvalNO=' + EvalNO);
    ShowLayer('modifyProductComment');
}

function ShowTogetherWriteForm(baseGoodsCD, pnum){
    
    if (getLoginYN() != "Y") {
        parent.goLogin();
        return false;
    }
    
    var str = '<iframe width="656" height="689" id="togetherWriteIframe" frameborder="0" scrolling="no" src="http://tour.interpark.com/global/iframe/detail/togetherWrite.aspx?baseGoodsCD=' + baseGoodsCD + '&pnum=' + pnum + '"></iframe>';
    
    if (document.getElementById('writeModeQnaForm'))
    {
        document.getElementById('writeModeQnaForm').innerHTML = str;
    }
    else
    {   
        var obj = document.createElement("div");
        obj.setAttribute("id","writeModeQnaForm");
        obj.style.position = "absolute";
        //obj.style.display = "none";
        obj.style.zIndex = "100";
        //obj.style.width = "626";
        //obj.style.height = "685";
        obj.innerHTML = str;
        document.body.appendChild(obj);
    }

    ShowLayer('writeModeQnaForm');
}


/* ------------------------------------------------------------------------------------------------- */

function ShowAirReserve(){
    window.open('http://air.interpark.com/flex/ReservationApplication.html?mbn=tour&mln=air_onestop', 'temp', 'resizable=yes, scrollbars=' + GetAirOnestopScrollYN() + ', width=' + GetScreenWidth(1000) + ', height=' + GetScreenHeight(700) + ', status=no');
}

function ShowAirReserveWithParam(param){
    window.open('http://air.interpark.com/flex/ReservationApplication.html?' + param, 'onestop_oversea', 'resizable=yes, scrollbars=' + GetAirOnestopScrollYN() + ', width=' + GetScreenWidth(1000) + ', height=' + GetScreenHeight(700)+ ', status=no'); 
}

function ShowDomAirReserveWithParam(param){
    window.open('http://air.interpark.com/flex/DOM.html?' + param, 'onestop_domestic', 'resizable=yes, scrollbars=' + GetAirOnestopScrollYN() + ', width=' + GetScreenWidth(1000) + ', height=' + GetScreenHeight(700)+ ', status=no'); 
}

function OpenAirReserve(){
    var win = window.open('http://air.interpark.com/flex/ReservationApplication.html?mbn=tour&mln=quick_m_01','air_direct','width=' + GetScreenWidth(1000) + ',height=' + GetScreenHeight(700) + ',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=0, top=0');	
    if (win) {
	    win.focus();
	} else {
	    //alert("팝업이 차단되었습니다. 팝업차단을 해제해 주세요.");
	    document.location.href = "http://air.interpark.com/lts/index.jsp";
	}
}

function FaqViewCnyAdd(seq)
{
    virtualGET('/global/ajax/Event_Process.aspx?seq='+ seq + '&FLAG=FaqView');
}

//숙박 약도 이미지 팝업
function goPrint(GoodsCode)
{
    var popupUrl;
    popupUrl = "/Housing/Goods/Popup/Map_Print.asp?GoodsCode=" + GoodsCode;
    window.open(popupUrl,"_Popup","width=640,height=730,scrollbars=yes,directories=no,location=no,menubar=no,resizable=no,status=no,toolbar=no");
}


//숙박 약도 이미지 팝업 NEW
function goPrint(GoodsCode, Flag, nX, nY)
{
    var popupUrl;
    popupUrl = "/Housing/Goods/Popup/Map_Print.asp?GoodsCode=" + GoodsCode + "&flag=" + Flag + "&nX=" + nX + "&nY=" + nY + "&nZoom=3";
    window.open(popupUrl,"_Popup","width=640,height=730,scrollbars=yes,directories=no,location=no,menubar=no,resizable=no,status=no,toolbar=no");
}

//숙박 빠른 Quick 예약 팝업창
function QuickReserve()
{
	var popupUrl;
	popupUrl = "/housing/Quick/Quick.asp"
	window.open(popupUrl,"_Popup","width=670,height=520,scrollbars=auto,directories=no,location=no,menubar=no,resizable=no,status=no,toolbar=no");
}

/* 해외호텔 원스탑 */
function ShowOneStopOHotel()
{
    window.open('http://hotel.interpark.com/Onestop/Main.aspx', '_blank', 'scrollbars=no, status=no, width=1000, height=700');
}
/* 해외호텔 원스탑 - 파라미터 검색 */
function ShowOneStopOHotelBySearch(param)
{
    if(param.indexOf("?") <= -1) {
        param = '?' + param;
    }
    window.open('http://hotel.interpark.com/Onestop/newMain.aspx' + param, '_blank', 'scrollbars=no, status=no, width=1000, height=700');
}
function ShowHotelDetailBySearch(param)
{
    if(param.indexOf("?") <= -1) {
        param = '?' + param;
    }
     window.open('http://hotel.interpark.com/Category/D3.aspx' + param, '_blank');
}

/* 할인쿠폰 쿠폰등록 팝업창 :: 항공/여행/해외호텔/국내숙박 */
function RegistCouponPopup(System)
{
    window.open('http://tour.interpark.com/global/popup/registCoupon.aspx?System=' + System, '_Regist', 'resizable=no, scrollbars=no, status=no, width=512, height=321');
}

/*할인쿠폰 리스트 - 상세페이지  */
function ShowPkgCouponList(SupplierCD, BaseGoodsCD)
{
    ShowCouponList('008002', 'A', SupplierCD, BaseGoodsCD, '', '', '', '');
}

function ShowCouponList(ApplSystemCD, GoodsTypeCD, SupplierCD, BaseGoodsCD, GoodsCD, AreaCD, NatCD, CityCD)
{
    if (SupplierCD == "M")
    {
        SupplierCD = "02594";
    }
    else if (SupplierCD == "H")
    {
        SupplierCD = "04088";
    }
    else if (SupplierCD == "Y")
    {
        SupplierCD = "05216";
    }
    else if (SupplierCD == "K")
    {
        SupplierCD = "06071";
    }
           
    var str = '<iframe title="쿠폰리스트" width="655" height="410" id="CouponIframe" frameborder="0" scrolling="no" src="http://tour.interpark.com/global/iframe/detail/coupon_list.aspx?ApplSystemCD=' + ApplSystemCD + '&AreaCD=' + AreaCD + '&GoodsTypeCD=' + GoodsTypeCD + '&BaseGoodsCD=' + BaseGoodsCD + '&GoodsCD=' + GoodsCD + '&SupplierCD=' + SupplierCD + '&NatCD=' + NatCD + '&CityCD=' + CityCD + '"></iframe>';
    
    if (document.getElementById('CouponListForm'))
    {
        document.getElementById('CouponListForm').innerHTML = str;
    }
    else
    {   
        var obj = document.createElement("div");
        obj.setAttribute("id","CouponListForm");
        obj.style.position = "absolute";
        obj.style.zIndex = "100";
        obj.innerHTML = str;
        document.body.appendChild(obj);
    }
    
    if (!document.getElementById('CouponConfirmForm'))
    {
        var obj = parent.document.createElement("div");
        obj.setAttribute("id","CouponConfirmForm");
        obj.setAttribute("class","popContainer02");
        obj.style.position = "absolute";
        obj.style.zIndex = "100";
        obj.style.width = "480px";
        document.body.appendChild(obj);
    }

    ShowBackgroundLayer('CouponListForm');
}

function ShowBackgroundLayer(layerID)
{    
    if (!document.getElementById('divBackGround'))
    {
        var backObj = document.createElement("div");
        backObj.setAttribute("id","divBackGround");
        backObj.style.position = "absolute";
        backObj.style.zIndex = "10";
        backObj.style.left = "0px";
        backObj.style.top = "0px";
        backObj.style.display = "none";
        backObj.style.backgroundColor = "#FFFFFF";
        backObj.style.width = "100%";
        backObj.style.height = "100%";
        backObj.style.opacity = "0.5";
        backObj.style.filter = "alpha(opacity=50)";
        document.body.appendChild(backObj);
    }
                
    var div = document.getElementById('divBackGround');
    div.style.width = document.body.scrollWidth + "px";
    div.style.height = document.documentElement.scrollHeight + "px";
    div.style.display = "block";

    ShowPosLayer(layerID, 200);
}

function HideBackgroundLayer(layerID)
{
    // document.getElementById('divBackGround').style.display = "none";
    var objId = document.getElementById('divBackGround');
    if (objId) objId.style.display = "none";
    
    HideLayer(layerID);
}

function HideBackLayer()
{
    document.getElementById('divBackGround').style.display = "none";
}

function getGroupCouponByAlert(CMNo)
{
    var url = 'http://tour.interpark.com/Exporter/ws/tourService.asmx/PublishMultiCoupon';		
    var params = 'CMNo=' + CMNo;
    
    var cbfn = function(request)
    {
        getCouponByAlertCallback(request, 'Y');
    }
    
    RequestAjax(url, params, cbfn);
}

function getCouponByAlert(CMNo, CType)
{   
    CMNo = CMNo + "^" + CType + "|";
    
    var url = 'http://tour.interpark.com/Exporter/ws/tourService.asmx/PublishMultiCoupon';		
    var params = 'CMNo=' + CMNo;
    
    var cbfn = function(request)
    {
        getCouponByAlertCallback(request, '');
    }
    
    RequestAjax(url, params, cbfn);
}

function getGroupCouponByLayer(CMNo)
{
    var url = 'http://tour.interpark.com/Exporter/ws/tourService.asmx/PublishMultiCoupon';		
    var params = 'CMNo=' + CMNo;
    
    RequestAjax(url, params, getCouponByLayerCallback);
}

function getCouponByLayer(CMNo, CType)
{   
    CMNo = CMNo + "^" + CType + "|";
    
    var url = 'http://tour.interpark.com/Exporter/ws/tourService.asmx/PublishMultiCoupon';		
    var params = 'CMNo=' + CMNo;

    RequestAjax(url, params, getCouponByLayerCallback);
}

function getCouponByAlertCallback(request, GroupType)
{
    var result = request.responseXML;
    if (result != null)
    {
        var item = result.getElementsByTagName("result")[0]; 
        var code = item.getElementsByTagName("code")[0].childNodes[0] ? item.getElementsByTagName("code")[0].childNodes[0].nodeValue:'';
        var message = item.getElementsByTagName("message")[0].childNodes[0].nodeValue;
       
        if ( code == "L" )
        {                       
            alert(message);
            goLogin();
        } 
        else if ( code != "" ) 
        {
            if (GroupType == "Y")
                alert('발급되었습니다.\n\n마이페이지 할인쿠폰페이지에서 확인하세요.');
            else
                alert(message);
        }
    }
}

function getCouponByLayerCallback(request, eventArgs)
{
    var result = request.responseXML;
    if (result != null)
    {
        var item = result.getElementsByTagName("result")[0]
        var code = item.getElementsByTagName("code")[0].childNodes[0] ? item.getElementsByTagName("code")[0].childNodes[0].nodeValue:'';
        var message = item.getElementsByTagName("message")[0].childNodes[0].nodeValue;

        if ( code == "L" )
        {                       
            alert(message);
            goLogin();
        } 
        else if ( code != "" ) 
        {
            var list = item.getElementsByTagName("couponlist");
            var xmlText = getXmlText(list);
            if(xmlText != '') {

                if (!document.getElementById('CouponLayer'))
                {
                    var layerObj = document.createElement("div");
                    layerObj.setAttribute("id","CouponLayer");
                    layerObj.style.width = "700px";
                    layerObj.className = "popContainer";
                    document.body.appendChild(layerObj);
                }
                
                var txt = virtualPOST('/global/ajax/couponMultiForm.aspx','resultXml=' + xmlText);
                var objId = document.getElementById('CouponLayer');
                objId.innerHTML = txt;
                
                ShowBackgroundLayer('CouponLayer');
            } else {
                alert("다운받은 쿠폰이 없습니다.");
            }
        }
    }
}

function getXmlText(root) {
    var xmlText = ''; 
    try {
        for(var i=0; i<root.length; i++)
        {
            var rootName = root[i].nodeName;   
            var sText = '';
            if (rootName != "#text")
            {
                if(root[i].hasChildNodes()) {
                    var nodetype = root[i].childNodes[0].nodeType; 
                    
                    for(var j=0 ; j<root[i].childNodes.length; j++) {
                        if(root[i].childNodes[j].nodeType == 3 && root[i].childNodes[j].nodeValue == "\n    ") {
                            nodetype = 1;
                        }
                    }
                   
                    if(nodetype == 1){
                        sText = getXmlText(root[i].childNodes);
                    }else{
                        if(root[i].childNodes[0].nodeValue != null) {  
                            sText = root[i].childNodes[0].nodeValue;
                            
                            if(nodetype == 4) {
                                sText = '<![CDATA[' + sText + ']]>';
                            }
                        }
                    }
                }
                xmlText += '<' + rootName + '>' + sText + '</' + rootName + '>';
            
            }// end #text
        }
    } catch(e) {}
    return xmlText;
}

// find element absolute position
function findPos(obj) {
	var curleft = curtop = 0;
	do {
		curleft += obj.offsetLeft;
		curtop += obj.offsetTop;
	} while (obj = obj.offsetParent);
	return [curleft,curtop];
}

function findPos2(obj){
	var curleft = curtop = 0;
	
	if(obj.offsetParent == document.body)
	{
	    curleft = obj.offsetLeft;
		curtop = obj.offsetTop;
	}

	return [curleft,curtop];
}

// get flash
function thisMovie(movieName)
{
	if (navigator.appName.indexOf("Microsoft") != -1) {
		if(window[movieName]) {
		    return window[movieName];
		}else{
		    return document.getElementById(movieName);
		}
	} else { 

		if(navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1 )//safari
	    { 
	        return document.getElementById(movieName);
	    }
	    else
	    {  
		    var obj = document.getElementById( movieName );//구글크롬,FF 
		    obj = obj.getElementsByTagName('object')[0];
            return obj;
        }
	}
}
function thisMovie2(movieName)
{
	if (navigator.appName.indexOf("Microsoft") != -1) {
		if(window[movieName]) {
		    return window[movieName];
		}else{
		    return document.getElementById(movieName);
		}
	} else { 
	    return document.getElementById(movieName);
	}
}


function ShowFreeyaJeju(pathType)
{
    var url = 'http://tour.interpark.com/freeya/jeju/main_new.aspx';
    if (pathType == 'HeadArea') {
        url += '?mbn=tour&mln=menujeju11';
    } else if (pathType == 'JejuLeft') {
        url += '?mbn=tourjeju&mln=jeju_leftban';
    } else if (pathType == 'DomesticAir')    {
        url += '?mbn=tourair&mln=dome_leftbanner5';
    }
    
    window.open(url, '_blank', 'resizable=no, scrollbars=no, status=no, width=1000, height=764');
}

// vbscript 의 isDate 함수 구현.
// factor -         strDate : Required. string of date
// return value -   true or false
/*
    유효한 타입 : 2010-04-30(- 또는 다른 문자 모두 됨), 20100430
*/
function isDate(strDate) {
	/// <summary>isDate</summary>
	/// <param name="strDate">string, string date to validate</param>
	/// <return>true or false</return>
    var re = /^\d{8}/;
    var y, m, d;

    // 8자리나 10자리가 아니면 false
    if ((strDate.length != 8) && (strDate.length != 10)) return false;

    if (strDate.length == 8) {
        y = strDate.substring(0, 4);
        m = strDate.substring(4, 6);
        d = strDate.substring(6, 8);
    }
    else if (strDate.length == 10) {
        y = strDate.substring(0, 4);
        m = strDate.substring(5, 7);
        d = strDate.substring(8, 10);
    }

    // y, m, d 의 숫자여부 체크
    if (!re.test(y + m + d)) return false;

    // m, d 가 유효한 값인지 체크
    var dt = new Date(y, eval(m) - 1, d);
    y2 = dt.getFullYear(); m2 = dt.getMonth() + 1; d2 = dt.getDate();
    if (("" + m2).length == 1) { m2 = "0" + m2; }
    if (("" + d2).length == 1) { d2 = "0" + d2; }

    if (y != y2 || m != m2 || d != d2) return false;

    return true;
}

/* 플래너 - 파라미터 */
function ShowPlanner(param)
{
    if(param.indexOf("?") <= -1) {
        param = '?' + param;
    }
    
    window.open('http://tour.interpark.com/planner/index.aspx' + param, '_blank', 'resizable=yes, scrollbars=no, status=no, width=1000, height=700');
}

/* 플래너 바로 가기 - 파라미터 */
function ShowPlannerView(param, name, idx)
{    
    if(param.indexOf("?") <= -1) {
        param = '?' + param;
    }
    
    window.open('http://tour.interpark.com/planner/index.aspx' + param + '&PreviewName=' + name + "&PreviewIdx=" + idx, '_blank', 'resizable=yes, scrollbars=no, status=no, width=1000, height=700');
}

/* 여행상세페이지 탭영역 퀵메뉴 */
function MoveTabQuickMenu() 
{
	var OptFrom, OptTo;
	var objBoxTab = document.getElementById("div_boxTab");
	var objTabMenu = document.getElementById("tap_menu");
	
	if (objBoxTab && objTabMenu) {
	    OptFrom = parseInt(objBoxTab.offsetTop, 10); //프레임높이 
    	
	    if(mover.scrollTop > objBoxTab.offsetTop) {
		    OptTo = (document.getElementById("quickMenuArea").scrollTop - objBoxTab.offsetTop) + 50;
	    } else {
		    OptTo = 0;
	    }

	    if (OptFrom != OptTo) {
		    temp_val = parseInt(mover.style.top, 10);
            
		    if (temp_val > (OptFrom + 600)) {
                //var moverH = mover.offsetHeight + 466;
                temp_val = temp_val - (OptFrom - 150);
                
                objTabMenu.style.display = '';
                objTabMenu.style.top = temp_val + "px";
		    }
            else
            {
                objTabMenu.style.display = 'none';
            }

	    }
	    setTimeout ("MoveTabQuickMenu()", 15);
    }
}

/* 묶음상품 레이어 공통 */
function ShowPackGoodsLayer(BaseGoodsCD, CateCD, PageCD)
{
    var url = '/goods/ajax/pack.aspx';		
    var params = 'BaseGoodsCD=' + BaseGoodsCD + '&PageCD=' + PageCD + '&CateCD=' + CateCD;
    var cbfn = function(request)
    {
        var result = request.responseText;
        if (result != null) {
        
            //상품없을시
            if (result == 'NOGOODS') {
                HideBackgroundLayer('PackGoodsLayer'); 
                alert('해당 상품이 없습니다. <문의> 대표전화 1588-3443');
            } else {
            
                if (!document.getElementById('PackGoodsLayer'))
                {  
                    var obj = document.createElement("div");
                    obj.setAttribute("id","PackGoodsLayer");
                    obj.style.position = "absolute";
                    obj.style.zIndex = "1000";
                    obj.style.display = "none";
                    document.body.appendChild(obj);
                }
                
                document.getElementById('PackGoodsLayer').innerHTML = result;
                ShowBackgroundLayer('PackGoodsLayer');
            }
        }
    }
    RequestAjax(url, params, cbfn);
}

/* 오른쪽 마우스 방지 스크립트 */
function SetRightMouseClickDisabled(){
    var omitformtags=["input", "textarea", "select"]
    omitformtags = omitformtags.join("|");

    function disableselect(e){
        if (omitformtags.indexOf(e.target.tagName.toLowerCase()) == -1)
            return false;
    }

    function reEnable(){
        return true;
    }

    if (typeof document.onselectstart!="undefined")
        document.onselectstart = new Function ("return false");
    else {
        document.onmousedown = disableselect;
        document.onmouseup = reEnable;
    } 
      
    document.oncontextmenu = function(){
        return false;
    }
    document.onselectstart = function(){
        return false;
    }
    document.ondragstart = function(){
        return false;
    }
}

/*select box 처리*/
function delSelectItem(obj)
{   
	while (obj.length > 0) {
		obj.remove(0);
	}
}

function addSelectItem(obj, text, value) {
	if (obj) {
		var option = document.createElement("OPTION");
		obj.options.add(option);
		option.innerHTML = text ;
		option.value = value;
	}	
}

// 달력 레이어 띄운다 (2013-01-28)
function ShowCalendarLayer(startDateID, endDateID, part, oneWay, allowPeriod, btnID, confirmCallBack, cancelCallback)
{
    var calendarLayerID = "divCalendarLayer";
    var layer;
    
    if(document.getElementById(calendarLayerID))
    {
        layer = document.getElementById(calendarLayerID)
        
        if(layer.style.display == "block")
        {
            layer.style.display = "none";
            return;
        }
        
        layer.style.display = "block";
        LoadCalendarLayer(calendarLayerID, startDateID, endDateID, part, oneWay, allowPeriod, btnID, confirmCallBack, cancelCallback)
    }
    else
    {
        layer = document.createElement("DIV");
        layer.id = calendarLayerID;
        layer.style.position = "absolute";
        layer.style.zIndex = 100;
        document.body.appendChild(layer);
        
        var url = "/global/ajax/calendar4.aspx";
        var param = "";
        var ajaxcbfn = function(result)
        {
            $j("#" + calendarLayerID).html(result);
            LoadCalendarLayer(calendarLayerID, startDateID, endDateID, part, oneWay, allowPeriod, btnID, confirmCallBack, cancelCallback)
        }
        
        $j.get(url, param, ajaxcbfn);
    }
}

function LoadCalendarLayer(calendarLayerID, startDateID, endDateID, part, oneWay, allowPeriod, btnID, confirmCallBack, cancelCallback)
{
    if (typeof CalendarInit === "function")
    {
        CalendarInit(startDateID, endDateID, part, oneWay, allowPeriod, confirmCallBack, cancelCallback)
        
        if (document.getElementById(btnID))
        {
            var objBtnImg = document.getElementById(btnID);
            ShowObjLayer(calendarLayerID, objBtnImg, 20, 10);
        }
        else
            CenterLayer(calendarLayerID);
    }
}

//검색 또는 상세 관련 트래킹을 위한 로그 기록 메서드
//세부 정의 확인하고 사용해야함.
function WriteTrakingLog(type, dType, region1, region2, region3, sDT, eDT, goodsCode, goodsType, goodsGrade, keyword, count, etc1, etc2, etc3, etc4, etc5)
{
    var webServiceUrl = "http://toursearch.interpark.com/WS/FrontTracking.asmx/TrackingWriteLog";
    var scriptElement = document.createElement("script");
    keyword = keyword.replace(/\|/gi, '');
    
    webServiceUrl += "?systemType=" + type;
    webServiceUrl += "&detailType=" + dType;
    webServiceUrl += "&region1=" + encodeURIComponent(region1);
    webServiceUrl += "&region2=" + encodeURIComponent(region2);
    webServiceUrl += "&region3=" + encodeURIComponent(region3);
    webServiceUrl += "&startDT=" + encodeURIComponent(sDT.replace(/-/gi, ''));
    webServiceUrl += "&endDT=" + encodeURIComponent(eDT.replace(/-/gi, ''));
    webServiceUrl += "&goodsCode=" + goodsCode;
    webServiceUrl += "&goodsType=" + goodsType;
    webServiceUrl += "&goodsGrade=" + goodsGrade;
    webServiceUrl += "&searchKeyword=" + encodeURIComponent(keyword);
    webServiceUrl += "&resultCount=" + count;
    webServiceUrl += "&etc1=" + encodeURIComponent(etc1);    
    webServiceUrl += "&etc2=" + encodeURIComponent(etc2);    
    webServiceUrl += "&etc3=" + encodeURIComponent(etc3);    
    webServiceUrl += "&etc4=" + encodeURIComponent(etc4);    
    webServiceUrl += "&etc5=" + encodeURIComponent(etc5);    
    scriptElement.src = webServiceUrl;
    document.getElementsByTagName("head")[0].appendChild(scriptElement);
}

//아이포인트 비가용->가용전환 팝업호출 :: 공통호출용

function PopupIPointHurdle(usertype)
{
    var locationUrl = document.location.href;
    locationUrl = locationUrl.toLowerCase();
    
    var FsUserPath = "http://tour.interpark.com/ipoint/PointResult.aspx";
    if (locationUrl.indexOf("http://air.interpark.com/") > -1) {
        FsUserPath = "http://air.interpark.com/lts/jsp/iPointGate.jsp";
    } else if (locationUrl.indexOf("http://hotel.interpark.com/") > -1) {
        FsUserPath = "http://hotel.interpark.com/ipoint/PointResult.aspx";
    } else if (locationUrl.indexOf("http://housing.interpark.com/") > -1) {
        FsUserPath = "http://housing.interpark.com/ipoint/PointResult.aspx";
    }

    var Link = "http://ipointmall.interpark.com/ipoint/hurdle/IPointHurdleCommon.do?_method=changePop&imfsUserPath=" + FsUserPath;
    
    if (typeof usertype != "undefined") {
        Link += "&point-user-type=" + usertype;
    }
    
    window.open(Link, 'PopupIPointHurdle', 'scrollbars=no, status=no,width=540, height=420');
}

//아이포인트 비가용->가용전환 팝업호출 :: SSL 공통호출용 
function PopupIPointHurdle_ssl(usertype)
{
    var locationUrl = document.location.href;
    locationUrl = locationUrl.toLowerCase();
    
    var FsUserPath = "https://tour.interpark.com/ipoint/PointResult.aspx";
    if (locationUrl.indexOf("https://air.interpark.com/") > -1) {
        FsUserPath = "https://air.interpark.com/lts/jsp/iPointGate.jsp";
    } else if (locationUrl.indexOf("https://hotel.interpark.com/") > -1) {
        FsUserPath = "https://hotel.interpark.com/ipoint/PointResult.aspx";
    } else if (locationUrl.indexOf("https://housing.interpark.com/") > -1) {
        FsUserPath = "https://housing.interpark.com/ipoint/PointResult.aspx";
    }
    
    var Link = "http://ipointmall.interpark.com/ipoint/hurdle/IPointHurdleCommon.do?_method=changePop&imfsUserPath=" + FsUserPath;
    
    if (typeof usertype != "undefined") {
        Link += "&point-user-type=" + usertype;
    }
    
    window.open(Link, 'PopupIPointHurdle', 'scrollbars=no, status=no,width=540, height=420');
}

// 마이페이지 플래시 설명 레이어
function ShowMyPageIPointInfoLayer()
{
    document.getElementById("iPointInfo").style.display = "block";
}

// 마이페이지 플래시 설명 레이어
function HideMyPageIPointInfoLayer()
{
    document.getElementById("iPointInfo").style.display = "none"
}

// 항공원스탑 스크롤 여부
function GetAirOnestopScrollYN()
{
    var obScroll = "no";
    if(screen.height < 700) obScroll = "yes";
    if(screen.width < 1000) obScroll = "yes";
   
    return obScroll;
}

function GetScreenWidth(vWidth)
{
    var screenWidth = vWidth;
    if(screen.width < Number(vWidth)) screenWidth = screen.width;
  
    return screenWidth;
}
function GetScreenHeight(vHeight)
{
    var screenHeight = vHeight;
    if(screen.height < Number(vHeight)) screenHeight = screen.height;
    
    return screenHeight;
}