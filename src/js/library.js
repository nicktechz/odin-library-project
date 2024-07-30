const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeForm");

const libraryBox = document.getElementById("books");
const addBookBtn = document.getElementById("addBook");
const bookNameInput = document.getElementById("bookName");
const bookAuthorInput = document.getElementById("bookAuthor");
const bookPagesInput = document.getElementById("bookPages");
const createBookBtn = document.getElementById("createBook");

const closeModal = () => {
  modal.style.display = "none";
};

closeBtn.addEventListener("click", () => {
  closeModal();
});
addBookBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.deleteBtn;
  this.isReadBtn;
}

const addBook = (arr, index) => {
  // EXTRACT DATA
  const title = arr[index].title;
  const isRead = arr[index].isRead;
  const author = arr[index].author;
  const pages = arr[index].pages;

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
  isReadBtn.classList.add("readBtn");
  deleteBtn.classList.add("deleteBtn");

  // ADD ATTRIBUTE

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

  deleteBtn.addEventListener("click", () => {
    const index = arr.findIndex((book) => book.title === title);
    removeBook(index);
    bookBox.remove();
  });

  isReadBtn.addEventListener("click", () => {
    const index = arr.findIndex((book) => book.title === title);
    toggleStatus(arr[index], bookStatus, isReadBtn);
  });
};

const toggleStatus = (book, bookStatus, isReadBtn) => {
  if (book.isRead === true) {
    book.isRead = false;
    bookStatus.textContent = "Not read";
    bookStatus.style.backgroundColor = "#b91c1c";
    isReadBtn.textContent = "Not read";
  } else {
    book.isRead = true;
    bookStatus.textContent = "Read";
    bookStatus.style.backgroundColor = "#3a9700";
    isReadBtn.textContent = "Read";
  }
};

const removeBook = (index) => {
  myLibrary.splice(index, 1);
};

function addBookToLibrary(obj) {
  const bookTitle = obj.title;
  myLibrary.push(obj);
  const index = myLibrary.findIndex((book) => book.title === bookTitle);
  addBook(myLibrary, index);
}

createBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(
    new Book(bookNameInput.value, bookAuthorInput.value, bookPagesInput.value)
  );
  closeModal();
});

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const elClubDeLas5Am = new Book(
  "El Club De las 5 Am",
  "Robin Sharma",
  400,
  true
);
addBookToLibrary(theHobbit);
addBookToLibrary(elClubDeLas5Am);

modal.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
