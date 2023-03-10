// constructor({ logoLetters, shape, textColor, shapeColor }) {
//     this.shape = shape;
//     this.logoLetters = logoLetters;
//     this.textColor = textColor;
//     this.shapeColor = shapeColor;
// }

// render() {
//     throw new Error(`TEMP`);
// }

class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/>`;
    }
}
class Square extends Shape {
    render() {
        return `<rect width="100" height="100" rx="15" fill="${this.shapeColor}"/>`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="100 0, 0, 0 50, 100" fill="${this.shapeColor}"/>`
    }
}

module.exports = Shape;