let random = Math.random();
let a = prompt("Enter a number");
let b = prompt("Enter a number");
let c = prompt("Enter an operator");

let obj = {
    "+" : "-",
    "-" : "+",
    "*" : "/",
    "/" : "*"
}

if(random > 0.1){
    let result = eval(`${a} ${c} ${b}`);
    console.log(`The result is: ${result}`);
    alert(`The result is: ${result}`);
}

else{
    c = obj;
    let result = eval(`${a} ${c} ${b}`);
    console.log(`The result is: ${result}`);
    alert(`The result is: ${result}`);
}