//tree logic

const tree = document.querySelector(".tree");
function towerBuilder(number) {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr.unshift(
      ""
        .padStart(i, " ")
        .padEnd(number * 2 - i - 1, "*")
        .padEnd(number * 2 - 1, " ")
    );
  }
  return arr;
}
towerBuilder(70).forEach((arr, i) => {
  tree.insertAdjacentHTML("beforeend", `<div data-lamp${i}>${arr}</div>`);
});

tree.style.width = "100%";
tree.style.height = "300px";
// demo.style.whiteSpace = "pre";
tree.style.display = "flex";
tree.style.flexDirection = "column";
tree.style.alignItems = "center";
tree.style.marginLeft = "-46px";
