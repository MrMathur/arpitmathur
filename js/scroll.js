let prev = 0;

$(window).on('scroll', function () {
  // Current Scroll Position
  let scrollTop = $(window).scrollTop();

  // Initial Navbar Condition
  $('#nav-element').toggleClass('nav-border', scrollTop > 75);

  // // Navbar Scroll Behaviour
  if (scrollTop > 400) {
    $('#nav-element').toggleClass('hidden-nav', scrollTop > prev);
    prev = scrollTop;
  }

  // Nav items highlight
  if (scrollTop > ($('.container #about').offset().top - screen.height/2)) {
    $('#nav-about').addClass('active-item');
    $('#nav-work').removeClass('active-item');
    $('#nav-play').removeClass('active-item');
  } else if (scrollTop > ($('.container #play').offset().top - screen.height/2)) {
    $('#nav-play').addClass('active-item');
    $('#nav-work').removeClass('active-item');
    $('#nav-about').removeClass('active-item');
  } else if (scrollTop > ($('.container #work').offset().top - screen.height/2)) {
    $('#nav-work').addClass('active-item');
    $('#nav-play').removeClass('active-item');
    $('#nav-about').removeClass('active-item');
  } else {
    $('#nav-work').removeClass('active-item');
    $('#nav-play').removeClass('active-item');
    $('#nav-about').removeClass('active-item');
  }
});