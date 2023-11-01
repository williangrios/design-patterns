import { CustomerBudget } from "./customer-budget";

export abstract class BaseBudgetHandlesr{
    protected nextHandler: BaseBudgetHandlesr | null = null

    setNextHandler(handler: BaseBudgetHandlesr): BaseBudgetHandlesr{
        this.nextHandler = handler
        return handler
    }
    
    handle(budget: CustomerBudget): CustomerBudget {
        if (this.nextHandler) return this.nextHandler.handle(budget)
        return budget
    }
}