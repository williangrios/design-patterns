//fornecer uma interface para criação de famílias de objetos relacionados sem especificar suas classes concretas
//ao inves de passarmos objeto de configuração para dentro do view, podemos começar a pensar em familias de objetos
//observar ao principio: Aberto para extensão e fechado para modificação (quando eu preciso aumentar o comportamento não preciso ficar colocando mais ifs)

import DarkWidgetFactory from "../../../../src/creational/abstract-factory/example1/DarkWidgetFactory";
import LightWidgetFactory from "../../../../src/creational/abstract-factory/example1/LightWidgetFactory";
import View from "../../../../src/creational/abstract-factory/example1/View";

test("Deve criar uma interface grafica com tema claro", function(){
    const view = new View(new LightWidgetFactory());
    expect(view.label.color).toBe("black")
    expect(view.button.color).toBe("white")
    expect(view.button.backgroundColor).toBe("blue")
    
})

test("Deve criar uma interface grafica com tema escuro", function(){
    const view = new View( new DarkWidgetFactory());
    expect(view.label.color).toBe("white")
    expect(view.button.color).toBe("white")
    expect(view.button.backgroundColor).toBe("black")
})
