jQuery(document).ready(function($) {
  /*  fiexd menu
  /* ------------------------------------ */
  if($(".top-part").length>0){
    var navTop = $('.top-part').offset().top;
    $(window).scroll(function(){
      if ($(window).scrollTop() > navTop) {
        $('.top-part').addClass('fixed');
      } else {
        $('.top-part').removeClass('fixed');
      }
    });
  }
  /*  Toggle header search
  /* ------------------------------------ */
  $(document).click(function (event) {
      $('.search-expand').hide();
      $('.toggle-search').removeClass('search-active');
    });
  $('.toggle-search ,.search-expand').click(function(event) {
      event.stopPropagation();
  });
  $('.toggle-search').click(function(){
    $('.toggle-search').toggleClass('search-active');
    $('.search-expand').fadeToggle(250);
    setTimeout(function(){
      $('.search-expand input').focus();
    }, 300);
  });
/*  Dropdown menu animation
/* ------------------------------------ */
  $('.nav ul.sub-menu').hide();
  $('.nav li').hover(
    function() {
     $(this).children('ul.sub-menu').slideDown('fast');
     },
     function() {
       $(this).children('ul.sub-menu').hide();
     }
  );
  $('.nav ul.sub-menu').hover(
    function(){
      $(this).parent().addClass('children-menu-hover')
    },
    function(){
      $(this).parent().removeClass('children-menu-hover')
    }
  );
  $('.nav .fenlei ul.sub-menu li').each(function(){
    if ($('.nav .fenlei ul.sub-menu li').hasClass('current-post-ancestor')){
      $('.nav .fenlei ul.sub-menu li').parent().parent().addClass('top-menu-item');
      var text = $('.nav .fenlei ul.sub-menu li.current-post-ancestor').text();
      $('.nav .fenlei > a').html(text + '<i class="icon1"></i>');
    }
    if ($('.nav .fenlei ul.sub-menu li').hasClass('current-menu-item')){
      var text = $('.nav .fenlei ul.sub-menu li.current-menu-item').text();
      $('.nav .fenlei > a').html(text + '<i class="icon1"></i>');
    }
  });
  /*  User Dropdown menu animation
  /* ------------------------------------ */
  $('.fl-nav').hide();
  $('.login-box').hover(
      function() {
        $(this).children('.fl-nav').slideDown('fast');
      },
      function() {
        $(this).children('.fl-nav').hide();
      }
  );
  /*  returnTop
  /* ------------------------------------ */
  $(window).bind("scroll", function(){
    var scrollTopNum = $(document).scrollTop(),
    winHeight = $(window).height(),
    returnTop = $("div.returnTop");
    (scrollTopNum > 0) ? returnTop.fadeIn("fast") : returnTop.fadeOut("fast");
    if (!-[1,]&&!window.XMLHttpRequest) {
      returnTop.css("top", scrollTopNum + winHeight - 200);
    }
  });
  $("div.returnTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });

  var post_qr_lock = false;
  $('.post_icon_wx').mouseover(function(){
    if (post_qr_lock) {
      return false;
    }
    post_qr_lock = true;
    var I = $(this).find('img');
    var pid = I.data('pid');
    $.get(window.location.href, {ajax_action:'getqr', pid: pid}, function(ret){
      if (ret) {
        I.attr('src', ret);
      }
    });
  });


});
