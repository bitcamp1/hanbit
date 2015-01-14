/*
메인 개편 GN 파일
20140414 이승환
*/
//메인페이지 판단
var strMain = "tour";

if(window.location.href == "http://tour.interpark.com/" || window.location.href == "http://tour.interpark.com" || window.location.href.indexOf("http://tour.interpark.com/default.aspx") > -1 || window.location.href.indexOf("http://tour.interpark.com/?") > -1)
    strMain = "tour_main";

var isHTTP = window.location.href.indexOf("http://") != -1;
var isHTTPS = window.location.href.indexOf("https://") != -1;

SetKeyWord();
//탭 이동 시 로그인/로그아웃 상태 따라서 레이어 열기
function showLoginLayer() {
    show_glayer(divLoginInfoID);
}

function _writeGNBArea()
{

var str = '';
//str += '<div id="TopBandBanner" class="ui-sash-banner" style="display:none;">';
//str += '</div>';
//str += '<div id="dHead"><!-- headArea -->';
str += '	<div> <!-- wrapBody_wel -->';
str += '		<div id="gateway_wrap">';
str += '			<div id="gateway_con">';
str += '				<div class="gnbArea_top">';
str += '					<div class="gnbArea_left">';
str += '						<ul>';
str += '						    <li class="logo"><a href="http://www.interpark.com?mbn=tour&mln=int" title="클릭 시 인터파크 메인 페이지로 이동합니다." >인터파크</a></li>';
str += '						    <li><a href="http://shopping.interpark.com?mbn=tour&mln=shopping" title="클릭 시 인터파크 쇼핑 메인 페이지로 이동합니다.">쇼핑</a></li>';
//str += '						    <li><a href="http://fashion.interpark.com?mbn=tour&mln=fashion" title="클릭 시 인터파크 패션 메인 페이지로 이동합니다.">패션</a></li>';
str += '						    <li><a href="https://incorp.interpark.com/member/extern.do?_method=imkSsoGate&reqSite=20&RETURN_URL=http%3A%2F%2Fwww.imarket.co.kr%2Fdisplay%2Fmalls.do%3F_method%3Dwelcome" title="클릭 시 인터파크 아이마켓 메인 페이지로 이동합니다." target="_blank">아이마켓</a></li>';
str += '						    <li><a href="http://book.interpark.com?mbn=tour&mln=book" title="클릭 시 인터파크 도서 메인 페이지로 이동합니다.">도서</a></li>';
str += '						    <li><a href="http://ticket.interpark.com?mbn=tour&mln=ticket" title="클릭 시 인터파크 티켓 메인 페이지로 이동합니다.">티켓</a></li>';
str += '						    <li><a href="http://tour.interpark.com?mbn=tour&mln=tour" title="클릭 시 인터파크 투어 메인 페이지로 이동합니다.">투어</a></li>';
str += '						</ul>';
str += '					</div>';
str += '					<div class="gnbArea_morningCoffee">';
str += '						<a target="_blank" href="http://www.interpark.com/displaycorner/MorningCoffee.do?_method=mainNew&amp;sid1=gb&amp;sid2=mc&amp;mn1=tour&amp;mn2=gw"><img src="' + getMorningCoffeeImage() + '" alt="MORNING COFFEE" style="height:28px;" onerror="this.src=\'http://openimage.interpark.com/_nip_ui/category_shopping/shopping_morningcoffee/gatewaybar/null.jpg\'" /></a>';
str += '					</div>';
str += '					<div class="gnbArea_right">';
str += '						<ul>';

if (getLoginYN() == "Y" || getAutoLoginYN() == "Y" || hasAlKey() == "Y") {

str += '						    <li id="liLoginStatus" class="first"><a id="aLoginMember" href="javascript:goLoginGN();" onfocus="showLoginLayer()" onclick="ShowLoginMemberStatus(\'on\');">로그아웃</a>';
str += '					            <div class="sub-box" id="divAutoLoginInfo" style="width:250px;display:none;" >';
str += '					                <strong class="point">로그인상태를 유지하고 있습니다.</strong>';
str += '					                <p>개인정보 보호를 위해 공용기에서는<br />서비스 이용 종료시 로그아웃 해주시길 바라며,<br />보안이 필요한 서비스 이용시<br />다시 한번 로그인 해주시기 바랍니다.</p>';
str += '					                <p class="btn"><a href="javascript:goLoginGN();"><strong>재로그인</strong></a> <a href="javascript:goLogoutGN();"><strong>로그아웃</strong></a></p>';
str += '					                <a href="javascript:ShowLoginMemberStatus(\'off\');" class="close" onblur="hide_glayer(\'divAutoLoginInfo\');"><img alt="닫기" src="http://openimage.interpark.com/tourpark/tour/common/button/btn_close14.gif" ></a>';
str += '					            </div>';
str += '					            <div id="divRealLoginInfo" class="sub-box" style="width:222px;display:none;">';
str += '					                <strong class="point">로그인상태입니다.</strong>';
str += '					                <p>개인정보 보호를 위해 공용기에서는 <br />서비스 이용 종료시 <br />로그아웃 해주시길 바랍니다.<br /></p>';
str += '					                <p class="btn" style="margin-top:-23px;"><a href="javascript:goLogoutGN();"><strong>로그아웃</strong></a></p>';
str += '					                <a href="javascript:ShowLoginMemberStatus(\'off\');" class="close" onblur="hide_glayer(\'divRealLoginInfo\');"><img alt="닫기" src="http://openimage.interpark.com/tourpark/tour/common/button/btn_close14.gif" ></a>';
str += '					            </div>';
str += '                            </li>';
str += '						    <li id="liLoginMemberInfo"><a href="http://incorp.interpark.com/member/memberjoin.do?_method=upMemberFront&mbn=tour&mln=main_join">회원정보</a></li>';

}else{

str += '						    <li class="first"><a id="aMemberName" href="javascript:goLoginGN();">로그인</a></li>';
str += '						    <li><a href="https://incorp.interpark.com/member/memberjoinclause.do?_method=initial&reqSite=TOUR&mbn=tour&mln=main_join">회원가입</a></li>';

}

str += '						    <li class="mypg" onMouseOver=show_glayer("dlmypgsub"); onMouseOut=hide_glayer("dlmypgsub");>';
str += '						        <a class="bul" href="http://tour.interpark.com/mypage/Default.aspx?mbn=' + strMain + '&mln=tour_mypage" onfocus="show_glayer(\'dlmypgsub\');">마이페이지</a>';
str += '                                <div class="mypgsub" id="dlmypgsub" style="display:none;" onMouseOver=show_glayer("dlmypgsub"); onMouseOut=hide_glayer("dlmypgsub");>';
str += '								    <div class="top"></div>';
str += '								    <div class="mid">';
str += '										<dl>';
str += '											<dt>마이페이지 상세내용</dt> <!-- mod -->';
str += '                                            <dd><a href="http://tour.interpark.com/mypage/Default.aspx?mbn=' + strMain + '&mln=tour_reservation">예약확인/취소</a></dd>';
str += '                                            <dd><a href="http://tour.interpark.com/mypage/myInquiry_list.aspx?mbn=' + strMain + '&mln=tour_consult">나의 문의내역</a></dd>';
str += '                                            <dd><a href="http://tour.interpark.com/mypage/wishlist.aspx?mbn=' + strMain + '&mln=tour_good" onblur="hide_glayer(\'dlmypgsub\');">내가 찜한상품</a></dd>';
str += '										</dl>';
str += '									</div>';
str += '									<div class="btm"></div>';
str += '								</div>';
str += '							</li>';
str += '    						<li class="mypg" onMouseOver=show_glayer("dlcussub"); onMouseOut=hide_glayer("dlcussub");>';
str += '						        <a class="bul" href="http://tour.interpark.com/customer/?mbn=' + strMain + '&mln=tour_custom" onfocus="show_glayer(\'dlcussub\');">고객센터</a>';
str += '                                <div class="customersub" id="dlcussub" style="display:none;" onMouseOver=show_glayer("dlcussub"); onMouseOut=hide_glayer("dlcussub");>';
str += '									<div class="top"></div>';
str += '									<div class="mid">';
str += '										<dl>';
str += '											<dt>고객센터 상세내용</dt> <!-- mod -->';
str += '                                            <dd><a href="http://tour.interpark.com/customer/noticelist.aspx?mbn=' + strMain + '&mln=tour_notice">공지사항</a></dd>';
str += '                                            <dd><a href="http://tour.interpark.com/customer/faq.aspx?mbn=' + strMain + '&mln=tour_faq">자주묻는질문</a></dd>';
str += '                                            <dd><a href="http://tour.interpark.com/customer/consultlist.aspx?mbn=' + strMain + '&mln=tour_fitconsult">고객상담/맞춤견적</a></dd>';
str += '                                            <dd><a href="http://tour.interpark.com/category/myvisa/main.aspx?mbn=' + strMain + '&mln=tour_visa">비자신청</a></dd>';
str += '                                            <dd><a href="http://tour.interpark.com/category/insurance/main.aspx?mbn=' + strMain + '&mln=tour_lig" onblur="hide_glayer(\'dlcussub\');">여행자보험</a></dd>';
str += '										</dl>';
str += '										</div>';
str += '									<div class="btm"></div>';
str += '								</div>';
str += '							</li>';
str += '						    <li><a href="http://tour.interpark.com/event/event_view.aspx?seq=5756&mbn=' + strMain + '&mln=main_mobile_2">모바일 App</a></li>';
str += '						</ul>';
str += '					</div>';
str += '				</div>';
str += '			</div>';
//str += '			<div style="display:none;left: 50%; top:78px; margin-left: -235px; position: absolute; z-index: 1000;" id="AutoComplete"></div>';
str += '			<div style="display:none; left:50%; top:89px; margin-left:-245px; position:absolute; z-index:1000;" id="AutoComplete"></div>';
str += '            <div id="SearchWord" style="position:absolute; top:89px; left:50%; margin-left:-245px; z-index:1000; display:none;">';
str += '		</div>';
str += '	</div>';

str += '	<div class="head-cover"> ';
str += '		<div class="sub-cover">';
//str += '			<h1><img src="http://openimage.interpark.com/tourpark/tour/common/headArea/CI_tour130605.gif" usemap="#MapCI" alt="INTERPARK|투어" /></h1>';
//str += '			<map name="MapCI" id="MapCI">';
//str += '				<area shape="rect" coords="0,0,115,30" href="http://www.interpark.com/malls/index.html" alt="INTERPARK" />';
//str += '				<area shape="rect" coords="115,0,170,30" href="http://tour.interpark.com/?mbn=' + strMain + '&mln=tour_tour" alt="투어" />';
//str += '			</map>';
str += '			<h1 class="logo1"><img src="http://openimage.interpark.com/tourpark/tour/common/headArea/CI_tour140826.gif" width="204" height="30" usemap="#MapCI" alt="싸니까 믿으니까 인터파크니까 인터파크투어"></h1>';
str += '			<map name="MapCI" id="MapCI">';
str += '				<area shape="rect" coords="16,7,149,28" href="http://www.interpark.com/malls/index.html" alt="인터파크">';
str += '				<area shape="rect" coords="152,3,201,27" href="http://tour.interpark.com/?mbn=' + strMain + '&mln=tour_tour" alt="투어" />';
str += '			</map>';

//str += '            <div class="search" id="SearchGNBFrom">';
//str += '                <div class="box" id="box">';
//str += '			    </div>';
//str += '			    <div class="btn" id="scbt"><a href="javascript:SearchGNBArea(\'N\');"><img src="http://openimage.interpark.com/_nip/btn/bt_newSearch09.gif" width="62" height="32" alt="검색"  /></a></div>';
//str += '            </div>';

//str += '			<form name="SearchGNBFrom" id="SearchGNBFrom" method="get" autocomplete="off" onSubmit="return false;" class="ui-module-search">';
//str += '				<fieldset> <!-- search-module -->';
//str += '					<legend>통합 검색어 입력</legend>';
//str += '					<input type="text" class="input-text" value="꽃보다 누나 크루아티아 패키지 오픈 " title="검색어 입력" />';
//str += '					<button type="submit" class="btn-search" title="검색"><span class="">검색</span></button>';
//str += '				</fieldset>';
//str += '			</form>';

//str += '			<form name="SearchGNBFrom" id="SearchGNBFrom" autocomplete="off" onSubmit="return false;" class="ui-module-search">';
str += '			<div name="SearchGNBFrom" id="SearchGNBFrom" autocomplete="off" class="ui-module-search">';
str += '				<fieldset> <!-- search-module -->';
str += '					<legend>통합 검색어 입력</legend>';
str += '					<span id="box"></span>';
str += '					<button id="scbt" type="button" class="btn-search" title="검색" onclick="SearchGNBArea(\'N\');" style="cursor:pointer"><span class="">검색</span></button>';
str += '				</fieldset>';
str += '			</div>';

str += '			<div class="aside-gnb">';
str += '				<a href="http://tour.interpark.com/freeya/?mbn=' + strMain + '&mln=tour_freeya"><img src="http://openimage.interpark.com/tourpark/tour/main/gnb_freeya.gif" alt="프리야 여행정보" /></a>';
str += '				<a href="http://tour.interpark.com/event/?mbn=' + strMain + '&mln=tour_event"><img src="http://openimage.interpark.com/tourpark/tour/main/gnb_event_zone.gif" alt="이벤트 혜택존" /></a>';
str += '			</div>';

str += '			<div id="GNBRollingBanner" class="hello-banner">';

str += '			</div>';
str += '		</div>';

str += '		<div class="gnb-section" style="display:block;">';
str += '			<!-- 해외여행 -->';
str += '			<div id="divHeaderMenu1" class="gnb-module add1">';
str += '				<h2><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb1_tit.gif" alt="인터파크 해외 여행" /></h2>';
str += '				<h3 name="mainMenu" class="h3-tit"><a href="http://air.interpark.com/?mbn=' + strMain + '&mln=tour_air" onMouseOver="show_glayer(\'_cat_sub01\',1);" onMouseOut="hide_glayer(\'_cat_sub01\');" onfocus="show_glayer(\'_cat_sub01\',1);">';
str += '                    <img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb1_01.gif" alt="해외 항공" /></a></h3>';
str += '				<div class="gnb-spot add1 on" id="_cat_sub01" style="display: none;" onMouseOver="show_glayer(\'_cat_sub01\',1);" onMouseOut="hide_glayer(\'_cat_sub01\');">';
str += '					<ul class="gnb-list add1">';
str += '						<li>항공권 예약';
str += '							<ul>';
str += '								<li><a href="javascript:ShowAirReserveWithParam(\'mbn=' + strMain + '&mln=main_menuair1\');" >해외항공권 원스탑예약</a></li>';
str += '								<li><a href="javascript:ShowAirReserveWithParam(\'trip=MD&mbn=' + strMain + '&mln=main_menuair2\');">다구간 항공권 예약</a></li>';
str += '								<li><a href="javascript:ShowAirReserveWithParam(\'startType=soto&resPage=FLEX_AIR&mbn=' + strMain + '&mln=main_menuair11\');">해외출발 항공권</a></li>';
str += '							</ul>';
str += '						</li>';
str += '						<li>스페셜 프라이스';
str += '							<ul>';
str += '								<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=M&areaCode=J1&CityCode=NRT&tdOpen=Y&mbn=' + strMain + '&mln=main_menuair3">주요도시 할인항공권</a></li>';
str += '								<li><a href="http://air.interpark.com/air/front/closingSale/closingSale.jsp?mbn=' + strMain + '&mln=main_menuair4">오늘의 항공특가</a></li>';
str += '								<li><a href="http://tour.interpark.com/airticket/overseas/main.aspx?mbn=' + strMain + '&mln=main_menuair5">땡처리 항공권</a></li>';
str += '								<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=H&areaCode=J1&CityCode=NRT&tdOpen=Y&mbn=' + strMain + '&mln=main_menuair12">모바일 항공권</a></li>';
str += '								<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=D&areaCode=J1&CityCode=NRT&tdOpen=Y&mbn=' + strMain + '&mln=main_menuair13">부산출발 항공권</a></li>';
str += '							</ul>';
str += '						</li>';
str += '					</ul>';
str += '					<ul class="gnb-list add2">';
str += '						<li>맞춤 항공권';
str += '							<ul>';
str += '								<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=S&areaCode=U1&aNationCode=US&CityCode=LAX&mbn=' + strMain + '&mln=main_menuair6">학생할인 항공권</a></li>';
str += '								<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=P&areaCode=J1&CityCode=NRT&mbn=' + strMain + '&mln=main_menuair7">지방출발 항공권</a></li>';
str += '								<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=B&areaCode=U1&aNationCode=US&CityCode=LAX&mbn=' + strMain + '&mln=main_menuair10">비지니스 클래스</a></li>';
str += '							</ul>';
str += '						</li>';
str += '						<li><a href="http://tour.interpark.com/Airtel/Main.aspx?mbn=' + strMain + '&mln=main_menuair8">항공+호텔</a></li>'; //onblur="hide_glayer(\'_cat_sub01\'); "
str += '						<li><a href="http://tour.interpark.com/customer/fitconsultwrite.aspx?code=Corp&ConsultType=0&mbn=' + strMain + '&mln=main_menuair9" >단체항공문의</a></li>';
str += '					    <li id="subMenu_20" class="ad-banner"></li>';
str += '					</ul>';
str += '				</div>';

str += '				<h3 name="mainMenu" class="h3-tit"><a href="http://hotel.interpark.com/?mbn=' + strMain + '&mln=tour_hotel" onMouseOver="show_glayer(\'_cat_sub02\',2);" onMouseOut="hide_glayer(\'_cat_sub02\');" onfocus="show_glayer(\'_cat_sub02\',2);">';
str += '                    <img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb1_02.gif" alt="해외 호텔" /></a></h3>';
str += '				<div class="gnb-spot add2" id="_cat_sub02" style="display: none;" onMouseOver="show_glayer(\'_cat_sub02\',2);" onMouseOut="hide_glayer(\'_cat_sub02\');">';
str += '					<ul class="gnb-list add1">';
str += '						<li>호텔 예약 ';
str += '							<ul>';
str += '								<li><a href="javascript:ShowOneStopOHotelBySearch(\'mbn=' + strMain + '&mln=main_menuhotel1\');" >해외호텔 원스탑예약</a></li>';
str += '								<li><a href="http://hotel.interpark.com/Category/Ranking.aspx?mbn=' + strMain + '&mln=main_menuhotel2">해외호텔 랭킹</a></li>';
str += '							</ul>';
str += '						</li>';
str += '						<li>스폐셜 프라이스';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=6655&mbn=' + strMain + '&mln=main_menuhotel3">일본 전통료칸</a></li>';
str += '								<li><a href="http://hotel.interpark.com/category/maldives.aspx?mbn=' + strMain + '&mln=main_menuhotel4">몰디브</a></li>';
str += '								<li><a href="http://hotel.interpark.com/Category/Cancun.aspx?mbn=' + strMain + '&mln=main_menuhotel5">칸쿤</a></li>';
str += '							</ul>';
str += '						</li>';
str += '						<li><a href="http://tour.interpark.com/Airtel/Main.aspx?mbn=' + strMain + '&mln=main_menuhotel6">항공+호텔</a></li>';
str += '						<li><a href="http://tour.interpark.com/customer/fitconsultwrite.aspx?code=Corp&ConsultType=1&mbn=' + strMain + '&mln=main_menuhotel7">단체호텔문의</a></li>';
str += '					</ul>';
str += '					<ul class="gnb-list add2">';
str += '						<li>고객 서비스';
str += '							<ul>';
str += '								<li><a target="_blank" href="http://www.rentalcars.com/affxml/Home.do?affiliateCode=interpark_rc&cor=kr&adplat=abroadhotel&adcamp=abroadhoteldropdown&mbn=' + strMain + '&mln=main_menuhotel8">해외렌터카 예약</a></li>';
//str += '								<li><a href="http://backpack.interpark.com/main.asp?mbn=' + strMain + '&mln=main_menuhotel9">다국적배낭여행</a></li>';
//str += '								<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=668&mbn=' + strMain + '&mln=main_menuhotel9">크루즈여행</a></li>';
//str += '								<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=669&mbn=' + strMain + '&mln=main_menuhotel10">현지투어/입장권</a></li>';
str += '								<li><a href="http://tour.interpark.com/mall/2_2.aspx?mallcd=92&cate=1675&loc=6_1&mbn=' + strMain + '&mln=main_menuhotel10">현지투어/입장권</a></li>';
str += '								<li><a href="http://tour.interpark.com/category/myvisa/main.aspx?mbn=' + strMain + '&mln=main_menuhotel11">비자신청</a></li>';
str += '					            <li id="subMenu_21" class="ad-banner"></li>';
str += '							</ul>';
str += '						</li>';
str += '					</ul>';
str += '				</div>';

str += '				<h3 class="h3-tit none"><a href="http://tour.interpark.com/Airtel/Main.aspx?mbn=' + strMain + '&mln=tour_airhotel"><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb1_03.gif" alt="해외 항공+호텔" /></a></h3>';

str += '				<h3 name="mainMenu" class="h3-tit"><a href="http://tour.interpark.com/free/?mbn=' + strMain + '&mln=tour_free" onMouseOver="show_glayer(\'_cat_sub03\',3);" onMouseOut="hide_glayer(\'_cat_sub03\');" onfocus="show_glayer(\'_cat_sub03\',3);">';
str += '                    <img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb1_04.gif" alt="해외 자유여행" /></a></h3>';
str += '				<div class="gnb-spot add3" id="_cat_sub03" style="display: none;" onMouseOver="show_glayer(\'_cat_sub03\',3);" onMouseOut="hide_glayer(\'_cat_sub03\');">';
str += '					<ul class="gnb-list add1">';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=26&mbn=' + strMain + '&mln=main_menufree1">홍콩/마카오/대만</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=35&mbn=' + strMain + '&mln=main_menufree2">방콕/푸켓/치앙마이</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=2341&mbn=' + strMain + '&mln=main_menufree16">라오스/캄보디아/베트남</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=2083&mbn=' + strMain + '&mln=main_menufree7">싱가폴/발리/코타키나발루</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=31&mbn=' + strMain + '&mln=main_menufree3">세부/보라카이/마닐라</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1409&mbn=' + strMain + '&mln=main_menufree4">중국</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=29&mbn=' + strMain + '&mln=main_menufree5">일본</a></li>';
//str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=32&mbn=' + strMain + '&mln=main_menufree6">유럽</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=33&mbn=' + strMain + '&mln=main_menufree7">괌/사이판</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=721&mbn=' + strMain + '&mln=main_menufree8">호주/뉴질랜드</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=911&mbn=' + strMain + '&mln=main_menufree11">몰디브/모리셔스/세이셸</a></li>';
str += '					</ul>';
str += '					<ul class="gnb-list add2">';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=32&mbn=' + strMain + '&mln=main_menufree13">유럽</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=495&mbn=' + strMain + '&mln=main_menufree9">미국/캐나다</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1253&mbn=' + strMain + '&mln=main_menufree10">하와이/칸쿤</a></li>';
//str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=911&mbn=' + strMain + '&mln=main_menufree11">몰디브/모리셔스</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=2385&mbn=' + strMain + '&mln=main_menufree14">허니문</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=2386&mbn=' + strMain + '&mln=main_menufree15">지방출발</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=669&mbn=' + strMain + '&mln=main_menufree12">티켓/데이투어</a></li>';
str += '					    <li id="subMenu_22" class="ad-banner"></li>';
str += '					</ul>';
str += '				</div>';

str += '				<h3 name="mainMenu" class="h3-tit"><a href="http://tour.interpark.com/package/?mbn=' + strMain + '&mln=tour_pkg" onMouseOver="show_glayer(\'_cat_sub04\',4);" onMouseOut="hide_glayer(\'_cat_sub04\');" onfocus="show_glayer(\'_cat_sub04\',4);">';
str += '                    <img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb1_05.gif" alt="해외 패키지" /></a></h3>';
str += '				<div class="gnb-spot add4" id="_cat_sub04" style="display: none;" onMouseOver="show_glayer(\'_cat_sub04\',4);" onMouseOut="hide_glayer(\'_cat_sub04\');">';
str += '					<ul class="gnb-list add1">';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=21&mbn=' + strMain + '&mln=main_menupkg1">태국(파타야,푸켓,치앙마이)</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1972&mbn=' + strMain + '&mln=main_menupkg10">베트남/캄보디아/라오스</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1969&mbn=' + strMain + '&mln=main_menupkg17">필리핀(세부,보라카이)</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1974&mbn=' + strMain + '&mln=main_menupkg18">코타/발리/싱가폴/자카르타</a></li>';

str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=23&mbn=' + strMain + '&mln=main_menupkg4">중국/홍콩/마카오/대만</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=22&mbn=' + strMain + '&mln=main_menupkg2">일본</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=2404&mbn=' + strMain + '&mln=main_menupkg17">서유럽/러시아</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=25&mbn=' + strMain + '&mln=main_menupkg5">동유럽/지중해/크로아티아</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=24&mbn=' + strMain + '&mln=main_menupkg3">괌/사이판/팔라우</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=160&mbn=' + strMain + '&mln=main_menupkg7">호주/뉴질랜드/남태평양</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=27&mbn=' + strMain + '&mln=main_menupkg6">미주/중남미/인도</a></li>';
//str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1381&mbn=' + strMain + '&mln=main_menupkg8">허니문</a></li>';
//str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=330&mbn=' + strMain + '&mln=main_menupkg10">지방출발</a></li>';
str += '					</ul>';
str += '					<ul class="gnb-list add2">';
//str += '						<li><a href="http://tour.interpark.com/mall/gonggu/2_2.aspx?cate=140&mbn=' + strMain + '&mln=main_menupkg11">공동구매 캐쉬백</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1587&mbn=' + strMain + '&mln=main_menupkg14">가이드오픈팩</a></li>';
//str += '						<li><a href="http://tour.interpark.com/themetour?mbn=' + strMain + '&mln=main_menupkg12">먹go찍go</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1588&mbn=' + strMain + '&mln=main_menupkg15">원데이프리팩</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1589&mbn=' + strMain + '&mln=main_menupkg16">몽땅포함팩</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1590&mbn=' + strMain + '&mln=main_menupkg13">홈쇼핑히트 상품</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1381&mbn=' + strMain + '&mln=main_menupkg8">허니문</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=30&mbn=' + strMain + '&mln=main_menupkg17">골프</a><img src="http://openimage.interpark.com/tourpark/tour/common/docu_head/icon_new.gif" alt="NEW" class="icon" /></li>';
str += '					    <li id="subMenu_23" class="ad-banner"></li>';
str += '					</ul>';
str += '				</div>';

str += '				<h3 class="h3-tit none"><a href="http://eurail.interpark.com/ASPX/EurailProducts/EurailProducts.aspx?SID=ITP01-02&mbn=' + strMain + '&mln=tour_eurail"><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb1_06.gif" alt="해외 유레일" /></a></h3>';

str += '			</div>';
str += '			<!-- 국내여행 -->';

str += '			<div id="divHeaderMenu2" class="gnb-module add2">';
str += '				<h2><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb2_tit.gif" alt="인터파크 국내 여행" /></h2>';
str += '				<h3 name="mainMenu" class="h3-tit"><a href="http://tour.interpark.com/airticket/domestic/main.aspx?mbn=' + strMain + '&mln=tour_Dair" onMouseOver="show_glayer(\'_cat_sub08\',5);" onMouseOut="hide_glayer(\'_cat_sub08\');" onfocus="show_glayer(\'_cat_sub08\',5);"><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb2_01.gif" alt="항공"/></a></h3>';
str += '				<div class="gnb-spot add1 on" id="_cat_sub08" style="display: none;" onMouseOver="show_glayer(\'_cat_sub08\',5);" onMouseOut="hide_glayer(\'_cat_sub08\');">';
str += '					<ul class="gnb-list add1">';
str += '						<li><a href="javascript:ShowDomAirReserveWithParam(\'mbn=' + strMain + '&mln=main_menuDair1\');">국내 항공 원스탑 예약</a></li>';
str += '						<li><a href="http://tour.interpark.com/airticket/domestic/main.aspx?mbn=' + strMain + '&mln=main_menuDair2">땡처리 할인 항공권</a></li>';
str += '						<li><a href="http://tour.interpark.com/freeya/jeju/intro.aspx?mbn=' + strMain + '&mln=main_menuDair3">제주 여행만들기</a></li>';
str += '						<li><a href="http://tour.interpark.com/rentcar?mbn=' + strMain + '&mln=main_menuDair4">제주 렌트카</a></li>';
str += '					</ul>';
str += '					<ul class="gnb-list add2">';
str += '					    <li id="subMenu_24" class="ad-banner"></li>';
str += '					</ul>';
str += '				</div>';

str += '				<h3 name="mainMenu" class="h3-tit"><a href="http://tour.interpark.com/housing/category/Hotel_Main.aspx?mbn=' + strMain + '&mln=tour_Dhotel" onMouseOver="show_glayer(\'_cat_sub09\',6);" onMouseOut="hide_glayer(\'_cat_sub09\');" onfocus="show_glayer(\'_cat_sub09\',6);">';
str += '				    <img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb2_02.gif" alt="호텔" /></a></h3>';
str += '				<div class="gnb-spot add2" id="_cat_sub09" style="display: none;" onMouseOver="show_glayer(\'_cat_sub09\',6);" onMouseOut="hide_glayer(\'_cat_sub09\');">';
str += '					<ul class="gnb-list add1">';
str += '						<li>편의형 ';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=020&CateCD=291&mbn=' + strMain + '&mln=main_menuDhotel1">레지던스</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=021&CateCD=293&mbn=' + strMain + '&mln=main_menuDhotel2">비즈니스</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=030&CateCD=295&mbn=' + strMain + '&mln=main_menuDhotel3">인천공항</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=038&CateCD=299&mbn=' + strMain + '&mln=main_menuDhotel4">베니키아호텔</a></li>';//<img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/icon_new.gif" alt="NEW" class="icon" />
str += '							</ul>';
str += '						</li>';
str += '						<li>테마형';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=032&CateCD=296&mbn=' + strMain + '&mln=main_menuDhotel5">제주 추천숙박</a></li>';
//str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=033&CateCD=297&mbn=' + strMain + '&mln=main_menuDhotel6">스파&amp;테라피/레스토랑</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=033&CateCD=297&mbn=' + strMain + '&mln=main_menuDhotel6">호텔스파&amp;테라피</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=040&CateCD=297&mbn=' + strMain + '&mln=main_menuDhotel15">레스토랑식사권</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=039&CateCD=299&mbn=' + strMain + '&mln=main_menuDhotel7">오토캠핑&amp;카라반</a></li>';

str += '								<li><a href="http://www.bnbhero.com/ko/korea" target="_blank" >게스트하우스[제휴]</a></li>';
//str += '								<li><a href="http://www.bnbhero.com/partner/list?partner_code=ASKOR000010C" target="_blank" >게스트하우스[제휴]</a></li>';

str += '							</ul>';
str += '						</li>';
str += '						<li><a href="#">관광 서비스</a>';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=036&CateCD=298&mbn=' + strMain + '&mln=main_menuDhotel8">관광지 입장권</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=037&CateCD=298&mbn=' + strMain + '&mln=main_menuDhotel9">워터파크/레저/스포츠</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=035&CateCD=299&mbn=' + strMain + '&mln=main_menuDhotel10">관광 유람선/크루즈</a></li>';
str += '							</ul>';
str += '						</li>';
str += '					</ul>';
str += '					<ul class="gnb-list add2">';
str += '						<li>고객 서비스';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/SpecialList.aspx?TYPE=SALE&mbn=' + strMain + '&mln=main_menuDhotel11">특가 숙박지</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/SpecialList.aspx?TYPE=24HOUR&mbn=' + strMain + '&mln=main_menuDhotel12">24시간실시간 예약</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/SpecialList.aspx?TYPE=New&mbn=' + strMain + '&mln=main_menuDhotel13">신규 숙박지</a></li>';
str += '					            <li id="subMenu_25" class="ad-banner"></li>';
str += '							</ul>';
str += '						</li>';
str += '					</ul>';
str += '				</div>';

str += '				<h3 name="mainMenu" class="h3-tit"><a href="http://tour.interpark.com/housing/category/Condo_Main.aspx?mbn=' + strMain + '&mln=tour_condo" onMouseOver="show_glayer(\'_cat_sub10\',7);" onMouseOut="hide_glayer(\'_cat_sub10\');" onfocus="show_glayer(\'_cat_sub10\',7);">';
str += '				    <img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb2_03_resort.gif" alt="리조트" /></a></h3>';
str += '				<div class="gnb-spot add3" id="_cat_sub10" style="display: none;" onMouseOver="show_glayer(\'_cat_sub10\',7);" onMouseOut="hide_glayer(\'_cat_sub10\');">';
str += '					<ul class="gnb-list add1">';
str += '						<li>리조트 ';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD001&mbn=' + strMain + '&mln=main_menucon1">지역별 리조트</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Information/Condo_Chain_Master.aspx?Type=CHAIN&chainCD=01&mbn=' + strMain + '&mln=main_menucon2">체인별 리조트</a></li>';
str += '							</ul>';
str += '						</li>';
str += '						<li>테마형';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=5893&mbn=' + strMain + '&mln=main_menucon3">온천&amp;스파 숙소</a></li>';
str += '								<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=5517&mbn=' + strMain + '&mln=main_menucon4">리조트형펜션</a></li>';//<img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/icon_new.gif" alt="NEW" class="icon" />
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=039&CateCD=299&mbn=' + strMain + '&mln=main_menucon5">오토캠핑&amp;카라반</a></li>';
str += '							</ul>';
str += '						</li>';
str += '					</ul>';
str += '					<ul class="gnb-list add2">';
str += '						<li>스페셜';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD008&mbn=' + strMain + '&mln=main_menucon6">제주 Special</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/Special_List.aspx?TYPE=SALE&PV=&DS=&Level=00&StartDT=&EndDT=&PageSize=30&View=&Flag=C&Order=&mbn=' + strMain + '&mln=main_menucon7">특가 리조트</a></li>';                                                     
str += '								<li><a href="http://tour.interpark.com/housing/Search/Weekend_List.aspx?type=THISFRIDAY&Flag=C&mbn=' + strMain + '&mln=main_menucon8">주말 예약</a></li>';
str += '					            <li id="subMenu_26" class="ad-banner"></li>';
str += '							</ul>';
str += '						</li>';
str += '					</ul>';
str += '				</div>';
str += '				<h3 name="mainMenu" class="h3-tit"><a href="http://tour.interpark.com/housing/Category/Pension_Main.aspx?HousingTypefirst=P&mbn=' + strMain + '&mln=tour_pension" onMouseOver="CloseAllMenuLayers();show_glayer(\'_cat_sub11\',8);" onMouseOut="hide_glayer(\'_cat_sub11\');" onfocus="show_glayer(\'_cat_sub11\',8);">';
str += '					<img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb2_04.gif" alt="펜션" /></a></h3>';
str += '				<div class="gnb-spot add4" id="_cat_sub11" style="display: none;" onMouseOver="show_glayer(\'_cat_sub11\',8);" onMouseOut="hide_glayer(\'_cat_sub11\');">';
str += '					<ul class="gnb-list add1">';
str += '						<li>테마별 ';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=2802&region=008&mbn=' + strMain + '&mln=main_menupen1">베스트 추천 펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=6673&mbn=' + strMain + '&mln=main_menupen2">스파/월풀 펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/Theme_List.aspx?Type=AA011&Flag=P&HousingTypefirst=P&mbn=' + strMain + '&mln=main_menupen3">스키장 펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=4750&region=008&mbn=' + strMain + '&mln=main_menupen4">독채 펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=5517&mbn=' + strMain + '&mln=main_menupen5">리조트형 펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=039&CateCD=299&mbn=' + strMain + '&mln=main_menupen6">오토캠핑&amp;카라반</a></li>';
str += '							</ul>';
str += '						</li>';
str += '						<li>스페셜';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/Special_List.aspx?Type=SALE&Flag=P&HousingTypefirst=P&mbn=' + strMain + '&mln=main_menupen7">특가 펜션</a></li>';//<img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/icon_new.gif" alt="NEW" class="icon" />
str += '								<li><a href="http://tour.interpark.com/housing/Search/Weekend_List.aspx?type=THISFRIDAY&flag=P&mbn=' + strMain + '&mln=main_menupen8">주말 예약</a></li>';
str += '							</ul>';
str += '						</li>';
str += '					</ul>';
str += '					<ul class="gnb-list add2">';
str += '						<li>지역별 펜션';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC008&mbn=' + strMain + '&mln=main_menupen9">가평/양평 펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=2039&mbn=' + strMain + '&mln=main_menupen10">강화도 펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=2808&mbn=' + strMain + '&mln=main_menupen11">거제/남해/경주 펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=2026&mbn=' + strMain + '&mln=main_menupen12">안면도 펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC004&mbn=' + strMain + '&mln=main_menupen13">강원도 펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=7037&list=&Region=008&PageNum=1&mbn=' + strMain + '&mln=main_menupen14" >제주도 펜션</a></li>';
str += '					            <li id="subMenu_27" class="ad-banner"></li>';
str += '							</ul>';
str += '						</li>';
str += '					</ul>';
str += '				</div>';

str += '				<h3 name="mainMenu" class="h3-tit"><a href="http://tour.interpark.com/jeju/?mbn=' + strMain + '&mln=tour_jeju" onMouseOver="show_glayer(\'_cat_sub12\',9);" onMouseOut="hide_glayer(\'_cat_sub12\');" onfocus="show_glayer(\'_cat_sub12\',9);">';
str += '					<img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb2_05.gif" alt="제주도" /></a></h3>';
str += '				<div class="gnb-spot add5" id="_cat_sub12" style="display: none;" onMouseOver="show_glayer(\'_cat_sub12\',9);" onMouseOut="hide_glayer(\'_cat_sub12\');">';
str += '					<ul class="gnb-list add1">';
str += '						<li>개별 예약 ';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/freeya/jeju/intro.aspx?mbn=' + strMain + '&mln=main_menujeju1">제주 여행만들기</a><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/icon_new.gif" alt="NEW" class="icon" /></li>';
str += '								<li><a href="http://tour.interpark.com/airticket/domestic/main.aspx?mbn=' + strMain + '&mln=main_menujeju2">국내 항공권</a></li>';
//str += '								<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD008&mbn=' + strMain + '&mln=jeju_leftcon">호텔|콘도|펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?PV=A4006&mbn=' + strMain + '&mln=jeju_lefthotel">호텔|</a><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD008&mbn=' + strMain + '&mln=jeju_leftcon">리조트|</a><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC007&mbn=' + strMain + '&mln=jeju_leftpension">펜션</a></li>';
str += '								<li><a href="http://tour.interpark.com/rentcar/?mbn=' + strMain + '&mln=main_menujeju4">제주 렌터카</a></li>';
str += '								<li><a href="http://tour.interpark.com/category/domesticCoupon/main2.aspx?cate=83&mbn=' + strMain + '&mln=main_menujeju11">관광지이용권</a></li>';
str += '							</ul>';
str += '						</li>';
str += '						<li>스페셜 테마';
str += '							<ul>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=032&CateCD=296&mbn=' + strMain + '&mln=main_menujeju3">제주 추천 숙박</a></li>';
str += '								<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=040&CateCD=297&mbn=' + strMain + '&mln=main_menujeju12">레스토랑 식사권</a></li>';
str += '							</ul>';
str += '						</li>';
str += '					</ul>';
str += '					<ul class="gnb-list add2">';
str += '						<li>패키지 예약';
str += '							<ul>';
//str += '								<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=838&mbn=' + strMain + '&mln=main_menujeju9">10월 황금연휴</a></li>';
str += '								<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=838&mbn=' + strMain + '&mln=main_menujeju13">2015년 설날연휴</a><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/icon_new.gif" alt="NEW" class="icon" /></li>';
str += '								<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=677&mbn=' + strMain + '&mln=main_menujeju7">에어텔/에어카텔</a></li>';
str += '								<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=678&mbn=' + strMain + '&mln=main_menujeju8">카텔</a></li>';
str += '								<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=676&mbn=' + strMain + '&mln=main_menujeju6">관광 패키지</a></li>';
str += '								<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=681&mbn=' + strMain + '&mln=main_menujeju10">제주 골프</a></li>';
str += '					            <li id="subMenu_28" class="ad-banner"></li>';
str += '							</ul>';
str += '						</li>';
str += '					</ul>';
str += '				</div>';

str += '				<h3 name="mainMenu" class="h3-tit"><a href="http://tour.interpark.com/domestic/?mbn=' + strMain + '&mln=tour_domestic" onMouseOver="show_glayer(\'_cat_sub13\',10);" onMouseOut="hide_glayer(\'_cat_sub13\');" onfocus="show_glayer(\'_cat_sub13\',10);">';
str += '					<img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/gnb2_06.gif" alt="내륙테마" /></a></h3>';
str += '				<div class="gnb-spot add6" id="_cat_sub13" style="display: none;" onMouseOver="show_glayer(\'_cat_sub13\',10);" onMouseOut="hide_glayer(\'_cat_sub13\');" >';
str += '					<ul class="gnb-list add1">';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=76&mbn=' + strMain + '&mln=main_menudomestic1">버스 여행</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=416&mbn=' + strMain + '&mln=main_menudomestic2">기차 여행</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=963&mbn=' + strMain + '&mln=main_menudomestic3">섬 여행</a></li>';
//str += '						<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1473&mbn=' + strMain + '&mln=main_menudomestic4">여름 바캉스</a></li>';
str += '						<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1473&mbn=' + strMain + '&mln=main_menudomestic4">겨울 눈꽃여행</a></li>';
str += '						<li><a id="finalLi" href="http://tour.interpark.com/domestic/weekend.aspx?cate=685&mbn=' + strMain + '&mln=main_menudomestic5">금주 출발 확정</a></li>';
str += '					</ul>';
str += '					<ul class="gnb-list add2" >';
str += '					    <li id="subMenu_29" class="ad-banner"></li>';
str += '					</ul>';
str += '				</div>';

str += '			</div>';
str += '		</div>';
str += '	</div>';
str += '</div>';
//str += '<hr class="access" />';

str = replaceSSLUrl(str);

document.write(str);

//롤링시작
AddWindowEvent(rollGNBImg);
AddWindowEvent(rollSearchText);

SetLoginMemberInfo();

}

function SetLoginMemberInfo()
{
    if (getLoginYN() != "Y" && getAutoLoginYN() != "Y" && hasAlKey() != "Y") return;
    
    var script = document.createElement('script');
    script.src = '//tour.interpark.com/exporter/member/Gate.aspx?method=GetMemberName'
    document.getElementsByTagName('head')[0].appendChild(script);    
}

var divLoginInfoID = "";
function SetLoginMemberName(obj)
{
    var li = document.getElementById("liLoginStatus");
    var alink = document.getElementById("aLoginMember");
    var loginType = obj.loginType;
    var memberName = obj.memberName;
    
    if(loginType == "real" && memberName != "")
    {
        li.className = "first logon";
        divLoginInfoID = "divRealLoginInfo";
    }
    else if(loginType == "auto" && memberName != "")
    {
        li.className = "first logon-on";
        divLoginInfoID = "divAutoLoginInfo";
    }
    else
    {
        var liStatus = document.getElementById("liLoginMemberInfo");
        
        li.innerHTML = "<a id=\"aMemberName\" href=\"javascript:goLoginGN();\">로그인</a>";
        liStatus.innerHTML = "<a href=\"https://incorp.interpark.com/member/memberjoinclause.do?_method=initial&reqSite=TOUR&mbn=" + strMain + "&mln=main_join\">회원가입</a>";
//        liStatus.innerHTML = "<a href=\"https://incorp.interpark.com/member/memberjoinclause.do?_method=initial&reqSite=TOUR&mbn=tour&mln=main_join\">회원가입</a>";
    }
    
    

    if((loginType == "real" || loginType == "auto") && memberName != "")
    {
        alink.setAttribute("href", "javascript:void(0);");
        alink.innerHTML = memberName + "님 <strong>on</strong>";
    }
}

function ShowLoginMemberStatus(type)
{
    var objLoginInfo = document.getElementById(divLoginInfoID);
    
    if(objLoginInfo)
    {
        if (type == "on")
            document.getElementById(divLoginInfoID).style.display = "";
        else if (type == "off")
            document.getElementById(divLoginInfoID).style.display = "none";
    }
}

function replaceSSLUrl(str)
{
    var openServerPrefix = "http://openimage.interpark.com";
    var sslServerPrefix = "https://sslimage.interpark.com";

    if (isHTTPS) {
        while (str.indexOf(openServerPrefix) != -1) {
            str = str.replace(openServerPrefix, sslServerPrefix);
        }
    }
    return str;
}

function replaceSSLHttps(str)
{
    var openServerPrefix = "http://";
    var sslServerPrefix = "https://";
    if(isHTTPS) {
        while (str.indexOf(openServerPrefix) != -1) {
            str = str.replace(openServerPrefix, sslServerPrefix);
        }
    }
    return str;
}

function getMorningCoffeeImage()
{
    var dg_date = new Date();
	var dg_year = dg_date.getFullYear();
	var dg_month = (dg_date.getMonth() + 1);
	if(dg_month < 10) {
		dg_month = '0' + dg_month.toString();
	}

	var dg_day = dg_date.getDate();
	var dg_hour = dg_date.getHours();
	if(dg_hour < 9) {
		dg_day = dg_day - 1;
		if(dg_day == 0) {
			dg_month = parseInt(dg_month) - 1;
			dg_month = '0' + dg_month.toString();
			if((dg_month == '01') || (dg_month == '03') || (dg_month == '05') || (dg_month == '07') || (dg_month == '08') || (dg_month == '10') || (dg_month == '12')) {
				dg_day = 31;
			} else {
				dg_day = 30;
				if((dg_month == '02') && (dg_year % 4) != 0) {
					dg_day = 28;
				} if((dg_month == '02') && (dg_year % 4) == 0) {
					dg_day = 29;
				}
			}
		}
	}

	if(dg_day < 10) {
		dg_day = '0' + dg_day.toString();
	}
	
	var image_href = 'http://openimage.interpark.com/_nip_ui/category_shopping/shopping_morningcoffee/gatewaybar/' + (dg_year.toString() + dg_month.toString() + dg_day.toString()) + '.jpg';
	return image_href;
}

/*GNB통합검색-------------------------------------------------------------------------*/

//var searchAdStr = "";
//var searchAdUrl = "";
var searchAdStr = new Array();
var searchAdUrl = new Array();
var searchStats = false;
var searchTxtStats = false; //검색박스 입력 상태
var searchCount = 0;
var eventKeyUpInterval;

//검색박스에 입력 시 롤링 멈추기
//Firefox onKeyUp 이벤트 핸들러 버그에 의한 별도 Interval 생성
var lastEventKeyUpValue = "";
function setFocus(obj, e) {
    if(!(obj.getAttribute("autocomplete") == "off" && obj.value != "" && (lastKeyword == obj.value || typeof HEAD_AREA_QUERY === "string")))
    {
        obj.value='';
        searchTxtStats = true;      
    }

    if(navigator.userAgent.toLowerCase().indexOf("firefox") > -1)
    {
        eventKeyUpInterval = setInterval(function() {            
            if(lastEventKeyUpValue != document.getElementById("SearchGNBText").value) {
                CommonFireEvent(document.getElementById("SearchGNBText"), "keyup");
            }
            lastEventKeyUpValue = document.getElementById("SearchGNBText").value;      
        }, 100);
    }
    
    var searchWordObject = document.getElementById("SearchWord");
    var autoCompleteObject = document.getElementById("AutoComplete");
    
    if(obj.value == "" && searchWordObject.style.display == "none" && autoCompleteObject.style.display == "none") {
        try {
            var scriptElement = document.createElement("script");
            scriptElement.type = "text/javascript";
            scriptElement.src = replaceSSLHttps("http://itis01.interpark.com/Get.aspx?callback=autoCompleteSearchHistory");    

            document.getElementsByTagName("head")[0].appendChild(scriptElement);
        } catch(e) { }
    }
}
//검색박스 포커스 아웃
function setBlur(obj) {
    //검색어 입력 안 한 상태면 다시 롤링
    if(obj.value=='')   {
        searchTxtStats = false;
        searchStats = false
    }
    clearInterval(eventKeyUpInterval);
}


function SearchRoll(rollNum){
	if (searchAdStr){
		var searchText = document.getElementById('SearchGNBText');
		var searchUrl = document.getElementById('SearchGNBUrl');
		
		searchText.value = searchAdStr[rollNum];
		searchUrl.value = searchAdUrl[rollNum];
	}
}

function rollSearchText(){

	var interval = '3000';
	
	if(document.getElementById('SearchGNBText')){
		var searchText = document.getElementById('SearchGNBText');
		
		searchText.onmouseover = function (){
			searchStats = true;
		}
		searchText.onmouseout = function (){
		    if(!searchTxtStats)
			    searchStats = false;
		}
		
		if (searchAdStr.length > 1) {
		    setInterval(function(){
			    if (!searchStats && !searchTxtStats){
				    searchCount++;
				    if (searchCount == searchAdStr.length){
					    searchCount = 0;
				    }
				    SearchRoll(searchCount);
			    }
		    }, interval);
		}
	}
}

function SearchGNBArea(type)
{
    var url = '';
	var goUrl = 'http://tour.interpark.com/search/search.aspx';
	var searchStr = document.getElementById("SearchGNBText").value;
	var searchUrl = document.getElementById("SearchGNBUrl").value;
	var searchYN = 'N';
	
	if (searchStr == "") {
	    alert("검색어를 입력하세요.");
		document.getElementById("SearchGNBText").focus();
	} 
	else {
        if(typeof HEAD_AREA_QUERY === "string")
	    {
    	    if(HEAD_AREA_QUERY == searchStr) return;
	    }
	    
	    document.getElementById("SearchGNBText").blur();
	    
	    for(var i = 0; i < searchAdStr.length; i++)
	    {
	        if (searchStr == getReplaceStr(searchAdStr[i]))
	        {
		        url = searchAdUrl[i];
		        searchYN = 'Y';
		        break;
		    }
	    }
	    
	    if(searchYN == 'N')
	    {
	        url = goUrl + '?q=' + encodeURIComponent(searchStr);
            if(typeof type != "undefined" && type == "Y")
	        {
	            url = url + "&referrer=autocomlete";
	        }
	    }	    
    	
	    document.location = url;

	}
}

/*GNB서브메뉴-------------------------------------------------------------------------*/

//function show_glayer(layer_id) {
//	document.getElementById(layer_id).style.display = "block"
//}

function show_glayer(layer_id, index) {

    CloseAllMenuLayers();
	document.getElementById(layer_id).style.display = "block";
	
//	if(index){MainMenuClassSet(index);}
    if(index != undefined){MainMenuClassSet(index);}
}

function hide_glayer(layer_id) {
    document.getElementById(layer_id).style.display = "none";	
	
	MainMenuClassSet(0);
}

function CloseAllMenuLayers()
{
    hide_glayer('_cat_sub01');
    hide_glayer('_cat_sub02');
    hide_glayer('_cat_sub03');
    hide_glayer('_cat_sub04');
    hide_glayer('_cat_sub08');
    hide_glayer('_cat_sub09');
    hide_glayer('_cat_sub10');
    hide_glayer('_cat_sub11');
    hide_glayer('_cat_sub12');
    hide_glayer('_cat_sub13');        
}

/*GNB롤링배너-------------------------------------------------------------------------*/

var GNBimgs = new Array();
var GNBlinks = new Array();
var GNBstats = false;
var GNBrollImgBlanks = new Array();
var GNBcount = 0;
var GNBInterval;

function GNBroll(rollNum){
	if (GNBimgs){
		var rollImg = document.getElementById('rollGNBImg');
		
		rollImg.src = GNBimgs[rollNum];
		rollImg.parentNode.href = GNBlinks[rollNum];
		
		if (GNBrollImgBlanks[rollNum] != null) {
		    rollImg.parentNode.target = GNBrollImgBlanks[rollNum];
        }
        
        SetClass(rollNum);
	}
}

function rollGNBImg(){

	var interval = '2500';
	
	if(document.getElementById('rollGNBImg')){
		var rollImg = document.getElementById('rollGNBImg');		
		rollImg.onmouseover = function (){
			GNBstats = true;
		}
		rollImg.onmouseout = function (){
			GNBstats = false;
		}
		
		for(var i=0; i<GNBimgs.length; i++)
		{
		    GNBimgs[i] = replaceSSLUrl(GNBimgs[i]);
		}
		
		if (GNBimgs.length > 1) {
		    GNBInterval = setInterval(function(){
			    if (!GNBstats){
				    GNBcount++;
				    if (GNBcount == GNBimgs.length){
					    GNBcount = 0;
				    }
				    GNBroll(GNBcount);
			    }
		    }, interval);
		}
	}
}

function GNBrollUp(){
    GNBcount--;
    
	if (GNBcount < 0){
		GNBcount = GNBimgs.length - 1;
	}
	GNBroll(GNBcount);
}

function GNBrollDown(){
    GNBcount++;
    
	if (GNBcount >= GNBimgs.length){
		GNBcount = 0;
	}
	GNBroll(GNBcount);
}

/*HOT CLICK-------------------------------------------------------------------------*/
var HotclickTxt = new Array();
var HotclikcLinks = new Array();
function getHotclickStr()
{
    var str = '';
    for(var i=0; i<HotclickTxt.length; i++) {
	    str += '<li ' + ((i==HotclickTxt.length-1) ? 'class="end"' : '') ;
	    str += '><a href="' + HotclikcLinks[i] + '" >' + HotclickTxt[i] + '</a></li>';
	}
	str = '<ul>' + str + '</ul>';
    return str;
}

/*GNB오른쪽배너-------------------------------------------------------------------------*/
function getGNBRBannerStr()
{
    var str = "";
    var reqUrl = location.href.toLowerCase();
    
    // GNB 우측 배너 랜덤 노출
    var imgFile = new Array();
    var linkUrl = new Array();
    var target = new Array();
    imgFile = ['http://openimage.interpark.com/tourpark/tour/Bn/ad/cb_70x80.jpg','http://openimage.interpark.com/tourpark/tour/Bn/ad/guidetour_80x70_131231.jpg','http://openimage.interpark.com//tourpark/tour/Bn/ad/lottedfs_80x70.jpg'];
    linkUrl = ['http://tour.interpark.com/mall/gonggu/2_2.aspx?cate=140','http://tour.interpark.com/mall/html/GuideTour/Audio.aspx?mallcd=92&mbn=tour&mln=main_right_side_2','http://ad50.feeldmc.com/adv.dmc?m=tourinterpark&c=2995&s=9680&a=71991&ac=1'];
    target = ['_self','_self','_blank'];
       
    var viewIndex = Math.floor(Math.random() * imgFile.length);
    
    str += '<a target="' + target[viewIndex] + '" href="' + linkUrl[viewIndex] + '"  ><img src="' + imgFile[viewIndex] + '" width="80" height="70" alt="" align="absmiddle" id="QuickBanImg"/></a>';

    return str;

}

/*param세팅------------------------------------------------------------------------------*/

//검색어
//searchAdStr = [''];
//searchAdUrl = [''];

//HOT CKICK
HotclickTxt = ['땡처리항공권'
              ,'가을 단풍여행 명소추천'
              ,'해외비자신청'
              ,'법인/단체 여행' 
              ];
HotclikcLinks = ['http://tour.interpark.com/airticket/overseas/main.aspx?mbn=tour&mln=main_hotclick1'
                ,'http://tour.interpark.com/event/event_view.aspx?seq=5816&mbn=tour&mln=main_hotclick3'
                ,'http://tour.interpark.com/category/myvisa/main.aspx?mbn=tour&mln=main_hotclick3'
                ,'http://tour.interpark.com/corp/?mbn=tour&mln=main_hotclick4'
                ];
           
//오른쪽 hello 롤링배너
//GNBimgs = ['http://openimage.interpark.com/tourpark/tour/Bn/main/helloBn_131101.jpg','http://openimage.interpark.com/tourpark/tour/Bn/main/helloBn_131031.jpg'];
//GNBlinks = ['http://tour.interpark.com/mall/gonggu/2_2.aspx?cate=140&mbn=tour&mln=ci_side01','http://tour.interpark.com/event/event_view.aspx?seq=5756&mbn=tour&mln=ci_side02'];
//GNBrollImgBlanks = ['_self','_blank'];
_writeGNBArea(); 

/* 통합검색 신규 영역 :: Start */
var isAutoComplete = false;
var isDisableAutoComplete = false;
var lastKeyword = "";
var onSelectAutoCompleteResult = new Array();
var isSelectAutoCompleteResult = 0;

var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

function CommonFireEvent(el, evt) { 
    if(document.createEventObject) { var evtEl = document.createEventObject(); return el.fireEvent('on' + evt, evtEl); }
    else { var evtEl = document.createEvent("HTMLEvents"); evtEl.initEvent(evt, true, true); return !el.dispatchEvent(evtEl) };
}

if(typeof document.body.onclick != "undefined") {
    document.body.onclick = function(evt) {
        var targetHtml = evt ? evt.target.innerHTML : window.event.srcElement.innerHTML;
        
        if(targetHtml != ""
            && (document.getElementById("AutoComplete").style.display == "block" ||
                document.getElementById("SearchWord").style.display == "block"
            )
            && document.getElementById("SearchGNBText").getAttribute("autocomplete") == "on"
            && document.getElementById("AutoComplete").innerHTML.indexOf(targetHtml) <= 0 
            && document.getElementById("SearchGNBFrom").innerHTML.indexOf(targetHtml) <= 0)
        {
            CommonSearchHideLayer();
        }
    }
}
function CommonSearchHideLayer()
{
    document.getElementById("AutoComplete").style.display = "none";
    document.getElementById("AutoComplete").innerHTML = "";
    document.getElementById("SearchWord").style.display = "none";
    document.getElementById("SearchGNBText").setAttribute("autocomplete", "off");
    document.getElementById("toggleAutoCompleteButton").src = replaceSSLUrl("http://openimage.interpark.com//tourpark/tour/tourlink/nh/icon_down.gif");
    isSelectAutoCompleteResult = 0;
}
function onAutoComplete()
{
    isDisableAutoComplete = false;
    if(document.getElementById("SearchGNBText").value != "") {
        CommonFireEvent(document.getElementById("SearchGNBText"), "keyup");
    } else if(document.getElementById("AutoComplete").style.display == "none") {
        try {
            var scriptElement = document.createElement("script");
            scriptElement.type = "text/javascript";
            scriptElement.src = replaceSSLHttps("http://itis01.interpark.com/Get.aspx?callback=autoCompleteSearchHistory");    

            document.getElementsByTagName("head")[0].appendChild(scriptElement);
        } catch(e) { }
    }
}
function offAutoComplete()
{
    isDisableAutoComplete = true; 
    CommonSearchHideLayer();
}
function toggleAutoComplete()
{
    if(isDisableAutoComplete) onAutoComplete();
    else offAutoComplete();
}

function onCommonSearchKeyboardHandler(keyCode, e)
{    
    if(document.getElementById("AutoComplete").style.display == "block"
        && document.getElementById("SearchGNBText").getAttribute("autocomplete") == "on"
        && (keyCode == 38 || keyCode == 40 || keyCode == 13 || keyCode == 27))
    {
        if(keyCode == 38 && !isFirefox)
        {            
            if(isSelectAutoCompleteResult == 0 || isSelectAutoCompleteResult == 1) {
                document.getElementById("SearchGNBText").value = "";
                CommonSearchHideLayer();
                e.returnValue = false; 
                return;
            }
            for(var i = 0; i < onSelectAutoCompleteResult.length; i++) onSelectAutoCompleteResult[i].className = "off";
            document.getElementById("SearchGNBText").value = onSelectAutoCompleteResult[(isSelectAutoCompleteResult - 1)].getAttribute("data");
            CommonFireEvent(onSelectAutoCompleteResult[isSelectAutoCompleteResult - 1], "mouseover");
            document.getElementById("SearchGNBText").focus();
        }
        else if(keyCode == 40 && !isFirefox && onSelectAutoCompleteResult.length - 1 > isSelectAutoCompleteResult)
        {   
            if(onSelectAutoCompleteResult[onSelectAutoCompleteResult.length - 1].getAttribute("class") == "on") {e.returnValue = false; return;}
            for(var i = 0; i < onSelectAutoCompleteResult.length; i++) onSelectAutoCompleteResult[i].className = "off";
            document.getElementById("SearchGNBText").value = onSelectAutoCompleteResult[(isSelectAutoCompleteResult + 1)].getAttribute("data");
            CommonFireEvent(onSelectAutoCompleteResult[(isSelectAutoCompleteResult + 1)], "mouseover");
            document.getElementById("SearchGNBText").focus();
        }
        else if(keyCode == 13)
        {            
            if(isSelectAutoCompleteResult == 0) SearchGNBArea("N");
            else {
                var tObject = document.getElementById("AutoCompleteGoURL");
                if(tObject && tObject.getAttribute("type") == "goods") location.href = tObject.href;
                else SearchGNBArea("Y");
            }
            CommonSearchHideLayer();
        }
        else if(keyCode == 27) CommonSearchHideLayer();
    }
    else
    {
        if(keyCode == 13)
        {            
            SearchGNBArea("N");
        }
        else if((keyCode == 8 || keyCode == 48) && document.getElementById("SearchGNBText").value == "" &&  document.getElementById("AutoComplete").style.display == "none") {
            try {
                var scriptElement = document.createElement("script");
                scriptElement.type = "text/javascript";
                scriptElement.src = replaceSSLHttps("http://itis01.interpark.com/Get.aspx?callback=autoCompleteSearchHistory");    

                document.getElementsByTagName("head")[0].appendChild(scriptElement);
            } catch(e) { }
        }
    }
}

function onCommonSearchAutoComplte(obj, e)
{    
    //기존 Form 방식의 핸들러를 오직 이곳으로만 처리함.(키보드 처리)
    var keyCode = typeof e === "undefined" ? 0 : (typeof e.which != "undefined" ? e.which : e.keyCode);  
    if(keyCode == 38 || keyCode == 40 || keyCode == 13 || keyCode == 27 || keyCode == 8 || keyCode == 46)
    {
        onCommonSearchKeyboardHandler(keyCode, typeof e != "undefined" ? e : window.event);
        return;
    }
    else if(keyCode == 39 || keyCode == 37)
    {
        return;
    }
    
    //자동완성 기능 끄기로 닫은경우 막기
    if(isDisableAutoComplete) return;
    
    if(isAutoComplete) return;
    isAutoComplete = true;
    document.getElementById("SearchGNBText").setAttribute("autocomplete", "on");
    
    var searchKey = CommonSearchTrim(obj.value);
    var autoCompleteObject = document.getElementById("AutoComplete");
    autoCompleteObject.innerHTML = "";
    autoCompleteObject.style.display = "none";
    if(getStringBytes(CommonSearchTrim(searchKey)) <= 0 || !CommonSearchLastCharacter(searchKey)) {           
        isAutoComplete = false;
        return;
    }
    
    lastKeyword = searchKey;
    
    var scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.src = replaceSSLHttps("http://toursearch.interpark.com/WS/Suggest.aspx?callback=onCommonSearchAutoComplteCallback&query=") + encodeURIComponent(searchKey);    

    document.getElementsByTagName("head")[0].appendChild(scriptElement);
}
function onCommonSearchAutoComplteCallback(queryKey, GData, CData, korOrEng)
{
    var autoCompleteObject = document.getElementById("AutoComplete");    
    onSelectAutoCompleteResult = new Array();
    onSelectAutoCompleteResult.push(document.createElement("li"));
    
    if(parseInt(GData.docs.ret.totalhits, 10) > 0 || parseInt(CData.docs.ret.totalhits, 10) > 0)
    {
        var h1Element = document.createElement("h1");
        h1Element.innerHTML = "자동완성";
        autoCompleteObject.appendChild(h1Element);
        
        var divListGElement = document.createElement("div")
        divListGElement.className = "list-module01";
        
        var divListDElement = document.createElement("div");
        divListDElement.className = "view-module02";
        
        var fistRightContent = document.createElement("div");
        fistRightContent.setAttribute("id", "AutoCompleteRightContent");
        
        var GCount = 0;
        var ulGListElement = document.createElement("ul");
        ulGListElement.className = "data-list";
        CommonSearchEach(GData.docs.doc, function(i, doc) {
            var liElement = document.createElement("li"); 
            liElement.style.cursor = "pointer";
                        
            if (korOrEng == "True"){
                liElement.setAttribute("data", doc.korgoodsname);
            } else {
                liElement.setAttribute("data", doc.enggoodsname);
            }                        
            // ------ liElement.setAttribute("data", doc.goodsname);
            
            var aElement = document.createElement("a");
            
            if (korOrEng == "True"){
                aElement.setAttribute("data", doc.korgoodsname);
            } else {
                aElement.setAttribute("data", doc.enggoodsname);
            }            
            // ------ aElement.setAttribute("data", doc.goodsname);
            
            aElement.setAttribute("href", "javascript:;");
            //이벤트 바인딩
            liElement.onclick = function() {
                
                if (korOrEng == "True"){
                    document.getElementById("SearchGNBText").value = doc.korgoodsname; 
                } else {
                    document.getElementById("SearchGNBText").value = doc.enggoodsname; 
                }
                // ------ document.getElementById("SearchGNBText").value = doc.goodsname; 
                                
                SearchGNBArea("Y");
            }
            liElement.onmouseover = function() {
                var obj = document.getElementById("AutoCompleteRightContent");
                obj.innerHTML = "";
                obj.appendChild(setRightContentBind(queryKey, doc));
                for(var j = 0; j < onSelectAutoCompleteResult.length; j++) onSelectAutoCompleteResult[j].className = "off";
                this.className = "on";                
                isSelectAutoCompleteResult = i + 1;
            }
            onSelectAutoCompleteResult.push(liElement);
            //첫번째 데이타로 우측 상세 바인딩
            if(i == 0) {
                fistRightContent.appendChild(setRightContentBind(queryKey, doc));                
            }
            
            if (korOrEng == "True"){
                aElement.innerHTML += setAutoCompleteHighlight(queryKey, doc.korgoodsname);
            } else {
                aElement.innerHTML += setAutoCompleteHighlight(queryKey, doc.enggoodsname);
            }
            // ------ aElement.innerHTML += setAutoCompleteHighlight(queryKey, doc.goodsname);
            
            liElement.appendChild(aElement);
            ulGListElement.appendChild(liElement);
            
            GCount = GCount + 1;
        }, function() {
            if(GCount > 0) divListGElement.appendChild(ulGListElement);
        });
        
        var CCount = 0;
        var ulCListElement = document.createElement("ul");
        ulCListElement.className = "data-list add01";
        CommonSearchEach(CData.docs.doc, function(i, doc) {
            var hrefURL = doc.depth3text == "" ? doc.depth2url : doc.depth3url;
            hrefURL = hrefURL + (hrefURL.indexOf('?') > -1 ? "&" : "?") + "mbn=tour&mln=tsearch_total1"
            var liElement = document.createElement("li");            
            liElement.style.cursor = "pointer";
            liElement.setAttribute("data", doc.depth3text == "" ? doc.depth2text : doc.depth3text);
            var aElement = document.createElement("a");
            aElement.setAttribute("href", hrefURL);
            aElement.setAttribute("target", "_self");
            //이벤트 바인딩
            liElement.onclick = function() {
                location.href = hrefURL;
            }
            liElement.onmouseover = function() {
                var obj = document.getElementById("AutoCompleteRightContent");
                obj.innerHTML = "";
                obj.appendChild(setRightContentBind(queryKey, doc));
                for(var j = 0; j < onSelectAutoCompleteResult.length; j++) onSelectAutoCompleteResult[j].className = "off";
                this.className = "on";
                isSelectAutoCompleteResult = GCount + i + 1;
            }
            onSelectAutoCompleteResult.push(liElement);
            aElement.innerHTML = doc.navitext + "<span> > </span>";
            aElement.innerHTML += doc.depth3text == "" ? setAutoCompleteHighlight(queryKey, doc.depth2text) : setAutoCompleteHighlight(queryKey, doc.depth3text);
            liElement.appendChild(aElement);
            ulCListElement.appendChild(liElement);
            CCount = CCount + 1;
            
        }, function() {
            if(CCount > 0) {
                var h2Element = document.createElement("h2");
                h2Element.className = "tit";
                h2Element.innerHTML = "카테고리검색";
                divListGElement.appendChild(h2Element);
                divListGElement.appendChild(ulCListElement);
            }
        });
        
        //우측 상세 영역 바인딩
        divListDElement.appendChild(fistRightContent);
        {
            var spanElement = document.createElement("span");
            spanElement.className = "fun-off";
            var arrElement = new Array();
            arrElement.push('<input type="checkbox" id="AutoCompleteOnOff" class="input-check" onmouseover="document.getElementById(\'AutoCompleteToolTip\').style.display = \'block\';" onmouseout="document.getElementById(\'AutoCompleteToolTip\').style.display = \'none\';" onclick="offAutoComplete();" />');
            arrElement.push('<label for="AutoCompleteOnOff" onmouseover="document.getElementById(\'AutoCompleteToolTip\').style.display = \'block\';" onmouseout="document.getElementById(\'AutoCompleteToolTip\').style.display = \'none\';">자동완성 기능 끄기</label>');
            arrElement.push('<img src="' + replaceSSLUrl("http://openimage.interpark.com/tourpark/tour/search/help_tooltip.gif") + '" id="AutoCompleteToolTip" alt="기능을 다시 사용하실 때는 상단쪽 검색영역을 클릭하세요." class="tool-tip"/>');
            spanElement.innerHTML = arrElement.join('');
            divListDElement.appendChild(spanElement);
        }
        
        autoCompleteObject.appendChild(divListGElement);
        autoCompleteObject.appendChild(divListDElement);
        autoCompleteObject.style.display = "block";
        document.getElementById("toggleAutoCompleteButton").src = replaceSSLUrl("http://openimage.interpark.com//tourpark/tour/tourlink/nh/icon_up.gif");
        
        var searchWordObject = document.getElementById("SearchWord");
        if(searchWordObject.style.display != "none" || searchWordObject.innerHTML != "") {
            searchWordObject.style.display = "none";
            searchWordObject.innerHTML = "";
        }
    }
    isAutoComplete = false;
}

function setRightContentBind(queryKey, data)
{
    var divElement = document.createElement("div");
    {
        var ulElement = document.createElement("ul");
        ulElement.className = "pro-list";
        {
            var liElement = document.createElement("li");
            liElement.className = "on";
            //카테고리검색 영역 :: START
            if(typeof data.categorycode1 === "undefined" && data.navitext)
            {
                var spanElement = document.createElement("span");
                spanElement.className = "on con";                
                var arrElement = new Array();
                arrElement.push('검색된 카테고리를');
                arrElement.push('<br/>');
                arrElement.push('선택하시면');
                arrElement.push('<br/>');
                arrElement.push('<a href="' + (data.depth3text == "" ? data.depth2url : data.depth3url) + '">');
                arrElement.push('<strong>' + data.navitext + '<span> > </span>' + (data.depth3text == "" ? data.depth2text : data.depth3text) + '</strong>');
                arrElement.push('</a>');
                arrElement.push('<br/>');
                arrElement.push('상품리스트로 바로');                
                arrElement.push('<br/>');
                arrElement.push('이동합니다.');
                spanElement.innerHTML = arrElement.join('');
                liElement.appendChild(spanElement);
            }
            //카테고리검색 영역 :: END
            //해외호텔, 숙박상품, 여행키워드 전용 영역 :: START
            else
            {
                {   
                    var strongElement = document.createElement("strong");
                    strongElement.className = "tit02";
                    var title01Image = replaceSSLUrl("http://openimage.interpark.com/tourpark/tour/search/tit_goods_" + data.categorycode1 + ".gif");
                    var title02Image = replaceSSLUrl("http://openimage.interpark.com/tourpark/tour/search/tit_recom_pro.gif");
                    var goodsImage = (data.categorycode1 == "O" || data.categorycode1 == "R" || data.categorycode1 == "T") && isHTTPS ? "https://sslimage.interpark.com/tourpark/tour/search/security_img.gif" : replaceSSLHttps(data.imageurl);
                    var noGoodsImage = replaceSSLUrl("http://openimage.interpark.com/tourpark/tour/search/no_img.gif");
                    strongElement.innerHTML = '<img src="' + title01Image + '" alt="' + data.category1 + '" />' + (data.categorycode1 == "R" || data.categorycode1 == "T" ? '<img src="' + title02Image + '" alt="추천상품" />' : '');
                    liElement.appendChild(strongElement);
                    
                    var spanElement = document.createElement("span");
                    spanElement.className = "photo";                    
                    spanElement.innerHTML = '<a href="' + data.goodsurl + '" target="_self"><img src="' + goodsImage + '" onError="this.src=replaceSSLUrl(\'http://openimage.interpark.com/tourpark/tour/search/no_img.gif\');" alt="' + data.synonym + '"/></a>';
                    liElement.appendChild(spanElement);
                }
                {
                    var spanElement = document.createElement("span");
                    spanElement.className = "sub-tit";
                    var dGoodsName = getStringBytes(data.synonym) > 30 ? getSubstringBytes(data.synonym, 29) + "..." : data.synonym;
                    spanElement.innerHTML = '<a href="' + data.goodsurl + '" title="' + data.synonym + '">' + dGoodsName + '</a>';
                    liElement.appendChild(spanElement);
                }
                {
                    var sulElement = document.createElement("ul");
                    var regionName = data.categorycode1 == "R" || data.categorycode1 == "T" ? data.region2 : data.region1 + " " + data.region2;
                    var dRegionName = getStringBytes(regionName) > 18 ? getSubstringBytes(regionName, 16) + "..." : regionName;
                    var ipointImage = replaceSSLUrl("http://openimage.interpark.com/tourpark/tour/common/icon/icon_ipoint01.gif");
                    
                    var arrElement = new Array();
                    if(dRegionName != "") arrElement.push('<li title="' + regionName + '">지역 : ' + dRegionName + '</li>');
                    //해외호텔상품 전용 영역 :: START
                    if(data.categorycode1 == "O") arrElement.push('<li>등급 : <em>' + data.goodsgrade + ' 등급</em></li>');
                    //해외호텔상품 전용 영역 :: END
                    arrElement.push('<li>가격 : ');
                    arrElement.push('<span class="won"><strong>' + formattedNumber(data.price) + '</strong>원~</span>');                    
                    arrElement.push('<span class="ipoint"><img src="' + ipointImage + '" alt="아이포인트"><strong>' + formattedNumber(parseInt(data.price, 10) * (parseInt(data.porintrate, 10) / 100)) + '</strong>적립</span>');
                    arrElement.push('</li>');
                    sulElement.innerHTML = arrElement.join('');
                    liElement.appendChild(sulElement);
                }
                //해외호텔, 숙박상품, 여행키워드 전용 영역 :: END
            }
            ulElement.appendChild(liElement);
        }
        divElement.appendChild(ulElement);
    }
    {
        var spanElement = document.createElement("span");
        spanElement.className = "btn-area";
        if(typeof data.categorycode1 === "undefined" && data.navitext) spanElement.style.display = "none";
        
        var listType = typeof data.categorycode1 === "undefined" && data.navitext ? "goods" : "search";
        var hrefURL = typeof data.categorycode1 === "undefined" && data.navitext ? (data.depth3text == "" ? data.depth2url : data.depth3url) : data.goodsurl;
        hrefURL = hrefURL + (hrefURL.indexOf('?') > -1 ? "&" : "?") + "mbn=" + strMain + "&mln=tsearch_total1"
        var btnImage = replaceSSLUrl("http://openimage.interpark.com//tourpark/tour/common/button/btn_pro_view01.gif");
        spanElement.innerHTML = '<a id="AutoCompleteGoURL" type="' + listType + '" href="' + hrefURL + '" target="_self"><img src="' + btnImage + '" alt="상품상세보기"/></a>';
        divElement.appendChild(spanElement);
    }
    return divElement;
}

function setAutoCompleteHighlight(searchKey, resultNm)
{   
    return resultNm.split(searchKey).join("<strong>" + searchKey + "</strong>");
}

function getStringBytes(value)
{
    var str = value;
    var nLen = 0;
    for (var i = 0; i < str.length; i++) { nLen += (str.charCodeAt(i) > 128) ? 2 : 1; }
    return nLen;
}
function getSubstringBytes(value, bytes)
{
    var rtnValue = "";
    var j = 0;
    for(var i = 0; j < bytes; i++) { 
        rtnValue += value.charAt(i);
        if(value.charCodeAt(i) > 128) j = j + 2;
        else j = j + 1;
    }
    return rtnValue;
}
/* jQuery.each IE6 Bug로 인해 별도 Each 생성 */
function CommonSearchEach( object, callback, complete ) {
	var name;
	var i = 0;
	var length = undefined;
	try {
	    length = object.length;
	} catch(e) { }
	
	var isObj = length === undefined || typeof object === "function";

	if ( isObj ) {
		for ( name in object ) {
			if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
				break;
			}
		}
	} else {
		for ( ; i < length; ) {
			if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
				break;
			}
		}
	}
	
	if(typeof complete === "function") {
	    complete.call();
	}

	return object;
}
function CommonSearchTrim(str)
{
    return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");
}
function CommonSearchLastCharacter(searchKey)
{
    var validKey = CommonSearchTrim(searchKey);
    var validKeyLength = validKey.length - 1;
    var returnValue = false;
    var RegExp = /[^A-z|0-9|\ |\r\n]/g;
    
    if(typeof validKey === "undefined" || validKey == '') return false;
            
    if((validKey.charCodeAt(validKeyLength) >= 44032 && validKey.charCodeAt(validKeyLength) <= 55203)
        || (validKey.charCodeAt(validKeyLength) >= 48 && validKey.charCodeAt(validKeyLength) <= 57)
        || (validKey.charCodeAt(validKeyLength) >= 65 && validKey.charCodeAt(validKeyLength) <= 90)
        || (validKey.charCodeAt(validKeyLength) >= 97 && validKey.charCodeAt(validKeyLength) <= 122))
    {
        returnValue = true;
    }
    return returnValue;
}
function formattedNumber(n) {
    n = parseInt(n, 10).toString();
    var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
    n += '';                          // 숫자를 문자열로 변환
    while (reg.test(n)){
        n = n.replace(reg, '$1' + ',' + '$2');
    }
    return n;
}    

function SetKeyWord()
{	
	var script = document.createElement('script');
    script.src = (isHTTPS ? 'https' : 'http') + '://tour.interpark.com/exporter/banner/TourMain.aspx?method=GetBanner_New';
    
    document.getElementsByTagName('head')[0].appendChild(script);    
}


function SetBanners(obj)
{
    var str = "";
    var ArrSeq_Search = obj.Seq_Search.split("_/,");
    var ArrKeyWord_Search = obj.KeyWord_Search.split("_/,");
    var ArrLinkURL_Search = obj.LinkURL_Search.split("_/,");
    var ArrImageURL_Search = obj.ImageURL_Search.split("_/,");
    var ArrIsNewWindow_Search = obj.IsNewWindow_Search.split("_/,");
    
    var ArrSeq_Hello = obj.Seq_Hello.split("_/,");
    var ArrKeyWord_Hello = obj.KeyWord_Hello.split("_/,");
    var ArrLinkURL_Hello = obj.LinkURL_Hello.split("_/,");
    var ArrImageURL_Hello = obj.ImageURL_Hello.split("_/,");
    var ArrIsNewWindow_Hello = obj.IsNewWindow_Hello.split("_/,");
    
    var ArrSeq_Random = obj.Seq_Random.split("_/,");
    var ArrKeyWord_Random = obj.KeyWord_Random.split("_/,");
    var ArrLinkURL_Random = obj.LinkURL_Random.split("_/,");
    var ArrImageURL_Random = obj.ImageURL_Random.split("_/,");
    var ArrIsNewWindow_Random = obj.IsNewWindow_Random.split("_/,");
    
    var viewIndex = Math.floor(Math.random() * ArrKeyWord_Search.length);
    
    //검색어
    str = '					<input label="입력란 입니다." title="'+ ArrKeyWord_Search[viewIndex] +'" type="text" name="SearchGNBText" value="'+ ArrKeyWord_Search[viewIndex] +'" id="SearchGNBText" autocomplete="off" onkeyup="onCommonSearchAutoComplte(this, event);" onfocus="javascript:setFocus(this, event);" onblur="javascript:setBlur(this);"  />';
    str += '					<input type="hidden" name="SearchGNBUrl" value="'+ ArrLinkURL_Search[viewIndex] + '&mbn=' + strMain + '&mln=top_searchbar' + ArrSeq_Search[viewIndex] + '" id="SearchGNBUrl" style="display:none;" />';
    str += '                    <a href="javascript:toggleAutoComplete();"><img class="triangleImg" id="toggleAutoCompleteButton" src="http://openimage.interpark.com//tourpark/tour/tourlink/nh/icon_down.gif" alt="자동완성" /></a>';
    
    document.getElementById('box').innerHTML = replaceSSLUrl(str).replace('/&', '/?');
    
    searchAdStr = ArrKeyWord_Search;
    for(var i = 0; i < ArrLinkURL_Search.length; i++)
    {
        searchAdUrl.push(ArrLinkURL_Search[i] + '&mbn=' + strMain + '&mln=top_searchbar' + ArrSeq_Search[i]);
    }
    
    //헬로배너
    str = '					<div align="left"><a href="' + ArrLinkURL_Hello[0] + '&mbn=' + strMain + '&mln=ci_side0' + ArrSeq_Hello[0] + '" target="' + (ArrIsNewWindow_Hello[0] == "Y" ? "_blank" : "_self") + '" ><img id="rollGNBImg" width="136" alt="' + ArrKeyWord_Hello[0] + '" height="68" src="http://tourimage.interpark.com/Sites/Tour/ByTemplate/030/' + ArrImageURL_Hello[0] + '" /></a></div>';

    if(ArrLinkURL_Hello.length > 1){
    str += '					<div ><a class="Btn00" href="javascript:GNBrollUp();"  onfocus="GNBstats=true;" onblur="GNBstats=false;"><img src="http://openimage.interpark.com/tourpark/tour/common/headArea/Btn_prev00.gif" width="13" height="13" border="0" alt="이전" /></a></div>';
    str += '					<div ><a class="Btn01" href="javascript:GNBrollDown();"  onfocus="GNBstats=true;" onblur="GNBstats=false;"><img src="http://openimage.interpark.com/tourpark/tour/common/headArea/Btn_next00.gif" width="13" height="13" border="0" alt="다음"  /></a></div>';
    }
    
    document.getElementById('GNBRollingBanner').innerHTML = replaceSSLHttps(replaceSSLUrl(str)).replace('/&', '/?');
    
    for(var i = 0; i < ArrLinkURL_Hello.length; i++)
    {
        GNBimgs.push(replaceSSLHttps(replaceSSLUrl('http://tourimage.interpark.com/Sites/Tour/ByTemplate/030/')) + ArrImageURL_Hello[i]);
        GNBlinks.push(ArrLinkURL_Hello[i].replace('/&', '/?') + '&mbn=' + strMain + '&mln=ci_side0' + ArrSeq_Hello[i]);
        GNBrollImgBlanks.push(ArrIsNewWindow_Hello[i] == "Y" ? "_blank" : "_self");
    }
    
    //랜덤배너
    viewIndex = Math.floor(Math.random() * ArrKeyWord_Random.length);
    
    str = '<a target="' + (ArrIsNewWindow_Random[viewIndex] == "Y" ? "_blank" : "_self") + '" href="' + ArrLinkURL_Random[viewIndex]  + '&mbn=' + strMain + '&mln=main_right_side' + ArrSeq_Random[viewIndex] +  '"  ><img src="http://tourimage.interpark.com/Sites/Tour/ByTemplate/030/' + ArrImageURL_Random[viewIndex] + '" width="80" height="70" alt="" align="absmiddle" id="QuickBanImg"/></a>';

    document.getElementById('GNBRBanner').innerHTML = replaceSSLHttps(replaceSSLUrl(str)).replace('/&', '/?');
    
}

 var keywordCls = function(){
        this.arrSeq;
        this.arrkeyWord;
        this.arrkeyWordA;
        this.arrkeyWordB;
        this.arrLinkURL;
        this.arrImageURL;
        this.arrNewWindow;
};

//메인 개편.. 수정
function SetBanners_New(obj)
{
    /*
        //1 : 상단띠배너(제외 메인페이지로 이동)
        ,2 : 통합검색창키워드
        ,3 : 헬로우배너
        ,4 : HOT 한줄문구
        ,20 : 서브메뉴_해외항공
        ,21 : 서브메뉴_해외호텔
        ,22 : 서브메뉴_해외자유여행
        ,23 : 서브메뉴_해외패키지
        ,24 : 서브메뉴_국내항공
        ,25 : 서브메뉴_국내호텔
        ,26 : 서브메뉴_국내콘도
        ,27 : 서브메뉴_국내펜션
        ,28 : 서브메뉴_국내제주도
        ,29 : 서브메뉴_국내내륙테마
    */

    var str = "";
    
    var strPageTags = obj.strPageTags.split("/");    
    //var keywordInfo = new keywordCls();

    //검색어
    var keywordInfo = getClass(obj,"2");    
    
    var viewIndex = Math.floor(Math.random() * keywordInfo.arrkeyWord.length);    
        
    
    //str = '		<input label="입력란 입니다." title="'+ keywordInfo.arrkeyWord[viewIndex] +'" type="text" name="SearchGNBText" value="'+ keywordInfo.arrkeyWord[viewIndex] +'" id="SearchGNBText" autocomplete="off" onkeyup="onCommonSearchAutoComplte(this, event);" onfocus="javascript:setFocus(this, event);" onblur="javascript:setBlur(this);"  />';
    str = '			<input title="'+ getReplaceStr(keywordInfo.arrkeyWord[viewIndex]) +'" type="text" name="SearchGNBText" value="'+ getReplaceStr(keywordInfo.arrkeyWord[viewIndex]) +'" id="SearchGNBText" autocomplete="off" onkeyup="onCommonSearchAutoComplte(this, event);" onfocus="javascript:setFocus(this, event);" onblur="javascript:setBlur(this);"  />';
//    str += '		<input type="hidden" name="SearchGNBUrl" value="'+ keywordInfo.arrLinkURL[viewIndex] + '&mbn=' + strMain + '&mln=top_searchbar' + keywordInfo.arrSeq[viewIndex] + '" id="SearchGNBUrl" style="display:none;" />';    
    str += '		<input type="hidden" name="SearchGNBUrl" value="'+ getParamAddUrl(keywordInfo.arrLinkURL[viewIndex], strMain,'top_searchbar',keywordInfo.arrSeq[viewIndex]) + '" id="SearchGNBUrl" style="display:none;" />';    
    str += '        <a href="javascript:toggleAutoComplete();" onblur="javascript:CommonSearchHideLayer();"><img class="triangleImg" id="toggleAutoCompleteButton" src="http://openimage.interpark.com//tourpark/tour/tourlink/nh/icon_down.gif" alt="자동완성" /></a>';
    
    document.getElementById('box').innerHTML = replaceSSLUrl(str).replace('/&', '/?');
    
    searchAdStr = keywordInfo.arrkeyWord;
    for(var i = 0; i < keywordInfo.arrLinkURL.length; i++)
    {
//        searchAdUrl.push(keywordInfo.arrLinkURL[i] + '&mbn=' + strMain + '&mln=top_searchbar' + keywordInfo.arrSeq[i]);
        searchAdUrl.push(getParamAddUrl(keywordInfo.arrLinkURL[i], strMain,'top_searchbar',keywordInfo.arrSeq[i]));
    }
    
    //헬로우 배너
    keywordInfo = getClass(obj,"3");      
    createHellowBannerLayer(keywordInfo, "GNBRollingBanner");
    
    //서브메뉴
    keywordInfo = getClass(obj,"20"); //해외항공
    CreateSubMenuKeywordLayer(keywordInfo,"subMenu_20","_cat_sub01","10");
    
    keywordInfo = getClass(obj,"21"); //해외호텔
    CreateSubMenuKeywordLayer(keywordInfo,"subMenu_21","_cat_sub02","20");
    
    keywordInfo = getClass(obj,"22"); //해외자유여행
    CreateSubMenuKeywordLayer(keywordInfo,"subMenu_22","_cat_sub03","30");
    
    keywordInfo = getClass(obj,"23"); //해외패키지
    CreateSubMenuKeywordLayer(keywordInfo,"subMenu_23","_cat_sub04","40");
    
    keywordInfo = getClass(obj,"24"); //국내항공
    CreateSubMenuKeywordLayer(keywordInfo,"subMenu_24","_cat_sub08","50");
    
    keywordInfo = getClass(obj,"25"); //국내호텔
    CreateSubMenuKeywordLayer(keywordInfo,"subMenu_25","_cat_sub09","60");
    
    keywordInfo = getClass(obj,"26"); //국내콘도
    CreateSubMenuKeywordLayer(keywordInfo,"subMenu_26","_cat_sub10","70");
    
    keywordInfo = getClass(obj,"27"); //국내펜션
    CreateSubMenuKeywordLayer(keywordInfo,"subMenu_27","_cat_sub11","80");
    
    keywordInfo = getClass(obj,"28"); //국내제주도
    CreateSubMenuKeywordLayer(keywordInfo,"subMenu_28","_cat_sub12","90");
    
    keywordInfo = getClass(obj,"29"); //국내내륙테마
    CreateSubMenuKeywordLayer(keywordInfo,"subMenu_29","_cat_sub13","100");
}

//서브메뉴 키워드배너 로드
function CreateSubMenuKeywordLayer(keywordInfo,targetID,subName,mlnIndex)
{
    try{
        
        var str = "";
        for(var i=0;i<keywordInfo.arrSeq.length; i++)
        {   
            if(keywordInfo.arrImageURL.length > 0)
            {
                if(keywordInfo.arrImageURL[i].length > 0)
                {   
                    str += '<a href="' + keywordInfo.arrLinkURL[i] + '&mbn=' + strMain + '&mln=main_menuimg' + mlnIndex + '"';                    
                    
                    if(subName == "_cat_sub13")
                        str += ' onblur="hide_glayer(\'_cat_sub13\')" ';
                    
                    str += ' target="' + (keywordInfo.arrNewWindow[i] == "Y" ? "_blank" : "_self") + '" >';
                    str += '<img src="http://tourimage.interpark.com/Sites/Tour/ByTemplate/098/' + keywordInfo.arrImageURL[i] + '" alt="' + keywordInfo.arrkeyWord[i] + '" />';
                    str += '</a>';      
                }
            }  
            else
            {
                document.getElementById("finalLi").onblur = hide_glayer('_cat_sub13');
            }          
        }       
        
//        if(subName != "")
//            str += '<a href="javascript:;"  onblur="hide_glayer(\'' + subName + '\'); "></a>'; 
        
        document.getElementById(targetID).innerHTML = replaceSSLHttps(replaceSSLUrl(str)).replace('/&', '/?');
        document.getElementById(targetID).setAttribute("display", "block");        
    
    }
    catch(e){}
}

//페이지태그 정보 로드
function getClass(obj,pageTag)
{   
//    try{
        
        var keywordInfo = new keywordCls();

        keywordInfo.arrSeq = "";
        keywordInfo.arrkeyWord = "";
        keywordInfo.arrkeyWordA = "";
        keywordInfo.arrkeyWordB = "";
        keywordInfo.arrLinkURL = "";
        keywordInfo.arrImageURL = "";
        keywordInfo.arrNewWindow = "";
        
        if(obj["MainSeq_"+pageTag] != null && obj["MainSeq_"+pageTag] != "")
            keywordInfo.arrSeq = obj["MainSeq_"+pageTag].split("_/,");
        if(obj["MainKeyWord_"+pageTag] != null && obj["MainKeyWord_"+pageTag] != "")
            keywordInfo.arrkeyWord = obj["MainKeyWord_"+pageTag].split("_/,");
        if(obj["MainKeyWordA_"+pageTag] != null && obj["MainKeyWordA_"+pageTag] != "")
            keywordInfo.arrkeyWordA = obj["MainKeyWordA_"+pageTag].split("_/,");
        if(obj["MainKeyWordB_"+pageTag] != null && obj["MainKeyWordB_"+pageTag] != "")
            keywordInfo.arrkeyWordB = obj["MainKeyWordB_"+pageTag].split("_/,");
        if(obj["MainURL_"+pageTag] != null && obj["MainURL_"+pageTag] != "")
            keywordInfo.arrLinkURL = obj["MainURL_"+pageTag].split("_/,");
        if(obj["MainImageURL_"+pageTag] != null && obj["MainImageURL_"+pageTag] != "")
            keywordInfo.arrImageURL = obj["MainImageURL_"+pageTag].split("_/,");
        if(obj["MainNewWindow_"+pageTag] != null && obj["MainNewWindow_"+pageTag] != "")
            keywordInfo.arrNewWindow = obj["MainNewWindow_"+pageTag].split("_/,");
        
        return keywordInfo;
    
//    }
//    catch(e){}
    
}

var HellowSubImgSrcOn = replaceSSLUrl("http://openimage.interpark.com/tourpark/tour/common/docu_head/rolling01_on.png");
var HellowSubImgSrcOff = replaceSSLUrl("http://openimage.interpark.com/tourpark/tour/common/docu_head/rolling01_off.png");

//헬로우배너
function createHellowBannerLayer(keywordInfo, targetID)
{
    try{
    
        if(keywordInfo.arrSeq.length <= 0)
        {   
            return;
        } 
        
        var str = '<ul class="ui-banner-list">';
        str += '<li class="on">';
//        str += '    <a href="' + keywordInfo.arrLinkURL[0] + '&mbn=' + strMain + '&mln=ci_side0' + keywordInfo.arrSeq[0] + '" target="' + (keywordInfo.arrNewWindow[0] == "Y" ? "_blank" : "_self") + '" >';
        str += '    <a href="' + getParamAddUrl(keywordInfo.arrLinkURL[0], strMain, 'tour_hello_0', 1) + '" target="' + (keywordInfo.arrNewWindow[0] == "Y" ? "_blank" : "_self") + '" >';
        str += '        <img id="rollGNBImg" alt="' + getReplaceStr(keywordInfo.arrkeyWord[0]) + '" src="http://tourimage.interpark.com/Sites/Tour/ByTemplate/098/' + keywordInfo.arrImageURL[0] + '" />';
        str += '    </a>';
        str += '</li>';
        str += '</ul>';
        
        str += '<div class="ui-rolling"> <!-- paging-slide 향후 변경 가능 -->';        
        str += '    <span>';
        for(var x=0; x < keywordInfo.arrSeq.length; x++)
        {
            var strAlt = (x+1)+"번째 정보";
        
//            str += '    <a id="hellow_' + x + '" class="' + (x==0 ? "on" : "") + '" href="javascript:HellowSubMenu(' + x + ');" >'+ keywordInfo.arrkeyWord[0] +'</a>'; //추후 랜덤 변경
//            str += '<a href="#" id="hellow_' + x + '" name="rollGNBSub" class="' + (x==0 ? "on" : "") + '"  onfocus="javascript:HellowSubMenu(' + x + ');" onmouseover="javascript:HellowSubMenu(' + x + ');" onmouseout="javascript:GNBstats=false;" >'+ getReplaceStr(keywordInfo.arrkeyWord[0]) +'</a>'; //추후 랜덤 변경
            str += '<a href="#" id="hellow_' + x + '" name="rollGNBSub" class="' + (x==0 ? "on" : "") + '"  onfocus="javascript:HellowSubMenu(' + x + ');" onmouseover="javascript:HellowSubMenu(' + x + ');" onmouseout="javascript:GNBstats=false;" >';
            str += '<img id="imghellow_' + x + '" src="' + (x==0 ? HellowSubImgSrcOn : HellowSubImgSrcOff) + '" alt="' + strAlt + '" />';
            str += '</a>'; //추후 랜덤 변경


        }
        str += '    </span>';        
        str += '<a id="btnHelloStop" href="javascript:HellowDisplayMode(\'stop\');" class="stop on" title="정지"><img src="http://openimage.interpark.com/tourpark/tour/common/docu_head/rolling01_stop.png" alt="정지" /></a>';
		str += '<a id="btnHelloPlay" href="javascript:HellowDisplayMode(\'play\');" class="play" title="재생" style="display:none;"><img src="http://openimage.interpark.com/tourpark/tour/common/docu_head/rolling01_play.png" alt="재생" /></a>';		
        str += '</div>';
//        str += '</div>';        

        document.getElementById("GNBRollingBanner").innerHTML = replaceSSLHttps(replaceSSLUrl(str)).replace('/&', '/?');
                
        for(var i = 0; i < keywordInfo.arrSeq.length; i++)
        {
            pushHellowBanner(keywordInfo,i);
        }
    }
    catch(e){}
}

function HellowSubMenu(index)
{   
    GNBroll(index);
    SetClass(index);
    GNBstats = true;
}

function SetClass(index)
{  
    for(var i=0; i <GNBimgs.length; i++ )
    {   
        if(i == index)   
        {         
            document.getElementById("hellow_" + i).className = "on";
            document.getElementById("imghellow_" + i).setAttribute("src",HellowSubImgSrcOn);            
        }
        else
        {
            document.getElementById("hellow_" + i).className = "";
            document.getElementById("imghellow_" + i).setAttribute("src",HellowSubImgSrcOff);
        }
    }
}

function HellowDisplayMode(mode)
{
    if(mode == "play")
    {
        GNBstats = false; 
//        document.getElementById("btnHelloStop").className = "stop on";
//        document.getElementById("btnHelloPlay").className = "play";
        
        document.getElementById("btnHelloStop").style.display = "inline";
        document.getElementById("btnHelloPlay").style.display = "none";
        
        clearInterval(GNBInterval);        
        rollGNBImg();
    }
    else
    {   
        GNBstats = true;
//        document.getElementById("btnHelloStop").className = "stop";
//        document.getElementById("btnHelloPlay").className = "play on";

        document.getElementById("btnHelloStop").style.display = "none";
        document.getElementById("btnHelloPlay").style.display = "inline";
        
        clearInterval(GNBInterval);
    }
}

function pushHellowBanner(keywordInfo,index)
{
    GNBimgs.push(replaceSSLHttps(replaceSSLUrl('http://tourimage.interpark.com/Sites/Tour/ByTemplate/098/')) + keywordInfo.arrImageURL[index]);
//    GNBlinks.push(keywordInfo.arrLinkURL[index].replace('/&', '/?') + '&mbn=' + strMain + '&mln=ci_side0' + keywordInfo.arrSeq[index]);
    GNBlinks.push(getParamAddUrl(keywordInfo.arrLinkURL[index].replace('/&', '/?'), strMain, 'tour_hello_0', index));
    GNBrollImgBlanks.push(keywordInfo.arrNewWindow[index] == "Y" ? "_blank" : "_self");
}

function MainMenuClassSet(index)
{
    var arrHs = document.getElementsByName("mainMenu");
    
    // IE에서 h3의 getElementsByName를 지원 안해서 다른방식으로 메뉴를 찾음
    if(arrHs.length == 0)
    {
        arrHs = new Array();
        var arrMenu1 = document.getElementById("divHeaderMenu1").children;
        var arrMenu2 = document.getElementById("divHeaderMenu2").children;
        
        for(j = 0; j < arrMenu1.length; j++)
        {
            if(arrMenu1[j].getAttribute("name") == "mainMenu")
                arrHs.push(arrMenu1[j]);
        }
        
        for(j = 0; j < arrMenu2.length; j++)
        {
            if(arrMenu2[j].getAttribute("name") == "mainMenu")
                arrHs.push(arrMenu2[j]);
        }
    }
    
    for(var i=1 ; i <= arrHs.length ;  i++)
    {
        if(i == index)
            arrHs[i-1].className = "h3-tit on";
        else
            arrHs[i-1].className = "h3-tit none";
    }
}

function getParamAddUrl(linkURL, isMain, paramNM, index)
{
    try{
        if(linkURL.indexOf("?") > 0)
            return linkURL + "&mbn=" + isMain + "&mln=" + paramNM + "_" + (index+1);
        else
            return linkURL + "?mbn=" + isMain + "&mln=" + paramNM + "_" + (index+1);
    }catch(e)
    {
        return linkURL;
    }
}

function getReplaceStr(str)
{
    try{
        if(str != "" && str != "undefined" && str != null)
        {
            return str.replace(/\'/gi, "′").replace(/\"/gi, "″");         
        }
        else{
            return "";
        }
    }
    catch(e){}
    
}

function autoCompleteSearchHistory(result, favoriteData) {
    var splResult = result.split('||');    

    document.getElementById("SearchGNBText").setAttribute("autocomplete", "on");
    var searchWordObject = document.getElementById("SearchWord");
    searchWordObject.innerHTML = "";
    
    {
        var h1Element = document.createElement("h1");
        h1Element.innerText = "통합검색";
        
        var divElement = document.createElement("div");
        divElement.className = "world-module01";
        
        var h2Element = document.createElement("h2");
        h2Element.innerText = "최근검색어";
        h2Element.className = "tit";
        
        var ulElement = document.createElement("ul");
        ulElement.className = "world-list1";        
        
        if(splResult.length > 0)
        {
            var j = splResult.length - 1;
            
            for(var i = 0; i < splResult.length; i++) {
                
                if(splResult[j] != "") {
                
                    var liElement = document.createElement("li");
                    
                    var aElement = document.createElement("a");
                    aElement.href = "javascript:;";
                    aElement.setAttribute("data", splResult[j]);
                    aElement.innerText = splResult[j];
                    
                    aElement.onclick = function(evt) {
                        document.getElementById("SearchGNBText").value = this.getAttribute("data");                
                        SearchGNBArea("Y");
                    };
                    
                    var aElementDelete = document.createElement("a");
                    aElementDelete.href = "javascript:;";
                    aElementDelete.setAttribute("data", splResult[j]);
                    aElementDelete.className = "del";
                    aElementDelete.innerText = "삭제";
                    
                    aElementDelete.onclick = function(evt) {
                        try {
                            var scriptElement = document.createElement("script");
                            scriptElement.type = "text/javascript";
                            scriptElement.src = replaceSSLHttps("http://itis01.interpark.com/?query=" + encodeURIComponent(this.getAttribute("data")) + "&type=del&callback=autoCompleteSearchHistoryDelete");    

                            document.getElementsByTagName("head")[0].appendChild(scriptElement);
                        } catch(e) { }
                    };
                    
                    liElement.appendChild(aElement);
                    liElement.appendChild(aElementDelete);     
                    ulElement.appendChild(liElement);
                }
                j--;
            }
        }
        
        var aElement = document.createElement("a");
        aElement.className = "total-del";
        aElement.href = "javascript:;";
        aElement.setAttribute("shape", "");
        aElement.innerText = "전체삭제";
        aElement.onclick = function(evt) {
            try {
                var scriptElement = document.createElement("script");
                scriptElement.type = "text/javascript";
                scriptElement.src = replaceSSLHttps("http://itis01.interpark.com/?query=&type=totaldel&callback=autoCompleteSearchHistoryDelete");    

                document.getElementsByTagName("head")[0].appendChild(scriptElement);
            } catch(e) { }
        };
        
        var pElement = document.createElement("p");
        pElement.className = "info-words";
        pElement.innerText = "최근 검색한 결과가 없습니다.";
        
        divElement.appendChild(h2Element);
        
        if(result == "") {
            divElement.appendChild(pElement);
        } else {
            divElement.appendChild(ulElement);
            divElement.appendChild(aElement);
        }
        
        searchWordObject.appendChild(h1Element);
        searchWordObject.appendChild(divElement);
    }
    
    {
        var divElement = document.createElement("div");
        divElement.className = "world-module02";
        
        var h2Element = document.createElement("h2");
        h2Element.innerText = "인기검색어";
        h2Element.className = "tit";
        
        var ulElement = document.createElement("ul");
        ulElement.className = "world-list2";
        
        for(var i = 0; i < favoriteData.Table.length; i++) {
            var liElement = document.createElement("li");
            //1위에서 3위까지는 강조처리
            if(i == 0 || i == 1 || i == 2) {
                liElement.className = "selected";
            }
            
            var aElement = document.createElement("a");
            aElement.href = "javascript:;";
            aElement.setAttribute("data", favoriteData.Table[i].Keyword);
            
            var emElement = document.createElement("em");
            emElement.className = "num";
            emElement.innerText = (i + 1).toString();
            
            var spanElement = document.createElement("span");
            spanElement.className = "tit";
            spanElement.innerText = favoriteData.Table[i].Keyword;
            
            aElement.appendChild(emElement);
            aElement.appendChild(spanElement);
            
            
            aElement.onclick = function(evt) {
                document.getElementById("SearchGNBText").value = this.getAttribute("data");                
                SearchGNBArea("Y");
            };
            liElement.appendChild(aElement);
            ulElement.appendChild(liElement);
        }
        
        divElement.appendChild(h2Element);
        divElement.appendChild(ulElement);
        searchWordObject.appendChild(divElement);
    }          
   
    searchWordObject.style.display = "block";
    document.getElementById("toggleAutoCompleteButton").src = replaceSSLUrl("http://openimage.interpark.com//tourpark/tour/tourlink/nh/icon_up.gif");    
}

function autoCompleteSearchHistoryDelete() {
    try {
        var scriptElement = document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.src = replaceSSLHttps("http://itis01.interpark.com/Get.aspx?callback=autoCompleteSearchHistory");    

        document.getElementsByTagName("head")[0].appendChild(scriptElement);
    } catch(e) { }
}




/* 통합검색 신규 영역 :: End */

