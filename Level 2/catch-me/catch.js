// error handling 
//1a.
function sum(num1, num2){
    if(typeof num1 !== "number"){
        throw "you must use numbers only!"
    }if(typeof num2 !== "number"){
        throw "this is not a number!"
    }
    console.log(num1 + num2)
}
    try {
        sum(3, "b")
    } 

    catch(err){
        console.log(err)
    }

    finally{
        console.log("this code will execute anyways.")
    }

