function showDetails(id:number,name:string,email_id?:string){
    console.log("ID:",id,"Name:",name);
    if(email_id!=undefined)
        console.log("EmailId:",email_id);
}
showDetails(101,"Virat Kohli");
showDetails(105,"Sachin","sachin@java.com");