var rabatt = true;

$(() => {
	setTimeout(function() {
		$(window).scrollTop(0, 0);
	}, 100);

	$('.see-info').click(() => {
		$([document.documentElement, document.body]).animate({
	        scrollTop: $("#info-section").offset().top - 75+'px'
	    }, 600);
	});

	$('#order-header-button').click(() => {
		$([document.documentElement, document.body]).animate({
	        scrollTop: $("#product-section").offset().top - 75+'px'
	    }, 600);
	});







	setTimeout(() => {
		$('.product-details__product-price-taxes').html('299.00kr');

		const shipping_info = document.createElement('p');
		shipping_info.innerHTML = "<button id='shipping_button' onclick='scroll_to_shipping();'><p>Fraktinformation</p></button>";
		$('.product-details-module__content')[0].append(shipping_info);



		if (rabatt == true) {
			$('.details-product-price__value').css({
				'color': '#f00'
			});
		}
	}, 4000);

});

function see_info() {
	if ($(window).width() <= 640) {
		$('.canvas-computer').removeAttr('id');
		$('.canvas-mobile').attr('id', 'canvas');
	} else if ($(window).width() >= 640) {
		$('.canvas-mobile').removeAttr('id');
		$('.canvas-computer').attr('id', 'canvas');
	}
	setTimeout(function() {
		setTimeout(function() {
			$('#smoke-script').attr('src', 'smoke.js');
		}, 500);
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
}




// On scroll
function scrolling_effect() {
	infoHeight = $("#info-section").offset().top / 2;
	setTimeout(function() {
		if ($(window).scrollTop() >= infoHeight - 150) {
			see_info();
			setTimeout(function() {
				$('body').removeAttr('onscroll');
			}, 200);
		}
	}, 100);
}





function scroll_to_shipping() {
	$([document.documentElement, document.body]).animate({
        scrollTop: $("#calculate-shipping-section").offset().top - 75+'px'
    }, 600);
}




function calculateDate(n) {
	var t = new Date();
	t.setDate(t.getDate() + n); 
	var month = "0"+(t.getMonth()+1);
	var date = "0"+t.getDate();
	month = month.slice(-2);
	date = date.slice(-2);
	var date = date +"/"+month +"/"+t.getFullYear();
	$('#calculated-date-p').show();
	$('#calculated-date').html(date);
}
