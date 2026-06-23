class Car{
    public brand:string;
    private speed:number;
    protected fuel:string;
    constructor(brand:string,speed:number,fuel:string){
        this.brand=brand
        this.speed=speed
        this.fuel=fuel
    }
    public accelerate(){
        this.speed+=10
        console.log("Accelerating speed: ",this.speed)
    }
    private refuel(){
        console.log("Refueling: ",this.fuel)
    }
    protected honk(){
        console.log("Horn")
    }
    public displayInfo(){
        console.log(`Brand: ${this.brand},Speed: ${this.speed},Fuel: ${this.fuel}`)
        this.refuel()
        this.honk()
    }

}
let myCar=new Car("Toyota",100,"Gasoline")
console.log(myCar.brand)
myCar.accelerate()
myCar.displayInfo()