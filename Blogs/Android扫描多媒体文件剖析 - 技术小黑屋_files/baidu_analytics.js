function bindBaiduEvent(className) {
	var elements = document.getElementsByClassName(className);
	var element;
	for (var index in elements) {
		element = elements[index];
		var innerText = element.innerText;
		if (!innerText) {
			innerText = className;
		}
		//console.info('bindBaiduEvent ' + innerText);
		element.onclick = function() {
            //console.info('className=' + this.className);
            if (isSelfRefer()) {
				trackEvent( 'droid_section', this.className, this.innerText + '_' + this.className);
            } else if (!this.href.contains('droidyue.com'))  {
            	trackEvent( 'jump_first', this.className, this.innerText + '_' + this.className);
            }
		};
	}
}


var sDroidBlogAdClass = 'droid_blog_ad_class';
var sDroidRandomRecommendClass = 'droid_random_recommend_class';
bindBaiduEvent(sDroidBestPostsClass);
bindBaiduEvent(sDroidBlogAdClass);
bindBaiduEvent(sDroidBlogRollClass);
bindBaiduEvent(sDroidCommonBookClass);
bindBaiduEvent(sDroidProgramBookClass);
bindBaiduEvent(sDroidRandomBestPostsClass);
bindBaiduEvent(sDroidRandomRecommendClass);
bindBaiduEvent('post_inner_book');
bindBaiduEvent('notice');
bindBaiduEvent('pst_banr');
bindBaiduEvent('java_book');
bindBaiduEvent('android_book');
bindBaiduEvent('kouzhao_ref');
bindBaiduEvent('no_boarder_class');



if (sIsWeixinBrowser) {
	trackEvent('wechat', 'wechat', 'wechat_' + document.title);
}

trackEvent('adblcok', 'adblock', 'adblock_' + adblockEnabled);

var currentHost = getHost(document.URL);
if (!currentHost.contains('droidyue.com')) {
	if (!currentHost.contains("127.0.0.1")) {
		location.href = 'http://droidyue.com';
	}
}
