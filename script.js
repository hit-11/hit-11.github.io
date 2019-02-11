var ham = document.getElementById("hamburger");
ham.addEventListener('click', function() {
    if (ham.classList != "open") {
        ham.classList.add('open');
        document.getElementById("navigation").style.opacity = "1";
        document.getElementById("navigation").style.width = "100%";
    } else {
        ham.classList.remove('open');
        document.getElementById("navigation").style.width = "0%";
        document.getElementById("navigation").style.opacity = "0";
    }
});

var changeWords = function() {
    var i = 0;
    var listOfWords = document.querySelectorAll('.words>span');

    setInterval(function() {
        listOfWords[i].classList.remove('active');
        i = i < listOfWords.length - 1 ? i + 1 : 0;
        listOfWords[i].classList.add('active');
    }, 2000)
}
changeWords();

var navLinks = document.querySelectorAll('.overlay a');

for (var i in navLinks) {
    slideIn(i);
    slideOut(i);
}

function slideIn(i) {
    navLinks[i].addEventListener('mouseover', () => {
        navLinks[i].classList.remove('out-active');
        navLinks[i].classList.add('in-active');
    });
}

function slideOut(i) {
    navLinks[i].addEventListener('mouseout', () => {
        navLinks[i].classList.remove('in-active');
        navLinks[i].classList.add('out-active');
    });
}