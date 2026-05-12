// Assignment 1: Create an Array
// Create an array named colors with
// the following elements: 'red', 'green', 'blue'.
let colours = ["red","green","blue"]

console.log(colours)

// Assignment 2: Access and Modify 
// Array Elements
// Given the array colors, access the 
// second element and change it to 'pink'. Then, display the modified array.
colours[1] = "pink"
console.log(colours)

// Assignment 3: Determine the Length of
//  an Array
// Given the array colors, determine its 
// length and store it in a variable
//  lengthOfColors. Then, display
//  lengthOfColors.
let lengthOfColors = colours.length
console.log(lengthOfColors)

// Assignment 4: Use .pop() Method
// Given the array colors, use the .pop() 
// method to remove the last element
//  from the array. Then, display the 
// modified array.
colours.pop()
console.log(colours)

// Assignment 1: Combine Arrays
// Given two arrays arr1 and arr2, 
// combine them into a single array
//  combinedArray using the .concat()
//  method. Then, remove the first
//  element from combinedArray using 
// the .shift() method. Finally, display
//  the modified combinedArray.
let arr1 = ["red","green","blue"]
let arr2 = [1,2,3]

let combinedArray = arr1.concat(arr2)
console.log(combinedArray)

combinedArray.shift()
console.log(combinedArray)

// Assignment 2: Extract Subarray
// Given an array “sourceArray”, extract
//  a subarray “extractedArray” from 
// index 2 to index 4 using the .slice() 
// method. Then, modify the extractedArray 
// by replacing its elements with
//  'x', 'y', and 'z' using the .splice() 
// method. Finally, display both the
//  sourceArray and the modified extractedArray.
let sourceArray = ["red","green","blue","yellow","grey","pink"]

let extractedArray = sourceArray.slice(2,5)

extractedArray.splice(0,3,"x","y","z")

console.log(sourceArray)
console.log(extractedArray)


