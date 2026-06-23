let Quantities:string="10,20,5"
let prices:string="2.5,1.99,10.0"
var total=0
let allQuantites=Quantities.split(",")
let allPrices=prices.split(",")
for (let i = 0; i <allQuantites.length; i++) {
    total += Number(allQuantites[i]) * Number(allPrices[i]);
}
console.log(total)