$(document).ready(() => {
  $('#header-carousel').carousel({
    interval: 5500
  });

  $('#header-carousel').on('slide.bs.carousel', e => {
    let word = generateWordForSlide(e.relatedTarget.id);
    let curr_word = $('#profile-term').html();

    backSpace(curr_word);
    setTimeout(() => 0, 500);
    typeWord(word, 200);
  });
});

let backSpace = (curr_word) => {
  setTimeout(() => {
    if (curr_word.length > 0) {
      let new_word = removeLetter(curr_word);
      document.getElementById("profile-term").innerHTML = new_word.split("").join("");
      backSpace(new_word);
    }
  }, 100);
}

let generateWordForSlide = (index) => {
  switch (index) {
    case '1':
      return "UX Designer";
      break;
    case '2':
      return "User Researcher";
      break;
    case '3':
      return "Front-end Developer";
      break;
    case '4':
      return "User Advocate";
      break;
    case '5':
      return "Design Technologist";
      break;
    case '6':
      return "Public Speaker";
      break;
    case '7':
      return "Usability Expert";
      break;
    case '8':
      return "Team Player";
      break;
    default:
      return "UX Designer";
      break;
  }
}

let typeWord = (word, spd) => {
  var txt = word;
  var i = txt.length;
  var speed = spd;
  var temp = "";

  function typeWriter() {
    temp += txt.charAt(i);
    if (i >= 0) {
      document.getElementById("profile-term").innerHTML = temp.split("").reverse().join("");
      i--;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}

let removeLetter = (word) => word.substring(1);