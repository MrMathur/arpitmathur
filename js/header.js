$(document).ready(() => {

  async function delay(ms) {
    return await new Promise(resolve => setTimeout(resolve, ms));
  }

  let run = async (time) => {
    await delay(time);
    $('#image-frame img').css('opacity', 0);
  }

  let strings = [
    'UX Designer',
    'Front-end Developer',
    'UX Researcher',
    'Design Technologist',
    'User Advocate',
    'Public Speaker',
    'Usability Expert',
    'Team Player'
  ];

  var options = {
    backDelay: 3000,
    backSpeed: 10,
    loop: true,
    loopCount: Infinity,
    onComplete: (self) => {},
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    strings: strings,
    typeSpeed: 100,
    preStringTyped: (i, self) => {
      $('#image-frame img').css('opacity', 1);
      $('#image-frame').slick('slickNext');
    },
    onStringTyped: (i, self) => {
      run(self.backDelay);
    }
  };

  var typed = new Typed('.type-element', options);

  $('#image-frame').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    pauseOnHover: false,
    speed: 0,
    swipe: false
  });
});