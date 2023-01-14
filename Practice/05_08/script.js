/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

// add two classes to element
document
  .querySelector("ul li:first-child")
  .classList.add("new-class", "second-new-class");
document.querySelector("ul li:first-child").classList.remove("feature");

// add new attribut to element
document
  .querySelector("img")
  .setAttribute("alt", "Simplified line graphic of a backpack");

// request the value of attribute
const imgSrc = document.querySelector("img").getAttribute("src");
console.log(`First image source: ${imgSrc}`);

// change value of attribute
document.querySelector("img").setAttribute("loading", "eager");

// add inline CSS to element
const backpackTitle = document.querySelector(".backpack__name");
backpackTitle.style.color = "red";
backpackTitle.style.textDecoration = "underline dotted";

//query style property of element to get list of all style properties available
console.log(backpackTitle.style);
