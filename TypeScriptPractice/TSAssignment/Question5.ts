import promptSync from "prompt-sync";

const prompt = promptSync();
let birth: number = Number(prompt("Enter your birth year: "));
let current: number = new Date().getFullYear();
let age: number = current - birth;
console.log("Your age is: "+age+ "years");
