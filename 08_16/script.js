/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
// import Backpack from "./components/Backpack.js";

// const backpackObjectArray[i] = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST",
//   "../assets/images/everyday.svg"
// );

import backpackObjectArray from "./components/data.js";

// console.log(backpackObjectArray);

const createContent = function (index) {
  let content = `
    <figure class="backpack__image">
      <img src=${backpackObjectArray[index].image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpackObjectArray[index].name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpackObjectArray[index].volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpackObjectArray[index].color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpackObjectArray[
        index
      ].backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpackObjectArray[index].pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpackObjectArray[index].strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpackObjectArray[index].strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpackObjectArray[index].lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  
`;
  return content;
};

const main = document.querySelector(".maincontent");

for (let i = 0; i < backpackObjectArray.length; i++) {
  let newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", backpackObjectArray[i].id);
  newArticle.innerHTML = createContent(i);

  main.append(newArticle);
}
