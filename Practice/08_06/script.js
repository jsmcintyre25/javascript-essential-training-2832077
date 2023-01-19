/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

import Book from "./Book.js";

const processBook = new Book("The Phoenix Project", "Gene", "Kim", 346, "soft");
console.log(`processBook object: ${processBook}`);

function bookArticle(book) {
  let bookHTML = `
        <h1>${book.title}</h1>
        <h2>By: ${book.author.firstName} ${book.author.lastName}</h2>
        <p>Pages: ${book.pages}</p>
        <p>Cover: ${book.coverType}</p>
    `;
  return bookHTML;
}

var nextBook = bookArticle(processBook);
console.log(nextBook);

function addBook(bookInfo) {
  const main = document.querySelector("main");
  let newBook = document.createElement("article");
  newBook.innerHTML = bookInfo;
  main.append(newBook);
}

addBook(nextBook);
