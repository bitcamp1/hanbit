
function setCookie(name, value, expiredays)
{
	var today = new Date();
	today.setDate( today.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; domain=.interpark.com; expires=" + today.toGMTString() + ";";
}

function setSubCookie(name, value, expiredays)
{
	var today = new Date();
	today.setDate( today.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";";
}

function getCookie( name )
{
	var nameOfCookie = name + "=";
	var x = 0;
	while ( x <= document.cookie.length )
	{
		var y = (x+nameOfCookie.length);
		if ( document.cookie.substring( x, y ) == nameOfCookie )
		{
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
				endOfCookie = document.cookie.length;
			return unescape( document.cookie.substring( y, endOfCookie ) );
		}
		x = document.cookie.indexOf( " ", x ) + 1;
		if ( x == 0 )
			break;
	}
	return "";
}

function gate(next)
{
    var sessionNoList = "P00385,P01397,P01399,P01428,P01430,P01457,P01510,P12615,P12641,P12932,P12959,P12960,P12975,P13034,P13057,P13076,P13092,P13091,P13093,P13094,P13095";
    var sessionNo = getCookie("ippcd");
    if (sessionNo.length > 5 && sessionNoList.indexOf(sessionNo.substr(0, 6)) >= 0)
    {
	    parent.location.href = next;
	}
	else
	{
	    window.location.href = next;
	}
}

function gateWin(next)
{
	window.open(next,"_blank");
}

function gateStr(next)
{
    return next;
}

function getLoginYN()
{
	var tempLoginYN = "N";
	var tempVal = getCookie("tempinterparkGUEST");
	var AgreeVal = getCookie("siteAgree");

	if(tempVal != "" && tempVal != "logout" && tempVal != "undefined"){
	    if (AgreeVal.length >=4 && AgreeVal.substring(3,4)=="Y") {
			tempLoginYN = "Y";
		} else {
			tempLoginYN = "N";
		}
	} else {
	    tempLoginYN = "N";
	}
	return tempLoginYN;
}

function getAutoLoginYN()
{
    var autoLoginYN = "N";
	var alMemNo = getCookie("alMemNo");
	var alMemNm = getCookie("alMemNm");

	if((alMemNo != "" && alMemNo != "null" && alMemNo != null)
	    && (alMemNm != "" && alMemNm != "null" && alMemNm != null)) {
	    autoLoginYN = "Y";
	} else {
	    autoLoginYN = "N";
	}
	return autoLoginYN;
}

function hasAlKey()
{
    var autoLoginYN = "N";
	var alKey = getCookie("alKey");

	if(alKey != "" && alKey != "null" && alKey != null) {
	    autoLoginYN = "Y";
	} else {
	    autoLoginYN = "N";
	}
	return autoLoginYN;
}

var strLoginYN = getLoginYN();

function goLogout()
{
    document.location.href = "https://tour.interpark.com/gate/Login.aspx?_method=logout";
}

function goLogin()
{   
    LoginProc("initial", "");
}

function goLogoutGN()
{
    document.location.href = "https://tour.interpark.com/gate/Login.aspx?_method=logout&mbn=tour&mln=logout";
}

function goLoginGN()
{   
    LoginProc("initial", "&mbn=tour&mln=login");
}

function goLoginPopup(type)
{   
    goLoginPopupParam(type, "");
}


function goLoginPopupParam(type, param)
{    
    goLoginPopupParamByPart("tour" , type, param , '');
}

function goLoginPopupParamByPart(part , type , param , urlparam)
{
    var goUrl = "";
    switch(part)
    {
        case "hotel":
            goUrl = "http://hotel.interpark.com/gate/LoginAccess.html";
        break;
        case "tour":
            goUrl = "http://tour.interpark.com/gate/LoginAccess.html";
        break;
    }
    
    goUrl = goUrl + "?type=" + type + "&" + urlparam;
    window.open("https://tour.interpark.com/gate/Login.aspx?_method=popup" + param + "&goUrl=" + escape(goUrl), "Login", "toolbar=no,scrollbars=no,top=200,left=300,width=704,height=360");
}


function goLogoutPopupParam(type, param)
{
    var goUrl = "http://tour.interpark.com/gate/LoginAccess.html?type=" + type;
    window.open("https://tour.interpark.com/gate/Login.aspx?_method=logoutpopup" + param + "&goUrl=" + escape(goUrl), "Login", "toolbar=no,scrollbars=no,top=200,left=300,width=704,height=360");
}

function LoginProc(method, param)
{   
    //if (strLoginYN != "Y") {
        var goUrl = ""
        var docUrl = document.URL;

        if (docUrl.indexOf('/gate/Login.aspx') != -1 && docUrl.indexOf("_method=logout") == -1) {
                document.location.reload();
        } else {
            if (docUrl.indexOf('/gate/Login.aspx') != -1) {
                goUrl = "http://tour.interpark.com/";
            }else{
                goUrl = docUrl;
            }
            document.location.href = "https://tour.interpark.com/gate/Login.aspx?_method=" + method + param + "&goUrl=" + escape(goUrl);
        }
    //}
}

function ShowLoginFormLayer(type, backLayerID)
{
    ShowLoginFormLayerByPart("tour", type, backLayerID, "");
}

function ShowLoginFormLayerByPart(part, type, backLayerID, param)
{
    var goUrl = "";
    
    switch(part)
    {
        case "hotel":
            goUrl = "http://hotel.interpark.com/gate/LoginAccess.html";
        break;
        case "tour":
            goUrl = "http://tour.interpark.com/gate/LoginAccess.html";
        break;
    }
        
    if(goUrl == "") return;
    
    var loginLayerID = 'divLoginFormLayer';
    
    var layerWidth = 380;
    var layerHeight = 300;
    
    var layerTop = (document.body.clientHeight / 2) - layerHeight / 2 + document.body.scrollTop;
    var layerLeft = (document.body.clientWidth / 2) - layerWidth / 2 + document.body.scrollLeft;
    
    var frmUrl = "https://tour.interpark.com/gate/Login.aspx?_method=layer&goUrl=" 
               + encodeURIComponent(goUrl + "?type=" + type + param);
               
    if (!document.getElementById(loginLayerID))
    {
        var divLogin = document.createElement("div");
        divLogin.setAttribute("id", loginLayerID);
        divLogin.style.position = "absolute";
        divLogin.style.zIndex = 100;
        divLogin.style.left = layerLeft + "px";
        divLogin.style.top = layerTop + "px";
        divLogin.style.display = "none";
        divLogin.style.width = layerWidth + "px";
        divLogin.style.height = layerHeight + "px";
        document.body.appendChild(divLogin);
        
        var frmLogin = document.createElement("iframe");
        frmLogin.setAttribute("id", "frmLoginLayer");
        frmLogin.setAttribute("frameBorder","0");
        frmLogin.setAttribute("scrolling","no");
        frmLogin.src = frmUrl;
        frmLogin.style.width = "380px";
        frmLogin.style.height = "300px";
        divLogin.appendChild(frmLogin);
        
        var aClose = document.createElement("a");
        aClose.style.position = "absolute";
        aClose.style.zIndex = 101;
        aClose.style.left = "350px";
        aClose.style.top = "15px";
        
        var closeHref = "javascript:HideLayer('" + loginLayerID + "');";
        if(backLayerID != null && backLayerID != "") closeHref += "HideLayer('" + backLayerID + "');";
        
        aClose.href = closeHref;
        divLogin.appendChild(aClose);
        
        var imgClose = document.createElement("img");
        imgClose.src = "http://openimage.interpark.com/_nip_ui/login/bt_pop_close.gif"
        aClose.appendChild(imgClose);
    }
    
    document.getElementById("frmLoginLayer").src = frmUrl;

    document.getElementById(loginLayerID).style.display = "";
    if(backLayerID != null && backLayerID != "") document.getElementById(backLayerID).style.display = "";
}

/* Insterparkstamp 체크 */
function isValid(){
	var isValid = false;
	var stampMilli = getCookie("interparkstamp");
	var curTime = new Date();
	curTime = curTime.getTime();
	var stampMilli = decodeStamp(stampMilli);
	isValid = isValidStamp(stampMilli);
	return isValid;
}

function decodeStamp(str){
	var decodedStr = "";
	if (str.length != 34) {
		return null;
	}
	for (var i = 33; i >= 0; i--) {
		decodedStr += (str.charAt(i));
	}
	decodedStr = decodedStr.substring(10, 24); 
	return decodedStr;
}

function isValidStamp(stamp){
	var validDuration = 3600000;
	var milli = new Date();
	milli = milli.getTime();
	if ((milli - stamp) < validDuration) {
		return true;
	} else {
		return false;
	}
}