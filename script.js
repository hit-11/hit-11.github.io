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

var ham = document.getElementById("hamburger");
ham.addEventListener('click', function() {
    if (ham.classList != "open") {
        openNav();
    } else {
        closeNav();
    }
});

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

$('.overlay a').click(function() {
    $('.overlay a').removeClass('activeLink');
    $($(this)).addClass('activeLink');
});
var overlayLinks = document.querySelector('.overlay-content');
overlayLinks.addEventListener('click', closeNav);

var navLinks = document.querySelectorAll('.overlay a');
var navArr = Array.prototype.slice.call(navLinks);
for (var i in navArr) {
    slideIn(navArr, i);
    slideOut(navArr, i);
}

var skillLinks = document.querySelectorAll('#skill a');
var skillArr = Array.prototype.slice.call(skillLinks);
for (var i in skillArr) {
    slideIn(skillArr, i);
    slideOut(skillArr, i);
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


// var scrollTop = true;
// var previousScrollTop;
// $('document').ready(function() {
//     previousScrollTop = screen.height;
//     $(window).scroll(function() {
//         if ($(window).scrollTop() < previousScrollTop) {
//             if (scrollTop) {
//                 console.log(scrollTop);
//                 $(window).scroll(function() {
//                     $('html,body').animate({ scrollTop: $('#skill').offset().top }, 1000);
//                 });
//             }
//         } else if ($(window).scrollTop() < 2 * previousScrollTop) {
//             if (scrollTop) {
//                 $(window).scroll(function() {
//                     $('html,body').animate({ scrollTop: $('#project').offset().top }, 1000);
//                 });
//             }
//         } else {
//             if (scrollTop) {
//                 $(window).scroll(function() {
//                     $('html,body').animate({ scrollTop: $('#contact').offset().top }, 1000);
//                 });
//             }
//         }
//         previousScrollTop = $(window).scrollTop();
//     });
// });
// var scrollTop = true;
// var prev = -1;
// var pages = ['#home', '#skill', '#project', '#contact'];
// $(window).scroll(function() {
//     var pageNo = parseInt($(window).scrollTop() / $(window).height()) + 1;
//     if (pageNo != prev) {
//         scrollTop = true;
//     }
//     if (scrollTop) {
//         $('html,body').animate({ scrollTop: $(pages[pageNo]).offset().top }, 1000);
//     }
//     prev = pageNo;
// });

$(document).ready(function() {
    $('h1').click(function() {
        $('html,body').animate({ scrollTop: $('#contact').offset().top }, 1000)
    })
});