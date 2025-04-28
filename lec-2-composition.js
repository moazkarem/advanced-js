/*
--------- steps in lecture 
1-create class cat => name , eat , drink , play
2-create class dog => name , eat , drink , play
3-create clas animal and make cat & dog inherit from this class 
4-convert all methods to factories 
6- compose 
*/

// [1] create class cat and class dogs

// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype.eat = function () {
//   return `${this.name} is going to eat`;
// };

// Cat.prototype.drink = function () {
//   return `${this.name} is going to drink`;
// };

// Cat.prototype.play = function () {
//   return `${this.name} is going to play`;
// };

// const catOne = new Cat("kitty");

// console.log(catOne.eat());
// console.log(catOne.drink());
// console.log(catOne.play());

// console.log("############## start dogs class");
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.eat = function () {
//   return `${this.name} is going to eat`;
// };

// Dog.prototype.drink = function () {
//   return `${this.name} is going to drink`;
// };

// Dog.prototype.play = function () {
//   return `${this.name} is going to play`;
// };

// const dogOne = new Dog("Duggy");

// console.log(dogOne.eat());
// console.log(dogOne.drink());
// console.log(dogOne.play());

//=========[2] create animal class and make cat & dog inherit from this class

// function Cat(name) {
//   this.name = name;
// }

// function Dog(name) {
//   this.name = name;
// }

// function Animal() {}

// Animal.prototype.eat = function () {
//   return `${this.name} is going to eat`;
// };

// Animal.prototype.drink = function () {
//   return `${this.name} is going to drink`;
// };
// Animal.prototype.play = function () {
//   return `${this.name} is going to play`;
// };

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// const catOne = new Cat("Kitty");

// console.log(catOne.eat());
// console.log(catOne.drink());
// console.log(catOne.play());

// console.log("######## AFTER INHRITANCE");

// const dogOne = new Dog("Duggy");
// console.log(dogOne.eat());
// console.log(dogOne.drink());
// console.log(dogOne.play());

//[3] convert all methods to factories and start composition

// const canEat = function () {
//   return {
//     eat: function () {
//       return `${this.name} is going to eat from composition`;
//     },
//   };
// };

// const canDrink = function () {
//   return {
//     drink: function () {
//       return `${this.name} is going to drink from composition`;
//     },
//   };
// };

// const canPlay = function () {
//   return {
//     play: function () {
//       return `${this.name} is going to play from composition`;
//     },
//   };
// };

// function Cat(name) {
//   this.name = name;
// }

// function Dog(name) {
//   this.name = name;
// }
// const kitty = new Cat("Kitty");
// Cat.prototype = Object.assign(kitty, canEat(), canDrink(), canPlay());
// console.log(kitty.eat());
// console.log(kitty.drink());
// console.log(kitty.play());
// console.log('############### after composition ')
// const duggy = new Dog("duggy");
// Dog.prototype = Object.assign(duggy, canEat(), canDrink());
// console.log(duggy.eat());
// console.log(duggy.drink());

//[4] convert all to factories and use composition in there without any classes

const canEat = function () {
  return {
    eat: function () {
      return `${this.name} is going to eat after convet all to factories and composition `;
    },
  };
};

const canDrink = function () {
  return {
    drink: function () {
      return `${this.name} is going to drink after convet all to factories and composition `;
    },
  };
};

const canPlay = function () {
  return {
    play: function () {
      return `${this.name} is going to play after convet all to factories and composition `;
    },
  };
};

const cat = function (name) {
  const state = {
    name: name,
  };
  return Object.assign(state, canEat(), canDrink(), canPlay());
};

const dog = function (name) {
  const state = {
    name: name,
  };
  return Object.assign(state, canEat(), canDrink());
};

const kitty = cat("kitty");
console.log(kitty.eat());
console.log(kitty.drink());
console.log(kitty.play());
console.log("############### after composition ");

const duggy = dog("kitty");
console.log(duggy.eat());
console.log(duggy.drink());
