function Book(title, author, pages, isRead) {
  this.info = function () {
    return console.log(
      `${title} by ${author}, ${pages}, ${isRead ? "read" : "not read yet"} `
    );
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", false);
theHobbit.info();
