var PAGE_LOADED = false;
var CURRENT_LANGUAGE = '';
var LIST_PT_BR = [];
var LIST_EN_UK = [];
var SPINNER = '<span class="spinner-grow text-success spinner-grow-sm" role="status">';
SPINNER += '<span class="visually-hidden">Loading...</span></span>';

$.getJSON('../language/pt-BR.json', function(jd) {
    LIST_PT_BR = jd;
})

$.getJSON('../language/en-UK.json', function(jd) {
    LIST_EN_UK = jd;
    changeLanguage('en-UK');
})

function changeLanguage(language) {
    if (CURRENT_LANGUAGE !== language) {
        CURRENT_LANGUAGE = language;
        var LIST_KEYS_VALUE = [];

        if (language === 'pt-BR') {
            LIST_KEYS_VALUE = LIST_PT_BR;

            var element = document.getElementById("img-brazil");
            element.classList.remove("blackWhite");

            element = document.getElementById("img-united-kingdom");
            element.classList.add("blackWhite");
        } else if (language === 'en-UK') {
            LIST_KEYS_VALUE = LIST_EN_UK;

            var element = document.getElementById("img-united-kingdom");
            element.classList.remove("blackWhite");

            element = document.getElementById("img-brazil");
            element.classList.add("blackWhite");
        }

        if (PAGE_LOADED) {
            for (var i = 0; i < LIST_KEYS_VALUE.length; i++) {
                $("." + LIST_KEYS_VALUE[i].key).html(SPINNER);
            }
            setTimeout(function() {
                drawText(LIST_KEYS_VALUE)
            }, 1000);
        } else {
            PAGE_LOADED = true;
            drawText(LIST_KEYS_VALUE)
        }
    }
}

function drawText(LIST_KEYS_VALUE) {
    for (var i = 0; i < LIST_KEYS_VALUE.length; i++) {
        $("." + LIST_KEYS_VALUE[i].key).html(LIST_KEYS_VALUE[i].value);
    }
}