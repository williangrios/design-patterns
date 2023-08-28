import { IndividualCustomer } from "../customer/IndividualCustomer"
import { Customer } from "../customer/customer"
import { IndividualCar } from "../vehicle/IndividualCar"
import { Vehicle } from "../vehicle/vehicle"

export class IndividualCreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer {
        return new IndividualCustomer(customerName)
    }
    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = new IndividualCustomer(customerName)
        return new IndividualCar(vehicleName, customer)
    }
}