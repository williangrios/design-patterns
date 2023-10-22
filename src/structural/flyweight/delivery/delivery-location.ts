import { DeliveryFlyWeight } from "./delivery-flyweight";
import { DeliveryLocationData } from "./delivery-types";

export class DeliveryLocation implements DeliveryFlyWeight{
    constructor(private readonly intrinsecState: DeliveryLocationData){

    }

    deliver(name: string, number: string): void {
        console.log('Delivery to %s ', name)
        console.log('At ', this.intrinsecState.street, this.intrinsecState.city)
        console.log('Number ', number)
        console.log('###')
    }
}