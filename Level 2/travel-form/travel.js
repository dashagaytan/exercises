const form = document['travelForm']

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const fName = form.firstName.value;
    const lName = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const city = form.city.value;
    const diet = [];

   if(form.vegetarian.checked){
        diet.push(document.getElementById('vegetarian').value);
   } if(form.kosher.checked){
        diet.push(document.getElementById('kosher').value);
   } if(form.lactoseFree.checked){
        diet.push(document.getElementById('lactoseFree').value);
   } if(form.noRestrictions.checked){
        diet.push(document.getElementById('noRestrictions').value)
   }

    alert ("First Name: " + fName + "\n Last Name: " + lName + "\n Age: "
    + age + "\n Gender: " + gender + "\n City: " + city + "\n Meal: " + diet);
})