import readlineSync from 'readline-sync';
export{}

let input=readlineSync.question()
let code =Number(input.split(",")[0])
let sum=0
let product=1

    if(code==1){
        sum+=Number(input.split(",")[1])+Number(input.split(",")[2])
        console.log(sum)
    }else if(code==2){
        product*=Number(input.split(",")[1])*Number(input.split(",")[2])
        console.log(product)
    }
    else{
    console.log((input.split(",")[1])+(input.split(",")[2]))

}