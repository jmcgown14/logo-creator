const Shape = require("./shape");

class Square extends Shape {
    
    render() {
        return `<rect width="120" height="120" x="90" y="40" fill="${this.color}"/>`;
    }
}

module.exports = Square;