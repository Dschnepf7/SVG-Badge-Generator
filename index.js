const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const renderBadge = require('./lib/render');

// Prompt the user for the badge shape and color
inquirer.prompt([
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'list',
    name: 'color',
    message: 'Choose a color:',
    choices: ['red', 'green', 'blue'],
  },
]).then((answers) => {
  // Create the appropriate shape object
  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
  }

  // Set the shape color
  shape.setColor(answers.color);

  // Generate the SVG badge
  const svg = shape.render();

  // Render the badge
  render(svg);
});
