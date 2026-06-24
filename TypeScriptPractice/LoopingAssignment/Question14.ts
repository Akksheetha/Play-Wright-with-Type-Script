export {}
const x = 220;
const y = 284;
function sumProperDivisors(n: number) {
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) {
                sum += n / i;
            }
        }
    }
    return sum;
}
if (x <= 1 || y <= 1) {
    console.log(false);
} else {
    const sumX = sumProperDivisors(x);
    const sumY = sumProperDivisors(y);
    console.log(sumX === y && sumY === x);
}