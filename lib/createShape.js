const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

const createShape = (answers) => {
    switch (answers.shape) {
        case 'Circle':
            const createCircle = new Circle(answers);
            return createCircle;
            break;
        case 'Triangle':
            const createTriangle = new Triangle(answers);
            return createTriangle;
            break;
        case 'Square':
            const createSquare = new Square(answers);
            return createSquare;
            break;
        default:
            return "Error";
            break;
    }
}

module.exports = { createShape };