jQuery(function($){

	$(document).on("click", ".commentator-image-preview-overlay", function(){
        $(this).parent().remove();
        return false;
    });

	function initUploads(){

	    $('.commentator-form-image-upload').each(function(i, el){
	    	var $el = $(el),
	    		$parent = $el.closest(".commentator-form"),
	    		$link = $parent.find(".commentator-image-upload"),
				circle = $link.find(".commentator-bar").get(0);

			var l = 2*Math.PI*circle.getAttribute("r");
			circle.style.strokeDasharray = l + ' ' + l; 
			circle.style.strokeDashoffset = l;

			setTimeout(function(){
				$link.addClass("commentator-initiated");
			}, 20);

	    	if($el.data("bindFileUpload")){
	    		$el.fileupload('destroy');
	    	}
	    	$el.data("bindFileUpload", "bound");
	    	
			$el.fileupload({
		    	dataType: 'json',
		        done: function (e, data) {
		        	if(data.result.errors){
						$.each(data.result.errors, function(i, v){
							$.addAlert(v, "error");
						});
					}
					else{
			        	var $parent = data.form;
			        	if(data.result.url){
			        		if($parent.find(".commentator-image-preview").length){
			        			$parent.find(".commentator-image-preview").remove();
			        		}
			        		$parent.find(".commentator-postbox").append(
			        			"<div class='commentator-image-preview' style=\"background-image:url('"+
			        			data.result.url+
			        			"')\"><input type='hidden' value='"+
			        			data.result.url+
			        			"' name='attached-image'/><a class='commentator-image-preview-overlay' href='#'><i class='fa fa-trash'></i></a></div>"
			        		);
			        	}
			        }
			        $link.addClass("commentator-loaded");
					circle.style.strokeDashoffset = l;
		        },
		        formData: [{
		        	name: "action",
		        	value: "commentator_upload-image"
		        }],
		        add: function (e, data) {
		        	$('.commentator-alert').remove();
		        	$link.removeClass("commentator-loaded");
		            var jqXHR = data.submit();
		        },
		        progressall: function (e, data) {
		        	var progress = parseInt(data.loaded / data.total * 100, 10);
		        	var pct = Math.floor((1-progress/100)*l);
					circle.style.strokeDashoffset = pct;
			    }

		    });
	    });
	}

	$(document).on("click", '.commentator-image-upload', function(e){
		var $el = $(this),
			$parent = $el.closest(".commentator-form");
        $parent.find(".commentator-form-image-upload").click();
        return false;
    });

	$(document).on('click', '.commentator-add-comment', function(e){
		var $t = $(this),
			$form = $t.parents('.commentator-form');
		if($t.find('i').hasClass('fa-spin')){
			return false;
		}
		$t.find('i').addClass('fa fa-spin');
		$('.commentator-alert').remove();
		$.post(ajaxurl, $form.serialize()+"&comment="+encodeURIComponent($form.find('.commentator-textarea').html())+"&action=commentator_add-comment", function(data, status, xhr){
			
			var ct = xhr.getResponseHeader("content-type") || "";
			if (ct.indexOf('html') > -1) {
				$.addAlert(data, "error");
			}
			if (ct.indexOf('json') > -1) {
				if(data.message){
					$.addAlert(data.message, "message");
				}
				else{
					$form.find('.commentator-textarea').empty();
					var $parent = $form.closest(".children").length ? $form.closest(".children") : $("#commentator-comments-list");
					$.post(ajaxurl, "action=commentator_get-comment-html&comment_ID="+data.comment_ID, function(data, status, xhr){
						var $comment = $(data);
						if($("#commentator-sort > .commentator-active > a").first().data("commentator-sort")==="desc" && !$parent.hasClass("children")){
							$comment.prependTo($parent);
						}
						else{
							$comment.appendTo($parent);
						}
						$comment.addClass("commentator-animated commentator-fadeIn");
						$('html, body').animate({
						    scrollTop: $comment.offset().top
						}, 400);

						if($.fn.fitVids){
							$comment.fitVids();
						}

						if($form.attr("id") === "commentator-cloned-form"){
							$form.remove();
						}

						$(".commentator-image-preview-overlay").click();
					});
					/* $('#commentator-sort').find('[data-commentator-sort="desc"]').click();*/
				}
			}
			
			$t.find('i').removeClass('fa-spin');
		});
		e.preventDefault();
	});

	$(document).on("paste", '.commentator-textarea', function(e) {
        e.preventDefault();
	    if ((e.originalEvent || e).clipboardData) {
	        content = (e.originalEvent || e).clipboardData.getData('text/plain');
	        document.execCommand('insertText', false, content);
	    }
	    else if (window.clipboardData) {
	        content = window.clipboardData.getData('Text');
	        document.selection.createRange().pasteHTML(content);
	    }
    });

	$(document).on('click', '.commentator-login', function(e){
		var $t = $(this),
			$form = $t.parents('.commentator-login-form');
		$('.commentator-alert').remove();
		$.post(ajaxurl, $form.serialize()+"&action=commentator_login", function(data){
			if(data.message){
				$.addAlert(data.message, "message");
			}
			if(data.errors){
				$.each(data.errors, function(i, v){
					$.addAlert(v, "error");
				});
			}
			else{
				location.reload();
			}
		});
		e.preventDefault();
	});

	$(document).on('click', '.commentator-register', function(e){
		var $t = $(this),
			$form = $t.parents('.commentator-register-form');
		$('.commentator-alert').remove();
		$.post(ajaxurl, $form.serialize()+"&action=commentator_register", function(data){
			if(data.message){
				$.addAlert(data.message, "message");
			}
			if(data.errors){
				$.each(data.errors, function(i, v){
					$.addAlert(v, "error");
				});
			}
		});
		e.preventDefault();
	});

	$(document).on('click', '.commentator-flag', function(e){
		var $t = $(this),
			$comment = $t.parents('.comment').first();
		var id = $comment.attr('id').replace('comment-', '');
		$('.commentator-alert').remove();
		$.post(ajaxurl, "comment_ID="+id+"&action=commentator_flag", function(data){
			if(data.message){
				$.addAlert(data.message, "message");
			}
			if(data.errors){
				$.each(data.errors, function(i, v){
					$.addAlert(v, "error");
				});
			}
			else{
				$('#commentator-sort').find('.commentator-active').find('a').click();
			}
		});
		e.preventDefault();
	});

	$(document).on('click', '.commentator-delete', function(e){
		var $t = $(this),
			$comment = $t.parents('.comment').first();
		var id = $comment.attr('id').replace('comment-', '');
		$('.commentator-alert').remove();
		$.post(ajaxurl, "comment_ID="+id+"&action=commentator_delete", function(data){
			if(data.message){
				$.addAlert(data.message, "message");
			}
			if(data.errors){
				$.each(data.errors, function(i, v){
					$.addAlert(v, "error");
				});
			}
			else{
				$comment.remove();
			}
		});
		e.preventDefault();
	});

	$(document).on('click', '.commentator-pick', function(e){
		var $t = $(this),
			$comment = $t.parents('.comment').first();

		if($t.hasClass("commentator-disabled")){
			return false;
		}
		var className = $t.find('i').get(0).className;
		$t.find('i').get(0).className = 'fa fa-spin';

		var id = $comment.attr('id').replace('comment-', '');
		$('.commentator-alert').remove();
		$.post(ajaxurl, "comment_ID="+id+"&action=commentator_pick", function(data){
			if(data.message){
				$.addAlert(data.message, "message");
			}
			if(data.errors){
				$.each(data.errors, function(i, v){
					$.addAlert(v, "error");
				});
			}
			else{
				$t.toggleClass("commentator-active");
			}
			$t.find('i').get(0).className = className;
		});
		e.preventDefault();
	});

	$(document).on('click', '.commentator-subscribe', function(e){
		var $t = $(this);

		if($t.hasClass("commentator-disabled")){
			return false;
		}
		var className = $t.find('i').get(0).className;
		$t.find('i').get(0).className = 'fa fa-spin';

		$('.commentator-alert').remove();
		$.post(ajaxurl, $t.data("type")+"="+$t.data("id")+"&action=commentator_subscribe", function(data){
			if(data.message){
				$.addAlert(data.message, "message");
			}
			if(data.errors){
				$.each(data.errors, function(i, v){
					$.addAlert(v, "error");
				});
			}
			else{
				$t.toggleClass("commentator-active");
			}
			$t.find('i').get(0).className = className;
		});
		e.preventDefault();
	});

	$(document).on('click', '.commentator-reply', function(e){
		var $t = $(this),
			$form = $('#commentator-form').find('.commentator-form'),
			$comment = $t.parents('.comment').first(),
			$children = $comment.children(".children").first();

		if(!$children.length){
			$children = $('<ul class="children"/>').appendTo($comment);
		}

		var id = $comment.attr('id').replace('comment-', '');
		$('.commentator-alert').remove();
		if($('#commentator-cloned-form').length){
			$('#commentator-cloned-form').remove();
		}

		if($t.hasClass("commentator-reply--active")){
			$t.removeClass("commentator-reply--active");
			return false;
		}
		else{
			$(".commentator-reply--active").removeClass("commentator-reply--active");
			$t.addClass("commentator-reply--active");
			var $newForm = $form.clone(false).attr('id', 'commentator-cloned-form').prependTo($children)
			$newForm.find('#comment_parent').val(id);
			$newForm.find(".commentator-textarea").focus();
			initUploads();
			if($newForm.find(".commentator-image-preview").length){
    			$newForm.find(".commentator-image-preview").remove();
    		}
			e.preventDefault();
		}
	});

	$(document).on('click', '.commentator-thread-likes-toggle', function(e){
		var $t = $(this),
			$parent = $t.parent('.commentator-thread-likes'),
			$form = $('#commentator-form').find('.commentator-form'),
			data = "comment_post_ID="+$('#commentator-form').find('#comment_post_ID').val()+"&action=commentator_vote-thread";
		$('.commentator-alert').remove();
		$.post(ajaxurl, data, function(data){
			if(data.message){
				$.addAlert(data.message, "message");
			}
			if(data.errors){
				$.each(data.errors, function(i, v){
					$.addAlert(v, "error");
				});
			}
			else{
				if(data.hasVoted)
					$parent.addClass('commentator-active');
				else
					$parent.removeClass('commentator-active');
				$t.find('.commentator-counter').text(data.count);
			}
		});
		e.preventDefault();
	});

	$(document).on('click', '.commentator-vote-up', function(e){
		var $t = $(this),
			$form = $('#commentator-form').find('.commentator-form'),
			data = "comment_ID="+$t.data('comment-id')+"&multiplicator=1&action=commentator_vote-comment";
		$('.commentator-alert').remove();
		$t.find('i').addClass('fa fa-spin');
		$.post(ajaxurl, data, function(data){
			if(data.message){
				$.addAlert(data.message, "message");
			}
			if(data.errors){
				$.each(data.errors, function(i, v){
					$.addAlert(v, "error");
				});
			}
			else{
				if(data.hasVoted){
					$t.addClass('commentator-active');
				}
				else{
					$t.removeClass('commentator-active');
				}
				$t.find('span').text(data.count);

				if(data.hasVotedOpposite){
					$t.parent().find('.commentator-vote-down').addClass('commentator-active');
				}
				else{
					$t.parent().find('.commentator-vote-down').removeClass('commentator-active');
				}
				$t.parent().find('.commentator-vote-down').find('span').text(data.countOpposite);
			}
			$t.find('i').removeClass('fa-spin');
		});
		e.preventDefault();
	});

	$(document).on('click', '.commentator-vote-down', function(e){
		var $t = $(this),
			$form = $('#commentator-form').find('.commentator-form'),
			data = "comment_ID="+$t.data('comment-id')+"&multiplicator=-1&action=commentator_vote-comment";
		$('.commentator-alert').remove();
		$t.find('i').addClass('fa fa-spin');
		$.post(ajaxurl, data, function(data){
			if(data.message){
				$.addAlert(data.message, "message");
			}
			if(data.errors){
				$.each(data.errors, function(i, v){
					$.addAlert(v, "error");
				});
			}
			else{
				if(data.hasVoted){
					$t.addClass('commentator-active');
				}
				else{
					$t.removeClass('commentator-active');
				}
				$t.find('span').text(data.count);

				if(data.hasVotedOpposite){
					$t.parent().find('.commentator-vote-up').addClass('commentator-active');
				}
				else{
					$t.parent().find('.commentator-vote-up').removeClass('commentator-active');
				}
				$t.parent().find('.commentator-vote-up').find('span').text(data.countOpposite);
			}
			$t.find('i').removeClass('fa-spin');
		});
		e.preventDefault();
	});

	$(document).on('click', '.commentator-sort', function(e){
		var $t = $(this);
		var	$current =  $('#comments').find('.page-numbers.current').first();
		var	page = $current.attr('href') ? $current.attr('href').substring(1) : $current.text();

		if(!$t.parent().hasClass('commentator-active'))
			page = 1;

		var	data = "comment_post_ID="+$('#commentator-form').find('#comment_post_ID').val()+"&commentator_sort="+$t.data('commentator-sort')+"&comment_page="+page+"&action=commentator_sort-comments";

		$t.parent().parent().find('.commentator-active').removeClass('commentator-active');
		$t.parent().addClass('commentator-active');
		$('#commentator-comments-list').empty().addClass('fa fa-spin');
		$.post(ajaxurl, data, function(data){
			$('#commentator-comments-list').html(data).removeClass('fa fa-spin');
			$('#commentator-pagination').html($('#commentator-new-pagination-container').html());
			$('#commentator-new-pagination-container').remove();
		});
		e.preventDefault();
	});

	$(document).on('click', '.commentator-logout', function(e){
		var $t = $(this);
		$('.commentator-alert').remove();
		$.post(ajaxurl, "action=commentator_logout", function(data){
			if(data.message){
				$.addAlert(data.message, "message");
			}
			if(data.errors){
				$.each(data.errors, function(i, v){
					$.addAlert(v, "error");
				});
			}
			else{
				location.reload();
			}
		});
		e.preventDefault();
	});

	$(document).on('click', '.commentator-close', function(e){
		var $t = $(this),
			$alert = $t.parent();
		$alert.remove();
		e.preventDefault();
	});

	$(document).on('click', '.commentator-toggle-visibility', function(e){
		var $t = $(this),
			$comment = $($t.attr('href'));
		$comment.toggleClass('commentator-collapsed');
		e.preventDefault();
	});

	$(document).on('click', function(e){
		$('.commentator-dropdown').removeClass('commentator-open');
	});

	$(document).on('click', '.commentator-dropdown-toggle', function(e){
		var $t = $(this);
		$('.commentator-dropdown').not($t.parent()).removeClass('commentator-open');
		$t.parent().toggleClass('commentator-open');
		return false;
	});

	$(document).on('click', '.commentator-dropdown-menu', function(e){
		e.stopPropagation();
	});

	$(document).on('click', '.commentator-social-login-button', function(e){
		window.open(
			ajaxurl+"?action=commentator_social_signin&provider="+$(this).data('provider'),
			"_blank",
			"toolbar=no, scrollbars=no, menubar=no, status=no, titlebar=no, width=800, height=450"
		);
		e.preventDefault();
	});

	$(document).on('click', '#comments .page-numbers', function(e){
		var $t = $(this);
		$t.parent().find('.current').removeClass('current');
		$t.addClass('current');
		$('#commentator-sort').find('.commentator-active').find('.commentator-sort').click();
		e.preventDefault();
	});

	$.addAlert = function(content, alertClass){
		$(	'<div class="commentator-alert commentator-'+alertClass+'"><a class="commentator-close" href="#">×</a>'+
    			'<span>'+content+'</span>'+
    		'</div>').prependTo('#commentator-alert-container');
	};

	window.Commentator = {
		init: function(){
			initUploads();
			if($.fn.fitVids){
				$("#comments").fitVids();
			}
		}
	};

	window.Commentator.init();
});