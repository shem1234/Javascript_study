// no function
let x = 5                   // Global scope
let y = 10

let z = x+y
console.log(z)


// function
function add_value(){
    let num1 = 5               // local scope
    let num2 = 10

    return num1+num2
}

let sum = add_value()
console.log(sum)


// function parameters and arguments
function add_value(x,y){

    return x + y
}

sum1 = add_value(5,10)
sum2 = add_value(3,4)
console.log(sum1)   // 15
console.log(sum2)   // 7