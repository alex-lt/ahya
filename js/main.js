$(document).ready(function(){
  
  $(window).resize(function () {
      if($(window).width() <= 768) {
          $('.hero__button').removeClass('hero__button--hover');
          $('.header__navbar-link').removeClass('header__navbar-link--hover');
          $('.header__navbar-button').removeClass('header__navbar-button--hover');
          $('.collection-text__link').removeClass('collection-text__link--hover');
      };
  });

  // filtres

  var filter = $("[data-filter]");

  filter.on('click', function (event) {
    event.preventDefault();
    filter.removeClass('active');
    $(this).addClass('active');
  
    var cat = $(this).data('filter'); 

    
    if(cat == 'new') {
      $("[data-cat]").removeClass('hide');
    } else {

      $("[data-cat]").each(function () {
        var itemCat = $(this).data('cat');
        if(itemCat != cat) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });
    }
  });

  // testimonial slider
  var testimonialSlider = new Swiper('.testimonial-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    passiveListeners: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
          });
        }
      },
    })

  //stories slider
  var storiesSlider = new Swiper('.stories-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.stories-button--next',
      prevEl: '.stories-button--prev',
    },
  
  })

  // validation 
  $(".form").each( function(){
    $(this).validate({
      errorClass: "validate",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
      });
    });
});
