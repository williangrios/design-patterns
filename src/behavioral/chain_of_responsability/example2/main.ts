import { CEOBudgetHandler } from "./ceo-budget-handler";
import { CustomerBudget } from "./customer-budget";
import { DirectorBudgetHandler } from "./director-budget-handler";
import { ManagerBudgetHandler } from "./manager-budget-handler";
import { SellerBudgetHandler } from "./seller-budget-handler";

const customerBudget = new CustomerBudget(500)
const seller = new SellerBudgetHandler()
seller
    .setNextHandler(new ManagerBudgetHandler())
    .setNextHandler(new DirectorBudgetHandler())
    .setNextHandler(new CEOBudgetHandler())
seller.handle(customerBudget)


const customerBudget1 = new CustomerBudget(1005)
const seller1 = new SellerBudgetHandler()
seller1
    .setNextHandler(new ManagerBudgetHandler())
    .setNextHandler(new DirectorBudgetHandler())
    .setNextHandler(new CEOBudgetHandler())
seller.handle(customerBudget1)


const customerBudget2 = new CustomerBudget(1000000)
const seller2 = new SellerBudgetHandler()
seller2
    .setNextHandler(new ManagerBudgetHandler())
    .setNextHandler(new DirectorBudgetHandler())
    .setNextHandler(new CEOBudgetHandler())
seller.handle(customerBudget2)