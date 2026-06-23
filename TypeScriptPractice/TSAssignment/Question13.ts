let totalExpenses:number=3500.0
let expenses:string="350.00,400.00,500"
let allexpenses=expenses.split(",")
for (let i of allexpenses){
    totalExpenses-=Number(i)
}
console.log(totalExpenses)