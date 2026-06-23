import readlineSync from 'readline-sync';
export{}
let totalPercentage=readlineSync.questionInt()
let actualPercentage=readlineSync.questionInt()
if(actualPercentage>=75){
    console.log("Allowed")
}else{
    if(readlineSync.question("enter the medical certificate")=='y'){
        console.log("allowed")
    }else{
        console.log("not allowed")
    }
}