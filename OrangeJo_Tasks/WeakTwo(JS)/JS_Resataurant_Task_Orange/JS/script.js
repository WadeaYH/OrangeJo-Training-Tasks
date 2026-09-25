const userName = prompt("Please Enter Your Name : ");
console.log("Customer Name : " + userName);

const age = prompt("Please Enter Your Age : ");
console.log("Customer Age : " + age);

const gender = prompt("Please Enter Your Gender (Male or Female) : ")
console.log("Customer Gender : " + gender);


let orderName = "";
let orderStatus = "";

if(gender == "Male" || gender=="male") alert("Welcome Mr. " + userName);
else if(gender == "female" || gender == "Female") alert("Welcome Ms. " + userName);
else alert("Welcome " + userName)

if(age < 16){
    alert("You are not eligible to place an order")
    console.log("Customer is not eligible to placr an order, (" + userName + ").");
}else{
    let validOrder = false;
    alert("You are ligible to place an order! :)")
    console.log("Customer is eligible to placr an order, (" + userName + ").");
    const order = prompt("Choose one of the following by typing order number (1, 2, 3)\n1. Burger\n2. Shawarma\n3. Zinger")
    if(order == '1' || order == '2' || order == '3') {
        alert("Your Order is being prepared");
        validOrder = true;
        if(order == '1') {
            orderName = "Burger";
            console.log("Customer choose to order : Burger, (" + userName + ").");
        }
        else if(order == '2') {
            orderName = "Shawarma";
            console.log("Customer choose to order : Shawarma, (" + userName + ").");
        }
        else if(order == '3') {
            orderName = "Zinger"
            console.log("Customer choose to order : Zinger, (" + userName + ").");
        }
    }
    else{
        alert("Invalid order. Please try again X_x");
        console.log("Customer choosed a invalid order, (" + userName + ").");
    }

    if(age >= 18 && validOrder) {
        alert("Order Confirmed");
        orderStatus = "Order Confirmed";
        console.log("Customer age and order are both valid, (" + userName + ").");
    }
    else if(age < 18 || !validOrder) {
            alert("Order requires verification");
            orderStatus = "Order requires verification";
            console.log("Customer age or order are invalid, (" + userName + ").");
        }
}


document.write("<h2> **Order CheckOut** </h2>")
document.write("<p><strong>Customer Name is: </strong>" + userName + "</p>");
document.write("<p><strong> " + userName + " age : </strong>" + age + "</p>");
document.write("<p><strong> " + userName + " gender is : </strong>" + gender + "</p>");
document.write("<p><strong> " + userName + " Order is : </strong>" + orderName + "</p>");
document.write("<p><strong> " + userName + " OrderStatus is : </strong>" + orderStatus + "</p>");
