/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let shelf = [
  "book",
  "yoda",
  "castle",
  "picture",
  "mario",
  "bb",
  "thwomp",
  "soldier",
];

console.log(shelf);

shelf.unshift(shelf.pop());
console.log("Add last element as first item:", shelf);

shelf.pop();
console.log("Remove last element:", shelf);

let shortItem = shelf.find(function (item) {
  if (item.length < 3) return item;
});
console.log(`An element w/less than three charaters: ${shortItem}.`);

shelf.sort();
console.log("Sort alphabetically:", shelf);
