/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import Cabinet from "./cabinet.js";
import Shelf from "./shelf.js";

const computerBag = new Backpack("Computer Bag", 20, "Black", 3, 32, 0, false);

console.log("The everydayPack object:", computerBag);
console.log("The pocketNum value:", computerBag.pocketNum);

const floatingShelf = new Shelf(
  "wood stain",
  42,
  12,
  "Skywalker: A Family at War",
  "Vader's Castle"
);

console.log("The shelf object:", floatingShelf);

const filingCabinet = new Cabinet("black", 26, 18, "Snake plant", "Garfield");

console.log("The cabinet object:", filingCabinet);
