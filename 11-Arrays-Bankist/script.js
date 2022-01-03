"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((prev, cur) => prev + cur, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((prev, cur) => prev + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

let currentAccount = "";
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }

  console.log(`${currentAccount.balance}`);
  console.dir(receiverAcc);
  console.dir(currentAccount);
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //Add movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = "";
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    +inputClosePin.value === currentAccount.pin
  ) {
    accounts.splice(
      accounts.findIndex((acc) => acc.userName === currentAccount.userName),
      1
    );
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//
//
//



labelBalance.addEventListener("click", function (e) {
  const allValues = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );
});

//[1,2,3,4,5,6,7,8,9,10]
const programArray1 = Array.from({ length: 10 }, (_, i) => i + 1);

//create a nonFixed length array with 100 random dice roll from 1 to 6
const programArray2 = Array.from({ length: 100 }, (_, i) =>
  Math.round(Math.random() * 5 + 1)
);

const arr = [1, 2, 3, 4, 5];
arr.fill("a", 2, 4); //arr ===[1, 2, 'a', 'a', 5]

//any number in the array that is bigger than 0
// const anyDeposits = movements.some((mov) => mov > 0); //true

// //for every amount in the array return true only if all are bigger than 0
// const allDeposits = movements.every((mov) => mov > 0); //false

// //flat nested array with specific level deep default = flat() ===flat(1)
// const arrDeep = [[1, 2, [3, 4]], 5];
// const returnedArr = arrDeep.flat(2); //[1,2,3,4,5]

// //flatMap is map with flat(1) combined
// const arrays = [{ arr: [1, 2, 3] }, { arr: [4, 5, 6] }, { arr: [7, 8, 9] }];
// const returnedArr2 = arrays.flatMap((arr) => arr.arr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// const account = accounts.find((acc) => acc.userName === "js");

// const eurToUsd = 1.1;

// const totalDepositsUsd = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUsd);

// //1MAP
// function deleteNth(arr, n) {
//   const newArr = [];
//   const stat = {};
//   for (const element of arr) {
//     if (stat.hasOwnProperty(element)) {
//       stat[element]++;
//     } else {
//       stat[element] = 1;
//     }

//     if (stat[element] <= n) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// }

// const array4 = [15, 15, 15, 20, 20, 20, 30, 30];
// const repeat4 = 2;

// console.log(deleteNth(array4, repeat4));

// function deleteNth(arr, n) {
//   const map = new Map();
//   const newArr = [];

//   for (el of arr) {
//     if (!map.has(el))
//       // Add to the map
//       map.set(el, 1);
//     else if (map.get(el) === n)
//       // Skip this element
//       continue;
//     // Increment this element
//     else map.set(el, map.get(el) + 1);

//     newArr.push(el);
//   }

//   return newArr;
// }

// const max = movements.reduce((prev, cur) => {
//   if (prev > cur) {
//     return prev;
//   } else {
//     return cur;
//   }
// }, movements[0]);
// console.log(max);
// //1 if age<=2{
// // humanAge*2
// // }else{
// // humanAge*4
// }

// const calcAverageHumanAge = function (arrDogAges) {
//   let humanAge = arrDogAges.map((dog) => {
//     return dog <= 2 ? dog * 2 : 16 + dog * 4;
//   });
//   humanAge = humanAge.filter((age) => age >= 18);
//   return humanAge.reduce((prev, curent) => prev + curent) / humanAge.length;
// };

// const calcAverageHumanAge2 = function (arrDogAges) {
//   return arrDogAges
//     .map((dog) => {
//       return dog <= 2 ? dog * 2 : 16 + dog * 4;
//     })
//     .filter((age) => age >= 18)
//     .reduce((prev, curent, i, arr) => {
//       console.log(arr.length);
//       return prev + curent / arr.length;
//     }, 0);
// };

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// console.log(calcAverageHumanAge2(data1));

//
//
//

// const balance = movements.reduce((prev, cur, i, arr) => {
//   debugger;
//   return prev + cur;
// }, 0);

// console.log(balance);

// const deposits = movements.filter((mov) => {
//   return mov > 0;
// });

// const withdrawals = movements.filter((mov) => mov < 0);

// console.log(deposits);
// console.log(withdrawals);

// const convertingMovements = movements.map((mov) => mov * 1.1);

//
//
// const juliaArr = [3, 5, 2, 12, 7];
// const kateArr = [9, 16, 6, 8, 3];

// const checkDogs = function (juliaArr, kateArr) {
//   const juliaLocalArr = juliaArr.slice(1, -2);
//   const combinedData = [...juliaLocalArr, ...kateArr];
//   combinedData.forEach((dog, index) => {
//     console.log(
//       `Dog number ${index} is ${
//         dog >= 3 ? "an adult" : "a puppy"
//       } and is ${dog} years old`
//     );
//   });
// };

// checkDogs(juliaArr, kateArr);
