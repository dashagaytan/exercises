//1. return an array that has only the numbers that are 5 or greater
const arr = [3, 6, 8, 2]

const result = arr.filter(num => num >= 5)
console.log(result)

//2. return a new array of numbers that only includes the even numbers
const numbers = [3, 6, 8, 2]

const evenNum = numbers.filter(nums => nums % 2 === 0)

console.log(evenNum)

//3. return a new array that only includes those that are 5 characters or fewe in length

const char = ["dog", "wolf", "by", "family", "eaten", "camping"]

const result2 = char.filter(charAmnt => charAmnt.length >= 5)

console.log(result2)

//4. return a new array that has filtered out all those who don't belong to the club
const peopleInTheClub = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

// const result3 = peopleInTheClub.filter(function(club){
//     if(club.member === true)
//     return club.name
// })

//ES6 version
const result3 = peopleInTheClub.filter(club => club.member === true)

console.log(result3)

//5. filter a list of people who are old enough to see "The Matrix" 18+
const viewers = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

// const oldEnough = viewers.filter(function(ofAge){
//     if(ofAge.age >=18){
//         return ofAge.name
//     }
// })

//ES6 version
const oldEnough = viewers.filter(ofAge => ofAge.age >=18)

console.log(oldEnough)