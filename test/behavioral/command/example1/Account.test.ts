import Account from "../../../../src/behavioral/command/example1/Account"
import CreditCommand from "../../../../src/behavioral/command/example1/CreditCommand"
import DebitCommand from "../../../../src/behavioral/command/example1/DebitCommand"

test("Deve criar uma conta", function(){
    const account = new Account()
    const balance = account.getBalance()
    expect(balance).toBe(0)
})

test ("deve creditar uma conta", function (){
    const account = new Account()
    account.credit(100)
    const balance = account.getBalance()
    expect(balance).toBe(100)
})

test ("deve debitar uma conta", function (){
    const account = new Account()
    account.credit(100)
    account.debit(50)
    const balance = account.getBalance()
    expect(balance).toBe(50)
})

test ("deve creditar uma conta usando um comando", function (){
    const account = new Account()

    //eu encapsulo a requisição no objeto
    const creditCommand = new CreditCommand(account, 100);
    //esta execução poderia ser posterior, sem problemas
    creditCommand.execute()
    const balance = account.getBalance()
    expect(balance).toBe(100)
})


test ("deve debitar uma conta usando um comando", function (){
    const account = new Account()

    //eu encapsulo a requisição no objeto
    const creditCommand = new CreditCommand(account, 100);
    creditCommand.execute()

    const debitCommand = new DebitCommand(account, 50);
    debitCommand.execute()

    const balance = account.getBalance()
    expect(balance).toBe(50)
})