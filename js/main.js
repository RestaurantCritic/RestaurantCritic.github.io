
jQuery(function($) {
    $('.menuDesktop').css({ 'height':  $(window).height() + 'px' });

});

jQuery(function($) {
    $('.pageArticle').css({ 'height':  $(window).height() + 'px' });

});

function hide(div) {
	document.getElementById(div).style.display='none';
	return false;
}


if ($(window).width() > 769) {
    $('#menu').addClass('menuDesktop');
} else {
    $('#menu').removeClass('menuDesktop');
}

if ($(window).width() < 769) {
    $('#menu').addClass('menuMobile');
} else {
    $('#menu').removeClass('menuMobile');
}


jQuery(function($) {
    $('.menuDesktop').css({ 'height':  $(window).height() + 'px' });

});

jQuery(function($) {
    $('.menuMobile').css({ 'width': $(window).width() + 'px' });

});

/*
  Slidemenu
*/
(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
		
	}

}).call(this);



$(document).ready(function() {
		$('.scrollTo').click( function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});



$(".blockTop").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ $('.blockTop').css({"opacity":"1"}); });


$(window).load(function() {
  var slide=0;

  
  setTimeout(function(){
    document.getElementById("loader").classList.add("loaded");
    $("section.content").addClass("loaded");
  }, 600);
  
});

