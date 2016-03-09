function shouldDisplayBlogRoll() {

    return true ;
}

function makeBlogRollPrefix() {
    return '<section><h1>Blogrolls</h1>';
}

function makeBlogRollSuffix() {
    return '</section>';
}

function isBlogRollInDebug() {
    return false;
}

function appendHongxin(data) {
    if (isDesktop()) {
        if (isChrome()){
            data['红杏，为程序员专门打造的上网加速利器，你懂得！'] = 'http://honx.in/_VaJXxWf4PSiXm2ck';
        }
    }
	return data;
}


var sDroidBlogRollClass = "droid_blogroll_class";


function makeBlogRollDataSource() {
    var data = {};
        
    data['技术小黑屋血拼'] = 'http://droidyue.com/buy/';
    data['友情链接'] = 'http://droidyue.com/links/';
    
    data['极客学院全套视频下载'] = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Dw1gM%2F0jziq8cQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67vBvn1DNBijIP9LlJoUu0c7M3gYQjCL89vSdxyvKgR5IYpon8UCVSYYlgUYtDAYC5tdn%2FynGeduACFIsh0pu9ZHWc2yMe80FKMYOae24fhW0&pvid=10_114.66.9.98_4328_1456224291183';   
    
    
    //data['极客开源T恤'] = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DVl2ocTpH0WwcQipKwQzePOeEDrYVVa64Qih%2F7PxfOKS5VBFTL4hn2dQBlzdZ0rk2P5bxJy%2F%2Fu7jM3gYQjCL89qULerPwKfMIwRKDNIG1Ob78gzOkuNPsG%2B%2BfxGyA7kO2HcXyKGoE7hfBA6L871fwHMYl7w3%2FA2kb';

    
    
    data['说走就走的Airbnb旅行基金'] = 'http://zh.airbnb.com/c/awallace36?s=8';
   
    data['XBrowser-极简快速的浏览器'] = 'http://www.xbext.com';

    data['网络加速器，用来做啥你懂得'] = 'http://www.pgfastss.org/in/aqjkzq9mw3';
    
    //data['近乎免费的静态云存储，七牛'] = 'http://droidredirect.sinaapp.com/qiniu_redirect.php';
 
	
    data['零散时间写个应用，够付房租了'] = 'https://www.youmi.net/account/register?r=OTU2Ng==';
    
    data['新网虚拟云主机，6折优惠'] = 'http://www.xinnet.com/virtualhost/virtualhost2.html?rebatecode=RPYPO4B28A4U';
    
    
    //data['我的第一本计算机启蒙书籍：《疯狂的程序员》'] = 'http://www.amazon.cn/gp/product/B008QM2476/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008QM2476&linkCode=as2&tag=droidyue-23';

    //data = appendHongxin(data);
    
    data['「新浪云福利」1000云豆免费领！低成本、免运维、灵活、安全稳定'] = 'http://t.cn/R40yLwL';
    
    data = sortJsonObject(data);
    
    return data;












}


