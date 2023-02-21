const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./shapes");

inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "Select a shape:",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "fillColor",
      message: "Enter a fill color (e.g. red, blue, #00FF00):",
    },
    // Add additional prompts for customizing the shape
  ])
  .then((answers) => {
    let shape;

    switch (answers.shape) {
      case "Circle":
        shape = new Circle();
        break;
      case "Square":
        shape = new Square();
        break;
      case "Triangle":
        shape = new Triangle();
        break;
      default:
        throw new Error("Invalid shape selected.");
    }

    shape.setColor(answers.fillColor);
    // Add additional logic to customize the shape based on user input

    const svg = shape.render();
    // Use the SVG element to generate a badge
  })
  .catch((err) => {
    console.error(err);
  });
