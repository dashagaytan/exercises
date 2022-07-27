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

