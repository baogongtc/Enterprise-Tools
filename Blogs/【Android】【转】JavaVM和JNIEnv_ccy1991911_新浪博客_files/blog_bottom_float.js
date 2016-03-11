'use strict';
// var sinaadToolkit;
// var sinaadsRenderHandler;
sinaadsRenderHandler = window.sinaadsRenderHandler || {};
sinaadsRenderHandler.blogbf = function (element, width, height, content, config) {

    function handler(config) {
        var CLOSE_NORMAL_BTN = "http://d1.sina.com.cn/litong/zhitou/sinaads/60x18_2_close.gif",
            CLOSE_ZINDEX = 11010;
        var isClosed = false;
        var container = new sinaadToolkit.Box({
            width : config.width,
            height : config.height,
            position : 'none bottom',
            autoShow : 0,
            follow : true,
            zIndex : 10501
        });
        container.getMain().style.cssText += ';transition:all .3s;-webkit;-webkit-transition: all .3s;';

        var mainContent = sinaadToolkit.ad.createHTML(
            config.type,
            config.src,
            config.width,
            config.height,
            config.link,
            config.monitor
        //澧炲姞涓€涓伄缃╁眰
        );

        var closeBtn = document.createElement('div');
        closeBtn.style.cssText = 'background:url(' + CLOSE_NORMAL_BTN + ') left top no-repeat;cursor:pointer;z-index:' +
            CLOSE_ZINDEX + ';position:absolute;width:60px;height:18px;right:7px;top:1px;';

        var mainWrap = document.createElement('div');
        mainWrap.innerHTML = mainContent;
        container.getMain().appendChild(mainWrap);
        container.getMain().appendChild(closeBtn);

        sinaadToolkit.event.on(closeBtn, 'click', function () {
            container.hide();
            timer && clearInterval(timer);
            isClosed = true;
            //鍏抽棴涔嬪悗 15鍒嗛挓涓嶅啀鏄剧ず銆侳requenceController.disable娌℃湁鏆撮湶鍙傛暟銆�
            sinaadToolkit.storage.set(sinaadsRFC.uid + config.pdps + '_disabled', 1, 15 * 60 * 1000);
        });

        sinaadToolkit.event.on(window, 'scroll', function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > config.top) {
                !isClosed && container.show();
            } else {
                !isClosed && container.hide();
            }
        });
        
        function getDivElementsByClassName (clz) {
            var divs =  document.getElementsByTagName('div');
            var reg = new RegExp('\\b' + clz + '\\b');
            for (var i = 0; i < divs.length; i++) {
                if (reg.test(divs[i].className)) {
                    return divs[i];
                }
            }
            return null;
        }
        
        function detectAd () {//'blogrecommend' 'PDPS000000025956'
            var popAd = document.getElementById('blogrecommend') || getDivElementsByClassName('blogreco') || getDivElementsByClassName('popBox');
            var pdpsAd = document.getElementById('PDPS000000025956');
            var remain;
            if ((popAd) || (pdpsAd && pdpsAd.clientWidth !== 0)) {
                remain = document.body.clientWidth - 950;
                container.getMain().style.left = Math.floor(remain / 2) + 'px';
                container.position = Math.floor(remain / 2) + ' bottom';
            } else {
                    /**
                     * 灞呬腑搴曟诞骞垮憡锛孖E涓嬶紝margin auto鐨勬柟寮忎笉璧蜂綔鐢�
                     * 鍙﹁container鑷韩鏈塼imer閲嶇疆position锛岄渶瑕佸悓鏃朵慨鏀筽osition灞炴€�
                     */
                    remain = document.body.clientWidth - config.width;
                    container.getMain().style.left = Math.floor(remain / 2) + 'px';
                    container.position = Math.floor(remain / 2) + ' bottom';
            }
        }

        var timer = setInterval(detectAd, 1000);
        detectAd();
    
    }

    content = content[0];
    var data = {
        width: width || 640,
        height: height || 90,
        src: content.src,
        link: content.link,
        type: content.type,
        monitor: content.monitor || [],
        top : config.sinaads_blogdf_top || 600, //婊氬姩鍒皌op鍊兼椂鏄剧ず
        pdps: config.sinaads_ad_pdps
    };


    handler(data);

};