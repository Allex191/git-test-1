/*"use strict";
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
*/

//two different symbols
const sym1 = Symbol("id")
const sym2 = Symbol("id")
sym1 === sym2  //false

//same symbol *global symbol
const sym3 = Symbol.for("id")
const sym4 = Symbol.for("id")
alert(sym3 === sym4) //true
