let userName = document.getElementById("usernamebox");
let orderName = document.getElementById("foodList");
let submitEvent = document.getElementById("subbut");

submitEvent.onclick = function(){
    document.write("<h3>Hello <span style='color:red'>" + userName.value + "</span>! Your order is <span style='color:darkgreen'>" + orderName.value + "</span></h3>")
};

submitEvent.onmouseover = function() {
    submitEvent.style.backgroundColor = "aqua";
};

submitEvent.onmouseout = function() {
    submitEvent.style.backgroundColor = "white";
};