(function() {

  $(function() {

    $("#scroll-down").click(function() {
      $('html,body').animate({
        scrollTop: $(".projects").offset().top}, 800);
    });

    $("#scroll-up").click(function() {
      $('html,body').animate({
        scrollTop: $(".main").offset().top}, 800);
    });

    $('.button').click(function() {
      document.activeElement.blur();
    });

    $('#rejto-ipsum').click(function() {
      window.open('https://eskzsolt.github.io/rejto-ipsum/','mywindow');
    });
    $('#animated-abugida').click(function() {
      window.open('https://eskzsolt.github.io/animated-abugida/','mywindow');
    });

  });

})();
