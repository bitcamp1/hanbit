function AddWindowEvent(fn) {
    if (window.addEventListener) {
        window.addEventListener("load", fn, false)
    } else {
        window.attachEvent("onload", fn)
    }
}

function hDateOnLoad () {
    if (typeof hDateStartDate === "string" && hDateStartDate != ""
        && typeof hDateEndDate === "string" && hDateEndDate != ""
        && typeof hDateKeyword === "string") {
        AdsWrite(hDateStartDate, hDateEndDate, hDateKeyword);
    }

    else if (typeof setHDateStartDate === "string" && setHDateStartDate != ""
            && typeof setHDateEndDate === "string" && setHDateEndDate != ""
            && typeof setHDateKeyword === "string") {
        AdsGet(setHDateStartDate, setHDateEndDate, setHDateKeyword);
    }
};


function AdsWrite(adsStartDate, adsEndDate, adsKeyword) {
    var dt = new Date();
    AdsGetJsonScript("http://dhis01.interpark.com/?q=" + encodeURIComponent(adsStartDate.replace(/-/gi, '') + "|" + adsEndDate.replace(/-/gi, '') + "|" + adsKeyword), "");
}

var tAdsStartDateElement;
var tAdsEndDateElement;
var tAdsKeywordElement = null;

function AdsGet(adsStartDateElement, adsEndDateElement, adsKeywordElement) {

    if (typeof adsStartDateElement === "string") tAdsStartDateElement = document.getElementById(adsStartDateElement);
    if (typeof adsEndDateElement === "string") tAdsEndDateElement = document.getElementById(adsEndDateElement);
    if (typeof adsKeywordElement === "string") tAdsKeywordElement = document.getElementById(adsKeywordElement);

    if (typeof adsStartDateElement === "object") tAdsStartDateElement = adsStartDateElement;
    if (typeof adsEndDateElement === "object") tAdsEndDateElement = adsEndDateElement;
    if (typeof adsKeywordElement === "object") tAdsKeywordElement = adsKeywordElement;

    AdsGetJsonScript("http://dhis01.interpark.com/", "AdsGetCallback");
}

function AdsGetCallback(result) {
    var itemValue = decodeURIComponent(result.hDateList.Item5);
    if (itemValue != "" && itemValue.split("|").length == 3) {
        tAdsStartDateElement.value = itemValue.split("|")[0];
        tAdsEndDateElement.value = itemValue.split("|")[1];
        if (tAdsKeywordElement != null) tAdsKeywordElement.value = itemValue.split("|")[2];

        if (typeof AdsGetComplete === "function") {
            AdsGetComplete();
        }
    }
}

function AdsGetSub(adsStartDateElement, adsEndDateElement, adsKeywordElement) {

    if (typeof adsStartDateElement === "string") tAdsStartDateElement = document.getElementById(adsStartDateElement);
    if (typeof adsEndDateElement === "string") tAdsEndDateElement = document.getElementById(adsEndDateElement);
    if (typeof adsKeywordElement === "string") tAdsKeywordElement = document.getElementById(adsKeywordElement);

    if (typeof adsStartDateElement === "object") tAdsStartDateElement = adsStartDateElement;
    if (typeof adsEndDateElement === "object") tAdsEndDateElement = adsEndDateElement;
    if (typeof adsKeywordElement === "object") tAdsKeywordElement = adsKeywordElement;

    AdsGetJsonScript("http://dhis01.interpark.com/", "AdsGetSubCallback");
}

function AdsGetSubCallback(result) {
    var itemValue = decodeURIComponent(result.hDateList.Item5);
    if (itemValue != "" && itemValue.split("|").length == 3) {
        tAdsStartDateElement.value = itemValue.split("|")[0];
        tAdsEndDateElement.value = itemValue.split("|")[1];
        if (tAdsKeywordElement != null) tAdsKeywordElement.value = itemValue.split("|")[2];

        if (typeof AdsGetSubComplete === "function") {
            AdsGetSubComplete();
        }
    }

}

function AdsGetJsonScript(url, callback) {
    var scriptElement = document.createElement("script");
    var scriptCallback = url;
    if(callback != "") {
        scriptCallback += (url.indexOf("?") > -1 ? "&c=" + callback : "?c=" + callback);
    }
    scriptElement.src = scriptCallback;
    document.getElementsByTagName("head")[0].appendChild(scriptElement);
}

AddWindowEvent(hDateOnLoad);