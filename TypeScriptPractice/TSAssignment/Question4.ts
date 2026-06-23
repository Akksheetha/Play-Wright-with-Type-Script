import promptSync from "prompt-sync";
const prompt = promptSync();
let name: string = prompt("Enter your name: ");
console.log("Hello, "+name+"!");