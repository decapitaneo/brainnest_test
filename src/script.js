import { addBookToLocalStorage, Book, getBooksFromLocalStorage, removeBookFromLocalStorage, updateBooksInLocalStorage } from "./library";

export function addingBookToLibrary(){
    const bookId = Math.floor(Math.random() * 100000000);
    const title = document.querySelector("[data-title]").value;
    const author = document.querySelector("[data-author]").value;
    const isbn = document.querySelector("[data-isbn]").value;
    const pages = document.querySelector("[data-pages]").value;
    const read = document.querySelector("[data-read]").value;
    
    if(title === ""){
        document.getElementById("titleValidation").innerHTML = "Please fill in the tittle";
        
    }else if(author === ""){
        document.getElementById("authorValidation").innerHTML = "Please fill in the author";
        
    }else if(isbn === ""){
        document.getElementById("isbnValidation").innerHTML = "Please fill in the isbn";
    
    }else if(pages === ""){
        document.getElementById("pagesValidation").innerHTML = "Please fill in the pages";
        
    }else {
        // Create a new book
        const book = new Book(bookId, title, author, isbn, pages, read);
        // Add the book to the library
        addBookToLocalStorage(book);
        // Load the library into the div
        loadLibraryIntoDiv();
        showAlert("Book registered with success!")
        
        //clear fields after 
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
        document.getElementById('pages').value = '';
    }
}

export function loadLibraryIntoDiv() {
    const libraryDiv = document.querySelector("[data-library]");
    // The library div is emptied before adding the books
    libraryDiv.innerHTML = "";
    let myLibrary = getBooksFromLocalStorage();
    // For each book in the library, a div is created and the book information is added to it
    myLibrary.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        const bookReadButton = book.read === "Yes" ? "Mark as not read" : "Mark as read";
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.isbn}</p>
            <p>${book.pages}</p>
            <p>${book.read}</p>
            <button class="read" type="button" data-read data-id="${book.id}" onclick="changeBookReadStatus(${book.id})">${bookReadButton}</button>
            <button class="delete" type="button" data-delete data-id="${book.id}" onclick="deleteBookFromLibrary(${book.id})">Delete</button>

        `;
        // The div is added to the library div
        libraryDiv.appendChild(bookDiv);
    });
}

// When the read button from a book is clicked, the book read status is changed
export function changeBookReadStatus(bookId) {
    let myLibrary = getBooksFromLocalStorage();
    // Find the book in the library by filtering the books by id
    const bookIndex = myLibrary.findIndex((b) => b.id === bookId);
    // Change the read status of the book
    myLibrary[bookIndex].read = myLibrary[bookIndex].read === "Yes" ? "No" : "Yes";
    // Update the library in local storage by replacing the old library with the new one
    updateBooksInLocalStorage(myLibrary)
    // Load the library into the div
    loadLibraryIntoDiv();
    showAlert("Status changed successfully!")
}

// When the delete button from a book is clicked, the book is deleted from the library
export function deleteBookFromLibrary(bookId) {
    // Remove the book from local storage by filtering the books by id and updating the library
    removeBookFromLocalStorage(bookId)
    // Load the library into the div
    loadLibraryIntoDiv();
    showAlert("Book deleted successfully!")
}

//alert message
function showAlert(text){
    let validationMessage = document.getElementById("message");
    validationMessage.innerHTML = text;   
}

// When the page loads, the library is loaded from local storage
function loadPage() {
    getBooksFromLocalStorage();
    loadLibraryIntoDiv();
}

// Expose functions to global scope so they can be called from the browser
global.loadLibraryIntoDiv = loadLibraryIntoDiv;
global.changeBookReadStatus = changeBookReadStatus;
global.deleteBookFromLibrary = deleteBookFromLibrary;

const form = document.querySelector("[data-form]");

// When the form is submitted, a new book is created
form.addEventListener("submit", (e) => {
    // Prevents the page from reloading
    e.preventDefault();
    // Creates a new book
    addingBookToLibrary();
})
// When the page loads, the library is loaded from local storage
loadPage();