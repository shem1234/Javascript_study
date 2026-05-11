// TASK 1: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that prompts the user to enter the base and height of a triangle and returns its area.
// Once you learn functions,revisit this and write this code inside a function.
let base = Number(prompt("Enter the base: "))
let height = Number(prompt("Enter the height: "))

let area = base * height
console.log(area)

// TASK 2: Using Python or PHP or Java or Ruby or JavaScript
// Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, display
//   either “odd” or “even” to the user.
//  Hint: how does an even / odd number react differently when divided by 2?
// Once you learn functions,revisit this and write this code inside a function.
// Extras:
// If the number is a multiple of 4, print out “divisible by 4”.
// Once you learn functions,revisit this and write this code inside a function.
let num = Number(prompt("Enter a number: "))

if (num % 2 == 0){
    console.log("even")
}else{
    console.log("Odd")
}

// TASK 3: Using Python or PHP or Java or Ruby or JavaScript
// Write a program which gets a phone number from a form input or terminal. Validates the phone number by checking if
//  it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. Convert the number to start with +254… 
// e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”
// Once you learn functions,revisit this and write this code inside a function.
let phone = prompt("Enter phone number: ")

if (phone.substring(0,4) == "+254"){
    if (phone.length == 13 && Number.isInteger(Number(phone.substring(1,13)))){
        res = phone
    }else{
        res = "Invalid phone number. Please reenter the phone numner"        
    }
}else if (phone.substring(0,2) == "07" || phone.substring(0,2) == "01"){
    if (phone.length == 10 && Number.isInteger(Number(phone.substring(1,10)))){
        res = "+254" + phone.substring(1,10)
    }else{
        res = "Invalid phone number. Please reenter the phone numner"
    }
}else if (phone.substring(0,1) == "7" || phone.substring(0,1) == "1")
    if (phone.length == 9 && phone.substring(1,9)){
        res = "+254" + phone.substring(0,9)
    }else{
        res = "Invalid phone number. Please reenter the phone numner"
    }
else{
    res = "Invalid phone number. Please reenter the phone numner"
}

console.log(res)

// TASK 4: Using Python or PHP or Java or Ruby or JavaScript
// Write a program which accepts email as form input or from terminal. Validate the email by checking if it's a valid email. 
// Hint: Check if it contains an “@” symbol and “.” symbol.
// Once you learn functions,revisit this and write this code inside a function.
let email = prompt("Enter your email: ")

if (email.includes("@") && email.includes(".")){
    console.log("Valid email")
}else{
    console.log("Invalid email")
}

// TASK 5: Using Python or PHP or Java or Ruby or JavaScript
// Implement a program that takes 3 users  inputs from the terminal or the Browser, and stores them in three variables.
//  Return the largest of the three. Do this without using the the inbuilt max () function!
// The goal of this exercise is to think about some internals that programs normally take care of for us. 
let num1 = prompt("Enter the first number: ")
let num2 = prompt("Enter the second number: ")
let num3 = prompt("Enter the third number: ")

if (num1 >= num2 && num1 >= num3){
    console.log("Largest number is " + num1)
}else if (num2 >= num1 && num2 >= num3){
    console.log("Largest number is " + num2)
}else if (num3 >= num1 && num3 >= num2){
    console.log("Largest number is " + num3)
}else{
    console.log("Invalid number")
}

// TASK 6:Using Python or PHP or Java or Ruby or JavaScript
// Write a program that lets the user input a password. Give them only 4 attempts to check the passwords entered against “admin@123”.
//  If the password is correct access is granted. After you show them a message , the account is blocked.
// Once you learn functions,revisit this and write this code inside a function.
counter = 3
i = 0

while (i < counter){
    let user = prompt("Please enter your password: ")
    if (user == "admin@123"){
        console.log("Access granted")
        break
    }else{
        i = i + 1
        if (i == counter){
            console.log("Account blocked")
        }else{
            console.log("Wrong password. Please try again")
        }
    }
}

// TASK 7: Using Python or PHP or Java or Ruby or JavaScript
// Write that prompts the user to input student marks. The input should be between 0 and 100.Then output the correct grade: 
// A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40
// Once you learn functions,revisit this and write this code inside a function.
let marks = prompt("Enter the marks: ")

if (marks > 79 && marks <= 100){
    console.log("Grade A")
}else if (marks >= 60 && marks <= 79){
    console.log("Grade B")
}else if (marks > 49 && marks <= 59){
    console.log("Grade C")
}else if (marks >= 40 && marks <= 49){
    console.log("Grade D")
}else if (marks < 40){
    console.log("Grade E")
}else{
    console.log("Invalid marks")
}
