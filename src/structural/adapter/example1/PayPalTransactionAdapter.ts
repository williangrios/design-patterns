import PayPalTransaction from "./PayPalTransaction";
import StripeTransaction from "./StripeTransaction";
import Transaction from "./Transaction";

//se converte para o contrato
export default class PayPalTransactionAdapter implements Transaction{
    trackNumber: string;
    amount: number;
    status: string;

    constructor(paypalTransaction: PayPalTransaction ){
        this.trackNumber = `${paypalTransaction.id}`;
        this.amount = paypalTransaction.amount;
        this.status = this.convertStatus( paypalTransaction.status);
    }

    convertStatus(status: string){
        const map: any ={
            "p": "waiting_payment",
            "c": "cancelled",
            "s": "paid",
        }
        return map[status]
    }

}