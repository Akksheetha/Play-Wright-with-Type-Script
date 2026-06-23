import readlineSync from "readline-sync";
export {}
let income = readlineSync.questionInt("Enter income: ");
let tax = 0;
if (income <= 250000) {
    console.log("You are exempted from tax");
}
else if (income <= 500000) {
    tax = (income - 250000) * 10 / 100;
    console.log("Tax amount is", tax);
}
else if (income <= 1200000) {
    tax = (250000 * 10 / 100) +
          ((income - 500000) * 20 / 100);
    console.log("Tax amount is", tax);
}
else {
    tax = (250000 * 10 / 100) +
          (700000 * 20 / 100) +
          ((income - 1200000) * 30 / 100);
    console.log("Tax amount is", tax);
}