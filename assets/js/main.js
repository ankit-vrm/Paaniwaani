$(document).ready(function() {

/*--- header ---*/
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 0) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});
$(".header-toggle").click(function(){
    $("body").toggleClass("show-menu");
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

/* ----- timer ------ */
$(function timer () {
  // Set your start date here (e.g., "2025-04-01T00:00:00")
  const startDate = new Date("2025-04-11T00:00:00");

  function updateTimer() {
    const now = new Date();
    const diff = now - startDate; // Time difference in milliseconds
    const seconds = Math.floor(diff / 1000);
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    // Update the timer in the DOM
    $("#timer").text(`${hrs} : ${mins} : ${secs}`);
  }

  // Call updateTimer every second
  setInterval(updateTimer, 1000);

  // Initial call to show the timer immediately
  updateTimer();
});    

/*---- product slider ---- */    
$('.product-wrapper').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 581,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  });


});