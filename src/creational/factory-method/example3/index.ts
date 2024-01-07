abstract class PaymentProcessor{
    constructor(public amount: number){

    }
    abstract processPayment(): void
}

class PayPalProcessor extends PaymentProcessor{
    public processPayment(): void {
        console.log('Payment made with PayPal', this.amount)
    }
}

class StripeProcessor extends PaymentProcessor{
    public processPayment(): void {
        console.log('Payment made with Stripe', this.amount)
    }
}

class BankTransferProcessor extends PaymentProcessor{
    public processPayment(): void {
        console.log('Payment made with Bank Transfer', this.amount)
    }
}

class PaymentProcessorFactory{
    public createPaymentProcessor(type: 'PayPal' | 'Stripe' | 'BankTransfer', amount: number): PaymentProcessor {
        switch(type){
            case "PayPal":
                return new PayPalProcessor(amount)
                case "Stripe":
                return new StripeProcessor(amount)
                case "BankTransfer":
                return new BankTransferProcessor(amount)
                default:
                    throw new Error('Invalid payment processor type')
        }
    }
}

const paymentProcessorFactory = new PaymentProcessorFactory()

const payPalProcessor = paymentProcessorFactory.createPaymentProcessor('PayPal', 100)
payPalProcessor.processPayment()
const stripeProcessor = paymentProcessorFactory.createPaymentProcessor('Stripe', 100)
stripeProcessor.processPayment()
const bankTransferProcessor = paymentProcessorFactory.createPaymentProcessor('BankTransfer', 100)
bankTransferProcessor.processPayment()