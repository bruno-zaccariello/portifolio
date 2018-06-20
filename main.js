function ToggleContent(id) {
	var content = $('#'+id);
	content.slideToggle();
}

function ScrollTo(id) {
    $('html', 'body').animate({
        scrollTop: $("#"+id).offset().top - 75
    }, 700);
};
