;
(function($) {
	"use strict"
	var deafults = {
			autoHide: true,
			offset: 10,
			speed: 200,
			fadeSpeed: 'normal'
		},
		$window = $(window),
		opt = {};

	$.fn.toTop = function(options) {
		var $this = $(this);
		opt = $.extend({}, deafults, options || {});
		if (opt.autoHide) {
			scroll.apply($this);
		}
		$window.scroll(function() {
			scroll.apply($this);
		});
		return this.each(function() {
			$this.bind('click', handleToTop);
		});
	}

	function scroll() {
		var offsetTop = $window.scrollTop();
		if (offsetTop >= opt.offset) {
			if (!this.is(":visible")) {
				this.fadeIn(opt.fadeSpeed);
			}
		} else if (this.is(':visible')) {
			this.fadeOut(opt.fadeSpeed);
		}
		//console.log(offsetTop);
	};

	function handleToTop() {
		$("body,html").animate({
			scrollTop: 0
		}, opt.speed);
		//$("body").scrollTop(0);
	}
})(jQuery);