export {}
const prices = [20, 10, 2, 8, 3, 9, 12, 15, 60, 80, 25, 20];
const inRange = prices.filter((p) => p >= 5 && p <= 30);
if (inRange.length === 0) {
    console.log('0 0 0');
} else {
    const min = Math.min(...inRange);
    const max = Math.max(...inRange);
    const avg = Math.floor(inRange.reduce((sum, p) => sum + p, 0) / inRange.length);
    console.log(max, min, avg);
}