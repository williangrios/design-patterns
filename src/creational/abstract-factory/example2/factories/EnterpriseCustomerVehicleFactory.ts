import { EnterpriseCar } from './../vehicle/EnterpriseCar';
import { EnterpriseCustomer } from "../customer/EnterpriseCustomer";
import { Customer } from "../customer/customer";
import { Vehicle } from "../vehicle/vehicle";

export class EnterpriseCreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer {
        return new EnterpriseCustomer(customerName)
    }
    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = new EnterpriseCustomer(customerName)
        return new EnterpriseCar(vehicleName, customer)
    }
}