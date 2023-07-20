import Handler from "./Handler";

export default class BillHandler implements Handler{

    //o next é o encadeamento
    constructor(readonly next: Handler | undefined, readonly type: number){

    }

    handle(bills: { type: number; qtd: number; }[], amount: number): void {
        const quantity = Math.floor(amount / this.type);
        bills.push({ type: this.type, qtd: quantity })
        const remaining = amount% this.type
        if(this.next) this.next.handle(bills, remaining)
        if(remaining > 0 ) throw new Error("Not enought bills for this withdraw");
    }
}