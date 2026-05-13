let person = {
    name : "John Doe",
    age : 29,
    address : "123 Kimathi Street"
}

console.log(person)

// dot notation
console.log(person.name)
console.log(person.age)

// Bracket notation
console.log(person["is employed"])
console.log(person["address"])

//
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

// changing values
person.name = "Alice"
console.log(person)
