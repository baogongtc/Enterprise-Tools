!function(){function e(e){return"[object Function]"===Object.prototype.toString.call(e)}function o(o,r,c){if(a[o])throw new Error("Module "+o+" has been defined already.");e(r)&&(c=r),a[o]={factory:c,inited:!1,exports:null}}function r(o){var r,n,t,p;if(r=a[o],n={},t={exports:{}},!e(r.factory))throw new Error("Module "+o+" has no factory.");if(p=r.factory.call(void 0,c,n,t),void 0!==p)r.exports=p;else if(t.hasOwnProperty("exports")&&"object"==typeof t.exports&&t.exports instanceof Object==!0){var i,d=!1;for(i in t.exports)t.exports.hasOwnProperty(i)&&(d=!0);d===!1?r.exports=n:r.exports=t.exports}else r.exports=t.exports;r.inited=!0}function c(e){var o;if(o=a[e],!o)throw new Error("Module "+e+" is not defined.");return o.inited===!1&&r(e),o.exports}var a={};o("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/wechat-bind/wechat-bind.js",function(e,o,r){window.changyan.api.ready(function(o){var r=o.util.jquery,c=o.util._,a=(o.util.cookiejs,e("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/wechat-bind/cy-qrcode.js")),n={inPageBind:function(){a.init()},outPageBind:function(){a.mainInit()},commentBind:function(){},login:function(){}};o.event.listen("changyan:submit",function(e,a){o.getUserInfo(function(e){14!==e.platform_id&&window.setTimeout(function(){r.ajax({url:"http://lab.changyan.sohu.com/api/weixin/userbind_state",data:{sid:e.user_id},dataType:"jsonp",success:function(e){if(0===e.error_code){var a="changyan"+Math.floor(1e3*Math.random()*1e3*1e3),n=o.getConfig("api")+"debug/cookie";r.ajax({url:n,dataType:"jsonp",jsonpCallback:a,success:function(e){for(var a=e.cookie.split(";"),n=0;n<a.length;n++)a[n]=r.trim(a[n]);var t="debug_ignore_qr_code=true";c.indexOf(a,t)<0&&o.wechatBind.outPageBind()}})}}})},500)})}),window.changyan.wechatOperate=n})}),o("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/wechat-bind/cy-qrcode.js",function(e,o,r){window.changyan.api.ready(function(c){var a=c.util.jquery,n=(c.util._,c.util.velocityjs),t=c.util.dialog;e("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/wechat-bind/cy-qrcode.css");var p,i={},d={getQrcode:"http://lab.changyan.sohu.com/api/weixin/qrcode",proxyQrcode:"http://lab.changyan.sohu.com/api/weixin/proxy/qrcode",connectUrl:"http://lab.changyan.sohu.com/api/weixin/long/connection"},s=function(){var e=c.getConfig("base"),o=function(){var e="changyan"+Math.floor(1e3*Math.random()*1e3*1e3),o=c.getConfig("api")+"debug/cookie",r=new Date,n=new Date(r.setMonth((new Date).getMonth()+2)),t="debug_ignore_qr_code=true; expires="+n+";";a.ajax({url:o,data:{setCookie:t},dataType:"jsonp",jsonpCallback:e,success:function(e){}})},r=function(){var e=u(),r={type:"bind",dom:"page"};e(r,"",function(e){a('div[node-type="module-wechat-page-qr-code"]').remove()},function(){alert("绑定失败")},!0),i.page.delegate('span[node-type="qr-code-close"]',"click",function(){window.clearTimeout(p),a('span[node-type="ignore-select-box"]').hasClass("qr-code-ignore-select-checked")&&o(),a(this).parents('div[node-type="module-wechat-page-qr-code"]').remove(),longPull.abort()}),i.page.delegate('span[node-type="ignore-select-box"]',"click",function(){var e=a(this);e.hasClass("qr-code-ignore-select-checked")?e.removeClass("qr-code-ignore-select-checked"):e.addClass("qr-code-ignore-select-checked")})};window.longPull?r():a.getScript(e+"/mdevp/extensions/longloop/002/longloop.js",function(){r()})},l=function(){var e=c.getConfig("base")+"mdevp/extensions/wechat-bind/009/image/";p=window.setTimeout(function(){a('img[node-type="code-img"]').attr("src",e+"code-timeout.jpg")},12e4)},u=function(){var o=e("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/wechat-bind/cy-qrcode.html.js"),r=g(d.getQrcode),t=h(d.connectUrl);return function(e,p,s,u){var g=function(r){var p=a.browser.version;"7.0"===p?e.src=d.proxyQrcode+"?url="+r.url:e.src=r.url;var g=n.render(o,e);i.page.append(g),l();var h={};h.type=e.type,h.sceneId=r.sceneId,h.client_id=c.getAppid(),t(h,s,u)},u=function(){r()};r("",g,u)}},g=function(e){return function(o,r,c){a.ajax({cache:!1,dataType:"jsonp",timeout:3e4,type:"GET",url:e,data:o,success:r,error:c})}},h=function(e){return function(o,r,c){var a=e;a+="?";for(var n in o)a+="&"+n+"="+o[n];longPull.connect(a,r,c)}},m=function(){i.page=a('div[node-type="cy-user-page-main"]'),i.editIcon=i.page.find(".cy-user-edit")};o.init=function(){m(),s()};var w=function(){i.page=a("#SOHUCS #SOHU_MAIN")},q=function(){var e=function(){var e="changyan"+Math.floor(1e3*Math.random()*1e3*1e3),o=c.getConfig("api")+"debug/cookie",r=new Date,n=new Date(r.setMonth((new Date).getMonth()+2)),t="debug_ignore_qr_code=true; expires="+n+";";a.ajax({url:o,data:{setCookie:t},dataType:"jsonp",jsonpCallback:e,success:function(e){}})};a('span[node-type="qr-code-close"]').click(function(){window.clearTimeout(p),a('span[node-type="ignore-select-box"]').hasClass("qr-code-ignore-select-checked")&&e(),t.close(),longPull.abort()}),a('span[node-type="ignore-select-box"]').click(function(){var e=a(this);e.hasClass("qr-code-ignore-select-checked")?e.removeClass("qr-code-ignore-select-checked"):e.addClass("qr-code-ignore-select-checked")}),a(".changyan-overlay").one("click",function(){window.clearTimeout(p),a('span[node-type="ignore-select-box"]').hasClass("qr-code-ignore-select-checked")&&e()})},y=function(){var o=e("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/wechat-bind/cy-qrcode.html.js"),r=g(d.getQrcode),p=h(d.connectUrl);return function(e,i,s,u){var g=function(r){var i=a.browser.version;"7.0"===i?e.src=d.proxyQrcode+"?url="+r.url:e.src=r.url;var g=n.render(o,e);t.show(g),l(),q();var h={};h.type=e.type,h.sceneId=r.sceneId,h.client_id=c.getAppid(),p(h,s,u)},u=function(){r()};r("",g,u)}};o.mainInit=function(){w();var e=c.getConfig("base"),o=function(){var e=y(),o={type:"bind",dom:"main"};e(o,"",function(e){t.close()},function(){alert("绑定失败")})};window.longPull?o():a.getScript(e+"/mdevp/extensions/longloop/002/longloop.js",function(){o()})},r.exports=o})}),o("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/wechat-bind/cy-qrcode.css",function(e,o,r){var c=".cy-user-page-main .module-wechat-page-qr-code{height:100%;width:100%;position:absolute;top:0}.cy-user-page-main .module-wechat-page-qr-code .qr-code-mask{width:100%;height:100%;position:absolute;background:#000;opacity:.6;filter:alpha(opacity=60);top:0;left:0;display:inline;z-index:1000}#SOHUCS #SOHU_MAIN .module-wechat-qr-code{width:300px;height:375px}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper{width:300px;height:375px;background:url(//changyan.sohu.com/mdevp/extensions/wechat-bind/009/image/wechat-bg.png);border-radius:10px;overflow:hidden}.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper{position:absolute;top:36%;left:50%;margin:-187.5px 0 0 -150px;z-index:1001}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-logo-wrapper,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-logo-wrapper{width:100%;height:38px;margin:28px 0 0;text-align:center}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-logo-wrapper .qr-code-logo,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-logo-wrapper .qr-code-logo{width:56px;height:38px;display:inline-block;*display:inline;*zoom:1;background:url(//changyan.sohu.com/mdevp/extensions/wechat-bind/009/image/logo.png) no-repeat}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-type-wrapper,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-type-wrapper{width:100%;margin:15px 0 0;text-align:center}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-type-wrapper .qr-code-type-big,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-type-wrapper .qr-code-type-big{font-size:18px;font-family:'Microsoft YaHei';text-align:center;margin:0;line-height:24px}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-type-wrapper .qr-code-type-small,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-type-wrapper .qr-code-type-small{font-size:12px;margin:6px 0 0;font-family:'Microsoft YaHei';text-align:center}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-type-wrapper .qr-code-img,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-type-wrapper .qr-code-img{width:190px;height:190px;margin:8px 0 0}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-type-wrapper .qr-code-text,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-type-wrapper .qr-code-text{font-size:14px;font-family:'Microsoft YaHei';margin:6px 0 0;text-align:center;color:#bababa}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-close,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-close{width:12px;height:12px;display:inline-block;*display:inline;*zoom:1;background:url(//changyan.sohu.com/mdevp/extensions/wechat-bind/009/image/close.png) no-repeat;cursor:pointer;position:absolute;right:16px;top:16px}.cy-user-page-main .module-wechat-page-qr-code .module-qrcode-result{width:300px;height:110px;position:absolute;top:50%;left:50%;margin:-55px 0 0 -150px;background-color:#fff;border-radius:10px;z-index:1001}.cy-user-page-main .module-wechat-page-qr-code .module-qrcode-result .cy-result-icon-wrapper{width:100%;text-align:center}.cy-user-page-main .module-wechat-page-qr-code .module-qrcode-result .cy-result-icon-wrapper .cy-result-icon{width:40px;height:40px;display:inline-block;*display:inline;*zoom:1;margin:19px 0 0}.cy-user-page-main .module-wechat-page-qr-code .module-qrcode-result .cy-result-icon-wrapper .result-icon-delete-ok{background:url(//changyan.sohu.com/mdevp/extensions/wechat-bind/009/image/delete-ok.png) no-repeat}.cy-user-page-main .module-wechat-page-qr-code .module-qrcode-result .cy-result-icon-wrapper .result-icon-appeal-submit{background:url(//changyan.sohu.com/mdevp/extensions/wechat-bind/009/image/appeal-submit.png) no-repeat}.cy-user-page-main .module-wechat-page-qr-code .module-qrcode-result .cy-result-icon-wrapper .result-icon-appeal-reject{background:url(//changyan.sohu.com/mdevp/extensions/wechat-bind/009/image/appeal-reject.png) no-repeat}.cy-user-page-main .module-wechat-page-qr-code .module-qrcode-result .cy-result-text{font-size:16px;font-family:'Microsoft YaHei';margin:16px 0 0;text-align:center}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-ignore,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-ignore{margin:2px 15px 0 0;float:right;line-height:16px}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-ignore .qr-code-ignore-text,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-ignore .qr-code-ignore-text{font-size:12px;font-family:'Microsoft YaHei';color:#bababa;margin:0 6px 0 0}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-ignore .qr-code-ignore-select,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-ignore .qr-code-ignore-select{width:14px;height:14px;display:inline-block;*display:inline;*zoom:1;background:url(//changyan.sohu.com/mdevp/extensions/wechat-bind/009/image/checkbox.png) no-repeat;vertical-align:-2px;*vertical-align:0;cursor:pointer}#SOHUCS #SOHU_MAIN .module-wechat-qr-code .qr-code-wrapper .qr-code-ignore .qr-code-ignore-select-checked,.cy-user-page-main .module-wechat-page-qr-code .qr-code-wrapper .qr-code-ignore .qr-code-ignore-select-checked{background:url(//changyan.sohu.com/mdevp/extensions/wechat-bind/009/image/checkbox-checked.png) no-repeat}",a=window.document,n=a.createElement("style");n.setAttribute("type","text/css"),a.all?n.styleSheet.cssText=c:n.innerHTML=c,a.getElementsByTagName("head").item(0).appendChild(n)}),o("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/wechat-bind/cy-qrcode.html.js",function(e,o,r){"use strict";var c;return c=[],c.push("#if ($!{dom} == 'main')"),c.push('<div class="module-wechat-qr-code" node-type="module-wechat-qr-code">'),c.push('    <div class="qr-code-wrapper" node-type="qr-code-wrapper">'),c.push('        <div class="qr-code-logo-wrapper">'),c.push('            <span class="qr-code-logo"></span>'),c.push("        </div>"),c.push('        <div class="qr-code-type-wrapper">'),c.push('            <p class="qr-code-type-big">微信扫一扫<br>网友回复，即时知道！</p>'),c.push('            <!-- <p class="qr-code-type-small">（首次操作需关注）</p> -->'),c.push('            <img node-type="code-img" src="$!{src}" alt="" class="qr-code-img" />'),c.push('            <p class="qr-code-text">畅言微信服务号</p>'),c.push('            <div class="qr-code-ignore">'),c.push('                <span class="qr-code-ignore-text">不再提醒</span><span node-type="ignore-select-box" class="qr-code-ignore-select"></span>'),c.push("            </div>"),c.push("        </div>"),c.push('        <span class="qr-code-close" node-type="qr-code-close"></span>'),c.push("    </div>"),c.push("</div>"),c.push("#else"),c.push('<div class="module-wechat-page-qr-code" node-type="module-wechat-page-qr-code">'),c.push('    <div class="qr-code-mask"></div>'),c.push('    <div class="qr-code-wrapper" node-type="qr-code-wrapper">'),c.push('        <div class="qr-code-logo-wrapper">'),c.push('            <span class="qr-code-logo"></span>'),c.push("        </div>"),c.push('        <div class="qr-code-type-wrapper">'),c.push('            <p class="qr-code-type-big">微信扫一扫<br>及时收到官方答复</p>'),c.push('            <!-- <p class="qr-code-type-small">（首次操作需关注）</p> -->'),c.push('            <img node-type="code-img" src="$!{src}" alt="" class="qr-code-img" />'),c.push('            <p class="qr-code-text">畅言微信服务号</p>'),c.push('            <!-- <div class="qr-code-ignore">'),c.push('                <span class="qr-code-ignore-text">不再提醒</span><span node-type="ignore-select-box" class="qr-code-ignore-select"></span>'),c.push("            </div> -->"),c.push("        </div>"),c.push('        <span class="qr-code-close" node-type="qr-code-close"></span>'),c.push("    </div>"),c.push("</div>"),c.push("#end"),c.join("\n")}),r("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/wechat-bind/wechat-bind.js")}();