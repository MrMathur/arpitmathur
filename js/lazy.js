$(function () {
  $('.lazy').Lazy({
    threshold: 1500
  });
});

$(window).on('scroll', () => {
  $('.lazy').Lazy({
    threshold: 1000
  });
});