//bbs 
var cloudad_type6 = 'ms1542_6';
var cloudad_urls6 = [
'http://ad.csdn.net/adsrc/huawei-fusionsphere-q4-cloud-daohangtiaoxia-banner-960-90-30k-1016.swf'
];
var cloudad_clks6 = [
''
];

var can_swf6 = (function () {
    if (document.all) swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    else if (navigator.plugins) swf = navigator.plugins["Shockwave Flash"];
    return !!swf;
})();

function cloudad_show6() {
    var rd = Math.random();
    var ad_url, log_url;
    if (rd < 0.63 && can_swf6) {
        ad_url = cloudad_urls6[0];

        log_url = 'http://ad.csdn.net/log.ashx';
        log_url += '?t=view&adtype=' + cloudad_type6 + '&adurl=' + encodeURIComponent(ad_url);
        cloudad_doRequest6(log_url, true);
    }
    if (rd < 0) {
        ad_url = cloudad_clks6[0];

        log_url = 'http://ad.csdn.net/log.ashx';
        log_url += '?t=click&adtype=' + cloudad_type6 + '&adurl=' + encodeURIComponent(ad_url);
        cloudad_doRequest6(log_url, true);
    }
}

function cloudad_doRequest6(url, useFrm) {
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
    cloudad_show6();
}, 1000);
