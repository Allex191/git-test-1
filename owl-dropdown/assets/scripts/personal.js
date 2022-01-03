"use strict";

// let str = "One bot of another";

// const oneWord = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };

// console.log(oneWord(str));

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(" ");
//   return [first.toUpperCase(), ...other].join(" ");
// };

// const mainFunction = function (str, fn) {
//   return fn(str);
// };

// console.log(mainFunction(str, upperFirstWord));

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet("hey")("jonas");

// function deleteNth(arr, n) {}

// let arr1 = [1, 1, 1, 1]; //[1,1,1]
// let repeat1 = 3;

// let arr2 = [3, 3, 3, 4, 4, 5, 5, 5]; //[3,3,4,4,5,5]
// let repeat = 2;

// console.log(deleteNth(arr1, repeat1));

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     // console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${this.flightNum}`, name });
//   },
// };

// lufthansa.book(635, "Jonas Schmedtmann");

// const eurowings = {
//   name: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;
// book.call(eurowings, 23, "Sarah");
// // console.log(eurowings)

// const person = {
//   name: "Boris",
//   age: 30,
//   houses: 0,
//   people: [],
//   createOutput(name, age, houses) {

//       `${this.name} is ${this.age} years old and have ${this.houses} houses`

//     person.people.push({ name: this.name, age: this.age, houses: this.houses });
//   },
// };

// person.createOutput();

// const futurePerson1 = {
//   name: "Boris",
//   age: 33,
//   houses: 1,
// };
// const futurePerson2 = {
//   name: "Boris",
//   age: 35,
//   houses: 2,
// };
// const futurePerson3 = {
//   name: "Boris",
//   age: 37,
//   houses: 3,
// };

// const array = [];

// person.createOutput.call(futurePerson1, 1, "abc");
// person.createOutput.apply(futurePerson2, array);
// const storedFunction = person.createOutput.bind(futurePerson3);
// storedFunction();

// // console.log(person.people);

// // document
// //   .querySelector(".buy")
// //   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;

// addTax(0.1, 200); //220
// const addVat = addTax.bind(null, 0.2); //setting this to null and first arg to 0.2 addVat is now same function as addTax just with preseted rate of 0.2
// // console.log(addVat(200)); //240

const poll = {
  question: "What is your favourite programming language?",
  options: [`0: Javascript`, "1: Pyton", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `${this.question}\n ${this.options.join("\n")} Write option number`,
      0
    );
    if (answer >= 0 && answer < this.answers.length) {
      this.answers[answer]++;
    }
    this.displayResults(this.answers);
  },
  displayResults(type) {
    if (typeof type === "object") {
      console.log(type);
    } else if (typeof type === "string") {
      console.log(`Poll results are ${this.answers.join("")}`);
    }
  },
};

document
  .querySelector(".add-items-button")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// const array = [1, 2, 3, 4];

// document
//   .querySelector(".add-items-button")
//   .addEventListener("click", poll.displayResults.bind(this, array));

//imediately invoked function expressions IIFE

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const savedFunction = secureBooking();

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", () => {
    header.style.color = "blue";
  });
})();
