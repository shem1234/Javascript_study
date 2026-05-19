// TASK 11: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes the date of birth of a person and the program outputs the age in terms of years,months,days TODAY.datetime
// Once you learn functions,revisit this and write this code inside a function.
// import datetime

//let birth_date = prompt("Enter date (YYYY-MM-DD): ")
let birth_date = "2026-04-20"

let birth_date_sections = birth_date.split("-")
console.log(birth_date_sections)

let birth_year = Number(birth_date_sections[0])
let birth_month = Number(birth_date_sections[1])
let birth_day = Number(birth_date_sections[2])

let current_year = 2026
let current_month = 5
let current_day = 19

let monthdays = [31,28,31,30,31,30,31,31,30,31,30,31]





// // TASK 11: Using Python or PHP or Java or Ruby or JavaScript
// // Write a program that takes the date of birth of a person and the program outputs the age in terms of years,months,days TODAY.datetime
// // Once you learn functions,revisit this and write this code inside a function.
// // import datetime

// let x = prompt("Enter date (YYYY-MM-DD): ")

// let yeare = String(x).slice(0,4)
// let monthe = String(x).slice(5,7)
// let daye = String(x).slice(8,10)

// let today = new Date()
// let yeart = today.getFullYear();
// let montht = String(today.getMonth() + 1).padStart(2, '0');
// let dayt = String(today.getDate()).padStart(2,"0")

// let years = 0
// let months = 0
// let days = 0

// if((yeare+monthe+daye) <= (String(yeart)+String(montht)+String(dayt))){
   
//     if(dayt >= daye && montht >= monthe){
//         days = Number(dayt) - daye
//         months = Number(montht) - monthe
//         years = yeart - yeare
//         console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
//     }
//     else if(dayt < daye && montht == monthe){
//         days = 30 - daye + Number(dayt)                         // Insert check month and leap year
//         months = 12 - monthe + Number(montht) - 1
//         years = yeart - yeare - 1
//         console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
//     }
//     else if(dayt < daye && montht >= monthe){
//         days = 30 - daye + Number(dayt)
//         months = Number(montht) - monthe - 1
//         years = yeart - yeare
//         console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
//     }
//     else if(dayt >= daye && montht < monthe){
//         days = Number(dayt) - daye
//         months = 12 - monthe + Number(montht)
//         years = yeart - yeare - 1
//         console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
//     }
//     else if(dayt < daye && montht < monthe){
//         days = 30 - daye + Number(dayt)
//         months = 12 - monthe + Number(montht) - 1
//         years = yeart - yeare - 1
//         console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
//     }
// }
// else{
//     console.log("Invalid date entered")
// }

// // # TASK 12: Using Python or PHP or Java or Ruby or JavaScript
// // # Write a program that prints the largest of 4 inputs taken as input from a user.
// // # Once you learn functions,revisit this and write this code inside a function.
// let number1 = Number(prompt("Enter the first number: "))
// let number2 = Number(prompt("Enter the second number: "))
// let number3 = Number(prompt("Enter the third number: "))
// let number4 = Number(prompt("Enter the fourth number: "))

// if (number1 >= number2 && number1 >= number3 && number1 >= number4){
//     largest = number1
// }
// else if(number2 >= number1 && number2 >= number3 && number2 >= number4){
//     largest = number2
// }
// else if(number3 >= number1 && number3 >= number2 && number3 >= number4){
//     largest = number3
// }
// else{
//     largest = number4
// }
    
// console.log(largest)

// // TASK 13: Using Python or PHP or Java or Ruby or JavaScript or C# or Go
// // Write a program that takes the email and password as input from a user and checks if they are equal to “admin@mail.com” and
// // password is “Admin@123” , if so then print  “Login is Successful” and if not print “Invalid username or password”.
// // ONLY accept 3 tries after which it notifies you that you have been blocked.
// // Once you learn functions,revisit this and write this code inside a function.
// i = 0

// for (let i = 0; i < 3; i++){
//     let email = prompt("Enter your email address: ")
//     let password = prompt("Enter your password: ")

//     if (email == "admin@mail.com" && password == "Admin@123"){
//         console.log("Login is Successful")
//         break
//     }        
//     else{
//         if (i < 2){
//             console.log("Invalid username or password")
//         }
//         else{
//             console.log("Account blocked")
//         }        
//     }
// }

// // TASK 14: Using Python or PHP or Java or Ruby or JavaScript
// // Write a program that takes input of 2 values and adds them. The program should only accept numbers and floats only or otherwise
// // display an error “invalid character entered” and take the user to re-enter the inputs .
// // Once you learn functions,revisit this and write this code inside a function.
// i = 0

// for (let i = 0; i < 3; i++){
//     let number1 = Number(prompt("Enter a number: "))
//     let number2 = Number(prompt("Enter another number: "))

//     if (!isNaN(number1) && !isNaN(number2)){
//         let sum = number1 + number2
//         console.log(sum)
//         break
//     }
//     else{
//         console.log("invalid character entered")
//     }       
// }
