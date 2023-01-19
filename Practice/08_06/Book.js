class Book {
  constructor(title, fName, lName, pages, coverType) {
    this.title = title;
    this.author = {
      firstName: fName,
      lastName: lName,
    };
    this.pages = pages;
    this.coverType = coverType;
  }
  updateCoverType(coverStatus) {
    this.coverType = coverStatus;
  }
}

export default Book;
