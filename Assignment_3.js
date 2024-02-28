//Question - 1
let prompt = require('prompt-sync')();

let x = Number(prompt("Enter the first number of the series: "));
let y = Number(prompt("Enter the last number of the series: "));
let sum = 0;
for (let n = x; n <= y; n++) {
    sum += n;
}
console.log(sum);

//Question - 2
let x = Number(prompt("Enter the first number of the series: "));
let y = Number(prompt("Enter the last number of the series: "));
let sum = 0;
for (let n = x; n <= y; n++) {
    if(n%2 == 0){
        sum += n;
    }
}
console.log(sum);

//Question - 3
let x = Number(prompt("Enter the first number of the series: "));
let y = Number(prompt("Enter the last number of the series: "));
let sum = 0;
for (let n = x; n <= y; n++) {
    if(n%2 != 0){
        sum += n;
    }
}
console.log(sum);

//Question - 4
let a = Number(prompt("Enter the first number of the series: "));
let d = Number(prompt("Enter the deference: "));
let n = Number(prompt("Enter the position of the number you want to see: "));
let f = a+(n-1)*d
console.log("The number is ", f);
let sum = 0;
for (let x = a; x <= f; x += 5) {
    sum += x;
}
console.log(sum);