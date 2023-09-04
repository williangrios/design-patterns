import { ProductComposite, ProductLeaf } from "./product-composite";

const tshirt = new ProductLeaf('Camiseta', 40)
const short = new ProductLeaf('Bermuda', 50)
const hat = new ProductLeaf('Chapéu', 80)
const productBox = new ProductComposite()
productBox.add(tshirt, short, hat)
console.log(productBox)

const shoes = new ProductLeaf('Sapatos', 120)
const sockets = new ProductLeaf('Meias', 12)
const anotherProductBox = new ProductComposite()
anotherProductBox.add(shoes, sockets)
console.log(anotherProductBox)

productBox.add(anotherProductBox)
console.log(productBox);
console.log(productBox.getPrice())

