const prompt = require('readline-sync');
const readlineSync = require('readline-sync');

let initialBalance = 40;

//create a menu for each function?
let menu = ["Deposit", "Check Balance", "Withdraw"];
let index = readlineSync.keyInSelect(menu, "Pick an option");

//check balance
function checkBalance(){
    return console.log(`You have £${initialBalance} available`);
}


//deposit money
function deposit(){
    let deposit = prompt.question("How much would you like to deposit? ")
    initialBalance += Number(deposit);
    return console.log(`You now have £${initialBalance}`)
}


//withdraw money - do not exceed account balance
function withdraw(){
    let withdraw = prompt.question("How much would you like to withdraw? ");

    Number(withdraw);

    if(withdraw > initialBalance){
    return console.log("Your withrdaw can't exceed your balance.")
    } else if (withdraw <= initialBalance){
    initialBalance -= withdraw;
    return console.log(`You now have £${initialBalance}`);        
    
    } else ("Error please enter an amount.")
}

//if user presses a number, function will be called
if(menu[0] === menu[index]){
    deposit();
} else if(menu[1] === menu[index]){
    checkBalance();
} else if(menu[2] === menu[index]){
    withdraw();
}
