var androidBooks = [];
function appendAndroidBooks(name, alimamaLink, amazonLink) {
    var book = new Book(name);
    book.alimamaLink = alimamaLink;
    book.amazonLink = amazonLink;
    androidBooks.push(book);
}


function shouldDisplayAndroidBook() {
   
	return isSelfRefer() && isDesktop();
}

function makeAndroidBookPrefix() {
	return '<section><h1>Android推荐书籍</h1>';
}

function makeAndroidBookSuffix() {
	return '</section>';
}

function isAndroidBookInDebug() {
	return false;
}

function makeAndroidBookData() {
    var name,alimamaLink, amazonLink;
    name = 'Android群英传';
    amazonLink = 'http://www.amazon.cn/gp/product/B01481RAA4/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B01481RAA4&linkCode=as2&tag=droidyue-23';
    alimamaLink = "http://s.click.taobao.com/t?e=m%3D2%26s%3DOLskpY4uQl8cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67kwkyV63lbuBUQTSx8a5hQfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYaxN5dP0P2%2BucaU8rDUeBFL7o%2FT9ezTWNXR6xRTJXtwRHEqY%2Bakgpmw&pvid=10_114.66.9.98_1507_1453869833345";
    appendAndroidBooks(name, alimamaLink, amazonLink);

    name = 'Android开发艺术探索';
    amazonLink = 'http://www.amazon.cn/gp/product/B014HV1X3K/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B014HV1X3K&linkCode=as2&tag=droidyue-23';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DMwNURKwd6tQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67mP4sinE%2FkfRDOz%2BQ0BmwbzM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpij7GGOspgKdHknUnebSXVYE6svWkNC8CMXEqY%2Bakgpmw&pvid=10_114.66.9.98_327_1453870012370';
    appendAndroidBooks(name, alimamaLink, amazonLink);

    name =  'Android源码设计模式解析与实战';
    amazonLink = 'http://www.amazon.cn/gp/product/B0176QDPUW/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0176QDPUW&linkCode=as2&tag=droidyue-23';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D37CEuu1rf5AcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67uXukn6%2BcEmaxqmPbz6xcifM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpij7GGOspgKdHXKimlLCKX8cckB294sFG93EqY%2Bakgpmw&pvid=10_114.66.9.98_1452_1453870113410';
    appendAndroidBooks(name, alimamaLink, amazonLink);

    name = 'Android应用性能优化';
    amazonLink = 'http://www.amazon.cn/gp/product/B009VV6EG8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B009VV6EG8&linkCode=as2&tag=droidyue-23';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DeUDQeLq00OgcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67pFjNh4tVPeSsUZsiWgXrvjM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0jZFuek3Se1wG4My84sZb4MYOae24fhW0&pvid=10_114.66.9.98_1472_1453870309940';
	appendAndroidBooks(name, alimamaLink,amazonLink);

    name = 'Android游戏开发详解';
    amazonLink = 'http://www.amazon.cn/gp/product/B011I34CHO/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B011I34CHO&linkCode=as2&tag=droidyue-23';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DuxJjhsBXnSMcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67rGN%2Fw6eIantwg1qdhPjl1TM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRRlqOMpl3L8TTEYtOvcaDwnCGFCzYOOqAQ&pvid=10_113.47.253.211_351_1454143664313';
    appendAndroidBooks(name, alimamaLink,amazonLink);


    name = '深入理解 Android';
    amazonLink = 'http://www.amazon.cn/gp/product/B013GB9WVM/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B013GB9WVM&linkCode=as2&tag=droidyue-23';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Db1Urs7AEhqscQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jS7bJcdoQyLHqN3CrDUeQbM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0nYpqC43bZ7hrOPjEzHYDGCGFCzYOOqAQ&pvid=10_121.19.197.199_173_1454902806120';
    appendAndroidBooks(name, alimamaLink, amazonLink);


    name = 'Android 软件安全与逆向分析';
    amazonLink = 'http://www.amazon.cn/gp/product/B00BMTVUGG/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00BMTVUGG&linkCode=as2&tag=droidyue-23';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DqQDDDPtfsqscQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67m2QS948rgyesmcYjUfw1pLM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0SH38WqzyPI979aybyTZnGsYOae24fhW0&pvid=10_121.19.197.199_268_1454902890510';
    appendAndroidBooks(name, alimamaLink, amazonLink);


    name = 'Android 安全架构深究';
    amazonLink = 'http://www.amazon.cn/gp/product/B01B38QVSC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B01B38QVSC&linkCode=as2&tag=droidyue-23';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DBXzbE53xEJccQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67rK1zOk7IHoZJdux29CqXYnM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0VlmRYrtQBl8KzcZTyByULSGFCzYOOqAQ&pvid=10_114.66.9.98_6182_1456807573478';
    appendAndroidBooks(name, alimamaLink, amazonLink);



    data = booksToJSON(androidBooks, LINK_TYPE_ALIMAMA);
    return data;
}

function displayAndroidBook() {
    var data = makeAndroidBookData();
    data = sortJsonObject(data);
	displaySection(shouldDisplayAndroidBook(), isAndroidBookInDebug(),   data,    makeAndroidBookPrefix(),    makeAndroidBookSuffix(), 'android_book'  );
}