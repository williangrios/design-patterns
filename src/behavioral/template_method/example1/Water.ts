import Item from "./Item";

export default class Water extends Item{

    constructor(description: string, price: number){
        super("water", description, price);
    }

    // não precisa ter pois não implementa, esta herdando de Item
    // getTax(): number {
    //     throw new Error ("Not implemented");
    // }
}