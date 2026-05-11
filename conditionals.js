let x = Number(prompt("Enter a number: "))

if (x%2==0){
    console.log("Even number")
}
else{
    console.log("Odd number")
}

// write a simple if statement to chekc eligibility of a voter (assume a voter must be at least 18 years)
let y = Number(prompt("Enter voter's age: "))

if (y>=18){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible to vote")
}

// multiple ifs
let num1 = Number(prompt("Enter number 1"))
let num2 = Number(prompt("Enter number 2"))
let num3 = Number(prompt("Enter number 3"))

if((num1 > num2) && (num1 > num3)){
    console.log("num1 is the largest")
}else if((num2 > num1) && (num2 > num3)){
    console.log("num2 is the largest")
}else{
    console.log("num3 is the largest")
}

// write a program that determines thicket prices based on age:
// under 12 - 500, under 18 - 650, adults - 800, over 60 years - 400
let age = Number(prompt("Enter age: "))

if(age<12 && age>0){
    console.log("Price is 500")
}else if((age>=12) && (age<18)){
    console.log("Price is 650")
}else if((age>=18) && (age<=60)){
    console.log("Price is 800")
}else{
    console.log("Price is 400")
}

// write a program that checks whether the length of a username is at least 8 characters
// if length < 8, output "Too short" otherwise output "Correct format"
let username = prompt("Enter your username: ")

if(username.length<8){
    console.log("Too short")
}else{
 console.log("Correct format")   
}

// Ternary operator
let a = Number(prompt("Enter a number"))

let even = y%2 == 0 ? "Even" : "Odd"
console.log(even)

// Using ternary operator, write a simple if statement to chekc eligibility of a voter (assume a voter must be at least 18 years)
let z = Number(prompt("Enter voter's age: "))

let res = z>=18 ? "Eligible to vote" : "Not eligible to vote" 
console.log(res)
