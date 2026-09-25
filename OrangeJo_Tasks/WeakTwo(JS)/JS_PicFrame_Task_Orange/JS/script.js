let circleButton = document.getElementById("circleButton");
let squareButton = document.getElementById("squareButton");
let imgSky = document.getElementsByClassName("middleImg");

circleButton.onclick = function() {
    imgSky[0].style.borderRadius = "50%";
};

squareButton.onclick = function() {
    imgSky[0].style.borderRadius = "0%";
};

