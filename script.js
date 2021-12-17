$(document).ready(function() {
	$('#see-product').click(function() {
		$('#outside-main').show();
		setTimeout(function() {
			$([document.documentElement, document.body]).animate({
		        scrollTop: $("#product-section").offset().top - $('#header').height() - 40
		    }, 600);
		    setTimeout(function() {
			    $('#ps-right').css({
			    	'bottom': '0'
			    });
			    $('#ps-left').css({
			    	'bottom': '0'
			    });
			    $('#header').css({
			    	'background': '#000d'
			    });
			    setTimeout(function() {
				    $('#ps-right').css({
				    	'opacity': '1'
				    });
				    $('#ps-left').css({
				    	'opacity': '1'
				    });
				}, 300);
			}, 300);
		});
	});
});