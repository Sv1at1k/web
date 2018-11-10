var inputNewsData;
var inputNewsTitle;
var inputNewsBody;
var useLocalStorage = true;

function getNewsTitle() {
    inputNewsTitle = document.getElementById("caption").value;
}

function getNewsBody() {
    inputNewsBody = document.getElementById("text").value;
}

function currentDate() {
    var d = new Date();
    var dformat = [(d.getMonth() + 1),
               d.getDate(),
               d.getFullYear()].join('/') + ' ' + [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
    console.log(dformat);
    return dformat;

}

function publish() {
    if (inputNewsTitle !== null && inputNewsBody !== null && /\S/.test(inputNewsBody) && /\S/.test(inputNewsTitle)) {
        var data = "<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\"> <div class = \"thumbnail\"> <img src = \"637298374-612x612.jpg\" alt=\"Generic placeholder thumbnail\"> </div><div class = \"caption\"> <h3>" + inputNewsTitle + "</h3><p>" + inputNewsBody + "</p><a href = \"#\" class=\"btn btn-default\" role=\"button\">Read</a></div> </div>";
        if (window.navigator.onLine) {
            //do smth(server emulation)
        } else {
            if (useLocalStorage) {
                saveNewsLocaly(data);
            } else {
                
            }
        }
        document.getElementById("caption").value = "";
        document.getElementById("text").value = "";
    }

}

function getLocalNewsData() {
    if (localStorage.getItem("news_number") !== null) {
        var news_number = parseInt(localStorage.getItem("news_number"));
        var data = "";
        for (var i = 0; i < news_number; i++) {
            data += localStorage.getItem("news" + i);
        }
    }
    return data;
}

function postNews(data) {
    if (data !== undefined) {
        document.getElementById("news").innerHTML += data;
    }
}

function saveNewsLocaly(data) {
    if (useLocalStorage) {
        if (localStorage.getItem("news_number") !== null) {
            var news_number = parseInt(localStorage.getItem("news_number"));
            localStorage.setItem("news" + news_number, data);
            localStorage.setItem("news_number", news_number + 1);
        } else {
            localStorage.setItem("news_number", 1);
            localStorage.setItem("news0", data);
        }
    } else {

    }
}

function isOnline() {
    return window.navigator.onLine;
}

window.addEventListener('load', function () {

    function updateOnlineStatus(event) {}

    if (window.navigator.onLine) {
        if (useLocalStorage) {
            if (getLocalNewsData() !== undefined) {
                postNews(getLocalNewsData());
            }
        } else {
            //add IndexedDB
        }

    } else {


    }
});



