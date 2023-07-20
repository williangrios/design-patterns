import Account from "./Account";
import Command from "./Command";

export default class DebitCommand implements Command{
    
    constructor(readonly account: Account, readonly amuont: number){
        
    }

    execute(): void {
        this.account.debit(this.amuont);
    }
}