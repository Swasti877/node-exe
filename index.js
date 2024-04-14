var readline = require('node:readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("What's your name?", function (name) {
    console.log("Hi ".concat(name, "!"));
    rl.close();
});
