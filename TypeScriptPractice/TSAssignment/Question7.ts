import promptSync from "prompt-sync";

const prompt = promptSync();
let score = Number(prompt("Game Score: "));
let sscore = String(score);
console.log("Your score is " + sscore + ".");