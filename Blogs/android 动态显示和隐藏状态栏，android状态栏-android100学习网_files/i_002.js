/*
+---------------------------------------------------------------------------+
| ZYIIS.COM                                                                 |
| ==========                                                                |
|                                                                           |
| Copyright (c) 2005-2010 Zyiis Limited                                     |
| For contact details, see: http://www.zyiis.com/                           |
|                                                                           |
+---------------------------------------------------------------------------+
*/
(function(){
	function s(b){
		return b!=null?'"'+b+'"':'""'
	}
	function e(b){
		if(typeof encodeURIComponent=="function"){
			return encodeURIComponent(b)
		}else{
			return encodeURI(b)
		}
	}
	function G(n,v){
		if(v){
			window.u_a_url+="&"+n+"="+v
		}
	}
	function D(w,t,d){

		var s=w.screen,j='0';tz=-t.getTimezoneOffset();
		if(navigator.javaEnabled()) j='1';
		if(s){
			G("z_sh",s.height);
			G("z_sw",s.width);
			G("z_scd",s.colorDepth);
		}

		G("u_a_type",w.u_a_type);
		G("z_c_url",w.union_code_url);
		G("z_uref",w.union_ref_url);
		G("z_urefk",w.union_ref_k);
		G("z_utz",tz/60);
		G("z_uhis",history.length);
		G("z_ujava",j);
		G("z_ufv",F());
		if(navigator.plugins){
			G("z_unplug",navigator.plugins.length)
		}
		if(navigator.mimeTypes){
			G("z_unmime",navigator.mimeTypes.length)
		}
	}
	function B(w,d){
		return w.top.location==d.location
	}
	function Q1(s){
		if(!s) return '';
		str=s.split("?");
		return str[0]
	}
	function S(w,a,sr){
		if(w.u_a_type=="1"){
			a.write('<script language="JavaScript1.1" src='+s(sr)+" charset=gbk><\/script>")
		}else{
			a.write('<iframe name="u_a_iframe" width='+s(w.u_a_width)+" height="+s(w.u_a_height)+" frameborder=0 src="+s(sr)+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>');
		}
	}
	function A(){
		var w=window,d=document,t=new Date;
		var host = window.location.host;
		if(!B(w,d)){
			try{
				topr=top.location.host;
			}catch(err){
				topr=document.referrer;
				var re = /[http|https]:\/\/([^\/]+)\//i;
				var h = topr.match(re);
				var host = h[1];
			}
		}
		
		w.u_a_url="http://code.admin6.com/show.php?";
		w.u_a_url+="z_uid="+w.u_a_client;
		w.u_a_url+="&zoneid="+w.u_a_zones;
		w.u_a_url+="&z_h_url="+host;
		if(w.union_num_ads_zone){
			w.union_num_ads_zone=w.union_num_ads_zone+1
		}
		else{
			w.union_num_ads_zone=1
		}
		if(w.union_num_ads_zone>10){
			return
		}
		if(B(w,d)&&d.body){

			var j=d.body.scrollHeight,v=d.body.clientHeight;
			if(v&&j){
				G("z_uc_ks",Math.round(j))
			}
		}
		D(w,t,d);
		S(w,d,w.u_a_url);
	}

	function C(w,d){
		return true
	}
	function E(){
		var w=window,d=document,e=null;g=d.referrer;
		if(w.union_code_url==e){
			w.union_code_url=escape(Q1(w.location.href));
			if(!B(w,d)){
				w.union_code_url=escape(Q1(g));
			}
		}
		w.union_ref_url = ''; 
		if(B(w,d)&&g){
			w.union_ref_url=escape(g);
			//w.union_ref_k=K(g);
		}else {
			try{
				var tg = window.parent.document.referrer;
				if(tg) w.union_ref_url=escape(tg);
			}catch(err){}
		}
	}
	var Z={};
	function ya(b)
	{
		if(b in Z)return Z[b];
		return Z[b]=navigator.userAgent.toLowerCase().indexOf(b)!=-1
	}
	function F(){
		if(navigator.plugins&&navigator.mimeTypes.length)
		{
			var b=navigator.plugins["Shockwave Flash"];
			if(b&&b.description)return b.description.replace(/([a-zA-Z]|\s)+/,
			"").replace(/(\s)+r/,".")
		}else if(ya("msie")&&!window.opera)
		{
			var c=null;
			try
			{
				c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
			}catch(e)
			{
				var a=0;
				try
				{
					c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
					a=6;
					c.AllowScriptAccess="always"
				}catch(e)
				{
					if(a==6)return a.toString ()
				}try
				{
					c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
				}catch(e)
				{

				}
			}if(c!=
			null)
			{
				var a=c.GetVariable("$version").split(" ")[1];
				return a.replace(/,/g,".")
			}
		}return "0"
	}
	function K(r){
		var s=["wd","p","q","keyword","kw","w","key","word","query","q1","name"];
		if(r!=""&&r!=null){
			for(var i=0;i<s.length;i++){
				var re=new RegExp("[^1-9a-zA-Z]"+s[i]+"=\([^&]*\)");
				var kk=r.match(re);
				if(kk!=null){
					return kk[1];
				}
			}
		}return "";
	}
	E();
	A();
})();