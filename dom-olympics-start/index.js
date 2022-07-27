// add h1 to header, style center 
const h1 = document.createElement("h1")
h1.textContent = "JavaScript Made This!!"
h1.className = "header"

document.getElementById("header").appendChild(h1);
h1.style.textAlign = "center"

// insert name and text using innerHTML
const subTitle = document.createElement("p")
subTitle.innerHTML += "<span style = 'color: brown' class = 'yourName'> Dasha </span> made this JavaScript"
subTitle.className = "p"

document.getElementById("header").appendChild(subTitle);
subTitle.style.textAlign = "center"

// change the context of messages 
const newMessages = document.getElementsByClassName("message")
newMessages[0].textContent = "Hi, lets hang out today! 🥰"
newMessages[1].textContent = "Want to grab lunch? 🥪"
newMessages[2].textContent = "🤩 Panera at 12? "
newMessages[3].textContent = "Can't wait! 🤤"

// loop through messages, add event listener to clear-button
for (i = 0; i < newMessages.length; i++){
    console.log(newMessages[i]);
}

const clearButton = document.querySelector("#clear-button")
clearButton.addEventListener("click", function(event){
    for (i = 0; i < newMessages.length; i++){
        newMessages[i].remove();
    }
})

// theme toggle manipulation
const blueGrayTheme = true;
const yellowGreenTheme = false;

const toggleButton = document.querySelector("there-drop-down") // selecting a single element from document 
