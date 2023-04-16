import * as readline from 'readline-sync';

function addNumbers(): number {
    let firstNumber: number;
    let secondNumber: number;
    let answer: number = 0;
    let operator: string;

    do {
        const input1: string = readline.question('Enter first number:');
        firstNumber = parseFloat(input1);
    } while (isNaN(firstNumber));

    do {
        const input3: string = readline.question('Enter operator(+, -, *, /):');
        operator = input3;
    } while (operator !== "+" && operator !== "-" && operator !== "/" && operator !== "*");

    do {
        const input2: string = readline.question('Enter second number:');
        secondNumber = parseFloat(input2);
    } while (isNaN(secondNumber));


    if (operator === "+") {
        answer = firstNumber + secondNumber;    
    } 
    else if (operator === "-") {
        answer = firstNumber - secondNumber;     
    } 
    else if (operator === "/") {
        answer = firstNumber / secondNumber;     
    } 
    else if (operator === "*") {
        answer = firstNumber * secondNumber;    
    } 
    else {
        console.log("You have made an error")
    }

    console.log(`Answer: ${answer}`);

    return answer;
}
addNumbers();

// next change:
// add a loop that allows calc to continue running after first answer, with an exit condition


// test
// test