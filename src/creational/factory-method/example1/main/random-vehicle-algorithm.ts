import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

export function randomCarAlgorithm(): Vehicle {
    const carFactory = new CarFactory()
    const car1 = carFactory.getVehicle('Fusca')
    const car2 = carFactory.getVehicle('Celta')
    const bicycleFactory = new BicycleFactory()
    const bicycle1 = carFactory.getVehicle('Monark')
    const cars = [car1, car2, bicycle1]
    return cars[randomNumbers(cars.length)]
}