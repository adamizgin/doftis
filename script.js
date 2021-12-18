$(document).ready(function() {
	$('#see-product').click(function() {
		$('#outside-main').show();
		setTimeout(function() {
			$([document.documentElement, document.body]).animate({
		        scrollTop: $("#product-section").offset().top - 75+'px'
		    }, 600);
		    setTimeout(function() {
			    $('#ps-right').css({
			    	'bottom': '0'
			    });
			    $('#mobile-ps-img').css({
			    	'top': '50%'
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
				    $('#mobile-ps-img').css({
				    	'opacity': '1'
				    });
				}, 200);
			}, 200);
		});
	});
});
