class Cabinet {
  constructor(color, length, width, plantName, pictureType) {
    this.color = color;
    this.length = length;
    this.width = width;
    this.onTop = {
      plant: plantName,
      picture: pictureType,
    };
  }
}

export default Cabinet;
