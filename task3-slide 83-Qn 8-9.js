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

// // # TASK 9: Using Python or PHP or Java or Ruby or JavaScript
// // # Write a program called stars. It should prompt the user for a number, and it should print the number of stars till the number entered.
// // # Example If rows is 5, it should print the following:
// // # *
// // # **
// // # ***
// // # ****
// // # *****.....
// // # Once you learn functions,revisit this and write this code inside a function.
// let num = Number(prompt("Enter a number: "))

// for (let i = 1; i <= num; i++){
//     let rows = ""
//     for(let j = 1; j <= i; j++){
//         rows = rows + "*"
//     }
//     console.log(rows)
// }  

// Template literal
let name = "Kate"

//console.log(`My name is`${name})
console.log(`My name is`,name)