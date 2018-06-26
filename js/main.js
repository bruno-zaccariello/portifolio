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
		$('#menu_container_en').fadeOut(1);
		$('#menu_container_pt').fadeIn(500);
		$('#lang_div').html('PT-BR');
		$('#lang_title').html('Idioma');
		$('#sobre_content_eng').fadeOut(1);
		$('#sobre_content').fadeIn(500);
		$('#media_container_en').fadeOut(1);
		$('#media_container_pt').fadeIn(500);
		change_lang_menu(1);
	} else if (lang == 'EN') {
		$('#menu_container_pt').fadeOut(1);
		$('#menu_container_en').fadeIn(500);
		$('#lang_div').html('EN-US');
		$('#lang_title').html('Language');
		$('#sobre_content').fadeOut(1);
		$('#sobre_content_eng').fadeIn(500);
		$('#media_container_pt').fadeOut(1);
		$('#media_container_en').fadeIn(500);
		change_lang_menu(1);
	}
}