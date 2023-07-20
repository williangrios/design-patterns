//delegando para as subclasses o que elas querem fazer
export default abstract class Item{
    constructor(readonly category: string, readonly description: string, readonly price: number){

    }
    
}