//Question - 1
let prompt = require('prompt-sync')();

let first_name = "Wasif";
let middle_name = "Mursalin";
let last_name = "Sadnan";
let userinput1 = prompt("enter your first name: ");
let userinput2 = prompt("enter your middle name: ");
let userinput3 = prompt("enter your last name: ");
if (userinput1 == first_name && userinput2 == middle_name && userinput3 == last_name) {
    console.log("Welcome", first_name, middle_name, last_name)
}
else {
    console.log("Error! User", userinput1, userinput2, userinput3, "not found")
}

//Question - 2
let year = prompt("enter a year: ");
if (year%4 == 0) {
    console.log(year ,"is a leap year")
}
else {
    console.log(year, "is not a leap year")
}

//Question - 3
let product1 = Number(prompt("Enter the price of product 1: "));
let product2 = Number(prompt("Enter the price of product 2: "));
let product3 = Number(prompt("Enter the price of product 3: "));
let sum = Number(prodect1 + prodect2 +prodect3);
if (sum > 100) {
    console.log("Total price: ", sum, "; Discounted price: ", sum - sum * 0.2);
}
else if (sum > 50) {
    console.log("Total price: ", sum, "; Discounted price: ", sum - sum * 0.1);
}
else {
    console.log("You didn't spend enough to get a discount! Spend more....");
}

//Question - 4
let math = Number(prompt("Enter your math score: "));
let english = Number(prompt("Enter your english score: "));
let science = Number(prompt("Enter your science score: "));
let averagescore = Number((math + english + science) / 3);
if (averagescore > 60) {
    console.log("Greatjob, Your Grade is A!!");
}
else {
    console.log("Sorry, You Failed!!");
}