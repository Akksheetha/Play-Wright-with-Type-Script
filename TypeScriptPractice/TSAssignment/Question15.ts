let Quantities1:string="10,20,5"
let prices1:string="2.5,1.99,10.0"
var total=0
let allQuantites1=Quantities1.split(",")
let allPrices1=prices1.split(",")
for (let i = 0; i <allQuantites1.length; i++) {
    total += Number(allQuantites1[i]) * Number(allPrices1[i]);
}
console.log(total)