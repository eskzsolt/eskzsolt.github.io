(function () {
  const $ = window.$
  $(function () {
    // Navigation
    $('#scroll-down').click(function () {
      $('html,body').animate({
        scrollTop: $('.projects').offset().top }, 800)
    })
    $('#scroll-up').click(function () {
      $('html,body').animate({
        scrollTop: $('.main').offset().top }, 800)
    })
    $('.button').click(function () {
      document.activeElement.blur()
    })
    $('.box-inner').click(function () {
      window.open(`https://eskzsolt.github.io/${this.id}`)
    })
    // TODO: Auto time zone correction
    /*
      Since 1996 European Summer Time has been observed between 1:00 UTC (2:00 CET and 3:00 CEST) on the last Sunday of March
      and 1:00 UTC on the last Sunday of October; previously the rules were not uniform across the European Union.
    */
  })
})()
