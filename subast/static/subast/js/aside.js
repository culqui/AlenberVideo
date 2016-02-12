$('.new-requirement:not(".active-li")').hover( function(){
	$('img', this).attr('src', '/static/subast/img/21-Pub-req-blue-36.png');
}, function(){
	$('img', this).attr('src', '/static/subast/img/21-Pub-req-white-blue-36.png');
});

$('.new-requirement:not(".active-li")').focus( function(){
	$('img', this).attr('src', '/static/subast/img/21-Pub-req-blue-36.png');
});

$('.new-requirement:not(".active-li")').focusout( function(){
	$('img', this).attr('src', '/static/subast/img/21-Pub-req-white-blue-36.png');
});

$('.inbox:not(".active-li")').hover( function(){
	$('img', this).attr('src', '/static/subast/img/29-Buzon-blue-36.png');
}, function(){
	$('img', this).attr('src', '/static/subast/img/29-Buzon-white-blue-36.png');
});

$('.inbox:not(".active-li")').focus( function(){
	$('img', this).attr('src', '/static/subast/img/29-Buzon-blue-36.png');
});

$('.inbox:not(".active-li")').focusout( function(){
	$('img', this).attr('src', '/static/subast/img/29-Buzon-white-blue-36.png');
});

$('.cotizations:not(".active-li")').hover( function(){
	$('img', this).attr('src', '/static/subast/img/22-Req-en-Cot-blue-36.png');
}, function(){
	$('img', this).attr('src', '/static/subast/img/22-Req-en-Cot-white-blue36.png');
});

$('.orders:not(".active-li")').hover( function(){
	$('img', this).attr('src', '/static/subast/img/23-Req-en-Comp-blue-36.png');
}, function(){
	$('img', this).attr('src', '/static/subast/img/23-Req-en-Comp-all-white-36.png');
});

$('.historial:not(".active-li")').hover( function(){
	$('img', this).attr('src', '/static/subast/img/24-Historico-blue-36.png');
}, function(){
	$('img', this).attr('src', '/static/subast/img/24-Historico-allwhite-36.png');
});

$('.statistics:not(".active-li")').hover( function(){
	$('img', this).attr('src', '/static/subast/img/25-Estadisticas-blue-36.png');
}, function(){
	$('img', this).attr('src', '/static/subast/img/25-Estadisticas-allwhite-36.png');
});