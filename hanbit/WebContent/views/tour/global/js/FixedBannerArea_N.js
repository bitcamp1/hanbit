

//메인페이지 판단
var strFixedMain = "tour";

if(window.location.href == "http://tour.interpark.com/" || window.location.href == "http://tour.interpark.com" || window.location.href.indexOf("http://tour.interpark.com/default.aspx") > -1 || window.location.href.indexOf("http://tour.interpark.com/?") > -1)
    strFixedMain = "tour_main";

SetFixedKeyWord();

function WriteFixedBannerArea()
{
    var isHTTP = window.location.href.indexOf("http://") != -1;
    var isHTTPS = window.location.href.indexOf("https://") != -1;
    var openServerPrefix = "http://openimage.interpark.com";
    var sslServerPrefix = "https://sslimage.interpark.com";
    
    var str = '';
    str += '<div id="divFixedArea" >';
    str += '<ul class="quick-list">';
    str += '	<li><a href="http://tour.interpark.com/customer/creditcard01.aspx?mbn=' + strFixedMain + '&mln=quick_m_01" title="무이자할부"><img src="http://openimage.interpark.com/tourpark/tour/common/common/quick_list01.gif" alt="무이자할부" /></a></li>';
    str += '	<li><a href="http://tour.interpark.com/customer/consultlist.aspx?mbn=' + strFixedMain + '&mln=quick_m_03" title="상담/맞춤견적"><img src="http://openimage.interpark.com/tourpark/tour/common/common/quick_list02.gif" alt="상담/맞춤견적" /></a></li>';
    str += '	<li><a href="http://tour.interpark.com/corp/?mbn=' + strFixedMain + '&mln=tour_quick_m_04" title="법인/상용/박람회"><img src="http://openimage.interpark.com/tourpark/tour/common/common/quick_list03.gif" alt="법인/상용/박람회" /></a></li>';
    str += '</ul>';
    str += '<span id="fixedRoll" class="rolling-banner01">';
    str += '	<a id="a_fixedRoll" href="javascript:;">';
    str += '	    <img id="img_fixedRoll" src="" alt="" />';
    str += '	</a><!-- 어드민 등록시 대체 택스트 필수 작업 요망 -->';
    str += '</span>';
    str += '<h2><a href="javascript:fixedTabDisplay()" title="땡처리특가"><img src="http://openimage.interpark.com/tourpark/tour/common/common/tit_special.gif" alt="땡처리특가" /></a></h2>';
    str += '<span class="choice">';
    str += '	<a href="javascript:HotSaleUp();" title=""><img src="http://openimage.interpark.com/tourpark/tour/main/btn_next01.png" alt="다음" /></a>';
    str += '	<a href="javascript:HotSaleDown();" title=""><img src="http://openimage.interpark.com/tourpark/tour/main/btn_prev01.png" alt="이전" /></a>';
    str += '</span>';
    str += '<ul id="fixedHotSale" class="sale-list">';
    str += '	<li id="fixedHotSale_0" class="cell-1 ">';
    str += '	    <a id="a_fixedHotSale_0" href="" onmouseover="javascript:fixedHotSaleMouseEvent(0,\'over\');" onmouseout="javascript:fixedHotSaleMouseEvent(0,\'out\');" >';
    str += '		    <span class="photo"><img  id="img_fixedHotSale_0" src="http://openimage.interpark.com/tourpark/tour/main/no_img1.gif" alt="" /></span>';
    str += '		    <span id="keyword_fixedHotSale_0" class="tit"></span>';
    str += '		    <span id="keywordA_fixedHotSale_0" class="data point01"></span>';
    str += '		</a>';
    str += '		<ul id="sub_fixedHotSale_0" class="admin-list">';
    str += '			<li>';
    str += '	            <a id="a_sub_fixedHotSale_0" href="">';
    str += '		            <span class="photo"><img id="img_sub_fixedHotSale_0" src="http://openimage.interpark.com/tourpark/tour/main/no_img1.gif" alt="" /></span>';
    str += '		            <span id="keywordB_sub_fixedHotSale_0" class="tit"></span>';
    str += '		            <span id="keyword_sub_fixedHotSale_0" class="con"></span>';
    str += '		            <span id="keywordA_sub_fixedHotSale_0" class="data point01"></span>';
    str += '				</a>';
    str += '				<span class="ui-sns-spot">';
    //str += '					<a href="#" title="페이스북 공유하기"><img src="http://openimage.interpark.com/tourpark/tour/main/sns_facebook.gif" alt="페이스북" /></a>';
    //str += '					<a href="#" title="트위터 공유하기"><img src="http://openimage.interpark.com/tourpark/tour/main/sns_tweeter.gif" alt="트위터" /></a>';
    //str += '					<a href="#" title="SMS로 보내기"><img src="http://openimage.interpark.com/tourpark/tour/main/sns_sms.gif" alt="sms" /></a>';
    //str += '					<a href="#" title="URL 복사하기"><img src="http://openimage.interpark.com/tourpark/tour/main/sns_url.gif" alt="url" /></a>';
    str += '				</span>';
    str += '			</li>';
    str += '		</ul>';
    str += '	</li>';
    str += '	<li id="fixedHotSale_1" class="cell-2 ">';
    str += '	    <a id="a_fixedHotSale_1" href="" onmouseover="javascript:fixedHotSaleMouseEvent(1,\'over\');" onmouseout="javascript:fixedHotSaleMouseEvent(1,\'out\');">';
    str += '		    <span class="photo"><img  id="img_fixedHotSale_1" src="http://openimage.interpark.com/tourpark/tour/main/no_img1.gif" alt="" /></span>';
    str += '		    <span id="keyword_fixedHotSale_1" class="tit"></span>';
    str += '		    <span id="keywordA_fixedHotSale_1" class="data point01"></span>';
    str += '		</a>';
    str += '		<ul id="sub_fixedHotSale_1" class="admin-list">';
    str += '			<li>';
    str += '	            <a id="a_sub_fixedHotSale_1" href="">';
    str += '		            <span class="photo"><img id="img_sub_fixedHotSale_1" src="" alt="" /></span>';
    str += '		            <span id="keywordB_sub_fixedHotSale_1" class="tit"></span>';
    str += '		            <span id="keyword_sub_fixedHotSale_1" class="con"></span>';
    str += '		            <span id="keywordA_sub_fixedHotSale_1" class="data point01"></span>';
    str += '				</a>';
    str += '				<span class="ui-sns-spot">';
    str += '				</span>';
    str += '			</li>';
    str += '		</ul>';
    str += '	</li>';
    str += '	<li id="fixedHotSale_2" class="cell-3">';
    str += '	    <a id="a_fixedHotSale_2" href="" onmouseover="javascript:fixedHotSaleMouseEvent(2,\'over\');" onmouseout="javascript:fixedHotSaleMouseEvent(2,\'out\');">';
    str += '		    <span class="photo"><img  id="img_fixedHotSale_2" src="http://openimage.interpark.com/tourpark/tour/main/no_img1.gif" alt="" /></span>';
    str += '		    <span id="keyword_fixedHotSale_2" class="tit"></span>';
    str += '		    <span id="keywordA_fixedHotSale_2" class="data point01"></span>';
    str += '		</a>';
    str += '		<ul id="sub_fixedHotSale_2" class="admin-list">';
    str += '			<li>';
    str += '	            <a id="a_sub_fixedHotSale_2" href="">';
    str += '		            <span class="photo"><img id="img_sub_fixedHotSale_2" src="" alt="" /></span>';
    str += '		            <span id="keywordB_sub_fixedHotSale_2" class="tit"></span>';
    str += '		            <span id="keyword_sub_fixedHotSale_2" class="con"></span>';
    str += '		            <span id="keywordA_sub_fixedHotSale_2" class="data point01"></span>';
    str += '				</a>';
    str += '				<span class="ui-sns-spot">';
    str += '				</span>';
    str += '			</li>';
    str += '		</ul>';
    str += '	</li>';
    str += '</ul>';
    str += '<a id="btnFixed" href="javascript:fixedTabDisplay()" title="열기 닫기" class="open">&gt;</a>';
    str += '<a href="#" class="top"><img src="http://openimage.interpark.com/tourpark/tour/main/txt_top.png" alt="top" /></a>';
    str += '</div>';

    if (isHTTPS) {
        while (str.indexOf(openServerPrefix) != -1) {
            str = str.replace(openServerPrefix, sslServerPrefix);
        }
    }
    
    document.write(str);
}

WriteFixedBannerArea();

//javascript class객체 keywordCls GN에 정의

function fixedHotSaleMouseEvent(index,Mode)
{   
    for(var i=0 ; i < HotSaleItemCount; i++)
    {   
        var conName = "fixedHotSale_" + i;
        var clsName = "cell-" + (index + 1);
        
        if(Mode == "over")
        {
            if(i == index)
                document.getElementById(conName).className = clsName + " on";
            else
                document.getElementById(conName).className = clsName;
        }
        else
        {
            document.getElementById(conName).className = clsName;
        }
    }
}

//키워드링크 정보 조회
function SetFixedKeyWord()
{	
	var script = document.createElement('script');
	
    script.src = (isHTTPS ? 'https' : 'http') + '://tour.interpark.com/exporter/banner/TourMain.aspx?pageTags=14/15&method=GetFixedBanner_New'
    document.getElementsByTagName('head')[0].appendChild(script);    
}

var RandomBannerIndex = 0;
var arrHotSaleBanner = new Array(0,1,2);
var arrHotSaleBannerMax = 4;
var HotSaleItemCount = 3;

var objJSON;

function SetFixedBanners_New(obj)
{
    /*
         14 : 퀵랜덤배너
        ,15 : 전사배너
    */
    
    objJSON = null;
    objJSON = obj;    
    
    var keywordInfo = getClass(obj,"14");  //getClass GN 메서드 참조
    
    var fixedRollMax = 0
    fixedRollMax = keywordInfo.arrSeq.length;
    RandomBannerIndex = getRandomNum(fixedRollMax);
    
    //랜덤배너
    BindFixedKeywordBanner("fixedRoll", keywordInfo, RandomBannerIndex, RandomBannerIndex);

    keywordInfo = getClass(obj,"15"); 
    arrHotSaleBannerMax = keywordInfo.arrSeq.length;
    //땡처리특가
//    BindFixedHotSaleBanner(keywordInfo);
    BindFixedHotSaleBannerInit(keywordInfo);
    
    InitFixedSetting();
}

function InitFixedSetting()
{
    var fixedDivSection = document.getElementById("btnFixed").parentNode.parentNode;
    
    var clsName = fixedDivSection.className;
    var FixedCookie = GetFixedCookie("FixedBannerN");
    
    if(FixedCookie == null)
    {
         SetFixedCookie("FixedBannerN","1","1");
        fixedDivSection.className = "asdie-fixed on";
    }
    else
    {
        if(FixedCookie == "0")
        {
            fixedDivSection.className = "asdie-fixed";
        }
        else
        {
            fixedDivSection.className = "asdie-fixed on";    
        }
    }
}

function BindFixedHotSaleBannerInit(keywordInfo)
{
    var startIndex = getRandomNum(arrHotSaleBannerMax);

    arrHotSaleBanner[0] = startIndex;

    for(var i=1 ; i < HotSaleItemCount; i++)
    {   
        var tmpNum = Number(arrHotSaleBanner[i-1]) + 1;
        if(tmpNum > (arrHotSaleBannerMax-1))
            tmpNum = 0;
        arrHotSaleBanner[i] = tmpNum;
    }
    
    BindFixedHotSaleBanner(keywordInfo);
}

function BindFixedHotSaleBanner(keywordInfo)
{  
    for(var i=0 ; i < HotSaleItemCount; i++)
    {
        BindFixedKeywordBanner("fixedHotSale", keywordInfo, arrHotSaleBanner[i], i);    
        //ShowDiv('fixedHotSale_' + i);
    }
}

function getFixedParamAddUrl(linkURL, strName, index)
{
    try{
        var URL = "";
        var paramNM = "";
        
        if(strName == "fixedHotSale")
		    paramNM = "tour_quick_sale_0";
        else if(strName == "fixedRoll")
		    paramNM = "tour_quick_m_0";    

        if(linkURL.indexOf("?") > 0)
            URL = linkURL + "&mbn=" + strFixedMain + "&mln=" + paramNM  + (index+1);
        else
            URL = linkURL + "?mbn=" + strFixedMain + "&mln=" + paramNM  + (index+1);

        return URL;
    }catch(e){
        return linkURL;
    }
}

function BindFixedKeywordBanner(targetID, keywordInfo, index, targetIDIndex)
{
//    try{        
        
        var paramIndex = index;
        if(targetID == "fixedRoll")
            paramIndex = paramIndex + 4;
        
        if(keywordInfo == null || keywordInfo == "undefined" || keywordInfo.arrSeq.length == 0)
            return;
            
        var strConName = targetID;
            
        if(targetID == "fixedHotSale")        
            strConName = targetID + "_" + targetIDIndex;
                    
        if(typeof document.getElementById("a_" + strConName) != "undefined" && document.getElementById("a_" + strConName) != null)
        {
            //링크
            document.getElementById("a_" + strConName).setAttribute('href', getFixedParamAddUrl(keywordInfo.arrLinkURL[index],targetID,paramIndex));
            
            //새창
            if(keywordInfo.arrNewWindow[index] == "Y")
                document.getElementById("a_" + strConName).setAttribute('target', '_blank');
            else
                document.getElementById("a_" + strConName).setAttribute('target', '');
        }                
        
        if(typeof document.getElementById("img_" + strConName) != "undefined" && document.getElementById("img_" + strConName) != null)
        {
            document.getElementById("img_" + strConName).setAttribute('src', getKeyWordImgURL(keywordInfo.arrImageURL[index]));
            document.getElementById("img_" + strConName).setAttribute('alt', keywordInfo.arrkeyWord[index]);
        }
                
        if(typeof document.getElementById("keyword_" + strConName) != "undefined" && document.getElementById("keyword_" + strConName) != null)
        {
            document.getElementById("keyword_" + strConName).innerHTML = keywordInfo.arrkeyWord[index];            
        }
        
        if(typeof document.getElementById("keywordA_" + strConName) != "undefined" && document.getElementById("keywordA_" + strConName) != null)
        {
            document.getElementById("keywordA_" + strConName).innerHTML = keywordInfo.arrkeyWordA[index];            
        }
        

        if(typeof document.getElementById("sub_" + strConName) != "undefined" && document.getElementById("sub_" + strConName) != null)
        {
            if(typeof document.getElementById("a_sub_" + strConName) != "undefined" && document.getElementById("a_sub_" + strConName) != null)
            {
                document.getElementById("a_sub_" + strConName).setAttribute('href', keywordInfo.arrLinkURL[index]);
                
                if(keywordInfo.arrNewWindow[index] == "Y")
                    document.getElementById("a_sub_" + strConName).setAttribute('target', '_blank');
                else
                    document.getElementById("a_sub_" + strConName).setAttribute('target', '');

            }

            if(typeof document.getElementById("img_sub_" + strConName) != "undefined" && document.getElementById("img_sub_" + strConName) != null)
            {    
                document.getElementById("img_sub_" + strConName).setAttribute('src', getKeyWordImgURL(keywordInfo.arrImageURL[index]));
                document.getElementById("img_sub_" + strConName).setAttribute('alt', keywordInfo.arrkeyWord[index]);
            }
            
            if(typeof document.getElementById("keyword_sub_" + strConName) != "undefined" && document.getElementById("keyword_sub_" + strConName) != null)
            {
                document.getElementById("keyword_sub_" + strConName).innerHTML = keywordInfo.arrkeyWord[index];            
            }
            
            if(typeof document.getElementById("keywordA_sub_" + strConName) != "undefined" && document.getElementById("keywordA_sub_" + strConName) != null)
            {
                document.getElementById("keywordA_sub_" + strConName).innerHTML = keywordInfo.arrkeyWordA[index];            
            }
            
            if(typeof document.getElementById("keywordB_sub_" + strConName) != "undefined" && document.getElementById("keywordB_sub_" + strConName) != null)
            {
                document.getElementById("keywordB_sub_" + strConName).innerHTML = keywordInfo.arrkeyWordB[index];            
            }
        }
            
//    }catch(e){}
}

function HotSaleUp()
{
    var keywordInfo = getClass(objJSON,"15"); 

    for(var i=0 ; i < HotSaleItemCount;  i++)
    {   
        var tmpNum = Number(arrHotSaleBanner[i]) - 1;
        if(tmpNum <  0)
            tmpNum = arrHotSaleBannerMax-1;
        arrHotSaleBanner[i] = tmpNum;
    }    

    BindFixedHotSaleBanner(keywordInfo);
}

function HotSaleDown()
{  
    var keywordInfo = getClass(objJSON,"15");     
  
    for(var i=0 ; i < HotSaleItemCount;  i++)
    {   
        var tmpNum = Number(arrHotSaleBanner[i]) + 1;
        if(tmpNum > (arrHotSaleBannerMax-1))
            tmpNum = 0;
        arrHotSaleBanner[i] = tmpNum;
    }
    
    BindFixedHotSaleBanner(keywordInfo);
}

function getKeyWordImgURL(objUrl)
{   
    if(objUrl == "" || objUrl == null)
        return "";
    
    var prefix = "http://tourimage.interpark.com";
    
    var isHTTPS = window.location.href.indexOf("https://") != -1;  
    if (isHTTPS) prefix = "https://tourimage.interpark.com";
    
    var imgUrl = prefix + '/Sites/Tour/ByTemplate/098/' + objUrl;

    return imgUrl;
}


/*http://codereview.stackexchange.com/questions/7315/fade-in-and-fade-out-in-pure-javascript*/
function ShowDiv(name){    
    var duration = 1;    
    var AmountOfActions=1000;
    var IntervalIns;

    var diiv= document.getElementById(name);
    diiv.style.opacity = '0';   diiv.style.display = 'block';   var counte=0;
    IntervalIns = setInterval(function(){
//        counte ++;
        counte = counte + 40;
       if ( counte<AmountOfActions) { diiv.style.opacity = counte/AmountOfActions;}
    },
    duration / AmountOfActions);
}

function fixedTabDisplay()
{   
    var fixedDivSection = document.getElementById("btnFixed").parentNode.parentNode;
    
    var clsName = fixedDivSection.className;
    
    if(clsName == "asdie-fixed on")
    {
        //Display
        SetFixedCookie("FixedBannerN","0","1");
        fixedDivSection.className = "asdie-fixed";
    }
    else
    {
        //Display none
        SetFixedCookie("FixedBannerN","1","1");
        fixedDivSection.className = "asdie-fixed on";
    }
}

function getRandomNum(cnt)
{
	return Math.floor(Math.random()*cnt);
}

function SetFixedCookie(name,value,expiredays)
{	
	var today = new Date();
	today.setDate( today.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; domain=.interpark.com; expires=" + today.toGMTString() + ";";
}

function GetFixedCookie(name)
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