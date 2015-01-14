/**
 * 
 *///메인페이지 판단
var cateMain = "tour";
var isViewFlag = false; //각 카테고리별 메인 페이지 여부
//var isCateMain = false; //각 카테고리별 메인 페이지 여부

var strWindowLocationHref = window.location.href.toLowerCase();

if(strWindowLocationHref == "http://tour.interpark.com/" 
|| strWindowLocationHref == "http://tour.interpark.com" 
|| strWindowLocationHref.indexOf("http://tour.interpark.com/default.aspx") > -1 
|| strWindowLocationHref.indexOf("http://tour.interpark.com/?") > -1)
{
    cateMain = "tour_main";
    isViewFlag = true;
    //isCateMain = true;
    
}
else if( 
//    strWindowLocationHref.indexOf("http://air.interpark.com/?") != -1 //해외항공
//   || strWindowLocationHref.indexOf("http://hotel.interpark.com/?") != -1 //해외호텔
    strWindowLocationHref.indexOf("http://tour.interpark.com/airtel/main.aspx") != -1 //해외항공+호텔
    || strWindowLocationHref.indexOf("http://tour.interpark.com/free/?") != -1  || strWindowLocationHref.indexOf("http://tour.interpark.com/free/default.aspx") != -1 //해외자유여행
    || strWindowLocationHref.indexOf("http://tour.interpark.com/package/?") != -1  || strWindowLocationHref.indexOf("http://tour.interpark.com/package/default.aspx") != -1 //해외패키지
    || strWindowLocationHref.indexOf("http://eurail.interpark.com/aspx/eurailproducts/eurailproducts.aspx?sid=itp01-02") != -1 //유레일
    || strWindowLocationHref.indexOf("http://tour.interpark.com/airticket/domestic/main.aspx") != -1 //국내항공
    || strWindowLocationHref.indexOf("http://tour.interpark.com/housing/category/hotel_main.aspx") != -1 //국내호텔
    || strWindowLocationHref.indexOf("http://tour.interpark.com/housing/category/condo_main.aspx") != -1 //국내콘도
    || strWindowLocationHref.indexOf("http://tour.interpark.com/housing/category/pension_main.aspx") != -1 //국내펜션
    || strWindowLocationHref.indexOf("http://tour.interpark.com/jeju/?") != -1  || strWindowLocationHref.indexOf("http://tour.interpark.com/jeju/default.aspx") != -1 //제주도
    || strWindowLocationHref.indexOf("http://tour.interpark.com/domestic/?") != -1  || strWindowLocationHref.indexOf("http://tour.interpark.com/domestic/default.aspx") != -1 //내륙테마
    || strWindowLocationHref.indexOf("http://tour.interpark.com/freeya/?") != -1  || strWindowLocationHref.indexOf("http://tour.interpark.com/freeya/default.aspx") != -1 //프리야
    || strWindowLocationHref.indexOf("http://tour.interpark.com/event/?") != -1  || strWindowLocationHref.indexOf("http://tour.interpark.com/event/default.aspx") != -1 //이벤트
    || strWindowLocationHref.indexOf("http://tour.interpark.com/customer/?") != -1  || strWindowLocationHref.indexOf("http://tour.interpark.com/customer/default.aspx") != -1 //고객센타
    || strWindowLocationHref.indexOf("http://tour.interpark.com/corp/?") != -1  || strWindowLocationHref.indexOf("http://tour.interpark.com/corp/default.aspx") != -1 //법인상용
    || (strWindowLocationHref == "http://tour.interpark.com/rentcar/")  || strWindowLocationHref.indexOf("http://tour.interpark.com/rentcar/default.aspx") != -1 //제주렌터카메인
   
    || strWindowLocationHref.indexOf("http://air.interpark.com") != -1 //항공 도메인전체
    || strWindowLocationHref.indexOf("http://hotel.interpark.com") != -1 //호텔 도메인전체
    || strWindowLocationHref.indexOf("http://tour.interpark.com/housing") != -1 //숙박 도메인 전체
    || strWindowLocationHref.indexOf("/goods/2_1.aspx") != -1 //2depth 리스트
    || strWindowLocationHref.indexOf("/goods/2_2.aspx") != -1 //3depth 리스트
    || strWindowLocationHref.indexOf("/goods/detail.aspx") != -1 //상품상세
    || strWindowLocationHref.indexOf("/airticket/overseas/main.aspx") != -1 //땡처리 항공권    
    || strWindowLocationHref.indexOf("flight.interpark.com/avail/faresearch.aspx") != -1 //해외 항공권 예약
    || strWindowLocationHref.indexOf("/freeya/jeju/intro.aspx") != -1 //제주여행만들기
    || strWindowLocationHref.indexOf("/rentcar/detail.aspx") != -1 //렌터카상세
    || strWindowLocationHref.indexOf("/category/domesticcoupon/main.aspx") != -1 //관광지 이용권
    || strWindowLocationHref.indexOf("/category/domesticcoupon/main2.aspx") != -1 //메이트쿠폰
    || strWindowLocationHref.indexOf("/domestic/weekend.aspx") != -1 ) //내륙테마-금주출발확정

{
    isViewFlag = true;
//    isCateMain = true;
}

var str = '';
//str += '<div class="gate-section">';
str += '<h2><a href="javascript:allCategoryView(\'allCategory\', \'toggle\');" style="display:;" ><img id="imgAllcate" src="http://openimage.interpark.com//tourpark/tour/common/docu_head/category_view01_off.gif" alt="전체메뉴" /></a></h2>';
str += '<div id="allCategory" class="sitemap-module" style="display:none;" onblur="javascript:this.style.display=none;">';
str += '	<div id="allCate1" class="sitemap-cover add1">';
str += '		<h3 class="h3-tit first-child"><a href="javascript:allCategoryPartView(\'allCate1\');"><img id="imgallCate1" src="http://openimage.interpark.com/tourpark/tour/common/docu_head/tit_sitemap01_on.gif" alt="해외 여행" /></a></h3>';
str += '		<div class="spot first-child">';
str += '			<h4 class="tit"><a href="http://air.interpark.com">해외항공</a></h4>';
str += '			<ul>';
str += '				<li class="point01"><a href="javascript:ShowAirReserveWithParam(\'\');">Onestop 해외항공권 예약</a></li>';
str += '				<li><a href="javascript:ShowAirReserveWithParam(\'trip=MD\');">다구간 항공권 예약</a></li>';
str += '				<li><a href="javascript:ShowAirReserveWithParam(\'startType=soto&resPage=FLEX_AIR\');">해외출발 항공권</a></li>';
str += '				<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=M&areaCode=J1&CityCode=NRT&tdOpen=Y#f_air">주요도시 할인항공권</a></li>';
str += '				<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=H&areaCode=J1&CityCode=NRT&tdOpen=Y" >모바일 항공권</a></li>';
str += '				<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=D&areaCode=J1&CityCode=NRT&tdOpen=Y" >부산 출발 항공권</a></li>';
str += '				<li><a href="http://air.interpark.com/air/front/closingSale/closingSale.jsp">오늘의 특가</a></li>';
str += '				<li><a href="http://tour.interpark.com/airticket/overseas/main.aspx">땡처리 항공권</a></li>';
str += '				<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=S&areaCode=U1&aNationCode=US&CityCode=LAX#f_air">학생 할인 항공권</a></li>';
str += '				<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=P&areaCode=J1&CityCode=NRT#f_air">지방출발 항공권</a></li>';
str += '				<li><a href="http://air.interpark.com/lts/jsp/discountCity.jsp?SaleType=B&areaCode=U1&aNationCode=US&CityCode=LAX#f_air">비즈니스 클래스</a></li>';
str += '				<li><a href="http://tour.interpark.com/customer/fitconsultwrite.aspx?code=Corp&ConsultType=0">단체항공문의</a></li>';
str += '				<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=1662">법인/상용문의</a></li>';
str += '				<li><a href="http://www.thetravel.co.kr/lts/IP_wholesale/WS_Login.lts" target="_blank">여행사전용 항공권</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit"><a href="http://hotel.interpark.com">해외호텔</a></h4>';
str += '			<ul>';
str += '				<li class="point01"><a href="javascript:ShowOneStopOHotelBySearch(\'mbn=tour&mln=quick_ahotelonestop\');">Onestop 해외호텔 예약</a></li>';
str += '				<li><a href="http://hotel.interpark.com/Category/Ranking.aspx">해외호텔 랭킹</a></li>';
str += '				<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=6655">일본전통료칸</a></li>';
str += '				<li><a href="http://hotel.interpark.com/category/maldives.aspx">몰디브리조트</a></li>';
str += '				<li><a href="http://hotel.interpark.com/Category/Cancun.aspx">칸쿤럭셔리리조트</a></li>';
str += '				<li><a href="http://tour.interpark.com/customer/fitconsultwrite.aspx?code=Corp&ConsultType=1">단체호텔문의</a></li>';
str += '			</ul>';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/Airtel/Main.aspx">항공+호텔</a></h4>';
str += '			<ul>';
str += '				<li class="point01"><a href="http://tour.interpark.com/airtel/main.aspx">항공+호텔 예약</a></li>';
str += '				<li><a href="http://tour.interpark.com/event/event_view.aspx?seq=4744">이용안내</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit">티켓/교통</h4>';
str += '			<ul>';
str += '				<li><a href="http://eurail.interpark.com/ASPX/EurailProducts/EurailProducts.aspx?SID=ITP01-02">유레일</a></li>';
//str += '				<li><a href="http://tourpkg.interpark.com/passrail/jr/jr.aspx?mloc=05040804">일본 철도패스</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/detail.aspx?basegoodscd=j6010021&cate=1018">일본 철도패스</a></li>';
str += '				<li><a href="http://www.rentalcars.com/affxml/Home.do?affiliateCode=interpark_rc&cor=kr&adplat=abroadhotel&adcamp=abroadhoteldropdown" target="_blank">해외렌터카</a></li>';
//str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=668">크루즈</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=669">티켓/데이투어</a></li>';
str += '			</ul>';
str += '			<h4 class="tit">전문몰</h4>';
str += '			<ul>';
str += '				<li><a href="http://tour.interpark.com/resort/clubmed/">클럽메드</a></li>';
str += '				<li><a href="http://tour.interpark.com/resort/pic/">PIC</a></li>';
str += '				<li><a href="http://tour.interpark.com/mall/?mallcd=171">일본료칸</a></li>';
str += '				<li><a href="http://tour.interpark.com/mall/?mallcd=164">몰디브</a></li>';
str += '				<li><a href="http://tour.interpark.com/mall/?mallcd=172">모리셔스/세이셸</a></li>';
str += '				<li><a href="http://tour.interpark.com/mall/?mallcd=92">가이드투어</a></li>';
str += '				<li><a href="http://tour.interpark.com/themetour">먹go찍go</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/package">패키지</a></h4>';
str += '			<ul>';
//str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=21">동남아</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=21">태국(파타야,푸켓,치앙마이)</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1972">베트남/캄보디아/라오스</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1969">필리핀(세부,보라카이)</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1974">코타/발리/싱가폴/자카르타</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=23">중국/홍콩/마카오/대만</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=22">일본</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=2404">서유럽/러시아</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=25">동유럽/지중해/크로아티아</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=24">괌/사이판/팔라우</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=160">호주/뉴질랜드/남태평양</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=27">미주/중남미/인도</a></li>';
//str += '				<li><a href="http://tour.interpark.com/mall/gonggu/2_2.aspx?cate=140">공동구매 캐쉬백</a></li>';
//str += '				<li><a href="http://tour.interpark.com/themetour">먹go찍go</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1587">가이드오픈팩</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1588">원데이프리팩</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1589">몽땅포함팩</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1590">홈쇼핑 히트상품</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1381">허니문</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=30">골프</a><img src="http://openimage.interpark.com/tourpark/tour/common/docu_head/icon_new.gif" alt="NEW" class="icon" /></li>';
//str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=330">지방출발</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/free">자유여행</a></h4>';
str += '			<ul>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=26">홍콩/마카오/대만</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=35">방콕/푸켓/치앙마이</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=2341">라오스/캄보디아/베트남</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=2083">싱가폴/발리/코타키나발루</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=31">세부/보라카이/마닐라</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1409">중국</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=29">일본</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=32">유럽</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=33">괌/사이판</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=721">호주/뉴질랜드</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=495">미국/캐나다</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=1253">하와이/칸쿤</a></li>';
//str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=911">몰디브/모리셔스</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=911">몰디브/모리셔스/세이셸</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=2385">허니문</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=530">프리야걸스</a></li>';
//str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=494">민박체험</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=38">주말여행</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=43">가족여행</a></li>';
//str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=45">쇼핑여행</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=40">혼자여행</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=669">티켓/데이투어</a></li>';
//str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=668">크루즈여행</a></li>';
//str += '				<li><a href="http://ryokan.interpark.com/Pages/UI_Main.aspx">일본전통료칸</a></li>';
//str += '				<li><a href="http://backpack.interpark.com/main.asp">다국적배낭</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<a href="javascript:allCategoryPartView(\'allCate1\');"><img src="http://openimage.interpark.com/tourpark/tour/common/docu_head/btn_open02.gif" alt="열기" class="btn-open" /></a>';
str += '		<a href="javascript:allCategoryView(\'allCategory\', \'none\');"><img src="http://openimage.interpark.com/tourpark/tour/common/docu_head/btn_close02.gif" alt="닫기" class="btn-close" /></a>';
str += '	</div>';
str += '	<div id="allCate2" class="sitemap-cover add2">';
str += '		<a href="javascript:allCategoryPartView(\'allCate2\');"><h3 class="h3-tit"><img id="imgallCate2" src="http://openimage.interpark.com/tourpark/tour/common/docu_head/tit_sitemap02_off.gif" alt="국내 여행" /></h3></a>';
str += '		<div class="spot first-child">';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/airticket/domestic/main.aspx">국내항공</a></h4>';
str += '			<ul>';
str += '				<li class="point01"><a href="javascript:ShowDomAirReserveWithParam(\'mbn=' + cateMain + '&mln=main_menuDair1\');">Onestop 국내항공권 예약</a></li>';
str += '				<li><a href="http://tour.interpark.com/airticket/domestic/main.aspx">땡처리 할인항공권</a></li>';
str += '			</ul>';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/jeju">제주도</a></h4>';
str += '			<ul>';
//str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=838">10월 황금연휴</a></li>';
str += '				<li class="point01"><a href="http://tour.interpark.com/freeya/jeju/intro.aspx">제주여행만들기</a><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/icon_new.gif" alt="NEW" class="icon" /></li>';
str += '				<li><a href="http://tour.interpark.com/airticket/domestic/main.aspx">국내 항공권</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?PV=A4006">호텔</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD008">리조트</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC007">펜션</a></li>';
str += '				<li><a href="http://tour.interpark.com/rentcar/">제주렌터카</a></li>';
str += '				<li><a href="http://tour.interpark.com/category/domesticCoupon/main2.aspx">관광지이용권</a></li>';

str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=838">2015년 설날연휴</a><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/icon_new.gif" alt="NEW" class="icon" /></li>';

str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=677">에어텔/에어카텔</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=678">카텔</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=676">관광패키지</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=681">제주골프</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=032&CateCD=296">제주 추천 숙박</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=040&CateCD=297">레스토랑 식사권</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/domestic">내륙테마</a></h4>';
str += '			<ul>';
//str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1473">여름바캉스</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=1473">겨울 눈꽃여행</a></li>';
str += '				<li><a href="http://tour.interpark.com/domestic/weekend.aspx?cate=685">금주 출발확정</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=76">버스여행</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_1.aspx?cate=416">기차여행</a></li>';
str += '				<li><a href="http://tour.interpark.com/goods/2_2.aspx?cate=963">섬여행</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/housing/category/Hotel_Main.aspx">국내호텔</a></h4>';
str += '			<ul>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?PV=A4001&RG=42001">서울</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?PV=A4001&RG=42011">인천</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?PV=A4001&RG=42010">경기</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?PV=A4003&RG=42021">부산</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?PV=A4002">강원</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?PV=A4003">경주/경상</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?PV=A4004&RG=42040">전라</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?PV=A4005">충청</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?PV=A4006">제주</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=020&CateCD=291">레지던스</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=021&CateCD=293">비즈니스</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=022&CateCD=294">일출/바다</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=030&CateCD=295">인천공항</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=038&CateCD=299">베니키아호텔</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=032&CateCD=296">제주추천숙박</a></li>';
//str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=033&CateCD=297">스파&amp;테라피/레스토랑</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=033&CateCD=297">호텔스파&amp;테라피</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=040&CateCD=297">레스토랑식사권 </a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=036&CateCD=299">관광지 입장권</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=037&CateCD=299">온천/워터파크/레져</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=035&CateCD=299">관광 유람선/크루즈</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=039&CateCD=299">오토캠핑&amp;카라반</a></li>';
str += '				<li><a href="http://www.bnbhero.com/partner/list?partner_code=ASKOR000010C" target="_blank">게스트하우스(제휴)</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/housing/category/Condo_Main.aspx">국내리조트</a></h4>';
str += '			<ul>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD001">강원</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD002">경기/인천</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD003">경주</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD004">경상</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD005">부산</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD006">충청</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD007">전라</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=C&PV=AD008">제주</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Information/Condo_Chain_Master.aspx?Type=CHAIN&chainCD=01">전국 체인 콘도/리조트</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=039&CateCD=299">오토캠핑&amp; 카라반</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/housing/Category/Pension_Main.aspx">국내펜션</a></h4>';
str += '			<ul>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC008">가평/양평</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC001">경기</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC002">인천</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC004">강원</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC003">충청</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC006">전라</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC005">경주/경상</a> | <a href="http://tour.interpark.com/housing/Search/AreaList.aspx?LMC=P&PV=AC007">제주</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/Theme_List.aspx?Type=AA002&LMC=P&Flag=P">산/계곡</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/Theme_List.aspx?Type=AA003&LMC=P&Flag=P">바다/섬</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/Theme_List.aspx?Type=AA004&LMC=P&Flag=P">자연휴양림</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/Theme_List.aspx?Type=AA006&LMC=P&Flag=P">가족</a> | <a href="http://tour.interpark.com/housing/Search/Theme_List.aspx?Type=AA007&LMC=P&Flag=P">커플</a> | <a href="http://tour.interpark.com/housing/Search/Theme_List.aspx?Type=AA008&LMC=P&Flag=P">단체</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/Theme_List.aspx?Type=A7046|A7047&LMC=P&Flag=P">스파/월풀</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/Theme_List.aspx?Type=A7013&LMC=P&Flag=P">수영장</a> | <a href="http://tour.interpark.com/housing/Search/Theme_List.aspx?Type=AA011&LMC=P&Flag=P">스키장</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/Theme_List.aspx?Type=AA120&LMC=P&Flag=P">독채</a></li>';
str += '				<li><a href="http://tour.interpark.com/housing/Search/ThemeListHotel.aspx?PageGubun=039&CateCD=299">오토캠핑&amp;카라반</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<a href="javascript:allCategoryPartView(\'allCate2\');"><img src="http://openimage.interpark.com/tourpark/tour/common/docu_head/btn_open02.gif" alt="열기" class="btn-open" /></a>';
str += '		<a href="javascript:allCategoryView(\'allCategory\', \'none\');"><img src="http://openimage.interpark.com/tourpark/tour/common/docu_head/btn_close02.gif" alt="닫기" class="btn-close" /></a>';
str += '	</div>';
str += '	<div id="allCate3" class="sitemap-cover add3">';
str += '		<a href="javascript:allCategoryPartView(\'allCate3\');"><h3 class="h3-tit"><img id="imgallCate3" src="http://openimage.interpark.com/tourpark/tour/common/docu_head/tit_sitemap03_off.gif" alt="정보" /></h3></a>';
str += '		<div class="spot first-child">';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/mypage/Default.aspx">마이페이지</a></h4>';
str += '			<ul>';
str += '				<li><a href="http://tour.interpark.com/mypage/Default.aspx">나의 예약/결제내역</a></li>';
str += '				<li><a href="http://tour.interpark.com/mypage/MyEvalList.aspx">나의 상품평</a></li>';
str += '				<li><a href="http://tour.interpark.com/mypage/myInquiry_list.aspx">나의 상담/맞춤견적</a></li>';
str += '				<li><a href="http://tour.interpark.com/mypage/myReservationConsult_list.aspx">나의 예약상담 내역</a></li>';
str += '				<li><a href="http://tour.interpark.com/mypage/MyQnAList.aspx">나의 상품 Q&amp;A</a></li>';
str += '				<li><a href="http://tour.interpark.com/mypage/wishlist.aspx">나의 찜한상품</a></li>';
str += '				<li><a href="http://tour.interpark.com/mypage/MyGuildList.aspx">나의 프리야</a></li>';
str += '				<li><a href="http://tour.interpark.com/airtel/airtelcart.aspx">항공+호텔 장바구니</a></li>';
str += '				<li><a href="http://tour.interpark.com/mypage/housing_coupon.aspx">나의 할인쿠폰</a></li>';
str += '				<li><a href="http://ipointmall.interpark.com/ipoint/MyIpoint.do?_method=Main">마이 I-포인트</a></li>';
str += '				<li><a href="http://incorp.interpark.com/gate/html/LoyaltyProgramNew.html" target="_blank">우수고객제도</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/customer/">고객센터</a></h4>';
str += '			<ul>';
str += '				<li><a href="http://tour.interpark.com/customer/noticelist.aspx">공지사항</a></li>';
str += '				<li><a href="http://tour.interpark.com/customer/faq.aspx">자주묻는질문</a></li>';
str += '				<li><a href="http://tour.interpark.com/customer/consultlist.aspx">고객상담/맞춤견적</a></li>';
str += '				<li><a href="http://tour.interpark.com/customer/telconsult.aspx">전화상담 안내</a></li>';
str += '				<li><a href="http://tour.interpark.com/customer/meetingOversea.aspx">모이는 장소</a></li>';
str += '				<li><a href="http://tour.interpark.com/company/companyCopyright.aspx">저작권고지</a></li>';
str += '				<li><a href="http://tour.interpark.com/company/companyOutsidecovenant.aspx">국외여행 약관</a></li>';
str += '				<li><a href="http://tour.interpark.com/company/companyDomesticcovenant.aspx">국내여행 약관</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/event">이벤트혜택존</a></h4>';
str += '			<ul>';
str += '				<li><a href="http://tour.interpark.com/event/event_list.aspx?region=999">이벤트&amp;기획전</a></li>';
str += '				<li><a href="http://tour.interpark.com/event/customerzone/evalmain.aspx">이달의 BEST상품평</a></li>';
str += '				<li><a href="http://tour.interpark.com/event/tourpoll">공감투표</a></li>';
str += '				<li><a href="http://tour.interpark.com/event/CouponList.aspx">상품할인&amp;환전면세점쿠폰</a></li>';
str += '				<li><a href="http://tour.interpark.com/customer/ipoint.aspx?type=I">I-포인트&amp;하트혜택</a></li>';
str += '				<li><a href="http://tour.interpark.com/customer/ipoint.aspx?type=B">블루멤버스 포인트 혜택</a></li>';
str += '				<li><a href="http://tour.interpark.com/customer/creditcard01.aspx">신용카드혜택</a></li>';
str += '				<li><a href="http://tour.interpark.com/event/customerzone/company_benefit.aspx">제휴사혜택</a></li>';
str += '				<li><a href="http://tour.interpark.com/category/insurance/main.aspx">해외여행자보험</a></li>';
str += '				<li><a href="http://tour.interpark.com/category/insurance/main.aspx">비자신청</a></li>';
str += '				<li><a href="http://tour.interpark.com/event/event_winning_list.aspx">당첨자발표</a></li>';
str += '				<li><a href="http://tour.interpark.com/event/news/news_list.aspx">인터파크투어 소식</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit"><a href="http://tour.interpark.com/freeya">프리야 여행정보</a></h4>';
str += '			<ul>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=19691">싱가포르</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=18781">보라카이</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=20190">방콕</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=20450">타이페이</a>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=17226">도쿄</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=17184">오사카</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=17006">후쿠오카</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=17178">오키나와</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=15528">홍콩</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=12261">상해</a> | <a href="http://tour.interpark.com/freeya/CityMain.aspx?citycd=12077">북경</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=14526">런던</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=13912">파리</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=16796">로마</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=12909">바르셀로나</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=19868">루체른</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=19917">취리히</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=15575">플리트비체</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=10715">시드니</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=10398">골드코스트</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=18610">퀸스타운</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=21856">하와이</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=22787">뉴욕</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=11957">토론토</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=11975">밴쿠버</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=11458">밴프/로키</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=12011">옐로우나이프</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=11743">몬트리올</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/City.aspx?citycd=17475">부산</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=17402">제주도</a> | <a href="http://tour.interpark.com/freeya/City.aspx?citycd=24606">경주</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<div class="spot">';
str += '			<h4 class="tit add1">기타정보</h4>';//
str += '			<ul>';
//str += '				<li><a href="http://tour.interpark.com/planner/index.aspx">프리야플래너 작성하기</a></li>';
str += '				<li><a href="javascript:openPlanner();">프리야플래너 작성하기</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/ThemeMain.aspx">프리야 핫토픽</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/Discovery/List.aspx">여행의 발견</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/Movie/List.aspx">플레이 프리야</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/Info/Weather.aspx">날씨정보</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/Info/Exchange.aspx">환율정보</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/Info/Time.aspx">시차정보</a></li>';
str += '				<li><a href="http://tour.interpark.com/freeya/info/TogetherList.aspx">함께떠나요</a></li>';
str += '			</ul>';
str += '		</div>';
str += '		<a href="javascript:allCategoryPartView(\'allCate3\');"><img src="http://openimage.interpark.com/tourpark/tour/common/docu_head/btn_open02.gif" alt="열기" class="btn-open" /></a>';
str += '		<a href="javascript:allCategoryView(\'allCategory\', \'none\');" onblur="hide_glayer(\'allCategory\');"><img src="http://openimage.interpark.com/tourpark/tour/common/docu_head/btn_close02.gif" alt="닫기" class="btn-close" /></a>';
str += '	</div>';
str += '</div>';
str += '';
str += '<div class="mall-module">';
//str += '	<h2><a href="javascript:MallView(\'block\');"><img id="imgMall" src="http://openimage.interpark.com//tourpark/tour/common/docu_head/category_view02_on.gif" alt="전문몰" /></a></h2>';

//if(cateMain == "tour_main")
//if(isCateMain)
if(isViewFlag)
{
    str += '	<h2><a href="javascript:MallView(\'block\');"><img id="imgMall" src="http://openimage.interpark.com//tourpark/tour/common/docu_head/category_view02_on.gif" alt="전문몰" /></a></h2>';
    str += '	<ul id="mallArea" class="mall-list">';
}
else
{
    str += '	<h2><a href="javascript:MallView(\'block\');"><img id="imgMall" src="http://openimage.interpark.com//tourpark/tour/common/docu_head/category_view02_off.gif" alt="전문몰" /></a></h2>';
    str += '	<ul id="mallArea" class="mall-list" style="display:none;">';
}

str += '		<li><a href="http://tour.interpark.com/resort/clubmed?mbn=' + cateMain + '&mln=tour_clubmed"><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/mall_1_01.gif" alt="클럽메드" /></a></li>';
str += '		<li><a href="http://tour.interpark.com/resort/pic?mbn=' + cateMain + '&mln=tour_PIC"><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/mall_1_02.gif" alt="PIC" /></a></li>';
str += '		<li><a href="http://tour.interpark.com/mall/?mallcd=164&mbn=' + cateMain + '&mln=tour_maldives"><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/mall_1_06.gif" alt="몰디브" /></a></li>';
str += '		<li><a href="http://tour.interpark.com/mall/?mallcd=172&mbn=' + cateMain + '&mln=tour_mauritius"><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/mall_1_07.gif" alt="모리셔스 세이셸" /></a></li>';
str += '		<li><a href="http://tour.interpark.com/themetour?mbn=' + cateMain + '&mln=tour_themetour"><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/mall_1_03.gif" alt="먹go찍go" /></a></li>';
str += '		<li><a href="http://tour.interpark.com/mall/?mallcd=171&mbn=' + cateMain + '&mln=tour_ryokan"><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/mall_1_04.gif" alt="일본료칸" /></a></li>';
str += '		<li><a href="http://tour.interpark.com/mall/?mallcd=92&mbn=' + cateMain + '&mln=tour_guide"><img src="http://openimage.interpark.com//tourpark/tour/common/docu_head/mall_1_05.gif" alt="가이드투어" /></a></li>';
str += '	</ul>';
//str += '	<a href="javascript:MallView(\'toggle\');"><img id="imgClose" src="http://openimage.interpark.com//tourpark/tour/common/docu_head/btn_close01.gif" alt="닫기" class="btn-close" style="display:none;" /></a>';
str += '	<a href="javascript:MallView(\'toggle\');"><img id="imgClose" src="http://openimage.interpark.com//tourpark/tour/common/docu_head/btn_close01.gif" alt="닫기" class="btn-close" ';

//if(cateMain == "tour_main")
//if(isCateMain)
if(isViewFlag)
    str += ' style="display:;" ';
else
    str += ' style="display:none;" ';

str +='     /></a>';

str += '</div>';
//str += '<p id="divTop_Hot" class="news-line"></p>';
//str += '<em class="txt-banner"><a href="#">대한민국 NO1. <span>온라인 여행 파트너!</span></a></em>';
//str += '</div>';
//str += '<h1>투어 본문 컨텐츠</h1>';

var isHTTP = window.location.href.indexOf("http://") != -1;
var isHTTPS = window.location.href.indexOf("https://") != -1;
var openServerPrefix = "http://openimage.interpark.com";
var sslServerPrefix = "https://sslimage.interpark.com";

if (isHTTPS) {
    while (str.indexOf(openServerPrefix) != -1) {
        str = str.replace(openServerPrefix, sslServerPrefix);
    }
}
//전체 카테고리 보기
function allCategoryView(objId, displayType)
{
	var dis = document.getElementById(objId);
//	if(!displayType) displayType = 'block';
	
	var eleSrc = document.getElementById("imgAllcate").getAttribute("src");
	
//	if(dis.style.display != displayType)
    if(displayType == "toggle")
	{   
	    if(dis.style.display == "block" || dis.style.display == "" )
	    {
	        dis.style.display = 'none';
	        document.getElementById("imgAllcate").setAttribute("src", eleSrc.replace("_on","_off"));
	        allCategoryPartView("allCate1");
        }
        else
        {
            dis.style.display = "";
            document.getElementById("imgAllcate").setAttribute("src", eleSrc.replace("_off","_on"));
//            allCategoryPartView("allCate1");
            categoryDispCont("allCate1", "init");
            categoryDispCont("allCate2", "off");
            categoryDispCont("allCate3", "off"); 
        }
	}	
	else 
	{
	    dis.style.display = 'none';
	    document.getElementById("imgAllcate").setAttribute("src", eleSrc.replace("_on","_off"));
	}
}
//전체 카테고리 항목 펼치기 닫기
function allCategoryPartView(objid)
{
    if(objid == "allCate2")
    {
        categoryDispCont("allCate1", "off");
        categoryDispCont("allCate2", "on");
        categoryDispCont("allCate3", "off");
    }
    else if(objid == "allCate3")
    {
        categoryDispCont("allCate1", "off");
        categoryDispCont("allCate2", "off");
        categoryDispCont("allCate3", "on");
    }
    else if(objid == "allCate1")
    {
        categoryDispCont("allCate1", "on");
        categoryDispCont("allCate2", "off");
        categoryDispCont("allCate3", "off");   
    }
    else
    {
        categoryDispCont("allCate1", "off");
        categoryDispCont("allCate2", "off");
        categoryDispCont("allCate3", "off");
    }
}

function categoryDispCont(objid, classType)
{
    if(classType == "off")
    {
        var element = document.getElementById(objid);   
        element.className = element.className.replace("on","");
        var eleSrc = document.getElementById("img"+objid).getAttribute("src");
        document.getElementById("img"+objid).setAttribute("src", eleSrc.replace("_on","_off"));
            
    }
    else if(classType == "init")
    {
        var element = document.getElementById(objid);   
        element.className = element.className.replace("on","");        
        element.className = element.className + " on";
        
        var eleSrc = document.getElementById("img"+objid).getAttribute("src")
        document.getElementById("img"+objid).setAttribute("src", eleSrc.replace("_off","_on")); 
            
    }
    else
    {
        var element = document.getElementById(objid);    
        var displayMode = element.className;
        
        if(displayMode.lastIndexOf("on") > -1)      
        {
            element.className = element.className.replace("on","");
            var eleSrc = document.getElementById("img"+objid).getAttribute("src");
            document.getElementById("img"+objid).setAttribute("src", eleSrc.replace("_on","_off"));
        }
        else    
        {
            element.className = element.className + " on";
            var eleSrc = document.getElementById("img"+objid).getAttribute("src")
            document.getElementById("img"+objid).setAttribute("src", eleSrc.replace("_off","_on"));        
        }
    }
}

//imgAllcate

//전문몰 열기/닫기
function MallView(viewType)
{
    var eleSrc = document.getElementById("imgMall").getAttribute("src");

    if(document.getElementById("mallArea").style.display == "none")
    {   
        document.getElementById("mallArea").style.display = "block";
        document.getElementById("imgClose").style.display = "inline";
        
        document.getElementById("imgMall").setAttribute("src", eleSrc.replace("_off","_on"));        
    }
    else
    {
        document.getElementById("mallArea").style.display = "none";
        document.getElementById("imgClose").style.display = "none";
        
        document.getElementById("imgMall").setAttribute("src", eleSrc.replace("_on","_off"));
    }
}

//프리야플래너 작성하기 새창
function openPlanner()
{   
    window.open('/planner/index.aspx?mbn=freeya&mln=freeya_leftwrite', '_blank', 'resizable=yes, scrollbars=no, status=no, width=1000, height=700');    
}

document.write(str);