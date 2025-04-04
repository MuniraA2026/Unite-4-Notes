/* This is a MULTI-LINE comment 
The code below is an example STATEMENT
(instruction/command)
console.log is a FUNCTION that displays info 
in the console (output) area
STATEMENT end with a SEMICOLON (;)
*/
console.log("Hey dude what's up?");

// This is a SINGLE-LINE comment 

// DECLARE a new VARIABLE
let pokemon

// ASSIGN a VALUE to the variable 
//it's like puting an item in the box
pokemon = "Pikachu"

// DECLARE + ASSIGN in one statement 
let luckyNumber = 4;

// "PASS IN" a variable to a function
console.log(luckyNumber);

// CHANGE the value of an existing variable
let raining = false;
console .log (raining);
raining = true;
console.log(raining);


// COPY data from one variable into another
let breakfast = "water"
let lunch;
lunch = breakfast;
console.log (breakfast);
console.log (lunch);
// Above statements log the VALUE stored in VARIABLES named breakfast and lunch
// Below statement log the literal string "lunch"
console.log("lunch");

// MATH OPERATORS 
let score = 0;
score = score + 5;console.log(score)
score = score - 10;
console.log(score)
score = score * (-3);
console.log(score)
score = score / 5;
console.log(score);

// Can bombine operators, evaluation follows PEMDAS
score = (score * 3 / 7 - 4 + (-6)) ** 2 ;
console.log(score);

//STRING CONCATENATION  (merging with the PLUS SIGN)
// String LITERALs are indicated with "QUOTES"
let greeting = "Hello" + "Friend";
console.log(greeting);

// Can combine String Literals with VARIABLES
let username = "Stitch_evol24" ;
console.log("welcome, \n" + username + "! ");

// Numbers get converted to String if combined
console.log(4 + 5); // 9 (did addition)
console.log("4" + 5 ); // 45 (concate, not math)
console.log( 4 + '5'); // same as above

// SHORTCUT OPERATORS (Increment/Decrement)
let counter = 0;
counter = counter + 1; // LONG WAY
counter++; // SHORTCUT
console.log("Count is" + counter);
counter--;
console.log("Count is " + counter);

/* FUNCTION:
Reusable sets of code statements that perform a specific task or process
*/

// console.log is a FUNCTION that we've used 
// TASK: display data in the console
console.log("I just used a function");

// DECLARE (create -) your own function
function skincare() {
    // STATEMENTS (actions) to execute for this routine
    console.log("1. Clean");
    console.log("2. Apply toner");
    console.log("3. Moisturize");
}
// CALL the function to use it!
skincare();
skincare(); // can run the function again


// *** Selection (CONDITIONALS) *** 
// A conditional expression is like a QUESTION
// that has a boolean (true/false) ANSWER

console.log( "Conditionals:");
console.log( 4 > 5 ); // 4 > 5 evaluates to false
console.log("Is 10 less than 2?");
console.log( 10< 2 );
console.log( 2== 2 );console.log( 4 != 2 );
console.log( 4 != 4 );

// Strings can also be compared by dictionary order
//Each letter/character has a numerical value (A is 1, B is 2...)
console.log( "Kyanni" >= "Ayesha"); // true 
console.log( "z" < "A" ); // false
console.log( "Katerina" == "Katherine" );

// Can use comparison operators btwn VARIABLES and VALUES
let myNickname = "Katie";
console.log( myNickname == "Kat" );

// use CONDITIONS in IF STATEMENTS to make 
// DECISIONS about which code to execute

let age = 17
// "is the value of the age variable equal to 16?"
if (age == 16) { 
    // code below oly runs if the condition above
    console.log("Happy Sweet Sixteen");
}
else {
    // code below runs when the IF block is false
    console.log("Happy Birthday!");
}

// use ELSE IF blocks to test multiple options
age = 15; // change value of age variable
if (age == 18) {
    console.log(" Congrats on becoming an adult!");
}
else if ( age > 18 ) {
    console.log("Go Vote");
}
else {
    console.log("Too young to vote..")
}