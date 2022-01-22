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
