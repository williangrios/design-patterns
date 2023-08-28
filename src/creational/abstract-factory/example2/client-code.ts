import { EnterpriseCreateVehicleCustomerFactory } from "./factories/EnterpriseCustomerVehicleFactory";
import { IndividualCreateVehicleCustomerFactory } from "./factories/IndividualCustomerVehicleFactory";

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory()
const enterpriseCustomer =  enterpriseFactory.createCustomer('Willian')
const enterpriseCar = enterpriseFactory.createVehicle('Corolla', enterpriseCustomer.name)


const individualFactory = new IndividualCreateVehicleCustomerFactory()
const individualCar = individualFactory.createVehicle('Fusca', 'João')

enterpriseCar.pickUp()
individualCar.pickUp()
