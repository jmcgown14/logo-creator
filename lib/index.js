const fs = require("fs");
const inquirer = require("inquirer");
const color = require("color")
// const generateSVG = require()

// class LogoPrompt {
//     constructor() {
//         this.logoletters = null;
//         this.shapes = null;
//         this.textColor = null;
//         this.shapeColor = null;
//     }
// }

// user prompts for custom logo
inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoLetters',
            message: 'Please enter up to 3 characters for you logo',
            // Validate maybe with a return for length of answer?
            // test parameter for this and how to do that?
        },
        {
            type: 'list',
            name: 'shapes',
            message: 'Please choose a shape for your logo.',
            choices: ["circle", "triangle", "square"],
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Choose the color of your logo text by typing in  your color.',
            // another Validate with return?
            // validate: (input) => {
            //     const color= Color(input)
            //     return =???
            // }
            // Need an NPM for color and how do you pull from it?
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Choose the color of your logo shape by typing in your color.',
            // another Validate with return?
            // validate: (input) => {
            //     const color= Color(input)
            //     return =???
            // }
            // Need an NPM for color and how do you pull from it?
        },

    ])

// What function do I need to do generate te SVG file?



//     ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
// ```