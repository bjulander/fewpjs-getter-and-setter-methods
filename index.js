// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return (Math.PI) * this.diameter
    }

    get area(){
        return (Math.PI) * (this.radius * this.radius)
    }

    set diameter(newDiameter){
        this.radius = newDiameter/ 2
    }

    set circumference(NewCircumference){
        this.diameter = NewCircumference/(Math.PI)
    }

}

let a = new Circle(5)
