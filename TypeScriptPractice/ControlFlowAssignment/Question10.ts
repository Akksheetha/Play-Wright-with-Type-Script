import readlineSync from 'readline-sync';
export{}

let quantity:number=readlineSync.questionInt()
let totalPrice=0
if(quantity<10){
    totalPrice+=quantity*12
}else if(quantity>=10 && quantity<=100){
    totalPrice+=quantity*10
}else{
    totalPrice+=quantity*7
}