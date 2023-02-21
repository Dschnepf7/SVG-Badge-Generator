const { Square, Triangle, Circle } = require('./shapes');

function renderBadge(options) {
  // Create a new instance of the specified shape
  let shape;
  switch (options.shape) {
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
  }

  // Set the shape color
  shape.setColor(options.color);

  // Generate the SVG badge using the shape's render method
  const svg = shape.render();

  // Return the SVG as a string
  return svg;
}

module.exports = renderBadge;
