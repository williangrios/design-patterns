abstract class Car{
    constructor(public model: string, public productionYear: number){

    }
    abstract displayCarInfo(): void
}

class Sedan extends Car {
    public displayCarInfo(): void {
        console.log(`This is a Sedan. Model: ${this.model}. Production year ${this.productionYear}`)
    }
}

class SUV extends Car {
    public displayCarInfo(): void {
        console.log(`This is a SUV. Model: ${this.model}. Production year ${this.productionYear}`)
    }
}

class HatchBack extends Car {
    public displayCarInfo(): void {
        console.log(`This is a HatchBack. Model: ${this.model}. Production year ${this.productionYear}`)
    }
}

class CarFactory{
    public createCar(type: 'Sedan' | 'SUV' | 'HatchBack', model: string, productionYear: number): Car {
        switch(type){
            case "Sedan":
                return new Sedan(model, productionYear)
                case "SUV":
                return new SUV(model, productionYear)
                case "HatchBack":
                return new HatchBack(model, productionYear)
                default:
                    throw new Error('Invalid car type')
        }
    }
}

const carFactory = new CarFactory()
const sedan = carFactory.createCar('Sedan', 'Corolla', 2020)
sedan.displayCarInfo()
const suv = carFactory.createCar('SUV', 'Ecosport', 2017)
suv.displayCarInfo()
const hatchBack = carFactory.createCar('HatchBack', 'Fiesta', 2021)
hatchBack.displayCarInfo()