// Create a variable and console log whether a number is odd or even
let num = Number(prompt("Enter a number: "))

if (num%2 == 0){
    console.log("The number is even")
}
else{
    console.log("The number is odd")
}

// Create 3 variables and console log the largest of them. Assume that
//  the user would not enter any two numbers
//  which are the same.
let num1 = prompt("Enter the first number: ")
let num2 = prompt("Enter the second number: ")
let num3 = prompt("Enter the third number: ")

if (num1 > num2 && num1 > num3){
    console.log("Largest number is " + num1)
}else if (num2 > num1 && num2 > num3){
    console.log("Largest number is " + num2)
}else if (num3 > num1 && num3 > num2){
    console.log("Largest number is " + num3)
}else{
    console.log("Invalid number")
}

// Create a variable called year and enter the a random year. Check if 
// the year is a leap year or not. 
// A leap year is a year that is divisible by 4  not divisible by 
// 100 or divisible  by 400.
let year = Number(prompt("Enter the year: "))

if (year%4 == 0 && year%100 == 0 && year%400 == 0){
    console.log(year + " is a leap year")
}
else{
    console.log(year + " is not leap year")
}

// Take as input from a user the temperature if the temperature is 
// above 30°C display “The temperature is 
// too high”,if the temperature   is above 15 display “Normal 
// temperature” otherwise display “Cold temperature”
let temp = Number(prompt("Enter the temperature: "))

if (temp > 30){
    console.log("The temperature is too high")
}
else if (temp >15 && temp <= 30){
    console.log("Normal temperature")
}
else{
    console.log("Cold temperature")
}

// Write a js program that checks if a variable x is between 10 and 20
//  (inclusive) and if another variable y
//  is greater than 100. If both conditions are true, display"Conditions met",
//  otherwise display"Conditions not met"
let x = Number(prompt("Enter the first number: "))
let y = Number(prompt("Enter the second number: "))

if (x >= 10 && x <= 20 && y > 100){
    console.log("Conditions met")
}
else{
    console.log("Conditions not met")
}

// Write a js program that checks if a variable password is equal to the string "secret123". If it is, 
// display "Access   granted", otherwise display"Access denied"
let pass = prompt("Enter the password: ")

if (pass == "secret123"){
    console.log("Access granted")
}
else{
    console.log("Access not granted")
}

// Write a js program that checks if a variable student_score is greater than 90. If true, check if the 
// attendance is greater than 80. If both conditions are true, display"Excellent student", 
// otherwise display "Good score, but attendance needs improvement"
let score = Number(prompt("Enter the student score: "))
let att = Number(prompt("Enter the attendance score: "))

if (score > 90){
    if (att >80){
        console.log("Excellent student")
    }
    else{
        console.log("Good score, but attendance needs improvement")
    }
}
else{
    if (att >80){
        console.log("Low score, but excellent attendance")
    }
    else{
        console.log("Low score, and poor attendance")
    }
}

// Conditional statement A student's final grade is determined by their exam score (a number between 0 and 100)
//  using the rules below: If the score is 70 or above, the grade is A. If the score is 60 to 69, the grade is B.
//  If the score is 50 to 59, the grade is C. If the score is 40 to 49, the grade is D. if the score is below 40,
//  the grade is F. Task: write a javaScript program that : Stores a student's score in a variable.
//  Uses if, else if, and else statements to determine the grade. Prints the grade to the console.
let marks = prompt("Enter the marks: ")

if (marks < 0 || marks > 100){
    console.log("Invalid marks. Please reenter")
}
else if(marks >= 70){
    console.log("Grade A")
}
else if (marks >= 60 && marks <= 69){
    console.log("Grade B")
}
else if (marks >= 50 && marks <= 59){
    console.log("Grade C")
}
else if (marks >= 40 && marks <= 49){
    console.log("Grade D")
}
else{
    console.log("Grade F")
}


