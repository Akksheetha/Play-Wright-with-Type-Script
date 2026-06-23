import readlineSync from 'readline-sync';
export{}

let num1:number=readlineSync.questionInt()
let num2:number=readlineSync.questionInt()
if(num1==num2){
    console.log("It is a square")
}else{
    console.log("not a square")
}