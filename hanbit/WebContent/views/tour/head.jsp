<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<head>
<title>싸니까 믿으니까 인터파크 투어</title>
<meta charset="utf-8">
<meta name="google-site-verification" content="Ewb-DiXNaiHPgHx7lGzlPtVaIwTx1th2v3T-lHDelhQ" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="keywords" content="인터파크투어, 여행사, 추천여행사, 해외항공, 해외호텔, 자유여행, 패키지여행, 에어텔, 국내항공, 국내호텔, 국내콘도/리조트, 국내펜션, 제주여행, 테마여행, 프리야, 여행정보">
<meta name="description" content="최저가 항공권 예약부터 전세계 호텔,여행예약까지 모든 여행을 원스톱으로 해결할 수 있는 대한민국 No1 온라인여행파트너, 인터파크투어">
<meta name="robots" content="index, follow">
<link href="http://openimage.interpark.com/tourpark/tour/common/interparkn.ico" rel="shortcut icon" />
<script type="text/javascript" src="global/js/prototype.js" charset="euc-kr"></script>
<script type="text/javascript" src="global/js/common.js" charset="euc-kr"></script>
<script type="text/javascript" src="global/js/gate.js" charset="euc-kr"></script>
<script type="text/javascript" src="global/js/virtualGET.js?ver=20140506_1" defer="defer" charset="euc-kr"></script>

<script type="text/javascript" src="global/js/jquery.js" language="javascript" ></script>
<script type="text/javascript" src="global/js/json2.js"></script>

<script type="text/javascript" src="global/js/hDate.js" defer="defer"></script>

<link rel="stylesheet" type="text/css" href="global/css/layout.css" /> 
<link rel="stylesheet" type="text/css" href="global/css/ui.css" /> 
<link rel="stylesheet" type="text/css" href="global/css/index_ui.css" /> 

<!-- 메인 개편 -->
<!-- 이미지 객체처리 -->
<script type="text/javascript">
var arrImageEvent = new Array(); //이벤트기획전 이미지 객체
var arrImageKeyword = new Array(); //키워드링크 이미지 객체
var arrImageGoods = new Array(); //상품 이미지 객체
var arrImageIcon = new Array(); //상품 아이콘 이미지 객체

//상품 아이콘 이미지 조회
function getArrIconInfo(modifierCD)
{
    var img;
    
    if($j.inArray(modifierCD, arrImageIcon) < 0)
    {
        arrImageIcon.push(modifierCD);        
        
        img = new Image();
        img.src = GetIcon(escape(modifierCD));        
        
        arrImageIcon[modifierCD] = img;
    }
    else
    {
        img = arrImageIcon[modifierCD];
    }
    
    return img;
}

//이벤트 이미지 조회
function getArrEventInfo(strName, index, ms)
{
    var img;

    if($j.inArray(strName, arrImageEvent) < 0)
    {
        arrImageEvent.push(strName);
        arrImageEvent[strName] = new Array();
        
        img = new Image();
        img.src = getEventImgURL(ms.imageURL);
        img.alt = ms.eventTitle;
        
        arrImageEvent[strName][index] = img;
    }
    else if(arrImageEvent[strName][index] == "undefined" || arrImageEvent[strName][index] == null )
    {
        img = new Image();
        img.src = getEventImgURL(ms.imageURL);
        img.alt = ms.eventTitle;
    
        arrImageEvent[strName][index] = img;
    }
    else
    {
        img = arrImageEvent[strName][index];
    }
    
    return img;
}

//키워드 이미지 조회
function getArrKeywordInfo(strName, index, ms)
{
    var img;

    if($j.inArray(strName, arrImageKeyword) < 0)
    {
        arrImageKeyword.push(strName);
        arrImageKeyword[strName] = new Array();                
        
        img = new Image();
        img.src = getImageURL(ms.imgURL);
        img.alt = ms.keyword;
        
        arrImageKeyword[strName][index] = img;
    }
    else if(arrImageKeyword[strName][index] == "undefined" || arrImageKeyword[strName][index] == null )
    {
        img = new Image();
        img.src = getImageURL(ms.imgURL);
        img.alt = ms.keyword;
    
        arrImageKeyword[strName][index] = img;
    }
    else
    {
        img = arrImageKeyword[strName][index];
    }
    
    return img;
}

//상품 이미지 조회
//상품 이미지 객체 처리는 3차 배열 처리 - arrImageGoods[section명][그룹CD][index]
function getArrGoodsInfo(strName, tabGroupIndex, index, ms)
{
    var img;

    if($j.inArray(strName, arrImageGoods) < 0)
    {
        arrImageGoods.push(strName);
        arrImageGoods[strName] = new Array();
        arrImageGoods[strName].push(tabGroupIndex);
        arrImageGoods[strName][tabGroupIndex] = new Array();
        
        img = new Image();
        img.src = GetProductImageUrl(ms);
        img.alt = ms.dispgoodsNM;
        
        arrImageGoods[strName][tabGroupIndex][index] = img;
    }
    else if($j.inArray(strName, arrImageGoods) >= 0)
    {
        if($j.inArray(tabGroupIndex, arrImageGoods[strName]) < 0)
        {
            arrImageGoods[strName].push(tabGroupIndex);
            arrImageGoods[strName][tabGroupIndex] = new Array();
            
            img = new Image();
            img.src = GetProductImageUrl(ms);
            img.alt = ms.dispgoodsNM;
            
            arrImageGoods[strName][tabGroupIndex][index] = img;
        }
        else if(arrImageGoods[strName][tabGroupIndex][index] == "undefined" || arrImageGoods[strName][tabGroupIndex][index] == null )
        {
            img = new Image();
            img.src = GetProductImageUrl(ms);
            img.alt = ms.dispgoodsNM;
            
            arrImageGoods[strName][tabGroupIndex][index] = img;   
        }
        else
        {
            img = arrImageGoods[strName][tabGroupIndex][index];
        }
    }

    return img;
}
</script>

<!--/* 이벤트 기획전 관련 스크립트 모음 */-->
<script type="text/javascript">

var mainEventCls = function(){
    this.count;
    this.eventTitle;
    this.imageURL;
    this.href;
    this.target;
}

var contentSubImgSrcOff = "http://openimage.interpark.com/tourpark/tour/common/docu_head/rolling02_off.png";
var contentSubImgSrcOn = "http://openimage.interpark.com/tourpark/tour/common/docu_head/rolling02_on.png";

//이벤트 기획전 섹션정보 조회
function InitEventSection()
{
    var strNames = "Right_Event_/,Middle_Event";   
    var arrNames = getArrLists(strNames,"_/,");    
    
    for(var i=0; i<arrNames.length ; i++)
    { 
        try{
            //레이아웃디스플레이처리
            SetEventSectionLayout(arrNames[i]);
            //데이타바인딩처리
            BindingEventSectionData(arrNames[i]);
        }
        catch(e){}         
    }
}
//데이타바인딩처리
function BindingEventSectionData(strName)
{
    var sectioCount = GetEventSectionClassCount(strName,0);        
    
    if(sectioCount != "" && Number(sectioCount) > 0)
    {   
        //이벤트 기획전 데이타 바인딩
        EventDataBinding(strName, 0);
    }
}

function SubstringMbn(msHref)
{
    var retVal = "";
    
    if(msHref != "")
    {
        var mbnIndex = 0;
        mbnIndex = msHref.lastIndexOf("&mbn");
        if(mbnIndex == -1)
            retVal = msHref;
        else
            retVal = msHref.substring(0,mbnIndex);
    }
    
    return retVal;
}

function EventDataBinding(strName, index)
{
    try{
    
    var ms = new mainEventCls();
    ms = GetEventSectionClassInfo(strName, index);

    if($j("#a_"+strName).length)
    {
        $j("#a_"+strName).attr("href",getMainParamAddUrl(SubstringMbn(ms.href),strName,index));
        $j("#a_"+strName).attr("target",ms.target);
    }
    
    if($j("#img_"+strName).length)
    {
        var img = getArrEventInfo(strName, index, ms);
    
        $j("#img_"+strName).attr("src",img.src);
        $j("#img_"+strName).attr("alt",img.alt);
//        $j("#img_"+strName).attr("src",getEventImgURL(ms.imageURL));
//        $j("#img_"+strName).attr("alt",ms.eventTitle);
    }

    //서브메뉴 클래스 변경
    if($j("#sub"+strName).length)
        setOnClass($j("#sub"+strName), "a", index);
//        $j("#sub"+strName).children("a").removeClass("on").eq(index).addClass("on");
    
    }
    catch(e){}
    
}

function getEventImgURL(imageURL)
{
    return "http://tourimage.interpark.com/Sites/Tour/Event/Main/" + imageURL;
}

function subEventMenuMouseOver(strName, index)
{
    stopRollingDiv(strName);
    EventDataBinding(strName, index);    
}

function subEventMenuMouseOut(strName)
{   
    CallRolling(strName);
    //RollNext(strName);
}

//섹션 동적 레이아웃 그리기
function SetEventSectionLayout(strName)
{
    if($j("#div"+strName).length)
    {
        var sectioCount = GetEventSectionClassCount(strName,'0');        
        
        if(sectioCount != "" && Number(sectioCount) > 0)
        {
            //서브메뉴
            SetEventSubMenuLayer($j("#div"+strName), strName, sectioCount);
        }
    }
}

function GetEventSectionClassCount(strName, index)
{
    try{    
            if($j("#hdd"+strName).length)
            {   
                var strJSONText = $j("#hdd"+strName).val();
                var strJSON = JSON.parse(strJSONText);                    
            
                return strJSON[index]["Count"];
            
            }
            else
                return 0;
        }
        catch(e){
            return 0;
        }
}

function SetEventSubMenuLayer($parents, strName, sectionCount)
{
    $subArea = $parents.find("#sub"+strName);
    if(!$subArea.length)
        return;
    
    var str = '';
    
    if(sectionCount > 1)
    {
        for(var i= 0; i < Number(sectionCount); i++)
        {
            try{
                var ms = new mainEventCls();
                ms = GetEventSectionClassInfo(strName, i);

                var strAlt = (i+1) + " 번째 정보";
                
    //            str += '<a href="'+ ms.href +'" target="' + ms.target + '"';
                str += '<a href="javascript:;" title="' + ms.eventTitle + '" ';
                str += 'onmouseover="subEventMenuMouseOver(\''+ strName +'\', ' + i + ')" onfocus="subEventMenuMouseOver(\''+ strName +'\', ' + i + ')"';
                str += 'onmouseout="subEventMenuMouseOut(\''+ strName +'\')" >';
//                str += ms.eventTitle;
                str += '<img src="' + contentSubImgSrcOff + '" alt="' + strAlt + '" />';
                str += '</a>'
            }
            catch(e){}
        }
    }
    else
    {
        $j("#stop" + strName).hide();
        $j("#go" + strName).hide();        
    }
    
    $subArea.html(str);
}

function GetEventSectionClassInfo(strName, index)
{
    try{
        if($j("#hdd"+strName).length)
        {
            var ms = new mainEventCls();
            
            var strJSONText = $j("#hdd"+strName).val();
            var strJSON = JSON.parse(strJSONText);
            
            ms.eventTitle = strJSON[index]["EventTitle"];
            ms.imageURL = strJSON[index]["ImageURL"];
            ms.href = strJSON[index]["Href"];
            ms.target = strJSON[index]["Target"];
            
            return ms;
        }
    }
    catch(e){}
    
}

</script>
<!--/* 상품 관련 스크립트 모음 */-->
<script type="text/javascript">
var mainGoodsCls = function(){        
    this.tabIndex;
    this.count;
    this.sectionCateGroups;
    this.sectionCateGroup;
    
    this.seq;
    this.dispgoodsNM;
    this.modifierCD;
    this.displayExplain;
    this.normalPrice;
    this.imgURL; 
    this.imageFileNM;
    this.baseGoodsCD;
    this.goodsType;
    this.supplierCD;
    this.subCategory;
    this.linkURL;
    this.goodsPrice;
    
    this.cityCD;
    this.thumbnailImagePath;
    this.thumbnailImageFileName;
    this.imageFileType;
    this.targetCateCD;
}
    
function InitGoodsSection()
{
    var strNames = "Goods_HotSale_/,Goods_Recomm_Pkg_/,Goods_Recomm_Free_/,Goods_Recomm_Foreign_Hodel_/,Goods_Recomm_Domestic_Hotel_/,Goods_MinPrice";   
    var arrNames = getArrLists(strNames,"_/,");
    
    var isGoods_Recomm = false;
    var isGoods_RecommHotel = false;
    
    for(var i=0; i<arrNames.length ; i++)
    {  
        try{
        
            //추천상품 섹션
            var strName = arrNames[i];
            var strCon = arrNames[i];
            
            var tabIndex = 0;
            var tabGroupIndex = 0;
            var infoIndex = 0;

            if(strName == "Goods_Recomm_Free" || strName == "Goods_Recomm_Pkg")
            {
                strCon = "Goods_Recomm";
            
                if(!isGoods_Recomm)
                {
                    tabIndex = getRandomNum(3);
                    var tabName = strName;
                    if(tabIndex == 0 )
                        tabName = "Goods_Recomm_Pkg";
                    else if(tabIndex == 1)
                        tabName = "Goods_Recomm_Free";
                    else if(tabIndex == 2)
                        tabName = "Contents_Airtel";
                    
                    if(getTabGroupCount(tabName) > 0)
                    {
                        tabGroupIndex = getRandomNum(getTabGroupCount(tabName));
                        infoIndex = getRandomNum(getInfoCount(tabName,tabGroupIndex));
                    }
                
                    //탭변경
                    TabChange(strCon, tabName, tabIndex);
                    //레이아웃디스플레이처리
                    SetGoodsSectionLayout(strCon, tabName, tabGroupIndex, infoIndex);
                    //데이타바인딩처리
                    //BindingGoodsSectionData(arrNames[i]);
                    BindingGoodsSectionData(tabName, tabIndex, tabGroupIndex, infoIndex)
                }
                isGoods_Recomm = true;
                
            }
            else if(strName == "Goods_Recomm_Domestic_Hotel" || strName == "Goods_Recomm_Foreign_Hodel")
            {
                //추천호텔섹션 
                strCon = "Goods_RecommHotel";
                
                if(!isGoods_RecommHotel)
                {
                    tabIndex = getRandomNum(2);
                    var tabName = strName;
                    if(tabIndex == 0 )
                        tabName = "Goods_Recomm_Foreign_Hodel";
                    else if(tabIndex == 1)
                        tabName = "Goods_Recomm_Domestic_Hotel";
                    
                    if(getTabGroupCount(tabName) > 0)
                    {
                        tabGroupIndex = getRandomNum(getTabGroupCount(tabName));
                        infoIndex = getRandomNum(getInfoCount(tabName,tabGroupIndex));
                    }
                
                    //탭변경
                    TabChange(strCon, tabName, tabIndex);
                    //레이아웃디스플레이처리
                    SetGoodsSectionLayout(strCon, tabName, tabGroupIndex, infoIndex);
                    //데이타바인딩처리
                    BindingGoodsSectionData(tabName, tabIndex, tabGroupIndex, infoIndex)
                }
                isGoods_RecommHotel = true;
            }
            else
            {
                if(getTabGroupCount(arrNames[i]) > 0)
                {
                    tabGroupIndex = getRandomNum(getTabGroupCount(arrNames[i]));
                    infoIndex = getRandomNum(getInfoCount(arrNames[i],tabGroupIndex));
                }
                //레이아웃디스플레이처리
                SetGoodsSectionLayout(strCon, strName, tabGroupIndex, infoIndex);
                //데이타바인딩처리
                BindingGoodsSectionData(strName, tabIndex, tabGroupIndex, infoIndex)
            }
        }
        catch(e){}
    }
}

function InitArea(strName)
{
    var strCon = strName;        
        
        if(strName == "Goods_Recomm_Free" || strName == "Goods_Recomm_Pkg" || strName == "Contents_Airtel")
            strCon = "Goods_Recomm";
        else if(strName == "Goods_Recomm_Domestic_Hotel" || strName == "Goods_Recomm_Foreign_Hodel")
            strCon = "Goods_RecommHotel";
        else if(strName == "Goods_MinPrice")
        {
            strCon = "Goods_MinPrice_" + infoIndex;            
        }

        if($j("#a_"+strCon).length)
        {   
            $j("#a_"+strCon).attr("href","javascript:;");
            $j("#a_"+strCon).attr("title","");
        }
        
        if($j("#Modifier_"+strCon).length)
        {   
            $j("#Modifier_"+strCon).hide();
        }
        
        if($j("#img_"+strCon).length)
        {
            $j("#img_"+strCon).attr("src","http://openimage.interpark.com/tourpark/tour/main/no_img1.gif");
	        $j("#img_"+strCon).attr("alt","");
        }
        
        if($j("#DisplayExplain_"+strCon).length)
            $j("#DisplayExplain_"+strCon).html("");
        
        if($j("#DispGoodsNM_"+strCon).length)
        {   
            $j("#DispGoodsNM_"+strCon).html("");
        }
            
        if($j("#AddValue1_"+strCon).length)
        {   
            $j("#AddValue1_"+strCon).html("");
        }
}

//탭별 그룹 그려주기
function CreateAllCateLayer(strCon, strName, tabGroupIndex)
{
//    try{
        if(!$j("#tab_"+strCon).length)
        return;

        var strJSONText = $j("#hddAllSectionGroups").val();
        var strCateJSON = JSON.parse(strJSONText);    
        var strHTML = "";
        
        var ms = new mainGoodsCls();
        ms = GetGoodsSectionClassInfo(strName, tabGroupIndex, 0);
        
        if(ms == null || ms == "")
        {   
            $j("#tab_"+strCon).html(strHTML);
            InitArea(strName);
            $subArea = $j("#div"+strCon).find("#sub"+strCon);
            $subArea.html(strHTML);
            return;
        }
        
        for(var i=0 ; i < strCateJSON.length ; i++)
        {   
            var cateVal = strCateJSON[i]["cateCD"];
            
            if($j.inArray(cateVal, ms.sectionCateGroups) >= 0)  
            {  
                strHTML += "<a href=\"javascript:GroupClick('" + strCon + "', '" + strName + "', " + i + ", '" + cateVal + "');\"";
                strHTML += " index=\"" + cateVal + "\" class='" + (cateVal == ms.sectionCateGroup ? "on" : "") + "' title='" + (cateVal == ms.sectionCateGroup ? "현재 상품" : "") + "' >";
                strHTML += strCateJSON[i]["cateNM"] + "</a>";
            }
        }
        
        $j("#tab_"+strCon).html(strHTML);
        
        ChangeTabCategorySort(strCon,strName);
//    }
//    catch(e){}
}

//섹션 그룹 수량 가져오기
function getTabGroupCount(strName)
{
    try
    {
        var ms = new mainGoodsCls();
        ms = GetGoodsSectionClassInfo(strName, 0, 0);

        return ms.sectionCateGroups.length;
    }
    catch(e){ return 0; }
    
}

//섹션 그룹 상품 수량 가져오기
function getInfoCount(strName, tabGroupIndex)
{
    try{
        var ms = new mainGoodsCls();
        ms = GetGoodsSectionClassInfo(strName, tabGroupIndex, 0);

        return ms.count;
    }catch(e){ return 0; }
}

//상품 섹션 레이아웃 그리기
function SetGoodsSectionLayout(strCon, strName, tabGroupIndex, infoIndex)
{
    if($j("#div"+strCon).length)
    {
//        var tabGroupIndex = 0; //추후 Random 처리
//        var infoIndex = 0; //추후 Random 처리
        
        var ms = new mainGoodsCls();
        ms = GetGoodsSectionClassInfo(strName, tabGroupIndex, infoIndex);
                
        var sectioCount = ms.count;
        
        if(sectioCount != "" && Number(sectioCount) > 0)
        {   
            //카테고리 그룹 그려주기
            CreateAllCateLayer(strCon, strName, tabGroupIndex);
            
            //서브 레이어 그려주기
            SetGoodsSubMenuLayer(strCon, strName, tabGroupIndex);
        }
    }
}

//섹션 정보 바인딩
function BindingGoodsSectionData(strName, tabindex, tabGroupindex, infoindex)
{
    var tabIndex = 0; //추후 random 처리
    var tabGroupIndex = 0; //추후 random 처리
    var infoIndex = 0; //추후 random 처리
    
    if(tabindex != null && tabindex != "undefined")
        tabIndex = tabindex;
        
    if(tabGroupindex != null && tabGroupindex != "undefined")
        tabGroupIndex = tabGroupindex;
        
    if(infoindex != null && infoindex != "undefined")
        infoIndex = infoindex;
    
    var ms = new mainGoodsCls();
    ms = GetGoodsSectionClassInfo(strName, tabGroupIndex, infoIndex);
                
    var sectioCount = ms.count;           
    
    if(sectioCount != "" && Number(sectioCount) > 0)
    {       
        if(strName == "Goods_MinPrice") //금주의 최저가
        {   
//            for(var i= 0; i < Number(sectioCount); i++)

            for(var i= 0; i < 4; i++)
            {   
                if(i < sectioCount)
                {
                    $j("#divGoods_MinPrice_"+i).show();
                    GoodsDataBinding(strName, tabGroupIndex, i);
                }
                else
                    $j("#divGoods_MinPrice_"+i).hide();
            }
        }
        else        
            GoodsDataBinding(strName, tabGroupIndex, infoIndex);
    }

}

//상품 섹션 서브메뉴 그리기
function SetGoodsSubMenuLayer(conName, strName, tabGroupIndex)
{
    try{
        $subArea = $j("#div"+conName).find("#sub"+conName);
        if(!$subArea.length)
            return;
        
        var ms = new mainGoodsCls();
        ms = GetGoodsSectionClassInfo(strName, tabGroupIndex, 0);                
        var sectioCount = ms.count;
        
        var str = '';
        if(sectioCount > 1)
        {
            for(var i= 0; i < Number(sectioCount); i++)
            {
                try{
                    var ms = new mainGoodsCls();
                    ms = GetGoodsSectionClassInfo(strName, tabGroupIndex, i);
                    
                    var strAlt = (i+1) + " 번째 정보";
                    
                    str += "<a href=\"javascript:;\" onmouseover=\"subGoodsMenuMouseOver('" + strName + "', '" + tabGroupIndex + "', '" + i + "');\" onfocus=\"subGoodsMenuMouseOver('" + strName + "', '" + tabGroupIndex + "', '" + i + "');\" title='" + ms.dispgoodsNM + "'>";
//                    str += ms.dispgoodsNM;
                    str += '<img src="' + contentSubImgSrcOff + '" alt="' + strAlt + '" />';
                    str += '</a>';
                }
                catch(e){}
            }
        }
        
        $subArea.html(str);
    }
    catch(e){}
}

function TabChange(conName, strName, tabindex)
{
    var $conArea = $j("#div" + conName).find("h3");
    
    if(!$conArea.length)
        return;
    
    //탭 클래스 정보 변경
    $conArea.each(function(i){
        if(i == tabindex)
        {
            $j(this).addClass("on");
            var tabImgSrc = $j(this).children("a:first").children("img:first").attr("src");
            $j(this).children("a:first").children("img:first").attr("src",tabImgSrc.replace("_off","_on"));
            
            if(strName == "Goods_Recomm_Free")
                $j(this).children("a:first").attr("title","현재 해외 자유여행 상품")
            else if(strName == "Goods_Recomm_Pkg")
                $j(this).children("a:first").attr("title","현재 해외 패키지 상품")
            else if(strName == "Goods_Recomm_Domestic_Hotel")
                $j(this).children("a:first").attr("title","현재 국내호텔 상품")
            else if(strName == "Goods_Recomm_Foreign_Hodel")
                $j(this).children("a:first").attr("title","현재 해외호텔 상품")
            else if(strName == "Contents_Airtel")
                $j(this).children("a:first").attr("title","현재 항공+호텔 상품")
        }
        else
        {
            $j(this).removeClass("on").children("a:first").attr("title","");
            
            var tabImgSrc = $j(this).children("a:first").children("img:first").attr("src");
            $j(this).children("a:first").children("img:first").attr("src",tabImgSrc.replace("_on","_off"));
        }
    });
}

//탭클릭
function TabClick(conName, strName, tabindex, tabGroupindex, infoindex)
{
    var tabIndex = 0;
    var tabGroupindex = 0;
    var infoindex = 0;
    
    if(tabindex != null && tabindex != "undefined")
        tabIndex = tabindex;
        
    if(tabGroupindex != null && tabGroupindex != "undefined")
        tabGroupindex = tabGroupindex;
        
    if(infoindex != null && infoindex != "undefined")
        infoindex = infoindex;

    TabChange(conName, strName, tabindex);
    
    //카테고리 그룹 그려주기
    CreateAllCateLayer(conName, strName, tabGroupindex);
    
    //변경된 카테고리 순서에 따른 원래의 인덱스값 조회(탭일경우 첫번재 그룹의 인데스값 조회)
    tabGroupindex = getTabGroupindex(conName, strName);
    
    //서브레이어 다시 그림    
    SetGoodsSubMenuLayer(conName, strName, tabGroupindex)
    
    //상품 정보 변경        
    GoodsDataBinding(strName, tabGroupindex, infoindex)
    
}

function getTabGroupindex(conName, strName, cateCD)
{
    try{
        
        var TabGroupindex = 0;    
        var cateVal = "";    
        
        var ms = new mainGoodsCls();
        ms = GetGoodsSectionClassInfo(strName, 0, 0);
        
        if(cateCD == "" || cateCD == null || cateCD == "undefined")
        {
            //탭클릭
            var CateSort = $j("#hddSort" + strName).val();
            if(CateSort.indexOf(";") != -1 && CateSort != "")
            {
                var arrCateSort = CateSort.split(";");
                if(arrCateSort.length > 0)
                {
                    for(var i=0 ; i < arrCateSort.length; i++)
                    {
                        if($j.inArray(arrCateSort[i], ms.sectionCateGroups) >= 0)
                        {
                            cateVal = arrCateSort[i];
                            TabGroupindex = $j.inArray(arrCateSort[i], ms.sectionCateGroups);
                            break;
                        }
                    }
                    
                    if(cateVal == "" && ms.sectionCateGroups.lenght > 0)
                    {
                        cateVal = ms.sectionCateGroups[0];
                    }
                }
            }
        }
        else
        {
            //그룹 클릭
            cateVal = cateCD;
            
            if($j.inArray(cateVal, ms.sectionCateGroups) >= 0)
            TabGroupindex = $j.inArray(cateVal, ms.sectionCateGroups);
        }
        
        //    $j("#tab_" + conName).children("a:visible").removeClass("on").attr("title","").eq(tabGroupIndex).addClass("on").attr("title","현재상품");
        $j("#tab_" + conName).children("a:visible").each(function(){
        
            $j(this).removeClass("on").attr("title","");            
            if($j(this).attr("index") == cateVal)
            {
                $j(this).addClass("on").attr("title","현재상품");
            }
            else if(cateVal == "" && $j(this).index() == 0)
            {
                $j(this).addClass("on").attr("title","현재상품");
            }
        });
        
        return TabGroupindex;  
    
    }
    catch(e){
        return 0;
    }
}

//탭 그룹 클릭
function GroupClick(conName, strName, tabGroupIndex, groupVal, infoIndex) //섹션영역명, 탭영역명, 탭그룹 인덱스
{  
    if(!$j("#tab_" + conName).length)
        return;
    
    tabGroupIndex = getTabGroupindex(conName, strName, groupVal);
    
    //서브레이어 다시 그림    
    SetGoodsSubMenuLayer(conName, strName, tabGroupIndex)
    
    var InfoIndex = 0;
    if(infoIndex != null && infoIndex != "undefined" )
        InfoIndex = infoIndex;
    
    //상품 정보 변경 
    if(strName == "Goods_MinPrice")       
    {
        var ms = new mainGoodsCls();
        ms = GetGoodsSectionClassInfo(strName, tabGroupIndex, 0);
                    
        var sectioCount = ms.count;  
        
        //for(var i= 0; i < Number(sectioCount); i++)
        for(var i= 0; i < 4; i++)
        {   
            if(i < sectioCount)
            {
                $j("#divGoods_MinPrice_"+i).show();
                GoodsDataBinding(strName, tabGroupIndex, i);
            }
            else
                $j("#divGoods_MinPrice_"+i).hide();
        }      
    }
    else
        GoodsDataBinding(strName, tabGroupIndex, InfoIndex);
}

//서브메뉴 마우스 오버
function subGoodsMenuMouseOver(strName, index, infoIndex)
{   
    GoodsDataBinding(strName, index, infoIndex);    
}

//섹션 아이템 상세 정보 조회
function GetGoodsSectionClassInfo(strName, tabGroupIndex, infoIndex)
{
    try{
        if($j("#hdd"+strName).length)
        {
            var ms = new mainGoodsCls();
            
            var strJSONText = $j("#hdd"+strName).val();
            var strJSON = JSON.parse(strJSONText);        
            
            ms.tabIndex = strJSON[tabGroupIndex]["tabIndex"];
            ms.count = strJSON[tabGroupIndex]["Count"];
            ms.sectionCateGroups = strJSON[tabGroupIndex]["SectionCateGroups"];
            ms.sectionCateGroup = strJSON[tabGroupIndex]["SectionCateGroup"];
            
            ms.seq = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["Seq"];
            ms.dispgoodsNM = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["DispGoodsNM"];
            ms.modifierCD = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["ModifierCD"];
            ms.displayExplain = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["DisplayExplain"];
            ms.normalPrice = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["AddValue1"];
            ms.imgURL = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["ImageURL"];
            ms.imageFileNM = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["ImageFileNM"];
            ms.baseGoodsCD = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["BaseGoodsCD"];
            ms.goodsType = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["GoodsType"];
            ms.supplierCD = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["SupplierCD"];
            ms.subCategory = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["SubCategory"];
            ms.goodsPrice = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["GoodsPrice"];
            ms.linkURL = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["LinkURL"];
            
            ms.cityCD = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["CityCD"];
            ms.thumbnailImagePath = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["ThumbnailImagePath"];
            ms.thumbnailImageFileName = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["ThumbnailImageFileName"];
            ms.imageFileType = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["ImageFileType"];
            ms.targetCateCD = strJSON[tabGroupIndex]["TabGroupGoods"][infoIndex]["TargetCateCD"];
            
            return ms;
        }
    }catch(e){}
}

//섹션 아이템 정보 바인딩
function GoodsDataBinding(strName, tabGroupIndex, infoIndex)
{
    try
    {
        var ms = new mainGoodsCls();
        ms = GetGoodsSectionClassInfo(strName, tabGroupIndex, infoIndex);
        
        var strCon = strName;        
        
        if(strName == "Goods_Recomm_Free" || strName == "Goods_Recomm_Pkg" || strName == "Contents_Airtel")
            strCon = "Goods_Recomm";
        else if(strName == "Goods_Recomm_Domestic_Hotel" || strName == "Goods_Recomm_Foreign_Hodel")
            strCon = "Goods_RecommHotel";
        else if(strName == "Goods_MinPrice")
        {
            strCon = "Goods_MinPrice_" + infoIndex;            
        }

        if($j("#a_"+strCon).length)
        {
            var anchorURL = GoodsPCDetailPage(ms.goodsType, ms.baseGoodsCD, ms.linkURL, ms.targetCateCD);
            $j("#a_"+strCon).attr("href",getMainParamAddUrl(anchorURL,strName,infoIndex));
            $j("#a_"+strCon).attr("title",ms.dispgoodsNM);
        }
        
        if($j("#Modifier_"+strCon).length)
        {   
            if(Trim(ms.modifierCD) == "" || ms.modifierCD == null || parseInt(ms.modifierCD) == "undefined" || parseInt(ms.modifierCD) == "NaN")
            {
                $j("#Modifier_"+strCon).hide();
            }
            else
            {
                $j("#Modifier_"+strCon).show();
//                $j("#Modifier_"+strCon).attr("src",GetIcon(escape(ms.modifierCD)));
                var img = getArrIconInfo(ms.modifierCD);
                $j("#Modifier_"+strCon).attr("src",img.src);
            }
        }
        
        if($j("#img_"+strCon).length)
        {
//            var imageURL = GetProductImageUrl(ms);                    
//            $j("#img_"+strCon).attr("src",imageURL);
//            $j("#img_"+strCon).attr("alt",ms.dispgoodsNM);
            var img = getArrGoodsInfo(strName, tabGroupIndex, infoIndex, ms);
            $j("#img_"+strCon).attr("src",img.src);
	        $j("#img_"+strCon).attr("alt",img.alt);
        }
        
        if($j("#DisplayExplain_"+strCon).length)
            $j("#DisplayExplain_"+strCon).html(ms.displayExplain);
        
        if($j("#DispGoodsNM_"+strCon).length)
        {
            if(strName == "Goods_MinPrice")
                $j("#DispGoodsNM_"+strCon).html(cutStringStr(ms.dispgoodsNM,23));
            else
                $j("#DispGoodsNM_"+strCon).html(ms.dispgoodsNM);
        }
            
        if($j("#AddValue1_"+strCon).length)
        {
//            var priValue = NumberToCurrency(ms.goodsPrice);
//            if(priValue == "")
//                priValue = ms.normalPrice;

            var priValue = ms.normalPrice; //투어어드민 등록 상품가
            if(priValue == "")
            {
                if(ms.goodsPrice == "" || ms.goodsPrice == "0") //상품자체가격
                {
                    priValue = "요금조회";
                }
                else
                {
                    priValue = NumberToCurrency(ms.goodsPrice);            
                }
            }
            else if(priValue == "0")            
            {
                priValue = "요금조회";
            }
            
            if(strName == "Contents_Airtel" || priValue == "요금조회")
                $j("#AddValue1_"+strCon).html(priValue);
            else
                $j("#AddValue1_"+strCon).html(priValue +  "원 ~");
            
        
//            if(strCon == "Goods_RecommHotel")    
//                $j("#AddValue1_"+strCon).html(ms.normalPrice);
//            else
//                $j("#AddValue1_"+strCon).html(ms.normalPrice +  "원 ~");
        }

        if($j("#sub"+strCon).length)
            setOnClass($j("#sub"+strCon), "a", infoIndex)
    }
    catch(e){}
    
}

//탭 그룹 정렬 순서 세팅
function ChangeTabCategorySort(strCon,strName)
{
    try{
        if(!$j("#hddSort" + strName).length)
            return;
        
        var $CateSort = $j("#hddSort" + strName);//정렬 컬럼 배열..이내용과 카테로리 컬럼 배열순서 맞춘다
        
        if($CateSort.val().indexOf(";") != -1 && $CateSort.val() != "")
        {        
            var arrCateSort = $CateSort.val().split(";");            
            if(arrCateSort.length > 1)
            {    
                for(var i=(arrCateSort.length-1); i>= 0 ; i--)
                {
                    $j("#tab_"+strCon).children("a").each(function(){
                        if($j(this).attr("index") == arrCateSort[i])
                        {
//                            $j("#tab_"+strCon).children("a:first").after($j(this));
                            $j("#tab_"+strCon).children("a:first").before($j(this));
                        }
                    });
                }
            }
        }
    }
    catch(e){}
}

</script>
<!--/* 모바일 스크립트 참조 // m/js/main.js */-->
<script type="text/javascript">
//단위계산

function NumberToCurrency(n)
{
    if(n == null || n == "") return 0;
    
    var reg = /(^[+-]?\d+)(\d{3})/;
    n = parseInt(n, 10);
    n += '';
    
    while (reg.test(n)) {
        n = n.replace(reg,'$1'+','+'$2');
    }
        
    return n;
} 
// 자바스크립트 trim
function Trim(s) {
  s += ''; // 숫자라도 문자열로 변환
  return s.replace(/^\s*|\s*$/g, '');
}
//아이콘 경로 
function GetIcon(modifierCD)
{
    //스크립트 오류 modifierCD 이상값 조회.. 원인 찾아볼것!...
    if(Number(modifierCD) != "NaN" && modifierCD != null)
    {
//        return "http://openimage.interpark.com/tourpark/tour/common/icon/air_119" + modifierCD  + "_1.gif";
        return "http://openimage.interpark.com/tourpark/tour/main/main_294" + modifierCD  + "_0.png";
    }
    else
        return "";
}

function GoodsPCDetailPage(type, baseGoodsCD, defaultURL, targetCateCD)
{
    var url = "";
    
    if(defaultURL != null && defaultURL != "")
        url = defaultURL;
    
    switch(type)
    {
        case "H":            
            url = "http://tour.interpark.com/Housing/goods/Goods_DetailInfo.aspx?GoodsCode=" + baseGoodsCD;
        break;
        case "P":
            url = "http://tour.interpark.com/goods/detail.aspx?BaseGoodsCd=" + baseGoodsCD + "&cate=" + targetCateCD;
            
        break;
        case "L":
            url = "http://hotel.interpark.com/Goods/Detail.aspx?HotelCode=" + baseGoodsCD;
        break;
    }
    
    return url;
}
// m/js/main.js참조
function GetProductImageUrl(v)
{
    var img_src = "http://tourimage.interpark.com/Sites/Tour/ByTemplate/098/" + v.imgURL;
        
    if(v.imgURL == "")
    {
        switch(v.goodsType)
        {
            case 'P':
                img_src = GetTourProductImage(v.baseGoodsCD, v.supplierCD, v.imageFileNM, 280);
            break;
            case 'H':
                img_src = GetHousingProductImage(v.baseGoodsCD, v.subCategory, 'b');
            break;
            case 'L':
                img_src = GetHotelThumbnailUrl(v.thumbnailImagePath, v.thumbnailImageFileName, v.imageFileType, v.imageFileNM, v.cityCD, "b");
            break;
        }
    }
    
    return img_src;
}
// m/js/main.js참조
// 여행 이미지 경로
function GetTourProductImage(baseGoodsCD, supplyCD, fileName, imageSize)
{
    if ((supplyCD == "02594" || supplyCD == "04088" || supplyCD == "05216" || supplyCD == "06071") && fileName.indexOf("http://") >= 0)
    {
        return fileName;
    }
    
    var url_Prefix = "http://tourimage.interpark.com/product/tour/";
    var productTypeCD = baseGoodsCD.substring(0, 1);
    var areaCD = baseGoodsCD.substring(1, 3);
    return url_Prefix + supplyCD + "/" + productTypeCD + areaCD + "/" + imageSize + "/" + fileName;
}
// m/js/main.js참조
// 숙박 이미지 경로
function GetHousingProductImage(baseGoodsCD, subCategory, fileSize)
{
    var cateName = "";
    switch(subCategory)
    {
        case "A5003":
            cateName = "Hotel";
        break;
        case "A5001":
            cateName = "Condo";
        break;
        case "A5002":
            cateName = "Pension";
        break;
    }
    var imageUrl = 'http://tourimage.interpark.com/Product/Housing/' + Trim(cateName) + '/' + Trim(baseGoodsCD) + '/' + Trim(baseGoodsCD) + '_01' + fileSize + '.jpg';
    return imageUrl;
}

// 해외호텔 썸네일 경로 
function GetHotelThumbnailUrl(thumbPath, thumbName, imgType, imgFileNM, cityCD, size)
{
    var sizeNM = "";
    var imgUrl = imgFileNM;
    
    if(thumbPath != "" && thumbName != "")
    {
        switch(size.toLowerCase())
        {
            case "b": sizeNM = "b288x208"; break;
            case "m": sizeNM = "m109x80"; break;
            case "s": sizeNM = "s97x79"; break;
            case "pb": sizeNM = "b469x335"; break;
            case "ps": sizeNM = "s80x60"; break;
            default: sizeNM = "m109x80"; break;
        }
        
        var arr = thumbName.split(".");
        
        if(arr.length > 0)
            imgUrl = "http://tourimage.interpark.com" + thumbPath + arr[0] + "_" + sizeNM + "." + arr[1];
    }
    else if(imgType == "F")
    {
        imgUrl = "http://tourimage.interpark.com/Product/Hotel/" + cityCD + "/280/" + imgFileNM;
    }
    
    return imgUrl;
}

</script>
<!--/* 키워드 관련 스크립트 모음 */-->
<script type="text/javascript">
 //키워드링크 클래스   
 var mainCls = function(){
    this.sectioCount;
    this.index;
    this.seq;
    this.keyword;
    this.keywordA;
    this.keywordB;
    this.linkURL;
    this.imgURL;
    this.isNewWindow;
};
//섹션정보 조회
function InitKeyWordSection()
{
    var strNames = "Top_Banner_/,Top_Hot_/,Contents_QuickSearch_Common_/,Contents_QuickSearch_Air_/,Contents_QuickSearch_Hotel_/,Contents_QuickSearch_AirHotel_/,Contents_QuickSearch_Travel_/,Contents_Banner_/,Contents_Freeya_/,Contents_TravelBanner_/,Contents_Mall_/,Left_Roll_/,Left_Banner_/,Contents_footer_/,Contents_QuickSearch_Air2_/,Contents_QuickSearch_Hotel2_/,Contents_QuickSearch_AirHotel2_/,Contents_QuickSearch_Travel2_/,Movie_Banner";   
    var arrNames = getArrLists(strNames,"_/,");    
    
    for(var i=0; i<arrNames.length ; i++)
    {  
        try{            
            //레이아웃디스플레이처리
            SetSectionLayout(arrNames[i]);
            //데이타바인딩처리
            BindingSectionData(arrNames[i]);
        
        }catch(e){}
    }
}
//섹션 동적 레이아웃 그리기
function SetSectionLayout(strName)
{
    if($j("#div"+strName).length)
    {
        var sectioCount = GetSectionClassCount(strName);        
        
        if(sectioCount != "" && Number(sectioCount) > 0)
        {
            //서브메뉴
            SetSubMenuLayer($j("#div"+strName), strName, sectioCount);
        }
    }
}
//섹션 정보 바인딩
function BindingSectionData(strName)
{
    var sectioCount = GetSectionClassCount(strName);
    
    if(sectioCount != "" && Number(sectioCount) > 0)
    {
        if(strName == "Top_Banner" || strName == "Bottom_Banner") //divTop_Banner, Bottom_Banner
        //if(strName == "Top_Banner") //divTop_Banner
        {
            if(!$j("#div"+strName).length)
                return;
            //띠 배너
            CreateTopBannerLayer($j("#div"+strName),strName ,sectioCount);
        }
        else if(strName == "Top_Hot") //divTop_Hot(categoryView.js파일에 위치)
        {
            if(!$j("#div"+strName).length)
                return;
            //HOT 한줄문구
            CreateHot($j("#div"+strName),strName ,sectioCount);
        }
        else if(strName == "Contents_QuickSearch_Common" || strName == "Contents_QuickSearch_Air" || strName == "Contents_QuickSearch_Hotel"
        || strName == "Contents_QuickSearch_AirHotel" || strName == "Contents_QuickSearch_Travel") //퀵서치영역 키워드링크
        {   
            //퀵서치배너
            CreateMainSmallBanner(strName ,sectioCount);
            
        }else if(strName == "Contents_QuickSearch_Air2" || strName == "Contents_QuickSearch_Hotel2"
        || strName == "Contents_QuickSearch_AirHotel2" || strName == "Contents_QuickSearch_Travel2") //퀵서치영역 키워드링크
        {   
            //퀵서치배너
            CreateMainSmallBanner(strName ,sectioCount);
        }
        else if(strName == "Contents_Banner") // divContents_Banner_0 / divContents_Banner_1 // divContents_Banner_2 // divContents_Banner_3
        {
            //스몰배너
            CreateMainSmallBanner(strName, sectioCount);
        }      
        else
        {
            if(!$j("#div"+strName).length)
                return;
                
            var keywordRandomIndex = 0;
            
            if(strName == "Contents_Freeya" || strName == "Contents_TravelBanner" || strName == "Contents_Mall"|| strName == "Movie_Banner")
            {
                keywordRandomIndex = getRandomNum(sectioCount);
            }
        
            //키워드 데이타 바인딩(strName : 키워드항목명[enum], 키워드항목 아이템 인덱스)
            DataBinding(strName, keywordRandomIndex);
        }
    }
}

//소배너 바인딩
function CreateMainSmallBanner(strName, sectioCount)
{   
    for(var i= 0; i < Number(sectioCount); i++)
    {            
        var objID = strName + "_" + i; //소배너 0,1,2,3 차례로 바인딩시킨다.
    
        var ms = new mainCls();
        ms = GetSectionClassInfo(strName, i);
        
        if(strName == "Contents_QuickSearch_Common")
        {
            if(ms.imgURL == "")
            {
                $j("#div"+ objID).hide();
//                 $j("#a_"+ objID).hide();
            }
            else
            {
                $j("#div"+ objID).show();
                
                if($j("#a_"+objID).length)
                {
                    if(ms.linkURL == "")
                    {
                        $j("#a_"+objID).css("cursor","default");
                    }
                    else
                    {
                        $j("#a_"+objID).css("cursor","pointer");
                        $j("#a_"+objID).attr("href",getMainParamAddUrl(ms.linkURL, strName, i));
                        
                        if(ms.isNewWindow == "Y")
                            $j("#a_"+objID).attr("target","_blank");
                        else
                            $j("#a_"+objID).attr("target","_self");
                        
                        $j("#a_"+objID).attr("title",ms.keyword);
                    }
                }
                
                if($j("#img_"+objID).length)
                {
                    $j("#img_"+objID).attr("src",getImageURL(ms.imgURL));
                    $j("#img_"+objID).attr("alt",ms.keyword);
                }  
            }
        }
        else
        {
            //항공_해외/항공_국내/여행_해외/여행_국내 3번 배너 링크 없을경우 SMS 스크립트 연결
            if((strName == "Contents_QuickSearch_Air"  || strName == "Contents_QuickSearch_Air2"  || strName == "Contents_QuickSearch_Travel"  || strName == "Contents_QuickSearch_Travel2" ) && i == 2 && ms.linkURL == "")
            {
                if($j("#a_"+objID).length)
                {
                    $j("#a_"+objID).attr("href","javascript:ShowPhoneSMS();");
                    $j("#a_"+objID).attr("title","모바일 특가예약");
                }
                
                if($j("#img_"+objID).length)
                {
                    $j("#img_"+objID).attr("src",getImageURL(ms.imgURL));
                    $j("#img_"+objID).attr("alt","모바일 특가예약");
                }  
            }
            //항공_해외/항공_국내/여행_해외/여행_국내 0번 배너 링크 없을경우 이미지만 표시
            else if((strName == "Contents_QuickSearch_Air"  || strName == "Contents_QuickSearch_Air2"  
                    || strName == "Contents_QuickSearch_Hotel"  || strName == "Contents_QuickSearch_Hotel2" 
                    || strName == "Contents_QuickSearch_AirHotel"  || strName == "Contents_QuickSearch_AirHotel2" 
                    || strName == "Contents_QuickSearch_Travel"  || strName == "Contents_QuickSearch_Travel2" ) && i == 0)
            {
                if($j("#a_"+objID).length)
                {
                    if(ms.linkURL == "")
                    {
                        $j("#a_"+objID).css("cursor","default");
                    }
                    else
                    {
                        $j("#a_"+objID).css("cursor","pointer");
                        
                        $j("#a_"+objID).attr("href",getMainParamAddUrl(ms.linkURL, strName, i));
                        
                        if(ms.isNewWindow == "Y")
                            $j("#a_"+objID).attr("target","_blank");
                        else
                            $j("#a_"+objID).attr("target","_self");
                        
                        $j("#a_"+objID).attr("title",ms.keyword);
                    }
                }
                
                if($j("#img_"+objID).length)
                {
                    $j("#img_"+objID).attr("src",getImageURL(ms.imgURL));
                    $j("#img_"+objID).attr("alt",ms.keyword);
                }  
            }
            else
            {
                if($j("#a_"+objID).length)
                {
                    $j("#a_"+objID).attr("href",getMainParamAddUrl(ms.linkURL, strName, i));
                    
                    if(ms.isNewWindow == "Y")
                        $j("#a_"+objID).attr("target","_blank");
                    else
                        $j("#a_"+objID).attr("target","_self");
                    
                    $j("#a_"+objID).attr("title",ms.keyword);
                }
                
                if($j("#img_"+objID).length)
                {
                    $j("#img_"+objID).attr("src",getImageURL(ms.imgURL));
                    $j("#img_"+objID).attr("alt",ms.keyword);
                }  
            }
        }
    }
}

//섹션 서브메뉴 그리기
function SetSubMenuLayer($parents, strName, sectioCount)
{
    $subArea = $j("#sub"+strName);
    if(!$subArea.length)
        return;
    
    var str = '';
    var asideSubImgSrcOff = "http://openimage.interpark.com/tourpark/tour/common/docu_head/rolling_off.png";    
    
    if(sectioCount > 1)
    {   
        for(var i= 0; i < Number(sectioCount); i++)
        {
            try{
                var ms = new mainCls();
                ms = GetSectionClassInfo(strName, i);
                
                var strAlt = (i+1) + " 번째 정보";

                str += '<a href="javascript:;" ';
                str += 'onmouseover="subMenuMouseOver(\''+ strName +'\', ' + i + ')" onfocus="subMenuMouseOver(\''+ strName +'\', ' + i + ')">';// onfocus="subMenuMouseOver(\''+ strName +'\', ' + i + ')"
//                str += ms.keyword;
                if(strName == "Left_Roll")
                    str += '<img src="' + asideSubImgSrcOff + '" alt="' + strAlt + '" />';
                else
                    str += '<img src="' + contentSubImgSrcOff + '" alt="' + strAlt + '" />';
                    
                str += '</a>';
                //if(strName=="Left_Roll" ? asideSubImgSrcOff : contentSubImgSrcOff)
            }
            catch(e){}
        }
    }
    
    $subArea.html(str);
}
//on 클래스 추가/제거
function setOnClass($target, targetConType, index)
{
    if(!$target.length)
        return;

    var asideSubImgSrcOff = "http://openimage.interpark.com/tourpark/tour/common/docu_head/rolling_off.png";
    var asideSubImgSrcOn = "http://openimage.interpark.com/tourpark/tour/common/docu_head/rolling_on.png";
    var leftRollFlag = false;
    
    try{    
        if($target.attr("id") == "subLeft_Roll")
            leftRollFlag = true;        
    }catch(e){}

    $target.children(targetConType).each(function(){
        if($j(this).index() == index)
        {   
            if(leftRollFlag)
                $j(this).addClass("on").children("img:first").attr("src",asideSubImgSrcOn);
            else
                $j(this).addClass("on").children("img:first").attr("src",contentSubImgSrcOn);
        }
        else
        {
            if(leftRollFlag)
                $j(this).removeClass("on").children("img:first").attr("src",asideSubImgSrcOff);
            else        
                $j(this).removeClass("on").children("img:first").attr("src",contentSubImgSrcOff);
        }
    });
}
//서브메뉴 마우스 오버
function subMenuMouseOver(strName, index)
{
    DataBinding(strName, index);
    //setOnClass($j("#sub"+strName), "a", index);
}
//서브메뉴 마우스 아웃
function subMenuMouseOut(strName, index)
{

}
//페이스북 노출
function facebookView(strName, index, displayType)
{

}

//HOT 한줄문구 바인딩
function CreateHot($parents, strName, sectioCount)
{   
    var str = '<img src="http://openimage.interpark.com/tourpark/tour/main/icon_hot.gif" alt="HOT" />';
    
    for(var i= 0; i < Number(sectioCount); i++)
    {
        var ms = new mainCls();
        ms = GetSectionClassInfo(strName, i);        

        str += '<a href="' + getMainParamAddUrl(ms.linkURL,strName,i) + '" target="' + (ms.isNewWindow == "Y" ? "_blank" : "_self") + '" >';
        str += ms.keyword;
        str += '</a>'
    }
    
    $parents.html(str);
}
//상단 띠배너 바인딩
function CreateTopBannerLayer($parents, strName, sectioCount)
{   
    var str = '<span>';
    
    for(var i= 1; i < Number(sectioCount); i++)
    {
        var ms = new mainCls();
        ms = GetSectionClassInfo(strName, i);
        
        str += '<a href="' + getMainParamAddUrl(ms.linkURL,strName,i) + '" target="' + (ms.isNewWindow == "Y" ? "_blank" : "_self") + '" >';
        str += '<img src="' + getImageURL(ms.imgURL) + '" alt="' + ms.keyword + '" /></a>';
    }
    
    str += '</span>';    
    
    if(strName == "Top_Banner")
    {
        str += '<a class="close" href="javascript:TopBannerHide();">';
        str += '    <img alt="닫기" src="http://openimage.interpark.com/tourpark/tour/common/docu_head/btn_close.gif">';    
        str += '</a>'
    }
    
    $parents.html(str);
    
    setBackGrounImg(strName,0);
}

function setBackGrounImg(strName, index)
{
    var ms = new mainCls();
    ms = GetSectionClassInfo(strName, index);
    
    if(ms.imgURL != "" && ms.imgURL != "undefined" && $j("#div" + strName).length)
//        $j("#div" + strName).attr('style','background : url("' + getImageURL(ms.imgURL) + '") repeat-x scroll 0 top rgba(0, 0, 0, 0)'); //.css 적용안돼서 style 적용으로 처리
    $j("#div" + strName).attr('style','background : url("' + getImageURL(ms.imgURL) + '") repeat-x scroll 0 top'); //.css 적용안돼서 style 적용으로 처리

}

function TopBannerHide($obj)
{   
    if($j("#divTop_Banner").length)
        $j("#divTop_Banner").hide();
}

//섹션 아이템 수량 조회
function GetSectionClassCount(strName, index)
{
    try{    
        if($j("#hdd"+strName).length)
        {   
            var strJSONText = $j("#hdd"+strName).val();
//            var strJSON = JSON.parse(strJSONText);
            var strJSON = JSON.parse(strJSONText);

            return strJSON["Count"];
        }
        else
            return 0;
    }
    catch(e){
        return 0;
    }
}

//섹션 아이템 상세 정보 조회
function GetSectionClassInfo(strName, index)
{
    if($j("#hdd"+strName).length)
    {
        var ms = new mainCls();
        
        var strJSONText = $j("#hdd"+strName).val();
        var strJSON = JSON.parse(strJSONText);        
        
        ms.index = checkIsNull(index);        
        ms.sectioCount = checkIsNull(strJSON["Count"]);
        ms.seq = checkIsNull(strJSON["Seq"][index]);    
        ms.keyword = checkIsNull(strJSON["Word"][index]);    
        ms.keywordA = checkIsNull(strJSON["WordA"][index]);    
        ms.keywordB = checkIsNull(strJSON["WordB"][index]);    
        ms.linkURL = checkIsNull(strJSON["LinkURL"][index]);    
        ms.imgURL = checkIsNull(strJSON["ImageURL"][index]);    
        ms.isNewWindow = checkIsNull(strJSON["NewWindow"][index]);
        
        return ms;
    }
}

//섹션 아이템 정보 바인딩
function DataBinding(strName, index)
{
    var ms = new mainCls();
    ms = GetSectionClassInfo(strName, index);

    if($j("#a_"+strName).length)
    {
        $j("#a_"+strName).attr("href",getMainParamAddUrl(ms.linkURL,strName,index));
        
        if(ms.isNewWindow == "Y")
            $j("#a_"+strName).attr("target","_blank");
        else
            $j("#a_"+strName).attr("target","_self");
        
        $j("#a_"+strName).attr("title",ms.keyword);
    }
    
    if($j("#img_"+strName).length)
    {
        var img = getArrKeywordInfo(strName, index, ms);
        $j("#img_"+strName).attr("src",img.src);
        $j("#img_"+strName).attr("alt",img.alt);
    
//        $j("#img_"+strName).attr("src",getImageURL(ms.imgURL));
//        $j("#img_"+strName).attr("alt",ms.keyword);
    }
    
    if($j("#keyword_"+strName).length)
        $j("#keyword_"+strName).html(ms.keyword);
    
    if($j("#keywordA_"+strName).length)
        $j("#keywordA_"+strName).html(ms.keywordA);
        
    if($j("#keywordB_"+strName).length)
    {
        if(strName == "Contents_Freeya")
            $j("#keywordB_"+strName).html(cutStringStr(ms.keywordB,39));
        else    
            $j("#keywordB_"+strName).html(ms.keywordB);
    }
        

    //서브메뉴 클래스 변경
    if($j("#sub"+strName).length)
        setOnClass($j("#sub"+strName), "a", index);
}
</script>
<!--/* 공통 스크립트 모음 */-->
<script type="text/javascript">
function checkIsNull(val)
{
    if(val == null || val == "null" || val == "undefined")
    {  
        return "";
    } 
    else
        return val;
}

function getArrLists(strNames, spChar)
{
    return strNames.split(spChar);
}

function getImageURL(imgUrl)
{   
    if(!imgUrl.length)
        return "";

    return "http://tourimage.interpark.com/Sites/Tour/ByTemplate/098/" +  imgUrl;
}

function getRandomNum(cnt)
{
	return Math.floor(Math.random()*cnt);
}

function getRandomNumC(cnt)
{
	return Math.ceil(Math.random()*cnt);
}	

//파라미터 정리
function getMainParamAddUrl(linkURL, strName, index)
{
    var URL = "";
    var paramNM = "";
    
    /*키워드링크 파라미터*/
    if(strName == "Top_Banner")
    {
		paramNM = "topbn_";
		index = Number(index) - 1;
	}
    else if(strName == "Top_Hot")
		paramNM = "main_hot";
    else if(strName == "Contents_QuickSearch_Common")
		paramNM = "search_tab";
    else if(strName == "Contents_QuickSearch_Air")
		paramNM = "search_air";
	else if(strName == "Contents_QuickSearch_Hotel")
		paramNM = "search_ahotel";
	else if(strName == "Contents_QuickSearch_AirHotel")
		paramNM = "search_airhotel";
	else if(strName == "Contents_QuickSearch_Travel")
		paramNM = "search_atravel";
	else if(strName == "Contents_QuickSearch_Air2")
		paramNM = "search_domair";
	else if(strName == "Contents_QuickSearch_Hotel2")
		paramNM = "search_dhotel";
	else if(strName == "Contents_QuickSearch_AirHotel2")
		paramNM = "search_dairhotel";
	else if(strName == "Contents_QuickSearch_Travel2")
		paramNM = "search_dtravel";
	else if(strName == "Contents_Freeya")
		paramNM = "main_freeya_";
	else if(strName == "Contents_Mall")
		paramNM = "main_thememall_0";
	else if(strName == "Contents_Banner")
		paramNM = "main_adsmall_";
	else if(strName == "Contents_TravelBanner")
		paramNM = "main_freeyabn_0";
//	else if(strName == "Bottom_Banner") //footer.js로 이동
//	{
//		paramNM = "main_footerbn_";
//		index = Number(index) - 1;
//	}
	else if(strName == "Left_Roll")
		paramNM = "tour_left_side_";
	else if(strName == "Left_Banner")
	{
		paramNM = "tour_left_side_";
		index = 3;
	}
	/*상품 파라미터*/
	else if(strName == "Goods_HotSale")
		paramNM = "main_sale0";
    else if(strName == "Goods_Recomm_Free")
    {
       var tabIndex = getTabCategoryCD("Goods_Recomm");
		paramNM = "mainfreesale_tour_"+tabIndex+"_";;
	}
    else if(strName == "Goods_Recomm_Pkg")
    {
        var tabIndex = getTabCategoryCD("Goods_Recomm");
		paramNM = "mainpkgsale_tour_"+tabIndex+"_";;
	}
	else if(strName == "Goods_Recomm_Domestic_Hotel")
	{
	    var tabIndex = getTabCategoryCD("Goods_RecommHotel");
		paramNM = "maindhotel_goods_"+tabIndex+"_";;
	}
	else if(strName == "Goods_Recomm_Foreign_Hodel")
	{
	    var tabIndex = getTabCategoryCD("Goods_RecommHotel");
		paramNM = "mainahotel_goods_"+tabIndex+"_";;
	}
	else if(strName == "Goods_MinPrice")
	{
	    var tabIndex = getTabCategoryCD("Goods_MinPrice");	    
		paramNM = "main_domestic_"+tabIndex+"_";
	}
	else if(strName == "Contents_Airtel")
	{
	    var tabIndex = getTabCategoryCD("Goods_Recomm");	    
		paramNM = "mainairhotelsale_"+tabIndex+"_";
//		paramNM = "mainairhotelsale_tour";
	}
	/*기획전 파라미터*/
	else if(strName == "Right_Event")
		paramNM = "main_flash_";
	else if(strName == "Middle_Event")
		paramNM = "main_hotchoice_";

    if(strName == "Top_Hot" || strName == "Contents_QuickSearch_Common")
	{
	    if(linkURL.indexOf("?") > 0)
            URL = linkURL + "&mbn=tour_main&mln=" + paramNM;
        else
            URL = linkURL + "?mbn=tour_main&mln=" + paramNM;

        return URL;
	
	}
	else
	{
	    if(linkURL.indexOf("?") > 0)
            URL = linkURL + "&mbn=tour_main&mln=" + paramNM + (Number(index)+1);
        else
            URL = linkURL + "?mbn=tour_main&mln=" + paramNM + (Number(index)+1);

        return URL;
	}

}

function getTabCategoryCD(strName)
{
    var tabIndex = 0;	    
    if(strName != "")        
    {
        $j("#tab_"+strName).children("a").filter(":visible").each(function(){
            if($j(this).attr("class") == "on")
            {
                tabIndex = $j(this).attr("index");
            }
        });
    }
    return tabIndex;
}

function cutStringStr(strTitle, maxLength)
{
    try{
        var strRet = "";
    
        if(strTitle != "" && strTitle != "undefined")
        {
            if(strTitle.length > maxLength)   
            {
                strRet = strTitle.substring(0,maxLength) + "...";
            }
            else
            {
                strRet = strTitle;
            }
        }
        
        return strRet;
    }
    catch(e){
        return strTitle;
    }
    
}

</script>
<!--/* 전후,롤링 스크립트 모음 */-->
<script type="text/javascript">
var currentHotSaleAirIndex = 0

/* 초특가 할인 항공권 */
function HotSaleAirNext()
{
    var totalCount = $j("#divHotSaleAir").children("ul").length;
    
    var nextHotSaleAirIndex = currentHotSaleAirIndex + 1;
    
    if(nextHotSaleAirIndex > totalCount-1)
        nextHotSaleAirIndex = 0;
    
    for(var i=0 ; i < totalCount ; i++)
    {
        if(nextHotSaleAirIndex == i)
            $j("#HotSaleAir_" + i).show();
        else
            $j("#HotSaleAir_" + i).hide();
    }
    
    currentHotSaleAirIndex = nextHotSaleAirIndex;
    
    $j("#HotSaleAirIndex").text(currentHotSaleAirIndex+1);
}

function HotSaleAirPrev()
{
    var totalCount = $j("#divHotSaleAir").children("ul").length;
    
    var prevHotSaleAirIndex = currentHotSaleAirIndex - 1;
    
    if(prevHotSaleAirIndex < 0)
        prevHotSaleAirIndex = totalCount-1;
    
    for(var i=0 ; i < totalCount ; i++)
    {
        if(prevHotSaleAirIndex == i)
            $j("#HotSaleAir_" + i).show();
        else
            $j("#HotSaleAir_" + i).hide();
    }
    
    currentHotSaleAirIndex = prevHotSaleAirIndex;
    
    $j("#HotSaleAirIndex").text(currentHotSaleAirIndex+1);
    
}
/* 초특가 할인 항공권 */

/* 메인이벤트 */
function Right_EventNext()
{
    var $targetArea = $j("#subRight_Event").children("a");
        
    var totalCount = $targetArea.length;
    var currnetIndex = 0; 
    
    $targetArea.each(function(){
        if($j(this).attr("class") == "on"){
            currnetIndex = $j(this).index();
            return;
        }
    });
    
    currnetIndex = currnetIndex + 1;
    
    if(currnetIndex >= totalCount)
        currnetIndex = 0;
    
    EventDataBinding("Right_Event", currnetIndex);
}

function Right_EventPrev()
{
    var $targetArea = $j("#subRight_Event").children("a");
        
    var totalCount = $targetArea.length;
    var currnetIndex = 0; 
    
    $targetArea.each(function(){
        if($j(this).attr("class") == "on"){
            currnetIndex = $j(this).index();
            return;
        }
    });
    
    currnetIndex = currnetIndex - 1;
    
    if(currnetIndex < 0)
        currnetIndex = totalCount-1;
    
    EventDataBinding("Right_Event", currnetIndex);
}
/* 메인이벤트 */

var IntervalIns_Right_Event;
var IntervalIns_Middle_Event;
var IntervalIns_Left_Roll;
var IntervalIns_HotSaleAir;

var flag_Right_Event = false;
var flag_Middle_Event = false;
var flag_Left_Roll = false;
var flag_HotSaleAir = false;

//롤링시작
function RollingGo()
{
    CallRolling("Right_Event");
    CallRolling("Middle_Event");
    CallRolling("Left_Roll");
    CallRolling("HotSaleAir");
}

function CallRolling(name)
{
    if(name == "Right_Event")
    {
        if(IntervalIns_Right_Event != null)
            stopRollingDiv(name);
            
        if(!flag_Right_Event)
            IntervalIns_Right_Event = setInterval("RollNext('" + name + "');", 3000);
    }
    else if(name == "Middle_Event")
    {
        if(IntervalIns_Middle_Event != null)
            stopRollingDiv(name);
        
        if(!flag_Middle_Event)    
            IntervalIns_Middle_Event = setInterval("RollNext('" + name + "');", 3000);
    }
    else if(name == "Left_Roll")
    {
        if(IntervalIns_Left_Roll != null)
            stopRollingDiv(name);
            
        if(!flag_Left_Roll)
            IntervalIns_Left_Roll = setInterval("RollNext('" + name + "');", 3000);
    }
    else if(name == "HotSaleAir")
    {
        if(IntervalIns_HotSaleAir != null)
            stopRollingDiv(name);
            
        if(!flag_HotSaleAir)
            IntervalIns_HotSaleAir = setInterval("RollNext('" + name + "');", 3000);
    }
}

//다음 이미지로 넘김처리
function RollNext(name)
{
    if(name == "HotSaleAir")
    {
        if(!flag_HotSaleAir)
            HotSaleAirNext();
    }
    else
    {
        if(!$j("#sub" + name).length)
            return;
    
        var $targetArea = $j("#sub" + name).children("a");
        
        var totalCount = $targetArea.length;
        var currnetIndex = 0; 
        
        $targetArea.each(function(){
            if($j(this).attr("class") == "on"){
                currnetIndex = $j(this).index();
                return;
            }
        });
        
        currnetIndex = currnetIndex + 1;
        
        if(currnetIndex >= totalCount)
            currnetIndex = 0;
        
        if(name == "Right_Event" && !flag_Right_Event)        
            EventDataBinding(name, currnetIndex);
        else if(name == "Middle_Event" && !flag_Middle_Event)
            EventDataBinding(name, currnetIndex);
        else if(name == "Left_Roll" && !flag_Left_Roll)
            DataBinding(name, currnetIndex);
    }
    
    //FadeInOut(name);
    
    CallRolling(name);
}   

//롤링 멈춤
function stopRollingDiv(name)
{
    var IntervalIns;    
    
    if(name == "Right_Event")
    {
        IntervalIns = IntervalIns_Right_Event;
    }
    else if(name == "Middle_Event")
    {
        IntervalIns = IntervalIns_Middle_Event;
    }
    else if(name == "Left_Roll")
    {
        IntervalIns = IntervalIns_Left_Roll;
    }
    else if(name == "HotSaleAir")
    {
        IntervalIns = IntervalIns_HotSaleAir;
    }
    
    clearInterval(IntervalIns);
    
}

function GoAndStop(name, type)
{
    if(name == "HotSaleAir")
    {
        flag_HotSaleAir = !flag_HotSaleAir;
    }else{
        
        if(name == "Right_Event")
        {
            if(type == "stop")
                flag_Right_Event = true; 
            else
                flag_Right_Event = false;  
        }
        else if(name == "Middle_Event")
        {
            if(type == "stop")
                flag_Middle_Event = true; 
            else
                flag_Middle_Event = false; 
        }
        else if(name == "Left_Roll")
        {
            if(type == "stop")
                flag_Left_Roll = true; 
            else
                flag_Left_Roll = false; 
        }
        
        $j("#stop"+name).removeClass("on");
        $j("#go"+name).removeClass("on");       
            
        if(type == "stop")
            $j("#go"+name).addClass("on");
        else
            $j("#stop"+name).addClass("on");    
        
    }
    
    if( type == "stop") //false일 경우 롤링중
    {
        $j("#stop"+name).css("display","none");
        $j("#go"+name).css("display","inline-block");
    }
    else{
        $j("#stop"+name).css("display","inline-block");
        $j("#go"+name).css("display","none");
    }
    
}

/*
http://codereview.stackexchange.com/questions/7315/fade-in-and-fade-out-in-pure-javascript
데이타 바인딩시 깜박이게만 처리
사용안함
*/
function FadeInOut(name){    
    var duration = 1;    
    var AmountOfActions=1000;
    
    var $diiv= $j("#div"+name);
    $diiv.css("opacity","0");
    $diiv.css("display","block");

    var counte=0;
    
    setInterval(function(){
//        counte ++;
        counte = counte + 80;
        if ( counte<AmountOfActions) {
            $diiv.css("opacity",counte/AmountOfActions);
        }
    },
    duration / AmountOfActions);
}


</script>
<!--/* 퀵서치 검색영역 숙박 */-->
<script type="text/javascript">
/*숙박-----------------------------------------------------------------------------------*/

function ddlKindOfHousing_Changed(str)
{
	var value = str;

	var Category = '';
    if ( value == 'A')  Category='';
    if ( value == 'P')  Category='A5002';
    if ( value == 'C')  Category='A5001';
    if ( value == 'H')  Category='A5003';
    
    if (value != '')
    {
        var url = 'http://tour.interpark.com/Exporter/ws/tourService.asmx/GetHousingRegion';		
        var params = 'SubCategory=' + Category;
        var selectID = 'housingAreaFirst';
        var selectID2 = 'housingAreaSecond';
        
        var cbfn2 = function(request)
        {
            var result = request.responseText;
            if (result != null)
            {
                ddl_clear(selectID);                
                ddl_add(selectID, "광역도시 선택", "");                
                
                var arrPair = result.split('&amp;');
	            for (var i=1; i<arrPair.length-1; i++)
	            {
                    if (arrPair[i] != '')
                    {
                        var arrValue = arrPair[i].split('|');
                        ddl_add(selectID, arrValue[1], arrValue[0]);
		            }
	            }
	            
	            ddl_clear(selectID2);
	            ddl_add(selectID2, "시군별전체", "");
            }
        }
        RequestAjax(url, params, cbfn2);
    }
    else
    {
        ddl_clear('housingAreaFirst');
        ddl_add('housingAreaFirst', "광역도시 선택", "");
        
    }
}

function getParameter(paramName, paramValue, isLast)
{
    isLast == null ? isLast = false : isLast;
    var retStr = paramName + "=" + paramValue.toString();
    return isLast == true ? retStr : retStr + "&";
}

function selHousingDayEvent()
{
//    var startDtValue = $('frdate').value;
    var startDtValue = $j('#frdate').val();
    if (startDtValue == "")
    {
        alert("입실일을 먼저 입력하고 다시 선택해 주세요");
        return;
    }
    
//    var selHousingDay = $('selHousingDay').value;
    var selHousingDay = $j('#selHousingDay').val();
    var date = new Date(startDtValue.substring(0,4), Number(startDtValue.substring(4,6))-1, Number(startDtValue.substring(6,8)) + Number(selHousingDay));
    
    var year = String(date.getFullYear());
    var month = String(date.getMonth()+1);
    var day = String(date.getDate());
    
    if(month.length==1) month = "0" + month;
    if(day.length==1) day = "0" + day;
    
//    $('todate').value = year+month+day;
    $j('#todate').val(year+month+day);
}

function SetHousingSearchDate()
{
	var d = new Date();
	d.setDate(d.getDate() + (6 - d.getDay()));
	var yy, mm, dd;
	yy = d.getFullYear().toString();
	mm = (d.getMonth() + 1).toString(); mm = (mm.length == 1) ? "0" + mm : mm;
	dd = d.getDate().toString(); dd = (dd.length == 1) ? "0" + dd : dd;
//	$("frdate").value = yy + mm + dd;
    $j("#frdate").val(yy + mm + dd);
	checkFrDate();
}

function selectMe(selectId, optionNo) {

	var selectObj = document.getElementById(selectId);
	selectObj.selectedIndex = optionNo;

	if(selectObj.onchange){selectObj.onchange()};

	document.getElementById("si_" + selectId).value = selectObj.options[optionNo].text;
}

function checkFrDate()
{
//    var DateStart = $('frdate').value;
    var DateStart = $j('#frdate').val();
	var usedDays = 1;
	var newDate, rtnDate;
	
//	if ($('selHousingDay').value != "") {
    if ($j('#selHousingDay').val() != "") {
//		usedDays = $('selHousingDay').value;
        usedDays = $j('#selHousingDay').val();
	}
	
	var y = DateStart.substr(0,4), m = DateStart.substr(4,2), d = DateStart.substr(6,2);
	newDate = new Date(y, m - 1, d);
	
	if (DateStart != '' && usedDays != '' && newDate instanceof Date) {
		rtnDate = new Date(y, m - 1, eval(d) + eval(usedDays))
	}
	
	if (rtnDate != undefined) {
		var y2 = String(rtnDate.getFullYear()), m2 = String(rtnDate.getMonth() + 1), d2 = String(rtnDate.getDate());
		if (m2.length == 1) m2 = "0" + m2;
		if (d2.length == 1) d2 = "0" + d2;
		
//		$('todate').value = y2 + m2 + d2;
        $j('#todate').val(y2 + m2 + d2);
	}	
}

function checkToDate()
{
    var input1 = document.getElementById('frdate').value;
    var input2 = document.getElementById('todate').value;

    if (input1 != '' && input2 != '')
    {
        var date1 = new Date(input1.substr(0,4),input1.substr(4,2)-1,input1.substr(6,2));
        var date2 = new Date(input2.substr(0,4),input2.substr(4,2)-1,input2.substr(6,2));
        var date = new Date(input1.substring(0,4), Number(input1.substring(4,6))-1, Number(input1.substring(6,8)) + 30);
    
        var year = String(date.getFullYear());
        var month = String(date.getMonth()+1);
        var day = String(date.getDate());
    
        if(month.length==1) month = "0" + month;
        if(day.length==1) day = "0" + day;
    
        var dateDiff = year+month+day;
    
        if (date1 >= date2) {
            document.getElementById('todate').value = '';
            alert('퇴실일이 입실일보다 커야합니다.');
        } else if (date2 > date) {
            document.getElementById('todate').value = '';
            alert('이용기간은 최대 30박까지 가능합니다. 30박 이내로 다시 지정해주세요');
        } else {			
			var nDiff = (date2.valueOf() - date1.valueOf()) / 86400000;
//			if($('selHousingDay').value != nDiff) {
            if($j('#selHousingDay').val() != nDiff) {
			    selectMe('selHousingDay', nDiff);
			}
        }
    }
}

function ddl_add(id, name, value) {
    var ddl = $(id);
    if (ddl) {
	    var option = document.createElement("option");
	    ddl.insert(option);
	    option.innerHTML = name;
	    option.value = value;
    }
}

function ddl_clear(id) {
    var ddl = document.getElementById(id);
    while (ddl.length > 0) {
	    ddl.remove(0);
    }
}

function ddlProvince_Changed()
{
    var value = document.getElementById('housingAreaFirst').value;
    var valCategory = ''
	
    if (value != '')
    {
        var valKindOfHousing = document.getElementById("selKindOfHousing");
        if (valKindOfHousing.value == "A")  Category='';
        if (valKindOfHousing.value == "C")  Category='A5001';
        if (valKindOfHousing.value == "P")  Category='A5002';
        if (valKindOfHousing.value == "H")  Category='A5003';
    
        var url = 'http://tour.interpark.com/Exporter/ws/tourService.asmx/GetHousingDistrictNEW';		
        var params = 'Region=' + value + '&SubCategory=' + Category;
        var selectID = 'housingAreaSecond';
        
        var cbfn = function(request)
        {
            var result = request.responseXML;
            
            if (result != null)
            {
                ddl_clear(selectID);
                //ddl_add(selectID, "선택하세요", "");
                var items = result.getElementsByTagName('Table');
                for (var i=0; i<items.length; i++) {
                    var DistrictCD = items[i].getElementsByTagName("district")[0].childNodes[0] ? items[i].getElementsByTagName("district")[0].childNodes[0].nodeValue:'';
                    var DistrictNM = items[i].getElementsByTagName("districtName")[0].childNodes[0].nodeValue;
                    ddl_add(selectID, DistrictNM, DistrictCD);
                }
                //refreshSelect(selectID);
            }
        }
        RequestAjax(url, params, cbfn);
    }
    else
    {
        ddl_clear('housingAreaSecond');
        ddl_add('housingAreaSecond', "시군별전체", "");
        //refreshSelect("housingAreaSecond");
    }
}

function SelNightCntEvent()
{
    var startDtValue = document.getElementById('CheckInDT').value;
    if (startDtValue == "")
    {
        alert("체크인을 먼저 입력하고 다시 선택해 주세요");
        return;
    }
    
    var SelDay = document.getElementById('SelNightCount').value;
    if (SelDay == '0') return;
    
    var date = new Date(startDtValue.substring(0,4), Number(startDtValue.substring(4,6))-1, Number(startDtValue.substring(6,8)) + Number(SelDay));
    
    var year = String(date.getFullYear());
    var month = String(date.getMonth()+1);
    var day = String(date.getDate());
    
    if(month.length==1) month = "0" + month;
    if(day.length==1) day = "0" + day;
    
    document.getElementById('CheckOutDT').value = year + month + day;
}

function SearchHotel()
{
    var Type = $j("#hddModeHotel").val();
        
    if(Type == "2")
        SearchHotel_D();
    else
        SearchHotel_F();
}

function SearchHotel_D()
{
    var housingKind = document.getElementById('selKindOfHousing').value;
    
    var input1 = document.getElementById('frdate').value;
    var input2 = document.getElementById('todate').value;
    
    var Keyword = document.getElementById('PlaceNameKey').value;
    if(Keyword == "키워드")
        Keyword = "";
    
    if (input1 != '' && input2 == '')
    {
        alert('퇴실일을 입력해 주세요.');
        return;
    }
    
    if(document.getElementById('housingAreaFirst').value == "" && escape(Keyword) == "")
    {
        alert("입실일 지정시에는 지역(광역)을\n선택하시거나 키워드를 입력해주세요.");
        return;
    }
    
//	var strReserveType  = ($("chkReserveType").checked) ? "B3001" : "";
    var strReserveType  = ($j("#hddchkReserveType").val() == "T") ? "B3001" : "";
	if (strReserveType == "B3001" && (input1 == "" || input2 == ""))
	{
		alert("확정예약 검색시에는 입,퇴실일을 지정하셔야 합니다.");
		return;
	}
    
    var HousingType = document.getElementById('selKindOfHousing').value;
		
    var paramString = "";
    paramString += getParameter("Type",				"H");
    paramString += getParameter("HousingType",		HousingType);
    paramString += getParameter("District",			document.getElementById('housingAreaFirst').value);
    paramString += getParameter("Region",			$('housingAreaSecond').value);
    paramString += getParameter("StartDT",			document.getElementById('frdate').value.replace("-","").replace("-",""));
    paramString += getParameter("EndtDT",			document.getElementById('todate').value.replace("-","").replace("-",""));
//    paramString += getParameter("Person",			$('housingPersonCnt').value);
    paramString += getParameter("Person",			"00");
    paramString += getParameter("AdultRateFrom",	"0");
    paramString += getParameter("AdultRateTo",		"500000");
    paramString += getParameter("Grade",			""); //ToDo
    paramString += getParameter("ReserveType",		strReserveType);
    paramString += getParameter("HKeyword",			escape(Keyword));
    //paramString += getParameter("OrderType",		"A");
    paramString += getParameter("PageSize",			"10");
	

    var url = "/search/searchbycond.aspx";
    url += "?" + paramString + "&mbn=tour_main&mln=search_dhotel0";
	
    window.location.href = url;
}

function onClickReserveType(value)
{
    $j("#hddchkReserveType").val(value);
    
    if(value == "F")
    {
        $j("#imgReserveTypeF").addClass("on");
        $j("#imgReserveTypeT").removeClass("on");
    }
    else
    {
        $j("#imgReserveTypeT").addClass("on");
        $j("#imgReserveTypeF").removeClass("on");
    }
}

/*숙박-----------------------------------------------------------------------------------*/
</script>
<!--/* 퀵서치 검색영역 호텔 */-->
<script type="text/javascript">
/*호텔-----------------------------------------------------------------------------------*/

function HotelInit()
{
    var hotelSearchItem = "";
    var param = "";
  
    /*http://stove99.tistory.com/10 참조*/             
    var url = "http://hotel.interpark.com/Exporter/ws/HotelService.asmx/GetSearchItemCookie_With_City";
//    var url = 'http://hotel.interpark.com/Exporter/ws/HotelService.asmx/GetSearchItemCookie';
    $j.ajax({
        url : url,
        jsonp : "callback",
        jsonpCallback : "SearchResultBindCallback",
        dataType : "jsonp",
        type : "GET",
        async : true,
        data : { },
        success : (function(data, status, xhr) {            
            hotelSearchItem = data;            
            HotelInitDataBind(hotelSearchItem)
        }),         
        error : (function(xhr, textStatus, errorThrown) {
            
        })
    });
}

function HotelInitDataBind(retVal)
{   
    if($j.trim(retVal) != "" && $j.trim(retVal) != "undefined")
    {
        var arrParamValue = retVal.split("|");
        
        $j("#CheckInDT").val(arrParamValue[0]);
        $j("#CheckOutDT").val(arrParamValue[1]);
        $j("#SelNightCount").val(arrParamValue[2]);
        $j("#SelRoom1").val(arrParamValue[3]);
        $j("#SelRoom2").val(arrParamValue[4]);
        $j("#SelRoom3").val(arrParamValue[5]);
        $j("#SelRoom4").val(arrParamValue[6]);
        
        if(arrParamValue.length > 7)
        {
            $j("#ForeHotelCityCD").val(arrParamValue[8]);
            $j("#ForeHotelCityNM").val(arrParamValue[9]);
        }
        
    }
}

// 도시국가 조회팝업창
function HotelCity()
{   
    var posobj = $("ForeHotelCityNM");
    if($j("#HotelCitySearch").html().indexOf('title') < 1) {
        $j.ajax({
            url: "/hotel/iframe/search/OverseaSearchCityForm.aspx",        
            dataType: "html",
            type: 'post',
            success: function(result){
                doAllLayerClose();
                $j("#HotelCitySearch").html(result);
                $j("#HotelCitySearch").show();
                ShowObjLayer2('HotelCitySearch', posobj, 85, 220);
                
                $j('#divCityAutoList').css('display', 'none');    
                $j('#txtSearchKeyword').val('');         
                              
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                alert(XMLHttpRequest);
                alert(textStatus);
                alert(errorThrown);
            },
            async: false
        });
    } else {
        $j("#HotelCitySearch").show();
        $j('#divCityAutoList').css('display', 'none');    
        $j('#txtSearchKeyword').val('');
        //ShowObjLayer2('HotelCitySearch', posobj, 85, 220);
    }
    
    if($j("#OverseaSearchCityFormClose").length)
    {
        $j("#OverseaSearchCityFormClose").blur(function(){
            if($j("#ForeHotelCityNM").length){ $j("#ForeHotelCityNM").focus(); }
            SelectCloseForm();
        });
    }
}

function setHotelCityFocus()
{
    
}

function SelectMainCityBind(regionDCode, regionDName, regionBName, airCityCD) {
    var HotelRegionCode = regionDCode;
    var HotelRegionName = unescape(regionDName);
    var NatNM = unescape(regionBName);
    
    document.getElementById('ForeHotelCityCD').value = unescape(regionDCode);
    document.getElementById('ForeHotelCityNM').value = unescape(regionDName);// + " / " + unescape(NatNM);
    document.getElementById('ForeHotelAirCityCD').value = airCityCD;
    
    doAllLayerClose();
}

function SelectMainCityHotelBind(hotelCD, hotelENNM, hotelKRNM, regionDCode, regionDName, regionBName) {
    var HotelRegionCode = regionDCode;
    var HotelRegionName = unescape(regionDName);
    var NatNM = unescape(regionBName);
    
    document.getElementById('ForeHotelCityCD').value = unescape(regionDCode);
    document.getElementById('ForeHotelCityNM').value = unescape(regionDName);// + " / " + unescape(NatNM);
    SearchHotel_F();
}

     
function SelectCloseFormBind() {
    doAllLayerClose();  
}


// 도시국가 선택시 이벤트
function SetHotelCity(HotelCityCD, HotelCityNM, NatNM, AirCityCD)
{
    var HotelCityCD = HotelCityCD;
    var HotelCityNM = unescape(HotelCityNM);
    var NatNM = unescape(NatNM);

    document.getElementById('ForeHotelCityCD').value = unescape(HotelCityCD);
    document.getElementById('ForeHotelCityNM').value = unescape(HotelCityNM);// + " / " + unescape(NatNM);
    document.getElementById('ForeHotelAirCityCD').value = AirCityCD;
    
    doAllLayerClose();
}

function HotelPopClose()
{
    HideLayer('HotelCitySearch');
}

function changeAreaHotel(targetName, type)
{
    if(type == "d")
    {
        $j("#ulForeHotelArea").removeClass("on");
        $j("#ulDomeHotelArea").addClass("on");
        
        ddlKindOfHousing_Changed('A');
        
        QuickSearchBanner("Hotel", "2");
        //TODO
        
        if(typeof AdsGet === "function") {
            AdsGet("frdate", "todate", "PlaceNameKey");
        }
    }
    else
    {
        $j("#ulForeHotelArea").addClass("on");
        $j("#ulDomeHotelArea").removeClass("on");
        
        QuickSearchBanner("Hotel", "1");
    }
    
    changeArea(targetName, type);
}

function AdsGetComplete() {
    var strStDT = $j("#frdate").val();
    var strEnDT = $j("#todate").val();
    var stDT = new Date(strStDT.substring(0, 4), (parseInt(strStDT.substring(4, 6), 10) - 1), strStDT.substring(6, 8));
    var enDT = new Date(strEnDT.substring(0, 4), (parseInt(strEnDT.substring(4, 6), 10) - 1), strEnDT.substring(6, 8));
    $j("#selHousingDay").val(((enDT - stDT).valueOf() / (1000 * 60 * 60)) / 24);
}

function SearchHotel_F()
{
    var CityNM = document.getElementById('ForeHotelCityNM').value;
    var CityCD = document.getElementById('ForeHotelCityCD').value;
    var AirCityCD = document.getElementById('ForeHotelAirCityCD').value;
    var CheckInDate = document.getElementById('CheckInDT').value;
    var CheckOutDate = document.getElementById('CheckOutDT').value;
    var NightCount = document.getElementById('SelNightCount').value;
    var RoomType1 = document.getElementById('SelRoom1').value;
    var RoomType2 = document.getElementById('SelRoom2').value;
    var RoomType3 = document.getElementById('SelRoom3').value;
    var RoomType4 = document.getElementById('SelRoom4').value;
    //var Level = document.getElementById('SelLevel').value;
    //var Loc = document.getElementById('SelLoc').value;
    var strKeyWord = document.getElementById('txtKeyWord').value;    
    
    if(strKeyWord == "호텔명을 입력하세요")    
        strKeyWord = "";
        
    
    if (CityCD == '')
    {
        alert('도시/국가를 선택해주세요.');
//        doAirCitySearch('','3');
        HotelCity();
        return;
    }    
    if ( (Number(RoomType1) + Number(RoomType2) + Number(RoomType3) + Number(RoomType4)) > 3)
    {
        alert('객실 예약은 최대 3개까지만 가능합니다.');
        return;
    }
    if ( (Number(RoomType1) + Number(RoomType2) + Number(RoomType3) + Number(RoomType4)) <= 0)
    {
        alert('객실은 1개 이상 선택하셔야 합니다.');
        return;
    }
    if (CheckInDate == '')
    {
        alert('체크인 날짜를 선택해주세요.');
        return;
    }
    else
    {
        if (CheckOutDate == '')
        {
            alert('체크아웃 날짜를 선택해주세요.');
            return;
        }
        if (NightCount == '0')
        {
            var dateIn = new Date(CheckInDate.substring(0,4),CheckInDate.substring(4,6),CheckInDate.substring(6,8));
            var dateOut = new Date(CheckOutDate.substring(0,4),CheckOutDate.substring(4,6),CheckOutDate.substring(6,8));
            
            NightCount = (dateOut-dateIn)/(1000*3600*24);
        }
    }
    
//    if (strKeyWord.length > 0 && strKeyWord.length < 2)
//    {
//        alert('호텔명은 두글자 이상으로 입력해주세요.');
//        return;
//    }
//    if (KeyWord.split(" ").join("") == '영문으로입력해주세요')
//    {   KeyWord = '';   }
    
    var param = '';
    param += '?CityCD=' + '';
    param += '&RegionCode=' + CityCD;
    param += '&CityNM=' + escape(CityNM);
    param += '&iDT=' + CheckInDate;
    param += '&oDT=' + CheckOutDate;
    param += '&nCnt=' + NightCount;
    param += '&r1=' + RoomType1;
    param += '&r2=' + RoomType2;
    param += '&r3=' + RoomType3;
    param += '&r4=' + RoomType4;
    //param += '&HL=' + Level;
    //param += '&SelLoc=' + Loc;
    param += '&hNM=' + escape(strKeyWord);
    param += '&AirCityCD=' + AirCityCD;
    param += '&mbn=tour_main';
    param += '&mln=search_ahotel0';
    
    ShowHotelDetailBySearch(param);
}

function ShowHotelDetailBySearch(param)
{
    if(param.indexOf("?") <= -1) {
        param = '?' + param;
    }
     window.open('http://hotel.interpark.com/Category/D3.aspx' + param, '_blank');
}

//해외호텔달력 
function showHotelCalendar(objID)
{   
    doAllLayerClose();
    ShowCalendarLayer('CheckInDT', 'CheckOutDT', 'hotel', "RT", '15', objID, CallbackHotelFore , null);
    $j("#divCalendarLayer").focus();;
    
}

function CallbackHotelFore(startDate, endDate, diffDays){    
    $j("#CheckInDT").val(startDate);   
    $j("#CheckOutDT").val(endDate);   
    $j("#SelNightCount").val(diffDays);   
}

//국내호텔달력 
function showHotelDCalendar(objID)
{   
    if (objID == 'todate' && document.getElementById('frdate').value == '')
    {
        alert('입실일을 먼저 입력해 주세요.');
        return;
    }
    var cbfn = null;
    if(objID == 'todate')
    {
        cbfn = function(){checkToDate()};
    }
    else
    {
        cbfn = function(){checkFrDate()};
    }

    doAllLayerClose();
    ShowCalendarLayer('frdate', 'todate', 'housing', "RT" , '30', objID, CallbackHotelDomestic , null);
}

function CallbackHotelDomestic(startDate, endDate, diffDays){    
    $j("#frdate").val(startDate);   
    $j("#todate").val(endDate);   
    $j("#selHousingDay").val(diffDays);   
}

/*호텔-----------------------------------------------------------------------------------*/
</script>
<!--/* 퀵서치 검색영역 여행 */-->
<script type="text/javascript">
/*여행-----------------------------------------------------------------------------------*/
function SearchTour()
{   
    var type = $j("#ddl_TourType").val();

    var param = MakeSearchString(type);
    
    if (param != undefined && param != "")
    {
        var logParam = "&mbn=tour_main&mln=";        
//        var cateNM = getCateNM();
        
//        if(cateNM != "")
//            cateNM = "quick_" + cateNM;
        
        if($j("#hddModeTour").val() == "2")
            param += logParam + "search_dtravel0";
        else
            param += logParam + "search_atravel0";
            
//        param += logParam + cateNM;
        
        
        var url = "/search/searchbycond.aspx" + param;
        window.location.href = url;
    }
}

function MakeSearchString(type)
{
    var CateCD = $j("#ddl_TourArea").val();
    
    if(type == "Date" || type == "Day")
        CateCD = getCateCD();
    
    var param = "?CateCD=" + CateCD;
    var maxValue = 0;
    
    if (CateCD != 5 && CateCD != 9)
        maxValue = 5000000;
    else
        maxValue = 1000000;
    
    var strkeyword = document.getElementById('txt_keyword').value;
    if(strkeyword == "키워드")    
        strkeyword = "";
        
    var keyword = strkeyword.split(" ").join("");
    var BaseGoodsNM = escape(keyword);
    
    if (type == 'Cond')
    {  
        param += "&Type=T";
        param += "&TourType=C";
        param += "&AdultRateFrom=0";
        param += "&AdultRateTo=" + maxValue;
        param += "&BaseGoodsNM=" + BaseGoodsNM;
    }
    else if (type == 'Date')
    {
        if (document.getElementById('txtTourSelDate').value == "")
        {
            alert('출발일을 선택하세요.');
            return;
        }
        var StartDT = document.getElementById('txtTourSelDate').value;
        var period = getPeriod();
        
        param += "&Type=T";
        param += "&TourType=D";
        param += "&DepType=DATE";
        param += "&StartDT=" + StartDT;
        param += "&EndDT=" + StartDT;
        param += "&DayCntFrom=" + period[0];
        param += "&DayCntTo=" + period[1];
        param += "&AdultRateFrom=0";
        param += "&AdultRateTo=" + maxValue;
        param += "&BaseGoodsNM=" + BaseGoodsNM;
    }
    else if(type == "Day")
    {
        var WeekDay = $j("#txtTourSelDays").val();
    
        param += "&Type=T";
        param += "&TourType=D";
        param += "&DepType=DAY";
        param += "&Weekday=" + WeekDay;        
        param += "&AdultRateFrom=0";
        param += "&AdultRateTo=" + maxValue;
        param += "&BaseGoodsNM=" + BaseGoodsNM;
    }
    
    return param;
}

function getCateNM()
{
    var cateNM = "";

    if($j("#hddModeTour").val() == "2") //국내
    {
//        cateNM = $j("#ddl_TourCate2").val();        
        var e = document.getElementById("ddl_TourCate2") 
        cateNM = e.options[e.selectedIndex].value;
    }   
    else //해외
    {
//        cateNM = $j("#ddl_TourCate1").val();
        var e = document.getElementById("ddl_TourCate1") 
        cateNM = e.options[e.selectedIndex].value;
    }   
    
    return cateNM;    
}

function getRegionCateCD(cateCD)
{
    var cate = 0;

    switch(parseInt(cateCD))
    {
        case 2:
            cate = 15;
            break;
        case 1:
            cate = 20;
            break;
        case 5:
            cate = 13;
            break;
        case 9:
            cate = 12;
            break;
    }
    
    return cate;
}

function getCateCD() {

    var cateNM = getCateNM();
    var cate = 0;
    
    switch(cateNM)
    {
        case "free":
            cate = 2;
            break;
        case "pkg":
            cate = 1;
            break;
        case "domestic":
            cate = 5;
            break;
        case "jeju":
            cate = 9;
            break;
    }
    
    return cate;
}

function ddl_Cate_Change() {
    var ddlID = "ddl_TourArea";
    
    var parentCD = getCateCD();
    if (parentCD > 0) {
        GetCateTable(getRegionCateCD(parentCD), ddlID);
    } else {
        ddl_clear(ddlID);
        ddl_add(ddlID, "선택하세요", "");        
    }
}

function GetCateTable(ParentCD, ddlID) {
    GetCateList(ParentCD, ddlID);
}

function GetCateList(ParentCD, selectID)
{
    var url = 'http://tour.interpark.com/Exporter/ws/tourService.asmx/GetCateTable';		
    var params = 'ParentCD=' + ParentCD;

    var cbfn = function(request)
    {
        var result = request.responseXML;
        if (result != null)
        {
            ddl_clear(selectID);
            ddl_add(selectID, "선택하세요", "");
            var items = result.getElementsByTagName("Table");
                     
            for (var i=0; i<items.length; i++) {
                var CateCD = items[i].getElementsByTagName("CateCD")[0].childNodes[0] ? items[i].getElementsByTagName("CateCD")[0].childNodes[0].nodeValue:'';
                var CateNM = items[i].getElementsByTagName("CateNM")[0].childNodes[0].nodeValue;;
                ddl_add(selectID, CateNM, CateCD);
            }
            //replaceSelects();
            //refreshSelect(selectID);
        }
    }   
    
    RequestAjax(url, params, cbfn);
}

function getPeriod()
{    
    var datearr = [[1, 30], [1, 3], [4, 5], [6, 7], [8, 15], [15, 30]];
    var obj = document.getElementById('sel_Period');
    
    return datearr[obj.selectedIndex];
}

function change_tourtype(type)
{   
    $j("#txt_keyword").val("키워드");
    changeTourArea(type);
    ddl_Cate_Change();
}

function changeTourArea(areaNM)
{
    $j("#liTourCond").hide();
    $j("#liTourDate").hide();
    $j("#liTourDay").hide();
    
    $j("#liTour" + areaNM).show();
}

function InitQuickTour()
{   
    change_tourtype('Cond');
}

//여행 달력
function showTourCalendar(objID)
{   
    if (objID == 'txtTourSelDate' && (document.getElementById('txtTourSelDate').value == '' || document.getElementById('txtTourSelDate').value == ''))
    {
        alert('출발일을 먼저 입력해 주세요.');
        return;
    }    

    doAllLayerClose();
    ShowCalendarLayer('txtTourSelDate', 'txtTourSelDate', 'tour', "OW".toUpperCase() , '365', objID, function Callback(startDate, endDate, diffDays){} , null);
}

function clickDays(value)
{
    var index = Number(value) - 1;

    $j("#liTourDay > span.spot").children("a").removeClass("on").eq(index).addClass("on");
//    $j("#liTourDay > span.spot").children("a").css("border","1px solid black").eq(index).css("border","1px solid red");
    $j("#txtTourSelDays").val(value);
}

function changeAreaTour(targetName, type)
{
    changeArea(targetName, type);
    
    if(type == "d"){
        $j("#span_TourCate1").hide();
        $j("#span_TourCate2").show();
        $j("#ddl_TourCate1").hide();
        $j("#ddl_TourCate2").show();
        
        QuickSearchBanner("Tour", "2");
    }
    else{
        $j("#span_TourCate1").show();
        $j("#span_TourCate2").hide();
        $j("#ddl_TourCate1").show();
        $j("#ddl_TourCate2").hide();
        
        QuickSearchBanner("Tour", "1");
    }
    
    ddl_Cate_Change();
}

function getTodayWeek()
{
    try{
        var d = new Date();
        var todayIndex = d.getDay();
        
        $j("#divTourDays").children("a").removeClass("on").eq(todayIndex).addClass("on");
    }
    catch(e){}
}
/*여행-----------------------------------------------------------------------------------*/
</script>
<!--/* 퀵서치 검색영역 항공+호텔 */-->
<script type="text/javascript">
/*항공+호텔-----------------------------------------------------------------------------------*/

function DepListJeju_Change(value,type)
{
    if(type=="dep")
    {
        $j("#ddlArrListJeju").val(value);
        
    }else{
    
        $j("#ddlDepListJeju").val(value);
    }
    
}

function DepList_Change(value,type)
{
    if(type="dep")
    {
        $j("#ddlAirArr1").val(value);
    }else{
        $j("#ddlAirDep0").val(value);
    }
    
}

function changeAreaAirtel(targetName, type)
{
    if(type == "d")
    {
        $j("#ulAirtelFore").removeClass("on");
        $j("#ulAirtelDomeSearch").addClass("on");
        $j("#ulAirtelDomeAirflag").addClass("on");
        
        QuickSearchBanner("Airtel", "2");
    }
    else
    {
        $j("#ulAirtelFore").addClass("on");
        $j("#ulAirtelDomeSearch").removeClass("on");
        $j("#ulAirtelDomeAirflag").removeClass("on");        
        
        QuickSearchBanner("Airtel", "1");
    }
    
    changeArea(targetName, type);
}

function SetAirTripType(trip)
{
    if(trip=="OW")
    {
        $j("#DivAirReturn").hide();
    }
    else
    {
        
        $j("#DivAirReturn").show();
    }
}

function setCityAirtelExe(loc, fcCode, fcKorDesc, nateCode, HotelCityCD) 
{
	if((loc == "4" || loc == "5" ) && ( fcCode=="SEL" || fcCode=="ICN" || fcCode=="GMP" || fcCode=="PUS" || fcCode=="TAE" || fcCode=="CJU" || fcCode=="KWJ" || fcCode=="USN" || fcCode=="KPO" || fcCode=="MPK" || fcCode=="HIN" || fcCode=="RSU" || fcCode=="YEC" || fcCode=="SHO" || fcCode=="KUV" || fcCode=="WJU" || fcCode=="KAG" || fcCode=="CJJ"))
	{
	    alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요');
	    return;
	}
	else 
	{
		SetAirCity(loc,fcCode,fcKorDesc, nateCode);
		
		if((typeof(HotelCityCD)=="") || (typeof(HotelCityCD)=="undefined"))
		{
            $j.ajax({
                    url: "/Airtel/Ajax/AirCitySearchHotel.aspx",
                    data: {AirPortCD : fcCode},
                    type: 'post',
                    dataType: "xml",   
                    success: function(result){
                        var items = $j(result).find('Table');
                        if(items.length > 0)
                        {
	                        $j(result).find('Table').each(function(){
				                var CityCD = $j(this).find('CityCD').text();
				                var CityKRNM = $j(this).find('CityKRNM').text();
				                var NatCD = $j(this).find('NatCD').text();
				                var NatKRNM = $j(this).find('NatKRNM').text();
				                var AirPortCode = $j(this).find('AirPortCode').text();
				                var AirCityCode = $j(this).find('AirCityCode').text();

                                if((CityCD!="") && (CityKRNM!="") && (NatKRNM!="") && (AirCityCode!=""))
                                {
                                    SetHotelCityAirtel(CityCD, CityKRNM, NatKRNM, AirCityCode)
                                }
                                else
                                {
                                    //alert("없음2"+fcCode);
                                    $j("#HotelCityCD").val("");
                                    $j("#HotelCityNM").val("");
                                }

	                        });
                        }
                        else
                        {
                            //alert("없음"+fcCode);
                            $j("#HotelCityCD").val("");
                            $j("#HotelCityNM").val("");
                        }                    
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown){
                    },
                    async: false
            });
        }
        else
        {
            if(loc == "4")
            {
                $j("#HotelCityCD").val(HotelCityCD);
                $j("#HotelCityNM").val(fcKorDesc);
            }
        }
//        AirCitySearchClose();
        doAllLayerClose();
        
        setCityFocus(loc);
	}
}

function SetAirCity(loc,fcCode,fcKorDesc, nateCode)
{

    if(loc == '4')
    {
        SetAirCityCD("AirArr0", fcKorDesc, fcCode);
        SetAirCityCD("AirDep1", fcKorDesc, fcCode);
        $j("#HotelCityCD").val(fcCode);
        $j("#HotelCityNM").val(fcKorDesc);
    }
    else if(loc == '5')
    {
        SetAirCityCD("AirDep1", fcKorDesc, fcCode);
    }
    
}

function SetAirCityCD(controlID, CityName, CityCD)
{
    if (CityCD == "SEL")
    {
        CityName = "인천/김포";
    }
    $j("#txt" + controlID).val(CityName);
    $j("#hid" + controlID).val(CityCD);
    //$j("#lbl" + controlID).text(CityName);
}

// 도시국가 선택시 이벤트
function SetHotelCityAirtel(HotelCityCD, HotelCityNM, NatNM, AirCityCD)
{
    var HotelCityCD = HotelCityCD;
    var HotelCityNM = unescape(HotelCityNM);
    var NatNM = unescape(NatNM);

    document.getElementById('HotelCityCD').value = unescape(HotelCityCD);
    document.getElementById('HotelCityNM').value = unescape(HotelCityNM);// + " / " + unescape(NatNM);
}

//function AirCitySearchClose()
//{
//    $j("#txtAirDep1").removeClass('add01');
//    $j("#txtAirArr0").removeClass('add01');
//    $j("#txtAirDep1").addClass('add02');
//    $j("#txtAirArr0").addClass('add02');
//    HideLayer('AirCitySearch');
//}

//달력 
function showCalendarAirtel(objID)
{   
    doAllLayerClose();
    ShowCalendarLayer('txtAirDepDT', 'txtAirRetDT', 'airtel', $j('#ddlAirTripType').val() , '365', objID, function Callback(startDate, endDate, diffDays){} , null);
}

function airtelSearch()
{
    var airtelMode = $j("#hddModeAirtel").val();
    if(airtelMode == "2")
    {
        GoFreeyaJeju();
    }
    else
    {
        doMainSearch();
    }
    
}

function doMainSearch()
{

    if (!SearchAirValidation())
    {
//        alert("검색 조건을 다시 선택해주세요.");
        return;
    }

    //왕복-편도
    var tripType = "RT";
//    if ($j("#hidAirTripType").val()== "OW")
    if ($j("#ddlAirTripType").val()== "OW")
    {
        tripType = "OW";
    }
    
    //출귀국 도시    
//    var p_dep0 = $j("#hidAirDep0").val();
    var p_dep0 = $j("#ddlAirDep0 option:selected").val();
    var p_depNM0 = $j("#ddlAirDep0 option:selected").text();
    var p_arr0 = $j("#hidAirArr0").val();
    var p_arrNM0 = $j("#txtAirArr0").val();    
    
    var p_dep1 = $j("#hidAirDep1").val();
    var p_depNM1 = $j("#txtAirDep1").val();
//    var p_arr1 = $j("#hidAirArr1").val();
    var p_arr1 = $j("#ddlAirArr1 option:selected").val();
    var p_arrNM1 = $j("#ddlAirArr1 option:selected").text();
    
    //출귀국 날짜
    var p_depdate = $j("#txtAirDepDT").val();
    var p_retdate = $j("#txtAirRetDT").val();

    //귀국일미정여부
    var p_StayLength = "";
//    if($j("#AirStayLength").attr("checked")=="checked")
//    {
//        p_StayLength = $j("#AirStayLength").val();
//    }
    //좌석수
    var p_adt = $j("#AirSeatAdult").val();
    var p_chd = $j("#AirSeatYoung").val();
    var p_inf = $j("#AirSeatChild").val();

    if(parseInt(p_adt) + parseInt(p_chd) + parseInt(p_inf) >= 10)
    {
        alert("예약인원은 9명을 넘을 수 없습니다.\n단체예약문의를 이용해주세요");
        return;
    }
        
    //좌석등급
    //var SeatClass = $j("#ddlAirSeatClass").val();
    var SeatClass = "Y";
    var SeatClassNM = "일반석";
//    if (SeatClass == "Y")
//    {
//        SeatClassNM = "일반석";
//    }
//    if (SeatClass == "C")
//    {
//        SeatClassNM = "비지니스석";
//    }
//    if (SeatClass == "F")
//    {
//        SeatClassNM = "일등석";
//    }


    var p_HotelCityCD = $j("#HotelCityCD").val();
    var p_HotelCityNM = $j("#HotelCityNM").val();
    
    //객실 선택
    var p_bed1 = $j('#HotelSelRoom1').val();
    var p_bed2 = $j('#HotelSelRoom2').val();
    var p_bed3 = $j('#HotelSelRoom3').val();
    var p_bed4 = $j('#HotelSelRoom4').val();

    if ( (Number(p_bed1) + Number(p_bed2) + Number(p_bed3) + Number(p_bed4)) > 3)
    {
        alert('객실 예약은 최대 3개까지만 가능합니다.');
        return;
    }
    if ( (Number(p_bed1) + Number(p_bed2) + Number(p_bed3) + Number(p_bed4)) <= 0)
    {
        alert('객실은 1개 이상 선택하셔야 합니다.');
        return;
    }
    
    var url = "/Airtel/Search.aspx"
    url += "?trip="+tripType
    url += "&comp="+SeatClass
    url += "&BEST="+"Y"
    url += "&depdate="+p_depdate
    url += "&retdate="+p_retdate
    url += "&dep0="+p_dep0
    url += "&depNM0="+encodeURIComponent(p_depNM0)
    url += "&arr0="+p_arr0
    url += "&arrNM0="+encodeURIComponent(p_arrNM0)
    url += "&dep1="+p_dep1
    url += "&depNM1="+encodeURIComponent(p_depNM1)
    url += "&arr1="+p_arr1
    url += "&arrNM1="+encodeURIComponent(p_arrNM1)
    url += "&adt="+p_adt
    url += "&chd="+p_chd
    url += "&inf="+p_inf
    url += "&StayLength="+p_StayLength
    url += "&HotelRegionCode="+p_HotelCityCD
    
    url += "&bed1="+p_bed1
    url += "&bed2="+p_bed2
    url += "&bed3="+p_bed3
    url += "&bed4="+p_bed4
    url += "&mbn=tour_main&mln=search_airhotel0";
    
    //url += "&HotelCityNM="+encodeURIComponent(p_HotelCityNM)
    
    location.href=url;
}

function SearchAirValidation()
{
    if ($j("#hidAirArr0").val() == "")
    {
        alert("도착도시를 선택해주세요")
        doAirCitySearch('','4');
        return false;
    }
    
    if($j("#ddlAirTripType").val() == "RT")
    {   
        if ($j("#hidAirDep0").val() == "")
        {
            alert("출발도시를 선택해주세요")
            return false;
        }
    }
    
    return true;
}

// 항공 출발/도착 도시리스트 조회
//var arrCityID = new Array();
//var arrCityNM = new Array();
//var arrDepCityList = new Array();
//var strDepCityList = 'PUS/CJU/KWJ/USN/KPO/HIN/RSU/MWX/TAE|CJU|ICN/GMP/CJU|ICN/GMP/CJU|ICN/GMP/CJU/YNY|GMP/CJU|TAE/PUS/CJU/KWJ/MWX|CJU|CJU/GMP|GMP/KUV/TAE/KWJ/PUS/WJU/ICN/RSU/CJJ/YNY/KPO/USN/HIN/MWX|GMP/CJU|CJU|GMP/CJU|GMP/CJU|PUS/CJU';    
//var strCity = 'GMP|KUV|KWJ|TAE|PUS|RSU|ICN|WJU|USN|CJU|HIN|CJJ|KPO|MWX|YNY';
//var strCityNM = '김포|군산|광주|대구 |부산|여수|인천|원주|울산|제주|진주|청주 |포항|무안|양양';

//arrCityID = strCity.split("|");
//arrCityNM = strCityNM.split("|");
//arrDepCityList = strDepCityList.split("|");

//달력 
function showCalendarAirtelJeju(objID)
{   
    doAllLayerClose();
    ShowCalendarLayer('txtdepDateJeju', 'txtretDateJeju', 'jeju_air', $j('#ddlAirTripType').val() , '365', objID, function Callback(startDate, endDate, diffDays){} , null);
}

function SetAirJejuTripType(trip)
{
    if(trip=="OW")
    {
        $j("#DivAirJejuReturn").hide();
    }
    else
    {
        
        $j("#DivAirJejuReturn").show();
    }
}

function GoFreeyaJeju()
{
    var nAdultCnt = Number(document.getElementById('ddlAdultCntJeju').value);
    var nInfantCnt = Number(document.getElementById('ddlInfantCntJeju').value);
    var nBabyCnt = Number(document.getElementById('ddlBabyCntJeju').value);
    
    if (nAdultCnt < nBabyCnt) {
        alert('유아는 따로 좌석이 배정되지 않으므로 성인보다 많이 탑승할 수 없습니다');
        return;
    }
    
    if( (nAdultCnt + nInfantCnt + nBabyCnt) >= 10)
    {
        alert("예약인원은 9명을 넘을 수 없습니다.\n상담/맞춤견적을 이용해주세요");
        return;
    }
    
    var params = 'depcity=' + document.getElementById('ddlDepListJeju').value;
    params += '&arrcity=' + document.getElementById('hidAirJejuArr0').value;
    params += '&depDate=' + document.getElementById('txtdepDateJeju').value;
    params += '&retDate=' + document.getElementById('txtretDateJeju').value;
    params += '&adultCnt=' + nAdultCnt;
    params += '&infantCnt=' + nInfantCnt;
    params += '&babyCnt=' + nBabyCnt;
    params += '&AirCD=KE';
    params += '&mbn=tour_main';
    params += '&mln=search_dairhotel0';
    
    var url = '/freeya/jeju/main_new.aspx?' + params;    
    
    var width = GetScreenWidth(1000);
    var height = GetScreenHeight(764);
    var scroll = GetPopupScrollYN();
    
    window.open(url, '_blank', 'resizable=' + scroll + ', scrollbars=' + scroll + ', status=no, width=' + width + ', height=' + height );
}

function GetPopupScrollYN()
{
    var obScroll = "no";
    if(screen.height - 30 < 764) obScroll = "yes";
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
    if(screen.height - 30 < Number(vHeight)) screenHeight = screen.height - 30;
    
    return screenHeight;
}


/*항공+호텔-----------------------------------------------------------------------------------*/
</script>
<!--/* 퀵서치 검색영역 탭 */-->
<script type="text/javascript">
/*탭-----------------------------------------------------------------------------------*/
function TabDisplay(index)
{   
    //탭부분 변경
    $j("#TitleAir").removeClass("on");
    $j("#divMainAreaAir").removeClass("on");
    if(index == 0)
    {
        $j("#imgTitleOnAir").show();
        $j("#imgTitleOffAir").hide();    
    }
    else
    {
        $j("#imgTitleOnAir").hide();
        $j("#imgTitleOffAir").show();    
    }
        
    $j("#TitleHotel").removeClass("on");
    $j("#divMainAreaHotel").removeClass("on");
    if(index == 1)
    {
        $j("#imgTitleOnHotel").show();
        $j("#imgTitleOffHotel").hide();    
    }
    else
    {
        $j("#imgTitleOnHotel").hide();
        $j("#imgTitleOffHotel").show();    
    }    
    
    $j("#TitleAirtel").removeClass("on");
    $j("#divMainAreaAirtel").removeClass("on");
    if(index == 2)
    {
        $j("#imgTitleOnAirtel").show();
        $j("#imgTitleOffAirtel").hide();    
    }
    else
    {
        $j("#imgTitleOnAirtel").hide();
        $j("#imgTitleOffAirtel").show();    
    }
    
    $j("#TitleTour").removeClass("on");
    $j("#divMainAreaTour").removeClass("on");
    if(index == 3)
    {
        $j("#imgTitleOnTour").show();
        $j("#imgTitleOffTour").hide();    
    }
    else
    {
        $j("#imgTitleOnTour").hide();
        $j("#imgTitleOffTour").show();    
    }

    var strName = "";
    var src = "";
    var modeType = "1";

    switch(index)
    {
        case 0:
            strName = "Air";            
            modeType = $j("#hddModeAir").val();
            break;
        case 1:
            strName = "Hotel";            
            modeType = $j("#hddModeHotel").val(); 
            
            if($j("#ForeHotelCityCD").val() == "" && $j("#ForeHotelCityNM").val() == "도시")
               HotelInit();                    
            break;
        case 2:
            strName = "Airtel";
            modeType = $j("#hddModeAirtel").val();
            break;
        case 3:
            strName = "Tour";
            modeType = $j("#hddModeTour").val();
            
            if($j("#ddl_TourArea").children("option").length <= 1)
                InitQuickTour();            
            break;
    }

    $j("#Title" + strName).addClass("on");
    $j("#divMainArea" + strName).addClass("on");
    
    QuickSearchBanner(strName,modeType);
}

function QuickSearchBanner(strName, modeType)
{
    doAllLayerClose();

    //퀵서치 배너부분
    //항공 해외
	$j("#divBanner0_Air").hide();
	$j("#divBanner1_Air").hide();
	$j("#search_Air").hide();
	//항공 국내
	$j("#divBanner0_Air2").hide();
	$j("#divBanner1_Air2").hide();
	$j("#search_Air2").hide();
    //호텔 해외
	$j("#divBanner0_Hotel").hide();
	$j("#divBanner1_Hotel").hide();
	$j("#search_Hotel").hide();
	//호텔 국내
	$j("#divBanner0_Hotel2").hide();
	$j("#divBanner1_Hotel2").hide();
	$j("#search_Hotel2").hide();
    //항호 해외
	$j("#divBanner0_Airtel").hide();
	$j("#divBanner1_Airtel").hide();
	$j("#search_Airtel").hide();
	//항호 국내
	$j("#divBanner0_Airtel2").hide();
	$j("#divBanner1_Airtel2").hide();
	$j("#search_Airtel2").hide();
    //여행 해외
	$j("#divBanner0_Tour").hide();
	$j("#divBanner1_Tour").hide();
	$j("#search_Tour").hide();
	//여행 국내
	$j("#divBanner0_Tour2").hide();
	$j("#divBanner1_Tour2").hide();
	$j("#search_Tour2").hide();

    //노출배너
    if(modeType == "2")
    {
        strName = strName + "2";
    }
    
	$j("#divBanner0_" + strName).show();
	$j("#divBanner1_" + strName).show();
	$j("#search_" + strName).show();
}

//항공 지역(해외,국내)
function checkArea(AreaType)
{   
     if(AreaType == "f")
    {
        $j("#foreignOn").children("img:first").attr("src",$j("#foreignOn").children("img:first").attr("src").replace("_off","_on"));
        $j("#domesticOn").children("img:first").attr("src",$j("#domesticOn").children("img:first").attr("src").replace("_on","_off"));
        
    } else if(AreaType == "d")
    {   
        $j("#foreignOn").children("img:first").attr("src",$j("#foreignOn").children("img:first").attr("src").replace("_on","_off"));
        $j("#domesticOn").children("img:first").attr("src",$j("#domesticOn").children("img:first").attr("src").replace("_off","_on"));
    }
    
    $j("#txtAreaMode").val(AreaType);
}



function changeArea(targetName, type)
{
    try{
        var $objDomestic = $j("#rdoDome"+targetName);
        var $objforeign = $j("#rdoFore"+targetName);
        
        var $hddTarget = $j("#hddMode"+targetName);
        
        var domeSrc = $objDomestic.children("img:first").attr("src");
        var foreSrc = $objforeign.children("img:first").attr("src");
        
        var altDomeText = "";
        var altForeText = "";
        
        if(targetName == "Airtel")
        {
            altDomeText =  "국내검색";
            altForeText =  "해외검색";
        }else if(targetName == "Air"){
            altDomeText =  "국내";
            altForeText =  "해외";
        }else if(targetName == "Hotel"){
            altDomeText =  "국내호텔";
            altForeText =  "해외호텔";
        }
        
        if(type == "d")
        {
            $objforeign.children("img:first").attr("src",foreSrc.replace("_on","_off")).attr("alt",altDomeText);
            $objDomestic.children("img:first").attr("src",domeSrc.replace("_off","_on")).attr("alt","선택하기");
            
            $hddTarget.val("2");
        }
        else
        {
            $objforeign.children("img:first").attr("src",foreSrc.replace("_off","_on")).attr("alt","선택하기");
            $objDomestic.children("img:first").attr("src",domeSrc.replace("_on","_off")).attr("alt",altForeText);
            
            $hddTarget.val("1");
        }
    }catch(e){}
}

/*탭-----------------------------------------------------------------------------------*/
</script>
<!-- SMS발송 -->
<script type="text/javascript">
function ShowPhoneSMS()
{   
    var newline = "\r";
    if(navigator.userAgent.match(/MSIE/) != null) newline = "</br>";
    
    var text = "대한민국 항공권 판매 1위!" 
            + newline + "특가 예약을 만나보세요!" 
            + newline + "&nbsp;" + newline 
            + "■  가장 쉽고 빠른 최저가 항공권 예약!" 
            + newline + "인터파크 항공 앱" 
            + newline + "http://bit.ly/InterparkAIR"                 
            + newline + "&nbsp;" + newline 
            + "■  오늘 체크인! 특가호텔 모두 여기!" 
            + newline + "인터파크 체크인나우 앱 " 
            + newline + "http://bit.ly/InterparkHotel"                 
            + newline + "&nbsp;" + newline 
            + "■  전세계 해외호텔 비교검색" 
            + newline + "인터파크 해외호텔 앱" 
            + newline + "http://bit.ly/InterparkAHotel"                 
            + newline + "&nbsp;" + newline
            + "■  가장 쉬운 모바일 여행예약" 
            + newline + "인터파크투어 앱!" 
            + newline + "http://bit.ly/Interparktour"                 
            + newline + "&nbsp;" + newline;
                                          
    $j("#txtSMSConts").html(text);
//    ShowObjLayer2('divSMS',$('imgSMS'),130,650);
    //ShowPosLayer('divSMS',100);
    ShowObjLayer2('divSMS',$j('img_Contents_QuickSearch_Air_2'),680,630);
    
}

function SendSMS()
{   
    var senderno = '1588-3443';

    var rcv = $j("#selRcv").val();
    var rcv1 = $j.trim($j("#txtRcv1").val());
    var rcv2 = $j.trim($j("#txtRcv2").val());
    
    if(rcv1 == "")
    {
        alert("받는사람 휴대폰번호를 입력해주세요.");
        $j("#txtRcv1").val("");
        $j("#txtRcv1").focus();
        return;
    }
    
    if(rcv2 == "")
    {
        alert("받는사람 휴대폰번호를 입력해주세요.");
        $j("#txtRcv2").val("");
        $j("#txtRcv2").focus();
        return;
    }
    
    if(chk_number(rcv1) == false)
    {
        alert("받는사람 휴대폰번호를 숫자로 입력해주세요.");
        $j("#txtRcv1").val("");
        $j("#txtRcv1").focus();
        return;
    }
    
    if(chk_number(rcv2) == false)
    {
        alert("받는사람 휴대폰번호를 숫자로 입력해주세요.");
        $j("#txtRcv2").val('');
        $j("#txtRcv2").focus();
        return;
    }
    
    var recvno = rcv + rcv1 + rcv2;
    
    $j.ajax({
                url: "/global/ajax/SMS.aspx?mbn=tour&mln=mlms3",
                type: "GET",
                data: {recvno:recvno, senderno:senderno, reqtime:(new Date()).getTime()},
                success: SendSMSCallback,
                error: function(error) {  },
                async: false
    });
}

function SendSMSCallback(result)
{
    switch(result)
    {
        case "S":
            alert("메시지가 전송되었습니다.");
            $j("#txtRcv1").val("");
            $j("#txtRcv2").val("");
            HideLayer('divSMS');
//            HideEventLayer("divSMS");
        break;
        case "F":
            alert("메세지 전송에 실패하였습니다.\r관리자에게 문의하세요.");
            break;        
        default :
        break;
    }
}

//숫자체크
function chk_number(chkVal)
{
	for(i=0;i<chkVal.length;i++) {
		if(chkVal.charCodeAt(i)>57 || chkVal.charCodeAt(i)<48) { //숫자 이외의 경우
			return false;
		}
	}
	return true;
}
</script>
<!-- 메인 개편 -->
<script type="text/javascript">
$j(document).ready(function() { 
    InitKeyWordSection();
    InitGoodsSection();
    InitEventSection(); 
    
    SetHousingSearchDate();    
    getTodayWeek();
});

function OnloadAirSearchTab()
{   
    var js  = document.createElement('script');
    js.type = 'text/javascript'; 
    js.src  = 'global/js/airQuickSearch_N.js?ver=20140506_1';
    js.charset = 'euc-kr';
    document.getElementsByTagName('head')[0].appendChild(js);
}

AddWindowEvent(RollingGo);
</script>
</head>