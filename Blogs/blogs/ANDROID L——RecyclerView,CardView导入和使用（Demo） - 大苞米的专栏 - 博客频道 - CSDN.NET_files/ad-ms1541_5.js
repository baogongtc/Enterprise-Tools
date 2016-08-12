//bbs 
var cloudad_type5 = 'ms1541_5';
var cloudad_urls5 = [
'http://ad.csdn.net/adsrc/langchao-2lu-bbs-homepage-banner-760-90-30k.swf'
];
var cloudad_clks5 = [
''
];

var can_swf5 = (function () {
    if (document.all) swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    else if (navigator.plugins) swf = navigator.plugins["Shockwave Flash"];
    return !!swf;
})();

function cloudad_show5() {
    var rd = Math.random();
    var ad_url, log_url;
    if (rd < 0.72 && can_swf5) {
        ad_url = cloudad_urls5[0];

        log_url = 'http://ad.csdn.net/log.ashx';
        log_url += '?t=view&adtype=' + cloudad_type5 + '&adurl=' + encodeURIComponent(ad_url);
        cloudad_doRequest5(log_url, true);
    }
    if (rd < 0) {
        ad_url = cloudad_clks5[0];

        log_url = 'http://ad.csdn.net/log.ashx';
        log_url += '?t=click&adtype=' + cloudad_type5 + '&adurl=' + encodeURIComponent(ad_url);
        cloudad_doRequest5(log_url, true);
    }
}

function cloudad_doRequest5(url, useFrm) {
    var e = document.createElement(useFrm ? "iframe" : "img");

    e.style.width = "1px";
    e.style.height = "1px";
    e.style.position = "absolute";
    e.style.visibility = "hidden";

    if (url.indexOf('?') > 0) url += '&r_m=';
    else url += '?r_m=';
    url += new Date().getMilliseconds();
    e.src = url;

    document.body.appendChild(e);
}

setTimeout(function () {
    cloudad_show5();
}, 1000);
