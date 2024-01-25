import { MainDishBuilder } from "../../../creational/builder/example1/classes/main-dish-builder"

export class BuilderFacade{
    // essa é a fachada para a pasta creational/builder/example1/index.ts
    private mainDishBuilder = new MainDishBuilder()
    
    makeMeal1(): void{
        this.mainDishBuilder.makeMeal().makeDessert()
        console.log(this.mainDishBuilder.getMeal())
        this.mainDishBuilder.reset()
        this.mainDishBuilder.makeMeal()
        console.log(this.mainDishBuilder.getPrice())

    }

    makeMeal2(): void{
        this.mainDishBuilder.reset()
        const meal2 = this.mainDishBuilder.makeBeverage().getMeal()
        console.log(meal2);
    }
}