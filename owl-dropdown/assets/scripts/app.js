// //owl default
// const body = document.querySelector("body");
// body.style.backgroundColor = "gray";
// const owl = body.querySelector(".owl-image");
// const inputWrapper = body.querySelector(".add-items");
// owl.addEventListener("click", function () {
//   inputWrapper.classList.toggle("add-items__visible");
// });

// //
// //
// //
// //
// const getJoke = function () {
//   const jokeP = document.querySelector(".joke__text");
//   const jokeBtn = document.querySelector(".joke__btn");

//   const generateJoke = async function () {
//     const config = {
//       headers: {
//         Accept: "application/json",
//       },
//     };
//     const res = await fetch("https://icanhazdadjoke.com", config);
//     const data = await res.json();
//     jokeP.textContent = data.joke;
//   };
//   generateJoke();

//   jokeBtn.addEventListener("click", generateJoke);
// };
// getJoke();

/* 




*/

function decipherThis(str) {
  const map = str.split(" ").map((word) => {
    const firstLetter = String.fromCharCode(Number.parseInt(word));
    //if only digits
    if (word.match(/^\d\d$/g)) {
      return firstLetter;
    }

    let localWord = [...word];
    const lastLetter = localWord.splice(-1, 1);
    const middlePart = localWord.join("").match(/[^\d]/g);

    if (middlePart) {
      middlePart.push(middlePart.shift());
      return firstLetter + lastLetter.join("") + middlePart.join("");
    } else {
      return firstLetter + lastLetter.join("");
    }
  });
  return map.join(" ");
}
const str1 = "72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o";
const str3 = "110croo 111gel 115i 109ia 102isa";
console.log(decipherThis(str1));
console.log(decipherThis(str3));
/* 

*/
function encryptThis(str) {
  const map = str.split(" ").map((word) => {
    if (word.length === 1) {
        return word
    }
  });
}

const encr1 = "A wise old owl lived in an oak";
// "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"

console.log(encryptThis(encr1));
