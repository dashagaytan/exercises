// mouse hover over square color change blue
square.addEventListener('mouseover', function mouseOver(){
    square.style.backgroundColor = "blue";
});

// when mouse is clicked color change to red
square.addEventListener('mouseout', function mouseOut(){
    square.style.backgroundColor = "yellow";
});

// mouse button let go color change to yellow
square.addEventListener('click', function mouseClick(){
    square.style.backgroundColor = "red";
});
// double click on square color change to green 
square.addEventListener('dblclick', function doubleClick(){
    square.style.backgroundColor = "green";
});
// mouse scroll anywhere on document color change to orange
square.addEventListener('onwheel', function wheelOver(){
    square.style.backgroundColor = "orange";
});