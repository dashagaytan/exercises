// return a string in all capital letters followed by all lowercase letters
const capAndLowerCase = ("HelLo")
const allUpperCase = capAndLowerCase.toUpperCase()
const allLowerCase = allUpperCase.toLowerCase()
console.log(allUpperCase + allLowerCase)

// return a number that is half he string's length, rounded down
const hello = ("Hello")
const indexOfhello = Math.floor(hello.indexOf("l"))
console.log(indexOfhello)

const helloWorld = ("Hello World")
const indexOfHelloWorld = Math.floor(helloWorld.indexOf(" "))
console.log(indexOfHelloWorld)

// slice function 
const firstLice = hello.slice(0,2)
console.log(firstLice)

const secondSlice = helloWorld.slice(0,5)
console.log(secondSlice)