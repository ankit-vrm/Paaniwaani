$(document).ready(function() {

/*--- header ---*/
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 0) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});


/*---- banner slider ----*/
$('.banner-inner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear'
  });


/*----- counter section -----*/
    function animateCounter(element, target, duration) {
        $({ count: 0 }).animate(
            { count: target },
            {
                duration: duration,
                easing: 'swing',
                step: function(now) {
                    element.text(Math.floor(now) + ' +');
                },
                complete: function() {
                    element.text(target + ' +'); // Ensure the final value is set
                }
            }
        );
    }
    // Apply the animation to each counter
    $('.counter').each(function() {
        const $this = $(this);
        const targetValue = parseInt($this.data('target'), 10);
        animateCounter($this, targetValue, 2000); // Adjust duration as needed
    });


/*---- product slider ---- */    
$('.product-wrapper').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
  });


});