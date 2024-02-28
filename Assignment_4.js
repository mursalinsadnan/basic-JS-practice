//Question - 1
let prompt = require('prompt-sync')();

let set = [];
for(let i = 0; i < 5; i++){
    let element = prompt("Enter a number: ");
    set.push(Number(element))
}
console.log("The original set is: ", set);
console.log("The sorted set is: ", set.sort());

//Question - 2
let twoDarray = [[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]];
console.log("Original Array: ", twoDarray);
for(let i = 0; i < twoDarray.length; i++){
    for( let j = 0; j < 3; j++){
        twoDarray[i][j]++;
    }
}
console.log("New Array: ", twoDarray);

//Question - 3
let twoDarray = [[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]];
console.log("Original Array: ", twoDarray);
for(let i = 0; i < twoDarray.length; i++){
    for( let j = 0; j < 3; j++){
        twoDarray[i][j]++;
    }
}
console.log("New Array: ", twoDarray);

//Question - 4
let set = [];
for(let i = 0; i < 5; i++){
    let element = prompt("Enter a number: ");
    if(element % 2 == 0){
        console.log( element, "is even");
    }else{
        console.log( element, "is odd");
    }
    set.push(Number(element))
}
console.log("The set is: ", set);