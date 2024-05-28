window.onload = pageload;

function pageload() {
    var img1 = document.getElementById("hw1");
    var img2 = document.getElementById("hw2");
    var img3 = document.getElementById("hw3");

    img1.onclick = linkhw1;
    img2.onclick = linkhw2;
    img3.onclick = linkhw3;
}

function linkhw1() {
    location.href = "WK1hw1.html";
}

function linkhw2() {
    location.href = "WK3hw1.html";
}

function linkhw3() {
    location.href = "part4/part4.html";
}
