var reqHttp;
if (window.ActiveXObject) {  // IE인 경우
	try {
		reqHttp = new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch (e) {
		try {
			reqHttp =  new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch (e1) {
			reqHttp =  null;
		}
	}
} else if (window.XMLHttpRequest){  // IE 이외의 브라우져
	try {
		reqHttp =  new XMLHttpRequest();
	}
	catch (e) {
		reqHttp =  null;
	}
}
if (reqHttp == null) cfFail();   //XMLHttpRequest 생성 실패
var virtual =  reqHttp;



var _httpMethod = "GET";  // POST 로 하면, .js 파일은 못 읽는다.
var _syncFlag = false;
function _xmlGetData (remoteURL)
{
  virtual.open(_httpMethod,remoteURL, _syncFlag); // post/get/put/etc optional
  virtual.setRequestHeader("Content-type:", "text/html");   
  virtual.setRequestHeader("Referer:", remoteURL);   
  virtual.send(); 
  if (virtual.status > 200) {
    //error
  }
  return virtual.responseText;
}

function _xmlPostData (remoteURL, param)
{
  virtual.open("POST", remoteURL, _syncFlag); // post/get/put/etc optional
  virtual.setRequestHeader("Content-type:", "application/x-www-form-urlencoded");   
  virtual.setRequestHeader("Referer:", remoteURL);
  virtual.send(param); 
  if (virtual.status > 200) {
    //error
  }
  return virtual.responseText;
}

function _onRetriveComplete ()
{
  if (virtual.readyState == 4) {
    virtual.onreadystatechange = null;
  }
}

function getParamDelimiter(url)
{
    var retValue = "?";
    
    if (url.indexOf("?") > -1)
        retValue = "&";
    
    return retValue;
}

function getParamDelimiterPost(param)
{
    var retValue = "";
    
    if (param.length > 0 || param.indexOf("&") > -1)
        retValue = "&";
    
    return retValue;
}

function virtualGET (remoteURL)
{
    //remoteURL = remoteURL + getParamDelimiter(remoteURL) + "reqtime=" + (new Date()).getTime();
    //return _xmlGetData(remoteURL);
    var val;
    var param = getParamDelimiter(remoteURL) + "reqtime=" + (new Date()).getTime();
    new Ajax.Request( remoteURL, {
        asynchronous: false,
        method: 'get',
        parameters: param,
        onSuccess: function(r){ val = r.responseText; }
    });
    return val;
}

function virtualPOST (remoteURL, param)
{
    //param = param + getParamDelimiterPost(param) + "reqtime=" + (new Date()).getTime();
    //return _xmlPostData(remoteURL, param);    
    var val;
    
    while (param.indexOf('?') != -1) {
        param = param.replace('?','%3f');
    }
    
    param = param + getParamDelimiterPost(param) + "reqtime=" + (new Date()).getTime();
    new Ajax.Request(remoteURL,{
        asynchronous: false,
        method: 'post',
        parameters: param,
        onSuccess: function(r){ val = r.responseText; }
    });
    return val;
}

var GlobalCount = 0;
function virtualBodyGET (remoteURL)
{
  var msg ;
  
  try{
		virtual.open(_httpMethod,remoteURL, _syncFlag); // post/get/put/etc optional
		virtual.setRequestHeader("Content-type:", "text/html");   
		virtual.setRequestHeader("Referer:", remoteURL);   
		virtual.send(); 
		msg = virtual.responseBody;
  } catch(e) {
     GlobalCount++;
     if ( GlobalCount < 3) {
		 return virtualBodyGET (remoteURL) ;
	 } else {
		 return "";
	 }
  }

  GlobalCount = 0;
  return msg ;
  

}

function executeHidden (strURL)
{
  var oIFRAME = document.createElement("<IFRAME style='display:none'></IFRAME>");
  document.body.appendChild(oIFRAME);
  oIFRAME.src = strURL;
}
function SayAxExecuteHTTP(url, postdata, callbackfunc, syncmode)
{
// 이 함수 사용시에는 SayAX의 executeHTTP 기능까지 함께 QA 한 후, 이 주석을 제거한 후 사용하시기 바랍니다.
  return AppletSession.executeHTTP(url, postdata, callbackfunc, syncmode);
}