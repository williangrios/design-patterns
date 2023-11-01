import { BaseBudgetHandlesr } from "./base-budget-handler";
import { CustomerBudget } from "./customer-budget";

export class CEOBudgetHandler extends BaseBudgetHandlesr{
    handle(budget: CustomerBudget): CustomerBudget {
        console.log('O CEO trata qualquer o orçamento')
        budget.approved = true
        return budget
    }
}