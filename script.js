function openNav() {
    ham.classList.add('open');
    document.getElementById("navigation").style.opacity = "1";
    document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
    ham.classList.remove('open');
    document.getElementById("navigation").style.width = "0%";
    document.getElementById("navigation").style.opacity = "0";
}

var ham = document.getElementById("hamburger");
ham.addEventListener('click', function() {
    if (ham.classList != "open") {
        openNav();
    } else {
        closeNav();
    }
});

var overlayLinks = document.querySelector('.overlay-content');
overlayLinks.addEventListener('click', closeNav);

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
var nl = Array.prototype.slice.call(navLinks);
for (var i in nl) {
    slideIn(nl, i);
    slideOut(nl, i);
}

var skillLinks = document.querySelectorAll('#skill a');
var sl = Array.prototype.slice.call(skillLinks);
for (var i in sl) {
    slideIn(sl, i);
    slideOut(sl, i);
}

function slideIn(arr, i) {
    arr[i].addEventListener('mouseover', () => {
        arr[i].classList.remove('out-active');
        arr[i].classList.add('in-active');
    });
}

function slideOut(arr, i) {
    arr[i].addEventListener('mouseout', () => {
        arr[i].classList.remove('in-active');
        arr[i].classList.add('out-active');
    });
}