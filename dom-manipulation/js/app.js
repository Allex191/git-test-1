//Dom manipulation
const header = document.querySelector(".header");
const headerText = document.querySelector(".header__text");
const testInput = document.querySelector(".test__input");
const listItems = document.querySelectorAll("li");
const altItems = document.getElementsByTagName("li");
const listItem3 = document.querySelector(".list-item");
const listItems4 = document.querySelector(".list-item:last-of-type");
const documentTitle = document.head.querySelector("title");
const altDocumentTitle = document.querySelector("title");
const firstText = document.querySelector(".test__text-first");
const firstLi = document.querySelector("li");
const testParent = document.body.querySelector("ul");
const ul = document.querySelector("ul");
const ulNodes = document.querySelectorAll("li");
const ulSibling = ul.previousElementSibling; //faster for the browser
const liPreviousSibling = firstLi.previousElementSibling; //faster for the browser

testInput.className = "new-test__input";
testInput.value = "type your pasword here";
testInput.setAttribute("value", "new-atribute");

header.style.border = "2px solid #61b2c3";
headerText.textContent = "Dom Manipulation";
headerText.style.color = "#fff";
headerText.style.fontSize = "30px";

listItems[0].style.backgroundColor = "purple";
listItem3.style.backgroundColor = "gray";
listItems4.style.color = "white";
documentTitle.textContent = "New title";
altDocumentTitle.textContent = "fresh";
firstText.style.color = "red";

ul.lastChild.textContent = "new child";
ul.children[0].textContent = "firstChild";
// ul.firstChild.style.color = "red"

console.dir(ulSibling);
console.dir(headerText);

const button = document.querySelector("button");
const nextParagraph = ul.nextElementSibling;
const allParagraphs = document.querySelectorAll("p");
const addedContent = document.querySelector(".added-content");
const insertButton = document.querySelector(".insertAdjacentHtml");
const createButton = document.querySelector(".createElement");
const newParagraph = document.createElement("p");
const newList = document.body.querySelector(".newList");
const seventhParagraph = document.createElement("p");
const eighthParagraph = document.createElement("p");
const ninthParagraph = document.createElement("p");
const tenthParagraph = document.createElement("p");
const linkElement = document.createElement("li");

const remove = () => {
  for (const i of allParagraphs) {
    i.classList.toggle("paragraphs-color");
  }
  ul.classList.toggle("invisible");
  nextParagraph.textContent = "The button was pressed today";
};

const insertHtml = () => {
  addedContent.insertAdjacentHTML("afterbegin", "<p>This text was added</p>");
};

const createElement = () => {
  const createdLi = document.createElement("li");
  createdLi.textContent = "A brand new created element";
  addedContent.appendChild(createdLi);
};

seventhParagraph.textContent = "seventh-text";
eighthParagraph.textContent = "eigth-text";
ninthParagraph.textContent = "ninth-text";
tenthParagraph.textContent = "tenth-text";
linkElement.textContent = "link-element";

newList.appendChild(seventhParagraph);
newList.lastElementChild.before(eighthParagraph);
newList.lastElementChild.after(ninthParagraph);
newList.lastElementChild.after(tenthParagraph);
newList.lastElementChild.replaceWith(linkElement);

button.addEventListener("click", remove);
insertButton.addEventListener("click", insertHtml);
createButton.addEventListener("click", createElement);

///////////////////////////////////

const personalList = document.querySelector(".personal-list");
const personalListAllLi = personalList.children;
const personalListThirdEl = document.createElement("li");
const personalListFourthEl = document.createElement("li");
const nextSiblingAfterOl = document.createElement("div");
const newH = document.createElement("h");
const newHButton = document.createElement("button");

personalList.insertAdjacentElement("beforeend", personalListThirdEl);
personalListThirdEl.textContent = "Third element created with insertAdj";

for (const li of personalListAllLi) {
  li.className = li.className + " group-class-names";
}

nextSiblingAfterOl.className = "element-created-with-js";
newH.className = "h-created-with-js";
newH.textContent = "A title created with dom manipulation";
nextSiblingAfterOl.append(newH);

newHButton.className = "button-created-with-js";
newHButton.textContent = "change title color";
newHButton.style.display = "block";
newH.insertAdjacentElement("beforebegin", newHButton);

personalList.append(nextSiblingAfterOl);

const changeHColor = () => {
  newH.classList.toggle("newH-title");
};

const personalListClone = personalList.cloneNode(true);
const personalListCloneTitle = document.createElement("h");
personalListCloneTitle.textContent = "Cloned Title"
personalListClone.insertAdjacentElement("afterbegin", personalListCloneTitle);
;

personalListClone.style.border = "2px solid red";
personalList.insertAdjacentElement("afterend", personalListClone);

newHButton.addEventListener("click", changeHColor);

