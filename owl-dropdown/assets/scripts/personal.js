"use strict";
// const dreamsBtn = document.querySelector(".add-items-button");

// const jonas = {
//   year: 1991,
//   firstName: "Jonas",
//   calcAge: function () {
//     console.log(this);

//     const isMillenial = () => {
//       //arrow function as method but not nested directly "this of is millenial is actualy this of calc age"
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     //be carefoul of using arrow functions with "this" as direct methods because they ommit "this"
//     console.log(`hey ${this.firstName}`);
//   },
// };

// jonas.calcAge();

// const addNumbers = function (a, b) {
//   console.log(arguments);
// };

// const addNumbersArrow = (a, b) => {
//   console.log(arguments);
// };

// addNumbers(2, 5, 7);
// addNumbersArrow(2, 5, 7);

// let age = 30;
// let oldAge = age;
// age = 31;

// const me = {
//   name: "jonas",
//   age: 30,
// };

// const friend = me;

// friend.age = 27;

// console.log(me);

// let lastName = "Wiliams";
// let oldLastName = lastName;
// lastName = "Davis";

// const jessica = {
//   firstName: "jessica",
//   lastName: "Williams",
//   age: 27,
// };
// //merging two objects or create a deep clone new object
// const oldJessica = Object.assign({}, jessica);
// jessica.age = 30;

//

//

// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via angelo Tavanti 23, Firenze,Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   returnArray: function (firstIndex, secondIndex) {
//     return [this.categories[firstIndex], this.categories[secondIndex]];
//   },
// };

// let [another, , third] = restaurant.categories;
// [another, third] = [third, another]; //another = third third= another

// const [one, two] = restaurant.returnArray(0, 3); //one = Italian two = Vegetarian
// const four = restaurant.returnArray(0, 3); //four = [Italian, Vegetarian]

// const nested = [2, 4, [5, 6]];

// const [first, , [five, six]] = nested;
// console.log(first, five, six);

// const [p = 1, q = 1, r = 1] = [8, 9]; // asign default values for variable destructuring
// console.log(p, q, r);

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
  sun: {
    open: [24],
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via angelo Tavanti 23, Firenze,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order: function (firstIndex, secondIndex) {
    return [this.categories[firstIndex], this.categories[secondIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    return `Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`This is your pasta with ${ing1},${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

const gameEvents = new Map([
  [12, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Yellow Card"],
  [64, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow Card"],
]);

//1
const events = new Set();
for (const [key, value] of gameEvents) {
  events.add(gameEvents.get(key));
}

//2
gameEvents.delete(64);

//3



// const set = new Set(["a", 2, "b", 3, "c", 4]);

// console.log(set);
// for (const [key, value] of question) {
//   key;
//   value;
// }

// const answer = Number(prompt("What is your answer? *type 1/2/3", 1));
// // console.log(`You selected ${question.get(answer)}`);

// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

//building array from map
// console.log([...question]);

// console.log(answer === 3 ? question.get(true) : question.get(false));

// const mapTest = new Map();
// // mapTest.set(document.querySelector(".add-items-button"), "h1");
// mapTest.set([1, 2, 3], "array");
// mapTest.set("array", [1, 2, 3]);
// // console.log(mapTest);

// const anotherMap = new Map([
//   [1, 2],
//   [["abc"], 2],
//   [2, "abc"],
// ]);
// console.log(anotherMap);

// console.log(Object.entries(openingHours));

// const mapFromObj = new Map(Object.entries(openingHours));
// console.log(mapFromObj);

// const rest = new Map();
// rest.set("name", "Clasico Italiano");
// rest.set(1, "Firenze", "Italy");
// rest.set(2, "Lisobon", "Portugal");

// rest
//   .set("categories", [
//     "Focaccia",
//     "Bruschetta",
//     "Garlic Bread",
//     "Caprese Salad",
//   ])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are close :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(true));

// console.log(rest);

// const arr1 = [2, 3];
// rest.set(arr1, "test");
// console.log(rest.get(arr1));

// rest.clear();
// console.log(rest);
// const arr = ["Pizza", 1, 1, "Pizza", "Garlic"];
// const set = new Set(arr);
// set;

// console.log(set.has("Pizza"));
// set.add("pizza");
// set.add("another Pizza");
// set;
// set.delete("pizza");

// for (const element of set) {
//   console.log(element);
// }

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const staffUnique = [...new Set(staff)]; //create array from set
// staffUnique

// const jonasName = "Jonasschemedtmann";
// const uniqueLetters = new Set(jonasName).size; // count unique values
// uniqueLetters;

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// for (const day of Object.values(openingHours)) {
//   console.log(day);
// }

// const entries = Object.entries(openingHours);
// console.log("hey", entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`on ${day} we open at ${open} and close at ${close}`);
// }

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = openingHours?.[day]?.open;
//   console.log(`on ${day} restaurant open at ${open ?? "closed"}`);
// }

// //optional chaining
// //check monday if exist for not showing errors
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon);
// console.log(restaurant.openingHours?.fri);

// console.log(restaurant.order?.(2, 3) ?? "method does not exist");
// console.log(restaurant.orderCar?.(2, 3) ?? "method does not exist");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// //if numGuests is falsy values null undefinded or 0
// const guests1 = 0 || 10;
// const guests2 = undefined || 10;
// console.log(guests1);
// console.log(guests2);

// // if numGuests is only nullish values null/undefined but not zero or ""
// const guests3 = 0 ?? 10;
// const guests4 = undefined ?? 10;
// console.log(guests3);
// console.log(guests4);

// const or1 = 2 || "jonas"; //2
// const or2 = 0 || "jonas"; //"jonas"

// const and1 = 2 && "jonas"; //jonas
// const and2 = 0 && "jonas"; //0

// const serverObj = {
//   time: "22:30",
//   address: "Via del sole",
//   mainIndex: 2,
//   starterIndex: 2,
// };

// console.log(restaurant.orderDelivery(serverObj));

// const mainMenuCopy = [...restaurant.mainMenu, "+oneMore"];

// console.log(mainMenuCopy);
// console.log();

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = "Name";

// const arrayLetters = [...str];

// console.log(arrayLetters);

// // const ingredients = [
// //   prompt(`Give me first ingredient`),
// //   prompt(`second?`),
// //   prompt(`third?`),
// // ];

// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, foundedIn: 1998, founder: "Guiseppe" };
// newRestaurant.name = "hey";
// newRestaurant.starterMenu = ["plusOne", ...restaurant.starterMenu];
// console.log(newRestaurant.name);
// console.log(newRestaurant.starterMenu);

// console.log(restaurant.mainMenu === newRestaurant.mainMenu);
// console.log(restaurant.starterMenu === newRestaurant.starterMenu);

// const [pizza, , risotto, ...restFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(restFood);

// const { sat: saturday, sun, ...weekdays } = restaurant.openingHours;
// console.log(saturday);
// console.log(sun);
// console.log(weekdays);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

const game = {
  team1: "Bauern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Daies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //1
// for (const [number, player] of game.scored.entries()) {
//   console.log(`Goal ${number + 1} ${player}`);
// }

// //2
// let average = 0;
// const odds = Object.values(game.odds);
// for (const oddValue of Object.values(game.odds)) {
//   average += oddValue;
// }
// average /= odds.length;
// console.log(average);

// //3
// console.log(`Odd of draw ${game.team1}`);

// for (const [oddKey, oddValue] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${game[oddKey] ? "victory" : ""} ${
//       game[oddKey] ?? "draw"
//     }:${oddValue}`
//   );
// }

// //4
// const scores = {};
// // let count = 0;

// for (const scoredPlayer of game.scored) {
//   if (scores[scoredPlayer] === 1) {
//     scores[scoredPlayer]++;
//   } else {
//     scores[scoredPlayer] ?? (scores[scoredPlayer] = 1);
//   }
// }

// console.log(scores);

// function duplicateCount(text) {
//   let localText = [...text.toLowerCase()];
//   let set = new Set();
//   for (let i = 0; i < localText.length; i++) {
//     const elementI = localText[i];
//     for (let j = i + 1; j < localText.length; j++) {
//       const elementJ = localText[j];
//       if (elementI === elementJ) {
//         set.add(elementI);
//       }
//     }
//   }
//   return set.size;
// }

// const word1 = "aabbcde";
// const word2 = "Indivisibility";
// const word3 = "";

// console.log(duplicateCount(word1));
// console.log(duplicateCount(word2));
// console.log(duplicateCount(word3));

// let inputs = [1, -2, -8, 4, 5];
// let n = inputs.length;
// let min = null;

// for (let i = 0; i < n; i++) {
//   const temp = parseInt(inputs[i]); //  temperature  -273 to 5526
//   if (min === null) { // (min?? min = temp)
//     min = temp;
//   }
//   if (temp > 0 && temp < min) {
//     min = temp;
//   } else if (temp < 0 && temp < -min) {
//     min = temp;
//   }
// }

// // Write an answer using console.log()
// // To debug: console.error('Debug messages...');

// console.log(+min);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [i, name] of menu.entries()) {
//   console.log(i, name);
// }

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const playersFinal = [...players1, "Thiago", "Coutinho", "Peristic"];

// const { team1, x: draw, team2 } = game.odds;

// function printGoals(...playersNames) {
//   for (const playerName of playersNames) {
//     let localCount = 0;
//     for (const scored of game.scored) {
//       if (playerName === scored) {
//         localCount++;
//       }
//     }
//     console.log(`${playerName} has ${localCount}`);
//   }
// }

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// team1 < team2 && console.log("team1");
// team1 > team2 && console.log("team2");
