$(document).ready(function() {

  //header toggle
  const toggle = document.getElementById("menu-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });
    const removeToggle = document.getElementById("toggle-close");
  removeToggle.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });

 //page scroll
let lastScroll = 0;
$(window).on("scroll", function () {
    let currentScroll = $(this).scrollTop();
    // hide / show on scroll direction
    // if (currentScroll > lastScroll && currentScroll > 120) {
    //     $("header").addClass("hide-header");
    // } else {
    //     $("header").removeClass("hide-header");
    // }
    // bg color when scrolling
    if (currentScroll > 10) {
        $("header").addClass("header-bg");
    } else {
        $("header").removeClass("header-bg");
    }

    lastScroll = currentScroll;
});

//home slider
$('.hero-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 600,
  fade: true,
  cssEase: 'linear'
});

//counter section 
    function runCounters() {
        $('.counter-box span').each(function () {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            
            $({ countNum: 0 }).animate(
                { countNum: countTo },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                }
            );
        });
    }
    // Trigger only when section is in view
    let viewed = false;
    $(window).on('scroll', function () {
        var sectionTop = $('.counter-section').offset().top - window.innerHeight;

        if (!viewed && $(window).scrollTop() > sectionTop) {
            viewed = true;
            runCounters();
        }
    });

    // product slider
        $('.products-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    });

    //FAQ section
$(".faq-question").on("click", function () {
  var faqItem = $(this).parent();
  if (faqItem.hasClass("active")) {
    // If already open, close it smoothly
    faqItem.removeClass("active");
    faqItem.find(".faq-answer").stop(true, true).slideUp(300);
  } else {
    // Close all other items first
    $(".faq-item.active")
      .removeClass("active")
      .find(".faq-answer")
      .stop(true, true)
      .slideUp(300);
    // Open the clicked one
    faqItem.addClass("active");
    faqItem.find(".faq-answer").stop(true, true).slideDown(300);
  }
});

  //post gallery
$(".insta-item img").on("click", function() {
  var imgSrc = $(this).attr("src");
  $("#lightbox-img").attr("src", imgSrc);
  $("body").addClass("no-scroll");
  $(".lightbox").fadeIn(300).css("display", "flex");
});

$(".close-lightbox, .lightbox").on("click", function(e) {
  // Only close when clicking on overlay or close button
  if (e.target !== e.currentTarget && !$(e.target).hasClass("close-lightbox")) return;
  
  $(".lightbox").fadeOut(300, function() {
    $("body").removeClass("no-scroll");
    $("#lightbox-img").attr("src", "");
  });
});

});