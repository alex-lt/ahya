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

    var cat = $(this).data('filter');
    
    $("[data-cat]").each(function () {
      
      var itemCat = $(this).data('cat');

      if(itemCat != cat) {
        $(this).addClass('hide');
      } else {
        $(this).removeClass('hide');
      }

    });
  });

});
