class Car {
    constructor(color,weight,model){
        this.color = color;
        this.weight = weight;
        this.model = model
    }
     details()  {
        console.log("Color is :",this.color," and model from the year :",this.model)
    };
    weightofCar() {
        console.log("weight: ",this.weight)
    };
}

let ferrari = new Car("red",300,"2020")
ferrari.details();
ferrari.weightofCar();

class f1 extends Car{
    constructor(color,weight,model,speed){
        super(color,weight,model);
        this.speed = speed;
        this._speed = speed;
    }

    extreme(){
        console.log("too fast: ",this.speed)
    }

    get speed(){
        return this._speed;
    }

    set speed(x){
        this._speed = x;
    }
}

let Mercedes = new f1("gray",150,2021,"350mph");
Mercedes.details();
Mercedes.extreme();
Mercedes.weightofCar();
console.log(Mercedes.speed);
Mercedes.speed = "400mph";
console.log(Mercedes.speed);