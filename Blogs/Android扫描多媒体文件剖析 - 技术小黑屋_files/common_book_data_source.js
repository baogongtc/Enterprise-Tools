var commonBooks = [];
function appendCommonBooks(name, alimamaLink, amazonLink) {
	var book = new Book(name);
	book.alimamaLink = alimamaLink;
	book.amazonLink = amazonLink;
	commonBooks.push(book);
}


function shouldDisplayCommonBook() {
   
	return isSelfRefer() && isDesktop() ;
}

function makeCommonBookPrefix() {
	return '<section><h1>好书推荐</h1>';
}

function makeCommonBookSuffix() {
	return '</section>';
}

function isCommonBookInDebug() {
	return false;
}


var sDroidCommonBookClass = "droid_common_book_class";



function makeCommonBookDataSource() {
    var dataSource = {};
    var name, alimamaLink, amazonLink;
    
    name = '特斯拉 电气时代的开创者';
    amazonLink = 'http://www.amazon.cn/gp/product/B019YWGM1U/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B019YWGM1U&linkCode=as2&tag=droidyue-23';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DIp2qZpu1%2BrAcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67gC%2BL0wU%2FUmuWiFs%2FjHb%2BcjM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0d06VgVAab237WzOGNfoZnCGFCzYOOqAQ&pvid=10_14.130.193.128_256213_1453902898834';

    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '动物农场，不简单的政治童话寓言';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Ddd77xON47%2FUcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67nAwvOGS3w95kfkm8XrrgBvM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRRcxKpX6usgCTCHVzwSto4JsYOae24fhW0&pvid=10_14.130.193.128_329_1453903013589';
    amazonLink = 'http://www.amazon.cn/gp/product/B003TG14EI/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B003TG14EI&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);


    name = '人可以被毁灭，但不能被打败：褚时健传 ';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Df%2BveqZrpwhMcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67nAwvOGS3w95nwuRopoI2iPM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRR%2BRgaNJKEByB1N9mAjaSrmyGFCzYOOqAQ&pvid=10_14.130.193.128_460_1453903073499';
    amazonLink = 'http://www.amazon.cn/gp/product/B017SAZAD6/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B017SAZAD6&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '小王子';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DcCxei3zShsQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67r8Ji%2F3g%2FAf1P5bxJy%2F%2Fu7jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RTZ7K4MLE0ZBgFVE4hWZM0yGFCzYOOqAQ&pvid=10_14.130.193.128_362_1453903141845';
    amazonLink = 'http://www.amazon.cn/gp/product/B015IG72RO/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B015IG72RO&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    
    name = '摄影随笔:大国志';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DmwtTVhJMJoEcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67qIiPZSuJ6hq5jVt69nCuKfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpirZF5MciIRWjdYN%2B3tSFYkGIeDGW%2FBQJ9CGFCzYOOqAQ&pvid=10_14.130.193.128_1448_1453903201257';
    amazonLink = 'http://www.amazon.cn/gp/product/B017ILX3SE/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B017ILX3SE&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);


    name = '失控:全人类的最终命运和结局';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DDkyruyRyO0YcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67qIiPZSuJ6hqxeoNewupcd7M3gYQjCL89vSdxyvKgR5IYpon8UCVSYZr6zqHQCxwGIzedVGC84f8ta%2BjRR31AvowafMW35hH%2BXEqY%2Bakgpmw&pvid=10_14.130.193.128_96620_1453903256450';
    amazonLink = 'http://www.amazon.cn/gp/product/B004FPIHG0/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B004FPIHG0&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);


     name ='三体，亚洲首部雨果奖获奖作品';
     alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DqY0WzY40qjwcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67hDKtm5%2FWNBO%2BvZA5LFGqMTM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRR7BahFbipuu0E0UKwB0vs4MYOae24fhW0&pvid=10_14.130.193.128_354_1453903324204';
     amazonLink = 'http://www.amazon.cn/gp/product/B0012ZZ1W4/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0012ZZ1W4&linkCode=as2&tag=droidyue-23';
     appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '忏悔录：卢梭晚年自传';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DIRBqTcljfcEcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67hUpJAu1A4ws5jVt69nCuKfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYY%2FksPsr02I31kJMEkLC1uWvKAR%2FC%2BNaFhHov6rlXBrUXEqY%2Bakgpmw&pvid=10_14.130.193.128_1600_1453903498113';
    amazonLink = 'http://www.amazon.cn/gp/product/B004HKJI2K/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B004HKJI2K&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '刘伯温所著寓言集，郁离子';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DUIu7ZYZ%2F49QcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67t8p1KFhkxL1yqeBTj9FJSjM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEh6k6Sd8rn05Z8cO7an4BZ8Yl7w3%2FA2kb&pvid=10_14.130.193.128_446_1453903550188';
     amazonLink = 'http://www.amazon.cn/gp/product/B0015OD75K/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0015OD75K&linkCode=as2&tag=droidyue-23';
     appendCommonBooks(name, alimamaLink, amazonLink);


    name = '现代“日本学”开山之源，菊与刀';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DCzSjhYfMHHEcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67mMyVlXx4tTZByy0g7RzMQfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1ROA4vGFPwh%2BOO92SylFyCYSGFCzYOOqAQ&pvid=10_14.130.193.128_96200_1453903657646';
    amazonLink = 'http://www.amazon.cn/gp/product/B005HSLJWS/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B005HSLJWS&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);


    name = '启示录:打造用户喜爱的产品';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DcDBoAdySyxAcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67mMyVlXx4tTZQev46Oo1utTM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1Rb5Gyi%2FcNbdyS%2FMe9h5jn5iGFCzYOOqAQ&pvid=10_14.130.193.128_96140_1453903769219';
    amazonLink = 'http://www.amazon.cn/gp/product/B004Y4QWMS/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B004Y4QWMS&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
   name = '影响力';
   alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DHHUUWLGIKNwcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67nXbMWPJPzHxahEP0ZrOLIrM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RVcD8LONVpiIuXAAVqTepUyGFCzYOOqAQ&pvid=10_14.130.193.128_321_1453903842870';
   amazonLink = 'http://www.amazon.cn/gp/product/B0044KME2E/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0044KME2E&linkCode=as2&tag=droidyue-23';
   appendCommonBooks(name, alimamaLink, amazonLink);



	name = '乌合之众:大众心理研究';
	amazonLink = 'http://www.amazon.cn/gp/product/B0011B03QI/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0011B03QI&linkCode=as2&tag=droidyue-23';
	alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DuD8jzRO1XoQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67mAaBmhu34jRDOz%2BQ0BmwbzM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RZ8%2BP3m32l0LI%2BzJOaixofiGFCzYOOqAQ&pvid=10_14.130.193.128_275_1453903907095';
    appendCommonBooks(name, alimamaLink, amazonLink);

    
    name = '长尾理论';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DLiHwmV734X8cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67tI1qfCKIp%2Bwy4nB2TbTLwLM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RL%2B8ECuH4hfHqpkB%2BVtoXvXEqY%2Bakgpmw&pvid=10_14.130.193.128_1506_1453903997886';
    amazonLink = 'http://www.amazon.cn/gp/product/B008WY55EC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008WY55EC&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);


    name = '浪潮之巅';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DPsDJrEt8LSYcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67qGj3MK74qKabJxUEh8sgi%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc79ud%2BjcVxzvJ54DKkOEemnt%2BTJMuRWUaCGFCzYOOqAQ&pvid=10_14.130.193.128_1061_1453904127135';
    amazonLink= 'http://www.amazon.cn/gp/product/B00D73BJWK/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00D73BJWK&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '数学之美';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DOjePmd5JEXocQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67nxGttA%2Bf0Ei7LeyVIpD4ejM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RhCaiOGlKKtw4McjAFXybnSGFCzYOOqAQ&pvid=10_14.130.193.128_363_1453904198399';
    amazonLink = 'http://www.amazon.cn/gp/product/B00P6OJ09C/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00P6OJ09C&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
  
    name = '三言二拍';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DN68fKV1r9ygcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67nxGttA%2Bf0EiD%2FHdSRms18jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpinbk37uSSfnJAqUhkI8HnSYO1MLn%2F0tisCGFCzYOOqAQ&pvid=10_14.130.193.128_203_1453904249683';
    amazonLink = 'http://www.amazon.cn/gp/product/B00CW8P5WQ/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00CW8P5WQ&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '贞观政要';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DkalWzan2Q20cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67tNhP%2BcWxVEhNq%2BDna%2F8eQfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RnRHWt04QMykR%2BX14ZsINdyGFCzYOOqAQ&pvid=10_14.130.193.128_168591_1453904364365';
    amazonLink = 'http://www.amazon.cn/gp/product/B00K4SD2RG/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00K4SD2RG&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    

    name = '岛上书店';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DRrTBukAQFFAcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67uo8eYHvUtSyPkWZNjOK2CPM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLELRhqCZigODfqOVDOt%2BmH%2F8YOae24fhW0&pvid=10_14.130.193.128_436_1453904412738';
    amazonLink = 'http://www.amazon.cn/gp/product/B00VWVAFAG/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00VWVAFAG&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);



    name = '堂吉诃德';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DuPQ10XzhnEIcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67uo8eYHvUtSy8FptwqKhdbHM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZZln0vafkv4PQUt8KcWI2REVwYJ08YeQ3XTB3Vw4Ot0XEqY%2Bakgpmw&pvid=10_14.130.193.128_203_1453904479200';
    amazonLink = 'http://www.amazon.cn/gp/product/B004PYENZU/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B004PYENZU&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);


    name = '坂本龙马';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DGxWYbJNCkKAcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67iKZ23Z8KVLgxeoNewupcd7M3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1Rl2AY%2BAMgWT59Bi76LOad6nEqY%2Bakgpmw&pvid=10_14.130.193.128_428557_1453904551378';
    amazonLink = 'http://www.amazon.cn/gp/product/B0060RNIX8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0060RNIX8&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '孟子译注';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DrodC8%2BmXNbscQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67nxdX3pNStwG%2Bx%2FKLma%2BVNnM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RVcD8LONVpiLEf9ubK7WVzSGFCzYOOqAQ&pvid=10_14.130.193.128_1603_1453904626531';
    amazonLink = 'http://www.amazon.cn/gp/product/B008XFZJAK/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008XFZJAK&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '那时汉朝';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DGoRI8UvrD3ccQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67pk%2B6GXDZmIrrumJQoe%2FxcPM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RwdJZY8qJIq%2Fv9qvfcQTqmyGFCzYOOqAQ&pvid=10_14.130.193.128_177_1453904727315';
    amazonLink = 'http://www.amazon.cn/gp/product/B009P4P0P2/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B009P4P0P2&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '浮生六记';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DDTvtWj3eccQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67pk%2B6GXDZmIr18u9BjgaVz7M3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RQXrf59pl0X%2FbWdeBxMGVdSGFCzYOOqAQ&pvid=10_14.130.193.128_329_1453904783283';
    amazonLink = 'http://www.amazon.cn/gp/product/B001Q3LLUI/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B001Q3LLUI&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '向前一步';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D87vzMuZB3eocQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67pwnpw8CsqN6wSB8%2FImevIDM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRRtnbFK37%2FbmuKcjq%2BLvY4ZsYOae24fhW0&pvid=10_14.130.193.128_441_1453904844520';
    amazonLink = 'http://www.amazon.cn/gp/product/B00NFCPRRG/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00NFCPRRG&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '什么是数学';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D8sZBMUpOLrIcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67rcSMrByITkLz%2BnB8CFd%2BwLM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RWFV0LfpUPOcuf0EvEEcJlCGFCzYOOqAQ&pvid=10_14.130.193.128_459_1453904897926';
    amazonLink = 'http://www.amazon.cn/gp/product/B0073AART4/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0073AART4&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name =  '批判性思维工具';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DXT2mOxgv%2BnAcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67nV2TnVK5g%2FK7km9mWjOCUbM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RMnt%2FmoAvEtQiAnfwkeTLryGFCzYOOqAQ&pvid=10_14.130.193.128_169112_1453904965987';
    amazonLink = 'http://www.amazon.cn/gp/product/B00QPZARMA/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00QPZARMA&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '血腥的盛唐';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D0jDlbWjSAuQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67rhlytenvdQ4J7ATJSEv96%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1R35EuzxGboX5ixVhIw1fSDSGFCzYOOqAQ&pvid=10_14.130.193.128_169248_1453905092464';
    amazonLink= 'http://www.amazon.cn/gp/product/B00BS8Y9SC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00BS8Y9SC&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '平凡的世界';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DcvLgqfLE2iUcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67rhlytenvdQ4gL3PGTnk8MbM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RQXrf59pl0X87jA%2FK1F3yMSGFCzYOOqAQ&pvid=10_14.130.193.128_168575_1453905161193';
    amazonLink= 'http://www.amazon.cn/gp/product/B0079RCDAM/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0079RCDAM&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);


    name = '丑陋的中国人';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DTiGpmk0ahm4cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67hue1mhYHXQEoAgJVlbS%2FO%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RO2flUGUln39V%2Blh9kQknayGFCzYOOqAQ&pvid=10_14.130.193.128_168549_1453905230115';
    amazonLink = 'http://www.amazon.cn/gp/product/B00UBPQ0VW/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00UBPQ0VW&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

   name = '疯狂的程序员';
   amazonLink = 'http://www.amazon.cn/gp/product/B008QM2476/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008QM2476&linkCode=as2&tag=droidyue-23';
	alimamaLink = amazonLink;
    appendCommonBooks(name, alimamaLink, amazonLink);



    name = '中国人史纲，柏杨先生狱中著作';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DxMho3fSyFuEcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67hok8KS7ZhyVgL3PGTnk8MbM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRR6q%2FI%2BBWP%2BcMA%2FYLrCN6LrsYOae24fhW0&pvid=10_14.130.193.128_325_1453905460466';
    amazonLink = 'http://www.amazon.cn/gp/product/B00BT56D7Y/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00BT56D7Y&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '帝王师:刘伯温';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DUCI7zzK7FpEcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67i0ZmZU%2By2ge%2B24pk81cuarM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RwF3kKc5%2B4aCbhQT4TWJW%2FSGFCzYOOqAQ&pvid=10_14.130.193.128_341_1453905521377';
    amazonLink = 'http://www.amazon.cn/gp/product/B00HFOKO28/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00HFOKO28&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '第三帝国的兴亡';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DHhvYsTAn%2FascQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67i0ZmZU%2By2geJdux29CqXYnM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1Rl8C%2FatzGwwchSb1E9CAQnXEqY%2Bakgpmw&pvid=10_14.130.193.128_96150_1453905585149';
    amazonLink = 'http://www.amazon.cn/gp/product/B006U9BEGO/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B006U9BEGO&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '如何阅读一本书';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DXKur5sbR5XEcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67l6Sv1nSQs7hJYccVKkURIjM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RRlUXV1OumAj0EuPPJx7U1SGFCzYOOqAQ&pvid=10_14.130.193.128_1528_1453905642039';
    amazonLink = 'http://www.amazon.cn/gp/product/B00IX8NX5A/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00IX8NX5A&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '把时间当作朋友';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DPAX59r2NlsQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67t2k21dS9qXpHGUKWrwhgPnM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRRHUvmiaBpjhxu02OSqqNUZsYOae24fhW0&pvid=10_14.130.193.128_302_1453905720366';
    amazonLink = 'http://www.amazon.cn/gp/product/B00FU3CRZI/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00FU3CRZI&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);


    name = '世界是平的';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DTIcZOUm1BQUcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67t2k21dS9qXpWI6w0dMGH8jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEc7xd3n1M%2F9pYxOnWUD%2BrcMYl7w3%2FA2kb&pvid=10_14.130.193.128_428509_1453905785323';
    amazonLink = 'http://www.amazon.cn/gp/product/B003Z02TQ0/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B003Z02TQ0&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '乱世第一名相谢安';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DcReSOh9G73EcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67nuvDYCSVMcUJdux29CqXYnM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLE%2FMBtEjTljFXSZMOpoNYndcYOae24fhW0&pvid=10_14.130.193.128_1443_1453905888195';
    amazonLink = 'http://www.amazon.cn/gp/product/B004DZO6WQ/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B004DZO6WQ&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '尼采:在世纪的转折点上';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Dsc4BpwAewhAcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67i6M9omIsVHLy4nB2TbTLwLM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RVcD8LONVpiLDmRt77LmA2yGFCzYOOqAQ&pvid=10_14.130.193.128_55939_1453905932828';
    amazonLink = 'http://www.amazon.cn/gp/product/B006TTPRYK/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B006TTPRYK&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '程序员必读的职业规划书';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DKgEUk7j5ILwcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67i6M9omIsVHLtYQMu9Tydq3M3gYQjCL89vSdxyvKgR5IYpon8UCVSYbyuPlxBrfxDfmOxEQuZIyl80M8gh6CrBTSa4HbjT%2BcnCGFCzYOOqAQ&pvid=10_14.130.193.128_176_1453905981862';
    amazonLink = 'http://www.amazon.cn/gp/product/B00W57FX0I/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00W57FX0I&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '你一定爱读的极简欧洲史';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D%2F%2BQhfGfNSe4cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67kapYc7kz9P5Px3RkWSJTuzM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1Rmzmav9QKklD1vNGsufanACGFCzYOOqAQ&pvid=10_14.130.193.128_323_1453906033754';
    amazonLink = 'http://www.amazon.cn/gp/product/B00E192518/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00E192518&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '一生必读的26部欧美人文经典';
    amazonLink = 'http://www.amazon.cn/gp/product/B00WLZMUFA/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00WLZMUFA&linkCode=as2&tag=droidyue-23';
    alimamaLink = amazonLink;
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '此生未完成:一个母亲、妻子、女儿的生命日记 ';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DFKvHtU0FpEQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67kqA8ko24R0qZW1Lr5j6DefM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRRGl58XrGTf8gOT77pM2c3TsYOae24fhW0&pvid=10_14.130.193.128_182_1453906154439';
    amazonLink = 'http://www.amazon.cn/gp/product/B0050G7T76/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0050G7T76&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '你的时间有限,不要为别人而活';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DY92J0hqatc8cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67pvOl4HPNJAy6EFRCN7EKmzM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRRX6L0J3GzyYoo7Sb5f9cl88YOae24fhW0&pvid=10_14.130.193.128_455_1453906206062';
    amazonLink = 'http://www.amazon.cn/gp/product/B00NNDR8QA/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00NNDR8QA&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '不敢止步:一个软件工匠的12年';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DEXFvPu1bXvIcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67pvOl4HPNJAywg1qdhPjl1TM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRR7dRpNrPi5Ll4dA9yY7nZPcYOae24fhW0&pvid=10_14.130.193.128_353_1453906255734';
    amazonLink = 'http://www.amazon.cn/gp/product/B00VE6RYA8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00VE6RYA8&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '创业维艰:如何完成比难更难的事';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DUmorWkPlj0McQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67n%2BtK6nqNPdqxT40F5yyh63M3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1R%2FNA3vWyFO57Q%2BZHc4ZqpsyGFCzYOOqAQ&pvid=10_14.130.193.128_1559_1453906305295';
    amazonLink = 'http://www.amazon.cn/gp/product/B00SMB8ZVU/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00SMB8ZVU&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '人性中的善良天使:一部人类新史';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DuQL8bjw53fwcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67n%2BtK6nqNPdqxeoNewupcd7M3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEO7MRq4Fm00ABzMB0f8nuiyGFCzYOOqAQ&pvid=10_14.130.193.128_1470_1453906359436';
    amazonLink = 'http://www.amazon.cn/gp/product/B00PI5VE6Q/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00PI5VE6Q&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '支付战争:互联网金融创世纪';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DYaWu%2FjJNkGQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67hfnFyQHm6%2BULzKPa%2Ff2nu%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEtYxUvlVNlSQuKsyV3RE3ysYOae24fhW0&pvid=10_14.130.193.128_3977_1453906412820';
    amazonLink = 'http://www.amazon.cn/gp/product/B00WU9XKNI/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00WU9XKNI&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '枪炮、病菌与钢铁 : 人类社会的命运';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D2ZyeUrMxcrUcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67hfnFyQHm6%2BUP9LlJoUu0c7M3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRR8eTxen8e7QKFj6g5qo3oOsYOae24fhW0&pvid=10_14.130.193.128_460_1453906476647';
    amazonLink = 'http://www.amazon.cn/gp/product/B00OUTNUT0/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00OUTNUT0&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);


    name = '拖延心理学,豆瓣拖延小组的镇组之宝';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DRwVTe21%2FLaQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67qi%2BkIMreQ9xDOz%2BQ0BmwbzM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RoWkOcP7%2FPNt1gd4H4D41zSGFCzYOOqAQ&pvid=10_14.130.193.128_188_1453906528332';
    amazonLink = 'http://www.amazon.cn/gp/product/B0032JTI22/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0032JTI22&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '自控力,斯坦福大学最受欢迎的心理学课程';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DyazO8%2F0xaLEcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jgvUYe3ZnOvpOjgxi0uT23M3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RoWkOcP7%2FPNvMjSExLGNSgiGFCzYOOqAQ&pvid=10_14.130.193.128_169257_1453906592126';
    amazonLink = 'http://www.amazon.cn/gp/product/B008AGHPM2/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008AGHPM2&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '番茄工作法图解:简单易行的时间管理方法';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DWw4Kxb3DTxocQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jgvUYe3ZnOvbJxUEh8sgi%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1R%2Bh8Jtm%2F%2BnfPK0SL4OIpt7SGFCzYOOqAQ&pvid=10_14.130.193.128_15260_1453906638136';
    amazonLink = 'http://www.amazon.cn/gp/product/B004O9F71K/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B004O9F71K&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '光荣与梦想：1932～1972年美国叙事史';
    amazonLink = 'http://www.amazon.cn/gp/product/B00VHS141I/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00VHS141I&linkCode=as2&tag=droidyue-23';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Df6ykjow9zW4cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67qIE3BVrNUOc7km9mWjOCUbM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RdYOLv24%2Bqz3nQfj7GwrTMSGFCzYOOqAQ&pvid=10_14.130.193.128_1591_1453906690491';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '不要让未来的你,讨厌现在的自己';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DoaTUPSfudcQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67qIE3BVrNUOcPLNzIt%2Fz56jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RRwBC88SatCpCcEwlQ5WrECGFCzYOOqAQ&pvid=10_14.130.193.128_355_1453906748638';
    amazonLink = 'http://www.amazon.cn/gp/product/B00LLVTAKS/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00LLVTAKS&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
   
    name = '这个历史挺靠谱:袁腾飞讲世界史';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DR68N6zcO6mQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67u1z8ZTYf%2FMgByy0g7RzMQfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RoE6756nKjcL6qs1jzxuRjCGFCzYOOqAQ&pvid=10_14.130.193.128_169031_1453906808747';
    amazonLink = 'http://www.amazon.cn/gp/product/B00DNVMV7S/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00DNVMV7S&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '镜子：照出你看不见的世界史';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D7DdhpresAeAcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67u1z8ZTYf%2FMgNq%2BDna%2F8eQfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1R%2B0M%2BJL5IhELYCZP1VtbAyyGFCzYOOqAQ&pvid=10_14.130.193.128_336_1453906861743';
    amazonLink = 'http://www.amazon.cn/gp/product/B0185BS1M4/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0185BS1M4&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '天朝的崩溃';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DT8nmrB8M%2Bn8cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67p9Lkcq5mu662Y%2Bdtp35ZprM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEkxYZUbB4ChSuVOlPr7XlcsYOae24fhW0&pvid=10_14.130.193.128_1948_1453906909156';
    amazonLink = 'http://www.amazon.cn/gp/product/B00OZ8C9DO/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00OZ8C9DO&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    name = '费马大定理:一个困惑了世间智者358年的谜';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DfOkqrNQN4dEcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67p9Lkcq5mu668FptwqKhdbHM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RObNFe6iTIFKVvi45d40QCiGFCzYOOqAQ&pvid=10_14.130.193.128_428575_1453906989506';
    amazonLink = 'http://www.amazon.cn/gp/product/B00B48HM0S/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00B48HM0S&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);
    
    
    name = '程序员健康指南';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D%2FoxvYD9ZSRccQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67gvGZmf%2BiHhmBuky%2F0Sep%2BHM3gYQjCL89vSdxyvKgR5IYpon8UCVSYa8QQ2rDp0VRUP3ibEvDVBu%2BQURmfRwzNdR%2FZaTsHm4HSGFCzYOOqAQ&pvid=10_113.47.253.211_435_1454140977340';
    amazonLink = 'http://www.amazon.cn/gp/product/B00N4LZ6RO/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00N4LZ6RO&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '写给大家看的设计书';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DfnuzSTZTG4ocQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jnKnGtVcjavJhSgLssdd1bM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZr6zqHQCxwGBMhi3AOOJVttyngDWwbZAlxZcmmsZieF3EqY%2Bakgpmw&pvid=10_113.47.253.211_347_1454141287603';
    amazonLink = 'http://www.amazon.cn/gp/product/B018495NK0/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B018495NK0&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);    

    name = 'GitHub入门与实践';
    alimamaLink = 'http://www.amazon.cn/gp/product/B011LPUB4M/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B011LPUB4M&linkCode=as2&tag=droidyue-23';
    amazonLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DPOzGAPSobRMcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67lCTk227WZffbJxUEh8sgi%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYa8QQ2rDp0VRUP3ibEvDVBuHb0PWG7y2vHuFRgLS%2FVFxHEqY%2Bakgpmw&pvid=10_113.47.253.211_185_1454141535508';
    appendCommonBooks(name, alimamaLink, amazonLink);


    name = '用户体验与可用性测试';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DIq0NXvoktZccQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67vF0m0owB99jn7yqOUL3SI3M3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEa3lm6cXM%2BPKR44oMI1QBUcYOae24fhW0&pvid=10_113.47.253.211_202_1454142225700';
    amazonLink = 'http://www.amazon.cn/gp/product/B00VEM0EY0/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00VEM0EY0&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '追风筝的人';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DpB83amScdd8cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67vawQIWhju7OLzKPa%2Ff2nu%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1R74nJMV4IOT9PeIytdEwoeiGFCzYOOqAQ&pvid=10_113.47.253.211_320_1454144350411';
    amazonLink = 'http://www.amazon.cn/gp/product/B00DFYLXN6/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00DFYLXN6&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '窗边的小豆豆';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DOEGTqLqAePwcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67vFMyN8EYkAfLzKPa%2Ff2nu%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RH2Xlbx%2BTcxuSGhdFAw%2BHxyGFCzYOOqAQ&pvid=10_113.47.253.211_324_1454144525875';
    amazonLink = 'http://www.amazon.cn/gp/product/B004INGC7U/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B004INGC7U&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '解忧杂货店';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D70CGyOyTlq8cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67tvfwhk9Ac56yqeBTj9FJSjM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RsOHUSN4HQkqd3HgMRds6WyGFCzYOOqAQ&pvid=10_113.47.253.211_426_1454145008683';
    amazonLink = 'http://www.amazon.cn/gp/product/B00JZ96ZI8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00JZ96ZI8&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '看见';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D682IWp9CjywcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67reFsxDtexrrLzKPa%2Ff2nu%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RSzrwhVTRXQeL2Jl1c4EVfCGFCzYOOqAQ&pvid=10_113.47.253.211_42481_1454145135080';
    amazonLink = 'http://www.amazon.cn/gp/product/B00AH6OXP0/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00AH6OXP0&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '历史深处的民国';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D5DMAVEa3%2BTwcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67mc8ez5futJEmSMhGfkQJ77M3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RZW5MzFfZiPMoHBOK9CtGTXEqY%2Bakgpmw&pvid=10_113.47.253.211_433_1454145320056';
    amazonLink = alimamaLink;
    appendCommonBooks(name, alimamaLink, amazonLink);
 

    name = '信息简史';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DB39DOVlbbC4cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67tiBSQRqQi%2BKbJxUEh8sgi%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RC5QyJEIEKdl%2Bas5JGwvI0SGFCzYOOqAQ&pvid=10_113.47.253.211_178_1454146728248';
    amazonLink = 'http://www.amazon.cn/gp/product/B00G6CY2R8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00G6CY2R8&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);   


    name = '格局逆袭';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DREvVRge%2BM1UcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67kqX1lJW7BnrsmcYjUfw1pLM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RXu9UfJdqtIZVFSIRynCIdXEqY%2Bakgpmw&pvid=10_121.19.197.199_207_1454903286484';
    amazonLink = 'http://www.amazon.cn/gp/product/B01516NQ4O/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B01516NQ4O&linkCode=as2&tag=droidyue-23';
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '旁观者';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DG%2B%2F7Jxtsq24cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67rQ%2BNzVbLHZ55jVt69nCuKfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RxCA8TpaD%2FIpREVtuJv5kLSGFCzYOOqAQ&pvid=10_121.19.197.199_34784_1454903563948';
    amazonLink = undefined;
    appendCommonBooks(name, alimamaLink, amazonLink);

    name = '重新定义公司';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DpmiAd2HYPXccQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67l5PqiSLeYCOpOjgxi0uT23M3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpitknMPchch1RVO2rA8nvVvI80thtClXsRHEqY%2Bakgpmw&pvid=10_121.19.197.199_427_1454903779260';
    appendCommonBooks(name, alimamaLink, undefined);


    name = '黑天鹅:如何应对不可预知的未来';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DKotcCM90jkgcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67kIlwhmsMw9AUOZr0mLjusfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEL0K9CVHs48QEoKjb%2FRLmaMYOae24fhW0&pvid=10_121.19.197.199_499553_1454903997955';
    appendCommonBooks(name, alimamaLink, undefined);

    
    name = '学会提问 批判性思维';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DauMC4lz%2BS3ocQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67pVRM5Izp8e8kJM98MoZX0jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEHkic1ttVxSroM%2BjTq5eSC8YOae24fhW0&pvid=10_121.19.197.199_499553_1454904239760';
    appendCommonBooks(name, alimamaLink, undefined);

    name = '思考，快与慢';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DGodDu0XC124cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67rO%2Fe97J7R4ltTN3K9waqqjM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEpzc%2BehcaSIqvC1iaD8U618YOae24fhW0&pvid=10_121.19.197.199_317_1454904366664';
    appendCommonBooks(name, alimamaLink, undefined);


    
    name = '最后的耍猴人';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D155QQZtu544cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jEw0gzzrmIkHBMajAjK1gDM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEIVzwlaJ2Pu49Fb6tY3dqYcYOae24fhW0&pvid=10_121.19.197.199_212_1454911101845';
    appendCommonBooks(name, alimamaLink, undefined);


    name = 'MACTALK/人生元编程';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D6ScEomwS1pscQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67liOmWuj97JOPfl2ZNdwIlnM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEgiZDFyX6tGLLtxE9u2D0EcYOae24fhW0&pvid=10_121.19.194.7_34779_1455279929193';
    appendCommonBooks(name, alimamaLink, undefined);










    dataSource = booksToJSON(commonBooks, LINK_TYPE_ALIMAMA);
    dataSource = shuffleJsonObject(dataSource);
    dataSource = splitJSONObject(dataSource, 40);
    dataSource = sortJsonObject(dataSource);

    return dataSource;
}
