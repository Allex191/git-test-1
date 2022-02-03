// const owlDefault = function () {
//   const body = document.querySelector("body");
//   body.style.backgroundColor = "gray";
//   const owl = body.querySelector(".owl-image");
//   const inputWrapper = body.querySelector(".add-items");
//   owl.addEventListener("click", function () {
//     inputWrapper.classList.toggle("add-items__visible");
//   });
//   const joke = body.querySelector(".joke");
//   joke.style.display = "none";
// };

// owlDefault();
// /* 



// //




// */

// //_protectedProperty *obsolete using convention
// //private fields and methods are in the each instances
// //public fields are in the prototype
// class Account {
//   //public fields instances *create directly in all instances not in prototype
//   locale = navigator.language;
//   //private fields *available only in class and not public
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // if we are using private in constructor we need to define first direct in class
//     this.#pin = pin;
//     console.log(
//       `This message will be displ. when its create a new obj from constr`
//     );
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     //return this for making methods chainable
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//   //changing private class fields
//   getMovements() {
//     return this.#movements;
//   }
//   //private method cant be accesed from outside class
//   #aprovePrivate(sum) {
//     this.#movements.push(sum);
//     return this;
//   }
//   aprovePublic(sum) {
//     if (true) this.#aprovePrivate(sum);
//     return this;
//   }
// }

// // const acc1 = new Account("jonas", "Eur", 1111);
// //chainable methods with return this
// // acc1.deposit(300).withdraw(100).aprovePublic(25000).withdraw(200);

// //
// //
// //
// //
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//   }
//   brake() {
//     this.speed -= 5;
//     return this;
//   }
//   get speedUs() {
//     return (this.speed /= 1.6);
//   }
//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EV extends CarCl {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.charge = charge;
//   }
//   chargeBattery(chargeTo) {
//     this.#charge += chargeTo;
//     return this;
//   }
//   accelerate() {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(
//       `${this.make} going at ${this.speed} with charge at ${this.charge}`
//     );
//     return this;
//   }
// }

// // const car1 = new EV("Rivian", 120, 23);
// // car1.accelerate(20).brake(10).chargeBattery(10);
// // car1.accelerate(20).brake(10).chargeBattery(10);
// // car1.accelerate(20).brake(10).chargeBattery(10);
// // car1.accelerate(20).brake(10).chargeBattery(10);
// // car1.accelerate(20).brake(10).chargeBattery(10);

// var fireAndFury = function (tweet) {
//   const regex = /FIRE|FURY/g;
//   const arr = tweet.match(regex);
//   console.log(arr);
// };

// fireAndFury("FURYYYFIREYYFIRE"), "I am furious. You and you are fired!";
// fireAndFury("FIREYYFURYYFURYYFURRYFIRE"),
//   "You are fired! I am really furious. You are fired!";
// fireAndFury("FYRYFIRUFIRUFURE"), "Fake tweet.";
