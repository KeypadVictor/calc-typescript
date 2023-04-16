"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
function main() {
    var userString1 = readline.question('Enter first number:');
    //var userString2: string = readline.question('Enter operation:')
    var userString3 = readline.question('Enter second number:');
    var output = userString1 + userString3;
    console.log(output);
    return output; //[userString1, userString2, userString3]
}
exports["default"] = main;
main();
//parseFloat(userString1)
