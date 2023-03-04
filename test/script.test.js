import { addBookToLocalStorage, Book, getBooksFromLocalStorage, removeBookFromLocalStorage, updateBooksInLocalStorage } from "../src/library";

describe("Book", () => {
  //Runs a function before any of the tests in this file run.
  beforeAll(() => {
    let localstorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn()
    };
    global.localStorage = localstorage;
  });

  afterAll(() => {
    // Restore the original localStorage object after all tests have run
    global.localStorage = window.localStorage;
  });

  test("should create a new Book instance", () => {
    const book = new Book(1, "Title", "Author", "1234567890", 200, "Yes");
    expect(book).toBeDefined();
    expect(book.id).toEqual(1);
    expect(book.title).toEqual("Title");
    expect(book.author).toEqual("Author");
    expect(book.isbn).toEqual("1234567890");
    expect(book.pages).toEqual(200);
    expect(book.read).toEqual("Yes");
  });
});

describe("getBooksFromLocalStorage", () => {
  test("should return an empty array if local storage is empty", () => {
    localStorage.clear();
    const books = getBooksFromLocalStorage();
    expect(books).toEqual([]);
  });

  test("should return an array of books from local storage", () => {
    const book1 = new Book(1, "Title 1", "Author 1", "1234567890", 200, "Yes");
    const book2 = new Book(2, "Title 2", "Author 2", "0987654321", 300, "No");
    localStorage.setItem("books", JSON.stringify([book1, book2]));
    const books = getBooksFromLocalStorage();
    expect(books).toEqual([book1, book2]);
  });
});

describe("addBookToLocalStorage", () => {
  test("should add a book to local storage", () => {
    localStorage.clear();
    const book = new Book(1, "Title", "Author", "1234567890", 200, "Yes");
    addBookToLocalStorage(book);
    const books = JSON.parse(localStorage.getItem("books"));
    expect(books).toEqual([book]);
  });
});

describe("updateBooksInLocalStorage", () => {
  test("should update the books in local storage", () => {
    const book1 = new Book(1, "Title 1", "Author 1", "1234567890", 200, "Yes");
    const book2 = new Book(2, "Title 2", "Author 2", "0987654321", 300, "No");
    localStorage.setItem("books", JSON.stringify([book1]));
    updateBooksInLocalStorage([book2]);
    const books = JSON.parse(localStorage.getItem("books"));
    expect(books).toEqual([book2]);
  });
});

describe("removeBookFromLocalStorage", () => {
  test("should remove a book from local storage", () => {
    const book1 = new Book(1, "Title 1", "Author 1", "1234567890", 200, "Yes");
    const book2 = new Book(2, "Title 2", "Author 2", "0987654321", 300, "No");
    localStorage.setItem("books", JSON.stringify([book1, book2]));
    removeBookFromLocalStorage(1);
    const books = JSON.parse(localStorage.getItem("books"));
    expect(books).toEqual([book2]);
  });
});
