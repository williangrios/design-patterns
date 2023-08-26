import { Vehicle } from "../vehicle/vehicle";

export abstract class VehicleFactory{
    // as subclasses vão decidir o que criar, mas poderia ser implementado aqui também
    abstract getVehicle(vehicleName: string): Vehicle
    pickUp(customerName: string, vehicleName: string): Vehicle{
        const car = this.getVehicle(vehicleName)
        car.pickUp(customerName)
        return car
    }
}