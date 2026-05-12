let values = [1,2,3,"Apples","Samsung",false]
console.log(values)

console.log(values[4])

values[5] = true
console.log(values)

// Length
console.log(values.length)

// at() method
console.log(values.at(-2))
console.log(values.at(5))

// slice
console.log(values.slice(2,5))

// adding using push and unshift
values.push("HP",9,10)
console.log(values)

values.unshift("Mango","Peach", 100)
console.log(values)

// removing values with pop and shift
values.pop()
console.log(values)

values.shift()
console.log(values)

// includes
console.log(values.includes(3))
console.log(values.includes(5))