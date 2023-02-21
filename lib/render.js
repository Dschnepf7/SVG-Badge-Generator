const { Square, Triangle, Circle } = require('./shapes');

function render(choices) {
  // Create a new instance of the specified shape
  let shape;
  switch (choices.shape) {
    case 'square':
      shape = new Square();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    default:
      throw new Error('Invalid shape specified');
  
  };
  // Set the shape color
  shape.setColor(choices.color);

  const svg = shape.render();
  console.log(svg);

  return svg;

}

module.exports = render;
