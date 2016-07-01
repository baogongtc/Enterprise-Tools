jQuery(document).ready(function($) {
	$(document).ajaxStop(function(){
		$("img.lazy, img.avatar, .lazy img").show().lazyload({
			effect: "fadeIn",
			failure_limit : 100,
			threshold : 200,
            skip_invisible : false
		});
	});
});