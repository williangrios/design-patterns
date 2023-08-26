import { CarFactory } from "./factories/car-factory";
import { randomCarAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";

// agora só conhece a factory, não conhece mais a classe concreta
// const carFactory = new CarFactory()
// const fusca = carFactory.getVehicle('Fusca')
// fusca.pickUp('Willian')
// fusca.stop()

// ------------

const carFactory = new CarFactory()
const customerNames = ['Ana', 'Joana', 'Helena', 'João']

for (let i = 0; i < 10 ; i ++){
    const vehicle = randomCarAlgorithm()
    console.log(vehicle)
    const name = customerNames[randomNumbers(customerNames.length)]
    vehicle.pickUp(name)
    vehicle.stop()
    console.log('---------');
    const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`)
    newCar.stop()
}