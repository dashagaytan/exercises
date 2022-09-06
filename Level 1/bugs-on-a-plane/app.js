const form = document["my-form"];
const submit = document.getElementById("submit");

function formAlert(){
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    const diet = [];

    // for loop 
    for(let i = 0; i < form.check.lengh; i ++){
        if (form.check[i].checked === true){
            diet.push(form.check[i].value);
        }
    }
    // }
    // if (form.vegan.checked) {
    //     diet.push(document.getElementById("vegan").value);
    // }

    // if (form.gluten.checked) {
    //     diet.push(document.getElementById("gluten").value);
    // }

    // if (form.paleo.checked) {
    //     diet.push(document.getElementById("paleo").value);
    // }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + 
    "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", formAlert);