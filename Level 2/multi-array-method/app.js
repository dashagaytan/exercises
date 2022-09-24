// using higher order function : 
//1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where

const arr = [
    {
        fistName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        fistName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        fistName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        fistName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        fistName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const arrAge = arr.filter(arr => arr.age >= 18)
console.log(arrAge)

arrAge.sort((a,b) => a.lastName.localeCompare(b.lastName))
console.log(arrAge)

const embeddedArr = arrAge.map(function(num){
    return "<li>" + num.fistName + " " + num.lastName + " is " + num.age + "</li>"
})
console.log(embeddedArr)
 