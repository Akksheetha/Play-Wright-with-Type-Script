import readlineSync from 'readline-sync';
export{}

let num1:number=readlineSync.questionInt()
if(num1<0){
    console.log("Invalid age")
}else if(num1<15){
    console.log("Cartoons club")
}else if(num1>=15 && num1<=20){
    console.log("Teens club")
}else{
    console.log('Not allowed')
}