import readlineSync from 'readline-sync';
export{}

let num1:number=readlineSync.questionInt()
if(num1>0 && num1<=12){
if(num1==3||num1==4||num1==5){
    console.log("Spring")
}else if(num1==6||num1==7||num1==8){
    console.log("summer")
}else if(num1==9||num1==10||num1==11){
    console.log("Autum")
}else{
    console.log("winter")
}
}else{
    console.log("invalid input")
}