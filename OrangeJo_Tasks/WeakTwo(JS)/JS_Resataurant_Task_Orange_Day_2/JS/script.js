let chickenButter = {
    name: "chikenButter",
    price: "4.99",
    category: "food",
    available: true
}

let broasted = {
    name: "broasted",
    price: "3.50",
    category: "food",
    available: true
}

let mansaf = {
    name: "mansaf",
    price: "4.50",
    category: "food",
    available: true
}

let pizza = {
    name: "pizza",
    price: "3.20",
    category: "food",
    available: true
}

let nodels = {
    name: "nodels",
    price: "4.50",
    category: "food",
    available: true
}

let menu = [chickenButter, broasted, mansaf, pizza, nodels];

function showMenu() {
    menu.forEach((food) => {
        console.log(`${food.name} - $${food.price}`)
    })
}

let finalOrder = "";
let orderNumber = 0;
let counter = 0;
function secondOrder(flag) {
    while (flag--) {
        let foodName = prompt("Enter a food name from the list (type number only):\n1. chickenButter\n2. broasted\n3. mansaf\n4. pizza\n5. nodels");
        if (foodName == '1') {
            finalOrder = "chikenButter";
            console.log("Customer choose to foodName : chikenButter.)");
            orderNumber = 1;
            counter+= parseFloat(menu[0].price);
            break;
        }
        else if (foodName == '2') {
            finalOrder = "broasted";
            console.log("Customer choose to foodName : broasted.)");
            orderNumber = 2;
            counter+= parseFloat(menu[1].price);
            break;
        }
        else if (foodName == '3') {
            finalOrder = "mansaf"
            console.log("Customer choose to foodName : mansaf.)");
            orderNumber = 3;
            counter+= parseFloat(menu[2].price);
            break;
        }
        else if (foodName == '4') {
            finalOrder = "pizza"
            console.log("Customer choose to foodName : pizza.)");
            orderNumber = 4;
            counter+= parseFloat(menu[3].price);
            break;
        }
        else if (foodName == '5') {
            finalOrder = "nodels"
            console.log("Customer choose to foodName : nodels.)");
            orderNumber = 5;
            counter+= parseFloat(menu[4].price);
            break;
        }
        else {
            alert("Invalid foodName. Please try again X_x");
            console.log("Customer choosed a invalid foodName in while (^_^)");
            continue;
        }
    }

    let chosenFood = menu[orderNumber - 1];

    for (let key in chosenFood) {
        console.log(`${key}: ${chosenFood[key]}`);
    }

    document.write("<p><strong>Customer Name is: </strong>" + userName + "</p>");
    document.write("<p><strong> " + userName + " age : </strong>" + age + "</p>");
    document.write("<p><strong> " + userName + " gender is : </strong>" + gender + "</p>");
    document.write("<p><strong> " + userName + " Order is : </strong>" + finalOrder + "</p>");
    document.write("<p><strong> " + userName + " OrderStatus is : </strong>" + orderStatus + "</p>");
    document.write("<p><strong> " + userName + " OrderPrice is : </strong>" + chosenFood.price + "$</p>");
}

const userName = prompt("Please Enter Your Name : ");
console.log("Customer Name : " + userName);

const age = prompt("Please Enter Your Age : ");
console.log("Customer Age : " + age);

const gender = prompt("Please Enter Your Gender (Male or Female) : ")
console.log("Customer Gender : " + gender);


let orderName = "";
let orderStatus = "";

if (gender == "Male" || gender == "male") alert("Welcome Mr. " + userName);
else if (gender == "female" || gender == "Female") alert("Welcome Ms. " + userName);
else alert("Welcome " + userName)

if (age < 16) {
    alert("You are not eligible to place an order")
    console.log("Customer is not eligible to placr an order, (" + userName + ").");
} else {
    let validOrder = false;
    alert("You are ligible to place an order! :)")
    console.log("Customer is eligible to placr an order, (" + userName + ").");
    const order = prompt("Choose one of the following by typing order number (1, 2, 3)\n1. Burger\n2. Shawarma\n3. Zinger")
    if (order == '1' || order == '2' || order == '3') {
        alert("Your Order is being prepared");
        validOrder = true;
        if (order == '1') {
            orderName = "Burger";
            console.log("Customer choose to order : Burger, (" + userName + ").");
        }
        else if (order == '2') {
            orderName = "Shawarma";
            console.log("Customer choose to order : Shawarma, (" + userName + ").");
        }
        else if (order == '3') {
            orderName = "Zinger"
            console.log("Customer choose to order : Zinger, (" + userName + ").");
        }
    }
    else {
        alert("Invalid order. Please try again X_x");
        console.log("Customer choosed a invalid order, (" + userName + ").");
    }

    if (age >= 18 && validOrder) {
        alert("Order Confirmed");
        orderStatus = "Order Confirmed";
        console.log("Customer age and order are both valid, (" + userName + ").");
    }
    else if (age < 18 || !validOrder) {
        alert("Order requires verification");
        orderStatus = "Order requires verification";
        console.log("Customer age or order are invalid, (" + userName + ").");
    }
}


document.write("<h2> **First Order CheckOut** </h2>");
document.write("<p><strong>Customer Name is: </strong>" + userName + "</p>");
document.write("<p><strong> " + userName + " age : </strong>" + age + "</p>");
document.write("<p><strong> " + userName + " gender is : </strong>" + gender + "</p>");
document.write("<p><strong> " + userName + " Order is : </strong>" + orderName + "</p>");
document.write("<p><strong> " + userName + " OrderStatus is : </strong>" + orderStatus + "</p>");




showMenu();
let quantity = prompt("How many orders you want to make today? (^_^) : ");

for(let i = 1; i <= quantity; i++){
    document.write("<br><br><br>");
    document.write(`<h2> ** Order number(${i}) CheckOut ** </h2>`);
    secondOrder(quantity);
}
document.write("<br><br><br><p><strong> " + userName + " Total Payment for new Orders is : </strong>" + counter + "$</p>");