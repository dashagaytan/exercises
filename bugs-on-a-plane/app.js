const form = document["my-form"];

form.addEventListener("submit", (event) => {
    var firstName = form.elements.value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements.value;
    var gender = form.elements.value;
    var location = form.elements.value;
    var diet = [];

    if (form.vegan.checked) {
        diet.push(document.getElementById("vegan").value);
    }

    if (form.gluten.checked) {
        diet.push(document.getElementById('gluten').value);
    }

    if (form.paleo.checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + 
    "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");


});