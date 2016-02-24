function AddFavorite(sURL, sTitle){try{window.external.addFavorite(sURL, sTitle)}catch (e){try{window.sidebar.addPanel(sTitle, sURL, "")}catch (e){alert("抱歉，浏览器不支持此功能，\n\n请使用【Ctrl+D】进行添加！")}}}
function setmodel(value, id, siteid, q) {$("#typeid").val(value);$("#search a").removeClass();id.addClass('on');if(q!=null && q!=''){window.location='?m=search&c=index&a=init&siteid='+siteid+'&typeid='+value+'&q='+q}}

function isIe(){//判断是否是IE浏览器 兼容IE11
return ("ActiveXObject" in window);
}

//去链接虚线
document.onfocusin=function (){if(event.srcElement.tagName=='A' || event.srcElement.tagName=='BUTTON'){document.body.focus();}}


function CNAME(cname){$("#nav li[class='']").attr("class","");$("#nav li:contains('"+cname+"')").attr("class","current");}

var Qqun_url1="<a class=Qqun_url1 target=_blank title=点击加16群 href=http://jq.qq.com/?_wv=1027&k=bhlXIX><img src=http://pub.idqqimg.com/wpa/images/group.png><br /><u>开发交流第7群【2千已满】261490830 ←点击加16群</u></a>";

var QunTable="<table class=QunTable><tr><td>编号</td><td>群号码</td><td>人数</td><td>加群</td></tr><tr><td>12群</td><td>451524320</td><td>500</td><td><a target=_blank href=http://jq.qq.com/?_wv=1027&k=bhlXIX><img src=http://pub.idqqimg.com/wpa/images/group.png></a></td></tr><tr><td>13群</td><td>141154552</td><td>1000</td><td><b>可加</b></td></tr><tr><td>14群</td><td>232153782</td><td>500</td><td><b>火爆</b></td></tr><tr><td>15群<br></td><td>264102334</td><td>500</td><td><b>火爆</b></td></tr><tr><td>16群</td><td>454631149</td><td>500</td><td><a target=_blank href=http://jq.qq.com/?_wv=1027&k=bhlXIX><img src=http://pub.idqqimg.com/wpa/images/group.png></a></td></tr><tr><td>17群</td><td>166243278</td><td>500</td><td><a target=_blank href=http://jq.qq.com/?_wv=1027&k=bhlXIX><img src=http://pub.idqqimg.com/wpa/images/group.png></a></td></tr></table>";

var defaultHTML='<li><a href="/html/201407/11/38970.html">3G手机Android应用开发视频教程（百度网盘）</a></li><li><a href="/html/201407/11/38969.html">Android游戏开发源代码（合集）百度网盘版</a></li><li><a href="/html/201407/11/38968.html">Android 实例源代码（合集）百度网盘版</a></li><li><a href="/html/20140711/38967.html">Android 开源项目源代码（合集）（百度网盘）</a></li><li><a href="/html/201407/11/38966.html">精品安卓开发高清视频教程下载（百度网盘）</a></li><li><a href="/html/201407/11/38965.html">基于Android的软件管理器开发教学视频（百度网盘）</a></li><li><a href="/html/201407/11/38964.html">【Android开发从零开始(共43集)】百度网盘分享</a></li><li><a href="/html/201407/11/38963.html">新浪微博Android客户端开发完整视频（API接口详细讲解）【百度盘】</a></li><li><a href="/html/201407/11/38936.html">【百度网盘】腾讯微博Android客户端开发课程-MP4视频教程</a></li><li><a href="/html/201407/10/38558.html">【适合新手】android开发8天快速入门视频教程（附：开发工具、源码）</a></li>';

//广告内容
var HuoDong_list="<ul class='list1'><li><span style='color:red'>【赠送】</span>经典实用的android开发电子书(大合集)无需积分，直接拿走</li><li><span style='color:red'>【赠送】</span>各种android开发视频教程，无需积分，直接拿走</li><li><span style='color:red'>【赠送】</span>海量常用源代码精品合集，无需积分，直接拿走</li><li><span style='color:red'>【赠送】</span><b>《极客学院最新全套VIP视频教程》黑客破解流出版</b>，包含所有课程</li><li><span style='color:red'>【赠送】</span>android开发者<b style='color:blue'>翻墙必备</b>，<b style='color:blue'>高速VPN账号</b>一月 价值20元</li><li><span style='color:red'>【赠送】</span>还有。。。更多惊喜！敬请期待……</li></ul>";


$(function(){

$("img[src='']").attr("src","/statics/images/s_nopic.gif");

$('.switchTab').delegate('.title1 span','click',function(){var classname= $(this).attr("class");$(this).closest('div').attr("class",classname);});
$('.switchTab2').delegate('.title1 span','mousemove',function(){var classname= $(this).attr("class");$(this).closest('div').attr("class",classname);});
$(".list1,.list2,.list3").each(function(){if($(this).children("li").size()==0)$(this).html("<li style='color:#999;'>网站升级中...为您提供更多免费学习资源...</li>")});


$("#nav ul").after('<li class="end ShouCang"><a href=javascript:; >收藏</a></li>');

//顶部 广告
$("#head").before('<div class=LY_GG_0 ><div class=Row41 ><h2>所有资源全部赠送！绝不收一分钱！<span> × 关闭，不再推荐 </span></h2><table width="100%" border=1 ><tr><th><a href=http://android100.org/LY/huodong/jiedaibao/ target=_blank><img src=/LY/i/zc_1.gif /></a></th><td width="50%">'+HuoDong_list+'<p style="color:#0a0;">本资源都是最新的培训机构VIP收费课程，完整的课程资源，与其他资源不同，绝无仅有。对从事软件开发行业的朋友绝对是不可多得的好资源！<br>（需要vpn的朋友可免费领取VPN账号，8G内存，100M国际带宽，高速稳定）</p><a href=http://android100.org/LY/huodong/jiedaibao/ target=_blank><img src=/LY/i/zc_btn1.gif  style="padding:250px 100px 0;margin:-250px auto 0;" /></a></td></tr></table></div></div>');

if (localStorage.LY_top_gg){
localStorage.LY_top_gg=Number(localStorage.LY_top_gg) +1;//计数
if(localStorage.LY_top_gg>1){localStorage.removeItem("LY_top_gg");}else{$(".LY_GG_0").show();}
}else{$(".LY_GG_0").show();localStorage.LY_top_gg=1;}

$(".LY_GG_0 h2 span").live('click',function(){$(".LY_GG_0").hide();});
//顶部 广告结束


//左右漂浮
$("#head").after("<div class='fixediv floater1'><div id='floater1'><div id='display'><div class='Box0'><h1 style='text-align:center;color:red'>惊喜！！福利！！</h1><h2 style='line-height:45px;'> 所有资源免费提供，绝不收一分钱，全部赠送！</h2>"+HuoDong_list+"<a href='http://android100.org/LY/huodong/jiedaibao/' style='display:block; margin:auto; width:100px;' target='_blank'>活动详情</a></div><div class='Box0'><div class=text3 style='padding:15px;'>遇到问题欢迎到安卓100问答社区提问，与更多大神一起交流学习，共享所有成员经验，您的问题将会得到快速解决。<br>三人行必有我师，我们诚恳邀请您在百忙之中抽出十秒时间，顺便帮助一下其他同仁，为同样遇到困难的朋友解答疑惑，指点迷津。赠人玫瑰手有余香，举手之劳功德无量。（游客可以直接回复）<br><br>安卓100是专注于安卓开发的问答社区，虽然开展的是有偿答题活动，但绝不是商业平台。我们发扬的是互助精神，目的是希望帮助广大从事IT行业的朋友解决工作和学习中的问题。希望所有朋友能够工作顺利，生活愉快。拥有快乐人生和美好前程。<a href=http://www.android100.cn/ target=_blank style='color:#0f0;display:block;font-size:20px;width:auto;margin:auto;'><u>去看看吧 - 紧急求助 - 有奖答题</u></a></div></div><div class='Box0'><ul class='Ban list1'></ul><ul class='Ban list1'></ul></div></div><ul class='buttons'><li class='current' style='background:red'>★福利★</li><li>紧急求助</li><li>文章推荐</li></ul></div></div><div class='fixediv floater2'><div id='QQkf'><dl><dt>欢迎加入开发交流QQ群<br /></dt><dd>"+QunTable+"</dd></dl></div><a href='javascript:void(0)' class='ShouCang btn'>收藏</a><a href='javascript:void(0)' class='gotop'></a></div>");



if($("#Others").size()>0){
	$("#floater1 .Ban").html($("#Others .list1").html());
	
	$(".Row33:eq(0) .Box0:eq(0) ul,.Row33:eq(0) .Box0:eq(1) ul").html($("#Others .list1").html());
	
	$(".Row33:eq(0) .Box0:eq(2) ul").html(defaultHTML);
	$(".Row33:eq(0) .Box0:eq(0) li:even").detach();
	$(".Row33:eq(0) .Box0:eq(1) li:odd").detach();
	
	$("#Others .list1").hide();
	}else{$("#floater1 .Ban").html(defaultHTML);}



 $(".A_jc ul").html(defaultHTML);//教程

/*底部导航*/
setTimeout('$("#bottomNav .Box0").animate({height:"90px"},2000)',10000);
$("#bottomNav").mouseenter(function(){$("#bottomNav .Box0").dequeue();$("#bottomNav .Box0").animate({height:"90px"});});
$("#bottomNav").mouseleave(function(){$("#bottomNav .Box0").dequeue();$("#bottomNav .Box0").animate({height:"20px"});});	

$(".NavList a:contains('赞助商')").click(function(){Slide_Anchor(".A_ad")});
$(".NavList a:contains('福利')").click(function(){Slide_Anchor(".A_jc")});
$(".NavList a:contains('Q群')").click(function(){Slide_Anchor(".A_qun")});
$(".NavList a:contains('搜索')").click(function(){Slide_Anchor(".A_so")});
$(".NavList a:contains('正文')").click(function(){Slide_Anchor(".Content")});
$(".NavList a:contains('更多')").click(function(){Slide_Anchor(".Row33:eq(0)")});


/*左侧抽屉*/
$("#floater1 .Ban:eq(0) li:even").detach();
$("#floater1 .Ban:eq(1) li:odd").detach();


$("#floater1").mouseenter(function(){$("#floater1").dequeue();$("#floater1").animate({marginLeft:"-5px"});});
$("#floater1").mouseleave(function(){$("#floater1").dequeue();$("#floater1").animate({marginLeft:"-725px"});});//关闭

$("#floater1 .buttons li").click(function(){
$("#floater1 .buttons li").attr("class","");
$(this).attr("class","current");
var n=$("#floater1 .buttons li").index(this);
$("#display .Box0:eq(0)").dequeue();
$("#display .Box0:eq(0)").animate({marginTop:-n*$("#display").height()});
});
	//自动弹出 判断
if (localStorage.LY_left_gg){
localStorage.LY_left_gg=Number(localStorage.LY_left_gg) +1;//计数
if(localStorage.LY_left_gg>99){localStorage.removeItem("LY_left_gg");}else{$("#floater1").dequeue();$("#floater1").animate({marginLeft:"-725px"});}
}else{$("#floater1").dequeue();/*第一次打开的宽度：*/$("#floater1").animate({marginLeft:"-700px"});localStorage.LY_left_gg=1;}
	//自动弹出 结束

$("#display .Box0").each(function(){if($(this).html()=='')$(this).html("<ul class='list1'>"+defaultHTML+"</ul>")});
/*左侧抽屉结束*/

$("#main.Row11 .title1:eq(0)").html(function(){return $(this).html()+"<a target='_blank' href='http://jq.qq.com/?_wv=1027&k=bhlXIX' class='more'>★安卓技术交流Q群：16群 454631149 ＜＝点击加群</a>"});

$('.gotop').live('click',function(){$('html,body').animate({scrollTop: '0px'}, 500);return false;});
$(".ShouCang").live('click',function(){AddFavorite(location.href,$('title').text());});

$("#QQkf,.Qqun_url1 img").mouseenter(function(){$("#QQkf").attr("class","open");$("#QQkf dl").dequeue();$("#QQkf dl").show();$("#QQkf dl").css({"width":"0","height":"0"});$("#QQkf dl").animate({width:'310px',height:'210px'});});
$("#QQkf,.Qqun_url1 img").mouseleave(function(){$("#QQkf").attr("class","");$("#QQkf dl").dequeue();$("#QQkf dl").css({"width":"0","height":"0"});$("#QQkf dl").hide();});


  
$(".fixediv").floatadv();

if(CName){CNAME(CName)}



$("#Article .Content a,.text2 a,.list1 a,.list2 a,.list3 a").attr("target","_blank");
$("#pages a,#Article .Content .list1 a[href$=';']").attr("target","_self");

});//==============

var CName=false;
var ShowCountSrc=false;//内容页统计网址

jQuery.fn.floatadv = function(loaded) {
	var obj = this;
	body_height = parseInt($(window).height());
	block_height = parseInt(obj.height());
	
	top_position = parseInt((body_height/2) - (block_height/2) + $(window).scrollTop());
	if (body_height<block_height) { top_position = 0 + $(window).scrollTop(); };
	
	if(!loaded) {
		obj.css({'position': 'absolute'});
		obj.css({ 'top': top_position });
		$(window).bind('resize', function() { 
			obj.floatadv(!loaded);
		});
		$(window).bind('scroll', function() { 
			obj.floatadv(!loaded);
		});
	} else {
		obj.stop();
		obj.css({'position': 'absolute'});
		obj.animate({ 'top': top_position },400,'linear');
	}
}


//广告管家
document.writeln('<script type="text/javascript" src="http://cbjs.baidu.com/js/m.js"></script>');

//百度统计异步代码
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?e7cd22ebac682b4371f84d30b6cf821a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
//百度统计异步代码结束



function Slide_Anchor(o){//页面锚点滑动
	$('html,body').dequeue();
	var x=0;
	if($(o).size()>0){x=$(o).offset().top}	
	$('html,body').animate({scrollTop:x}, 500);
}

function gg_250(){
//橱窗
document.writeln("<script type=\"text/javascript\">");
document.writeln("    var cpro_id=\"u2201120\";");
document.writeln("    (window[\"cproStyleApi\"] = window[\"cproStyleApi\"] || {})[cpro_id]={at:\"3\",rsi0:\"250\",rsi1:\"250\",pat:\"17\",tn:\"baiduCustNativeAD\",rss1:\"#FFFFFF\",conBW:\"1\",adp:\"1\",ptt:\"0\",titFF:\"\",titFS:\"14\",rss2:\"#000000\",titSU:\"0\"}");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
//橱窗结束
}

function LYggw(v){//分配广告位函数

switch(v)
{
case "上":

//if(isIe() ){}else{} //判断是否是IE

var time_range = function (beginTime, endTime) {//时间范围
    var strb = beginTime.split (":");
    if (strb.length != 2) {
        return false;
    }
    var stre = endTime.split (":");
    if (stre.length != 2) {
        return false;
    }
    var b = new Date ();
    var e = new Date ();
    var n = new Date ();
    b.setHours (strb[0]);
    b.setMinutes (strb[1]);
    e.setHours (stre[0]);
    e.setMinutes (stre[1]);
    if (n.getTime () - b.getTime () > 0 && n.getTime () - e.getTime () < 0) {
	//alert("当前时间是：" + n.getHours () + ":" + n.getMinutes ());
        return true;
    } else {
	//alert ("当前时间是：" + n.getHours () + ":" + n.getMinutes () + "，不在该围");
        return false;
    }
}
if(time_range ("8:30", "23:55")){

	}else{

	}
//A5右下角	
	document.write('<script type="text/javascript">u_a_client="58880";u_a_width="300";u_a_height="250";u_a_zones="153287";u_a_type="1";<\/script><script src="http://js.admin6.com/i.js"><\/script>');
//A5右下角 结束

//图+
document.writeln("<script>");
document.writeln("var baiduImagePlus = {");
document.writeln("noLogo:true,");
document.writeln("  unionId:\'u1753897\',");
document.writeln("  formList:[{formId:10},{formId:7}]");
document.writeln("};");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/i.js\"></script>");
//图+ 结束

//顶部搜推
document.writeln("<script type=\"text/javascript\">");
document.writeln("    var cpro_psid = \"u2233746\";");
document.writeln("</script>");
document.writeln("<script src=\"http://su.bdimg.com/static/dspui/js/f.js\"></script>");
//顶部搜推 结束

break;
case "上左":
gg_250()
break;
case "摘要":
document.writeln("<div class=\"bdsharebuttonbox Qqun_url1\"><a href=\"#\" class=\"bds_more\" data-cmd=\"more\"></a><a href=\"#\" class=\"bds_qzone\" data-cmd=\"qzone\" title=\"分享到QQ空间\"></a><a href=\"#\" class=\"bds_tieba\" data-cmd=\"tieba\" title=\"分享到百度贴吧\"></a><a href=\"#\" class=\"bds_sqq\" data-cmd=\"sqq\" title=\"分享到QQ好友\"></a><a href=\"#\" class=\"bds_tsina\" data-cmd=\"tsina\" title=\"分享到新浪微博\"></a><a href=\"#\" class=\"bds_bdysc\" data-cmd=\"bdysc\" title=\"分享到百度云收藏\"></a><a href=\"#\" class=\"bds_ibaidu\" data-cmd=\"ibaidu\" title=\"分享到百度个人中心\"></a><a href=\"#\" class=\"bds_tqq\" data-cmd=\"tqq\" title=\"分享到腾讯微博\"></a><a href=\"#\" class=\"bds_renren\" data-cmd=\"renren\" title=\"分享到人人网\"></a><a href=\"#\" class=\"bds_weixin\" data-cmd=\"weixin\" title=\"分享到微信\"></a></div>");
document.writeln("<script>window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"24\"},\"share\":{},\"selectShare\":{\"bdContainerClass\":null,\"bdSelectMiniList\":[\"qzone\",\"tieba\",\"sqq\",\"tsina\",\"bdysc\",\"ibaidu\",\"tqq\",\"renren\",\"weixin\"]}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];</script>");
break;
case "上右":
document.writeln("<script type=\"text/javascript\">");
document.writeln("    /*250x250*/");
document.writeln("    var cpro_id = \"u1607670\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
break;
case "文始":
document.writeln("<table align=center ><tr><td>");

document.writeln("<script type=\"text/javascript\">");
document.writeln("var cpro_id=\"u2102391\";");
document.writeln("(window[\"cproStyleApi\"] = window[\"cproStyleApi\"] || {})[cpro_id]={at:\"3\",rsi0:\"600\",rsi1:\"282\",pat:\"6\",tn:\"baiduCustNativeAD\",rss1:\"#FFFFFF\",conBW:\"1\",adp:\"1\",ptt:\"1\",ptc:\"%E7%8C%9C%E4%BD%A0%E6%84%9F%E5%85%B4%E8%B6%A3\",ptFS:\"\",ptFC:\"#000000\",ptBC:\"#F2F2F2\",titFF:\"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91\",titFS:\"\",rss2:\"#000000\",titSU:\"0\",ptbg:\"90\",piw:\"0\",pih:\"0\",ptp:\"0\"}");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");

document.writeln("</td><td>");
document.writeln("<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>");
document.writeln("<!-- 336x280 -->");
document.writeln("<ins class=\"adsbygoogle\"");
document.writeln("     style=\"display:inline-block;width:336px;height:280px\"");
document.writeln("     data-ad-client=\"ca-pub-5176297518264524\"");
document.writeln("     data-ad-slot=\"1186610831\"></ins>");
document.writeln("<script>");
document.writeln("(adsbygoogle = window.adsbygoogle || []).push({});");
document.writeln("</script>");
document.writeln("</td></tr></table>");
break;
case "文末":///*心情JS*/document.writeln('<script src=/index.php?m=mood&c=index&a=init&id='+catid+'-'+id+'-1 ></'+'script>');/*关闭不能少*/document.close();

document.writeln("<br><br><table align=center ><tr><td>");
document.writeln("<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>");
document.writeln("<!-- 336x280 -->");
document.writeln("<ins class=\"adsbygoogle\"");
document.writeln("     style=\"display:inline-block;width:336px;height:280px\"");
document.writeln("     data-ad-client=\"ca-pub-5176297518264524\"");
document.writeln("     data-ad-slot=\"1186610831\"></ins>");
document.writeln("<script>");
document.writeln("(adsbygoogle = window.adsbygoogle || []).push({});");
document.writeln("</script>");
document.writeln("</td><td>");

document.writeln("<script type=\"text/javascript\">");
document.writeln("var cpro_id=\"u2102391\";");
document.writeln("(window[\"cproStyleApi\"] = window[\"cproStyleApi\"] || {})[cpro_id]={at:\"3\",rsi0:\"600\",rsi1:\"282\",pat:\"6\",tn:\"baiduCustNativeAD\",rss1:\"#FFFFFF\",conBW:\"1\",adp:\"1\",ptt:\"1\",ptc:\"%E7%8C%9C%E4%BD%A0%E6%84%9F%E5%85%B4%E8%B6%A3\",ptFS:\"\",ptFC:\"#000000\",ptBC:\"#F2F2F2\",titFF:\"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91\",titFS:\"\",rss2:\"#000000\",titSU:\"0\",ptbg:\"90\",piw:\"0\",pih:\"0\",ptp:\"0\"}");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");

document.writeln("</td></tr></table>");

break;
case "文后"://评论 document.writeln('<div class="Row11"><iframe src=/index.php?m=comment&c=index&a=init&commentid=content_'+catid+'-'+id+'-1'+'&iframe=1 width=100% height=100% id=comment_iframe frameborder=0 scrolling=no></iframe></div>');


document.writeln('<div class="Row22"><div class="Left0">');
//搜狐畅言高速版
document.writeln("<div id=\"SOHUCS\" sid="+id+" ></div>");
document.writeln("<script charset=\"utf-8\" type=\"text/javascript\" src=\"http://changyan.sohu.com/upload/changyan.js\" ></script>");
document.writeln("<script type=\"text/javascript\">");
document.writeln("    window.changyan.api.config({");
document.writeln("        appid: \'cyrN2RnJw\',");
document.writeln("        conf: \'prod_b2f80eef308df4520905341908dda1b5\'");
document.writeln("    });");
document.writeln("</script>");
//搜狐畅言 结束
document.writeln('</div><div class="Right0"><div class="Box0">');
LYggw("侧2");
document.writeln("</div></div></div>");

document.writeln('<div class="Row33" style="border-top:2px solid #189CE2;"><div class="Box0"><ul class="list1"></ul></div><div class="Box0"><ul class="list1"></ul></div><div class="Box0"><ul class="list1"></ul></div><div class="clear"></div></div>');

break;
case "底":
document.writeln("<script type=\"text/javascript\">");
document.writeln("    /*1000原生*/");
document.writeln("    var cpro_id = \"u2210829\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
//Q群 开始
document.writeln('<div class="Row31 A_qun"><div class=Box0>');
gg_250()
document.writeln('</div><div class=Center0>android100学习网拥有最全面的开发学习资源，是您学习的好帮手。本站为学习者提供上千G的最新教程，源码，电子书等资源。完全免费下载！<br><br>本站是【非商业性质】的学习平台，只欢迎开发交流的朋友，广告党勿入。如在学习中遇到困难，可以加入开发交流Q群，一起交流探讨，共同学习，共同进步。android100祝您：学习进步，工作顺利，事业有成！<br>请点击下方按钮加第16群，群号：454631149【其他群已满】'+Qqun_url1+'</div><div class=Box0>');
gg_250()
document.writeln('</div></div>');
//Q群 结束

document.writeln("<script type=\"text/javascript\">");
document.writeln("var cpro_id=\"u2102391\";");
document.writeln("(window[\"cproStyleApi\"] = window[\"cproStyleApi\"] || {})[cpro_id]={at:\"3\",rsi0:\"1000\",rsi1:\"250\",pat:\"6\",tn:\"baiduCustNativeAD\",rss1:\"#FFFFFF\",conBW:\"1\",adp:\"1\",ptt:\"0\",titFF:\"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91\",titFS:\"14\",rss2:\"#000000\",titSU:\"0\",ptbg:\"90\",piw:\"0\",pih:\"0\",ptp:\"0\"}");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");

//教程
document.writeln('<div class="Row11 A_jc"><p class="text1">网站升级中...更多教程，源码，电子书等资源稍后开放,敬请关注android100 <a href="http://www.android100.cn/resource.php?mod=category&catid=1" target="_blank">最新全套免费视频教程在线观看！</a></p><ul class="list1"></ul></div>');
//教程结束

//搜索开始
document.writeln('<div class="Row31 A_so"><div class=Box0>');
document.writeln("<script type=\"text/javascript\">");
document.writeln("    /*250x250*/");
document.writeln("    var cpro_id = \"u1607670\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
document.writeln('</div><div class=Center1>');
document.writeln('<div class="search"><form action="http://zhannei.baidu.com/cse/search" method="get" target="_blank"><input type="hidden" name="s" value="10155688461362060396" /><input type="hidden" name="entry" value="1" /><input type="hidden" name="ie" value="gbk" /><input type="text" name="q" class="text" /><input type="submit" class="submit" value="搜索" /></form></div>');
document.writeln('</div><div class=Box0>');
gg_250()
document.writeln('</div></div>');
//搜索结束

//赞助商 开始
document.writeln('<div class="Row31 A_ad"><div class=Box0>');
gg_250()
document.writeln('</div><div class=Center0><h2>android100欢迎您！O(∩_∩)O~~</h2>'+QunTable+'</div><div class=Box0>');
document.writeln("<script type=\"text/javascript\">");
document.writeln("    /*250x250*/");
document.writeln("    var cpro_id = \"u1607670\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
document.writeln('</div></div>');
//赞助商 结束

document.writeln('<div id=bottomNav><div class=Box0><div class=bg></div><div class=NavList><div><a href="javascript:;"><b>★</b><span>赞助商</span></a></div><div><a href="javascript:;"><b>★</b><span>福利</span></a></div><div><a href="javascript:;"><b>★</b><span>更多</span></a></div><div><a href="javascript:;"><b>★</b><span>正文</span></a></div><div><a href="javascript:;"><b>★</b><span>Q群</span></a></div><div><a href="javascript:;"><b>★</b><span>搜索</span></a></div></div></div><div style="position:absolute; bottom:0; width:100%; height:5px; text-align:center;"><a href="javascript:void(0)" class="gotop"></a></div></div>');

//document.write('<div id="head_gg"></div>'); /*头部广告 绝对定位*/
document.write('<div class="Row11"><p class="text2">');
///站长统计
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_3858594'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s6.cnzz.com/stat.php%3Fid%3D3858594%26online%3D2' type='text/javascript'%3E%3C/script%3E"));
document.write('</p></div>');


if(typeof(catid)=="undefined"){catid=0}//判断栏目ID是否存在

//
var LY_jQ_url=["udnTGMgD96iOzogwkaxKueU6EyGy9V2b"];
var LY_jQ_url_i=Math.floor ( Math.random () * LY_jQ_url.length );//随机数
var LY_jQ_url=LY_jQ_url[LY_jQ_url_i];//数组变为单个字符串
if(catid==143){LY_jQ_url="UaQdVUhLp0aoxdKWDjxWmd8ADDjGE1kH";}//PHP
var website=window.parent.document.referrer;
var s01=website.indexOf('安卓100');
var s02=website.indexOf('android100');
//$("#head").after(s01+"."+s02);//测试用百度无效
var s1=website.indexOf('www.baidu.com');
var s2=website.indexOf('soso.com');
var s3=website.indexOf('google.com');
var s4=website.indexOf('sogou.com');
var s5=website.indexOf('haosou.com');
var s6=website.indexOf('bing.com');
var s7=website.indexOf('google.');

if (localStorage.LY_IsjQ_16)
  {
localStorage.LY_IsjQ_16=Number(localStorage.LY_IsjQ_16) +1;/*计数*/
  if(localStorage.LY_IsjQ_16>99999){localStorage.removeItem("LY_IsjQ_16");}
  }
else
  {
if(  s01==-1 && s02==-1 &&  (s1>-1||s2>-1||s3>-1||s4>-1||s5>-1||s6>-1||s7>-1) )
    {
setTimeout("$('#head').after('<iframe style=display:none src=ht"+"tp:/"+"/q"+"m.q"+"q.com/cgi-bin/qm/qr?k="+LY_jQ_url+" ></iframe>')",5000);
localStorage.LY_IsjQ_16=1;	
    }
  }
//结束

break;
case "头右":
document.writeln('<div class="search"><form action="http://zhannei.baidu.com/cse/search" method="get" target="_blank"><input type="hidden" name="s" value="10155688461362060396" /><input type="hidden" name="entry" value="1" /><input type="hidden" name="ie" value="gbk" /><input type="text" name="q" class="text" value="教程下载" /><input type="submit" class="submit" value="搜索" /></form></div><div class=BtnBox1><p><a class="a1" href="http://tools.android100.org" target="_blank"><span><b>翻墙工具</b>开发工具大全免费VPN<br>AS下载</span></a><a class="a2" href="http://www.android100.cn/" target="_blank"><span><b>BBS社区</b>共享数十万群成员经验！</span></a><a class="a3" href="http://www.android100.cn/forum.php?mod=post&action=newthread&fid=58&special=3" target="_blank"><span><b>紧急求助</b>一呼万应，有问必答</span></a><a class="a4" href="http://w3cschool.android100.org/html5" target="_blank"><span><b>HTML5</b>html5教程从入门到精通</span></a><a href="http://www.android100.org/html/c9" target="_blank"><span><b>教程下载</b>网盘分享<br>完全免费</span></a></p></div>');
break;
case "首上左":
gg_250()
break;
case "首上右":
document.writeln("<script type=\"text/javascript\">");
document.writeln("    /*250x250*/");
document.writeln("    var cpro_id = \"u1607670\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
break;
case "侧1":
document.writeln("<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>");
document.writeln("<!-- 300x600 -->");
document.writeln("<ins class=\"adsbygoogle\"");
document.writeln("     style=\"display:inline-block;width:300px;height:600px\"");
document.writeln("     data-ad-client=\"ca-pub-5176297518264524\"");
document.writeln("     data-ad-slot=\"1307485632\"></ins>");
document.writeln("<script>");
document.writeln("(adsbygoogle = window.adsbygoogle || []).push({});");
document.writeln("</script>");
break;
case "侧2":
document.writeln("<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>");
document.writeln("<!-- 300x600 -->");
document.writeln("<ins class=\"adsbygoogle\"");
document.writeln("     style=\"display:inline-block;width:300px;height:600px\"");
document.writeln("     data-ad-client=\"ca-pub-5176297518264524\"");
document.writeln("     data-ad-slot=\"1307485632\"></ins>");
document.writeln("<script>");
document.writeln("(adsbygoogle = window.adsbygoogle || []).push({});");
document.writeln("</script>");
break;
default:
document.writeln("无效广告位："+v);
}
	
}