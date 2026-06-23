import promptSync from "prompt-sync";
const prompt = promptSync();
let weight: number = Number(prompt("Weight: "));
let height: number = Number(prompt("Height: "));
let bmi: number = weight / (height * height);
console.log("BMI: "+bmi.toFixed(2));