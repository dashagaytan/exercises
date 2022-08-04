//combining arrays using for loops
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphabet = alphabet.toUpperCase(); 
var alphabetArr = alphabet.split("");  // convert alphabet string into an array
var newArr = [];

    for(var i = 0; i < people.length; i++){
        newArr.push(people[i])
        for(var j = 0; j < alphabetArr.length; j++){
            newArr.push(alphabetArr[j]);
        }
        console.log(newArr);
    }

