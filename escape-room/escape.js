const readline = require("readline-sync");
const name = readline.question("What is your name?");
const gameTime = readline.question(name + ", Press Enter to start!");
const yourChoices = readline.question("Choose your action: 1. Put hand in a hole. 2. Find the key. 3. Open the door.");

// hand in a hole - dies 
// first needs to find key 
// then open the door to escape 

switch(yourChoices){
    case "1":
        console.log("Game Over! You're dead!");
        break;
    case "2":
        console.log("You found the Key!");
        break;
    case "3":
        console.log("The door won't open! Try again.");
        break;
}