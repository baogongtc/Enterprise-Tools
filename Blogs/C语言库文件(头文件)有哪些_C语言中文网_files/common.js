// jQuery cookie ���
(function($,document,undefined){var pluses=/\+/g;function raw(s){return s}function decoded(s){return unRfc2068(decodeURIComponent(s.replace(pluses," ")))}function unRfc2068(value){if(value.indexOf('"')===0){value=value.slice(1,-1).replace('\\"','"').replace("\\\\","\\")}return value}var config=$.cookie=function(key,value,options){if(value!==undefined){options=$.extend({},config.defaults,options);if(value===null){options.expires=-1}if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)}value=config.json?JSON.stringify(value):String(value);return(document.cookie=[encodeURIComponent(key),"=",config.raw?value:encodeURIComponent(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join(""))}var decode=config.raw?raw:decoded;var cookies=document.cookie.split("; ");var result=key?null:{};for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("=");var name=decode(parts.shift());var cookie=decode(parts.join("="));if(config.json){cookie=JSON.parse(cookie)}if(key&&key===name){result=cookie;break}if(!key){result[name]=cookie}}return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)!==null){$.cookie(key,null,options);return true}return false}})(jQuery,document);

$(document).ready(function(){
	// �û���¼
	(function(){
		var uid = $.cookie("uid");
		var username = $.cookie("username");
		var vip = $.cookie("vip");
		var vipexpire = $.cookie("vipexpire");
		var timenow = parseInt( (new Date()).getTime() / 1000 );
		var isVipValid = vipexpire>timenow ? 1 : 0;
		//var isOnline = false;

		if(uid && username){
			$("#user-info").html('' +
				'<a id="btn-logout" class="right" href="#">�˳�</a>' +
				'<span class="right">&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +
				'<span class="right" id="vip-type" style="background-image: url(' + window.cmsTemplets + '/images/vip_' + vip + '_' + isVipValid + '.png' + ')"></span>' +
				'<span class="right"><a href="http://vip.biancheng.net/">' + username + '</a>&nbsp;</span>'
			);
			//isOnline = true;
		}else{
			$("#user-info").html('' +
				'<a href="http://vip.biancheng.net/login.php" target="_blank">��¼</a>&nbsp;&nbsp;|&nbsp;' +
				'<a href="http://vip.biancheng.net/register.php" target="_blank">ע��</a>'
			);
		}

		// �˳���¼
		$("body").delegate("#btn-logout", "click", function(e){
			e.preventDefault();

			var expire = -1;
			var path = "/";
			$.cookie("username", '', {"path": path, "expires": expire});
			$.cookie("uid", '', {"path": path, "expires": expire});
			$.cookie("vip", '', {"path": path, "expires": expire});
			$.cookie("vipexpire", '', {"path": path, "expires": expire});

			$.getScript("http://vip.biancheng.net/logout_jsonp.php", function(){
				history.go(0);
			});
		});

		//�����vip�̳�
		if(window.thisArtFlag && /f/.test(window.thisArtFlag)){
			if(!parseInt(vip) || !isVipValid){
				$("#art-body").html(
					'<p class="vip-tip col-red">' +
					'���ã��������Ķ��߼��̳̻���Ŀʵ������Ҫ<a href="http://vip.biancheng.net/" target="_blank">��ͨVIP��Ա������19.9Ԫ/�£�</a>����ͨVIP��Ա�����ǻ����ṩQQһ��һ���ɣ�����1T������ϣ���<a href="http://vip.biancheng.net/" target="_blank">�ͻ�����</a>�˽����顣' +
					'</p>'
				);
			}
			$("#art-body").css("display", "block");
		}
	})();

	var activeNode = null;
	// ajax��̬����Ŀ¼����Ϊ��ǰ�½���ɫ
	(function(){
		var contents = $("#course-contents"),
			thistypeid = contents.attr("thistypeid"),
			thisDdTem = contents.children("dd[typeid='" + thistypeid + "']"),
			thisDd = thisDdTem && thisDdTem.length && thisDdTem.first();
		if(thisDd){
			var channelnum = thisDd.attr("channelnum"),
				dds = '';
			$.ajax({
				method: 'get',
				url: "/cpp/ajaxapi/getArtList.php?v=" + window.cmsTempletsVer + "&typeid=" + thistypeid,
				dataType: 'text',
				
				success: function(retData){
					retData = $.parseJSON( decodeURIComponent(retData) );
					if(!retData || !retData.success){
						thisDd.after('<div class="errorMsg">�����½��б�ʧ�ܣ�</div>');
						return;
					}
					// ���û�����ݣ���Ѹ��±�����Ϊactive
					if( !retData.data || !retData.data.length ){
						return;
					}

					$.each( retData.data, function( i, record ){
						dds += '<dd>' + channelnum + '.' + (++i) + ' ' + record + '</dd>';
					});
					thisDd.after( '<dl class="dl-sub">' + dds + '</dl>' );

					if(window.thisArtId){ // ����ҳ
						var aActiveTem = $("#course-contents a[artid='" + thisArtId + "']"),
							aActive = aActiveTem && aActiveTem.first();
						aActive && aActive.parent().addClass("active");
						activeNode = aActive.parent();
					}else{  // �����б�ҳ
						thisDd && thisDd.addClass("active");
						activeNode = thisDd;
					}
				},
				error: function(jqXHR, textStatus, errorThrown){
					thisDd.after('<div class="errorMsg">�����½��б�ʧ�ܣ�</div>');
				}
			});
		}
	})();

	// �������¶������
	$("#ad-arc-top-diy").html('' +
		'<table>'+
			'<tr><td id="ad-beifeng-top"><a class="col-red" href="http://www.clang.cc/kecheng/" target="_blank">�з�����ʦ���Խ���C���ԡ�VC++������Ŀ������ѧϰ��</a></td></tr>'+
			'<tr><td><a class="col-green" href="http://vip.biancheng.net/" target="_blank">C����������VIP��Ա������19.9Ԫ/�£��Ķ����и߼��̳̣�����1T�������ͣ�</a></td></tr>'+
		'</table>'

		/*'<div id="ad-beifeng-top">' +
			'<a class="col-red" href="/cpp/redirect.html?c_text1_0701-qudao" target="_blank">���������ѧϰIT���ſγ̣�������ǰ�ؼ�����������</a>' +
		'</div>'*/ //+
		//'<div id="ad-fudaoban-top">' +
		//	'<a class="col-link" href="http://www.weixueyuan.net/shoutu/" target="_blank">����̸����ࡿһ��һ���� + ר�⽲�� + ��Ƶ�̳� + ��ҵָ��</a>' +
		//'</div>'
	);
	
	// ���ر������ײ����
	/*$("#id-beifeng-pic").html('' +
		'<a href="/cpp/redirect.html?c_image1_0701-qudao" target="_blank">' +
			'<img src="' + cmsPath + '/uploads/ads/beifeng_728_80.jpg?v=' + window.cmsTempletsVer + '" alt="������">' +
		'</a>');*/

	/*// ����#main�������
	$("#ad-position").html('' +
		'<a class="left" href="/cpp/redirect.html?type=image_top" target="_blank"><img src="' + cmsPath + '/uploads/ads/beifeng_515_60.jpg?v=' + window.cmsTempletsVer + '" alt="������" /></a>' +
		'<a class="right" href="/cpp/html/2873.html" target="_blank"><img src="' + cmsPath + '/uploads/ads/dayi.gif?v=' + window.cmsTempletsVer + '" alt="C���Դ���" /></a>'
	);*/

	// �������½ǹ��
	/*(function(){
		var adRbStr = $('<div id="ad-rb">' +
    					'<span class="close">��</span>' +
    					'<div class="content">' +
	        				'<h3 class="title col-red">���ԣ�Out�ˣ��ֻ���Ҳ��ѧ���</h3>' +
        					'<p class="info">���ڵ�һ���ֻ�������֣�΢��ɨ���ά�룬��ע���ں�(��ũ����)���ɲ���ѧϰ��</p>' +
        					'<div class="img"><img height="222" src="' + cmsTemplets + '/images/bianchengziliao.jpg' + '" /></div>' +
	        			'</div>' +
					'</div>');
		$("body").append(function(){
			adRbStr.find("span.close").click(function(){ adRbStr.hide(); });
			return adRbStr;
		});
	})();*/
	// ����������һ���汾
	/*(function(){
		var adRbStr = '<div id="ad-rb">' +
	    			  	'<div class="title">����������� <span class="right close">��</span></div>' +
	    				'<div class="content">' +
	        				'<h3><a class="col-red" href="/cpp/html/beifeng_card.html" target="_blank">����2TB�ı�������������</a></h3>' +
	        				'<p>��������һ��ר�Ŵ������߽�������վ��ӵ�й�������<b class="col-red">��Ƶ</b>��Դ������C/C++��Java��IOS��Android�ȡ�C�������������һ�ñ�������ѧϰ������ֵ<b class="col-red">200Ԫ</b>��������͸���ҡ�<a class="col-link" href="/cpp/html/beifeng_card.html" target="_blank">�ͻ�����鿴����&gt;&gt;</a></p>' +
	    				'</div>' +
					'</div>';
		var body = $("body");
		body.append(adRbStr);
		body.delegate("#ad-rb", "click", function(e){
			/close/.test(e.target.getAttribute("class")) && ( this.style.display = "none" );
		})
	})(); */

	//�������л�ɫ
	(function(){
		$(".bg_change").each(function(){
			var nodes = $(this).children("li:even");
			if(nodes && nodes.length){
				nodes.addClass('bg-f7f7f7');
			}else{
				$(this).children("dd:even").addClass('bg-f7f7f7');
			}
		});
	})();

	// ���ش���������
    (function(){
        var pres = document.getElementsByTagName("pre");
        if(!pres || !pres.length)
        	return;

        $.getScript(window.cmsTemplets+"/js/jquery.snippet.js",function(){
            $(pres).each(function(){
                var thisClass = $(this).attr("class");
                thisClass = thisClass && thisClass.replace( /^shell$/, "sh" );  // Shell

                thisClass && !/info-box/.test(thisClass) && !/console/.test(thisClass) && $(this).snippet(thisClass,{
                    style:"bright",
                    clipboard:window.cmsTemplets+"/js/ZeroClipboard.swf"
                });
            });
        });
    })();

    // �����˵�
    (function(){
    	$(".share,.sub-menu").mouseover(function(){
        	$(this).children('ul').css({
        		'display': 'block'
        	});
        }).mouseout(function(){
        	$(this).children('ul').css({
        		'display': 'none'
        	});
        });
    })();

    // ����ť
    (function(){
    	var shareWrap = $(".share");

    	// �ٶȿ��յ������������ַ�������֣���Ϊ��̬����
    	shareWrap.append('' + 
    		'<dt>������</dt>' +
			'<dd class="qzone">QQ�ռ�</dd>' +
			'<dd class="weibo">����΢��</dd>' +
			'<dd class="tweibo">��Ѷ΢��</dd>' +
			'<dd class="douban">����</dd>' +
			'<dd class="renren">������</dd>');

        // QQ�ռ�
        shareWrap.delegate('.qzone', 'click', function(){
        	window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'+
        		'title=' + encodeURIComponent(shareParam.title) + '&'+
        		'desc=' + encodeURIComponent(shareParam.desc) + '&'+
        		'summary=' + encodeURIComponent(shareParam.summary_qzone) + '&'+
        		'url=' + shareParam.url + '&'+
        		'pics=' + encodeURIComponent(shareParam.pic_qzone), '_blank');
			return false;
        });

        // ����΢��
        shareWrap.delegate('.weibo', 'click', function(){
        	window.open('http://v.t.sina.com.cn/share/share.php?'+
        		'title=' + encodeURIComponent(shareParam.desc) + '&'+
        		'url=' + shareParam.url + '&'+
        		'pic=' + shareParam.pic_tweibo, '_blank');
			return false;
        });

        // ��Ѷ΢��
        shareWrap.delegate('.tweibo', 'click', function(){
        	window.open('http://v.t.qq.com/share/share.php?'+
        		'title=' + encodeURIComponent(shareParam.desc) + '&'+
        		'url=' + shareParam.url + '&'+
        		'pic=' + shareParam.pic_tweibo, '_blank');
			return false;
        });

        // ����
        shareWrap.delegate('.douban', 'click', function(){
        	window.open('http://www.douban.com/share/service?'+
        		'name=' + encodeURIComponent(shareParam.title) + '&'+
        		'text=' + encodeURIComponent(shareParam.summary_douban) + '&'+
        		'sel=' + encodeURIComponent(shareParam.desc) + '&'+
        		'href=' + shareParam.url + '&'+
        		'image=' + shareParam.pic_douban, '_blank');
			return false;
        });

        // ����
        shareWrap.delegate('.renren', 'click', function(){
        	window.open('http://widget.renren.com/dialog/share?'+
        		'title=' + encodeURIComponent(shareParam.title) + '&'+
        		'description=' + encodeURIComponent(shareParam.summary_douban) + '&'+
        		'resourceUrl=' + shareParam.url + '&'+
        		'pic=' + shareParam.pic_douban + '&' +
        		'charset=utf-8', '_blank');
			return false;
        });

    })();

    // ��̬Ŀ¼����Ϊ��ǰ�½���ɫ
	(function(){
		var contents = $("#course-contents"),
			loadMode = contents.attr('loadmode');
		if(loadMode === 'static'){
			var url = document.location.pathname,
				as = contents.find('a');
			as.each(function(){
				if($(this).attr('href') === url){
					activeNode = $(this).parent();
					activeNode.addClass('active');
					return false;
				}
			});
		}
	})();

	// ��һ�ڡ���һ�ڰ�ť
	(function(){
		$(".paging-btn").click(function(){
			var isPreBtn = /paging-pre/.test( $(this).attr("class") );
			if(isPreBtn){
				var preNextNode = $(activeNode).prevAll("dd").first();
				preNextNode = preNextNode.length ? preNextNode : $(activeNode).parent().prev("dd");
			}else{
				var preNextNode = $(activeNode).nextAll("dd").first();
				preNextNode = preNextNode.length ? preNextNode : $(activeNode).next("dl").children("dd").first();
				if(!preNextNode.length){
					var preNextNode = $(activeNode).parent().next("dd");
				}
			}
			var preNextLink = (preNextNode && preNextNode.length) ? preNextNode.children("a").attr("href") : location.href;
			location.href = preNextLink;
		});
	})();

	// Ϊ�����ڵ�ͼƬ�������
	$("#art-body img").click(function(){
		window.open($(this).attr("src"));
	});

    // ���ض�˵���
    (function(){
    	if(!window.duoshuoQuery)
    		return;

		var ds = document.createElement('script');
		ds.type = 'text/javascript';
		ds.async = true;
		ds.src = 'http://static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();

    (function(){
    	$("#nav-top").after(''+
    		'<ul id="ad-link-top" class="left hover-none">'+
				'<li class="fudaoban"><a href="http://vip.biancheng.net/" target="_blank">C����������VIP��Ա</a></li>'+
			'</ul>'
		);
    })();
});