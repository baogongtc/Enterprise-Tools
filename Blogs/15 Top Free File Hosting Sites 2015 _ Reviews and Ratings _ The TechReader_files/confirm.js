/*
 * SimpleModal Confirm Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery(function ($) {
	$('#confirm-dialog input.confirm, #confirm-dialog a.confirm').click(function (e) {
		e.preventDefault();

		// example of calling the confirm function
		// you must use a callback function to perform the "yes" action
		confirm("<table><tr><td width='331px'><img src='http://thetechreader.com/wp-content/themes/thetechreader/images/cute-cat.gif' style='min-width: 331px !important;' class='cat-gif' /></td><td style='vertical-align: top !important;'><div class='dialog-text'><span class='nice-font'><b>Helper cat wants you to register</b> so you can use this great feature!<br><br> <b>Registration is FREE!</b> You need to register because how would we save your favorites otherwise? :P &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(or, <a href='http://thetechreader.com/login'>Login</a>)<br><br> Please bookmark this page so you can come back to it after registering.</span></div></td></tr></table>", function () {
			window.location.href = 'http://thetechreader.com/register/';
		});
	});
});

function confirm(message, callback) {
	$('#confirm').modal({
		closeHTML: "<a href='#' title='Close' class='modal-close'>x</a>",
		position: ["20%",],
		overlayId: 'confirm-overlay',
		containerId: 'confirm-container', 
		onShow: function (dialog) {
			var modal = this;

			$('.message', dialog.data[0]).append(message);

			// if the user clicks "yes"
			$('.yes', dialog.data[0]).click(function () {
				// call the callback
				if ($.isFunction(callback)) {
					callback.apply();
				}
				// close the dialog
				modal.close(); // or $.modal.close();
			});
		}
	});
}