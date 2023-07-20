import Atm from "../../../src/behavioral/chain_of_responsability/example1/Atm"
import BillHandler from "../../../src/behavioral/chain_of_responsability/example1/BillHandler"

test("deve sacar dinheiro no caixa eletronico", function(){
    const handler1 = new BillHandler(undefined, 1);
    const handler5 = new BillHandler(handler1, 5);
    const handler10 = new BillHandler(handler5, 10);
    const handler20 = new BillHandler(handler10, 20);
    const handler50 = new BillHandler(handler20, 50);
    const handler100 = new BillHandler(handler50, 100);
    const atm = new Atm(handler100)
    const bills = atm.withdraw(978)
    expect(bills).toStrictEqual([
        {type: 100, qtd: 9},
        {type: 50, qtd: 1},
        {type: 20, qtd: 1},
        {type: 10, qtd: 0},
        {type: 5, qtd: 1},
        {type: 1, qtd: 3},
    ])
})