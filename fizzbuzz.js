"use strict";
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (num % 3 === 0) {
        return 'Fizz';
    }
    else if (num % 5 === 0) {
        return 'Buzz';
    }
    else {
        return num.toString();
    }
}
for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
}
