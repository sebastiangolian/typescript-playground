// BAD
// class Rectangle {
//     private width: number;
//     private height: number;

//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }
// }

// class Circle {
//     private radius: number;

//     constructor(radius: number) {
//         this.radius = radius;
//     }
// }

// class AreaCalculator {
//     calculateRectangleArea(rectangle: Rectangle): number {
//         return rectangle.width * rectangle.height;
//     }

//     calculateCircleArea(circle: Circle): number {
//         return Math.PI * (circle.radius * circle.radius);
//     }
// }

interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * (this.radius * this.radius);
  }
}

class AreaCalculator {
  calculateArea(shape: Shape): number {
    return shape.calculateArea();
  }
}
