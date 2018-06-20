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
	var menu = document.querySelectorAll("div.menu_opt");;
	var inicio = menu[0]
	var sobre = menu[1]
	var contato = menu[2]
	if (lang == 'PT-BR') {
		$('#lang_div').html('PT-BR');
		$('#lang_title').html('Idioma');
		$('#sobre_content_eng').fadeOut(1);
		$('#sobre_content').fadeIn(500);
		$(inicio).html('Início');
		$(sobre).html('Sobre');
		$(contato).html('Contato');
		change_lang_menu(1);
	} else if (lang == 'EN') {
		$('#lang_div').html('EN-US');
		$('#lang_title').html('Language');
		$('#sobre_content').fadeOut(1);
		$('#sobre_content_eng').fadeIn(500);
		$(inicio).html('Home');
		$(sobre).html('About');
		$(contato).html('Contact');
		change_lang_menu(1);
	}
}