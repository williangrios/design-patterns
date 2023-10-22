import { DeliveryFactory } from "./delivery-factory"
import { deliveryContext } from "./delivery-context"

const factory = new DeliveryFactory()
deliveryContext(factory, 'Willian', '950', 'Av. Brasil', 'Arcos')
deliveryContext(factory, 'Jhon', '950', 'Av. Brasil', 'Arcos')
deliveryContext(factory, 'Paul', '50', 'Av. Brasil', 'Arcos')
deliveryContext(factory, 'Mike', '3400', 'Av. Magalhães', 'Belo Horizonte')
console.log('--------------')
console.log(factory.getLocations())

