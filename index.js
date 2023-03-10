const fs = require("fs");
const inquirer = require("inquirer");
const color = require("color");
const {createShape} = require("./lib/createShape")
const {generateSVG} = require("./lib/generateSVG")

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoLetters',
            message: 'Please enter up to 3 characters for you logo',
            validate: (input) => {
                if(input.length > 0 && input.length <= 3){
                    return true;
                }else{
                    console.log('Please input atleast 3 characters');
                    return false;
            };
        }},
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
            validate: (input) => {
                if(color){
                    return true;
            }else{
                console.log('Pick another color.');
                return false;
            }
        }},
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Choose the color of your logo shape by typing in your color.',
            validate: (input) => {
                if(color){
                    return true;
            }else{
                console.log('Pick another color.');
                return false;
            }
        }},

    ])
    .then((answers) => {
        console.log(answers);
        const logo = createShape(answers);
        
        fs.writeFile(outPath, generateSVG(logo), (err) =>
            err ? console.error(err) : console.log('Successfully generated logo.svg'));
    })
    .catch((err) => console.log(err));
 