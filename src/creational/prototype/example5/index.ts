interface ShapeProperties{
    color: string
    x: number
    y: number
}

abstract class Shape {
    constructor(public properties: ShapeProperties){

    }
    abstract clone(): Shape
}

class Rectangle extends Shape{
    constructor(properties: ShapeProperties, public width: number, public height: number){
        super(properties)
    }

    clone(): Shape {
        const clonedProperties: ShapeProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y
        }
        return new Rectangle(clonedProperties, this.width, this.height)
    }   
}

class Circle extends Shape{
    constructor(properties: ShapeProperties, public radius: number){
        super(properties)
    }

    clone(): Shape {
        const clonedProperties: ShapeProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y
        }
        return new Circle(clonedProperties, this.radius)
    }   
}

const redRectangle: Shape = new Rectangle({color: 'red', x: 20, y: 30}, 22, 45)

const anotherRectangle: Shape = redRectangle.clone()
anotherRectangle.properties.color = 'blue'

console.log(redRectangle) // color = red
console.log(anotherRectangle) // color = blue