import Book from "./Book.js";

//Book param order: title, fName, lName, pages, coverType
const sciFiBook = new Book(
  "Ahsoka", 
  "E. K.", 
  "Johnson", 
  356, 
  "hard"
);

const motivationalBook = new Book(
  "Start with Why",
  "Simon",
  "Sinek",
  233,
  "soft"
);

const processBook = new Book(
  "The Phoenix Project", 
  "Gene", 
  "Kim", 
  346, 
  "soft"
);

const leadershipBook = new Book(
  "Learning to Lead",
  "Ron",
  "Williams",
  312,
  "hard"
);

const handbook = new Book(
  "Pokemon Super Extra Deluxe Essential Handbook",
  "Scholastic",
  "Inc.",
  560,
  "soft"
);

console.log("The SciFi book object:", sciFiBook);
console.log("The motivational book object:", motivationalBook);
console.log("The process book object:", processBook);
console.log("The leadership book object:", leadershipBook);
console.log("The handbook object:", handbook);
