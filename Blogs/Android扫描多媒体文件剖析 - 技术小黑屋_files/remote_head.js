//baidu analytics init
/*var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "//hm.baidu.com/hm.js?55c324aea866ab55d0c81181268f2052";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
})();*/

//Google Analytics init
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://7jpncc.com1.z0.glb.clouddn.com/analytics.js','ga');

ga('create',  'UA-72839443-1', 'auto');
ga('send', 'pageview');


//bind a click
$(document).bind('DOMNodeInserted', function(event) {
	$('a[href^="http"]').each(
		function(){
			if (!$(this).attr('target')) {
				$(this).attr('target', '_blank')
			} 
			if ($(this).attr('href').indexOf("droidyue.com") != -1) {
				$(this).attr('target', '_self')
			}
		}
	);
});

//baidu share
/*if (isDesktop()) { 
	window._bd_share_config={
		"common":{
			"bdSnsKey":{},
			"bdMini":"2",
			"bdMiniList":["mshare","fbook","tsina","twi","weixin","linkedin","qzone","youdao","bdysc","tieba","douban","sqq","mail","copy","print"],
			"bdPic":"",
			"bdStyle":"0",
			"bdSize":"16"
		},"slide":{
			"type":"slide",
			"bdImg":"6",
			"bdPos":"right","bdTop":"250"
		},"selectShare":{
			"bdContainerClass":null,
			"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]
		}};
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
}*/