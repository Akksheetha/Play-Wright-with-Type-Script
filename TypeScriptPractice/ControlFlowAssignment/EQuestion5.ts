import readlineSync from 'readline-sync';
export{}

let num1:number=readlineSync.questionInt()
if(num1>=15000){
    console.log("Out of budget")
}else{
    console.log("Within budget")
}