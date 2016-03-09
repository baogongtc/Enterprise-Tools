var javaBooks = [];

function appendJavaBooks(name ,alimamaLink, amazonLink) {
    var book = new Book(name);
    book.alimamaLink = alimamaLink;
    book.amazonLink = amazonLink;
    javaBooks.push(book);
}


function shouldDisplayJavaBook() {
   
	return isSelfRefer() && isDesktop();
}

function makeJavaBookPrefix() {
	return '<section><h1>Java经典</h1>';
}

function makeJavaBookSuffix() {
	return '</section>';
}

function isJavaBookInDebug() {
	return false;
}

function makeJavaBookData() {
    var data = {};

    var name, alimamaLink, amazonLink;
    name = 'Java Generics and Collections';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Dn%2FqUs0mF640cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67urP7bvYNzTdkJM98MoZX0jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYY1K4SJwzmLi1UlN51eyT7c3Hxj0MD9aBnYpJM9%2FotbxsYOae24fhW0&pvid=10_114.66.9.98_182_1453871049429';
    amazonLink  = 'http://www.amazon.cn/gp/product/0596527756/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=0596527756&linkCode=as2&tag=droidyue-23';
    appendJavaBooks(name, alimamaLink, amazonLink);

    name = 'Java并发编程实战';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DEEW6gEkdE30cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67nb8uaKtnK%2FYD%2FHdSRms18jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYaxN5dP0P2%2BucaU8rDUeBFLJ66LEwS9V3XtWIEkXWaBjHEqY%2Bakgpmw&pvid=10_114.66.9.98_328_1453871112222';
    amazonLink = 'http://www.amazon.cn/gp/product/B0077K9XHW/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0077K9XHW&linkCode=as2&tag=droidyue-23';
    appendJavaBooks(name, alimamaLink, amazonLink);

    name = 'Effective Java';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DTSFhNuAerZ8cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67s7pk2Xa%2FEpxdgpT%2Fnt4ZAjM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0RgPRPfT%2BYCtbiK95USHFk8Yl7w3%2FA2kb&pvid=10_114.66.9.98_1558_1453871289897';
    amazonLink = 'http://www.amazon.cn/gp/product/B001PTGR52/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B001PTGR52&linkCode=as2&tag=droidyue-23';
    appendJavaBooks(name, alimamaLink, amazonLink);

    name = 'Java Puzzlers';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Dx4Q2O6J1iVccQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67s7pk2Xa%2FEpxP9LlJoUu0c7M3gYQjCL89vSdxyvKgR5IYpon8UCVSYY1K4SJwzmLi1UlN51eyT7cSqY4X5xJp3dz4KubrOlXXMYOae24fhW0&pvid=10_114.66.9.98_55933_1453871379796';
    amazonLink = 'http://www.amazon.cn/gp/product/032133678X/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=032133678X&linkCode=as2&tag=droidyue-23';
    appendJavaBooks(name, alimamaLink, amazonLink);


    name = 'Java编程思想';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DEUehAOwiHbscQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jkwwESea37AP9LlJoUu0c7M3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0un8y6hch%2F%2B42x1DdKGJVOcYl7w3%2FA2kb&pvid=10_114.66.9.98_364_1453871445708';
    amazonLink  = 'http://www.amazon.cn/gp/product/B0011F7WU4/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0011F7WU4&linkCode=as2&tag=droidyue-23';
    appendJavaBooks(name, alimamaLink, amazonLink);

    name = 'Java虚拟机精讲';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DAG8P0mzAMPIcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67iOAAZaKaTPG2VSL3ITNpk3M3gYQjCL89vSdxyvKgR5IYpon8UCVSYaxN5dP0P2%2BucaU8rDUeBFLHxuovqFhxk5wSj94HpuYanEqY%2Bakgpmw&pvid=10_114.66.9.98_331_1453871534274';
    amazonLink = 'http://www.amazon.cn/gp/product/B00VAM5ELM/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00VAM5ELM&linkCode=as2&tag=droidyue-23';
    appendJavaBooks(name, alimamaLink, amazonLink);

    name = 'Java性能优化权威指南';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DrPGCwmRXgiMcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67rjn%2BH%2BD96fjD%2FHdSRms18jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0YwHe9g3QE4Q%2BFMOKYh16G8YOae24fhW0&pvid=10_114.66.9.98_428509_1453871704116';
    amazonLink  = 'http://www.amazon.cn/gp/product/B00IOB0K1Q/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00IOB0K1Q&linkCode=as2&tag=droidyue-23';
    appendJavaBooks(name, alimamaLink, amazonLink);

    name = 'Java核心技术卷一';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DSS%2Btq3%2FdghgcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67qBcpozyM602UQTSx8a5hQfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0%2FJTX2VMUCHhSPU4K7o%2B6Q8YOae24fhW0&pvid=10_114.66.9.98_189_1453871862574';
    amazonLink  = 'http://www.amazon.cn/gp/product/B00G9KF4JC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00G9KF4JC&linkCode=as2&tag=droidyue-23';
    appendJavaBooks(name, alimamaLink, amazonLink);

    name =  'Java核心技术卷二';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DuFFKHBT8Y38cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67qkGpLNsEf7GUOZr0mLjusfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYaxN5dP0P2%2BucaU8rDUeBFLJ66LEwS9V3VZ6QmqurUAj3EqY%2Bakgpmw&pvid=10_114.66.9.98_1415_1453871952929';
    amazonLink  = 'http://www.amazon.cn/gp/product/B00IK7SM6O/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00IK7SM6O&linkCode=as2&tag=droidyue-23';
    appendJavaBooks(name, alimamaLink, amazonLink);

    name = '深入理解Java虚拟机';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Dp8F%2FUJtxu6gcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67k4koB5wwEVjtTN3K9waqqjM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0ky%2Bejj0XW8hI5%2FoRP2ukFMYOae24fhW0&pvid=10_114.66.9.98_96607_1453872090515';
    amazonLink  = 'http://www.amazon.cn/gp/product/B00D2ID4PK/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00D2ID4PK&linkCode=as2&tag=droidyue-23';
    appendJavaBooks(name, alimamaLink, amazonLink);

    name = 'Java程序员修炼之道';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DjQR3godsUY8cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67k4koB5wwEVjsUZsiWgXrvjM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0iuFrOtGBprRaRJSY2RCyZsYOae24fhW0&pvid=10_114.66.9.98_96160_1453872154977';
    amazonLink = 'http://www.amazon.cn/gp/product/B00E0D2OX4/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00E0D2OX4&linkCode=as2&tag=droidyue-23';
	appendJavaBooks(name, alimamaLink, amazonLink);

    name = 'Java虚拟机规范(Java SE 7版)';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Dht0jfhOCKUIcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67liQkVxm11CU%2BvZA5LFGqMTM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0kTe9L8%2BivsruQ60x0I1%2FO8YOae24fhW0&pvid=10_114.66.9.98_332_1453872227452';
    amazonLink  = 'http://www.amazon.cn/gp/product/B00H1FXTNM/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00H1FXTNM&linkCode=as2&tag=droidyue-23';
	appendJavaBooks(name, alimamaLink, amazonLink);

    data = booksToJSON(javaBooks, LINK_TYPE_ALIMAMA);

    return data;
}

function displayJavaBook() {
    var data = makeJavaBookData();
    data = sortJsonObject(data);
	displaySection(shouldDisplayJavaBook(), isJavaBookInDebug(),   data,    makeJavaBookPrefix(),    makeJavaBookSuffix(), 'java_book'  );
}