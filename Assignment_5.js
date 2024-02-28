//Question - 1
let prompt = require('prompt-sync')();

let x = Number(prompt("Enter the value of x: "));
function variable(x) {
    let y = x**2 + 2*x + 6;
    console.log(y);
}

variable(x);

//Question - 2
let number = [1, 3, 5, 7, 9];
let square_number = number.map((num) => num**2);
console.log("The new array is: ", square_number);

//Question - 3
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
function sum(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multi(num1, num2){
    return num1 * num2
}
function calculate_and_display(num1, num2, sum, subtract, multi){
    console.log(sum(num1, num2))
    console.log(subtract(num1, num2))
    console.log(multi(num1, num2))
}
calculate_and_display(num1, num2, sum, subtract, multi)

//Question - 4
function wlcm_message(name = "Guest"){
    console.log("welcome", name);
}
wlcm_message();