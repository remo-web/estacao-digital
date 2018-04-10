$(document).ready(function() {
    if ( $(window).width() < 1280 || window.Touch) { 
        var edSensitivity = 1; 
        var edFixed = '.ed-destaque--detalhes__mobile';
    } else {
        var edSensitivity = 100; 
        var edFixed = 0;
    }
    
    $('.ed-destaque--button__more').click(function(e){
        if ($(window).width() < 1280) {
            $.fn.fullpage.setAllowScrolling(false);
        }
    });
	
    $('#fullpage').fullpage({
        anchors: ['home', 'Lonas', 'Adesivos', 'Placas', 'Tecido', 'TheEnd'],
        scrollOverflow: true,
        keyboardScrolling: false,
        normalScrollElements:'.fp-kill',
        animateAnchor: false,
        touchSensitivity: edSensitivity,
        fixedElements: edFixed,
    });
});

//DESTAQUES - MOBILE


//MAIN FOOTER
$('#ed-footer-quemsomos').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});
$('#ed-footer-servicos').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});
$('#ed-footer-fizemos').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});
$('#ed-footer-contato').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});
$('#ed-footer-email').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});

//DRAWER
$('#ed-drawer-quemsomos').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});
$('#ed-drawer-servicos').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});
$('#ed-drawer-fizemos').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});
$('#ed-drawer-contato').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});

//OUTROS FOOTER
$('.ed-footer--toslide__lonas').click(function(e){
    e.preventDefault();
    $.fn.fullpage.silentMoveTo('Lonas');
});
$('.ed-footer--toslide__adesivos').click(function(e){
    e.preventDefault();
    $.fn.fullpage.silentMoveTo('Adesivos');
});
$('.ed-footer--toslide__placas').click(function(e){
    e.preventDefault();
    $.fn.fullpage.silentMoveTo('Placas');
});
$('.ed-footer--toslide__tecido').click(function(e){
    e.preventDefault();
    $.fn.fullpage.silentMoveTo('Tecido');
});
