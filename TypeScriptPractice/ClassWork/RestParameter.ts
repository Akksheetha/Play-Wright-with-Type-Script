function sum(a:number,...b:number[]):number{
    let result = a;
    for(var i = 0;i<b.length;i++){
        result+=b[i];
    }
    return result;
}
let result1 = sum(3,5);
console.log(result1);
let result2 = sum(3,5,7,9);
console.log(result2);