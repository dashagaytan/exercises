//1. array of numbers that are doubles of the first array
const numbers = [2, 5, 100];

const doubleNumbers = numbers.map(num => num * 2)

  console.log(doubleNumbers); // [4, 10, 200]
  
//2. turn an array of numbers into strings
const numbers2 = [2, 5, 100]

const stringNum = numbers.map(num => num.toString())

console.log(stringNum)

//3. capitalize the first letter of each name
const names = ['john', 'jacob', 'jingleheimer', 'schmidt']

const capitalizedNames = names.map(capName => capName.charAt(0).toUpperCase() + capName.substr(1).toLocaleLowerCase())

console.log(capitalizedNames)

//4. an array of strings of the names
function namesOnly(arr){
    return arr.map(i => i.name)
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));

  //5. an array of strings of the names saying whether or not they can go to the Matrix
 
 const arr = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]
  const result = arr.map(function(matrix){
    if(matrix.age >= 18) {
        return (matrix.name + " can go to the Matrix")
    } else if (matrix.age < 18){
        return (matrix.name + " is under age!!")
    }
  });
  console.log(result)
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  

  //6.
  
  const readyToPutInTheDOM = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
  ]

  const result2 = readyToPutInTheDOM.map(arr => {
    return "<h1>" + arr.name + "</h1>" + "<h2>" + arr.age + "</h2>"
  })
  console.log(result2)