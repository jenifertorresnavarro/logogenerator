//This allows us to grab input from the user 

const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate logo using the input given
function generateLogo(shape, shapeColor, text, textColor) {
   
    const svgContent = `<svg width="300" height="200" style="background-color:white;">
    <${shape} x="25" y="25" "fill="${shapeColor}" />
    <${shape} points="50,5 90,90 10,90" "fill="${shapeColor}" />
    <${shape} cx="150" cy="100" r="40"fill="${shapeColor}" />
    <text x="63%" y="67%"  text-size="50px" fill="${textColor}" text-anchor="middle">${text}</text>
    
    
    


</svg>`;
    return svgContent;
}

// These are the questions the user will be asked
inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Choose the shape for the logo',
        choices: ['circle', 'rectangle', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Type in a color for the shape of the logo'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter the text for the logo'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Type in a color for the text'
    },
    
]).then(answers => {
    // Generate the SVG logo based on user input
    const svgContent = generateLogo(answers.shape, answers.shapeColor, answers.text, answers.textColor);

    // Save the SVG content to a file named generatedlogo.svg
    fs.writeFileSync('generatedlogo.svg', svgContent);

    console.log('Generated generatedlogo.svg');
});