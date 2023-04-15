const Shape = require("./shape");

class Triangle extends Shape {
    render() {
        return `<polygon points="100,0 0,0 50,100" fill="${this.color}"/>`
    }
}

module.exports = Triangle;