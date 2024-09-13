
// Q1

// var city = prompt ("enter where do you live?");


// if (city === "karachi"){
//     alert ( "welcome to ciy of ligh")
// }


// else {
//      alert( "welcome you live in " + city );
// }

// Q2

 // Step 1: Take input from user
//  var gender = prompt("Please enter your gender (male/female):");

 // Step 2: Use if-else to check and display the appropriate message
//  if (gender.toLowerCase() === "male") {
//      alert("Good Morning Sir");
//  } else if (gender.toLowerCase() === "female") {
//      alert("Good Morning Ma'am");
//  } else {
//      alert("Invalid input. Please enter either 'male' or 'female'.");
//  }


// Q3

// Step 1: Take input from the user
//         var signalColor = prompt("Enter the color of the road traffic signal (red, yellow, or green):");

//         if(signalColor === "red"){
//     alert("must stop")
// }

// if(signalColor ===  "yellow"){
//     alert("Ready to move")
// }


// if(signalColor ===  "green"){
//     alert("move now")
// }

    // Q4

    // var fuel = prompt("Enter remainng fuel")

    // if (fuel < 0.25) {
    //     alert("Please refill the fuel in your car.");
    // }
    
    // else {
    //     alert("You have enough fuel.");
    // }
 

// Q5 a

    // var a = 4;
    // if (++a === 5) {
    //     alert("given condition for variable a is true");
    // }
//    output: true
    
// B

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// output: false

// C

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// Output: false

// if (c === 13){
// alert("condition 2 is true");
// }
// Output: true

// if (++c < 14){
// alert("condition 3 is true");
// }
// Output: false

// if(c === 14){
// alert("condition 4 is true");
// }
// Output: true

// D.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// outpu: true

//  E.
// if (true){
//     alert("True");
//     }
//     if (false){
//         alert("False");
//         }
        // outpu: true

         
        // f
        // if("car" < "cat"){
        //     alert("car is smaller than cat");
        //     }
            // outpu: fales

// Q7
// A
// var secretNumber = 7; // Secret number is 7

// var Guess = prompt("Guess the secret number (between 1 and 10):");

// if (Guess == secretNumber) {
//     alert("Bingo! Correct answer");
// }

// B
// Example values for secretNumber and guessedNumber
// let secretNumber = 42; // The number to guess
// let guessedNumber = 41; // The user's guess

// Check if the guessed number + 1 is the secret number
// if (guessedNumber + 1 === secretNumber) {
//     console.log("Close enough to the correct answer");
// } else {
//     console.log("Try again");
// }

// Q8
// Example number
// let number = 9; // Replace this with the number you want to check

// Check if the number is divisible by 3
// if (number % 3 === 0) {
//     console.log("The number is divisible by 3.");
// } else {
//     console.log("The number is not divisible by 3.");
// }


// Q9
// Example number
// let number = 7; // Replace this with the number you want to check

// Check if the number is even or odd
// if (number % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

// Q10
// Function to check the temperature and display a message
// function checkTemperature() {
    // Get the temperature input from the user
    // let temperature = prompt("Enter the temperature:");

    // Convert the input to a floating-point number
    // temperature = parseFloat(temperature);

    // Display the appropriate message based on the temperature
//     if (temperature > 40) {
//         alert("It is too hot outside.");
//     } else if (temperature > 30) {
//         alert("The Weather today is Normal.");
//     } else if (temperature > 20) {
//         alert("Today’s Weather is cool.");
//     } else if (temperature > 10) {
//         alert("OMG! Today’s weather is so Cool.");
//     } else {
//         alert("It's quite cold today.");
//     }
// }

// Call the function to check temperature
// checkTemperature();


// Q11
// Function to perform calculator operations
// function calculator() {
    // Take the first number input
    // let num1 = parseFloat(prompt("Enter the first number:"));

    // Take the second number input
    // let num2 = parseFloat(prompt("Enter the second number:"));

    // Take the operation input (+, -, *, /, %)
    // let operation = prompt("Enter the operation (+, -, *, /, %):");

    // Variable to store the result
    // let result;

    // Perform the operation based on the user input
    // if (operation === "+") {
    //     result = num1 + num2;
    // } else if (operation === "-") {
    //     result = num1 - num2;
    // } else if (operation === "*") {
        // result = num1 * num2;
    // } else if (operation === "/") {
        // Check for division by zero
        // if (num2 !== 0) {
            // result = num1 / num2;
        // } else {
            // alert("Error: Division by zero is not allowed!");
            // return; // Exit the function early if division by zero occurs
    //     }
    // } else if (operation === "%") {
    //     result = num1 % num2;
    // } else {
        // alert("Invalid operation! Please enter one of +, -, *, /, or %.");
        // return; // Exit the function if the operation is invalid
    // }

    // Show the result to the user
    // alert("The result is: " + result);
// }

// Call the calculator function
// calculator();