//Task 01 (Basic Calculator using prompt)
var num1 = +prompt("Enter the first number: ")
var num2 = +prompt("Enter the second number: ")

var add = num1 + num2
var sub = num1 - num2
var mul = num1 * num2
var div = num1 / num2

document.writeln(`The sum of ${num1} and ${num1} is ${add} <br>`)
document.writeln(`The subtraction of ${num1} and ${num1} is ${sub} <br>`)
document.writeln(`The multiplication of ${num1} and ${num1} is ${mul} <br>`)
document.writeln(`The division of ${num1} and ${num1} is ${div} <br>`)


//Task 02 (Check Even or Odd Number)

let number = Number(prompt("Enter a number:"));

if (number % 2 === 0) {
    document.writeln(number + " is Even");
} else {
    document.writeln(number + " is Odd");
}

//Task 03 (Voting Eligibility Check)

let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    document.writeln("You are eligible for voting.");
} else {
    document.writeln("You are NOT eligible for voting.");
}

//Task 04 (Sum of Array Elements using Loop)

let numbers = [10, 20, 30, 40, 50];
let totalSum = 0;

for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
}

document.writeln("Total Sum =", totalSum);

//Task 05 (Palindrome String Check)

let text = prompt("Enter a string:");
let reversedText = text.split("").reverse().join("");

if (text === reversedText) {
    document.writeln(text + " is a Palindrome");
} else {
    document.writeln(text + " is not a Palindrome");
}

//Task 06 (Function to Find Largest Number)

function findLargest(a, b, c) {

    if (a >= b && a >= c) {
        return a;
    } 
    else if (b >= a && b >= c) {
        return b;
    } 
    else {
        return c;
    }
}

document.writeln("Largest Number =", findLargest(45, 90, 70));

//Task 07 (Print Even Numbers from 1 to 20)

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        document.writeln(i);
    }
}

//Task 08 (Factorial of a Number)

let factNumber = Number(prompt("Enter a number:"));
let factorial = 1;

for (let i = 1; i <= factNumber; i++) {
    factorial *= i;
}

document.writeln("Factorial =", factorial);

//Task 09 (Reverse Order of Names in Array)

let names = ["Ali", "Ahmed", "Sara", "Ayesha", "Usman"];

document.writeln("Names in Reverse Order:");

for (let i = names.length - 1; i >= 0; i--) {
    document.writeln(names[i]);
}

//Task 10 (Password Strength Checker)

let password = prompt("Enter your password:");

if (password.length < 8) {
    document.writeln("Weak Password");
} else {
    document.writeln("Strong Password");
}