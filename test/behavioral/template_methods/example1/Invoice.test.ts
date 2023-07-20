import Beer from "../../../../src/behavioral/template_method/example1/Beer";
import Invoice from "../../../../src/behavioral/template_method/example1/Invoice";
import Water from "../../../../src/behavioral/template_method/example1/Water";
import Whisky from "../../../../src/behavioral/template_method/example1/Whisky";


test('deve criar uma nota fiscal', function(){
    const invoice = new Invoice();
    invoice.addItem(new Beer("heinekken", 10)) //10% - 1
    invoice.addItem(new Whisky("Jack daniels", 100)) //20% - 20
    invoice.addItem(new Water( "minas da prata", 5)) //0% - 
    const taxes = invoice.getTaxes();
    expect(taxes).toBe(21);
})