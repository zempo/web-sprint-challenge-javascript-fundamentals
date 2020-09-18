// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(shapeAttrs) {
    this.length = shapeAttrs.length;
    this.width = shapeAttrs.width;
    this.height = shapeAttrs.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
//  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
//  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(shapeAttrs) {
    super(shapeAttrs);
    // cubes have even sides
    // only one side is needed
    this.width = shapeAttrs.side;
    this.height = shapeAttrs.side;
    this.length = shapeAttrs.side;
    this.side = shapeAttrs.side;
  }
  volume() {
    return Math.pow(this.side, 3);
  }
  surfaceArea() {
    return 6 * Math.pow(this.side, 2);
  }
}

// height, length, and width will each default to a single side arguement
const cube = new CubeMaker({ side: 4 });

console.log(cube);
console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96
