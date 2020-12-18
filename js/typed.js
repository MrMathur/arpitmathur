    var txt = "Namaste, I'm Arpit";
    var i = txt.length;
    var speed = 50;
    var temp = "";

    function typeWriter() {
        temp += txt.charAt(i);
        if (i >= 0) {
            document.getElementById("demo").innerHTML = temp.split("").reverse().join("");
            i--;
            setTimeout(typeWriter, speed);
        }
    }
    // window.onload = setTimeout(typeWriter, 750);