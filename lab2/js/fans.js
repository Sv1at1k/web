const getById = id => document.getElementById(id);

const feedbackContainer = getById('container');
const form = getById('form');
const namearea = getById('name');
const textarea = getById('text');
var inputFansData;
var inputNewsData;
var inputFansName;
var useLocalStorage = true;



function getFansName(){
    inputFansName = document.getElementById("name").value;
}

function getFansStuff() {
    inputFansData = document.getElementById("text").value;
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

function getLocalFansData() {
    if (localStorage.getItem("comment_number") !== null) {
        var newsNumber = parseInt(localStorage.getItem("comment_number"));
        var data = "";
        for (var i = 0; i < newsNumber; i++) {
            data += localStorage.getItem("comment" + i);
        }
    }
    return data;
}

function saveFansDataLocaly(fansComment) {
    if (useLocalStorage) {
        if (localStorage.getItem("comment_number") !== null) {
            var news_number = parseInt(localStorage.getItem("comment_number"));
            localStorage.setItem("comment" + news_number, fansComment);
            localStorage.setItem("comment_number", news_number + 1);
        } else {
            localStorage.setItem("comment_number", 1);
            localStorage.setItem("comment0", fansComment);
        }
    } else {
        //add indexedDb
        }
    }


function postFansData(data) {
    document.getElementById("reviewsList").innerHTML += data;
}

function postStuff() {
    var date = currentDate();
    if (inputFansData != null && /\S/.test(inputFansData) && inputFansName != null && /\S/.test(inputFansName)) {
        if (window.navigator.onLine){
            //emulate server
        }else{
        var fansComment = getCommentBody(inputFansData, date, inputFansName);
        saveFansDataLocaly(fansComment);
        document.getElementById("text").value = "";
        document.getElementById("name").value = "";
        inputFansData = "";
        inputFansName = "";
        data = "";
        }
    }
}


window.addEventListener('load', function () {

    function updateOnlineStatus(event) {}
    var test = window.navigator.onLine;
    if (window.navigator.onLine) {
        if (useLocalStorage) {
            if (getLocalFansData() !== undefined) {
                postFansData(getLocalFansData());
            }
        } else {
            //todo idexedDB
        }
    }

});


function getCommentBody(commentBody, date, name) {
        return "<div class=\"divider\"></div><div class=\"container\"><br><p><br>"+commentBody+"</p><br>       <span class=\"review-date\">"+date+"</span><span class=\"review-author\">"+name+"</span></div>";
    }

