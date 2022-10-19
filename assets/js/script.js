// Mobile Menu
$(document).ready(function(){
      $('.menu-bar a').on('click', function(){
          $('body').toggleClass('menu-active');
      })
  });


  var selector = '.navigation ul li a';

  $(selector).on('click', function(){
      $(selector).removeClass('active');
      $(this).addClass('active');
  });