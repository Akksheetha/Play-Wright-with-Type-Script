import readlineSync from 'readline-sync'
export {}
let date = readlineSync.question("Enter month,year: ")
let month=Number(date.split(",")[0])
let year=Number(date.split(",")[1])
let monthName=""
let days=0
switch(month){
    case 1:
        monthName="January"
        days=31
        break
    case 2:
        monthName="February"
        if ((year%400==0)||(year%4==0&&year%100!=0)) {
            days=29
        } else {
            days=28
        }
        break
    case 3:
        monthName="March"
        days=31
        break
    case 4:
        monthName="April"
        days=30
        break
    case 5:
        monthName="May"
        days=31
        break
    case 6:
        monthName="June"
        days=30
        break
    case 7:
        monthName="July"
        days=31
        break
    case 8:
        monthName="August"
        days=31
        break
    case 9:
        monthName="September"
        days=30
        break
    case 10:
        monthName="October"
        days=31
        break
    case 11:
        monthName="November"
        days=30
        break
    case 12:
        monthName="December"
        days=31
        break
    default:
        console.log("Invalid month")
}
if (month>= 1&&month<= 12) {
    console.log(`${monthName} ${year} has ${days} days`)
}