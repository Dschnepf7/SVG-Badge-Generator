class Circle {
    constructor() {
      this.color = "#FFFFFF";
      this.radius = 50;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    render() {
      const svg = `<svg width="${this.radius * 2}" height="${this.radius * 2}" viewBox="0 0 ${this.radius * 2} ${this.radius * 2}" xmlns="http://www.w3.org/2000/svg">
          <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
        </svg>`;
      return svg;
    }
  }
  
  class Square {
    constructor() {
      this.color = "#FFFFFF";
      this.side = 100;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setSide(side) {
      this.side = side;
    }
  
    render() {
      const svg = `<svg width="${this.side}" height="${this.side}" viewBox="0 0 ${this.side} ${this.side}" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="${this.side}" height="${this.side}" fill="${this.color}" />
        </svg>`;
      return svg;
    }
  }
  
  class Triangle {
    constructor() {
      this.color = "#FFFFFF";
      this.side = 100;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setSide(side) {
      this.side = side;
    }
  
    render() {
      const svg = `<svg width="${this.side}" height="${this.side}" viewBox="0 0 ${this.side} ${this.side}" xmlns="http://www.w3.org/2000/svg">
          <polygon points="${this.side / 2},0 ${this.side}, ${this.side} 0,${this.side}" fill="${this.color}" />
        </svg>`;
      return svg;
    }
  }
  
  module.exports = { Circle, Square, Triangle };
  