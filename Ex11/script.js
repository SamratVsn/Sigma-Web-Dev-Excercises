let num = prompt("Enter a number")
let facto = 1, i
for(i = 1; i <= num; i++){
    facto *= i
}
console.log(`The factorial is ${facto}`)
alert(`The factorial of ${num} is ${facto}`)
//Trick 2
// let a = 5
// function factorial(number){
//     let arr = Array.from(Array(number + 1).keys())
//     console.log(arr.slice(1,))
//     let c = arr.slice(1,).reduce((a,b) =>{
//         return a*b
//     })
//     console.log(`Factorial is ${c}`)
// }
// factorial(a)
// Solution from Sigma Web Dev Solution