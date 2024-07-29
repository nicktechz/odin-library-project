const libraryBox = document.getElementById("books");

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  this.info = function () {
    return console.log(
      `${title} by ${author}, ${pages}, ${isRead ? "read" : "not read yet"} `
    );
  };
}

const addBook = (title, author, pages, isRead, id) => {
  const bookBox = document.createElement("div");
  const bookHeader = document.createElement("div");
  const bookTitleBox = document.createElement("div");
  const bookTitle = document.createElement("h3");
  const bookStatus = document.createElement("div");
  const bookAuthor = document.createElement("span");
  const bookFooter = document.createElement("div");
  const totalPages = document.createElement("span");
  const bookFooterBtnGroup = document.createElement("div");
  const isReadBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  // ADDED CLASSLIST
  bookBox.classList.add("book");
  bookHeader.classList.add("bookHeader");
  bookTitleBox.classList.add("bookTitle");
  bookStatus.classList.add("bookStatus");
  bookFooter.classList.add("bookFooter");
  bookFooterBtnGroup.classList.add("bookFooterBtnGroup");
  deleteBtn.classList.add("deleteBtn");

  // ADD ATTRIBUTE
  bookBox.setAttribute("data-content", id);

  // ADD TEXT
  bookTitle.textContent = title;
  bookStatus.textContent = isRead ? "Read" : "Not read";
  bookAuthor.textContent = author;
  totalPages.textContent = isRead
    ? `${pages} pages / ${pages} pages`
    : `0 pages / ${pages} pages`;
  isReadBtn.textContent = isRead ? "Not read" : "Read";
  deleteBtn.textContent = "Delete";
  bookStatus.style.backgroundColor = isRead ? "#3a9700" : "#b91c1c";

  // INSERT ELEMENTS
  libraryBox.append(bookBox);
  bookBox.append(bookHeader);
  bookHeader.append(bookTitleBox);
  bookTitleBox.append(bookTitle);
  bookTitleBox.append(bookStatus);
  bookHeader.append(bookAuthor);
  bookBox.append(bookFooter);
  bookFooter.append(totalPages);
  bookFooter.append(bookFooterBtnGroup);
  bookFooterBtnGroup.append(isReadBtn);
  bookFooterBtnGroup.append(deleteBtn);
};

function addBookToLibrary(obj) {
  const bookTitle = obj.title;
  const bookAuthor = obj.author;
  const bookPages = obj.pages;
  const isRead = obj.isRead;
  const id = obj.id;
  myLibrary.push(obj);
  addBook(bookTitle, bookAuthor, bookPages, isRead, id);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const elClubDeLas5Am = new Book(
  "El Club De las 5 Am",
  "Robin Sharma",
  400,
  true
);
addBookToLibrary(theHobbit);
addBookToLibrary(elClubDeLas5Am);

console.log(myLibrary);
theHobbit.info();
