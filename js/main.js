$(function () {

	// Hamburger
	$('.menu-btn').on('click', function(e) {
	  e.preventDefault();
	  $(this).toggleClass('menu-btn_active');
	  $('.menu-mobile').toggleClass('menu-mobile_active');
	});

	$('.menu-mobile__link').on('click', function(e) {
	  e.preventDefault();
	  $('.menu-btn').toggleClass('menu-btn_active');
	  $('.menu-mobile').toggleClass('menu-mobile_active');
	});


	// Плавный скроллинг
	$('.go_to').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });

});