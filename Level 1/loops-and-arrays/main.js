// #1
// loop through an array and count how many 'computers' there are
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i]==="computer"){
        console.log(officeItems[i])
    }
}

//#2
// log "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
   // use .age to grab only age from the objects
  for(var j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[j].age >= 18){
        console.log("old enough");
    } else {
        console.log("not old enough");
    }
  }