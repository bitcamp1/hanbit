<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<script type="text/javascript">

function relativeViewLayerUC(rId, id)
{
    if(rId != "")
    {   
	    var relativeObj = document.getElementById(rId);
	    var obj = document.getElementById(id);

	    var rLeft, rTop, oLeft, oTop;
	    var objrCoords = new jsObjectToIEClientCoords(rId);
	    rLeft = objrCoords.x, rTop = objrCoords.y;
//	    var objCoords = new jsObjectToIEClientCoords(id);
//        oLeft = objCoords.x, oTop = objCoords.y
        
	    document.getElementById(id).style.left = rLeft + 'px';
	    document.getElementById(id).style.top = rTop + 'px';
	    document.getElementById(id).style.position = 'absolute';
	    
	    VisibleCheck();
	    
	    document.getElementById(id).style.display = '';

	}
	else
	{
	    VisibleCheck();
	    document.getElementById(id).style.display = '';
	}
}

function VisibleCheck()
{
    var strConIDs = "Main50_;";
    
    if(strConIDs != "")
    {
        try{
            var arrConID = strConIDs.substring(0,strConIDs.length - 2).split("_;");
            for(var i=0; i < arrConID.length ; i++)
            {
                CookiesCheck(arrConID[i]);
            }   
        }
        catch(e){}
    }
}

function CookiesCheck(name)
{
    try{
        var CookieValue = getCookie(name);

        if( CookieValue != "" && CookieValue == "Y")
            document.getElementById(name).style.display = 'none'; 
        else
            document.getElementById(name).style.display = ''; 
    }
    catch(e){}
}

function jsObjectToIEClientCoords(objID)
{
	var obj = document.getElementById(objID);

	this.x = obj.offsetLeft;
    this.y = obj.offsetTop;
    this.x -= obj.scrollLeft;
    this.y -= obj.scrollTop;

	obj = obj.offsetParent;

	while(obj)
	{
        this.x += obj.offsetLeft + obj.clientLeft;
        this.y += obj.offsetTop + obj.clientTop;
        this.x -= obj.scrollLeft;
        this.y -= obj.scrollTop;

        obj = obj.offsetParent;
	}
}

function windowDay(name, flag){
	if (flag=="Y") {

		setSubCookie(name,"Y",1);
	}
	document.getElementById(name).style.display = 'none';
}

function UCPopUp()
{
    relativeViewLayerUC('dHead', 'UCPopUp');
}

AddWindowEvent(UCPopUp);

</script>