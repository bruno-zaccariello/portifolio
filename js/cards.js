$('.card').click(function() {
	if ($(window).width() < 1000) {
		$('#lock_scroll').toggleClass('unlock');
		$('#card_bg').fadeToggle();
	}
	$(this).toggleClass('is-flipped');
	$(this).parent().toggleClass('is-flipped');
})