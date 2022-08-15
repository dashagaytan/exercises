// FizzBuzz programming challenge that requires a software developer to print numbers from 1-100 with a catch! 
// multiples of 3 will print "Fizz"
// multiples of 5 will print "Buzz" 
// multiples of both 3 & 5 will print "FizzBuzz" 

//we will use a for loop and modulus operator when dividing two operands. 

for (let i = 0; i < 101; i ++){
    if( i % 15 == 0) 
        console.log("FizzBuzz");
    else if ( i % 3 == 0)
        console.log("Fizz");
    else if ( i % 5 == 0)
        console.log("Buzz");
    else console.log(i);
}