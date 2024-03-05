//This class is the parent class "shape"
class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    
    render() {
        return "No shape to render";
    }
}

// Since shape is the parent class, circle goes under parent as a child class
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    render() {
        return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />`;
    }
}

// Square class will be another child class
class Square extends Shape {
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        return `<rect x="25" y="25" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

// Triangle class the final chuld class
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="50,5 90,90 10,90" fill="${this.color}" />`;
    }
}

// Example usage
const circle = new Circle(30, "blue");
console.log(circle.render());

const square = new Square(40, "red");
console.log(square.render());

const triangle = new Triangle("green");
console.log(triangle.render());
  
 