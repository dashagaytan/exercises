// error handling 
function sum(x,y){
    if(typeof x !== "number"){
        throw "you must use numbers only!"
    }if(typeof y !== "number"){
        throw "this is not a number!"
    }
    console.log(x + y)
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
