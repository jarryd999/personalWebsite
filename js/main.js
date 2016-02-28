$(document).ready(function() {

	$(window).scroll(function() {
	    if($(this).scrollTop() > $(window).height()/2.4) {
	        $('.navbar-fixed-top').addClass('opaque');
	    } else {
	        $('.navbar-fixed-top').removeClass('opaque');
	    }
	});
});