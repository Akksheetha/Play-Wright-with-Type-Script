import readlineSync from 'readline-sync';
export{}

let num1:number=readlineSync.questionInt()
let total=0
if(num1%2==0){
    total+=num1/2
}else{
    total+=num1*3+1
}
console.log(total)