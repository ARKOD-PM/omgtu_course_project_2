(function($) {
  $(document).ready(function() {
    $('#cssmenu .button').on('click', function() {
      $(this).toggleClass('menu-opened');
      
      var mainmenu = $(this).next('ul');
      
      if (mainmenu.hasClass('open')) {
        mainmenu.slideUp('fast').removeClass('open');
      } else {
        mainmenu.slideDown('fast').addClass('open');
      }
    });

    $('#cssmenu li ul').parent().addClass('has-sub');

    $('#cssmenu li.has-sub > a').after('<span class="submenu-button"></span>');

    $('#cssmenu .submenu-button').on('click', function() {
      $(this).toggleClass('submenu-opened');
      
      if ($(this).siblings('ul').hasClass('open')) {
        $(this).siblings('ul').removeClass('open').slideUp('fast');
      } else {
        $(this).siblings('ul').addClass('open').slideDown('fast');
      }
    });

    $(window).resize(function() {
      if ($(window).width() > 1200) {
        $('#cssmenu ul').show(); 
      } else {
        if (!$('#cssmenu .button').hasClass('menu-opened')) {
           $('#cssmenu ul').hide();
        }
      }
    });

  });
})(jQuery);
