$(document).ready(function(){
  
  $(window).resize(function () {
      if($(window).width() <= 768) {
          $('.hero__button').removeClass('hero__button--hover');
          $('.header__navbar-link').removeClass('header__navbar-link--hover');
          $('.header__navbar-button').removeClass('header__navbar-button--hover');
          $('.collection-text__link').removeClass('collection-text__link--hover');
      };
  });

});
