function reverseNumber(number){
    let x = number.toString();
    let result = "";
    for(let i = ((x.length)-1); i >= 0; i--){
        result+= x[i];
    }
    return result;
}

function evenOrOdd(number){
    for(let i = 0; i <= number; i++){
        if(i%2==0) console.log(`${i} is even.`);
        else console.log(`${i} is odd.`);
    }
}

function numberFormat(number){
    let x = number.toString();
    let result = "";
    for(let i = 0; i < x.length; i++){
        let temp = parseInt(x[i]);
        
        if((temp%2==0) && (i >= 0) && (parseInt(x[i+1])%2==0) && (i != x.length - 1)){
            result+= x[i];
            result+= "-";
        }
        else result+= x[i];
    }
    return result;
}

function Agechecker(age){
    if(age >= 18) console.log("The user is Adult");
    else console.log("The user is Minor");
}

console.log("** Program Started **\n\n");

console.log(reverseNumber(532443));
console.log("\n\n\n\n")
evenOrOdd(20);
console.log("\n\n\n\n")
console.log(numberFormat("025468"));
Agechecker(22);