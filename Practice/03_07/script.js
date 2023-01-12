/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const shelf = {
  color: "wood stain",
  length: 42,
  width: 12,
  contents: {
    books: {
      bookOne: "Skywalker: A Family at War",
      bookTwo: "Ahsoka",
    },
    legoSets: {
      setOne: "Vader's Castle",
      setTwo: "Razorcrest",
    },
  },
};

const filingCabinet = {
  color: "black",
  length: 36,
  width: 18,
  onTop: {
    plant: "snake plant",
    picture: "Garfield",
  },
};
