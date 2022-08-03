//Preliminaries
//for loop that prints out numbers 1-9
for(let i = 0; i < 10; i++){
    console.log(i);
}

// for loop that decrements 9-0
for(let i = 9; i >= 0; i--){
    console.log(i);
}

// for loop that prints an array of fruits
const fruit = ["banana", "orange", "apple", "kiwi"]
for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

//Bronze Medal
// loop that pushes number 0-9 to an array
const numbers = []
for (let i = 0; i < 10; i ++){
    numbers[i] = i; 
}
console.log(numbers);

// loop that prints only event numbers 0-100
for (let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}