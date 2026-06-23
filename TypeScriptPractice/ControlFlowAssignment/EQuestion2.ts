import readlineSync from 'readline-sync';
export{}

let num1:number=readlineSync.questionInt()
if(num1%2==0){
    console.log("it is a even number")
}else{
    console.log("It is odd number")
}