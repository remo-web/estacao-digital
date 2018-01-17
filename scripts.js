//MDC

$(function() {
    //ripple
    var btns = document.querySelectorAll('.mdc-button');
    for (var i = 0, btn; btn = btns[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(btn);
    }
    
    mdc.tabs.MDCTabBar.attachTo(document.querySelector('#mdc-tab-bar'));
    
});

//fullPage

$(document).ready(function() {
	$('#fullpage').fullpage({
        anchors:['home', 'Lonas'],
        menu: '#mdc-tab-bar',
    });
});

//Hover do Menu... Sim, isso tudo.

$('.ed-home__button--menu.ed-cyan').mouseenter(
    function(){
        $('.ed-cyan > .ed-home__button--menu--text').addClass('animated fadeOutDown');
        $('.ed-cyan > .ed-home__button--menu--hover').addClass('animated fadeInUp');
        $('.ed-cyan > .ed-home__button--menu--hover').removeClass('fadeOutDown');
}); 

$('.ed-home__button--menu.ed-cyan').mouseleave(
    function(){
        $('.ed-cyan > .ed-home__button--menu--text').removeClass('animated fadeOutDown');
        $('.ed-cyan > .ed-home__button--menu--text').addClass('animated fadeInUp');
        $('.ed-cyan > .ed-home__button--menu--hover').removeClass('animated fadeInUp');
        $('.ed-cyan > .ed-home__button--menu--hover').addClass('animated fadeOutDown');
});

$('.ed-home__button--menu.ed-magenta').mouseenter(
    function(){
        $('.ed-magenta > .ed-home__button--menu--text').addClass('animated fadeOutDown');
        $('.ed-magenta > .ed-home__button--menu--hover').addClass('animated fadeInUp');
        $('.ed-magenta > .ed-home__button--menu--hover').removeClass('fadeOutDown');
}); 

$('.ed-home__button--menu.ed-magenta').mouseleave(
    function(){
        $('.ed-magenta > .ed-home__button--menu--text').removeClass('animated fadeOutDown');
        $('.ed-magenta > .ed-home__button--menu--text').addClass('animated fadeInUp');
        $('.ed-magenta > .ed-home__button--menu--hover').removeClass('animated fadeInUp');
        $('.ed-magenta > .ed-home__button--menu--hover').addClass('animated fadeOutDown');
});

$('.ed-home__button--menu.ed-yellow').mouseenter(
    function(){
        $('.ed-yellow > .ed-home__button--menu--text').addClass('animated fadeOutDown');
        $('.ed-yellow > .ed-home__button--menu--hover').addClass('animated fadeInUp');
        $('.ed-yellow > .ed-home__button--menu--hover').removeClass('fadeOutDown');
}); 

$('.ed-home__button--menu.ed-yellow').mouseleave(
    function(){
        $('.ed-yellow > .ed-home__button--menu--text').removeClass('animated fadeOutDown');
        $('.ed-yellow > .ed-home__button--menu--text').addClass('animated fadeInUp');
        $('.ed-yellow > .ed-home__button--menu--hover').removeClass('animated fadeInUp');
        $('.ed-yellow > .ed-home__button--menu--hover').addClass('animated fadeOutDown');
});

$('.ed-home__button--menu.ed-black').mouseenter(
    function(){
        $('.ed-black > .ed-home__button--menu--text').addClass('animated fadeOutDown');
        $('.ed-black > .ed-home__button--menu--hover').addClass('animated fadeInUp');
        $('.ed-black > .ed-home__button--menu--hover').removeClass('fadeOutDown');
}); 

$('.ed-home__button--menu.ed-black').mouseleave(
    function(){
        $('.ed-black > .ed-home__button--menu--text').removeClass('animated fadeOutDown');
        $('.ed-black > .ed-home__button--menu--text').addClass('animated fadeInUp');
        $('.ed-black > .ed-home__button--menu--hover').removeClass('animated fadeInUp');
        $('.ed-black > .ed-home__button--menu--hover').addClass('animated fadeOutDown');
});