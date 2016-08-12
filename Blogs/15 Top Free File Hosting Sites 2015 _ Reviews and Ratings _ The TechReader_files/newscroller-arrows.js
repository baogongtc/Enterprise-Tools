$(function() {	
    if($(window).width() >= 992) {
    /* begin home right left rotation arrows */
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(9).8(0(){$(\'#b\').3(0(){$(".2-1-6").7({4:\'+=5\'})});$(\'#a\').3(0(){$(".2-1-6").7({4:\'-=5\'})})});',12,12,'function|news|breaking|click|scrollLeft|740px|inner|animate|ready|document|prev_nav_home|next_nav_home'.split('|'),0,{}))
    /* end home right left rotation arrows */
    /* begin games right left rotation arrows */
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(9).8(0(){$(\'#b\').3(0(){$(".2-1-6").7({4:\'+=5\'})});$(\'#a\').3(0(){$(".2-1-6").7({4:\'-=5\'})})});',12,12,'function|news|breaking|click|scrollLeft|852px|inner|animate|ready|document|prev_nav|next_nav'.split('|'),0,{}))
    /* end games left rotation arrows */
    /* begin breaking news right left rotation arrows */
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(9).8(0(){$(\'#b\').3(0(){$(".2-1-6").7({4:\'+=5\'})});$(\'#a\').3(0(){$(".2-1-6").7({4:\'-=5\'})})});',12,12,'function|news|breaking|click|scrollLeft|852px|inner2|animate|ready|document|prev_nav2|next_nav2'.split('|'),0,{}))
} else {
/* begin small screens */
    /* begin home right left rotation arrows */
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(9).8(0(){$(\'#b\').3(0(){$(".2-1-6").7({4:\'+=5\'})});$(\'#a\').3(0(){$(".2-1-6").7({4:\'-=5\'})})});',12,12,'function|news|breaking|click|scrollLeft|294px|inner|animate|ready|document|prev_nav_home|next_nav_home'.split('|'),0,{}))
    /* end home right left rotation arrows */
    /* begin games right left rotation arrows */
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(9).8(0(){$(\'#b\').3(0(){$(".2-1-6").7({4:\'+=5\'})});$(\'#a\').3(0(){$(".2-1-6").7({4:\'-=5\'})})});',12,12,'function|news|breaking|click|scrollLeft|294px|inner|animate|ready|document|prev_nav|next_nav'.split('|'),0,{}))
    /* end games left rotation arrows */
    /* begin breaking news right left rotation arrows */
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(9).8(0(){$(\'#b\').3(0(){$(".2-1-6").7({4:\'+=5\'})});$(\'#a\').3(0(){$(".2-1-6").7({4:\'-=5\'})})});',12,12,'function|news|breaking|click|scrollLeft|340px|inner2|animate|ready|document|prev_nav2|next_nav2'.split('|'),0,{}))
/* end small screens */
        }
	});
/* end breaking news left rotation arrows */
/* newscroller swipe events */
/* begin touchSwipe */
$(function() {	
    if($(window).width() >= 992) {
        /* home featured newscroller */
    		$("#newscroller-inner").swipe( {
    			swipeLeft:function(event) {
    				// alert("left works");
    				$( ".breaking-news-inner" ).animate({
    					scrollLeft: '+=852px'
    				});
    			},
    			swipeRight:function(event) {
    				// alert("rightworks");
    				$( ".breaking-news-inner" ).animate({
    					scrollLeft: '-=852px'
    				});
    			},
    			threshold:5
    		});
	
        /* top games newscroller */
    		$(".breaking-news-cont").swipe( {
    			swipeLeft:function(event) {
    				// alert("left works");
    				$( ".breaking-news-inner" ).animate({
    					scrollLeft: '+=852px'
    				});
    			},
    			swipeRight:function(event) {
    				// alert("rightworks");
    				$( ".breaking-news-inner" ).animate({
    					scrollLeft: '-=852px'
    				});
    			},
    			threshold:5
    		});
    	
        /* games breaking news newscroller */
    		$(".breaking-news-cont2").swipe( {
    			swipeLeft:function(event) {
    				// alert("left works");
    				$( ".breaking-news-inner2" ).animate({
    					scrollLeft: '+=852px'
    				});
    			},
    			swipeRight:function(event) {
    				// alert("rightworks");
    				$( ".breaking-news-inner2" ).animate({
    					scrollLeft: '-=852px'
    				});
    			},
    			threshold:5
    		});
    } else {
        }
	});
/* end touchSwipe */
/* end newscroller end swipe events */