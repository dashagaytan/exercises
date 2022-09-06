var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
vegetables.pop()
console.log(vegetables)

// 2. Remove the first item from the fruit array.
fruit.shift()
console.log(fruit)

// 3. Find the index of "orange."
const orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex) // index = 1 after we removed the first index. 

// 4. Add that number to the end of the fruit array.
fruit.push("1")
console.log(fruit)

// 5. Use the length property to find the length of the vegetable array.
const length = vegetables.length
console.log(length)

// 6. Add that number to the end of the vegetable array.
vegetables.push("3")
console.log(vegetables)

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
const food = fruit.concat(vegetables)
console.log(food)

// 8. Remove 2 elements from your new array starting at index 4 with one method.
const newFood = food.slice(4,7)
console.log(newFood)

// 9. Reverse your array.
const reverseFood = newFood.reverse()
console.log(reverseFood)

// 10. Turn the array into a string and return it.
const stringFood = newFood.join(" ")
console.log(stringFood)