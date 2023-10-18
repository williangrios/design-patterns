import { ItemProtocol } from "./ItemProtocol";

export class Ticket implements ItemProtocol{
    private name = 'Ticket'
    private price = 50
    getPrice(): number {
        return this.price
    }
    getName(): string {
        return this.name
    }
}