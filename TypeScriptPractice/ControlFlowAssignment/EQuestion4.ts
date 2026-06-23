import readlineSync from 'readline-sync';
export{}

let num1:number=readlineSync.questionInt()
if(num1>=4){
    console.log("Eligible for admission")
}else{
    console.log("Not eligible")
}