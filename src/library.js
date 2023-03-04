export class Book {
  constructor(id, title, author, isbn, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.pages = pages;
    this.read = read;
  }
}

export function getBooksFromLocalStorage() {
  let books = localStorage.getItem("books");
  if (books === null) {
    // creates an empty array on localstorage
    books = "[]";
    localStorage.setItem("books", books);
  }
  books = JSON.parse(books);
  return books;
}

//adding book
export function addBookToLocalStorage(book) {
  let books = getBooksFromLocalStorage();
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
}

export function updateBooksInLocalStorage(books) {
  localStorage.setItem("books", JSON.stringify(books));
}

export function removeBookFromLocalStorage(bookId) {
  let books = getBooksFromLocalStorage();
  books = books.filter(book => book.id !== bookId);
  updateBooksInLocalStorage(books);
}
