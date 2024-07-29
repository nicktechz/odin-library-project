const libraryBox = document.getElementById("books");

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
  bookBox.setAttribute("data-content", index);

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
    console.log(myLibrary);
    arr.splice(index, 1);

    bookBox.remove();
  });
  isReadBtn.addEventListener("click", () => {
    toggleStatus(
      arr[index].isRead,
      isReadBtn,
      bookStatus,
      index,
      pages,
      totalPages
    );
  });
};

const toggleStatus = (
  currStatus,
  isReadBtn,
  bookStatus,
  index,
  pages,
  totalPages
) => {
  if (currStatus === true) {
    myLibrary[index].isRead = false;
    isReadBtn.textContent = "Read";
    bookStatus.style.backgroundColor = "#b91c1c";
    bookStatus.textContent = "Not read";
    totalPages.textContent = `0 pages / ${pages} pages`;
  } else {
    myLibrary[index].isRead = true;
    isReadBtn.textContent = "Not read";
    bookStatus.style.backgroundColor = "#3a9700";
    bookStatus.textContent = "Read";
    totalPages.textContent = `${pages} pages / ${pages} pages`;
  }
};

function addBookToLibrary(obj) {
  const bookTitle = obj.title;
  myLibrary.push(obj);
  const index = myLibrary.findIndex((book) => book.title === bookTitle);
  addBook(myLibrary, index);
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
