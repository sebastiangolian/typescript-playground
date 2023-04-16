// BAD
// class Rectangle {
//     private width: number;
//     private height: number;

//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }

//     public calculateArea(): number {
//         return this.width * this.height;
//     }
// }

// class Square extends Rectangle {
//     private width: number;
//     private height: number;

//     constructor(width: number, height: number) {
//         super(width, height);

//         this.width = width;
//         this.height = height;
//     }
// }

class RectangleGood {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  isSquare(): boolean {
    return this.width === this.height;
  }
}
