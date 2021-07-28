function firstCode() {
  var myData = [5, 15, 25];
  var secondData = myData.pop();
  var thirdData = [, 3, 4];
  var fourthData = myData.shift();
  var fifthData = (myData += thirdData);

  var ourArray = ["Stimpson", "J", "cat"];
  ourArray.unshift([5]);
  console.log(secondData);
  console.log(fourthData);
  console.log(fifthData);
}

function secondCode() {
  var myData = [5, 15, 25];
  console.log(myData);
}

function thirdCode() {
  var dog = ["hey"];
  var cat = dog.push("meow");
  var parent = dog.unshift("stop");
  var cow = ["mu"];
  var stranger = dog.shift();
  var final = [stranger + "," + cow];

  console.log(final);
}

var globalVariable = 100;

function fourthCode(param1, param2) {
  console.log(param1 * param2);
}

// fourthCode(5,6);

// function myOutfit() {
// var globalVariable = 200;

//   return globalVariable;
// }

// myOutfit();

function iaNumar(bot) {
  return bot + 5;
}
var point = iaNumar(5);
// console.log(point);

function primesteNumar(param1) {
  console.log(param1 + point);
}

// primesteNumar(15);

function mar(mar, portocala, prasada) {
  return mar + portocala * prasada;
}

// var merisor = mar(5,6,10);

// console.log(merisor);
function seventhFunction(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;
}

// function thatIf(mar){
//     if (mar){
//         return "Da ii mar";
//     }
//     return "Nu nui mar";
// }
// thatIf(true);
// thatIf(false);

function testIf(mar) {
  if ((mar = "1")) {
    return "Un mar";
  }
  return "Nui un mar";
}
testIf(1);

// function strictlyEquality(a,b){
//     if (a === b) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// strictlyEquality(10, "10");

// var raspuns = strictlyEquality;

// console.log(raspuns);

function multipleOperands(val) {
  if (val <= 70 && val >= 30) {
    return "Intre 30 si 70";
  }
  return "Nui intre 30 si 70";
}

function elseFirstExample(val) {
  if (val < 10) {
    return "Numar mai mic de 10";
  } else {
    return "Numar mai mare de 10";
  }
}

// console.log(elseFirstExample(15));

function testElse(val) {
  var result = "";
  if (val > 100) {
    result = "Numar mai mare decit 100";
  } else {
    result = "Numar mai mic sau egal cu 100";
  }
  return result;
}

// console.log(testElse(4));

function One(val) {
  var storage = "";
  if (val > 100) {
    storage = "Number bigger than 100";
  } else if (val == 100) {
    storage = "The number is 100";
  } else if (val < 100 && val > 50) {
    storage = "Number bigger than 50 and smaller than 100";
  } else if (val == 50) {
    storage = "Number is 50";
  } else if (val < 50 && val > 10) {
    storage = "Number is smaller than 50";
  } else if (val >= 1 && val <= 10) {
    storage = "Number is between 1 and 10";
  } else {
    return "The number is 0";
  }
  return storage;
}
// console.log(One(10));

function testMorning(val) {
  if (val > 100) {
    return "Number is bigger than 100";
  } else if (val == 100) {
    return "Number is 100";
  } else if (val >= 50 && val < 100) {
    return "Number is between 50 and 99";
  } else if (val < 50 && val >= 10) {
    return "Number is between 10 and 49";
  } else if (val < 10 && val >= 1) {
    return "Number is between 1 and 9";
  } else {
    return "Number is 0";
  }
}

// console.log(testMorning(100));

function testSize(num) {
  // Only change code below this line
  var storage = "";
  if (num < 5) {
    storage = "Tiny";
  } else if (num < 10) {
    storage = "Small";
  } else if (num < 15) {
    storage = "Medium";
  } else if (num < 20) {
    storage = "Large";
  } else {
    storage = "Huge";
  }

  return storage;
  // Only change code above this line
}

// console.log(testSize(20));

function newSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
    case 5:
    case 6:
      answer = "4,5,6";
      break;
  }
  return answer;
}
// console.log(newSwitch(4));

function smallEquation(a, b) {
  return a < b;
}
// console.log(smallEquation(2,2));

var count = 0;
function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6) {
    count = count + 1;
  } else if ([10, "J", "Q", "K", "A"]) {
    count == count - 1;
  }
  if (count > 0) {
    count = count + " Bet";
  } else {
    count = count + " Hold";
  }
  return count;
  // Only change code above this line
}
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
// console.log(cc());

function thirtyThree() {
  var testObject = {
    name: "dog",
    tails: 1,
    legs: 2,
  };

  testObject["friends"] = "Many";

  var takeThat = testObject.name;
  var takeAnother = testObject["tails"];
  var testWeird = "tails";
  var takeThere = testObject[testWeird];
  var takeFour = testObject["friends"];
  console.log(takeThat, takeThere, takeFour);
}
// thirtyThree();

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  //  return result;
  console.log(result);
}

// phoneticLookup("charlie");

function testArray() {
  var bigArray = [
    {
      type: "flower",
      list: ["rose", "tulip", "dandelion"],
    },
    {
      type: "trees",
      list: ["fir", "pine", "birch"],
    },
  ];
  var giveArray = bigArray[0].list[2];
  console.log(giveArray);
}

// testArray();

//
//Update record collection

var recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (
    prop === "tracks" &&
    records[id].hasOwnProperty("tracks") === false
  ) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

var personalData = {
  1000: {
    carte: "JavaScript",
    nivel: "Avansat",
    an: "2018",
    citit: ["5", "10"],
  },
  1001: {
    carte: "C++",
    nivel: "Avansat",
    citit: ["10", "15"],
  },
  1002: {
    carte: "html",
    an: "2000",
    citit: [],
  },
  1003: {},
};

function updateCarti(recorduri, iduri, propri, valoare) {
  if (propri !== "carte" && valoare !== "") {
    recorduri[iduri][propri] = valoare;
  } else if (
    propri === "carte" &&
    recorduri[iduri].hasOwnProperty("carte") == false
  ) {
    recorduri[iduri][propri] = valoare;
  } else if (propri === "carte" && valoare !== "") {
    recorduri[iduri][propri] == valoare;
  } else if (valoare === "") {
    delete recorduri[iduri][propri];
  }
  // else if(iduri > 0 ){
  //   recorduri.push(iduri);
  // }

  return recorduri;
}

// console.log(updateCarti(personalData, 1001, "an", "2015"));
// console.log(updateCarti(personalData, 1004, 'carte', ''));
// console.log(updateCarti(personalData, 1002, 'citit', "5"));

var myArray = [];
var test = 5;

while (test >= 0) {
  myArray.push(test);
  test--;
}

var myArray = [];

for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}

// console.log(myArray)

function twentyFour() {
  var myArr = [2, 3, 4, 5, 6];
  for (var total = 0; total < myArr.length; total++) {
    console.log(myArr[total]);
  }
}
// console.log(twentyFour());

function loopArray() {
  var load = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var total = 0;

  for (var i = 0; i < load.length; i++) {
    total += load[i];
  }
}
// console.log(total);

function thirtyFour() {
  var arr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}

var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (var x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
// lookUpProfile("Kristian", "likes");

function randomFraction() {
  return Math.random();
}

function randomWholeNum() {
  // Only change code below this line.
  return Math.floor(Math.random() * 10);
}
