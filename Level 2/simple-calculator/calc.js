const addition = document['add']
const subtraction = document['subtract']
const multiplication = document['multiply']

//ADDITION
addition.addEventListener("submit", function(event){
    event.preventDefault();

    const add1 = addition.add1.value
    const add2 = addition.add2.value
    addition.add1.value = ""
    addition.add2.value = ""

    //output the result
    const addResult = document.createElement('h1')
    addResult.textContent = +add1 + +add2
    addResult.style.backgroundColor = 'pink'
    addResult.style.textAlign = 'center'
    
    document.getElementById('add').append(addResult)
})

//SUBTRATION 
subtraction.addEventListener("submit", function(event){
    event.preventDefault();

    const subtract1 = subtraction.subtract1.value
    const subtract2 = subtraction.subtract2.value
    subtraction.subtract1.value = ""
    subtraction.subtract2.value = ""

    //subtraction result output
    const subResult = document.createElement('h1')
    subResult.textContent = +subtract1 - +subtract2
    subResult.style.backgroundColor = 'lightgreen'
    subResult.style.textAlign = 'center'

    document.getElementById('subtract').append(subResult)
})

//MULTIPLICATION
multiplication.addEventListener("submit", function(event){
    event.preventDefault();

    const multiply1 = multiplication.multiply1.value
    const multiply2 = multiplication.multiply2.value
    multiplication.multiply1.value = ""
    multiplication.multiply2.value = ""

    // multiplication result output
    const multResult = document.createElement('h1')
    multResult.textContent = multiply1 * multiply2
    multResult.style.backgroundColor = 'orange'
    multResult.style.textAlign = 'center'
    
    document.getElementById('multiply').append(multResult)
})