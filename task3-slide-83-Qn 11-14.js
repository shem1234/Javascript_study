// // TASK 11: Using Python or PHP or Java or Ruby or JavaScript
// // Write a program that takes the date of birth of a person and the program outputs the age in terms of years,months,days TODAY.datetime
// // Once you learn functions,revisit this and write this code inside a function.
// // import datetime

// //let x = prompt("Enter date (YYYY-MM-DD): ")

// //20260501,20260401,20260420,20260301,20260320,20260101,20260120,

// let x = [20251201,20251220,20251101,20251120,20250601,20250620,20250501,20250401,20250420,20250301,20250320,20250101,20250120,20241201,20241220,20241101,20241120,20240601,20240620
// ,20240501,20240520,20240401,20240420,20240101,20240120,20231201,20231220,20231101,20231120,20230601,20230620,20230501,20230520
// ,20230401,20230420,20230101,20230120]

// for(i = 0; i <= x.length; i++){

//     let yeare = String(x[i]).slice(0,4)
//     let monthe = String(x[i]).slice(4,6)
//     let daye = String(x[i]).slice(6,8)

//     console.log(daye, monthe, yeare)

//     let today = new Date()
//     let yeart = today.getFullYear();
//     let montht = today.getMonth() + 1
//     let dayt = today.getDate()

//     console.log(dayt, montht, yeart);

//     let years = 0
//     let months = 0
//     let days = 0

// if(yeart = yeare && montht == monthe && dayt >= daye){
//     days = dayt - daye
//     console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
// }
// else if(yeart = yeare && montht > monthe && dayt > daye){
//     months = montht - monthe
//     days = dayt - daye
//     console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
// }
// else if(yeart = yeare && montht > monthe && dayt < daye){
//     months = montht - monthe - 1
//      days = 30 - daye + dayt
//      console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
// }
// else if(yeart > yeare && montht == monthe && dayt > daye){
//     years = yeart - yeare
//     days = dayt - daye
//     console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
// }
// else if(yeart > yeare && montht > monthe && dayt > daye){
//     years = yeart - yeare
//     months = montht - monthe
//     days = dayt - daye
//     console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
// }
// else if(yeart > yeare && montht > monthe && dayt < daye){
//     years = yeart - yeare
//     months = montht - monthe
//     days = 30 - daye + dayt
//     console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
// }
// else if(yeart > yeare && montht <= monthe && dayt > daye){
//     years = yeart - yeare - 1
//     months = 12 - monthe + montht
//     days = dayt - daye
//     console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
// }
// else if(yeart > yeare && montht <= monthe && dayt < daye){
//     years = yeart - yeare - 1
//     months = 12 - monthe + montht - 1
//     days = 30 - daye + dayt
//     console.log(`Your age is ${years} years, ${months} month and ${days} days.`)
// }
// else{
//     console.log("Invalid date entered")
// }
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
