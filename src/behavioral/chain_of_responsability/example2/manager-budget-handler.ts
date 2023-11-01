import { BaseBudgetHandlesr } from "./base-budget-handler";
import { CustomerBudget } from "./customer-budget";

export class ManagerBudgetHandler extends BaseBudgetHandlesr{
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.total <= 5000 ){
            console.log('O manager tratou o orçamento')
            budget.approved = true
            return budget
        }

        return super.handle(budget)
    }
}