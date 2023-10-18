import { ItemProtocol } from "./ItemProtocol";

export class ItemDecorator implements ItemProtocol{
    
    constructor(protected item: ItemProtocol){

    }
    getPrice(): number {
        return this.item.getPrice()
    }
    getName(): string {
        return this.item.getName()
    }
}