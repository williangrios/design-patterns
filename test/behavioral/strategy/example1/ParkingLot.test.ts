// Definir uma família de algoritmos, encapsular cada uma delas e torna-las intercambiáveis
// o strategy permite que o algoritmo varie independente dos clientes que utilizem

import AirportPriceCalculator from "../../../../src/behavioral/strategy/example1/AirportPriceCalculator";
import BeachPriceCalculator from "../../../../src/behavioral/strategy/example1/BeachPriceCalculator";
import ParkingLot from "../../../../src/behavioral/strategy/example1/ParkingLot";
import ShoppingPriceCalculator from "../../../../src/behavioral/strategy/example1/ShoppingPriceCalculator";


// test('deve criar um estacionamento vazio', function (){
//     const parkingLot = new ParkingLot("shopping", 500)
//     expect(parkingLot.getEmptySpaces()).toBe(500);
// })

// test('deve entrar um carro', function (){
//     const parkingLot = new ParkingLot("shopping",500)
//     parkingLot.checkIn('aaa-0000', new Date('2022-01-01T10:00:00'))
//     expect(parkingLot.getEmptySpaces()).toBe(499);
// })

// test('deve sair um carro', function (){
//     const parkingLot = new ParkingLot("shopping", 500)
//     parkingLot.checkIn('aaa-0000', new Date('2022-01-01T10:00:00'))
//     const price = parkingLot.checkOut('aaa-0000', new Date('2022-01-01T50:00:00'))
//     expect(parkingLot.getEmptySpaces()).toBe(500);
// })

test('deve calcular o valor a ser pago na praia, 20 reais por o dia inteiro', function (){
    const parkingLot = new ParkingLot(500, new BeachPriceCalculator())
    parkingLot.checkIn('aaa-0000', new Date('2022-01-01T10:00:00'))
    const price = parkingLot.checkOut('aaa-0000', new Date('2022-01-01T20:00:00'))
    expect(price).toBe(20);
})

test('deve calcular o valor a ser pago no shopping, 10 reais por hora, o carro permaneceu 5 horas', function (){
    const parkingLot = new ParkingLot(500, new ShoppingPriceCalculator())
    parkingLot.checkIn('aaa-0000', new Date('2022-01-01T10:00:00'))
    const price = parkingLot.checkOut('aaa-0000', new Date('2022-01-01T15:00:00'))
    expect(price).toBe(50);
})

test('deve calcular o valor a ser pago no aeroporto, 3 horas por 20, depois 10 reais por hora, o carro permaneceu 3 horas', function (){
    const parkingLot = new ParkingLot(500, new AirportPriceCalculator())
    parkingLot.checkIn('aaa-0000', new Date('2022-01-01T10:00:00'))
    const price = parkingLot.checkOut('aaa-0000', new Date('2022-01-01T15:00:00'))
    expect(price).toBe(40);
})