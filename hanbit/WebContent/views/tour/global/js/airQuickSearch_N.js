/* 메인개편 */

var s_Trip = "RT";
var s_StartType = "D";
var s_form = document.SearchConditionRT;

//현재시간을 가져온다
var s_hour = document.HDate.nowHour.value;
setDatetime(s_Trip , s_form, s_hour);   //신사용(2008.10.21이후)


////날짜 자동세팅(2008.10.21 예약가능일자 변경에 의해, 차용범)
//function setDatetime(trip, frm,  hour){

//    var today = document.HDate.date0.value; // 20140127
//    
//    //왕복/편도일때
//    if(trip=="RT"){
//        //if(frm.depdate0.value==''){
//        
//            if (s_StartType == "D") {
//                if(hour < 17){
//                    if(today == "20140130" || today == "20140131" || today == "20140201")
//                        frm.DomeDepdate0.value=document.HDate.date3.value;
//                    else
//                        frm.DomeDepdate0.value=document.HDate.date1.value;
//                }else{
//                    if(today == "20140129")
//                        frm.DomeDepdate0.value=document.HDate.date4.value;
//                    else if(today == "20140130" || today == "20140131" || today == "20140201")
//                        frm.DomeDepdate0.value=document.HDate.date3.value;
//                    else
//                        frm.DomeDepdate0.value=document.HDate.date2.value;
//                }
//            } else if (s_StartType == "F") {
//                if(hour < 17){
//                    frm.ForeDepdate0.value=document.HDate.date7.value;
//                }else{
//                    frm.ForeDepdate0.value=document.HDate.date8.value;
//                }
//            }
//        //}
//        if(frm.DomeRetdate.value !='OPEN' && s_StartType == "D"){
//            frm.DomeRetdate.value=document.HDate.date5.value;
//        } else if (s_StartType == "F") {
//            frm.ForeRetdate.value=document.HDate.date11.value;
//        }
//    }
//    //편도일때
//    else if(trip=="OW"){
//        //if(frm.depdate0.value==''){
//            if (s_StartType == "D") {
//                if(hour < 17){
//                    if(today == "20140130" || today == "20140131" || today == "20140201")
//                        frm.DomeDepdate0.value=document.HDate.date3.value;
//                    else
//                        frm.DomeDepdate0.value=document.HDate.date1.value;
//                }else{
//                    if(today == "20140129")
//                        frm.DomeDepdate0.value=document.HDate.date4.value;
//                    else if(today == "20140130" || today == "20140131" || today == "20140201")
//                        frm.DomeDepdate0.value=document.HDate.date3.value;
//                    else
//                        frm.DomeDepdate0.value=document.HDate.date2.value;
//                }
//                
//            } else if (s_StartType == "F") {
//                if(hour < 17){
//                    frm.ForeDepdate0.value=document.HDate.date7.value;
//                }else{
//                    frm.ForeDepdate0.value=document.HDate.date8.value;
//                }
//            }
//        //}
//    }
//    //다구간일때
//    else if(trip=="MD"){
//        
//        if(frm.DomeRetdate.value !='OPEN' && s_StartType == "D"){
//            frm.DomeRetdate.value=document.HDate.date5.value;
//        } else if (s_StartType == "F") {
//            frm.DomeRetdate.value=document.HDate.date11.value;
//        }
//        
//        if(frm.DomeRetdate1.value==''){
//            if(hour <= 17){
//                frm.DomeRetdate1.value=frm.DomeRetdate.value;
//            }else{
//                frm.DomeRetdate1.value=frm.DomeRetdate.value;
//            }
//        }
//    }
//}
//날짜 자동세팅(2008.10.21 예약가능일자 변경에 의해, 차용범)
function setDatetime(trip, frm,  hour){

    var today = document.HDate.date0.value; // 20140127
    var d = new Date();
    var DayofWeek = d.getDay();
    
    //왕복/편도일때
    if(trip=="RT"){
        //if(frm.depdate0.value==''){
        
            if (s_StartType == "D") {
                if(hour < 17){
                    if(today == "20140130" || today == "20140131" || today == "20140201")
                        frm.DomeDepdate0.value=document.HDate.date3.value;
                    else
                        frm.DomeDepdate0.value=document.HDate.date1.value;
                }else{
                    if(today == "20140129")
                        frm.DomeDepdate0.value=document.HDate.date4.value;
                    else if(today == "20140130" || today == "20140131" || today == "20140201")
                        frm.DomeDepdate0.value=document.HDate.date3.value;
                    else
                        frm.DomeDepdate0.value=document.HDate.date2.value;
                }
            } else if (s_StartType == "F") {
            
                if(DayofWeek == 5) //금요일
                {
                    if(hour >= 13)
                        frm.ForeDepdate0.value=document.HDate.date5.value;
                    else
                        frm.ForeDepdate0.value=document.HDate.date3.value;
                }
                else if(DayofWeek == 6) //토요일
                {
                    frm.ForeDepdate0.value=document.HDate.date5.value;
                }                
                else if(DayofWeek == 0) //일요일
                {
                    if(hour >= 13)
                        frm.ForeDepdate0.value=document.HDate.date3.value;
                    else
                        frm.ForeDepdate0.value=document.HDate.date5.value;
                }
                else                
                {
                    frm.ForeDepdate0.value=document.HDate.date3.value;
                }
                    
                /*
                if(hour < 17){
                    frm.ForeDepdate0.value=document.HDate.date7.value;
                }else{
                    frm.ForeDepdate0.value=document.HDate.date8.value;
                }
                */
            }
        //}
        if(frm.DomeRetdate.value !='OPEN' && s_StartType == "D"){
            frm.DomeRetdate.value=document.HDate.date5.value;
        } else if (s_StartType == "F") {
            frm.ForeRetdate.value=document.HDate.date11.value;
        }
    }
    //편도일때
    else if(trip=="OW"){
        //if(frm.depdate0.value==''){
            if (s_StartType == "D") {
                if(hour < 17){
                    if(today == "20140130" || today == "20140131" || today == "20140201")
                        frm.DomeDepdate0.value=document.HDate.date3.value;
                    else
                        frm.DomeDepdate0.value=document.HDate.date1.value;
                }else{
                    if(today == "20140129")
                        frm.DomeDepdate0.value=document.HDate.date4.value;
                    else if(today == "20140130" || today == "20140131" || today == "20140201")
                        frm.DomeDepdate0.value=document.HDate.date3.value;
                    else
                        frm.DomeDepdate0.value=document.HDate.date2.value;
                }
                
            } else if (s_StartType == "F") {
            
                if(DayofWeek == 5) //금요일
                {
                    if(hour >= 13)
                        frm.ForeDepdate0.value=document.HDate.date5.value;
                    else
                        frm.ForeDepdate0.value=document.HDate.date3.value;
                }
                else if(DayofWeek == 6) //토요일
                {
                    frm.ForeDepdate0.value=document.HDate.date5.value;
                }                
                else if(DayofWeek == 0) //일요일
                {
                    if(hour >= 13)
                        frm.ForeDepdate0.value=document.HDate.date3.value;
                    else
                        frm.ForeDepdate0.value=document.HDate.date5.value;
                }
                else                
                {
                    frm.ForeDepdate0.value=document.HDate.date3.value;
                }
                /*            
                if(hour < 17){
                    frm.ForeDepdate0.value=document.HDate.date7.value;
                }else{
                    frm.ForeDepdate0.value=document.HDate.date8.value;
                }
                */
            }
        //}
    }
    //다구간일때
    else if(trip=="MD"){
        
        if(frm.DomeRetdate.value !='OPEN' && s_StartType == "D"){
            frm.DomeRetdate.value=document.HDate.date5.value;
        } else if (s_StartType == "F") {
            frm.DomeRetdate.value=document.HDate.date11.value;
        }
        
        if(frm.DomeRetdate1.value==''){
            if(hour <= 17){
                frm.DomeRetdate1.value=frm.DomeRetdate.value;
            }else{
                frm.DomeRetdate1.value=frm.DomeRetdate.value;
            }
        }
    }
}

//날짜 자동세팅
function setDate(trip, frm){
    //왕복/편도일때
    if(trip=="RT"){
        if(frm.DomeDepdate0.value==''){
            if (s_StartType == "D") {
	            frm.DomeDepdate0.value=document.HDate.date1.value;
            } else if (s_StartType == "F") {
                frm.ForeDepdate0.value=document.HDate.date7.value;
            }
        }
        if(frm.DomeRetdate.value ==''){
            if (s_StartType == "D") {
	            frm.DomeRetdate.value=document.HDate.date5.value;
            } else if (s_StartType == "F") {
                frm.ForeRetdate.value=document.HDate.date11.value;
            }
        }
    }
    //편도일때
    else if(trip=="OW"){
        if(frm.depdate0.value==''){
            if (s_StartType == "D") {
	            frm.DomeDepdate0.value=document.HDate.date5.value;
	        } else if (s_StartType == "F") {
	            frm.ForeDepdate0.value=document.HDate.date11.value;
	        }
        }
    }
    //다구간일때
    else if(trip=="MD"){
        if(frm.DomeDepdate0.value==''){
	        frm.DomeDepdate0.value=document.HDate.date5.value;
        }
    }
}

function disableretdate(trip){
    if(trip=="ow"){
        document.getElementById('Xretdate').value= document.getElementById('retdate').value;
        document.getElementById('retdate').value="";
        document.getElementById('retdate').disabled = true;
        document.getElementById('retid').style.display='none';
        s_Trip= "OW";

    }else if(trip=="rt"){

        document.getElementById('retdate').value= document.getElementById('Xretdate').value;
        document.getElementById('retdate').disabled = false;
        document.getElementById('retid').style.display='';

        s_Trip= "RT";
    }
}



function  disableRteutn(s){
    if (s_StartType == 'D') {
    
//        document.getElementById('returnUnfix2').style.display='';
    
        if(document.getElementById('returnUnfix').checked==true){
            document.getElementById('Xretdate').value=document.getElementById('DomeRetdate').value;
            document.getElementById('DomeRetdate').value="OPEN";
            $j("#spanval").show();
            document.getElementById('val').style.display='';
        }else{
            document.getElementById('DomeRetdate').value= document.getElementById('Xretdate').value ;
            $j("#spanval").hide();
            document.getElementById('val').style.display='none';
        }
    } else if (s_StartType == 'F') {
        document.getElementById('returnUnfix').checked = false;
        //document.getElementById('returnUnfix2').style.display='none';
        $j("#spanval").hide();
        document.getElementById('val').style.display='none';
        
        setDatetime(s_Trip , s_form, s_hour);
    }
}

function go_fare_searchMain() {

    var Mode = $j("#hddModeAir").val();
    if(Mode == '2')
    {
        //국내선 검색
        goDomeAirSearch();
    }else{
        //해외 검색
        goBookingFlex(s_Trip, s_StartType, s_form);
    }
}

function goBookingFlex(trip, startType, frm){

    
    var dep0 = frm.DomeDep0; //출발편 0 CD
    var arr0 = frm.txt_dep0; //도착편 0 CD
    var arr0_text = frm.DomeDep_text; //도착편 0 text
    var airdate0 = frm.DomeDepdate0; //날짜 0
    
    var dep1 = frm.arr0; //출발편 1 CD
    var dep1_text = frm.DomeArr_text; //출발편 1 text
    var arr1 = frm.DomeSel_arr0; //도착편 1 CD
    if(trip == "MD")
    {
        arr1 = frm.txt_dep1; //다구간일경우 도착편1 CD
    }
    var arr_text1 = frm.DomeDep_text1; //다구간 도착편 1 text
    var airdate1 = frm.DomeRetdate; //날짜 1
    
    var dep2 = frm.arr1; //출발편 2 CD
    var dep2_text = frm.DomeArr_text1; //출발편 2 text
    var arr2 = frm.DomeSel_arr1; //도착편 2 CD    
    var airdate2 = frm.DomeRetdate1; //날짜 2
    
    var adt = frm.DomeAdt; //성인
    var chd = frm.DomeChd; //소아
    var inf = frm.DomeInf; //유아
    
    var returnUnfix = frm.returnUnfix; 
    var val = frm.val;
    
    var dep0_text = "";
    if(startType == "F")
    {
        dep0 = frm.txt_dep0;
        arr0 = frm.ForeDep_text;
        dep0_text = frm.ForeDep0;
        airdate0 = frm.ForeDepdate0;
        
        dep1 = frm.ForeArr_text;
        arr1 = frm.arr0;
        arr_text1 = frm.ForeSel_arr0;
        airdate1 = frm.ForeRetdate;
        
        adt = frm.ForeAdt; //성인
        chd = frm.ForeChd; //소아
        inf = frm.ForeInf; //유아
    }
    
    var user=Number(adt.value)+Number(chd.value)+Number(inf.value);
    
    if(startType == "D" && (arr0_text.value == "" || arr0_text.value == "도착도시"))
    {
        if(trip == "MD")
            alert('여정1 도착도시를 선택해 주세요.');
        else
            alert('도착도시를 선택해 주세요.');
        doAirCitySearch('','0');
        return;
    }
    
    if(startType == "F" && (dep0_text.value == "" || dep0_text.value == "출발도시"))
    {   
        alert('출발도시를 선택해 주세요.');
        doAirCitySearch('','2');
        return;
    }
    
//    if(startType == "D" && (arr0.value=="SEL" || arr0.value=="ICN" ||
//        arr0.value=="GMP" || arr0.value=="PUS" || arr0.value=="TAE" ||
//        arr0.value=="CJU" || arr0.value=="KWJ" || arr0.value=="USN" ||
//        arr0.value=="KPO" || arr0.value=="MPK" || arr0.value=="HIN" ||
//        arr0.value=="RSU" || arr0.value=="YEC" || arr0.value=="SHO" ||
//        arr0.value=="KUV" || arr0.value=="WJU" || arr0.value=="KAG" ||
//        arr0.value=="CJJ") ){
//        alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요');
//        arr0_text.value = "";
//        arr0.value="" ;
//        doAirCitySearch('','0');  
//        return;  
//    }
    
    if(airdate0.value == ''){
        if(trip == "MD")
            alert('여정1 출발일을 선택해 주세요.');
        else
            alert('출발일을 선택해 주세요.');
        return;
    }
    
    if(user > 9)
    {
//        alert('예약인원은 9명을 넘을수 없습니다.');
        alert('9명까지만 예약 가능합니다. 10명 이상 예약은 고객센터로\n문의 해주시기 바랍니다.');
        return;
    }
    
    if(trip == "RT" || trip == "MD")
    {
        if(startType == "D")
        {
            if(dep1_text.value == "" || dep1_text.value == "출발도시")
            {
                if(trip == "MD")
                    alert('여정2 출발도시를 선택해 주세요.');
                else
                    alert('출발도시를 선택해 주세요.');
                doAirCitySearch('','10');
                return;
            }
        }
        else
        {
            if(arr_text1.value == "" || arr_text1.value == "도착도시")
            {
                alert('도착도시를 선택해 주세요.');
                doAirCitySearch('','2');
                return;
            }
        }
    
        if(airdate1.value == ''){
        
            if(trip == "MD")            
                alert('여정1 출발일을 선택해 주세요.');    
            else
                alert('귀국일을 선택해 주세요.');    
            
            if(startType == "D")
            { 
                showCalendarAirDome('imgAirDomeCalArrline','1');
            }
            else
            {
                showCalendarAirDome('imgAirForeCalDep','3');
            }
            return;
        }
        
        if(returnUnfix.checked == false && airdate0.value > airdate1.value)
        {
            if(trip == "MD")
                alert('여정2 출발일을 여정1 출발일 이후로 입력해 주세요.');
            else
                alert('귀국일을 출국일 이후로 입력해 주세요.');
                
            if(startType == "D")
            { 
                showCalendarAirDome('imgAirDomeCalArrline','1');
            }
            else
            {
                showCalendarAirDome('imgAirForeCalDep','3');
            }
            return;   
        }
        
        if(airdate1.value == "OPEN" && val.value == "")
        {
            alert('귀국일을 미지정으로 할경우 최소체류기간을 선택하셔야합니다.');
            return;
        }
    }
    
    if(trip == "MD")
    {
        if(arr_text1.value == "" || arr_text1.value == "도착도시")
        {
            alert('여정2 도착도시를 선택해 주세요.');
            doAirCitySearch('','1');
            return;
        }
        
        if(dep2_text.value == "" || dep2_text.value == "출발도시")
        {
            alert('여정3 출발도시를 선택해 주세요.');
            doAirCitySearch('','1');
            return;
        }
    
        if(airdate2.value == ''){
             alert('여정3 출발일을 선택해 주세요.');     
             showCalendarAirDome('imgDomeRetdate1','2');
            return;
        }
        
        if(airdate1.value > airdate2.value)
        {
            alert('여정3 출발일을 여정2 출발일 이후로 입력해 주세요.');
            showCalendarAirDome('imgDomeRetdate1','2');
            return;   
        }
    }
    
    var exp = new Date();
    exp.setDate(exp.getDate() + 1);

    if(trip=="RT"){
        if(returnUnfix.checked == true){
            airSetCookie("VAL", val.value, exp, "/", "", false);
        }else{
            airSetCookie("VAL", '', exp, "/", "", false);
        }

        airSetCookie("RETDATE", airdate1.value, exp, "/", "", false);
    }

    airSetCookie("SEARCH_TYPE", frm.searchType.value, exp, "/", "", false);
    //            airSetCookie("TRIP", frm.trip[0].value, exp, "/", "", false);
    airSetCookie("TRIP", trip, exp, "/", "", false);

    if (startType == "D") {
        airSetCookie("ARRTEXT", dep1_text.value, exp, "/", "", false);
        airSetCookie("DEP0", arr0.value, exp, "/", "", false);                
        airSetCookie("ARR0", dep1.value, exp, "/", "", false);
    } else if (startType == "F") {
        airSetCookie("DEPTEXT", dep0_text.value, exp, "/", "", false);
        airSetCookie("DEP0", dep0.value, exp, "/", "", false);
        airSetCookie("ARR0", arr1.value, exp, "/", "", false);
    }

    airSetCookie("DEPDATE0", airdate0.value, exp, "/", "", false);
    airSetCookie("ADT", adt.value, exp, "/", "", false);
    airSetCookie("CHD", chd.value, exp, "/", "", false);
    airSetCookie("INF", inf.value, exp, "/", "", false);


    var flexUrl = "resPage=" + frm.resPage.value + 
                  "&trip=" + trip +                   
                  "&adt=" +  adt.value+ 
                  "&chd=" +  chd.value+ 
                  "&inf=" +  inf.value+ 
                  "&comp=" +  frm.comp.value+
                  "&nateCode=" + frm.startTypeD_nateCode.value; 

    /*한국->해외 편도*/    
    flexUrl += "&dep0=" + dep0.value;
    flexUrl += "&arr0=" + arr0.value;
    if(trip == "MD")
    {
        flexUrl += "&arr0_text=" + escape(arr0_text.value);
        flexUrl += "&sdate0=" + airdate0.value;
    }
    else
    {
        if(startType == "F")
        {
            flexUrl += "&dep_text=" + escape(dep0_text.value);
            flexUrl += "&startType=soto";
        }
        else
        {
            flexUrl += "&arr_text=" + escape(arr0_text.value);
        }
        
        flexUrl += "&depdate0=" + airdate0.value;
    }
    

    /*한국->해외 왕복*/    
    if(trip == "RT" || trip == "MD")
    {
        /*
        &dep0=LAX
        &arr0=ICN
        &depdate0=20140715
        &dep_text=%uB85C%uC2A4%uC564%uC824%uB808%uC2A4

        &startType=soto

        &dep1=ICN
        &arr1=SFO
        &arr_text=%uC0CC%uD504%uB780%uC2DC%uC2A4%uCF54
        &retdate=20140729
        */
    
        flexUrl += "&dep1=" + dep1.value;
        flexUrl += "&arr1=" + arr1.value;
        
        if(trip == "MD")
        {
            flexUrl += "&dep1_text=" + escape(dep1_text.value);
            flexUrl += "&arr1_text=" + escape(arr_text1.value);
            flexUrl += "&sdate1=" + airdate1.value;

        }
        else
        {
            if(startType == "F")
            {
                flexUrl += "&arr_text=" + escape(arr_text1.value);
            }
            else
            {
                flexUrl += "&dep_text=" + escape(dep1_text.value);
            }
            
            //flexUrl += "&retdate=" + airdate1.value;                                
            
            if (airdate1.value == 'OPEN')	{
                flexUrl += "&val=" +  val.value;
            }else {
                flexUrl += "&retdate=" +  airdate1.value;
            }
        }
    }
    
    /*한국->해외 다구간*/    
    if(trip == "MD")
    {
        /*
        &dep0=ICN
        &arr0=NRT
        &arr0_text=%uB3C4%uCFC4%28%uB098%uB9AC%uD0C0%29
        &sdate0=20140715

        &dep1=NRT
        &dep1_text=%uB3C4%uCFC4%28%uB098%uB9AC%uD0C0%29
        &arr1=JFK
        &arr1_text=%uB274%uC695%28JFK%29
        &sdate1=20140722

        &dep2=IAD
        &dep2_text=%uC6CC%uC2F1%uD134%28IAD%29
        &arr2=ICN
        &sdate2=20140729
        */
    
        flexUrl += "&dep2=" + dep2.value;
        flexUrl += "&arr2=" + arr2.value;
        flexUrl += "&dep2_text=" + escape(dep2_text.value);
        flexUrl += "&sdate2=" + airdate2.value;
    }
    
    var paramString = 'mbn=tour_main&mln=search_air0&' + flexUrl;
    ShowAirReserveWithParam(paramString);
}

function airSetCookie(name, value, expires, path, domain, secure){
    document.cookie = name + "="
        + escape(value)
        + ((expires) ? "; expires=" + expires.toGMTString() : "")
        + ((path) ? "; path=" + path : "")
        + ((domain) ? "; domain=" + domain : "")
        + ((secure) ? "; secure" : "");
}

//도시 검색
function findCity(loc, fcCode, fcKorDesc, nateCode) {    

	if((loc == "1" || loc == "0" || loc == "10" || loc == "11" ) && ( fcCode=="SEL" ||
			                            fcCode=="ICN" ||
				                        fcCode=="GMP" ||
				                        fcCode=="PUS" ||
				                        fcCode=="TAE" ||
				                        fcCode=="CJU" ||
				                        fcCode=="KWJ" ||
				                        fcCode=="USN" ||
				                        fcCode=="KPO" ||
				                        fcCode=="MPK" ||
				                        fcCode=="HIN" ||
				                        fcCode=="RSU" ||
				                        fcCode=="YEC" ||
				                        fcCode=="SHO" ||
				                        fcCode=="KUV" ||
				                        fcCode=="WJU" ||
				                        fcCode=="KAG" ||
				                        fcCode=="CJJ")){

		alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요');

		return;
	}else if((loc == "2" || loc == "22") && ( fcCode=="SEL" ||
                              fcCode=="ICN" ||
	                          fcCode=="GMP" ||
	                          fcCode=="PUS" ||
	                          fcCode=="TAE" ||
	                          fcCode=="CJU" ||
	                          fcCode=="KWJ" ||
	                          fcCode=="USN" ||
	                          fcCode=="KPO" ||
	                          fcCode=="MPK" ||
	                          fcCode=="HIN" ||
	                          fcCode=="RSU" ||
	                          fcCode=="YEC" ||
	                          fcCode=="SHO" ||
	                          fcCode=="KUV" ||
	                          fcCode=="WJU" ||
	                          fcCode=="KAG" ||
	                          fcCode=="CJJ")){

		alert('출발지가 국내 도시입니다. 출발지를 다시선택해 주세요');

		return;
	}else {
		try {
            setCity(loc,fcCode,fcKorDesc, nateCode);
		} catch (Exception) {
			setCity(loc,fcCode,fcKorDesc, nateCode);
		}
		winClose() ;
	}
}

function getAirCalendar(){
    return $('AirCalendar');
}

function AirCalendar(type,value)
{
    HideLayer('AirCitySearch');
    
    var params = 'type=' + type;
    if (s_StartType == "F"){
        params += '&uType=s';
    }
    params += '&value=' + escape(value);

    var strCalendar= virtualGET('/global/ajax/airCalendar.aspx?' + params);

    if (strCalendar != "" && strCalendar != "undefined")
    {
        var airCalendar = getAirCalendar();
        airCalendar.innerHTML = strCalendar;
        airCalendar.update($$('.popupContainer')[0].innerHTML);

        for (var i = 0; i < 2; i++)
        {
            var Element = $('btnMon' + i);
            if (Element)
            {
	            var firstElement = Element.childElements().first();
	            var lastElement = Element.childElements().last();

	            firstElement.href = "javascript:AirCalendar('','" + firstElement.href + "')";
	            lastElement.href = "javascript:AirCalendar('','" + lastElement.href + "')";
            }
        }
        ShowPosLayer('AirCalendar',310);
    }
}

function calendar2(year,month,day,loc)
{
	var date = year + month + day;
    var inputID = '';

    if (loc == 'I')
        inputID = 'depdate0';
    else if (loc == 'R')
        inputID = 'retdate';

	inputId = document.getElementById(inputID);
	inputId.value = date;

	HideLayer('AirCalendar');
}

function AirCity(keyWord,loc)
{   
    var params = 'keyWord=' + escape(keyWord);
    if (s_StartType == "F") { 
        params += '&loc='+loc;  
        params += '&isSoto=Y';  //해외출발 필수값 :: 해외출발가능 도시들만 검색가능처리됨.
    }
    var strCity = virtualGET('/global/ajax/airCity.aspx?' + params);

    if (strCity != "" && strCity != "undefined")
    {
        var airCitySearch = $('AirCitySearch');
        airCitySearch.innerHTML = strCity;

        ShowObjLayer2('AirCitySearch', $("imgAirForeArrCity"), 570, 700);
//        ShowPosLayer('AirCitySearch',310);
    }
}

function winClose() {
    
    HideLayer('AirCitySearch');
//    HideLayer('AirCalendar');
}

function SpecialCharStrCheck(str)
{
   if(str.search(/[\|&`':%]/) != -1)
   		return false;
   else
   		return true;
}

function goSearchSubmit(infoForm) {
    var regTrim = /^\s+|\s+$/g;

    if(/\S/.test(infoForm.value.replace(regTrim, "")) == false){
        alert('검색어를 입력하세요!');
        infoForm.focus();
        return false;
    }else{
        if(SpecialCharStrCheck(infoForm.value) == false) {
            alert("검색어에 특수문자가 포함되어 있습니다. \n다시 입력해주세요");
            infoForm.focus();
            return false;
        } else {
            //return true;
        }
    }
    //AirCity(infoForm.value);
    doAirCitySearch(infoForm.value,0);
}

function doAirCitySearch(keyWord, loc)
{
//    doAirtelLayerClose();
    doAllLayerClose();
    
    if(loc == null)
        loc = "0";

    var strUrl = "/Airtel/ajax/AirCitySearch.aspx?";
    var parmas = "loc="+ loc +"&keyWord=" + escape(keyWord);
    
    if(loc == "2" || loc == "22")
    {
        strUrl = "/global/ajax/airCity.aspx?";
        parmas += "&isSoto=Y";
    }

//    var strCity = virtualGET('/Airtel/ajax/AirCitySearch.aspx?loc='+ loc +'&keyWord=' + escape(keyWord));
    var strCity = virtualGET(strUrl+parmas);
    
    if (strCity != "" && strCity != "undefined")
    {
        var airCitySearch = $('AirCitySearch');
        airCitySearch.innerHTML = strCity;
        
        if(loc == "0") {
            /*한국-해외*/            
            ShowObjLayer2('AirCitySearch', $("imgAirDomeArrCity"), 570, 720);            
        }else if(loc == "10"){
            /*한국-해외*/            
            ShowObjLayer2('AirCitySearch', $("imgAirDomeArrCity"), 605, 720);
        }else if(loc == "1"){
            /*한국-해외 다중*/
            ShowObjLayer2('AirCitySearch', $("imgAirDomeArrCity1"), 605, 700);
        }else if(loc == "11"){
            /*한국-해외 다중*/
            ShowObjLayer2('AirCitySearch', $("imgAirDomeArrCity1"), 640, 700);
        }else if(loc == "2"){
            /*해외-한국*/
            //ShowPosLayer('AirCitySearch',310);
            ShowObjLayer2('AirCitySearch', $("imgAirForeArrCity"), 570, 700);            
        }else if(loc=="22"){
            /*해외-한국*/
            //ShowPosLayer('AirCitySearch',310);
            ShowObjLayer2('AirCitySearch', $("imgAirForeArrCity"), 605, 700);
        }else if(loc == "3"){
            /*해외호텔*/
            ShowObjLayer2('AirCitySearch', $("imgCity"), 515, 700);
        }else if(loc == "4"){
            /*항공+호텔*/
            ShowObjLayer2('AirCitySearch',  $("imgForeAirArr"), 555, 700);
        }else if(loc == "5"){
            /*항공+호텔*/
            ShowObjLayer2('AirCitySearch', $("imgForeAirDep"), 590, 700);
        }

        $j("#AirCitySearch").show();
        
        if($j("#AirCitySearch").is(":visible"))
            $j("#AirCitySearchNM").focus();
    }
}

function setCityFocus(locIndex)
{
    if(locIndex == "0")
    {
        if($j("#DomeDep_text").length)
            $j("#DomeDep_text").focus();
    }
    else if(locIndex == "10")
    {
        if($j("#DomeArr_text").length)
            $j("#DomeArr_text").focus();
    }
    else if(locIndex == "1")
    {
        if($j("#DomeDep_text1").length)
            $j("#DomeDep_text1").focus();
    }
    else if(locIndex == "11")
    {
        if($j("#DomeArr_text1").length)
            $j("#DomeArr_text1").focus();
    }
    else if(locIndex == "2")
    {
        if($j("#ForeDep0").length)
            $j("#ForeDep0").focus();
    }
    else if(locIndex == "22")
    {
        if($j("#ForeSel_arr0").length)
            $j("#ForeSel_arr0").focus();
    }    
    else if(locIndex == "4")
    {
        if($j("#txtAirArr0").length)
            $j("#txtAirArr0").focus();
    }
    else if(locIndex == "5")
    {
        if($j("#txtAirDep1").length)
            $j("#txtAirDep1").focus(); 
    }
}

//function doAirtelLayerClose()
//{
//    $j("#AirCitySearch").hide();
//}

function AirCitySearchClose(index)
{
    HideLayer('AirCitySearch');
    
    setCityFocus(index);
}

function AirCityFind(loc, fcCode, fcKorDesc, nateCode, HotelCityCD) 
{
    if(loc == "0" || loc == "1" || loc == "2" || loc == "10" || loc == "11" || loc == "22")
	    setCityExeMain(s_Trip, s_StartType, s_form, loc,fcCode,fcKorDesc, nateCode);	
	else if(loc == "3")
	    setCityExeHotel(loc,fcCode,fcKorDesc, nateCode, HotelCityCD);	    
	else if(loc == "4" || loc== "5")
	    setCityAirtelExe(loc,fcCode,fcKorDesc, nateCode, HotelCityCD);	    
}

function setCity(loc,fcCode,fcKorDesc, nateCode){
    setCityExeMain(s_Trip, s_StartType, s_form, loc,fcCode,fcKorDesc, nateCode);
}

//도시 받아오기
function setCityExeMain(trip, startType, frm, loc, fcCode, fcKorDesc, nateCode){
    

    //왕복/편도일때
    if(trip=="RT" || trip=="OW"){
        
        if (startType == "D") {            
                    
            if(loc != "10")
            {
                frm.txt_dep0.value  = fcCode;
                frm.DomeDep_text.value  = fcKorDesc;
            }
            
            frm.arr0.value  = fcCode;
            frm.DomeArr_text.value  = fcKorDesc;
            
            try  {
                frm.startTypeD_nateCode.value  = nateCode;
            }  catch (Exception)  {}
            
            //AirCitySearchClose();
            
        } else if (startType == "F") {
            if(loc != "22")
            {
                frm.txt_dep0.value  = fcCode;
                frm.ForeDep0.value  = fcKorDesc;
            }
            
            frm.arr0.value  = fcCode;
            frm.ForeSel_arr0.value  = fcKorDesc;
            
            try  {
                frm.startTypeF_nateCode.value  = nateCode;
            }  catch (Exception)  {}

        }
    }
    //다구간일때
    else if(trip=="MD"){
        if(loc == "0"){
            frm.txt_dep0.value  = fcCode;
            frm.DomeDep_text.value  = fcKorDesc;
            
            frm.arr0.value  = fcCode;
            frm.DomeArr_text.value  = fcKorDesc;
        }else if(loc == '1'){
            frm.txt_dep1.value  = fcCode;
            frm.DomeDep_text1.value=fcKorDesc;    
            frm.arr1.value  = fcCode;        
            frm.DomeArr_text1.value=fcKorDesc;
        }else if(loc == '10'){
            frm.arr0.value  = fcCode;
            frm.DomeArr_text.value  = fcKorDesc;
        }else if(loc == '11'){
            frm.arr1.value  = fcCode;        
            frm.DomeArr_text1.value=fcKorDesc;
        } 
        
        //AirCitySearchClose();                  
    }
    
    AirCitySearchClose();    
//    doAllLayerClose();

    setCityFocus(loc);
}

/*항공 해외선---------------------------------------------*/
function changeAreaAir(targetName, type)
{
    changeArea(targetName, type);
   
    if(type == "d"){
        //국내선
        $j("#divDomeArea").show();
        $j("#divForeArea").hide();
        
        if($j("#depListT").children("option").length <= 0)
            InitSearchAirDomestic();
        
        QuickSearchBanner("Air", "2");
    }
    else{
        //국제선
        $j("#divDomeArea").hide();
        $j("#divForeArea").show();
        
        QuickSearchBanner("Air", "1");
    }
}

function changeStartType(value)
{
    if(value == "f")
    {
        //해외출발
        $j("#divDomeDepArea").hide();
        $j("#divForeDepArea").show();
        
        $j("#spanDomeDepRangeType").hide();
        $j("#spanForeDepRangeType").show();
        $j("#ddlDomeDepRangeType").hide();
        $j("#ddlForeDepRangeType").show();
        
        s_StartType = "F";
        
        $j("#ddlForeDepRangeType").val('rt');
        changeForeDepRangeType('rt');
    }
    else{
        //한국출발
        $j("#divDomeDepArea").show();
        $j("#divForeDepArea").hide();
        
        $j("#spanDomeDepRangeType").show();
        $j("#spanForeDepRangeType").hide();
        $j("#ddlDomeDepRangeType").show();
        $j("#ddlForeDepRangeType").hide();
        
        s_StartType = "D";
        
        $j("#ddlDomeDepRangeType").val('rt');
        changeDomeDepRangeType('rt');
    }
    
    setDatetime(s_Trip , s_form, s_hour);
}

function changeDomeDepRangeType(value)
{
    //한국-해외
    if(value == "ow"){    
        $j("#liAirRetArea").hide();
        $j("#liAirMDArea").hide();
        $j("#spanDomeSel_arr0").show();  
        $j("#DomeSel_arr0").show();  
        $j("#spanAirMDRetCity").hide();           
        $j("#spanRetNon").hide();
        document.getElementById('returnUnfix').checked = false;
        
        s_Trip = "OW";
    }else if(value == "md"){
        
        $j("#liAirRetArea").show();
        $j("#liAirMDArea").show();
        $j("#spanDomeSel_arr0").hide();  
        $j("#DomeSel_arr0").hide();  
        $j("#spanAirMDRetCity").show();                
        $j("#spanRetNon").hide();
        document.getElementById('returnUnfix').checked = false;
        
        s_Trip = "MD";
    }else{
        $j("#liAirRetArea").show();
        $j("#liAirMDArea").hide();
        $j("#spanDomeSel_arr0").show();  
        $j("#DomeSel_arr0").show();  
        $j("#spanAirMDRetCity").hide();           
        $j("#spanRetNon").show();
        document.getElementById('returnUnfix').checked = false;
        
        s_Trip = "RT";
    }
    
    changeTripTypeTitle(value);
    disableRteutn(1);
    setDatetime(s_Trip , s_form, s_hour);
}

function changeTripTypeTitle(value)
{
    if(value == "md")
    {
        $j("#DomeDep0").attr("title","여정1 출발도시 선택");
        $j("#DomeDep_text").attr("title","여정1 도착도시 선택");
        $j("#DomeDepdate0").attr("title","여정1 출발일 선택");
        $j("#DomeArr_text").attr("title","여정2 출발도시 선택");
        $j("#DomeRetdate").attr("title","여정2 출발일 선택");
    }
    else
    {
        $j("#DomeDep0").attr("title","출발편 출발도시 선택");
        $j("#DomeDep_text").attr("title","출발편 도착도시 선택");
        $j("#DomeDepdate0").attr("title","출국일선택");
        $j("#DomeArr_text").attr("title","귀국편 출발도시 선택");
        $j("#DomeRetdate").attr("title","귀국일선택");
    }
}

function changeForeDepRangeType(value)
{
    //한국-해외
    if(value == "ow"){    
        $j("#liAirRetAreaFore").hide();
        s_Trip = "OW";
    }else{
        $j("#liAirRetAreaFore").show();
        s_Trip = "RT";
    }
    setDatetime(s_Trip , s_form, s_hour);
}

function showCalendarAirDome(obj,index)
{
    doAllLayerClose();

    var calendarMode = "air";
    if(s_Trip == "MD")
        calendarMode = "airMain";

    if(index == "0"){        
//            ShowCalendarLayer('DomeDepdate0', 'DomeRetdate', calendarMode, $j('#ddlDomeDepRangeType').val().toUpperCase() , '365', obj, function Callback(startDate, endDate, diffDays){} , null);        
        $j("#returnUnfix").attr("disabled","disabled");
        if($j("#returnUnfix").is(":checked")  && $j('#ddlDomeDepRangeType').val() == "rt")
        {
            ShowCalendarLayer('DomeDepdate0', 'DomeRetdate', calendarMode, "OW" , '365', obj, ReturnUnfixCheckedCallback , ReturnUnfixCheckedCancelCallback);                    
        }
        else
        {
            ShowCalendarLayer('DomeDepdate0', 'DomeRetdate', calendarMode, $j('#ddlDomeDepRangeType').val().toUpperCase() , '365', obj, function Callback(startDate, endDate, diffDays){ $j("#returnUnfix").removeAttr("disabled"); } , ReturnUnfixCheckedCancelCallback);        
        }
    }else if(index == "1"){    
        if($j("#returnUnfix").is(":checked")  && $j('#ddlDomeDepRangeType').val() == "rt")
            return;
    
        if(s_Trip == "MD")
            ShowCalendarLayer('DomeRetdate', 'DomeRetdate1', calendarMode, $j('#ddlDomeDepRangeType').val().toUpperCase() , '365', obj, function Callback(startDate, endDate, diffDays){} , null);        
        else 
        {
            $j("#returnUnfix").attr("disabled","disabled");
            ShowCalendarLayer('DomeDepdate0', 'DomeRetdate', 'air', $j('#ddlDomeDepRangeType').val().toUpperCase() , '365', obj, function Callback(startDate, endDate, diffDays){ $j("#returnUnfix").removeAttr("disabled"); } , ReturnUnfixCheckedCancelCallback);        
        }
            
    }else if(index == "2"){
        ShowCalendarLayer('DomeRetdate1', 'DomeRetdate1', calendarMode, $j('#ddlDomeDepRangeType').val().toUpperCase() , '365', obj, function Callback(startDate, endDate, diffDays){} , null);
    }else if(index == "3"){
        ShowCalendarLayer('ForeDepdate0', 'ForeRetdate', 'air_FtoD', $j('#ddlForeDepRangeType').val().toUpperCase() , '365', obj, function Callback(startDate, endDate, diffDays){} , null);
    }else if(index == "4"){
//        ShowCalendarLayer('depdate', 'retdate', 'air', $j('#ddlDomeAirlineType').val().toUpperCase() , '365', obj, function Callback(startDate, endDate, diffDays){} , null);
        if($j("#hidTrip").val() == "OW")
        {
            //국내 항공인경우 편도/왕복에 따라 달력 문구가 다르다.
            ShowCalendarLayer('depdate', 'retdate', 'domairOW', $j('#ddlDomeAirlineType').val().toUpperCase() , '365', obj, function Callback(startDate, endDate, diffDays){} , null);
        }
        else
        {
            ShowCalendarLayer('depdate', 'retdate', 'domair', $j('#ddlDomeAirlineType').val().toUpperCase() , '365', obj, function Callback(startDate, endDate, diffDays){} , null);
        }
    }
}

function ReturnUnfixCheckedCallback(startDate, endDate, diffDays)
{
    if($j("#returnUnfix").is(":checked")  && $j('#ddlDomeDepRangeType').val() == "rt")
    {
        $j("#DomeDepdate0").val(startDate); 
        $j("#DomeRetdate").val("OPEN"); 
    }
    else
    {
        $j("#DomeDepdate0").val(startDate); 
        $j("#DomeRetdate").val(endDate); 
    }
    
    $j("#returnUnfix").removeAttr("disabled");
}

function ReturnUnfixCheckedCancelCallback()
{
    $j("#returnUnfix").removeAttr("disabled");
}

function changeForeDep_text(objValue, type)
{
    if(type == "1")
    {
        $j("#ForeArr_text").val(objValue);
    }else{
        $j("#ForeDep_text").val(objValue);
    }
}

function change_DomeDep0(value)
{
    if(value != "")
    {
        if(s_Trip == "MD")
            $j("#DomeSel_arr1").val(value);
        else
            $j("#DomeSel_arr0").val(value);
    }
}

/*항공 해외선---------------------------------------------*/
/*항공 국내선---------------------------------------------*/

//실시간 항공권 조회(원스탑)
var arrCityID = new Array();
var arrCityNM = new Array();
var arrDepCityList = new Array();

function SetDomeAirlineTripType(trip)
{
    if(trip=="OW")
    {
        $j("#divDomeAirlineReturn").hide();
        $j("#hidTrip").val("OW");
    }
    else
    {
        
        $j("#divDomeAirlineReturn").show();
        $j("#hidTrip").val("RT");
    }
}

function InitSearchAirDomestic()
{
    GetDepatureCityTableLeft();
}

//도시 리스트
function GetDepatureCityTableLeft()
{
    //tourService.GetDepatureCityXml(OnWSRequestComplete);
    var url = 'http://tour.interpark.com/Exporter/ws/tourService.asmx/GetDepatureCityXml';		
    var params = "";
    
    var cbfn = function(request) {
        var result = request.responseXML;
        if (result != null) {
            OnWSRequestCompleteLeft(result);
        }
    }
    RequestAjax(url, params, cbfn);
}

function First_ChangeLeft(element)
{
    //출발편
    if(element == "T")  {
        //출발지에 따라 도착지 세팅
        setDepCityLeft("depListT", "retListT");
    }
    else    {
        //도착편 출발지에 따라 도착지 세팅
        setDepCityLeft("depListO", "retListO");
    }
}

//원스탑 조회 : 도시 바인딩
function OnWSRequestCompleteLeft(result)
{
    try
    {
        var items = result.getElementsByTagName("item");
        for (var i=0; i<items.length; i++) 
        {
	        arrCityID[i] = items[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
	        arrCityNM[i] = items[i].getElementsByTagName("label")[0].childNodes[0].nodeValue;
	        arrDepCityList[i] = items[i].getElementsByTagName("depCity")[0].childNodes[0].nodeValue;
        }
    	
//        var depListT = document.getElementById('<%= depListT.ClientID %>');
//        var depListO = document.getElementById('<%= depListO.ClientID %>');
        var depListT = document.getElementById('depListT');
        var depListO = document.getElementById('depListO');
        //출발편
        if (depListT)
        {
            ddl_clear('depListT');
            
            for (var i=0; i<arrCityID.length; i++)
            { 
                ddl_add('depListT', arrCityNM[i], arrCityID[i]);
            }
        }
        //도착편
        if (depListO)
        {
            ddl_clear('depListO');
            
//            ddl_add('depListO', "출발도시", "");
            for (var i=0; i<arrCityID.length; i++)
            { 
                ddl_add('depListO', arrCityNM[i], arrCityID[i]);
            }
        }        

        setDepCityLeft("depListT", "retListT");
        document.getElementById('retListT').selectedIndex = 0;
        document.getElementById('depListO').selectedIndex = 4;
        setDepCityLeft("depListO", "retListO");
        document.getElementById("retListO").selectedIndex = 1;
    }
    catch(e) {}
}

function setDepCityLeft(FromCityId, objectId)
{
    var selIndex = document.getElementById(FromCityId).selectedIndex;
    var retListO = $(objectId);
    ddl_clear(objectId);    
    
    var arrDepCity = arrDepCityList[selIndex].split("/");
    
//    if(objectId == "retListT")
//    {
//        ddl_add(objectId, "도착도시", arrCityID[k]);
//        document.getElementById(objectId).selectedIndex = 1;
//    }
    
    for (var j=0; j<arrDepCity.length; j++)
	{
	    for (var k=0; k<arrCityID.length; k++)
	    {
	        if (arrDepCity[j] == arrCityID[k])
                ddl_add(objectId, arrCityNM[k], arrCityID[k]);
        }
	}   
}

//원스탑 검색 조건 설정
function MakeDomAirSearchString()
{
    var paramString = "";
    
    paramString += setParameter("trip",     getTrip());                                                     //구간
//    paramString += setParameter("dep",      document.getElementById('<%= depListT.ClientID%>').value);      //출발편 출발도시
//    paramString += setParameter("arr",      document.getElementById('<%= retListT.ClientID%>').value);      //출발편 도착도시
//    paramString += setParameter("dep2",      document.getElementById('<%= depListO.ClientID%>').value);     //도착편 출발도시
//    paramString += setParameter("arr2",      document.getElementById('<%= retListO.ClientID%>').value);     //도착편 도착도시
    paramString += setParameter("dep",      document.getElementById('depListT').value);      //출발편 출발도시
    paramString += setParameter("arr",      document.getElementById('retListT').value);      //출발편 도착도시
    paramString += setParameter("dep2",      document.getElementById('depListO').value);     //도착편 출발도시
    paramString += setParameter("arr2",      document.getElementById('retListO').value);     //도착편 도착도시
    paramString += setParameter("depdate",  $('depdate').value);                    //가는날
    paramString += setParameter("retdate",  $('retdate').value);                    //오는날
    paramString += setParameter("adt",      $('selAdt').value);                     //성인 좌석수
    paramString += setParameter("chd",      $('selChd').value);                     //소아 좌석수
    paramString += setParameter("inf",      $('selIinf').value);                    //유아 좌석수
//    paramString += setParameter("apm",      $('selApm').value);                   //오전/오후
//    paramString += setParameter("ira",      $('selIra').value);                   //예약가능/대기예약
    paramString += setParameter("apm",      "");                                    //오전/오후
    paramString += setParameter("ira",      "");                                    //예약가능/대기예약
    paramString += setParameter("fck",      getAirLineCheck());                     //항공사 선택
    
    paramString += setParameter("mbn",      "tour_main");
    paramString += setParameter("mln",      "search_domair0");
    
    return paramString;
}

function getAirLineCheck()  {

    return $j("#hddAirLines").val();
}

function checkAirLine(strName, mode)
{
    var strVal = $j("#hddAirLines").val();
    
    if(mode == "remove")
    {   
        $j("#on"+strName).hide().children("img:first").removeClass("on");
        $j("#off"+strName).show().children("img:first").addClass("on");
        
        strVal = strVal.replace(strName+"|", "");
    }
    else{        

        $j("#on"+strName).show().children("img:first").addClass("on");
        $j("#off"+strName).hide().children("img:first").removeClass("on");
        
        strVal += strName + "|";
    }
    
    $j("#hddAirLines").val(strVal);
}

//실시간 항공권 검색 -> 원스탑
function goDomeAirSearch()
{
	var adtCnt = Number($('selAdt').value);
	var chdCnt = Number($('selChd').value);
	var infCnt = Number($('selIinf').value);
	
    var startDT = $('depdate').value;
	if(startDT.split(" ").join("") == "")
	{
		alert("가는날을 선택하세요.");
		return;
	}
	
	var endDT = $('retdate').value;
	if(endDT.split(" ").join("") == "" && getTrip() == "RT")
	{
		alert("오는날을 선택하세요.");
		return;
	}
	
	//checkToDate();
	
//	var retListT = document.getElementById('<%=retListT.ClientID %>').value;    //출발편 도착지
//	var depListT = document.getElementById('<%=depListT.ClientID %>').value;    //출발편 출발지
//	var retListO = document.getElementById('<%=retListO.ClientID %>').value;    //도착편 도착지
//	var depListO = document.getElementById('<%=depListO.ClientID %>').value;    //도착편 출발지
    var retListT = document.getElementById('retListT').value;    //출발편 도착지
	var depListT = document.getElementById('depListT').value;    //출발편 출발지
	var retListO = document.getElementById('retListO').value;    //도착편 도착지
	var depListO = document.getElementById('depListO').value;    //도착편 출발지
	
	if(getTrip() == "RT" && depListT == depListO)
	{
	    alert("출발편과 도착편의 출발지가 동일합니다. \r\n여정을 다시 한번 확인하시기 바랍니다.");
	    return;
	}
	else if(retListT == depListT || retListO == depListO)
	{
	    alert("출발지와 도착지가 동일합니다. \r\n여정을 다시 한번 확인하시기 바랍니다.");
	    return;
	}
	
	if (adtCnt < infCnt)
	{
	    alert("유아는 따로 좌석이 배정되지 않으므로 성인보다 많이 탑승할 수 없습니다.");
		return;
	}
	
	if((adtCnt + chdCnt + infCnt) > 9)
	{
	    alert("예약 인원은 9명을 넘길 수 없습니다. \r\n1:1 상담문의로 남겨주세요.");
	    return;
	}
	
	if(getAirLineCheck() == "")
	{
	    alert("선택하신 항공편이 없습니다. \r\n항공편을 선택해 주세요.");
	    return;
	}
		
    var paramString = MakeDomAirSearchString();
   
    // window.open('http://air.interpark.com/flex/DOM.html?' + paramString, 'temp', 'resizable=yes, scrollbars=no, status=no, width=1000, height=700');
    
    ShowDomAirReserveWithParam(paramString);
}

//구간 선택
function getTrip()
{
    return $("hidTrip").value;
}

function setParameter(paramName, paramValue, isLast)
{
    isLast == null ? isLast = false : isLast;
//    var retStr = paramName + "=" + paramValue.toString();
    var retStr = paramName + "=" + paramValue;
    return isLast == true ? retStr : retStr + "&";
};

//모든 레이어 닫기
function doAllLayerClose()
{
    //항공호텔 레이어 닫기    
    AirCitySearchClose();
    
    //호텔 레이어 닫기
    HotelPopClose();
    
    
    //달력닫기
    if($j("#divCalendarLayer").length)
        $j("#divCalendarLayer").hide();
}

function AirSearchCityList() 
{
    var keyword = $j("#AirCitySearchNM").val();
    var regTrim = /^\s+|\s+$/g;

    if(/\S/.test(keyword.replace(regTrim, "")) == false){
        alert('검색어를 입력해 주세요.');
        //$("keyWord").focus();
        return;
    } else if(keyword == "도시명입력"){
        alert('검색어를 입력해 주세요.');
        //$("keyWord").focus();
        return;
    }else{
        if(SpecialCharStrCheck(keyword) == false) {
            alert("검색어에 특수문자가 포함되어 있습니다. \n다시 입력해 주세요.");
            //$("keyWord").focus();
            return;
        } else {
            GetAirCitySearchList(keyword, $("loc").value);
        }
    }
}

function GetAirCitySearchList(p_keyword, p_loc)
{
    $j("#AirSearchCityResult").empty();
    if (p_keyword != "")
    {
        $("AirCitySearchNM").value = p_keyword;
    }
    $("loc").value = p_loc;
    
    var strCitySearch = virtualGET('/Airtel/ajax/AirCitySearchList.aspx?type=XML&loc='+ p_loc +'&keyWord=' + escape(p_keyword));
    $j("#AirSearchCityResult").empty().html(strCitySearch);
    $("tblSearchCity").style.display = "";
}
/*항공 국내선---------------------------------------------*/