// Tạo menu mobile
$(function() {
	function darken_screen(yesno) {
		if (yesno) {
			document.querySelector('.screen-darken').classList.add('active');
		} else {
			document.querySelector('.screen-darken').classList.remove('active');
		}
	}
	
	function close_offcanvas() {
		darken_screen(false);
		document.querySelector('.mobile-offcanvas.show').classList.remove('show');
		document.body.classList.remove('offcanvas-active');
	}
	
	function show_offcanvas(offcanvas_id) {
		darken_screen(true);
		document.getElementById(offcanvas_id).classList.add('show');
		document.body.classList.add('offcanvas-active');
	}
	
	$(function() {
		document.querySelectorAll('[data-trigger]').forEach(function(everyelement) {
			let offcanvas_id = everyelement.getAttribute('data-trigger');
			everyelement.addEventListener('click', function(e) {
				e.preventDefault();
				show_offcanvas(offcanvas_id);
	
			});
		});
	
		document.querySelectorAll('.btn-close').forEach(function(everybutton) {
	
			everybutton.addEventListener('click', function(e) {
				e.preventDefault();
				close_offcanvas();
			});
		});
	
		document.querySelector('.screen-darken').addEventListener('click',
				function(event) {
					close_offcanvas();
				});
	
	});
});
// kéo xuống khoảng cách 500px thì xuất hiện nút Top-up
var offset = 500;
// thời gian di trượt 0.75s ( 1000 = 1s )
var duration = 750;
$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset)
			$('#top-up').fadeIn(duration);
		else
			$('#top-up').fadeOut(duration);
	});
	$('#top-up').click(function() {
		$('body,html').animate({
			scrollTop : 0
		}, duration);
	});
});
// modal img

document.addEventListener("click", function(e) {
	if (e.target.classList.contains("gallery-item")) {
		const src = e.target.getAttribute("src");
		document.querySelector(".modal-img").src = src;
		const myModal = new bootstrap.Modal(document
				.getElementById('gallery-modal'));
		myModal.show();
	}
})

// end

//focus-menu-header
var items = document.querySelectorAll('.menu-header');

function handleIndicator(el) {
    items.forEach(function (item) {
        item.classList.remove('activee');
        item.removeAttribute('style');
    });
    el.classList.add('activee');
}

items.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
        handleIndicator(e.target);
    });
    item.classList.contains('activee') && handleIndicator(item);
}

);
//end
$('.sliders').slick({
	infinite : true,
	dots : true,
	slidesToShow : 4,
	slidesToScroll : 2,
	autoplay: true,
	responsive : [ {
		breakpoint : 1024,
		settings : {
			slidesToShow : 2,
			slidesToScroll : 2,
			infinite : true,
			dots : true
		}
	}, {
		breakpoint : 600,
		settings : {
			slidesToShow : 2,
			slidesToScroll : 2
		}
	}, {
		breakpoint : 480,
		settings : {
			slidesToShow : 1,
			slidesToScroll : 1
		}
	}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
	]
});

// siler parent
$('.parent-slider').slick({
	infinite : true,
	dots : true,
	slidesToShow : 1,
	slidesToScroll : 1,
	autoplay: true,
	responsive : [ {
		breakpoint : 1024,
		settings : {
			slidesToShow : 1,
			slidesToScroll : 1,
			infinite : true,
			dots : true
		}
	}, {
		breakpoint : 600,
		settings : {
			slidesToShow : 1,
			slidesToScroll : 1
		}
	}, {
		breakpoint : 480,
		settings : {
			slidesToShow : 1,
			slidesToScroll : 1
		}
	}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
	]
});
