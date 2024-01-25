import { log } from "console"

class Grinder{
    public grindBeans(): void{
        console.log('Grinding beans...')
    }
}

class Boiler{
    public boilWater(): void{
        console.log('Boiling water...')
    }
}
class Brewer{
    public brewCoffee(): void{
        console.log('Brewing coffee...')
    }
}


class CoffeeMakerFacade{
    constructor(private grinder: Grinder, private boiler: Boiler, private brewer: Brewer){
        
    }

    public makeCoffee(){
        this.grinder.grindBeans()
        this.boiler.boilWater()
        this.brewer.brewCoffee()
        console.log('Coffee is ready')
    }
}

//client code
let grinder = new Grinder()
let boiler = new Boiler()
let brewer = new Brewer()

let coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer)
coffeeMaker.makeCoffee()