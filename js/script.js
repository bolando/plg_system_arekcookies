function getCookie(name){
		var wynik = null;
		var co = " " + document.cookie + ";";
		var search_name = " " + name + "=";
		
		var startstr = co.indexOf(search_name);
		var endstr;
		if( startstr != -1) 
		{
			startstr += search_name.length;
			endstr = co.indexOf(";", startstr);
			wynik = unescape(co.substring(startstr,endstr));
		}
		return wynik;
	};
	
	
	getCookie("Cookieinfo1");	
	
	var data_plus = 1000 * 60 * 60 * 24;
	var data = new Date();
	data.setTime(data.getTime() + data_plus);
	
	jQuery(document).ready(function(){			
		var wartosc_cookie = getCookie("Cookieinfo"); //alert(wartosc_cookie);
		if (wartosc_cookie != 1){
			jQuery("body").append("<div id=\"cookie_info\">Ta strona używa ciasteczek (cookies), dzięki którym nasza strona działa lepiej. <div id=\"end_cookie_info\">Rozumiem</div></div>");
			jQuery("#info_cookie").append("asdl");
			
			jQuery("#end_cookie_info").click(function(){
				jQuery("#cookie_info").hide("slow");
				document.cookie= "Cookieinfo=1; expires="+ data.toGMTString();
			});
		}	
	});