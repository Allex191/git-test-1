//import named
import { add } from "./shopCart.js";
import { mainFood as food } from "./shopCart.js";
add(2, food);

//import everything in a object
import * as shopingCart from "./shopCart.js";
shopingCart.add(shopingCart.IN, shopingCart.IT);

//if use bundlers
import cloneDeep from "lodash-es";
const defaulObj = { car: [{ car: 2 }, { houses: 2 }] };
const copied = cloneDeep(defaulObj);
console.log(copied);

//maintain page state do not full reload page
if (module.hot) {
  module.hot.accept();
}
/* 


*/
