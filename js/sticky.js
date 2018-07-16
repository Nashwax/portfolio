/****************************/
/*        sticky nav        */
/****************************/

var stickyNavTop = $('.navbar').offset().top;

function stickyNav()
{
  var scrollTop = $(window).scrollTop();

  if (scrollTop > stickyNavTop) 
  { 
    $('.navbar').addClass('sticky');
  } else {
    $('.navbar').removeClass('sticky'); 
  }
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});



/****************************/
/*        to top link       */
/****************************/

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ?   verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
$('.scroll-top-wrapper').on('click', scrollToTop);

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
	  $('.scroll-top-wrapper').addClass('show');
	} else {
		$('.scroll-top-wrapper').removeClass('show');
	}
});