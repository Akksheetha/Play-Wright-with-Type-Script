import PromptSync from "prompt-sync";

const prompt = PromptSync();
const num1 = Number(prompt("Enter a number : "));
const num2 = Number(prompt("Enter a number : "));
console.log("Solution is ",num1+num2);