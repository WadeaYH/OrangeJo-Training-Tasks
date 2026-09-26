let userName = document.getElementById("usernamebox");
let passwordBox = document.getElementById("passwordBox");
let phoneNumberBox = document.getElementById("phoneNumberBox");
let orderName = document.getElementById("foodList");
let submitEvent = document.getElementById("subbut");

function checkUserName(username){
    let userNameRegex = /^\S+$/;

    if(userNameRegex.test(username)) return true;
    else{
        alert("Your username can't be empty or contain spaces!");
        return false;
    }
}

function checkPassword(password){
    let passwordRegex = /^(?=.*\d)\S{8,}$/;
    if(passwordRegex.test(password))return true;
    else{
        alert("Your password should have at least one number and 8 characters!");
        return false;
    }
}

function checkPhoneNumber(phoneNumber){
    let phoneNumberRegex = /^07\d{8}$/;
    if(phoneNumberRegex.test(phoneNumber))return true;
    else{
        alert("Your phoneNumber should start with (07) and excatly 10 digits!");
        return false;
    }
}

submitEvent.onclick = function(){
    if(checkUserName(userName.value) && checkPassword(passwordBox.value) && checkPhoneNumber(phoneNumberBox.value)){
        alert("Login Success!");
        localStorage.setItem("userOrder",orderName.value);
        sessionStorage.setItem("userName", userName.value);
        document.write("<h3>Hello <span style='color:red'>" + userName.value + "</span>! Your order is <span style='color:darkgreen'>" + orderName.value + "</span></h3>")
    }else{
        alert("Something went wrong!, check your information and try again!");
    }
};

submitEvent.onmouseover = function() {
    submitEvent.style.backgroundColor = "aqua";
};

submitEvent.onmouseout = function() {
    submitEvent.style.backgroundColor = "white";
};

