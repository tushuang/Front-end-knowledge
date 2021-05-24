function Animal(name) {
  this.name = name;
}

function Cat() {
  Animal.call(this);
  this.run = () => {
    console.log("run");
  };
}

Cat.__proto__ = Animal;
cat.__proto__ = Cat.prototype;

let prototype = Object.create(Animal.prototype);
prototype.constructor = Cat;
Cat.prototype = prototype;

// Cat.prototype = new Animal('12')
