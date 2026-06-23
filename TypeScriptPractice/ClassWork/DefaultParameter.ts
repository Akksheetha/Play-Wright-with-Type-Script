function DisplayName(name:string,greeting:string="Hello",):string{
    return greeting+''+name+'!';
}
console.log(DisplayName("Karthik"));
console.log(DisplayName("Karthik",'Hi'));
console.log(DisplayName("Sachin"));