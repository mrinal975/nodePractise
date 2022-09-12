//variable hoisitng

// console.log(counter);
// let counter =1;


//function hoisting

let x = 20;
let y = 10;
let result = add(x,y);

console.log(result);

function add(a,b){
    return a+b;
}



// function expression show error on hoisting
let a = 20;
let b = 10;

let res = sum(a,b);
console.log(res);


let sum = function(x,y){
    return x+y;
}
