const owlDefault = function () {
  const body = document.querySelector("body");
  body.style.backgroundColor = "gray";
  const owl = body.querySelector(".owl-image");
  const inputWrapper = body.querySelector(".add-items");
  owl.addEventListener("click", function () {
    inputWrapper.classList.toggle("add-items__visible");
  });
  const joke = body.querySelector(".joke");
  joke.style.display = "none";
};

owlDefault();
//
//
//
//

let username = "JackOfAllTrades";
// let regex1 = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/;

//1 starting with letters only and digits olny after one leter
//2 minim 8 digits
