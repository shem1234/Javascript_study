// TASK 1: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that prompts the user to enter the base and height of a triangle and returns its area.
// Once you learn functions,revisit this and write this code inside a function.
let base = Number(prompt("Enter the base: "))
let height = Number(prompt("Enter the height: "))

console.log("The are of the triangle is " + base*height/2 + ".")

// TASK 2: Using Python or PHP or Java or Ruby or JavaScript
// Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, display
// either “odd” or “even” to the user. 
// Hint: how does an even / odd number react differently when divided by 2?
// Once you learn functions,revisit this and write this code inside a function.
// Extras:
// If the number is a multiple of 4, print out “divisible by 4”.
// Once you learn functions,revisit this and write this code inside a function.
let number = Number(prompt("Enter a number: "))

if (number % 2 == 0){
    res = "even"
    if (number % 4 == 0){
        res = "divisible by 4"
    }
}
else{
    res = "odd"
}
    
console.log(res)

// TASK 3: Using Python or PHP or Java or Ruby or JavaScript
// Write a program which gets a phone number from a form input or terminal. Validates the phone number by checking if it starts with
// +254.. or 07.. or 7… or 254.. or 01... or  1.. Convert the number to start with +254… 
// e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”
// Once you learn functions,revisit this and write this code inside a function.
let phone = prompt("Enter phone number: ")

if (phone.substring(0,4) == "+254")
    if (phone.length == 13 && !isNaN(Number(phone.substring(1,13)))){
        res = phone
    }
    else{
        res = "Invalid phone number. Please reenter the phone number"
    } 
else if (phone.substring(0,2) == "07" || phone.substring(0,2) == "01"){
    if (phone.length == 10 && !isNaN(Number(phone.substring(1,10)))){
        res = "+254" + phone.substring(1,10)
    }
    else{
        res = "Invalid phone number. Please reenter the phone number"
    }
}
else if (phone.substring(0,1) == "7" || phone.substring(0,1) == "1"){
    if (phone.length == 9 && !isNaN(Number(phone.substring(1,9)))){
        res = "+254" + phone.substring(0,9)
    }
    else{
        res = "Invalid phone number. Please reenter the phone number"
    }
}
else{
    res = "Invalid phone number. Please reenter the phone number"
}

console.log(res)

// TASK 4: Using Python or PHP or Java or Ruby or JavaScript
// Write a program which accepts email as form input or from terminal. Validate the email by checking if it's a valid email. 
// Hint: Check if it contains an “@” symbol and “.” symbol.
// Once you learn functions,revisit this and write this code inside a function.
let email = prompt("Enter your email: ")

if (email.includes("@") && email.includes(".")){
    res = "Valid email"
}
else{
    res = "invalid email"
}
    
console.log(res)

// # TASK 5: Using Python or PHP or Java or Ruby or JavaScript
// # Implement a program that takes 3 users  inputs from the terminal or the Browser, and stores them in three variables.
// #  Return the largest of the three. Do this without using the the inbuilt max () function!
// # The goal of this exercise is to think about some internals that programs normally take care of for us. 
let number1 = Number(prompt("Enter the first number: "))
let number2 = Number(prompt("Enter the second number: "))
let number3 = Number(prompt("Enter the third number: "))

if (number1 >= number2 && number1 >= number3){
    largest = number1
}
else if (number2 >= number1 && number2 >= number3){
    largest = number2
}
else{
    largest = number3
}
    
console.log(largest)

// # TASK 6:Using Python or PHP or Java or Ruby or JavaScript
// # Write a program that lets the user input a password. Give them only 4 attempts to check the passwords entered against
// #  “admin@123”. If the password is correct access is granted. After you show them a message , the account is blocked.
// # Once you learn functions,revisit this and write this code inside a function.
for (let i = 0; i < 3; i++){
    let user = prompt("Please enter your password: ")
    if (user == "admin@123"){
        console.log("Access granted")
        break
    }        
    else{
        if (i == 2){
            console.log("Account blocked")
        }            
        else{
            console.log("Wrong password. Please try again")
        }            
    }    
}

// # TASK 7: Using Python or PHP or Java or Ruby or JavaScript
// # Write that prompts the user to input student marks. The input should be between 0 and 100.Then output the correct grade: 
// # A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40
// # Once you learn functions,revisit this and write this code inside a function.
let student_marks = Number(prompt("Enter student marks: "))

if (student_marks >=0 && student_marks <= 100){
    if (student_marks > 79){
        grade = "A"
    }        
    else if (student_marks >= 60 && student_marks <= 79){
        grade = "B"
    }        
    else if (student_marks > 49 && student_marks <= 59){
        grade = "C"
    }        
    else if (student_marks >= 40 && student_marks <= 49){
        grade = "D"
    }        
    else{
        grade = "E"
    }        
}
else{
    grade = "Invalid marks. Please enter a mark between 0 and 100"
}
    
console.log(grade)
    
// # TASK 8: Using Python or PHP or Java or Ruby or JavaScript
// # Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for
// #  every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
// # For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should
// #  print: “License suspended”.
// # Once you learn functions,revisit this and write this code inside a function.
let speed = Number(prompt("Enter the car speed: "))
let speed_limit = 70

if (speed <= speed_limit){
    console.log("Ok")
    res = "Ok"
}    
else{
    if (parseInt((speed-speed_limit)/5+0.8) <= 12){
        console.log("Points: " + parseInt((speed-speed_limit)/5+0.8))
    }
    else{        
        console.log("License suspended")
    }    
}  

// # TASK 9: Using Python or PHP or Java or Ruby or JavaScript
// # Write a program called stars. It should prompt the user for a number, and it should print the number of stars till the number entered.
// # Example If rows is 5, it should print the following:
// # *
// # **
// # ***
// # ****
// # *****.....
// # Once you learn functions,revisit this and write this code inside a function.
let num = Number(prompt("Enter a number: "))
display = "*"

for (let i = 0; i < num; i++){
    display = display + "*"
    console.log(display)
}  

// # TASK 10: Using Python or PHP or Java or Ruby or JavaScript
// # Write a program that calculates the total stock in a company from the array/list below if we know that the stock is the last digit 
// # in every array/list.
// # prods = [[‘omo’,’30kshs’,’300’], [‘milk’,’50kshs’,’200’],[‘bread’,’45kshs’,’359’], [‘coffee’,’5kshs’,’79’]]

// # NB: ONCE YOU COPY AND PASTE THE LIST ABOVE,REWRITE THE SINGLE QUOTES AS THE ABOVE LIST WILL GIVE YOU AN ERROR.
// # Once you learn functions,revisit this and write this code inside a function.
let prods = [["omo","30kshs",300],["milk","50kshs",200],["bread","45kshs",359],["coffee","5kshs",79]]

let total_stock = 0

for (let i = 0; i < prods.length; i++) {
    total_stock = total_stock + Number(prods[i][2])
}

console.log(total_stock)


