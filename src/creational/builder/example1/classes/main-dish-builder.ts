import { MealBuilderProtocol } from './../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';
export class MainDishBuilder implements MealBuilderProtocol{
    private _meal: MealBox = new MealBox()
    reset(): this {
        this._meal = new MealBox()
        return this
    }
    makeMeal(): this {
        const rice = new Rice('arroz',12)
        const beans = new Beans('feijao',8)
        const meat = new Meat('carne',18)
        this._meal.add(rice, beans, meat)
        return this //method chaining
    }
    makeBeverage(): this {
        const beverage = new Beverage('coca', 6)
        this._meal.add(beverage)
        return this
    }
    makeDessert(): this {
        const dessert = new Dessert('sobremesa', 10)
        this._meal.add(dessert)
        return this
    }
    getMeal(): MealBox{
        return this._meal
    }
    getPrice(): number{
        return this._meal.getPrice()
    }
}