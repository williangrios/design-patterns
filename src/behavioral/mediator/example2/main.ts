import { Buyer } from "./buyer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

const mediator = new Mediator()
const seller1 = new Seller()
seller1.addProduct({id:'1', name: 'Camiseta', price:23})
seller1.addProduct({id:'2', name: 'Bermuda', price:43})
seller1.addProduct({id:'3', name: 'Meias', price:13})

const seller2 = new Seller()
seller2.addProduct({id:'4', name: 'Oculos', price:80})
seller2.addProduct({id:'5', name: 'Celular', price:4003})
seller2.addProduct({id:'6', name: 'Bomé', price:55})

mediator.addSellers(seller1, seller2)

mediator.showProducts()

const buyer = new Buyer(mediator)
buyer.viewProducts()
buyer.buy('2')
buyer.buy('3')