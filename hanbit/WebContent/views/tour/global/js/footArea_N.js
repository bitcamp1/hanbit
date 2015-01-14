
var isFootMain = "tour";

if(window.location.href == "http://tour.interpark.com/" 
|| window.location.href == "http://tour.interpark.com" 
|| window.location.href.indexOf("http://tour.interpark.com/default.aspx") > -1 
|| window.location.href.indexOf("http://tour.interpark.com/?") > -1)
{
    isFootMain = "tour_main";
}   

function WriteFooterArea()
{
    var isHTTP = window.location.href.indexOf("http://") != -1;
    var isHTTPS = window.location.href.indexOf("https://") != -1;
    var openServerPrefix = "http://openimage.interpark.com";
    var sslServerPrefix = "https://sslimage.interpark.com";

    var mobileRegEx = new RegExp(/iPhone|iPod|iPad|Mobile|UP.Browser|Android|BlackBerry|Windows CE|Nokia|webOS|Opera Mini|SonyEricsson|Opera Mobi|Windows Phone|IEMobile|POLARIS|SKT|LG|LGPlayer|Bada|Kindle|Wii/ig);
    var isApp = (navigator.userAgent.toLowerCase().indexOf("mobile_app") > -1) ? true : false;
    var isMobile = navigator.userAgent.toLowerCase().match(mobileRegEx);
    
    //총액요금 문구 미노출 설정    
    var isVisible = true;    
    if(window.location.href.toLowerCase().indexOf("http://tour.interpark.com/housing/") > -1
     || window.location.href.toLowerCase().indexOf("http://hotel.interpark.com/") > -1
     || window.location.href.toLowerCase().indexOf("http://tour.interpark.com/domestic/") > -1
     || window.location.href.toLowerCase().indexOf("http://eurail.interpark.com/") > -1
     || window.location.href.toLowerCase().indexOf("http://tourpkg.interpark.com/") > -1){
        isVisible =  false;
    }
    
    var str = '';
    
    if(isVisible)
    {
        str += '<em class="charge-notice">';	    
        str += '<span>';	    
        str += '<img alt="Notice" src="http://openimage.interpark.com//tourpark/tour/common/icon/icon_notice.gif">';	    
        str += '항공권 또는 항공권이 포함된 상품의 경우, 표시되는 상품요금은 예상 유류할증료와 제세공과금이 포함된 가격이며, 발권일/환율 등에 따라 변동될 수 있습니다.';	    
        str += '</span>';	    
        str += '</em>';
    }
    
    
    str += '<div id="divBottom_Banner" class="ui-foot-banner"></div>';	    
    str += '<div class="common">';	
    str += '	<ul>';		
    str += '	<li class="first-child"><a href="http://www.interpark.com/gate/info/protect_privacy.html">개인정보취급방침</a></li>';
    str += '	<li><a href="http://www.interpark.com/gate/info/protect_privacy_youth.html">청소년보호정책</a></li>';
    str += '	<li><a href="http://www.interpark.com/gate/info/mem_clause.html">이용약관</a></li>';
    str += '	<li><a href="http://tour.interpark.com/company/companyOutsidecovenant.aspx">여행약관</a></li>';
    str += '	<li><a href="http://www.0404.go.kr/" target="_blank">해외안전여행 정보</a></li>';		
    str += '	<li><a href="http://www.interpark.com/int/communication/CompanyInfo.do?_method=list&brd=cpNews&sc.brdNo=943660">IR</a></li>';
    str += '	<li><a href="http://www.interpark.com/int/communication/CompanyInfo.do?_method=initial">회사소개</a></li>';
    str += '	<li><a href="http://incorp.interpark.com/gate/html/LoyaltyProgramNew.html">우수고객제도</a></li>';
    str += '	<li><a href="http://tour.interpark.com/customer/noticeview.aspx?seq=1507">보험가입내역</a></li>';	
    str += '	</ul>';
    str += '</div>';
    str += '<div class="common-spot">';	
//    str += '	<strong class="name">(주) 인터파크 INT</strong>	<a href="http://www.ftc.go.kr/info/bizinfo/communicationList.jsp" target="_blank"><img src="http://openimage.interpark.com/tourpark/tour/index/btn_footer_txt.gif" style="vertical-align:middle;" alt="사업자정보확인"></a><br>';
//    str += '	<strong class="name">(주) 인터파크 INT</strong>	<a href="javascript:OpenCommunicationViewPop();"><img src="http://openimage.interpark.com/tourpark/tour/index/btn_footer_txt.gif" style="vertical-align:middle;" alt="사업자정보확인"></a><br>';
//    str += '	<address>137-885 서울 서초구 강남대로 447 남서울빌딩</address>| 대표이사 이기형, 김동업 | 사업자등록번호 214-87-98889 l 관광사업자 등록번호 : 제1999-03호 <br>	대표전화 : 1588-3443 <strong class="point01">(해외항공전용:02-3479-4399)</strong> | 팩스 : 02-755-1047 |통신판매업신고 2006-서울서초-09150<br>	개인정보 관리책임자 : CPO@interpark.com l 개인정보보유기간 : 회원탈퇴시까지 이메일주소 무단수집거부<br>	Copyright (c) INTERPARK INT All rights reserved.';
    str += '<div class="i-tour">';
	str += '	<strong class="name">인터파크투어 고객센터</strong>	<br>';
	str += '	137-885 서울 서초구 강남대로 447 남서울빌딩<br>';
	str += '	대표전화 : 1588-3443 <span class="point01">(해외항공전용 : 02-3479-4399)</span><br>';
	str += '	팩스 : 02-755-1047';
	str += '</div>';
    str += '<div class="i-int">';
	str += '    <strong class="name">(주) 인터파크 INT</strong>	<a href="javascript:OpenCommunicationViewPop();"><img src="http://openimage.interpark.com/tourpark/tour/index/btn_footer_txt.gif" style="vertical-align:middle;" alt="사업자정보확인"></a><br>';
	str += '    <address>135-880 서울 강남구 삼성로 512 삼성동빌딩 10층</address><br> 대표이사 : 이기형, 김동업 | 사업자등록번호 : 214-87-98889 <br> 관광사업자 등록번호 : 제2014-42호 | 통신판매업신고 : 2014-서울강남-02549';
    str += '</div>';
    str += '<p class="comment">개인정보 관리책임자 : CPO@interpark.com l 개인정보보유기간 : 회원탈퇴시까지 이메일주소 무단수집거부<br>	Copyright (c) INTERPARK INT All rights reserved.</p>';
    str += '	<div id="divFootGroupInfo" class="selc"><a id="aFootGroupInfo" class="tit" href="javascript:;" onclick="ShowFootBranchInfo()">Family Site</a> <a class="btn" id="aFootGroupGo" href="javascript:FootBranchOpenUrl();">GO</a>';
    str += '		<ul>';
    str += '			<li><a href="javascript:;" onclick="SelectFootGroupInfo(this)" data-link="http://incorp.interpark.com/communication/CompanyInfo.do?_method=initial&wid1=footer&wid2=company">(주)인터파크</a></li>';
    str += '			<li><a href="javascript:;" onclick="SelectFootGroupInfo(this)" data-link="http://www.imarketkorea.com/?wid1=footer&wid2=group&wid3=imk">아이마켓코리아</a></li>';
//    str += '			<li><a href="javascript:;" onclick="SelectFootGroupInfo(this)" data-link="http://www.dechocolatecoffee.co.kr/client/main/index.do;jsessionid=KRtYvbcCaTJu4fW4SKHPPZC1M77ZcumtNQKAqkAT8wd6RHz52k6vuq8LCrqKmhaX.interCOP191_servlet_engine7">디초콜릿커피</a></li>';
    str += '			<li><a href="javascript:;" onclick="SelectFootGroupInfo(this)" data-link="http://www.interparklogistics.com/?wid1=footer&wid2=group&wid3=intlogi">인터파크로지스틱스</a></li>';
    str += '			<li><a href="javascript:;" onclick="SelectFootGroupInfo(this)" data-link="http://www.bluesquare.kr/Info/Bluesquare_Info.asp?m_menu=bluesquare&s_menu=info&wid1=footer&wid2=group&wid3=theatre">인터파크시어터</a></li>';
    str += '			<li><a href="javascript:;" onclick="SelectFootGroupInfo(this)" data-link="http://www.bluesquare.kr/?wid1=footer&wid2=group&wid3=bluesquare">블루스퀘어</a></li>';
    str += '			<li><a href="javascript:;" onclick="SelectFootGroupInfo(this)" data-link="http://www.lottecardartcenter.com/?wid1=footer&wid2=group&wid3=artcenter">아트센터</a></li>';
    str += '			<li><a href="javascript:;" onclick="SelectFootGroupInfo(this)" data-link="http://www.digitalidea.co.kr/en/?wid1=footer&wid2=group&wid3=digitalidea">디지털아이디어</a></li>';
    str += '			<li><a href="javascript:;" onclick="SelectFootGroupInfo(this)" data-link="http://www.digiart.co.kr/kor/html/main/index.asp?wid1=footer&wid2=group&wid3=digiart">디지아트</a></li>';
    str += '			<li><a href="javascript:;" onclick="SelectFootGroupInfo(this)" data-link="http://www.paedea.com/?wid1=footer&wid2=group&wid3=paedea">페디아</a></li>';
    str += '		</ul>';
    str += '	</div>';
    str += '	<img class="qrcode" src="http://openimage.interpark.com/tourpark/tour/index/qrcode.gif" alt="인터파크 투어 모바일 앱" />';
    str += '	<iframe src="' + (isHTTPS ? "https://" : "http://") + 'tour.interpark.com/global/iframe/wiselog.html" scrolling="no" frameborder="0" style="width:0px;height:0px;display:none;" title="와이즈로그 아이프레임" ></iframe>';
    
    if (!isApp && isMobile)
        str += '	<div class="view-mobile"><a href="#" onclick="javascript:switchPager.action(); return false;">모바일버전으로 보기</a></div>'

    str += '</div>';

    if (isHTTPS) {
        while (str.indexOf(openServerPrefix) != -1) {
            str = str.replace(openServerPrefix, sslServerPrefix);
        }
    }

    document.write(str);
    
    SetFootBannerKeyWord();
}

WriteFooterArea();

//키워드링크 정보 조회
function SetFootBannerKeyWord()
{	
    var isHTTPS = window.location.href.indexOf("https://") != -1;
    
	var script = document.createElement('script');
	
    script.src = (isHTTPS ? 'https' : 'http') + '://tour.interpark.com/exporter/banner/TourMain.aspx?method=FooterBanner'
    document.getElementsByTagName('head')[0].appendChild(script);    
}

// 키워드링크 데이터바인딩
function SetFooterBannerData(data)
{   
    if(data.BandBanner != null && data.BandBanner.length > 0)
    {
        var img = "";              
        
        for(i = 1 ; i < data.BandBanner.length ; i++)
        {   
            img += '<a id="a_Bottom_Banner" href="' + replaceFootBannerSSLHttps(getFootBannerParamAddUrl(data.BandBanner[i].LinkURL,i)) + '" target="' + (data.BandBanner[i].IsNewWindow == "Y" ? "_blank" : "_self") + '">';
		    img += '    <img id="img_Bottom_Banner" src="http://tourimage.interpark.com/Sites/Tour/ByTemplate/098/' + data.BandBanner[i].ImageURL + '" alt="' + data.BandBanner[i].Keyword + '" />';
		    img += '</a>';
        }
        
        document.getElementById("divBottom_Banner").innerHTML = ReplaceFootBannerImageUrl(ReplaceFootTourImageUrl(img)); 
           
        if(data.BandBanner[0].ImageURL != "")
            document.getElementById("divBottom_Banner").setAttribute("style",ReplaceFootTourImageUrl("background : url('http://tourimage.interpark.com/Sites/Tour/ByTemplate/098/" + data.BandBanner[0].ImageURL + "') repeat-x scroll 0 top"));    
    }
}

function getFootBannerParamAddUrl(linkURL,index)
{
    try{
        if(linkURL.indexOf("?") > 0)
            return linkURL + "&mbn=" + isFootMain + "&mln=main_footerbn_" + index;
        else
            return linkURL + "?mbn=" + isFootMain + "&mln=main_footerbn_" + index;
    }catch(e)
    {
        return linkURL;
    }
}

function replaceFootBannerSSLHttps(str)
{
    var isHTTPS = window.location.href.indexOf("https://") != -1;
    var openServerPrefix = "http://";
    var sslServerPrefix = "https://";
    if(isHTTPS) {
        while (str.indexOf(openServerPrefix) != -1) {
            str = str.replace(openServerPrefix, sslServerPrefix);
        }
    }
    return str;
}


function ReplaceFootBannerImageUrl(str)
{
    var isHTTPS = window.location.href.indexOf("https://") != -1;
    var openServerPrefix = "http://openimage.interpark.com";
    var sslServerPrefix = "https://sslimage.interpark.com";

    if (isHTTPS) {
        while (str.indexOf(openServerPrefix) != -1) {
            str = str.replace(openServerPrefix, sslServerPrefix);
        }
    }
    return str;
}

// 이미지 경로에 ssl 적용
function ReplaceFootTourImageUrl(str)
{
    var isHTTPS = window.location.href.indexOf("https://") != -1;
    var openServerPrefix = "http://tourimage";
    var sslServerPrefix = "https://tourimage";
    
    if (isHTTPS) {
        while (str.indexOf(openServerPrefix) != -1) {
            str = str.replace(openServerPrefix, sslServerPrefix);
        }
    }
    
    return str;
}

function ShowFootBranchInfo(type)
{
    var obj = document.getElementById("divFootGroupInfo");
    var className = obj.className;
    
    switch(type)
    {
        case "on":
            obj.className = "selc on";
        break;
        case "off":
            obj.className = "selc";
        break;
        default:
            if(className == "selc")
                obj.className = "selc on";
            else
                obj.className = "selc";
        break;
    }
}

function FootBranchOpenUrl()
{
    alert("Family Site를 선택해 주세요.");
}

function SelectFootGroupInfo(obj)
{
    document.getElementById("aFootGroupInfo").innerText = obj.innerText;
    document.getElementById("aFootGroupGo").href = obj.getAttribute("data-link");
    document.getElementById("aFootGroupGo").target = "_blank";
    
    ShowFootBranchInfo("off");
}

//사업자등록번호 팝업
function OpenCommunicationViewPop()
{
    var url = "http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=2148798889";
    window.open(url, "communicationViewPopup", "width=750, height=700;");
}

//----------------------------------------------
// 페이스북 리마켓팅코드 - 전체 호출 (20140331)
function facebookRemarketing()
{   
    try
    {
        (function(){
          window._fbds = window._fbds || {};
          _fbds.pixelId = 640497739331232;
          var fbds = document.createElement('script');
          fbds.async = true;
          fbds.src = '//connect.facebook.net/en_US/fbds.js';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(fbds, s);
        })();
        window._fbq = window._fbq || [];
        window._fbq.push(["track", "PixelInitialized", {}]);    
        
        document.write('<img height="1" width="1" border="0" alt="" style="display:none" src="https://www.facebook.com/tr?id=640497739331232&amp;ev=NoScript" />');
    }
    catch(e){}
}
//----------------------------------------------

facebookRemarketing();

var switchPager = {
    baseURL: 'http://tour.interpark.com/m',
    callbackFunc: null,

    setPrepareURL: function(callback) {
        switchPager.callbackFunc = (typeof(callback) == 'function') ? callback : null;
    },

    action: function() {
    
        setCookie("hmobile", 'Y', -1);  // 모바일에서 PC이동 쿠키 삭제
        
        var customURL = (typeof(switchPager.callbackFunc) == 'function') ? switchPager.callbackFunc() : '';
        location.href = (customURL != '') ? customURL : switchPager.baseURL;
    }
};