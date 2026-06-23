//without parameters
let Print = ()=>console.log("Hello");
console.log(Print());

//with parameters
let sum1 = (x:number,y:number):number => {
    return x+y;
}
console.log(sum1(10,20));