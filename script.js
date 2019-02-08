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