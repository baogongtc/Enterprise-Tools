function getReferSites() {
	referSites = {};
	referSites["toutiao.io"] = "开发者头条";
    referSites["geek.csdn.net"] = "极客头条";
    referSites["top.jobbole.com"] = "伯乐在线头条";
    referSites["segmentfault.com"] = "segmentfault问答";
    referSites["ask.csdn.net"] = "CSDN问答社区";
    referSites["zhihu.com"] = "知乎";
    referSites["sdk.tools.sinaapp.com"] = "SAE测试";
    referSites["www.nowcoder.com"] = "牛客网";
    referSites["bbs.csdn.net"] = "CSDN论坛";
    referSites['127.0.0.1:4000'] = "本地测试"; 
    referSites['blogread.cn'] = "技术头条";
    referSites['news.dbanotes.net'] = 'Startup News';
    referSites['gold.xitu.io'] = '稀土掘金';
    
    return referSites;
}
        
        
function writeVoteTips(referHost, websiteName) {
	var output = "如果我的文章对你有帮助，请在引荐网站  <font color='#FF0000' size='3'>" + websiteName + " </font> 为我 点赞 或分享传播，谢谢。";
    document.write(output);
}
        
        
function showVoteTips() {
	var referrer = document.referrer;
    //console.info("referrer=" + referrer);
    if (referrer) {
        var referHost = referrer.split('/')[2];
        //console.info("referHost=" + referHost);
        referSites = getReferSites();
        websiteName = referSites[referHost];
        if (websiteName) {
            writeVoteTips(referHost, websiteName);
        }   
	}
}

showVoteTips();