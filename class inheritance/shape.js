// declare class

class Shape {
  constructor(color) {
    this.color = color;
  }
  calculateArea() {}
  drawShape() {}
}

// Shape.color = '...' //! Static properties

module.exports = Shape;
// export class using module.exports