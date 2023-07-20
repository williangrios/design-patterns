import PayPalTransaction from "../../../../src/structural/adapter/example1/PayPalTransaction";
import PayPalTransactionAdapter from "../../../../src/structural/adapter/example1/PayPalTransactionAdapter";
import StripeTransaction from "../../../../src/structural/adapter/example1/StripeTransaction";
import StripeTransactionAdapter from "../../../../src/structural/adapter/example1/StripeTransactionAdapter";

test("deve criar uma transação do stripe", function(){
    const stripeTransaction = new StripeTransaction("o23i23", 1000, 2);
    expect(stripeTransaction.code).toBe("o23i23")
})

test("deve criar uma transação do paypal", function(){
    const stripeTransaction = new PayPalTransaction(234523, 1000, "s");
    expect(stripeTransaction.id).toBe(234523)
})

test("deve criar uma transação do stripe", function(){
    const stripeTransaction = new StripeTransaction("o23i23", 1000, 2);
    const transaction = new StripeTransactionAdapter(stripeTransaction);
    expect(transaction.trackNumber).toBe("o23i23")
    expect(transaction.amount).toBe(1000)
    expect(transaction.status).toBe("cancelled")
})

test("deve criar uma transação do paypal", function(){
    const paypalTransaction = new PayPalTransaction(234523, 1000, "s");
    const transaction = new PayPalTransactionAdapter(paypalTransaction);
    expect(transaction.trackNumber).toBe("234523")
    expect(transaction.amount).toBe(1000)
    expect(transaction.status).toBe("paid")
})