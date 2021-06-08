function Animal(name) {
  this.name = name;
}

function Cat() {
  Parent.call(this, "coco");
  this.xxx = 111;
}

const prototype = Object.create(Animal.prototype);
prototype.constructor = Cat;
Cat.prototype = prototype;

// Cat.__proto__ === Animal;
// Cat.prototype.__proto__ === Animal.prototype;
