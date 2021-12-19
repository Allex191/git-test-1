/*

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

function calcAverage(arr) {
  let sum = 0;
  for (const bill of arr) {
    sum += bill;
  }
  return sum / arr.length;
}

console.log(calcAverage(bills));
console.log(bills);
console.log(tips);
console.log(totals);

const arr1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const arr2 = ["error", "error", "error"];
const arr3 = [0, 0, 0];
const arr4 = [10, 10, 10];

function calcAmplitude(arr) {
  let minNumber = null;
  let maxNumber = null;
  for (const iterator of arr) {
    if (typeof iterator === "number") {
      if (minNumber === null) {
        minNumber = iterator;
        maxNumber = iterator;
      } else if (iterator < minNumber) {
        minNumber = iterator;
      } else if (iterator > maxNumber) {
        maxNumber = iterator;
      } else {
        continue;
      }
    }
  }
  if (minNumber !== null) {
    return `The amplitude is ${
      maxNumber - minNumber
    } with minimal temperature of ${minNumber}deg and maximal temperature of ${maxNumber}deg`;
  } else {
    return "No available temperatures";
  }
}

console.log(calcAmplitude(arr1));
console.log(calcAmplitude(arr2));
console.log(calcAmplitude(arr3));
console.log(calcAmplitude(arr4));


//constructor function
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
//1.New {} is created
//2. function is called, this = {}
//3.{} linked to prototype
//4.function automaticaly return {}

const jonas = new Person("jonas", 1991);
console.log(jonas);

const admin = new Person("admin", 1991);
console.log(admin);

console.log(admin instanceof Person);

//Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();

//checkin if Person prototype is prototype of jonas also
console.log(Person.prototype.isPrototypeOf(jonas));

console.log(jonas.__proto__ === Person.prototype);

Person.prototype.species = "Homo Sapiens";

console.log(jonas.hasOwnProperty("firstName"));
//true because its direct property

console.log(jonas.hasOwnProperty("species"));
//false because its not direct property, it has access to the prototype method.

//call on instance to see all prototype not direct methods
console.log(jonas.__proto__);

const arr = [2, 3, 4];
console.log(arr.__proto__);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.make, this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.make, this.speed);
};

const bmw = new Car("BMW", 280);
const mercedes = new Car("Mercedes", 280);
const audi = new Car("Audi", 300);

bmw.accelerate();
bmw.accelerate();
mercedes.brake();
mercedes.brake();
audi.accelerate();


const Player = function (kills, place) {
  this.kills = kills;
  this.place = place;
};

Player.prototype.calculatePoints = function () {
  let pointsPerPlace = 0;
  switch (this.place) {
    case 1:
      pointsPerPlace = 10;
      break;
    case 2:
      pointsPerPlace = 8;
      break;
    case 3:
      pointsPerPlace = 7;
      break;
    case 4:
      pointsPerPlace = 6;
      break;
  }

  pointsPerPlace = pointsPerPlace + this.kills * 2;
  return pointsPerPlace;
};

Player.prototype.calculateMoney = function () {
  return;
};

const imperialHal = new Player(10, 2);
const abraiele = new Player(8, 1);
const reps = new Player(7, 3);

console.log(imperialHal.calculatePoints());
console.log(abraiele.calculatePoints());
console.log(reps.calculatePoints());


const person = {
  firstName: "Brad",
  secondName: "Pit",
  get fullName() {
    return `${this.firstName} ${this.secondName}`; //read only
  },
  set fullName(val) {
    //write only
    const parts = val.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person.fullName);
person.fullName = "mosh djabi";
console.log(person.fullName);


var singleNumber = function (nums) {
  let hash1 = new Map();
  let hash2 = new Map();

  for (const number of nums) {
    if (hash1.has(number)) {
      hash2.set(number);
      hash1.delete(number);
    } else {
      hash1.set(number);
    }
  }

  // hash2.forEach((value, key) => hash1.delete(key));

  const iterator1 = hash2[Symbol.iterator]();
  for (const number of iterator1) {
    hash1.delete(number[0]);
  }
  return [...hash1][0][0];
};

var singleNumber0 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (nums.indexOf(element) === nums.lastIndexOf(element)) {
      return element;
    }
  }
};

var singleNumber1 = function (nums) {
  while (nums.length > 1) {
    outer: for (let i = 0; i < nums.length; i++) {
      const element1 = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        const element2 = nums[j];
        if (element1 === element2) {
          nums.splice(j, 1);
          nums.splice(i, 1);
          continue outer;
        }
      }
    }
  }
  return nums[0];
};
//
//
//
//hash map
var singleNumber2 = function (nums) {
  debugger;
  let hash = new Map();
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    if (hash.has(nums[i])) {
      hash.delete(nums[i]);
    } else {
      hash.set(nums[i], 1);
    }
  }
  console.log(hash);
  return [...hash][0][0];
};
//xor
var singleNumber3 = function (nums) {
  let bitsum = 0;
  for (let i = 0; i < nums.length; i++) {
    bitsum = bitsum ^ nums[i];
  }
  return bitsum;
};

//set
const singleNumber = (array) => {
  let setSum = 0;
  let arraySum = 0;
  const set = new Set(array);
  for (const number of set) {
    setSum += number;
  }
  for (const number of array) {
    arraySum += number;
  }
  return setSum * 2 - arraySum;
};

let nums1 = [2, 4, 6, 2, 5, 4, 6];
let nums2 = [4, 1, 2, 1, 2];
let nums3 = [1];
let nums4 = [2, 2, 4, 4, 5, 5, 6, 6, 7];

console.log(singleNumber(nums1));
console.log(singleNumber(nums2));
console.log(singleNumber(nums3));
console.log(singleNumber(nums4));

//hasm map strings
const singleString1 = (array) => {
  let hash = new Map();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (hash.has(element)) {
      hash.delete(element);
    } else {
      hash.set(element);
    }
  }
  return [...hash][0][0];
};

let array1 = ["a", "a", "b", "b", "c", "d", "d"];

console.log(singleString1(array1));

//set
const singleString = (array) => {
  const set = new Set(array);
  outer: for (let i = 0; i < array.length; i++) {
    const element1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const element2 = array[j];
      if (element1 === element2) {
        continue outer;
      }
    }
    set;
  }
};

let array2 = ["a", "a", "b", "b", "c", "d", "d"];

console.log(singleString(array1));


const brandNewSet = new Set([1, 2, 4]);
brandNewSet.add(2); //not added because its alrready in the set
brandNewSet.add("2"); //added because its a string
brandNewSet.delete("2"); //deleted the string
console.log(brandNewSet.has(2)); //true
console.log(brandNewSet.has("2")); //false
for (const entry of brandNewSet.values()) {
  console.log(entry); //single values 2,2,4
}
brandNewSet.clear();
brandNewSet;

const firstPerson = { name: "Bob" };
const secondPerson = { name: "John" };

const personData = new Map([[firstPerson, [{ date: "yesterday", price: 10 }]]]); //first person in map can be  a variable
personData.get(firstPerson); //[{ date: "yesterday", price: 10 }]
personData.set(secondPerson, [{ date: "today ", age: 11 }]);

for (const array of personData) {
  console.log(array);
}
for (const [key, value] of personData) {
  //array destructuring
  console.log(key); //{name: 'Bob'},{name: 'John'}
  console.log(value); // [{date..}],[{date..}]
}
for (const key of personData.keys()) {
  console.log(key);
}
for (const value of personData.values()) {
  console.log(value);
}

const array = [2, 4, 6, 8];

const returnedFiltered = array.filter((x) => x > 5);
returnedFiltered;

const obj = [];

array.map((number) => obj.push({ num: number }));
obj;

const mappedValues = array.map((number) => ({ num: number }));
mappedValues;

const addedNumbersOfArray = array.reduce((x, y) => x * y);



const findMax = (array) => {
  const max = Math.max(...array);
  const min = Math.min(...array);
  return [min, max];
};
const [min, max] = findMax(array);

const noDuplicates = new Set();


let person = { name: "Max" };
const persons = new WeakSet();
persons.add(person);
person = null;
//with WeakSet { name: "Max" } compare to Set() will be garbage collected if no other reference

let person2 = { name: "Max" };
let newPersons = new WeakMap();
newPersons.set(person2, "extra info");
person2 = null;   //the same as WeakSet if no reference for { name: "Max" } garbage collection will kick in


let array = ["A big wall", " mouse", " big cat"];
let joinedArrayWithoutComma = array.join("");
let joinedArrayWithPlus = array.join(" + ");
//joinedArrayWithoutComma = A big wall mouse big cat
//joinedArrayWithPlus =A big wall +  mouse +  big cat

const prices = [1, 2, 3, 4, 5];
Math.min(prices); // does not work, work only with numbers
Math.min(...prices);
const copiedByReference = prices; //true
const branNewArray = [...prices]; //works because its extracting all numbers
branNewArray === prices; //false

//array destructuring
const array66 = ["max", "bob", "paul", 5, 6, 7, 8];
const [firstplayer, secondplayer, thirdplayer, ...remainedNumbers] = array66; //remainedNumbers is a rest operator here, meaning is an array
console.log(firstplayer); // max
console.log(secondplayer); // bob
console.log(thirdplayer); // payl
console.log(remainedNumbers); // [5,6,7,8]



const array = ["a", "b", "c"];
let returnedArrayLength = array.unshift("e"); // add an element in the front of the array

const array2 = ["a", "b", "c"];
let savedSpliced = array2.splice(0, 1, "e", "f"); // delete one item at position 0 and replace with
let deleteExcept = array2.splice(1);
let deleteLastElement = array2.splice(-1, 1); //delete last element

const firstArr = [0, 1, 2, 3];

const copiedByReference = firstArr;
firstArr.push(4);
console.log(firstArr === copiedByReference); // true copiedByReference is the same object its copied the link

const secondArr = firstArr.slice();
console.log(firstArr == secondArr); //false slice is making another object and not copy the link to the old

const arr3 = ["a", "b", "c", "d", "e"];
let lastElements = arr3.slice(-3, -1); // lastElements =  ["d", "e"]
let allExceptFirstTwo = arr3.slice(2); //allExceptFirstTwo = ["c", "d", "e"]

let arr4 = ["a", "b", "c"];
const arr5 = ["d", "e"];

let arr6 = arr4.concat(arr5);
arr4 = arr4.concat(arr5);
console.log(arr4 === arr6); //false

const personData = [{ name: "john" }, { name: "peter" }];
// indexOf({ name: "peter" }) will not work because its creating a new object when its calling

const peter = personData.find((person) => {
  return person.name === "peter";
});
console.log(peter); //==={ name: "peter" }
peter.name = "Bruce";
console.log(peter); // ==={ name: "peter" }

const peterIndex = personData.findIndex((person) => {
  //returns index
  return person.name === "peter";
});

console.log(peterIndex);

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison")); // returns 1 or -1 if not find

console.log(beasts.includes("bison")); //true

const beasts2 = ["ant", "bison", "camel", "duck", "bison"];
const beastsArray = [];

beasts2.forEach((beast, index, array) => {
  const beastObj = { index: index, beast: beast + index };
  beastsArray.push(beastObj);
});

console.log(beastsArray);

const returnedMapArray = beasts2.map((beast, index, array) => {
  const beastObj = { index: index, beast: beast + index };
  return beastObj;
});

console.log(returnedMapArray);

console.log(beastsArray === returnedMapArray);

const array1 = ["bob", "john", "emanuel", "paul"];
const newArray1 = array1.map((element) => element + " hey");
console.log(newArray1);

const array3 = [2, 4, 6, 8];
const newArray3 = array3.map((number) => number * number);
console.log(newArray3);

const array34 = [5, 7, 3, 10, 8];

array34.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
//array34 = [3,5,7,8,10]

const array41 = [2, 4, 6, 8, 9, 10];
let filteredArray = array41.filter((number) => number >= 8);
console.log(filteredArray);

const array42 = [2, 4, 6, 8, 9, 10];

let sum = 0;
for (const number of array42) {
  sum += number;
}

sum;

const array43 = [2, 4, 6, 8];
//reduce take the second argument "0" as a prev, and for each value its reducing till last and return
const sum43 = array43.reduce((prev, current, index, array) => {
  return prev + current;
}, 0);
sum;

debugger;
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

let addBinatyManual = (A, B) => {
  let sum = "";
  let carry = 0;
  let i = A.length - 1;
  let j = B.length - 1;
  while (i >= 0 || j >= 0) {
    let a = A[i] ? A[i] : "0";
    let b = B[j] ? B[j] : "0";
    sum = String(a ^ b ^ carry) + sum;
    if (a === b && a !== String(carry)) {
      carry = Number(!carry);
    }
    i--;
    j--;
  }

  if (carry) {
    sum = String(carry) + sum;
  }
  return sum;
};

console.log(addBinatyManual("111", "1"));


const array = ["a", "b", "c"];
let returnedArrayLength = array.unshift("e"); // add an element in the front of the array

const array2 = ["a", "b", "c"];
let savedSpliced = array2.splice(0, 1, "e", "f"); // delete one item at position 0 and replace with
let deleteExcept = array2.splice(1);
let deleteLastElement = array2.splice(-1, 1); //delete last element 

 

var plusOne = function (digits) {
  let lastZeros = [];
  let lastDigit = digits.length - 1;

  while (digits[lastDigit] === 9 || digits.length != 0) {
    if (digits[lastDigit] === 9) {
      digits[lastDigit] = 0;
      lastZeros.unshift(digits.pop());
      lastDigit = digits.length - 1;
      continue;
    }
    break;
  }

  if (digits[lastDigit] != 9) {
    digits[lastDigit] += 1;
  }
  digits = digits.concat(lastZeros);

  if (digits[0] == 0) {
    digits.unshift(1);
  }
  return digits;
};

let input1 = [1, 2, 3]; //[1,2,4]
let input2 = [1, 2, 9]; //[1,3,0]
let input3 = [1, 9, 9]; //[2,0,0]
let input4 = [9, 9, 9]; //[1,0,0,0]
let input5 = [9, 9, 9]; //[1,0,0,0]
let input6 = [2, 9, 9, 9]; //[3,0,0,0,0]
let input7 = [0]; //[3,0,0,0,0]

// console.log(plusOne(input1));
// console.log(plusOne(input2));
// console.log(plusOne(input3));
// console.log(plusOne(input4));
// console.log(plusOne(input5));
console.log(plusOne(input6));
// console.log(plusOne(input7));

// var maxSubArray = function (nums) {
//   debugger;
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//     console.log(nums[i]);
//   }
//   return Math.max(...nums);
// };



var lengthOfLastWord = function (s) {  //v1
  s = s.trim();
  let indexLastSpace = s.lastIndexOf(" ");
  let lastWordSize = s.length - 1 - indexLastSpace;

  return lastWordSize;
};

var lengthOfLastWord = function (s) { //v2
  let count = 0;
  s = s.trim();
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      return count;
    }
    count++;
  }
  return s.length;
};

var lengthOfLastWord = function (s) { //v3
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else if (count !== 0) {
      return count;
    }
  }
  return count;
};

let string1 = "ab abcde better";
let string2 = "    day";
let string3 = "a";
let string4 = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(string1));
console.log(lengthOfLastWord(string2));
console.log(lengthOfLastWord(string3));
console.log(lengthOfLastWord(string4));


//linked list
//  function ListNode(val, next) {
//  this.val = (val===undefined ? 0 : val)
//  this.next = (next===undefined ? null : next)

var mergeTwoLists = function (node1, node2) {
  if (node1 == null) {
    return node2;
  }
  if (node2 == null) {
    return node1;
  }

  if (node1 == null && node2 == null) {
    return null;
  }
  let list1Head = node1;
  let list2Head = node2;
  let mergedHead = null;
  let mergedContinousTail = null;

  while (list1Head && list2Head) {
    let nextNode = null;
    if (list1Head.val < list2Head.val) {
      nextNode = list1Head;
      list1Head = list1Head.next;
    } else {
      nextNode = list2Head;
      list2Head = list2Head.next;
    }

    if (mergedHead === null) {
      mergedHead = nextNode;
      mergedContinousTail = nextNode;
      continue;
    }
    mergedContinousTail.next = nextNode;
    mergedContinousTail = nextNode;
  }

  if (list1Head != null) {
    mergedContinousTail.next = list1Head;
  }
  if (list2Head != null) {
    mergedContinousTail.next = list2Head;
  }

  return mergedHead;
};

var mergeTwoLists = function (head1, head2) {
  const sentinel = {
    val: -1,
    next: null,
  };

  let tail = sentinel;
  while (head1 && head2) {
    if (head1.val > head2.val) {
      tail.next = head2;
      head2 = head2.next;
    } else {
      tail.next = head1;
      head1 = head1.next;
    }

    tail = tail.next;
  }

  tail.next = head1 || head2;

  return sentinel.next;
};


const longestCommonPrefix = (str) => {
  if (str.length === 1) {
    //if one word
    return str[0];
  }
  for (const word of str) {
    //if any empty word
    if (word === "") {
      return "";
    }
  }

  let firstWord = str[0];
  for (let i = 1; i < str.length; i++) {
    debugger
    while (str[i].indexOf(firstWord) != 0) {
      firstWord = firstWord.substring(0, firstWord.length - 1);
    }
  }
  return firstWord;
};

var romanToInt = function (s) {
  let sum = 0;
  const romanValues = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  for (let i = 0; i < s.length; i++) {
    if (s.length === 1){
      debugger
      return romanValues[s[i]]
    }
      if (romanValues[s[i]] < romanValues[s[i + 1]]) {
        sum -= romanValues[s[i]];
      } else {
        sum += romanValues[s[i]];
      }
  }
  return sum;
};

var getRomanValues = (char, previousChar) => {
  if (
    previousChar ||
    previousChar !== "I" ||
    previousChar !== "X" ||
    previousChar !== "C"
  ) {
    if (previousChar === "I" && char === "V") {
      char = "IV";
    } else if (previousChar === "I" && char === "X") {
      char = "IX";
    } else if (previousChar === "X" && char === "L") {
      char = "XL";
    } else if (previousChar === "X" && char === "C") {
      char = "XC";
    } else if (previousChar === "C" && char === "D") {
      char = "CD";
    } else if (previousChar === "C" && char === "M") {
      char = "CM";
    }
    previousChar = char;
  }

  switch (char) {
    case "I":
      return 1;
    case "IV":
      return 3;
    case "V":
      return 5;
    case "IX":
      return 8;
    case "X":
      return 10;
    case "XL":
      return 30;
    case "L":
      return 50;
    case "XC":
      return 80;
    case "C":
      return 100;
    case "CD":
      return 300;
    case "D":
      return 500;
    case "CM":
      return 800;
    case "M":
      return 1000;
  }
};

const romanToInt = function (s) {
  debugger;
  let sum = 0;
  let previousChar = "";
  for (let i = 0; i < s.length; i++) {
    previousChar = s[i - 1];
    sum += getRomanValues(s[i], previousChar);
  }
  return sum;
};


//binary tree
var search = function (nums, target) {
  let start = 0;
  let middle;
  let end = nums.length;
  let tof = false;
  let position = -1;
  let iterations = 0;

  while (tof === false && start <= end) {
    iterations++;
    middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      tof = true;
      position = middle;
      console.log(iterations);
      return position;
    }
    if (target < nums[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  console.log(iterations);
  return position;
};

//iterations count
let nums = [];
let maxIteration = 9999;
for (let i = 0; i <= maxIteration; i++) {
  nums.push(i);
}
let target = 6900;

console.log(search(nums, target));


var twoSum = function (nums, target) {
  const values = new Map();

  for (let i = 0; i < nums.length; i++) {
    const targetSubtract = target - nums[i];
    const matchingValue = values.get(targetSubtract);
    if (matchingValue !== undefined) {
      return [matchingValue, i];
    }
    values.set(nums[i], i);
  }
};

console.log(twoSum([5, 5, 6, 3], 9));



let twoSum = function (arrNums, target) {
  let arrPositions = [];
  for (let i = 0; i < arrNums.length; i++) {
    // 3,2,4
    for (let j = 0; j < arrNums.length; j++) {
      //   2,4
      if (j !== i) {
        if (+arrNums[i] + +arrNums[j] === target) {
          arrPositions.push(i, j);
          return arrPositions;
        }
      }
    }
  }
};
function setValue(symbol) {
  let value;
  switch (symbol) {
    case "I":
      value = 1;
      break;
    case "V":
      value = 5;
      break;
    case "X":
      value = 10;
      break;
    case "L":
      value = 50;
      break;
    case "C":
      value = 100;
      break;
    case "D":
      value = 500;
      break;
    case "M":
      value = 1000;
      break;
  }
  return value;
}

function arabic(str) {
  let sum = 0;
  let precedent = 0;
  let current = 0;

  for (const symbol of str) {
    current = setValue(symbol);

    if (current > precedent) {
      sum = sum - 2 * precedent;
    }
    sum += current;
    precedent = current;
  }

  return sum;
}
console.log(arabic("CCXLVI")); // CCXLVI 100/100/10/50/5/1 = 246
console.log(arabic("CDLXXXIII")); //100/500/50/10/10/10/111  =483

//not mine
//
//
// function arabic(roman) {//CCXLVI 100/100/10/50/5/1 = 246
//   // debugger
//   if (roman == null) return -1;
//   var totalValue = 0,
//     value = 0, // Initialise!
//     prev = 0;

//   for (var i = 0; i < roman.length; i++) {
//     var current = char_to_int(roman.charAt(i));//give position index and receive arabic value
//     if (current > prev) { //1st if 100>0
//       // Undo the addition that was done, turn it into subtraction

//       totalValue = totalValue - 2 * value;
//     }
//     if (current !== prev) {
//       // Different symbol?
//       value = 0; // reset the sum for the new symbol
//     }
//     value += current; // keep adding same symbols
//     totalValue += current;
//     prev = current;
//   }
//   return totalValue;
// }

// function char_to_int(character) {
//   switch (character) {
//     case "I":
//       return 1;
//     case "V":
//       return 5;
//     case "X":
//       return 10;
//     case "L":
//       return 50;
//     case "C":
//       return 100;
//     case "D":
//       return 500;
//     case "M":
//       return 1000;
//     default:
//       return -1;
//   }
// }

// console.log(arabic("CXLVI")); // CCXLVI 100/100/10/50/5/1 = 146
// console.log(arabic("CDLXXXIII")); //100/500/50/10/10/10/111  =483

use strict";
function varTypes() {
  var bot1 = 2;
  var bot2 = 3;
  let message = "Hello";
  let _message = "World";
  let $message = "Great";
  let strangeQuote = `Hello, ${_message}`;
  alert(strangeQuote);
  let strangeQuote2 = "Hello, " + message;
  const MY_BIRTHDAY = "28.07.2021"; //“hard-coded” values.
  const visitorAge = "100"; //changeable
  let birthday = MY_BIRTHDAY;

  alert(bot1 + bot2 + $message + strangeQuote2 + visitorAge + birthday);
}

//INCORECT
 let 1a;
 let my-bot;

// cannot start with a digit
 For example: let, class, return, and function are reserved.

function promptExamples() {
  const userAge = prompt("How old are you?", 20);
  let resultAge = userAge;
  alert("You have " + userAge + " years");
  alert(`You have ${resultAge} years`);
}

function confirmExample() {
  let bossQuestion = confirm("Are you the boss?");
  alert(bossQuestion);
}

function typeConversion() {
  const convertMe = true;
  let convertType = String(convertMe);
  let additionConvert = Number(false);
  let additionConvert2 = +false;
  alert(typeof convertType);
  alert(typeof convertMe);
  alert(typeof additionConvert);
  alert(typeof additionConvert2);
}

function addition() {
  //only addition converts in string
  alert(2 + 2 + "apples"); // 4apples
  alert("apples" + 2 + 2); // apples22
  alert(2 - "2"); //0
  alert("2" * 2); //4}
}

function addition2() {
  const oranges = "2";
  const bananas = "3";
  const fruits = +bananas + +oranges;
  return fruits;
}
// alert(addition2());

function booleanConvert(test) {
  const bot1 = test;
  const bot2 = Boolean(bot1);
  return bot2;
}
 alert(booleanConvert(" "));

//operator precedence
function countertest() {
  const precedenceOp = (1 + 2) * 2;
  let counter = 2;
  let bot3 = counter++; //return 2 counter=counter + 1 or +1
  let bot4 = ++counter; //return 3
  counter--; //counter=counter - 1 or -1
  //only to variable 5++ =error
  alert(bot3, bot4);
}

function falseIsZero() {
  let a = false;
  let b = 2;
  let c = a + b;
  alert(c);

  const d = 0;
  const e = false;
  const f = d === e; //false
  // const f = d == e; //true
  alert(f);

  alert("13" > "2"); //false disctionary comparation
  alert("13" > 2); //true numbers comparation

  alert("z" > "a");
}

 let year = prompt("what year?");
year = Boolean(year);
if (year == true) {
  alert("good");
} else alert("bad"); 

if ((0, null, "", undefined, NaN,false)) {
  //code never execute
}

if ((1, true, " ", "2")) {
  //code execute
}
;

 if (year < 2015) {
  alert("Too early...");
} else if (year > 2015) {
  alert("Too late");
} else alert("Exactly!");
 

 const userAge = prompt("How old are you?", 15);
if (userAge > 18) {
  alert("Acces allowed");
} else if (userAge < 18) {
  alert("Acces Restricted");
} else alert("Enter your age");

const userAge2 = prompt("How old are you?", 15);
if (userAge2 > 18) {
  userAge2 = true;
} else if (userAge2 < 18) {
  userAge2 = false;
} else alert("Enter your age"); 

function testConditional() {
  const userAge3 = prompt("How old are you?");
  userAge4 = userAge3 > 18 ? "allowed" : "denied";
  alert(userAge4);

  const userAge3 = prompt("How old are you?");
   userAge4 = userAge3 > 18;
   alert(userAge4);
}


const userAge = prompt("How old are you?");

const resultAge =
  userAge < 10
    ? "hi my child"
    : userAge < 18
    ? "hello"
    : userAge < 120
    ? "greetings"
    : "what an unusual age!";

alert(resultAge);



const userAge = prompt("How old are you?");
const result = (userAge > 18) ? "18+" : "18-";





const userQuestion = prompt("What the oficial name of js?");

if ((userQuestion == "ECMAScript"||userQuestion == "ecma")) {
  alert("right");
} else {
  alert("nope, its ECMAScript");
}


const userNumber = prompt("Give me a number");
const userNumber2 = "";
if (userNumber > 0) {
  alert("1");
} else if (userNumber < 0) {
  alert("-1");
} else if (userNumber == 0) {
  alert("0");
} else {
  alert("Its not a number");
}


const login = prompt("your login");

const message =
  login == "employee"
    ? "hello"
    : login == "director"
    ? "greetings"
    : login == "" 
    ? "no login"
    : "input login";

alert(message);

 const name1 = "";
const name2 = "Mary"; //first true value
const name3 = "John"

const extrasName = name1 || name2|| name3||"*default all false";
const extrasName = name1 && name2 && name3; //ret false

alert(extrasName);// =Mary 


function guessMyNumber(val) {
  const number = prompt("give number");
  const result = number == val;

  result == false || alert("correct");
  result == true|| alert("incorrect");

   if (result == true) {
    alert("corect");
  } else {
    alert("incorect");
  } 
}

guessMyNumber(11);


const userLogin = prompt("what's your login ");
const userPsw = prompt("whats your pasword");

if (userLogin == "Admin") {
  userPsw;
} else if (!(userLogin == "Admin")) {
  alert("I dont know you");
} else alert("Canceled");

if (userPsw == "TheMaster") {
  alert("Welcome");
} else if (userPsw == !"TheMaster") {
  alert("wrong password");
} else alert("canceled");


let userLogin = prompt("Whats your login");

if (userLogin == "Admin") {

    let userPsw = prompt("Whats your pasword");
    if (userPsw === "TheMaster") {
        alert("Welcome Master");
    } else if (userPsw === "" || userPsw === null) {
        alert("Canceled");
    } else {
        alert("Wrong Pasword");
    }
} else if (userLogin === "" || userLogin === null) {
    alert("Canceled");
} else {
    alert("I dont know you");
}



let userFirstName = null;
let userLastName = undefined;
let userNickName = "John";

alert("Welcome " + (userFirstName ?? userLastName ?? userNickName)); // first definite


let i = 3;

while (i > 0) {
    alert(i);
    i--;
}

 let f = 3;
while(f){
    alert(f);
    f--;
}
 
let f = 3;
while(f) alert(f--);   //single statement no curly braces



let f = 0;
 
while (f > 3) { //false and not execute
    alert(f)
    f++;
} 

let f = 0;
do { //execute at least once
    alert(f);
    f++;
} while (f < 3);

for (f = 0; f < 3; f++){
    alert(f);
};

alert(f);

for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
  }
  alert(i);



 let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );


let total = 0;

while (true) {
    let value = +prompt("Give me a number", "");
    if (!value) break;

    total += value;
}

alert("Total " + total);

let total = 0;

for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    alert(i); // 1, then 3, 5, 7, 9
}


const giveNumber = prompt("give me a number");

 if (giveNumber % 2 == 0) {
    alert("its an even number")
} else {
    alert("its an odd number")
};



while(true){
    const giveNumber = prompt("give me a number");
    if(!(giveNumber)){
        break
    }
    else if (giveNumber % 2 == 0) {
        alert("its an even number")
    } else {
        alert("its an odd number")
    };
}

wfpawlf


 
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 1) continue;

    alert(i);
}

for (i = 10; i > 0; i--) {
    if (i % 2 == 1) continue;
    alert(i);

}

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)
        // do something with the value...
    }
}
alert('Done!');


for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}

let j = 0;

while (j < 3) {
    alert(`number ${j}`);
    j++
}




while (true) {
    const userNumber = prompt("Give a number greater than 100");
    if (userNumber > 100) {
        alert("good")
        break
    } else if (!userNumber) {
        break
    } else {
        alert("give another")
    };
}



let total = "";
for (let n = 0; n < 100; n++) {
  if (n % 2 == 1) {
    continue;
  }
  total = total + n + ","
} 

alert(total);

let total = 0;

for (let n = 0; n < 100; n++) {
  if (n % 5 == 0) { //5 10 15 20 25 30...
    total = total + n + ",";
  }
}

for (let n = 0; n < 100; n++) {
  if (n % 5 == 0) {
    continue;
  }
  total = total + n + ",";
}

alert(total);


outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    if (!input) {
      break outer;
    }
  }
}


let total = "";

while (true) {
  let c = prompt("Give me number 5", "");
  if (c == 5 || !c) {
    break;
  } else {
    total += c + ",";
  }
}

alert("You gived me this numbers "+ total);


let e = " even";
let n = " not even";

for (let c = 0; c < 4; c++) {
  if (c % 2 != 0) {
    alert(c + n);
  } else {
    alert(c + e)
  }
}


let i = 0;

while (i < 3) {
  alert(`Number ${i}`);
  i++;
}


let rn = "";

while (true) {
  let number = prompt("Give me a number greater than 100");
  if (!number) break;
  else if (number >= 100) {
    alert(`Good you gived me ${number}`);
    break;
  } else if (number < 100)
    continue;
  else {
    alert("This is not a number")
  }
}


for (let a = 1; a < 10; a++) {
  for (b = 1; b < 10; b++) {
    if (a % b == 1) continue;
    else {
      console.log(a);
    }
  }
}



findPrimeNumbers(100);


//primeste Numarulmaximal
function findPrimeNumbers(maxNumber) {

  //creaza loop pin la numarul maximal 2--100
  for (let dividend = 2; dividend <= maxNumber; ++dividend) {

    //numberIsPrime cheama functia 2 cu numarul testat 
    //si primeste valoarea care o da dupa testarea numarului 
    const numberIsPrime = isNumberPrime(dividend);

    //daca numberIsPrime este true atunci console log numarul dat
    if (numberIsPrime) {

      console.log(dividend);
    }
  }
}

//functia isNumberPrime primeste numarul din prima loop
function isNumberPrime(dividend) {

  //loop verifica ca nr din a 2-a loop sa fie mai mic ca sa se imparte la el
  for (let divisor = 2; divisor < dividend; ++divisor) {

    // verifica daca se imparte egal atunci nu este prim =false
    const reminder = dividend % divisor;

    if (reminder === 0) {

      return false;
    }
  }

  //daca nu se imparte egal atunci = true
  return true;
}

findPrimeNumbers(10);


//trebuie de aflat numerele prime de la 0 la 10
//un numar prim nu se imparte exact la alte numere  inafara de el sau 1
//1-loop pentru toate numerele pina la nrMaxim
// 2-loop pentru numerele de la 2 pina la -1nrMaxim


for (let numberForTest = 2; numberForTest < 10; numberForTest++) {

  let numberForTestIsPrime = true;
  for (let dividedNumber = 2; dividedNumber < numberForTest; dividedNumber++) {
    let m = (numberForTest % dividedNumber)
    if (m == 0) {
      numberForTestIsPrime = false;
    }
  }

  if (numberForTestIsPrime) {
    console.log(numberForTest);
  }
}
    const receivedNumber = secondLoop(dividendNumber);



function mainNumbers(maxNumber) {
  for (let dividendNumber = 6; dividendNumber <= maxNumber; dividendNumber++) {
    const receivedNumber = secondLoop(dividendNumber);
    if (receivedNumber) {
      console.log(dividendNumber)
    }
  }
}

function secondLoop(dividendNumber) {
  for (let divisorNumber = 2; divisorNumber < dividendNumber; divisorNumber++) {
    if (dividendNumber % divisorNumber === 0) {
      return false;
    }
  }
  return true;
}
 

mainNumbers(100);
for (let n = 2; n < 100; n++) {
  let number = true;
  for (m = 2; m < n; m++) {
    if (n % m === 0) {
      number = false;
    }
  }
  if (number) {
    console.log(n);
  }
}



// loop care returneaza care numere se impart exact la 5

// numerele pina la care vrem 100
for (let n = 1; n < 1000; n++) {
  if (n % 5 === 0) {
    console.log(n)
  }
}

// loop care calculeaza numerele pare pina la 100


 for (let n = 2; n < 100; n++) {
  let s = true;
  for (let m = 2; m < n; m++) {
    if (n % m === 0) {
      s = false;
      break;
    }
  }
  if (s) {
    console.log(n)
  }
} 


let n = 2;
while (n < 100) {
  let s = true;
  let m = 2;
  while (m < n) {
    if (n % m === 0) {
      s = false;
    }
    m++;
  }
  if (s) {
    console.log(n)
  }
  n++;
}

let a = 8 / 2 - 2;

switch (a + 1) {
  case 1:
    console.log("nr1");
    break;
  case 2:
    console.log("nr2")
    break;
  case 3:
    console.log("nr3")
    break;
  case 4:
    console.log("nr4")
    break;
  default:
    console.log("number its not between 1 and 4")

}


//switch value is checked strictly
let arg = prompt("Give me a value")

switch (arg) {
  case 1:
    console.log("nr1");
    break;
  case 2:
    console.log("nr2");
    break;
  case 3:
    console.log("nr3");
    break;
  default:
    console.log("its a string ");

}






while (true) {
  let browser = prompt("whats your browser");
  if (browser === "Edge") {
    alert("You've got the Edge!");
  } else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    alert("Okay we support these browsers too");
  } else if (browser === null) {
    break;
  } else if (browser == 0) {
    alert("input a name");
  } else {
    alert("We hope that this page looks ok")
  }
}



let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
}


let user = "bob";

function changeUserName(){
  user = "john"
  alert("hello " + user)
}

alert(user);  //bob
changeUserName();  // john changed by the function
alert(user); //john


let outerUser = "outer" //bad practice for global variables

function changeUser() {
  let outerUser = "inner"; //declared inside shadowed outer,
  alert(outerUser)
}

alert(outerUser); // "outer"
changeUser(); // "inner" 
alert(outerUser); // "outer"



function paramArgum(from, text) {
  from = "*" + from + "*"
  alert(from + ":" + text)
}

let from = "Ann";

paramArgum(from, "Hello"); //*Ann*:Hello changed localy only
alert(from); //Ann
paramArgum("1", "1");


function receiveArg(from, text = "no text given ") {
  alert(from + ":" + text)
}

receiveArg("Ann"); // Ann: no text given



function defaultFunction(from, text = anotherFunction()) {
  m = from + text
  alert(m)
}

function anotherFunction() {
  let sum = "bot " + 8 % 3;
  return sum;
}

defaultFunction("hello "); //if no second argument then anotherFunction is called


function defaulText(text) {
  if (text === undefined) {
    text = "empty message"
  }
  alert(text);
}

defaulText();

function orDefaultText(text) {
  text = text || "empty message";
  alert(text);
}

orDefaultText();

function nullishCoalescing(text) {
  alert(text ? ? "empty message") // if text is undefined or null then show second
}

nullishCoalescing();

function returnValue(a, b) {
  return a + b;
}

let m = returnValue(2, 3);
alert(m);



function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
  alert('Access granted');
} else {
  alert('Access denied');
}





function checkAge(question) {
  if (question >= 18) {
    return true;
  } else {
    confirm("Do you have permision from the partents");
  }
}
let question = prompt("How old are you", 17)

if (checkAge(question)) {
  alert("access alowed")
} else {
  alert("acces denied")
}

function doNothing() {
  //nothing
  return
}
doNothing(); // and empty return returns undefined

return (
  some + long +
  expresions
)
function names
getValues;
showMessage;
createSomething;
chechSomething;
calcSomething;


function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!checkPrimes(i)) {
      continue;
    } else {
      console.log(i);
    }
  }
}

function checkPrimes(i) {
  for (let f = 2; f < i; f++) {
    if (i % f == 0) return false;
  }
  return true;
}

showPrimes(10);


function showPrimes(n) {
  for (let i = 2; i <= n; i++) {
    if (checkPrimes(i)) {
      console.log(i)
    }
  }
}

function checkPrimes(i) {
  for (let f = 2; f < i; f++) {
    if (i % f === 0) {
      return false;
    }
  }
  return true;
}

showPrimes(100);


function checkAge(age) {
  return (age > 18) || confirm("Did your parents allow")
}

console.log(checkAge(18));

function minNumbers(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(minNumbers(1, 3));



function orMinNumbers(a, b) {
  return a < b ? a : b;
}

console.log(orMinNumbers(1, 3));




function power(param1, param2) {
  let sum = param1 ** param2
  return sum;
}

let x = prompt("Give me first number");
let n = prompt("Give me second number");

function checkNumbers(param1, param2) {
  if (!param1 || !param2) {
    alert("aborted");
  } else if (param1 >= 1 && param2 >= 1) {
    alert("Your number is " + power(param1, param2));
  } else if (typeof x !== Number || typeof n !== Number) {
    alert(`${x} or ${n} are not numbers`)
  } else {
    alert("give me numbers")
  }
}

checkNumbers(x, n);


let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1




let age = prompt("How old are you")

let accesAlowed = (age > 18) ? "allowed" : "denied";

alert(accesAlowed);



let sayHi = function () {
  alert("Hello")
};
let func = sayHi;

sayHi();
func();


function askQuestion(a, b, c) {
  if (confirm(a)) {
    b()
  } else {
    c()
  }

}

function ok() {
  alert("Agree")
}

function cancel() {
  alert("canceled")
}

askQuestion("agree", ok, cancel)



function agree(a, b, c) {
  if (confirm(a)) {
    b()
  } else {
    c()
  }
}

agree(
  "do you agree",
  function () {
    alert("you agreed");
  },
  function () {
    alert("you canceled");
  }
);

function questions(a, b, c, d) {
  alert("response with yes or no");
  a = prompt(a)
  if (a) {
    b();
  } else {
    d()
  }
}

function howMuch() {
  prompt("Ho much do you like to work")
}

function work() {
  alert("good")
}

function dance() {
  alert("good")
}

function notLike() {
  alert("you dont like to work")
}

questions("Do you like to work", howMuch, dance, notLike) // this are called callbacks



//WRITING A FUNCTION THAT ASK FOR USER AGE

function howOld(a, b, c, d, e) {
  a = prompt(a)
  if (a >= 18) {
    b()
  } else if (a > 1) {
    c()
  } else if (!a) {
    d()
  } else {
    e();
  }

}

howOld("how old are you", bigger, smaller, denied, function () {
  alert("give me real numbers")
})

function bigger() {
  alert("acces allowed")
}

function smaller() {
  alert("acces denied")
}

function denied() {
  alert("aborted")
}





alert(temporar(2, 3)); //a function expresion cant be called before 
let temporar = function (a, b) {
  return a + b;
};


alert(global(2, 3)) // a function declaration can be called before 

function global(a, b) {
  return a + b;
}



let foo = 2;
let bot = foo;
foo = "bar";


alert(foo);
alert(bot);


let age = prompt("What is your age?", 18);
let welcome = 2;

if (age < 18) {

  welcome = function () {
    alert("Hello!");
  };

} else {

  welcome = function () {
    alert("Greetings!");
  };

}

welcome(); // ok now 

let age = prompt("whats your age")

let welcome = (age > 18) ? alert("hello") : alert("bye-bye");


let age = prompt("whats your age")

let welcome = (age > 18) ? acces() : incorrect();




let age = prompt("whats your age", 17);

if (age > 18) {
  acces();
} else {
  incorrect();
}


function acces() {
  alert(`Your age is ${age}`)
}

function incorrect() {
  if (age > 1) {
    alert(`you have ${age} years, bye-bye!`)
  } else if (age == 0) {
    alert(`srlsy ${age}?`)
  } else if (!age) {
    alert("aborted")
  } else {
    alert(`You typed "${age}" Give me numbers`)
  }
}


let nr1 = 2;
let nr2 = 3;

let sum = function (a, b) {
  return a + b;
};

let sum2 = (a, b) => (a * b);

let sum3 = a => a + 5;

let sum4 = () => 2 + 6

alert(sum(nr1, nr2))
alert(sum2(nr1, nr2))
alert(sum3(nr1, nr2))
alert(sum4(nr1, nr2))



let age = prompt("whats your age")

let sum5 = (age >= 18) ? alert("allowed") : alert("denied");

let sum6 = (age >= 18) ? () => alert('hello') : () => alert("denied")

sum6();


let sum = (a, b) => {
  return a + b;
}

alert(sum(2, 3));

let sum = (a, b) => { // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert(sum(1, 2)); // 3



let a = confirm("Do you agree")

let ask = (a) ?
  () => alert("You agreed") :
  () => alert("you denied");


ask(a);

 let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome(); 


function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree",
  () => alert("you agreed"),
  () => alert("you denied")
);


debugger;

function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}

pow(2, 3);

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", ""),
  n = prompt("n?", "");
if (n <= 0) {
  alert(
    `Power ${n} is not supported, please enter an integer number greater than zero`
  );
} else {
  alert(pow(x, n));
}


let user = {
  name: "john",
  age: 30,
  "likes birds": true,
};

console.log(user.age);
delete user.age;

console.log(user.age);
console.log(user["likes birds"]);

delete user["likes birds"];
console.log(user["likes birds"]);

user.gender = "male";
console.log(user.gender);

user["cars owned"] = 4;
console.log(user["cars owned"])


let fruit = prompt("which fruit to buy");

let bag = {
  [fruit]: 5,
};

console.log(bag.apple);

let user;

user = {
  name: "john",
  born: 1991,
  kids: 2,
  married: true,
};

alert(user.born);
user.animals = 1;
user["houses"] = 2;
user.kids = 3;
alert(user.kids)

let answer = prompt("what do you want to know about use", "name")

alert(user[answer])


let fruits = prompt("What fruits to buy", "oranges");
let applesNr = prompt("How many apples to buy", 3);

let bag = {
  apples: 0,
  fruits: 0,
};

bag["apples"] = applesNr;
bag["fruits"] = fruits;
bag["limons"] = 5;

alert(bag["apples"]);
alert(bag["fruits"]);
alert(bag["limons"]);

function makeUser(name, age) {
  return {
    name, // name: name,
    age, //age: age,
  };
}

let user = makeUser("John", 30);
// alert(user.name);

alert("name" in user);
alert("cars" in user);

let user = {
  age: 30,
};

let change = "age";

alert(change in user)

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  alert(key);
  alert(user[key]);
}

user ={
  name: "John",
  surname : "Smith",
}

user.name = "Pete";
delete user.name;

alert("name" in user)
alert("surname" in user)


// let key;
let user = {};
function isEmpty(obj) {
  for (key in user) {
    return false;
  }
  return true;
}

alert(isEmpty(user)); // true



let salaries = {
  john: 100,
  Ann: 160,
  Pete: 130,
};


let sum = 0;
for (let key in salaries) {
  let calc = salaries[key];
  sum += calc;
}
alert(sum);



menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] == "number") {
      menu[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

for (let key in menu) {
  // alert(key);
  alert(menu[key]);
}



let user = {
  name: "john",
  age: 30,
};
let user2 = {
  name: "max",
  age: 100,
};
let clone = {};
let clone2 = {};
let clone3 = {};


//clone each key in "clone" same as Object.assing
for (let key in user) {
  clone[key] == user[key];
}

clone.age = 10;

Object.assign(clone2, user, user2);

clone3 = Object.assign({},user2) 

alert("user " + user.age);
alert("clone " + clone.age);
alert("clone2 " + clone2.age);
alert("clone2 " + clone2.name);

Object.assign(clone2, { cars: 2 });
alert("clone2 cars " + clone2.cars);
alert("clone3 " + clone3.age);



let user = {
  age: 30,
};

function sayHi() {
  alert("Hello");
}

user.sayHi = sayHi;

user.sayHi();

user = {
  sayHi() {
    alert("Hello");
  },
  age: 29,
};

user.sayHi();

let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert("hello " + this.name);
  },
};

user.sayHi();


let user = { name: "john" };
let admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();


let calculator = {
  value1: 0,
  value2: 0,
  read() {
    this.value1 = +prompt("give me first value");
    this.value2 = +prompt("give me second value");
  },
  sum() {
    return this.value1 + this.value2;
  },
  mul() {
    return this.value1 * this.value2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

 


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showSteps() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showSteps();


function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("jack");

alert(user.isAdmin);


function User(name) {
  //this = {} (implicity)

  //add properties to this
  this.name = name;
  this.isAdmin = false;

  //return this (implicity)
}

let user = new User("jack");

user.name = "bob"
User("jim");

alert(user3.name)
alert(user);

for (let key in user) {
  alert(user[key]);
}



function SmallUser() {
  this.name = "John";
}

alert(new SmallUser().name);


function User(name) {
  this.name = name;

  this.SayHi = function () {
    alert("My name is: " + this.name);
  };
}

let john = new User("John");

john.SayHi();


function User1() {
  this.cars = 2;
  this.houses = 1;
}

function User2() {
  this.cars = 2;
  this.houses = 1;
}

let visitor1 = new User1();
let visitor2 = new User2();

alert(visitor1 == visitor2);

function A() {}
function B() {}

let a = new A();
let b = new B();

alert(a == b);

debugger;
function Calculator(value1, value2) {
  this.read = function () {
    this.value1 = +prompt("give first number");
    this.value2 = +prompt("give second number");
  };
  this.sum = function () {
    return this.value1 + this.value2;
  };
  this.mul = function () {
    return this.value1 * this.value2;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum" + calculator.sum());
alert("Mul" + calculator.mul());


function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.Value = prompt("give me one value");
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

alert(accumulator.value);


// optional chaining verify if the value exist otherwise is returning undefined

let user = {
  address: 1,
  car:3,
};

alert(user?.address);
alert(user?.car);
alert(user?.address?.street);


let userAdmin = {
  admin() {
    alert("i am a admin");
  },
};

let userGuest = {};

userAdmin.admin?.();
alert(userGuest.admin?.()); // returns undefined

let id = Symbol("id");

alert(id.toString());
alert(id.description);

let user = {
  name: "John", //not our code
};

let id = Symbol("id");

user.id = 1;

alert(user.id)



let user = {
  name: "john",
};

let id = Symbol("id");

user[id] = 1; // calling an id corectly
user.id2 = 3;

for (let key in user) {
  alert(key);
}

let id = Symbol.for("id"); //searching for a global symbol, if does not exist then create
let idAgain = Symbol.for("id");

// the same symbol
alert(id === idAgain); // true

let sym = Symbol.for("name");
Symbol.keyFor(sym);

let user = {
  id: 9451,
  name: "Dominique",
  age: 59,
};

const idSym = Symbol("id");

user[idSym] = 123;

alert(user[idSym])


//two different symbols
const sym1 = Symbol("id")
const sym2 = Symbol("id")
sym1 === sym2  //false

//same symbol *global symbol
const sym3 = Symbol.for("id")
const sym4 = Symbol.for("id")
alert(sym3 === sym4) //true


function showingAlert() {
  alert("hey");
}

function outputName(name) {
  alert(name);
}

showingAlert();
outputName();

 task3Element.addEventListener("click", outputName) 

function combineStrings(nr1, nr2, nr3) {
  return nr1 + " " + nr2 + " " + nr3 + " ";
}

const combinedString = combineStrings("hey", "you", "there");

alert(combinedString);

let test= [2,5,6];
console.log(test[0]);

var count = 0;

function cc(card) {
  switch (card) {
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

let goods = {
  house: 1,
  "user cars": 2,
};
goods.house; // --can acces with dots only if not space

goods["user cars"]; //--can acces all

multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 

 function sum(arr, firstNmbrs) {
  let count = 0;
  for (let i = 0; i < firstNmbrs; i++) {
    count += arr[i];
  }
  return count;
} 

console.log(sum(arr, 5));


debugger

function test(nr) {
  if (nr === 0) {
    return;
  } else {
    console.log(nr);
    test(nr - 1);
  }
}

test(5);



let arr = [2, 2, 2, 2, 2];
sum(arr, 3);

function sum(arr, firstNmbrs) {
  // Only change code below this line
  if (firstNmbrs <= 0) {
    return 0;
  } else {
    return sum(arr, firstNmbrs - 1) + arr[firstNmbrs - 1];
  }
}


let arr1 = [];
let arr2 = [];
for (let i = 0; i < 100; i++) {
  const randomMumber = Math.random();
  if (randomMumber < 0.7) {
    arr1.push(` ${i} = ${randomMumber}\n`);
  } else {
    arr2.push(` ${i} = ${randomMumber}\n`);
  }
}
console.log("%c%s", "color: #f200e2", `Smaller than =>${arr1}`);
console.log("%c%s", "color: #f200e2", `Bigger than =>${arr2}`);

 let stop = true;
while (stop) {
  const randomMumber = Math.random();
  if (randomMumber < 0.7) {
    console.log("%c%s", "color: #f200e2", `Smaller than =>${randomMumber}`);
  } else {
    console.log("%c%s", "color: #f200e2", `Bigger than =>${randomMumber}`);
    stop = false;
  }
} 

//loop care striga la fiecare numar care e mai mare decit 0.7
//si striga cind e mai mic de 0.7

 if (randomMumber > 0.7) {
  alert(`greater than ${randomMumber}`);
} else {
  console.log(`smaller than ${randomMumber}`);
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 0; i < arr.length; i++) {
  console.log("%c%s", "color: #807160", arr[i]);
}

 for (let j = arr.length; j > 0; j--) {
  console.log("%c%s", "color: #807160", arr[j - 1]);
}

let randomNumber1;
let randomNumber2;

function changeNumbers() {
  randomNumber1 = Math.random();
  randomNumber2 = Math.random();
}
changeNumbers();
let stop = true;

while (stop) {
  if (randomNumber1 > 0.2 || randomNumber2 > 0.2) {
    console.log("%c%s", "color: #731d6d", randomNumber1);
    console.log("%c%s", "color: #731d6d", randomNumber2);
    stop = false;
  } else {
    console.log("%c%s", "color: #006dcc", randomNumber1);
    console.log("%c%s", "color: #006dcc", randomNumber2);
    changeNumbers();
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverse = [];

for (const bot of arr) {
  reverse.unshift(bot);
}

let condition = true;

while (condition) {
  if (arr[0] == undefined) {
    condition = false;
  } else {
    arr.shift(0);
  }
}
for (const bot of reverse) {
  arr.push(bot);
}

console.log("%c%s", "color: #cc0088", arr);
console.log("%c%s", "color: #cc0088", reverse);
outerLoop: for (let i = 0; i < 10; i++) {
  console.log("%c%s", "color: #77258c", "outer", i);
  for (let j = 0; j < 10; j++) {
    console.log("%c%s", "color: #ff258c", "inner", j);
    if (j === 8) {
      break outerLoop;
    }
  }
}

const findGreaterOrEqual = (a, b) => {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
};

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  } else if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}

findGreaterOrEqual(2, 3);
console.log("%c%s %s", "color: #eeff00", findGreaterOrEqual(2, 2));
let count1 = ``;
let count2 = ``;
function test(cart, ...param) {
  //rest operator should be last argument ...param is created as an array 
  for (const bot of param) {
    count1 += " one " + bot;
  }
  count2 = `Your ${cart} have${count1}`;

  console.log("%c%s", "color: #d0bfff", count2);
}
test("cart", "banana", "orange", "tomatoes"); 

const unlimited = function (callback, ...arg) {
  if (!arg) {
    callback();
  }
};
const callback = () => console.log("%c%s", "color: #40fff2", "Emty string");

unlimited(callback, "A", "beauty", "string") ;



function checkInput(cb, ...many) {
  let hasEmptyText = false;
  for (const text of many) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

debugger;

checkInput(
  () => {
    console.log("All not empty");
  },
  "Hello",
  "12",
  "d"
);



const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const subtractUp = function (resultHandler, ...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum -= num;
  }
  resultHandler(sum);
};

const showResult = (result) => {
  alert("The result after adding all numbers is: " + result);
};

sumUp(showResult, 1, 5, "fdsa", -3, 6, 10);
sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
console.log(subtractUp(1, 10, 15, 20));


function reverseCase(str) {
	let word =[]
	for(const i of str){
		if(i === i.toUpperCase()){
			word.push(i.toLowerCase())
		}else{
			word.push(i.toUpperCase())
		}	
	}
	console.log(word.join(""))
}

reverseCase("sPoNtAnEoUs")
	

const twoSum = function (nums, target) {
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= nums.length; j++) {
      if (nums[i] != nums[j] && i + j === target) {
        console.log(i, j);
      }
    }
  }
};

const arr = [1, 2, 3, 4];

twoSum(arr, 7);


export const convert = (number) => {
  let container = "";
  if (number % 3 === 0) {
    container += "Pling";
  }
  if (number % 5 === 0) {
    container += "Plang";
  }
  if (number % 7 === 0) {
    container += "Plong";
  }
  if (!container) {
    container = number.toString();
  }
  return container;
};
debugger;
console.log("%c%s", "color: #006dcc", convert(1));


const minMax = (arr) => {
  arr.sort();
  console.log( [arr[0], arr[arr.length - 1]]);
};


const arr1 = [0, 1, 2, 3, 4, 5];

function local() {
  const part1 = arr1.slice(0, 3);
  console.log("%c%s", "color: #997326", part1);
}


function list(arr1) {
  if (arr1.length === 0) {
    return "";
  }
  if (arr1.length === 1) {
    return arr1[0];
  }
  let elExLast = arr1.slice(0, arr1.length - 1);
  let lastElement = arr1.slice(arr1.length - 1, arr1.length);
  return elExLast.join(", ") + " and " + lastElement;
}

list(["Huey", "Dewey", "Louie"]);

//Huey, Dewey and Louie

function gcd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  console.log(x);
  return x;
}
debugger
gcd(15, 6);

15,6



function addWithSurcharge(nr1, nr2) {
  let surcharge = 0;

  if (nr1 <= 10) {
    surcharge++;
  } else if (nr1 <= 20) {
    surcharge += 2;
  } else {
    surcharge += 3;
  }

  if (nr2 <= 10) {
    surcharge++;
  } else if (nr2 <= 20) {
    surcharge += 2;
  } else {
    surcharge += 3;
  }
  return nr1 + nr2 + surcharge;
}
addWithSurcharge(10, 10);

function median(arr) {
  if (arr.length % 2 != 0) {
    let position;
    position = Math.floor(arr.length / 2);
    return arr[position];
  } else {
    let nrAfterHalf = arr.length / 2;
    let nrBeforeHalf = arr.length / 2 - 1;
    let sum = (arr[nrAfterHalf] + arr[nrBeforeHalf]) / 2;
    return sum;
  }
}


let arr1 = [1, 2, 10];
let arr2 = [1, 2, 10, 100];
let arr3 = [1, 2, 10, 100, 500, 800];
console.log(median(arr3));

function hello(par) {
  if (par) {
    return `Hello ${par}!`;
  }
  return "Hello world!";
}


function cutComment(line) {
  debugger;
  let commentPosition = line.indexOf("//");
  if (commentPosition !== -1) {
    return line.slice(commentPosition + 3);
  }
  return null;
}

console.log(cutComment("let foo; // bar"));

const teamDelphin = [85, 101, 102];
const teamKoalas = [20, 20, 20];

const calcAverage = (arr) => {
  let firstThree = arr.slice(0, 3);
  let sum = 0;
  for (const iterator of firstThree) {
    sum += iterator;
  }

  return sum / arr.length;
};

const checkWinner = (teamDelphin, teamKoalas) => {
  if (teamDelphin / teamKoalas > 2) {
    return `Team Delphin win (${teamDelphin} vs ${teamKoalas}) `;
  } else if (teamKoalas / teamDelphin > 2) {
    return `Team Koalas win (${teamDelphin} vs ${teamKoalas}) `;
  } else {
    return `No team Win, team Delphin ${teamDelphin} vs teamKoalas ${teamKoalas}`;
  }
};

const mainFunction = () => {
  const teamDelphinAverage = calcAverage(teamDelphin);
  const teamKoalasAverage = calcAverage(teamKoalas);
  const winner = checkWinner(teamDelphinAverage, teamKoalasAverage);
  return winner;
};

console.log(mainFunction(teamDelphin, teamKoalas));
*/
