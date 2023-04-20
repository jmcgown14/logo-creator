class SVG {
    constructor() {
        this.text = ''
        this.shape = ''
    }
    setText(text, textColor){

        this.text = `<text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="2.5rem" letter-spacing="2" dy=".2em" font-family="Arial">${text}</text>`
    }
    setShape(shape) {
        this.shape = shape.render()
    }

    render(){
        return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`
    }
}

module.exports = SVG