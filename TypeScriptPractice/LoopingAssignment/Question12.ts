export {}
const n = 1234;
const digits = Math.abs(n).toString();
if (digits.length !== 5) {
    console.log('Not a valid number');
} else {
    console.log(digits.split('').reverse().join(''));
}