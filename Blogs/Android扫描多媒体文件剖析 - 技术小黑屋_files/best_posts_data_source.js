function shouldDisplayBestPosts() {
    return true; 
}

function makeBestPostsPrefix() {
	return '<section><h1>人气文章</h1>';
}

function makeBestPostsSuffix() {
	return '</section>';
}

function isBestPostsInDebug() {
	return false; 
}

var sDroidBestPostsClass = 'droid_best_posts_class';
var sDroidRandomBestPostsClass = 'droid_random_best_posts_class';

function makeBestPostsDataSource() {
    var data = {};
	data['程序员必读的六本书'] = 'http://droidyue.com/blog/2015/07/04/six-books-every-programer-must-read/';   
    
    data['Java程序员必读的9本书'] = 'http://droidyue.com/blog/2014/11/30/java-programmer-must-read-these-9-books/';
    
    data['纠结才能写出好代码'] = 'http://droidyue.com/blog/2014/07/27/think-twice-when-coding/';
    
    data['程序员的逗比瞬间（第一季）'] = 'http://droidyue.com/blog/2015/08/08/funny-programmer-season-one/';
    
    
    data['探究android:largeHeap'] = 'http://droidyue.com/blog/2015/08/01/dive-into-android-large-heap/';
    
    data['这就是观察者模式'] = 'http://droidyue.com/blog/2015/06/27/desgign-pattern-observer/';
    
    data['说说依赖注入'] = 'http://droidyue.com/blog/2015/06/13/talk-show-about-dependency-injection/';
    
    data['Android中Java和JavaScript交互最详细的文章'] = 'http://droidyue.com/blog/2014/09/20/interaction-between-java-and-javascript-in-android/';
    
    data['士别三年，我的最新个人作品'] = 'http://droidyue.com/blog/2015/02/28/my-android-work-akoi/';
    
    data['十分钟掌握SQLite操作'] = 'http://droidyue.com/blog/2014/09/08/learn-sqlite-in-a-very-fast-way/';

    data['工作利器：终于可以使用Markdown写邮件啦'] = 'http://droidyue.com/blog/2014/08/26/write-emails-using-markdown-in-browsers/';
        
    data['Android中HTTP相关的API'] = 'http://droidyue.com/blog/2015/05/30/android-http-clients/';
    
    data['Android中Handler引起的内存泄露'] = 'http://droidyue.com/blog/2014/12/28/in-android-handler-classes-should-be-static-or-leaks-might-occur/';
    
    data['Android中糟糕的AsyncTask'] = 'http://droidyue.com/blog/2014/11/08/bad-smell-of-asynctask-in-android/';
    
    data['人生苦短，让你的Git飞起来吧'] = 'http://droidyue.com/blog/2014/10/15/speed-up-your-git/';
    
    data['单例这种设计模式'] = 'http://droidyue.com/blog/2015/01/11/looking-into-singleton/';
    
    data['读懂Java中的Socket编程'] = 'http://droidyue.com/blog/2015/03/08/sockets-programming-in-java/';
    
    data['理解Java中的弱引用'] = 'http://droidyue.com/blog/2014/10/12/understanding-weakreference-in-java/';
    
    data['Google IO：Android内存管理主题演讲记录'] = 'http://droidyue.com/blog/2014/11/02/note-for-google-io-memory-management-for-android-chinese-edition/';
    
    data['”失效”的private修饰符'] = 'http://droidyue.com/blog/2014/10/02/the-private-modifier-in-java/';
    
    data['你造么,Android中程序的停止状态'] = 'http://droidyue.com/blog/2014/07/14/look-inside-android-package-stop-state-since-honeycomb-mr1/';
    
    data['Java中的堆和栈的区别'] = 'http://droidyue.com/blog/2014/12/07/differences-between-stack-and-heap-in-java/';
    
    data['Android扫描多媒体文件剖析'] = 'http://droidyue.com/blog/2014/07/12/scan-media-files-in-android-chinese-edition/';
    
    data['Java中的substring真的会引起内存泄露么'] = 'http://droidyue.com/blog/2014/12/14/substring-memory-issue-in-java/';
   
    data['Android中WebView拦截替换网络请求数据'] = 'http://droidyue.com/blog/2014/11/23/block-web-resource-in-webview/';
    
    data['快速提高Android开发效率的Web工具'] = 'http://droidyue.com/blog/2014/08/03/great-web-tools-for-android-development/';
    
    data['Android设置中的清除数据究竟移除哪些数据'] = 'http://droidyue.com/blog/2014/06/15/what-will-be-removed-if-you-click-clear-data-button-in-system-application-item/';
    
    data['注意:在为Android程序申请权限时'] = 'http://droidyue.com/blog/2014/07/04/attentions-when-adding-permission-for-android-application/';
    
    data['说说Android中的ANR'] = 'http://droidyue.com/blog/2015/07/18/anr-in-android/';
    
    data['Java中的静态绑定和动态绑定'] = 'http://droidyue.com/blog/2014/12/28/static-biding-and-dynamic-binding-in-java/';
    
    data['避免Android中Context引起的内存泄露'] = 'http://droidyue.com/blog/2015/04/12/avoid-memory-leaks-on-context-in-android/';
    
    data['Google为何这样设计OnSharedPreferenceChangeListener'] = 'http://droidyue.com/blog/2014/11/29/why-onsharedpreferencechangelistener-was-not-called/';
    
    data['Google Play商店推广那些事'] = 'http://droidyue.com/blog/2015/05/11/google-play-tuiguang/';
    
   	data['Java中的自动装箱与拆箱'] = 'http://droidyue.com/blog/2015/04/07/autoboxing-and-autounboxing-in-java/';
    
    data['Java细节：字符串的拼接'] = 'http://droidyue.com/blog/2014/08/30/java-details-string-concatenation/';
    
    data['Android中如何检测当前线程为主线程'] = 'http://droidyue.com/blog/2014/07/12/check-main-thread-in-android-chinese-edition/';
    
    data['Android如何设置默认程序'] = 'http://droidyue.com/blog/2014/07/13/set-preferred-application-in-android-chinese-edition/';
    
    data['实时预览Markdown利器'] = 'http://droidyue.com/blog/2014/10/01/great-markdown-viewer-as-a-chrome-extension/';
    
    data['程序员的逗比瞬间（第二季）'] = 'http://droidyue.com/blog/2015/08/29/funny-programmer-season-two/';
    
    data['垃圾回收器如何处理循环引用'] = 'http://droidyue.com/blog/2015/06/05/how-garbage-collector-handles-circular-references/';
    
    data['JVM运行时的数据区'] = 'http://droidyue.com/blog/2014/12/21/java-runtime-data-areas/';
    
    data['Java中的字符串常量池'] = 'http://droidyue.com/blog/2014/12/21/string-literal-pool-in-java/';
    
    data['使用Android lint发现并解决高版本API问题'] = 'http://droidyue.com/blog/2015/07/25/use-android-lint-to-find-higher-api-usage/';
    
    
    data['Java永久代去哪儿了'] = 'http://droidyue.com/blog/2015/08/22/where-has-the-java-permgen-gone/';
    
    
    data['剖析Android中进程与线程调度之nice'] = 'http://droidyue.com/blog/2015/09/05/android-process-and-thread-schedule-nice/';
    
    
    data['从UA中分辨出Android设备类型'] = 'http://droidyue.com/blog/2014/08/05/detect-android-device-type-by-sniffing-user-agent/';
    
    data['Ruby执行shell命令的六种方法'] = 'http://droidyue.com/blog/2014/11/18/six-ways-to-run-shell-in-ruby/';
    
    data['你的Java代码对JIT编译友好么？'] = 'http://droidyue.com/blog/2015/09/12/is-your-java-code-jit-friendly/';
    
    data['Android进程线程调度之cgroups'] = 'http://droidyue.com/blog/2015/09/17/android-process-and-thread-schedule-cgroups/';
    
    data['Android性能调优利器StrictMode'] = 'http://droidyue.com/blog/2015/09/26/android-tuning-tool-strictmode/';
    
    data['关于Android Log的一些思考'] = 'http://droidyue.com/blog/2015/11/01/thinking-about-android-log/';
    
    data['程序员的逗比瞬间(第三季)'] = 'http://droidyue.com/blog/2015/10/17/funny-programmer-season-three/';
	 
    data['程序员的逗比瞬间 最终番'] = 'http://droidyue.com/blog/2015/11/15/funny-programmer-finale/';
    
    data["深入探索Java 8 Lambda表达式"] = 'http://droidyue.com/blog/2015/11/28/article-java-8-lambdas-a-peek-under-the-hood/';
    
    data['Android处理崩溃的一些实践'] = 'http://droidyue.com/blog/2015/12/06/practise-about-crash-in-android/';
    
    data['Android 中 SQLite 性能优化'] = 'http://droidyue.com/blog/2015/12/13/android-sqlite-tuning/';
    
    data['关于Android中工作者线程的思考'] = 'http://droidyue.com/blog/2015/12/20/worker-thread-in-android/';
    
    data['技术小黑屋的2015年'] = 'http://droidyue.com/blog/2015/12/29/bye-2015-hi-2016/';
    
    data['聊一聊Android 6.0的运行时权限'] = 'http://droidyue.com/blog/2016/01/17/understanding-marshmallow-runtime-permission/';
    
    data['我的首个Chrome扩展发布了'] = 'http://droidyue.com/blog/2016/01/31/my-first-chrome-extension/';

    data['关于获取当前Activity的一些思考'] = 'http://droidyue.com/blog/2016/02/21/thinking-of-getting-the-current-activity-in-android/';
    
    return data;
}

function shouldSortBestBooks() {
	return false;
}

function shouldLimitBestPosts() {
	return false; 
}


function getBestPostsLimitSize() {
	return 25;
    
}

