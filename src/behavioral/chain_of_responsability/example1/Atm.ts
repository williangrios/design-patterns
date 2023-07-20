import Handler from "./Handler"

export default class Atm{
    constructor(readonly handler: Handler){

    }

    withdraw(amount: number){
        const bills: { type: number, qtd: number}[] =[]
        this.handler.handle(bills, amount)
        return bills
        //código sem o handler
        // let remaining = amount;
        // const bills : {type: number, qtd: number}[] = []
        // const availableBills = [100, 50, 20, 10 , 5, 1]
        // for (const availableBill of availableBills){
        //     const qtd = Math.floor(remaining/availableBill)
        //     bills.push({type: availableBill, qtd: qtd})
        //     remaining %= availableBill;  //operador interessante
        //     if (remaining === 0) break
        // }
        //return bills;
    }
}