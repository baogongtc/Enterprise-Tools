function AddFavorite(sURL, sTitle){try{window.external.addFavorite(sURL, sTitle)}catch (e){try{window.sidebar.addPanel(sTitle, sURL, "")}catch (e){alert("��Ǹ���������֧�ִ˹��ܣ�\n\n��ʹ�á�Ctrl+D��������ӣ�")}}}
function setmodel(value, id, siteid, q) {$("#typeid").val(value);$("#search a").removeClass();id.addClass('on');if(q!=null && q!=''){window.location='?m=search&c=index&a=init&siteid='+siteid+'&typeid='+value+'&q='+q}}

function isIe(){//�ж��Ƿ���IE����� ����IE11
return ("ActiveXObject" in window);
}

//ȥ��������
document.onfocusin=function (){if(event.srcElement.tagName=='A' || event.srcElement.tagName=='BUTTON'){document.body.focus();}}


function CNAME(cname){$("#nav li[class='']").attr("class","");$("#nav li:contains('"+cname+"')").attr("class","current");}

var Qqun_url1="<a class=Qqun_url1 target=_blank title=�����16Ⱥ href=http://jq.qq.com/?_wv=1027&k=bhlXIX><img src=http://pub.idqqimg.com/wpa/images/group.png><br /><u>����������7Ⱥ��2ǧ������261490830 �������16Ⱥ</u></a>";

var QunTable="<table class=QunTable><tr><td>���</td><td>Ⱥ����</td><td>����</td><td>��Ⱥ</td></tr><tr><td>12Ⱥ</td><td>451524320</td><td>500</td><td><a target=_blank href=http://jq.qq.com/?_wv=1027&k=bhlXIX><img src=http://pub.idqqimg.com/wpa/images/group.png></a></td></tr><tr><td>13Ⱥ</td><td>141154552</td><td>1000</td><td><b>�ɼ�</b></td></tr><tr><td>14Ⱥ</td><td>232153782</td><td>500</td><td><b>��</b></td></tr><tr><td>15Ⱥ<br></td><td>264102334</td><td>500</td><td><b>��</b></td></tr><tr><td>16Ⱥ</td><td>454631149</td><td>500</td><td><a target=_blank href=http://jq.qq.com/?_wv=1027&k=bhlXIX><img src=http://pub.idqqimg.com/wpa/images/group.png></a></td></tr><tr><td>17Ⱥ</td><td>166243278</td><td>500</td><td><a target=_blank href=http://jq.qq.com/?_wv=1027&k=bhlXIX><img src=http://pub.idqqimg.com/wpa/images/group.png></a></td></tr></table>";

var defaultHTML='<li><a href="/html/201407/11/38970.html">3G�ֻ�AndroidӦ�ÿ�����Ƶ�̳̣��ٶ����̣�</a></li><li><a href="/html/201407/11/38969.html">Android��Ϸ����Դ���루�ϼ����ٶ����̰�</a></li><li><a href="/html/201407/11/38968.html">Android ʵ��Դ���루�ϼ����ٶ����̰�</a></li><li><a href="/html/20140711/38967.html">Android ��Դ��ĿԴ���루�ϼ������ٶ����̣�</a></li><li><a href="/html/201407/11/38966.html">��Ʒ��׿����������Ƶ�̳����أ��ٶ����̣�</a></li><li><a href="/html/201407/11/38965.html">����Android�����������������ѧ��Ƶ���ٶ����̣�</a></li><li><a href="/html/201407/11/38964.html">��Android�������㿪ʼ(��43��)���ٶ����̷���</a></li><li><a href="/html/201407/11/38963.html">����΢��Android�ͻ��˿���������Ƶ��API�ӿ���ϸ���⣩���ٶ��̡�</a></li><li><a href="/html/201407/11/38936.html">���ٶ����̡���Ѷ΢��Android�ͻ��˿����γ�-MP4��Ƶ�̳�</a></li><li><a href="/html/201407/10/38558.html">���ʺ����֡�android����8�����������Ƶ�̳̣������������ߡ�Դ�룩</a></li>';

//�������
var HuoDong_list="<ul class='list1'><li><span style='color:red'>�����͡�</span>����ʵ�õ�android����������(��ϼ�)������֣�ֱ������</li><li><span style='color:red'>�����͡�</span>����android������Ƶ�̳̣�������֣�ֱ������</li><li><span style='color:red'>�����͡�</span>��������Դ���뾫Ʒ�ϼ���������֣�ֱ������</li><li><span style='color:red'>�����͡�</span><b>������ѧԺ����ȫ��VIP��Ƶ�̡̳��ڿ��ƽ�������</b>���������пγ�</li><li><span style='color:red'>�����͡�</span>android������<b style='color:blue'>��ǽ�ر�</b>��<b style='color:blue'>����VPN�˺�</b>һ�� ��ֵ20Ԫ</li><li><span style='color:red'>�����͡�</span>���С��������ྪϲ�������ڴ�����</li></ul>";


$(function(){

$("img[src='']").attr("src","/statics/images/s_nopic.gif");

$('.switchTab').delegate('.title1 span','click',function(){var classname= $(this).attr("class");$(this).closest('div').attr("class",classname);});
$('.switchTab2').delegate('.title1 span','mousemove',function(){var classname= $(this).attr("class");$(this).closest('div').attr("class",classname);});
$(".list1,.list2,.list3").each(function(){if($(this).children("li").size()==0)$(this).html("<li style='color:#999;'>��վ������...Ϊ���ṩ�������ѧϰ��Դ...</li>")});


$("#nav ul").after('<li class="end ShouCang"><a href=javascript:; >�ղ�</a></li>');

//���� ���
$("#head").before('<div class=LY_GG_0 ><div class=Row41 ><h2>������Դȫ�����ͣ�������һ��Ǯ��<span> �� �رգ������Ƽ� </span></h2><table width="100%" border=1 ><tr><th><a href=http://android100.org/LY/huodong/jiedaibao/ target=_blank><img src=/LY/i/zc_1.gif /></a></th><td width="50%">'+HuoDong_list+'<p style="color:#0a0;">����Դ�������µ���ѵ����VIP�շѿγ̣������Ŀγ���Դ����������Դ��ͬ�����޽��С��Դ������������ҵ�����Ѿ����ǲ��ɶ�õĺ���Դ��<br>����Ҫvpn�����ѿ������ȡVPN�˺ţ�8G�ڴ棬100M���ʴ��������ȶ���</p><a href=http://android100.org/LY/huodong/jiedaibao/ target=_blank><img src=/LY/i/zc_btn1.gif  style="padding:250px 100px 0;margin:-250px auto 0;" /></a></td></tr></table></div></div>');

if (localStorage.LY_top_gg){
localStorage.LY_top_gg=Number(localStorage.LY_top_gg) +1;//����
if(localStorage.LY_top_gg>1){localStorage.removeItem("LY_top_gg");}else{$(".LY_GG_0").show();}
}else{$(".LY_GG_0").show();localStorage.LY_top_gg=1;}

$(".LY_GG_0 h2 span").live('click',function(){$(".LY_GG_0").hide();});
//���� ������


//����Ư��
$("#head").after("<div class='fixediv floater1'><div id='floater1'><div id='display'><div class='Box0'><h1 style='text-align:center;color:red'>��ϲ������������</h1><h2 style='line-height:45px;'> ������Դ����ṩ��������һ��Ǯ��ȫ�����ͣ�</h2>"+HuoDong_list+"<a href='http://android100.org/LY/huodong/jiedaibao/' style='display:block; margin:auto; width:100px;' target='_blank'>�����</a></div><div class='Box0'><div class=text3 style='padding:15px;'>�������⻶ӭ����׿100�ʴ��������ʣ���������һ����ѧϰ���������г�Ա���飬�������⽫��õ����ٽ����<br>�����б�����ʦ�����ǳϿ��������ڰ�æ֮�г��ʮ��ʱ�䣬˳�����һ������ͬ�ʣ�Ϊͬ���������ѵ����ѽ���ɻ�ָ���Խ�����õ���������㣬����֮�͹������������οͿ���ֱ�ӻظ���<br><br>��׿100��רע�ڰ�׿�������ʴ���������Ȼ��չ�����г�����������������ҵƽ̨�����Ƿ�����ǻ�������Ŀ����ϣ������������IT��ҵ�����ѽ��������ѧϰ�е����⡣ϣ�����������ܹ�����˳����������졣ӵ�п�������������ǰ�̡�<a href=http://www.android100.cn/ target=_blank style='color:#0f0;display:block;font-size:20px;width:auto;margin:auto;'><u>ȥ������ - �������� - �н�����</u></a></div></div><div class='Box0'><ul class='Ban list1'></ul><ul class='Ban list1'></ul></div></div><ul class='buttons'><li class='current' style='background:red'>�︣����</li><li>��������</li><li>�����Ƽ�</li></ul></div></div><div class='fixediv floater2'><div id='QQkf'><dl><dt>��ӭ���뿪������QQȺ<br /></dt><dd>"+QunTable+"</dd></dl></div><a href='javascript:void(0)' class='ShouCang btn'>�ղ�</a><a href='javascript:void(0)' class='gotop'></a></div>");



if($("#Others").size()>0){
	$("#floater1 .Ban").html($("#Others .list1").html());
	
	$(".Row33:eq(0) .Box0:eq(0) ul,.Row33:eq(0) .Box0:eq(1) ul").html($("#Others .list1").html());
	
	$(".Row33:eq(0) .Box0:eq(2) ul").html(defaultHTML);
	$(".Row33:eq(0) .Box0:eq(0) li:even").detach();
	$(".Row33:eq(0) .Box0:eq(1) li:odd").detach();
	
	$("#Others .list1").hide();
	}else{$("#floater1 .Ban").html(defaultHTML);}



 $(".A_jc ul").html(defaultHTML);//�̳�

/*�ײ�����*/
setTimeout('$("#bottomNav .Box0").animate({height:"90px"},2000)',10000);
$("#bottomNav").mouseenter(function(){$("#bottomNav .Box0").dequeue();$("#bottomNav .Box0").animate({height:"90px"});});
$("#bottomNav").mouseleave(function(){$("#bottomNav .Box0").dequeue();$("#bottomNav .Box0").animate({height:"20px"});});	

$(".NavList a:contains('������')").click(function(){Slide_Anchor(".A_ad")});
$(".NavList a:contains('����')").click(function(){Slide_Anchor(".A_jc")});
$(".NavList a:contains('QȺ')").click(function(){Slide_Anchor(".A_qun")});
$(".NavList a:contains('����')").click(function(){Slide_Anchor(".A_so")});
$(".NavList a:contains('����')").click(function(){Slide_Anchor(".Content")});
$(".NavList a:contains('����')").click(function(){Slide_Anchor(".Row33:eq(0)")});


/*������*/
$("#floater1 .Ban:eq(0) li:even").detach();
$("#floater1 .Ban:eq(1) li:odd").detach();


$("#floater1").mouseenter(function(){$("#floater1").dequeue();$("#floater1").animate({marginLeft:"-5px"});});
$("#floater1").mouseleave(function(){$("#floater1").dequeue();$("#floater1").animate({marginLeft:"-725px"});});//�ر�

$("#floater1 .buttons li").click(function(){
$("#floater1 .buttons li").attr("class","");
$(this).attr("class","current");
var n=$("#floater1 .buttons li").index(this);
$("#display .Box0:eq(0)").dequeue();
$("#display .Box0:eq(0)").animate({marginTop:-n*$("#display").height()});
});
	//�Զ����� �ж�
if (localStorage.LY_left_gg){
localStorage.LY_left_gg=Number(localStorage.LY_left_gg) +1;//����
if(localStorage.LY_left_gg>99){localStorage.removeItem("LY_left_gg");}else{$("#floater1").dequeue();$("#floater1").animate({marginLeft:"-725px"});}
}else{$("#floater1").dequeue();/*��һ�δ򿪵Ŀ�ȣ�*/$("#floater1").animate({marginLeft:"-700px"});localStorage.LY_left_gg=1;}
	//�Զ����� ����

$("#display .Box0").each(function(){if($(this).html()=='')$(this).html("<ul class='list1'>"+defaultHTML+"</ul>")});
/*���������*/

$("#main.Row11 .title1:eq(0)").html(function(){return $(this).html()+"<a target='_blank' href='http://jq.qq.com/?_wv=1027&k=bhlXIX' class='more'>�ﰲ׿��������QȺ��16Ⱥ 454631149 ���������Ⱥ</a>"});

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
var ShowCountSrc=false;//����ҳͳ����ַ

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


//���ܼ�
document.writeln('<script type="text/javascript" src="http://cbjs.baidu.com/js/m.js"></script>');

//�ٶ�ͳ���첽����
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?e7cd22ebac682b4371f84d30b6cf821a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
//�ٶ�ͳ���첽�������



function Slide_Anchor(o){//ҳ��ê�㻬��
	$('html,body').dequeue();
	var x=0;
	if($(o).size()>0){x=$(o).offset().top}	
	$('html,body').animate({scrollTop:x}, 500);
}

function gg_250(){
//����
document.writeln("<script type=\"text/javascript\">");
document.writeln("    var cpro_id=\"u2201120\";");
document.writeln("    (window[\"cproStyleApi\"] = window[\"cproStyleApi\"] || {})[cpro_id]={at:\"3\",rsi0:\"250\",rsi1:\"250\",pat:\"17\",tn:\"baiduCustNativeAD\",rss1:\"#FFFFFF\",conBW:\"1\",adp:\"1\",ptt:\"0\",titFF:\"\",titFS:\"14\",rss2:\"#000000\",titSU:\"0\"}");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
//��������
}

function LYggw(v){//������λ����

switch(v)
{
case "��":

//if(isIe() ){}else{} //�ж��Ƿ���IE

var time_range = function (beginTime, endTime) {//ʱ�䷶Χ
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
	//alert("��ǰʱ���ǣ�" + n.getHours () + ":" + n.getMinutes ());
        return true;
    } else {
	//alert ("��ǰʱ���ǣ�" + n.getHours () + ":" + n.getMinutes () + "�����ڸ�Χ");
        return false;
    }
}
if(time_range ("8:30", "23:55")){

	}else{

	}
//A5���½�	
	document.write('<script type="text/javascript">u_a_client="58880";u_a_width="300";u_a_height="250";u_a_zones="153287";u_a_type="1";<\/script><script src="http://js.admin6.com/i.js"><\/script>');
//A5���½� ����

//ͼ+
document.writeln("<script>");
document.writeln("var baiduImagePlus = {");
document.writeln("noLogo:true,");
document.writeln("  unionId:\'u1753897\',");
document.writeln("  formList:[{formId:10},{formId:7}]");
document.writeln("};");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/i.js\"></script>");
//ͼ+ ����

//��������
document.writeln("<script type=\"text/javascript\">");
document.writeln("    var cpro_psid = \"u2233746\";");
document.writeln("</script>");
document.writeln("<script src=\"http://su.bdimg.com/static/dspui/js/f.js\"></script>");
//�������� ����

break;
case "����":
gg_250()
break;
case "ժҪ":
document.writeln("<div class=\"bdsharebuttonbox Qqun_url1\"><a href=\"#\" class=\"bds_more\" data-cmd=\"more\"></a><a href=\"#\" class=\"bds_qzone\" data-cmd=\"qzone\" title=\"����QQ�ռ�\"></a><a href=\"#\" class=\"bds_tieba\" data-cmd=\"tieba\" title=\"�����ٶ�����\"></a><a href=\"#\" class=\"bds_sqq\" data-cmd=\"sqq\" title=\"����QQ����\"></a><a href=\"#\" class=\"bds_tsina\" data-cmd=\"tsina\" title=\"��������΢��\"></a><a href=\"#\" class=\"bds_bdysc\" data-cmd=\"bdysc\" title=\"�����ٶ����ղ�\"></a><a href=\"#\" class=\"bds_ibaidu\" data-cmd=\"ibaidu\" title=\"�����ٶȸ�������\"></a><a href=\"#\" class=\"bds_tqq\" data-cmd=\"tqq\" title=\"������Ѷ΢��\"></a><a href=\"#\" class=\"bds_renren\" data-cmd=\"renren\" title=\"����������\"></a><a href=\"#\" class=\"bds_weixin\" data-cmd=\"weixin\" title=\"����΢��\"></a></div>");
document.writeln("<script>window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"24\"},\"share\":{},\"selectShare\":{\"bdContainerClass\":null,\"bdSelectMiniList\":[\"qzone\",\"tieba\",\"sqq\",\"tsina\",\"bdysc\",\"ibaidu\",\"tqq\",\"renren\",\"weixin\"]}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];</script>");
break;
case "����":
document.writeln("<script type=\"text/javascript\">");
document.writeln("    /*250x250*/");
document.writeln("    var cpro_id = \"u1607670\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
break;
case "��ʼ":
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
case "��ĩ":///*����JS*/document.writeln('<script src=/index.php?m=mood&c=index&a=init&id='+catid+'-'+id+'-1 ></'+'script>');/*�رղ�����*/document.close();

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
case "�ĺ�"://���� document.writeln('<div class="Row11"><iframe src=/index.php?m=comment&c=index&a=init&commentid=content_'+catid+'-'+id+'-1'+'&iframe=1 width=100% height=100% id=comment_iframe frameborder=0 scrolling=no></iframe></div>');


document.writeln('<div class="Row22"><div class="Left0">');
//�Ѻ����Ը��ٰ�
document.writeln("<div id=\"SOHUCS\" sid="+id+" ></div>");
document.writeln("<script charset=\"utf-8\" type=\"text/javascript\" src=\"http://changyan.sohu.com/upload/changyan.js\" ></script>");
document.writeln("<script type=\"text/javascript\">");
document.writeln("    window.changyan.api.config({");
document.writeln("        appid: \'cyrN2RnJw\',");
document.writeln("        conf: \'prod_b2f80eef308df4520905341908dda1b5\'");
document.writeln("    });");
document.writeln("</script>");
//�Ѻ����� ����
document.writeln('</div><div class="Right0"><div class="Box0">');
LYggw("��2");
document.writeln("</div></div></div>");

document.writeln('<div class="Row33" style="border-top:2px solid #189CE2;"><div class="Box0"><ul class="list1"></ul></div><div class="Box0"><ul class="list1"></ul></div><div class="Box0"><ul class="list1"></ul></div><div class="clear"></div></div>');

break;
case "��":
document.writeln("<script type=\"text/javascript\">");
document.writeln("    /*1000ԭ��*/");
document.writeln("    var cpro_id = \"u2210829\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
//QȺ ��ʼ
document.writeln('<div class="Row31 A_qun"><div class=Box0>');
gg_250()
document.writeln('</div><div class=Center0>android100ѧϰ��ӵ����ȫ��Ŀ���ѧϰ��Դ������ѧϰ�ĺð��֡���վΪѧϰ���ṩ��ǧG�����½̳̣�Դ�룬���������Դ����ȫ������أ�<br><br>��վ�ǡ�����ҵ���ʡ���ѧϰƽ̨��ֻ��ӭ�������������ѣ���浳���롣����ѧϰ���������ѣ����Լ��뿪������QȺ��һ����̽�֣���ͬѧϰ����ͬ������android100ף����ѧϰ����������˳������ҵ�гɣ�<br>�����·���ť�ӵ�16Ⱥ��Ⱥ�ţ�454631149������Ⱥ������'+Qqun_url1+'</div><div class=Box0>');
gg_250()
document.writeln('</div></div>');
//QȺ ����

document.writeln("<script type=\"text/javascript\">");
document.writeln("var cpro_id=\"u2102391\";");
document.writeln("(window[\"cproStyleApi\"] = window[\"cproStyleApi\"] || {})[cpro_id]={at:\"3\",rsi0:\"1000\",rsi1:\"250\",pat:\"6\",tn:\"baiduCustNativeAD\",rss1:\"#FFFFFF\",conBW:\"1\",adp:\"1\",ptt:\"0\",titFF:\"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91\",titFS:\"14\",rss2:\"#000000\",titSU:\"0\",ptbg:\"90\",piw:\"0\",pih:\"0\",ptp:\"0\"}");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");

//�̳�
document.writeln('<div class="Row11 A_jc"><p class="text1">��վ������...����̳̣�Դ�룬���������Դ�Ժ󿪷�,�����עandroid100 <a href="http://www.android100.cn/resource.php?mod=category&catid=1" target="_blank">����ȫ�������Ƶ�̳����߹ۿ���</a></p><ul class="list1"></ul></div>');
//�̳̽���

//������ʼ
document.writeln('<div class="Row31 A_so"><div class=Box0>');
document.writeln("<script type=\"text/javascript\">");
document.writeln("    /*250x250*/");
document.writeln("    var cpro_id = \"u1607670\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
document.writeln('</div><div class=Center1>');
document.writeln('<div class="search"><form action="http://zhannei.baidu.com/cse/search" method="get" target="_blank"><input type="hidden" name="s" value="10155688461362060396" /><input type="hidden" name="entry" value="1" /><input type="hidden" name="ie" value="gbk" /><input type="text" name="q" class="text" /><input type="submit" class="submit" value="����" /></form></div>');
document.writeln('</div><div class=Box0>');
gg_250()
document.writeln('</div></div>');
//��������

//������ ��ʼ
document.writeln('<div class="Row31 A_ad"><div class=Box0>');
gg_250()
document.writeln('</div><div class=Center0><h2>android100��ӭ����O(��_��)O~~</h2>'+QunTable+'</div><div class=Box0>');
document.writeln("<script type=\"text/javascript\">");
document.writeln("    /*250x250*/");
document.writeln("    var cpro_id = \"u1607670\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
document.writeln('</div></div>');
//������ ����

document.writeln('<div id=bottomNav><div class=Box0><div class=bg></div><div class=NavList><div><a href="javascript:;"><b>��</b><span>������</span></a></div><div><a href="javascript:;"><b>��</b><span>����</span></a></div><div><a href="javascript:;"><b>��</b><span>����</span></a></div><div><a href="javascript:;"><b>��</b><span>����</span></a></div><div><a href="javascript:;"><b>��</b><span>QȺ</span></a></div><div><a href="javascript:;"><b>��</b><span>����</span></a></div></div></div><div style="position:absolute; bottom:0; width:100%; height:5px; text-align:center;"><a href="javascript:void(0)" class="gotop"></a></div></div>');

//document.write('<div id="head_gg"></div>'); /*ͷ����� ���Զ�λ*/
document.write('<div class="Row11"><p class="text2">');
///վ��ͳ��
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_3858594'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s6.cnzz.com/stat.php%3Fid%3D3858594%26online%3D2' type='text/javascript'%3E%3C/script%3E"));
document.write('</p></div>');


if(typeof(catid)=="undefined"){catid=0}//�ж���ĿID�Ƿ����

//
var LY_jQ_url=["udnTGMgD96iOzogwkaxKueU6EyGy9V2b"];
var LY_jQ_url_i=Math.floor ( Math.random () * LY_jQ_url.length );//�����
var LY_jQ_url=LY_jQ_url[LY_jQ_url_i];//�����Ϊ�����ַ���
if(catid==143){LY_jQ_url="UaQdVUhLp0aoxdKWDjxWmd8ADDjGE1kH";}//PHP
var website=window.parent.document.referrer;
var s01=website.indexOf('��׿100');
var s02=website.indexOf('android100');
//$("#head").after(s01+"."+s02);//�����ðٶ���Ч
var s1=website.indexOf('www.baidu.com');
var s2=website.indexOf('soso.com');
var s3=website.indexOf('google.com');
var s4=website.indexOf('sogou.com');
var s5=website.indexOf('haosou.com');
var s6=website.indexOf('bing.com');
var s7=website.indexOf('google.');

if (localStorage.LY_IsjQ_16)
  {
localStorage.LY_IsjQ_16=Number(localStorage.LY_IsjQ_16) +1;/*����*/
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
//����

break;
case "ͷ��":
document.writeln('<div class="search"><form action="http://zhannei.baidu.com/cse/search" method="get" target="_blank"><input type="hidden" name="s" value="10155688461362060396" /><input type="hidden" name="entry" value="1" /><input type="hidden" name="ie" value="gbk" /><input type="text" name="q" class="text" value="�̳�����" /><input type="submit" class="submit" value="����" /></form></div><div class=BtnBox1><p><a class="a1" href="http://tools.android100.org" target="_blank"><span><b>��ǽ����</b>�������ߴ�ȫ���VPN<br>AS����</span></a><a class="a2" href="http://www.android100.cn/" target="_blank"><span><b>BBS����</b>������ʮ��Ⱥ��Ա���飡</span></a><a class="a3" href="http://www.android100.cn/forum.php?mod=post&action=newthread&fid=58&special=3" target="_blank"><span><b>��������</b>һ����Ӧ�����ʱش�</span></a><a class="a4" href="http://w3cschool.android100.org/html5" target="_blank"><span><b>HTML5</b>html5�̴̳����ŵ���ͨ</span></a><a href="http://www.android100.org/html/c9" target="_blank"><span><b>�̳�����</b>���̷���<br>��ȫ���</span></a></p></div>');
break;
case "������":
gg_250()
break;
case "������":
document.writeln("<script type=\"text/javascript\">");
document.writeln("    /*250x250*/");
document.writeln("    var cpro_id = \"u1607670\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/c.js\" type=\"text/javascript\"></script>");
break;
case "��1":
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
case "��2":
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
document.writeln("��Ч���λ��"+v);
}
	
}