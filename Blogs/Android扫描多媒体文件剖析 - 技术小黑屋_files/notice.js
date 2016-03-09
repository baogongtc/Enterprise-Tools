function shouldDisplayNotice() {
    return true; 
}

function makeNoticePrefix() {
	return '<section><h1>技术小黑板</h1>';
}

function makeNoticeSuffix() {
	return '</section>';
}

function isNoticeInDebug() {
	return false; 
}


function makeNoticeDataSource() {
    var data = {};
    //data['一个卖苹果的程序猿'] = 'http://dwz.cn/28eB5g';
    //data['Android Studio 团队收集反馈和意见，快来吐槽吧'] = 'https://www.gdgdocs.org/forms/d/13P9ZgqYdTANBr5ou8TT7jJ4FiixG8JFrPf0BfZXCBRE/viewform?ref=droidyue_com';
    
    //data['辞旧迎新，为即将过去的2015做个总结吧'] = 'https://github.com/winter-fall/Bye2015Hi2016';
	return data;
}