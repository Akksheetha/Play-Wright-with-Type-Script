export {}
const num = 61987;
const digits = Math.abs(num).toString();
if (digits.length !== 5) {
    console.log('Not a valid number');
} else {
    console.log(digits.split('').reverse().join(''));
}