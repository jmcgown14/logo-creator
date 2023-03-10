const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");
// const {Circle,Triangle,Square} = require("./shapes")

const createShape = (answers) => {
    switch (answers.shapes) {
        case 'circle':
            const createCircle = new Circle(answers);
            return createCircle;
            break;
        case 'triangle':
            const createTriangle = new Triangle(answers);
            return createTriangle;
            break;
        case 'square':
            const createSquare = new Square(answers);
            return createSquare;
            break;
        default:
            return "Error";
            break;
    }
}

module.exports = { createShape };