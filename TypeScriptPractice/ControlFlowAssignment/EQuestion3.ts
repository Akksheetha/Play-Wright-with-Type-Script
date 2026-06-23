import readlineSync from 'readline-sync';
export{}

let num1:number=readlineSync.questionInt()
if(num1<0){
    console.log("Negative number")
}else{
    console.log("Positive number")
}