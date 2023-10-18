import { ItemDecorator } from "./ItemDecorator";

export class ItemAccomodationDecorator extends ItemDecorator{
    getPrice(): number {
        return this.item.getPrice() + 200
    }
    getName(): string {
        return this.item.getName() + ' (acomodação)'
    }
}