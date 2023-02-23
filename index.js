const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const render = require('./lib/render');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (input) =>
        input.length > 0 && input.length <= 3
          ? true
          : 'Please enter between 1 and 3 characters for the text',
    },
    {
      type: 'input',
      name: 'textColor',
      message:
        'Enter a color keyword or hexadecimal number for the text color:',
      validate: (input) =>
        /^#([0-9a-fA-F]{3}){1,2}$|^red$|^green$|^blue$|^white$|^black$/.test(
          input
        )
          ? true
          : 'Please enter a valid color keyword or hexadecimal number',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'color',
      message:
        'Enter a color keyword or hexadecimal number for the shape color:',
      validate: (input) =>
        /^#([0-9a-fA-F]{3}){1,2}$|^red$|^green$|^blue$|^white$|^black$/.test(
          input
        )
          ? true
          : 'Please enter a valid color keyword or hexadecimal number',
    },
  ])
  .then((answers) => {
    let shape;

    switch (answers.shape) {
      case 'circle':
        shape = Circle;
        break;
      case 'triangle':
        shape = Triangle;
        break;
      case 'square':
        shape = Square;
        break;
    }

    const svg = render(shape, answers.color, 300, answers.textColor, answers.text);

    fs.writeFile('logo.svg', svg, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });
