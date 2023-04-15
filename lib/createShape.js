const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

const createShape = (answers) => {

    let shape;
    switch (answers.shapes) {
        case 'circle':
            shape = new Circle()
            break;
        case 'triangle':
            shape = new Triangle()
            break;
        case 'square':
            shape = new Square()
            break;
    }
    shape.setColor(answers.shapeColor)
    return shape
}

module.exports = { createShape };