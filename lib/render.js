const { Square, Triangle, Circle, Text } = require('./shapes');

function render(shapeObj, color, size, textColor, text, fontSize) {
  let svgShape = '';

  if (shapeObj && typeof shapeObj === 'object') {
    if (shapeObj instanceof Circle) {
      shapeObj.setColor(color);
      shapeObj.setRadius(size);
      svgShape = shapeObj.render();
    } else if (shapeObj instanceof Square) {
      shapeObj.setColor(color);
      shapeObj.setSide(size);
      svgShape = shapeObj.render();
    } else if (shapeObj instanceof Triangle) {
      shapeObj.setColor(color);
      shapeObj.setSide(size);
      svgShape = shapeObj.render();
    } else if (shapeObj instanceof Text) {
      shapeObj.setText(text);
      shapeObj.setFontSize(fontSize);
      shapeObj.setTextColor(textColor);
      svgShape = shapeObj.render();
    } else {
      throw new Error('Invalid shape type');
    }
  } else {
    throw new Error('Invalid shape object');
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
    ${svgShape}
  </svg>`;

  return svg;
}

module.exports = render;
