/* begin carouFredSel */
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(5(){$(\'#6\').7({4:0,1:\'#3\',2:\'#8\',d:"#e",f:0,c:{9:0,a:b}})});',16,16,'false|prev|next|prev2|auto|function|foo2|carouFredSel|next2|onMouse|onTouch|true|swipe|pagination|pager2|mousewheel'.split('|'),0,{}))
/* end carouFredSel */

/* begin sticky nav */
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(j).g(q(){p g=$(j).r();n(g>=o){$("#e").2("0");$("#e h 1 a").s("l","x: i y i w !t");$("1.7 a").2("0-7");$("1.8 a").2("0-8");$("1.9 a").2("0-9");$("1.6 a").2("0-6");$("1.5 a").2("0-5");$("1.4 a").2("0-4");$("1.b a").2("0-b");$("1.c a").2("0-c");$("1.f a").2("0-f");$("1.d a").2("0-d");$("#k").2("0-m")}u{$("#e").3("0");$("#e h 1 a").v("l");$("1.7 a").3("0-7");$("1.8 a").3("0-8");$("1.9 a").3("0-9");$("1.6 a").3("0-6");$("1.5 a").3("0-5");$("1.4 a").3("0-4");$("1.b a").3("0-b");$("1.c a").3("0-c");$("1.f a").3("0-f");$("1.d a").3("0-d");$("#k").2("0-m")}});',35,35,'sticky|li|addClass|removeClass|psychology|topten|tech|first|movies|games||politics|cars|contact|mainnav|gear|scroll|ul|8px|window|wpadminbar|style|admin|if|155|var|function|scrollTop|attr|important|else|removeAttr|11px|padding|45px'.split('|'),0,{}))
/* end sticky nav */

/* begin mobile sticky nav */
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		
		if (scroll >= 101) {
			$("#mobilemenu-tr").addClass("sticky2");
			$("#top-nav-box").addClass("sticky-topnav");
			$(".the_champ_sharing_container.the_champ_vertical_sharing.the_champ_hide_sharing").addClass("sticky-shares");
		} else {
			$("#mobilemenu-tr").removeClass("sticky2");
			$("#top-nav-box").removeClass("sticky-topnav");
			$(".the_champ_sharing_container.the_champ_vertical_sharing.the_champ_hide_sharing").removeClass("sticky-shares");
		}
	});
/* end mobile sticky nav */

/* scroll sticky sidebar */
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		
		// main sticky sidebars
		if (scroll >= 2701) {
			// $("#text-40").addClass("sticky-sidebar-shares");
			$("#text-27").addClass("sticky-sidebar-newsletter");
			$("#text-54").addClass("sticky-sidebar-abds");
		} else {
			// $("#text-40").removeClass("sticky-sidebar-shares");
			$("#text-27").removeClass("sticky-sidebar-newsletter");
			$("#text-54").removeClass("sticky-sidebar-abds");
		}
		
		// games posts sticky sidebars
		if (scroll >= 5001) {
			$("#text-6").addClass("sticky-sidebar-newsletter");
			$("#text-9").addClass("sticky-sidebar-abds");
		} else {
			$("#text-6").removeClass("sticky-sidebar-newsletter");
			$("#text-9").removeClass("sticky-sidebar-abds");
		} 
		
		// games posts sticky sidebars special
		if (scroll >= 5001) {
			$("#text-6").addClass("sticky-sidebar-newsletter");
			$("#text-66").addClass("sticky-sidebar-special-abds");
		} else {
			$("#text-6").removeClass("sticky-sidebar-newsletter");
			$("#text-66").removeClass("sticky-sidebar-special-abds");
		}
		// movies posts sticky sidebars
		if (scroll >= 3101) {
			$("#text-16").addClass("sticky-sidebar-newsletter");
			$("#text-52").addClass("sticky-sidebar-abds");
		} else {
			$("#text-16").removeClass("sticky-sidebar-newsletter");
			$("#text-52").removeClass("sticky-sidebar-abds");
		}
		// cars posts sticky sidebars
		if (scroll >= 3001) {
			$("#text-32").addClass("sticky-sidebar-newsletter");
			$("#text-45").addClass("sticky-sidebar-abds");
		} else {
			$("#text-32").removeClass("sticky-sidebar-newsletter");
			$("#text-45").removeClass("sticky-sidebar-abds");
		}
		// gear posts sticky sidebars
		if (scroll >= 2701) {
			$("#text-19").addClass("sticky-sidebar-newsletter");
			$("#text-42").addClass("sticky-sidebar-abds");
		} else {
			$("#text-19").removeClass("sticky-sidebar-newsletter");
			$("#text-42").removeClass("sticky-sidebar-abds");
		}
		// top ten posts sticky sidebars
		if (scroll >= 3101) {
			$("#text-14").addClass("sticky-sidebar-newsletter");
			$("#text-43").addClass("sticky-sidebar-abds");
		} else {
			$("#text-14").removeClass("sticky-sidebar-newsletter");
			$("#text-43").removeClass("sticky-sidebar-abds");
		}
		// technology posts sticky sidebars
		if (scroll >= 2701) {
			$("#text-33").addClass("sticky-sidebar-newsletter");
			$("#text-28").addClass("sticky-sidebar-abds");
		} else {
			$("#text-33").removeClass("sticky-sidebar-newsletter");
			$("#text-28").removeClass("sticky-sidebar-abds");
		}
		// psychology posts sticky sidebars
		if (scroll >= 2701) {
			$("#text-21").addClass("sticky-sidebar-newsletter");
			$("#text-50").addClass("sticky-sidebar-abds");
		} else {
			$("#text-21").removeClass("sticky-sidebar-newsletter");
			$("#text-50").removeClass("sticky-sidebar-abds");
		}
	});
/* end scroll sticky sidebar */

/* mobile menu */
    $(function() {
        /* $('#mobilemenu-search a').on("click",function(){
            $('#mobilemenu-tr').toggleClass("show-search");
        }); */
        $(".mobilemenu-menutop a").click(function(e){
            var e=window.event||e;
            $("#mobilemenu-tr").toggleClass("show-menu");
            $("#search-table").removeClass("show-searchbox");
            $(".container").toggleClass("show-menu-slide");
            e.stopPropagation();
         });
        $(document).click(function(e){
            $("#mobilemenu-tr").removeClass("show-menu");
            $(".container").removeClass("show-menu-slide");
        });
        $("#mobilemenu-search a").click(function(f){
            var f=window.event||f;
            $("#search-table").toggleClass("show-searchbox");
            $("#mobilemenu-search a").toggleClass("hide-searchbutton");
            $('.search-field').focus();
            f.stopPropagation();
         });
         // $(document).click(function(f){
         //      $("#search-table").removeClass("show-searchbox");
         //      $("#mobilemenu-search a").removeClass("hide-searchbutton");
         // });
        $("#top-search input[type=text]").click(function(g){
            var g=window.event||g;
            g.stopPropagation();
         });
         $(document).click(function(g){
            $("#search-table").removeClass("show-searchbox");
            $("#mobilemenu-search a").removeClass("hide-searchbutton");
        });
    });
/* end mobile menu */
