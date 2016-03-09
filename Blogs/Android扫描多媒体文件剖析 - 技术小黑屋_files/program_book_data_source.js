
var programBooks = [];

function appendProgramBooks(name, alimamaLink, amazonLink) {
    var book = new Book(name);
    book.alimamaLink = alimamaLink;
    book.amazonLink = amazonLink;
    programBooks.push(book);
}


function shouldDisplayProgramBook() {
    return isSelfRefer()  && isDesktop(); 
}

function makeProgramBookPrefix() {
	return '<section><h1>编程好书</h1>';
}

function makeProgramBookSuffix() {
    return '</section>'
}

function isPrgoramBookInDebug() {
    return false;
}


var sDroidProgramBookClass = "droid_program_book_class";


function makeProgramBookDataSource() {
    var data = {};

    var name, alimamaLink, amazonLink;
    
    name = '算法';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DIe2KCnjGZ6QcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67tXsOb8H8HAoP5bxJy%2F%2Fu7jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRR8HCcyE72ILjwDUY1SQg1X8YOae24fhW0&pvid=10_114.66.9.98_355_1453872876185';
    amazonLink = 'http://www.amazon.cn/gp/product/B009OCFQ0O/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B009OCFQ0O&linkCode=as2&tag=droidyue-23';   
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '代码大全';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DxLCMDjX5r9kcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67l2ugu3wdCnwAMg8lLLxyprM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0jNAn%2BcS6Txum25IPYtOvw8YOae24fhW0&pvid=10_114.66.9.98_1035_1453873021921';
    amazonLink = 'http://www.amazon.cn/gp/product/B0061XKRXA/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0061XKRXA&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '人月神话';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DBXokdLs7o%2FIcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67ocohuYDk9rRP5bxJy%2F%2Fu7jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZZln0vafkv4Ga1Pz15FIlm%2Fi%2BKUpOgab0jaYj9QJ%2BnryGFCzYOOqAQ&pvid=10_114.66.9.98_332_1453873089420';
    amazonLink = 'http://www.amazon.cn/gp/product/B00VR8ZO28/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00VR8ZO28&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '编译原理';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D%2BjVv4p891PAcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67r6r4RLSHR4%2BBuky%2F0Sep%2BHM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0fnxfQeiEWrwjcI3FdsDKFMYl7w3%2FA2kb&pvid=10_114.66.9.98_320_1453873215454';
    amazonLink = 'http://www.amazon.cn/gp/product/B001NGO85I/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B001NGO85I&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '编程珠玑';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Dnudz5Uu2L6ocQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67qxLHSsoydkwCtmXdOL%2FlDnM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0QDNWnv0I1cx6B5uKln8%2BasYOae24fhW0&pvid=10_114.66.9.98_354_1453873314060';
    amazonLink = 'http://www.amazon.cn/gp/product/B00SFZH0DC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00SFZH0DC&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '编程之美';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D4p4bTMEBM%2FwcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67pwhdzYM%2BggysUZsiWgXrvjM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRRcQtfiSTTJRtXO%2BfWfbWWFsYOae24fhW0&pvid=10_114.66.9.98_458_1453873462594';
    amazonLink = 'http://www.amazon.cn/gp/product/B0016K8XGQ/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0016K8XGQ&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '黑客与画家';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DL0wirwlXUe4cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67lgbmiGzepvg%2FKJpqXxEpU7M3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRRNu3Ww8Y56a9BCJAq4ocf98YOae24fhW0&pvid=10_114.66.9.98_169250_1453873660463';
    amazonLink = 'http://www.amazon.cn/gp/product/B00G1ZT2C0/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00G1ZT2C0&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '程序员的职业素养';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Dnwnp5itJSzYcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67gMtXWvFMu9gxF5AHBg6Tr7M3gYQjCL89vSdxyvKgR5IYpon8UCVSYZr6zqHQCxwGBMhi3AOOJVtzUCRJNUXfrBdeRFhxfgakCGFCzYOOqAQ&pvid=10_114.66.9.98_208_1453873727971';
    amazonLink = 'http://www.amazon.cn/gp/product/B0098NRHHY/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0098NRHHY&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '代码整洁之道';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DfgTnsVevc7AcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67skw22RIQ7%2BXn7yqOUL3SI3M3gYQjCL89vSdxyvKgR5IYpon8UCVSYa8QQ2rDp0VRUP3ibEvDVBuROFcY%2BGcX6J3ZraXTIQYqSGFCzYOOqAQ&pvid=10_114.66.9.98_346_1453873893002';
    amazonLink  = 'http://www.amazon.cn/gp/product/B0031M9GHC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0031M9GHC&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = 'Unix编程艺术';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D5YpMRSHsPGocQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jaWg34vzGqMYXyJLYCFAebM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0JWz9s2hhBu%2FOJ8ZFPXY2AMYOae24fhW0&pvid=10_114.66.9.98_168562_1453874004405';
    amazonLink = 'http://www.amazon.cn/gp/product/B008Z1IEQ8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008Z1IEQ8&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '程序员修炼之道';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D3WX9NVbV6LscQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jaWg34vzGqMVNjKoH%2FaCQPM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRReX16onJqq%2BfCohdt%2BmYmDcYOae24fhW0&pvid=10_114.66.9.98_256242_1453874073825';
    amazonLink = 'http://www.amazon.cn/gp/product/B004GV08CY/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B004GV08CY&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink); 

    name = '修改代码的艺术';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DQ8n00KjBM4YcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67kLU7VzmLi05ghoTQriFyXzM3gYQjCL89vSdxyvKgR5IYpon8UCVSYY8adpyqfOGu23l3le%2BSG%2FQ5Ooa8xaN1RhBADLNDkzuksYOae24fhW0&pvid=10_114.66.9.98_350_1453874148984';
    amazonLink  = 'http://www.amazon.cn/gp/product/B00KMJ2Q1U/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00KMJ2Q1U&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '数据结构与算法分析';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D3f%2FHZD2kXWMcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67i7b2QhhP1SKxlg8LvO%2Bev%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYaxN5dP0P2%2BucaU8rDUeBFLJ66LEwS9V3Xwdl4pnp5%2BiHEqY%2Bakgpmw&pvid=10_114.66.9.98_1511_1453874357534';
    amazonLink  = 'http://www.amazon.cn/gp/product/B001N6R9JK/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B001N6R9JK&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '编写可读代码的艺术';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Dcq5%2F1A3%2FSIEcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67oumc1aAaj7xoAgJVlbS%2FO%2FM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0%2FP%2BJz%2Ba9mJgq%2BrDtw0IYEcYOae24fhW0&pvid=10_114.66.9.98_435_1453890489183';
    amazonLink = 'http://www.amazon.cn/gp/product/B008B4DTG4/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008B4DTG4&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);
    

    name = '计算机程序设计艺术';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DK56Q5b9D6fUcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67o3BE0daQCVvFBt5vao9QZzM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0gEMepvJ%2By%2B%2BOkfSaZeQ3HyGFCzYOOqAQ&pvid=10_114.66.9.98_328_1453890578601';
    amazonLink  = 'http://www.amazon.cn/gp/product/B00C4OM7V0/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00C4OM7V0&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);
   
    name = '松本行弘的程序世界';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DjwDdt64%2FGtscQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67o3BE0daQCVvkJM98MoZX0jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRRrjKQmpjHdGgic5kli%2FSM%2FsYOae24fhW0&pvid=10_114.66.9.98_318_1453890636588';
    amazonLink  = 'http://www.amazon.cn/gp/product/B005KGBTQ8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B005KGBTQ8&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);
   
    name = '高效程序员的45个习惯';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DuvAVAZf7LGgcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67pw64lrFduy8CtmXdOL%2FlDnM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0gAaGKtuP%2Fy92DS%2FG%2FbAfeMYOae24fhW0&pvid=10_114.66.9.98_9368_1453890670877';
    amazonLink  = 'http://www.amazon.cn/gp/product/B00OA9L3NU/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00OA9L3NU&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);
    
    name = '计算机是怎样跑起来的';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D2iv5nMUjGwIcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67pw64lrFduy8nwuRopoI2iPM3gYQjCL89vSdxyvKgR5IYpon8UCVSYaxN5dP0P2%2BucaU8rDUeBFL9UfFPP2QxljIrOpg22egFXEqY%2Bakgpmw&pvid=10_114.66.9.98_74877_1453890758833';
    amazonLink  = 'http://www.amazon.cn/gp/product/B00YCSV1QI/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00YCSV1QI&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);
   
    name =  '计算机程序的构造和解释';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DaDWXOCpU5mwcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jIBWZv1iYQAjGYPrSmetxHM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0Dw68fL56czNSilH5VpJCisYOae24fhW0&pvid=10_114.66.9.98_256206_1453890813155';
    amazonLink  = 'http://www.amazon.cn/gp/product/B0011AP7RY/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0011AP7RY&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);
   

    name =  '重构：改善既有代码的设计';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D%2FeZl8MQuONkcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67uJx%2BY2PjL20%2FpU2SWJU0cLM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZHT6Q64MAfM1PHZ67Vo40SJ8hC6xKk%2BASztiWm1K4OlSGFCzYOOqAQ&pvid=10_114.66.9.98_339_1453890893556';
    amazonLink  = 'http://www.amazon.cn/gp/product/B011LPUB42/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B011LPUB42&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);
    
    name = '敏捷软件开发(原则模式与实践)';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DW6HLTDyJGs4cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67iLbT2QJjqm8F%2FSaKyaJTUbM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0zvnx2qOIWgn4bKS%2F9B0PnMYl7w3%2FA2kb&pvid=10_114.66.9.98_326_1453890979032';
    amazonLink  = 'http://www.amazon.cn/gp/product/B00116MMA8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00116MMA8&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);
   
    name =  '设计模式 可复用面向对象软件的基础';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DNpZ6DfPE04EcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67iLbT2QJjqm8xeoNewupcd7M3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0Dw68fL56czMezPJtGYRVg8YOae24fhW0&pvid=10_114.66.9.98_324_1453891024380';
    amazonLink = 'http://www.amazon.cn/gp/product/B001130JN8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B001130JN8&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);
    
    name = '程序员的思维修炼:开发认知潜能的九堂课';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Df6n1dIw01mwcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67uiez7uVfPuD6EFRCN7EKmzM3gYQjCL89vSdxyvKgR5IYpon8UCVSYYbSJF1wfKz6PX1zKVYwQEx3zo0OV6pIC4dXT2kXrbmSiGFCzYOOqAQ&pvid=10_114.66.9.98_209_1453891090415';
    amazonLink  = 'http://www.amazon.cn/gp/product/B007VARUIM/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B007VARUIM&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);
    
    name = '代码之髓';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DEcPkbmz95YocQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67vVFhdUqWDduUOZr0mLjusfM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0rZIgNmAnXsHBDOPvMVl9XMYOae24fhW0&pvid=10_113.47.253.211_319_1454141731375';
    amazonLink = 'http://www.amazon.cn/gp/product/B00M6KMQJU/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00M6KMQJU&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);


    name = "有趣的二进制";
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DtZ6tKqWlePscQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67l2Rq3LVFPZTxa9spvDO8CnM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0aCFKaRZmz%2Fao3y9xlb6TRiGFCzYOOqAQ&pvid=10_113.47.253.211_344_1454141964386';
    amazonLink = 'http://www.amazon.cn/gp/product/B016V2TEXO/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B016V2TEXO&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '鸟哥的linux私房菜';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Ddzbkz%2BSPdrgcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67vftr48hPLTGxT40F5yyh63M3gYQjCL89vSdxyvKgR5IYpon8UCVSYb15Y5fs5g2zdENWbkrNyRR3OgU%2FjMYhp0kZRiGdSjsU8YOae24fhW0&pvid=10_113.47.253.211_626855_1454145915069';
    amazonLink = 'http://www.amazon.cn/gp/product/B003TJNO98/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B003TJNO98&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    name = '啊哈！算法';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DKY6112TMqGIcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67mTdXtUdfsNCHBMajAjK1gDM3gYQjCL89vSdxyvKgR5IYpon8UCVSYaxN5dP0P2%2BucaU8rDUeBFLayGckMejm0g8rBL3Ni48m3EqY%2Bakgpmw&pvid=10_113.47.253.211_626845_1454146064808';
    amazonLink = 'http://www.amazon.cn/gp/product/B00KSWT268/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00KSWT268&linkCode=as2&tag=droidyue-23';
    appendProgramBooks(name, alimamaLink, amazonLink);

    
    name = '编码：隐匿在计算机软硬件背后的语言(永不退色的计算机科学经典著作)';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DxN8lF894S04cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67oZZxlmQD2NRrbXOwzJUOFDM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0XdM%2BEvEzBJmCUOOzBWdDU8YOae24fhW0&pvid=10_121.19.197.199_339_1454909909825';
    appendProgramBooks(name, alimamaLink, undefined);


    name = '编程人生：15位软件先驱访谈录';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DOOcIVNxwkv0cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67stl%2Fjj7OsIo%2B24pk81cuarM3gYQjCL89vSdxyvKgR5IYpon8UCVSYZ0GNrqi8kpijO6srjmTjLEHn9mC6tUT5wzqRM5KmAeE8YOae24fhW0&pvid=10_121.19.197.199_325_1454910537687';
    appendProgramBooks(name, alimamaLink, undefined);


    name = '计算机程序的构造和解释';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Du1CmIn6qLuAcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67ljBJmDvJBpoJhSgLssdd1bM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0Dw68fL56czNSilH5VpJCisYOae24fhW0&pvid=10_121.19.197.199_177_1454910694184';
    appendProgramBooks(name, alimamaLink, undefined);

    name = '深入理解计算机系统';
    alimamaLink = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DKWVuAYiyBxIcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67nF%2BmQxLf8HiD%2FHdSRms18jM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbId6jI%2FvQsc%2FwEfsjb1UU0fh6hpJq6ETW09mrjLnWmt8Yl7w3%2FA2kb&pvid=10_121.19.197.199_200_1454910826921';
    appendProgramBooks(name, alimamaLink, undefined);











    data = booksToJSON(programBooks, LINK_TYPE_ALIMAMA);  
    data = shuffleJsonObject(data);
    data = splitJSONObject(data, 40);
    data = sortJsonObject(data);  
    return data;
}
