export const add = function (number, product) {
  console.log(`You added ${number} ${product} to the cart`);
};

const importantNumber = 2;
const itemName = "speakers";
export const mainFood = "salad";
//export and change name
export { importantNumber as IN, itemName as IT };

//exporting default one export per module that we can name at import
export default function (a, b) {
  a + b;
}

//module patter before es2015 IIFE works as closure
const shopingcart = (function () {
  //private cannot acces outside
  const products = 2;
  //public
  const price = 10;
  const calc = function (a, b) {
    return a + b;
  };

  //returned as objects to be used later as public
  return { price, calc };
})();

console.log(shopingcart.calc(2, 3));

// //npm use common js module formating system
// //for export
// export.addToCart = function(){}
// //for import
// const { addToCart } = require("./shoppingCart.js");


// tab for autocomplete
// cls -- cmd clear
// dir -- show directory 
// cd .. -- change directory go back
// mkdir test  -- make a folder "test"
// rmdir test  -- remove directory
// rm test.js -- remove file
// echo some-text  > filename.txt -- make a file with text in it
// mv test.js ../ -- move file to the parent folder

