import PriceCalculator from "./PriceCalculator";

export default class ParkingLot{
    parkedCars: {
        plate: string,
        checkInDate: Date
    }[]
    constructor(readonly capacity: number, readonly priceCalculater: PriceCalculator){
        this.parkedCars = [];
    }

    getEmptySpaces(){
        return this.capacity - this.parkedCars.length;
    }

    checkIn(plate: string, checkInDate: Date){
        this.parkedCars.push({plate, checkInDate})
    }

    checkOut(plate: string, checkOutDate: Date){
        const parkedCar = this.parkedCars.find((parkedCar) => parkedCar.plate === plate )
        if (!parkedCar)  throw new Error ("Car not found")
        this.parkedCars.splice(this.parkedCars.indexOf(parkedCar), 1);
        const diff = (checkOutDate.getTime() - parkedCar.checkInDate.getTime()) / (1000 * 60*60)
        return this.priceCalculater.calculate(diff)
    }
}