/**
 * 
 */
var init = {
	MOUSE_DOWN : false,
	MOUSE_IN : true,
	MOUSE_X : 0,
	MOUSE_Y : 0,
	SCROLL_X : 0,
	SCROLL_Y : 0,
	KEY_PRESS : '',
	ZINDEX : 1000,
	CHAIN_CALLS : [],
	INTERVAL : 30,
	UNDEF : 'undefined',
	HID : 'hidden',
	NaviCheck :
		function (browser){
			return navigator.userAgent.indexOf(browser)!=-1;
		},
	browserCheck :
		function (){
			if (document.all)        BROWSER = 'IE'
			   else if (window.opera)        BROWSER = 'Opera'
			   else if (NavCheck('Chrome'))  BROWSER = 'Chrome' 
			   else if (NavCheck('iPod'))    BROWSER = 'iPod'
			   else if (NavCheck('iPhone'))  BROWSER = 'iPhone'
			   else if (NavCheck('iPad'))    BROWSER = 'iPad'
			   else if (NavCheck('Android')) BROWSER = 'Android'
			   else if (NavCheck('Safari'))  BROWSER = 'Safari'
			   else if (NavCheck('Gecko'))   BROWSER = 'Firefox'
			   else                          BROWSER = 'UNKNOWN'
		
		
		},
		confirm : 
			function(){
				browserCheck();
				alert(BROWSER);
		}
}