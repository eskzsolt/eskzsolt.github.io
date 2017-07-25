$("#scroll-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top},
        800);
});

$("#scroll-up").click(function() {
    $('html,body').animate({
        scrollTop: $(".main").offset().top},
        800);
});