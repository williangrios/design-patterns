import { BaseBudgetHandlesr } from "./base-budget-handler";
import { CustomerBudget } from "./customer-budget";

export class DirectorBudgetHandler extends BaseBudgetHandlesr{
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.total <= 50000 ){
            console.log('O diretor tratou o orçamento')
            budget.approved = true
            return budget
        }

        return super.handle(budget)
    }
}