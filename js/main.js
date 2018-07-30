function ToggleContent(id) {
	var content = $('#'+id);
	content.slideToggle();
}

function ScrollTo(id) {
    $('html, body').animate({
        scrollTop: $("#"+id).offset().top - 30
    }, 700);
};

function change_lang_menu(speed=200, operation='') {
	if (operation == 'close') {
		$('#lang_menu').fadeOut(speed);
	} else {
		$('#lang_menu').fadeToggle(speed);
		}
	}

function change_lang(lang) {
	if (lang == 'PT-BR') {
		$("[lang='en']").fadeOut(1);
		$("[lang='pt']").fadeIn(500);
		$('#lang_div_smart').html('PT-BR');
		$('#lang_title').html('Idioma');
		change_lang_menu(1);
	} else if (lang == 'EN') {
		$("[lang='pt']").fadeOut(1);
		$("[lang='en']").fadeIn(500);
		$('#lang_div_smart').html('EN-US');
		$('#lang_title').html('Language');
		change_lang_menu(1);
	}
}