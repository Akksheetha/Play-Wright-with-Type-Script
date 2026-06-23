import promptSync from "prompt-sync";

const prompt = promptSync();
let radius: number = Number(prompt("Enter radius: "));
const pi: number = 3.14;
let area: number = pi * radius * radius;
console.log(area);