class Shelf {
  constructor(color, length, width, bookName, legoSet) {
    this.color = color;
    this.length = length;
    this.width = width;
    this.contents = {
      book: bookName,
      toy: legoSet,
    };
  }
}

export default Shelf;
