//1. sort form least to greatest
const numbers = [1, 3, 5, 2, 90, 20];

numbers.sort((a, b) => a - b)
console.log(numbers)

//2. sort from largers to smallest number
const numbers2 = [1, 3, 5, 2, 90, 20];

numbers2.sort((a,b) => b - a)
console.log(numbers2)

//3. sort from shortest string to longest
const arr1 = ["dog", "wolf", "by", "family", "eaten"];
arr1.sort((short, long) => short.length - long.length)
console.log(arr1)

//4. sort an array alphabetivally
const arr = ["dog", "wolf", "by", "family", "eaten"];
arr.sort()
console.log(arr)

//5. sort an array by age
const byAge = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

byAge.sort(function(younger, older){
    return younger.age - older.age
})
console.log(byAge)

//ES6 version
// byAge.sort((younger, older) => younger.age - older.age)
// console.log(byAge)
