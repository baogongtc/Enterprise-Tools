function shouldDisplayFriendLinks() {
    return true ;
}

function makeFriendLinksPrefix() {
    return '<section><h1>友情链接</h1>';
}

function makeFriendLinksSuffix() {
    return '</section>';
}

function isFriendLinksInDebug() {
    return false;
}


var sDroidFriendLinksClass = "friendlinks_class";


function makeFriendLinksDataSource() {
    var data = {};
    
    data['刚刚在线-分享iOS开发技术经验的自媒体网站'] = 'http://www.superqq.com/';
    
    data['程序员头条'] = 'http://www.iswifting.com/';
    
    data['麦子学院'] = 'http://www.maiziedu.com/group/';

    data['某学姐的技术成长之路'] = 'http://wangxinghe.me/';
    
    data = sortJsonObject(data);
    
    return data;

}


displaySection(shouldDisplayFriendLinks(), isFriendLinksInDebug(), makeFriendLinksDataSource(), makeFriendLinksPrefix(),makeFriendLinksSuffix() , sDroidFriendLinksClass)
