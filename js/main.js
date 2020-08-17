$(document).ready(function(){
  
  var menuButton = $(".button-menu");
  var closeBtn = $(".close");
  menuButton.on('click', openMenu)
  closeBtn.on('click', closeMenu)
 
  function openMenu() {
    var navbarMenu = $(".header__navbar");
    navbarMenu.addClass("header__navbar--visible");
  }
  function closeMenu(event) {
    event.preventDefault();
    var navbarMenu = $(".header__navbar");
    navbarMenu.removeClass("header__navbar--visible");
  }


 

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
        messages: {
          email: {
            required: "We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
          }
        }  
    });
  });

  //modal

  var button = $(".subscribe__button");
  var closeButton = $(".modal-dialog__close");
  //button.on("click", send);
  closeButton.on("click", close);


  function send() {
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.addClass('modal-overlay--visible');
    modalDialog.addClass('modal-dialog--visible');
  }

  function close(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.removeClass('modal-overlay--visible');
    modalDialog.removeClass('modal-dialog--visible');
  }

});


