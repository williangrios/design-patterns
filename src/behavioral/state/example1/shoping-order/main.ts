import { ShoppingOrder } from "./shopping-order";

const order = new ShoppingOrder() // pending
order.approvePayment() // approved
order.waitPayment() // pending
order.shipOrder() // Não posso enviar o pedido com pagamento pendente
order.rejectPayment() // daqui, o estado não é mais alterado
order.approvePayment()
order.waitPayment()
order.approvePayment()
order.shipOrder()