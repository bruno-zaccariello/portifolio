window.onscroll = function() {scrollMagic()};

function scrollMagic() {
	if ($(window).scrollTop() >= 70) {
		$('.menu_container').addClass('menu_fix');
	} else {
		$('.menu_container').removeClass('menu_fix');
	}
	$('.cb').each(function () {
		var janela = $(window).scrollTop()
		var posTop = $(this).offset().top - 400;
		var posBottom = posTop + $(this).outerHeight(true);
		if ($('#lock_scroll').hasClass('unlock')) {
			if (janela >= posTop && janela <= posBottom + 200) {
				$(this).children('section').fadeIn(1000);
			} else if (janela >= posBottom) {
				$(this).children('section').fadeOut(1000);
			} else {
				$(this).children('section').fadeOut(1000);
			}
		}
	});
}