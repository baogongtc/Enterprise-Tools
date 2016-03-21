// jQuery cookie 插件
(function($,document,undefined){var pluses=/\+/g;function raw(s){return s}function decoded(s){return unRfc2068(decodeURIComponent(s.replace(pluses," ")))}function unRfc2068(value){if(value.indexOf('"')===0){value=value.slice(1,-1).replace('\\"','"').replace("\\\\","\\")}return value}var config=$.cookie=function(key,value,options){if(value!==undefined){options=$.extend({},config.defaults,options);if(value===null){options.expires=-1}if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)}value=config.json?JSON.stringify(value):String(value);return(document.cookie=[encodeURIComponent(key),"=",config.raw?value:encodeURIComponent(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join(""))}var decode=config.raw?raw:decoded;var cookies=document.cookie.split("; ");var result=key?null:{};for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("=");var name=decode(parts.shift());var cookie=decode(parts.join("="));if(config.json){cookie=JSON.parse(cookie)}if(key&&key===name){result=cookie;break}if(!key){result[name]=cookie}}return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)!==null){$.cookie(key,null,options);return true}return false}})(jQuery,document);

$(document).ready(function(){
	// 用户登录
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
				'<a id="btn-logout" class="right" href="#">退出</a>' +
				'<span class="right">&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +
				'<span class="right" id="vip-type" style="background-image: url(' + window.cmsTemplets + '/images/vip_' + vip + '_' + isVipValid + '.png' + ')"></span>' +
				'<span class="right"><a href="http://vip.biancheng.net/">' + username + '</a>&nbsp;</span>'
			);
			//isOnline = true;
		}else{
			$("#user-info").html('' +
				'<a href="http://vip.biancheng.net/login.php" target="_blank">登录</a>&nbsp;&nbsp;|&nbsp;' +
				'<a href="http://vip.biancheng.net/register.php" target="_blank">注册</a>'
			);
		}

		// 退出登录
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

		//如果是vip教程
		if(window.thisArtFlag && /f/.test(window.thisArtFlag)){
			if(!parseInt(vip) || !isVipValid){
				$("#art-body").html(
					'<p class="vip-tip col-red">' +
					'您好，您正在阅读高级教程或项目实践，需要<a href="http://vip.biancheng.net/" target="_blank">开通VIP会员（低至19.9元/月）</a>。开通VIP会员后，我们还将提供QQ一对一答疑，赠送1T编程资料，请<a href="http://vip.biancheng.net/" target="_blank">猛击这里</a>了解详情。' +
					'</p>'
				);
			}
			$("#art-body").css("display", "block");
		}
	})();

	var activeNode = null;
	// ajax动态加载目录，并为当前章节着色
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
						thisDd.after('<div class="errorMsg">加载章节列表失败！</div>');
						return;
					}
					// 如果没有数据，则把该章标题设为active
					if( !retData.data || !retData.data.length ){
						return;
					}

					$.each( retData.data, function( i, record ){
						dds += '<dd>' + channelnum + '.' + (++i) + ' ' + record + '</dd>';
					});
					thisDd.after( '<dl class="dl-sub">' + dds + '</dl>' );

					if(window.thisArtId){ // 文章页
						var aActiveTem = $("#course-contents a[artid='" + thisArtId + "']"),
							aActive = aActiveTem && aActiveTem.first();
						aActive && aActive.parent().addClass("active");
						activeNode = aActive.parent();
					}else{  // 文章列表页
						thisDd && thisDd.addClass("active");
						activeNode = thisDd;
					}
				},
				error: function(jqXHR, textStatus, errorThrown){
					thisDd.after('<div class="errorMsg">加载章节列表失败！</div>');
				}
			});
		}
	})();

	// 加载文章顶部广告
	$("#ad-arc-top-diy").html('' +
		'<table>'+
			'<tr><td id="ad-beifeng-top"><a class="col-red" href="http://www.clang.cc/kecheng/" target="_blank">研发工程师亲自教你C语言、VC++、做项目、永久学习！</a></td></tr>'+
			'<tr><td><a class="col-green" href="http://vip.biancheng.net/" target="_blank">C语言中文网VIP会员：低至19.9元/月，阅读所有高级教程，还有1T资料赠送！</a></td></tr>'+
		'</table>'

		/*'<div id="ad-beifeng-top">' +
			'<a class="col-red" href="/cpp/redirect.html?c_text1_0701-qudao" target="_blank">零基础在线学习IT热门课程，掌握最前沿技术：北风网</a>' +
		'</div>'*/ //+
		//'<div id="ad-fudaoban-top">' +
		//	'<a class="col-link" href="http://www.weixueyuan.net/shoutu/" target="_blank">【编程辅导班】一对一辅导 + 专题讲解 + 视频教程 + 就业指南</a>' +
		//'</div>'
	);
	
	// 加载北风网底部广告
	/*$("#id-beifeng-pic").html('' +
		'<a href="/cpp/redirect.html?c_image1_0701-qudao" target="_blank">' +
			'<img src="' + cmsPath + '/uploads/ads/beifeng_728_80.jpg?v=' + window.cmsTempletsVer + '" alt="北风网">' +
		'</a>');*/

	/*// 加载#main顶部广告
	$("#ad-position").html('' +
		'<a class="left" href="/cpp/redirect.html?type=image_top" target="_blank"><img src="' + cmsPath + '/uploads/ads/beifeng_515_60.jpg?v=' + window.cmsTempletsVer + '" alt="北风网" /></a>' +
		'<a class="right" href="/cpp/html/2873.html" target="_blank"><img src="' + cmsPath + '/uploads/ads/dayi.gif?v=' + window.cmsTempletsVer + '" alt="C语言答疑" /></a>'
	);*/

	// 加载右下角广告
	/*(function(){
		var adRbStr = $('<div id="ad-rb">' +
    					'<span class="close">×</span>' +
    					'<div class="content">' +
	        				'<h3 class="title col-red">电脑？Out了！手机上也能学编程</h3>' +
        					'<p class="info">国内第一个手机编程助手！微信扫描二维码，关注公众号(码农宿舍)即可参与学习！</p>' +
        					'<div class="img"><img height="222" src="' + cmsTemplets + '/images/bianchengziliao.jpg' + '" /></div>' +
	        			'</div>' +
					'</div>');
		$("body").append(function(){
			adRbStr.find("span.close").click(function(){ adRbStr.hide(); });
			return adRbStr;
		});
	})();*/
	// 以下是另外一个版本
	/*(function(){
		var adRbStr = '<div id="ad-rb">' +
	    			  	'<div class="title">编程资料下载 <span class="right close">×</span></div>' +
	    				'<div class="content">' +
	        				'<h3><a class="col-red" href="/cpp/html/beifeng_card.html" target="_blank">超过2TB的编程资料免费下载</a></h3>' +
	        				'<p>北风网是一家专门从事在线教育的网站，拥有国内最多的<b class="col-red">视频</b>资源，包括C/C++、Java、IOS、Android等。C语言中文网有幸获得北风网的学习卡，面值<b class="col-red">200元</b>，免费赠送给大家。<a class="col-link" href="/cpp/html/beifeng_card.html" target="_blank">猛击这里查看详情&gt;&gt;</a></p>' +
	    				'</div>' +
					'</div>';
		var body = $("body");
		body.append(adRbStr);
		body.delegate("#ad-rb", "click", function(e){
			/close/.test(e.target.getAttribute("class")) && ( this.style.display = "none" );
		})
	})(); */

	//背景隔行换色
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

	// 加载代码高亮插件
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

    // 下拉菜单
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

    // 分享按钮
    (function(){
    	var shareWrap = $(".share");

    	// 百度快照的描述里面会出现分享的文字，改为动态加载
    	shareWrap.append('' + 
    		'<dt>分享到：</dt>' +
			'<dd class="qzone">QQ空间</dd>' +
			'<dd class="weibo">新浪微博</dd>' +
			'<dd class="tweibo">腾讯微博</dd>' +
			'<dd class="douban">豆瓣</dd>' +
			'<dd class="renren">人人网</dd>');

        // QQ空间
        shareWrap.delegate('.qzone', 'click', function(){
        	window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'+
        		'title=' + encodeURIComponent(shareParam.title) + '&'+
        		'desc=' + encodeURIComponent(shareParam.desc) + '&'+
        		'summary=' + encodeURIComponent(shareParam.summary_qzone) + '&'+
        		'url=' + shareParam.url + '&'+
        		'pics=' + encodeURIComponent(shareParam.pic_qzone), '_blank');
			return false;
        });

        // 新浪微博
        shareWrap.delegate('.weibo', 'click', function(){
        	window.open('http://v.t.sina.com.cn/share/share.php?'+
        		'title=' + encodeURIComponent(shareParam.desc) + '&'+
        		'url=' + shareParam.url + '&'+
        		'pic=' + shareParam.pic_tweibo, '_blank');
			return false;
        });

        // 腾讯微博
        shareWrap.delegate('.tweibo', 'click', function(){
        	window.open('http://v.t.qq.com/share/share.php?'+
        		'title=' + encodeURIComponent(shareParam.desc) + '&'+
        		'url=' + shareParam.url + '&'+
        		'pic=' + shareParam.pic_tweibo, '_blank');
			return false;
        });

        // 豆瓣
        shareWrap.delegate('.douban', 'click', function(){
        	window.open('http://www.douban.com/share/service?'+
        		'name=' + encodeURIComponent(shareParam.title) + '&'+
        		'text=' + encodeURIComponent(shareParam.summary_douban) + '&'+
        		'sel=' + encodeURIComponent(shareParam.desc) + '&'+
        		'href=' + shareParam.url + '&'+
        		'image=' + shareParam.pic_douban, '_blank');
			return false;
        });

        // 人人
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

    // 静态目录，并为当前章节着色
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

	// 上一节、下一节按钮
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

	// 为文章内的图片添加链接
	$("#art-body img").click(function(){
		window.open($(this).attr("src"));
	});

    // 加载多说插件
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
				'<li class="fudaoban"><a href="http://vip.biancheng.net/" target="_blank">C语言中文网VIP会员</a></li>'+
			'</ul>'
		);
    })();
});