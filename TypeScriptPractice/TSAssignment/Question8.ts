import promptSync from "prompt-sync";

const prompt = promptSync();
let inputRating: number = Number(prompt("Average Rating: "));
let roundedRating: number = Math.round(inputRating);
console.log("Rounded Rating: " + roundedRating);