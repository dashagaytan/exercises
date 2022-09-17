const btn = document.getElementsByClassName("btn");
let clicks = 0;

document.addEventListener('onload', () => {       // onload executes js as soon as the page loads
    localStorage.getItem('clicks')               // persists on page refresh and closing the browser
})

btn.addEventListener("click", () => {
    clicks += 1; 
    let count = document.getElementsByClassName('click').innerText = count
    localStorage.setItem('clicks', count)
})
