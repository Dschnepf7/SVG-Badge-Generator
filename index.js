const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const render = require('./lib/render');

// Prompt the user for the badge shape and color
inquirer.prompt([
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['square', 'triangle', 'circle'],
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

  // Write the SVG data to a file
  const filename = `${answers.color}-${answers.shape}.svg`;
  fs.writeFile(filename, svg, (err) => {
    if (err) throw err;
    console.log(`Badge saved to ${filename}`);
  });
});
