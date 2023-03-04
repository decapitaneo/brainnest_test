/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Book\": () => (/* binding */ Book),\n/* harmony export */   \"addBookToLocalStorage\": () => (/* binding */ addBookToLocalStorage),\n/* harmony export */   \"getBooksFromLocalStorage\": () => (/* binding */ getBooksFromLocalStorage),\n/* harmony export */   \"removeBookFromLocalStorage\": () => (/* binding */ removeBookFromLocalStorage),\n/* harmony export */   \"updateBooksInLocalStorage\": () => (/* binding */ updateBooksInLocalStorage)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Book = /*#__PURE__*/_createClass(function Book(id, title, author, isbn, pages, read) {\n  _classCallCheck(this, Book);\n  this.id = id;\n  this.title = title;\n  this.author = author;\n  this.isbn = isbn;\n  this.pages = pages;\n  this.read = read;\n});\nfunction getBooksFromLocalStorage() {\n  var books = localStorage.getItem(\"books\");\n  if (books === null) {\n    // creates an empty array on localstorage\n    books = \"[]\";\n    localStorage.setItem(\"books\", books);\n  }\n  books = JSON.parse(books);\n  return books;\n}\n\n//adding book\nfunction addBookToLocalStorage(book) {\n  var books = getBooksFromLocalStorage();\n  books.push(book);\n  localStorage.setItem(\"books\", JSON.stringify(books));\n}\nfunction updateBooksInLocalStorage(books) {\n  localStorage.setItem(\"books\", JSON.stringify(books));\n}\nfunction removeBookFromLocalStorage(bookId) {\n  var books = getBooksFromLocalStorage();\n  books = books.filter(function (book) {\n    return book.id !== bookId;\n  });\n  updateBooksInLocalStorage(books);\n}\n\n//# sourceURL=webpack://my_app/./src/library.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addingBookToLibrary\": () => (/* binding */ addingBookToLibrary),\n/* harmony export */   \"changeBookReadStatus\": () => (/* binding */ changeBookReadStatus),\n/* harmony export */   \"deleteBookFromLibrary\": () => (/* binding */ deleteBookFromLibrary),\n/* harmony export */   \"loadLibraryIntoDiv\": () => (/* binding */ loadLibraryIntoDiv)\n/* harmony export */ });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/library.js\");\n\nfunction addingBookToLibrary() {\n  var bookId = Math.floor(Math.random() * 100000000);\n  var title = document.querySelector(\"[data-title]\").value;\n  var author = document.querySelector(\"[data-author]\").value;\n  var isbn = document.querySelector(\"[data-isbn]\").value;\n  var pages = document.querySelector(\"[data-pages]\").value;\n  var read = document.querySelector(\"[data-read]\").value;\n  if (title === \"\") {\n    document.getElementById(\"titleValidation\").innerHTML = \"Please fill in the tittle\";\n  } else if (author === \"\") {\n    document.getElementById(\"authorValidation\").innerHTML = \"Please fill in the author\";\n  } else if (isbn === \"\") {\n    document.getElementById(\"isbnValidation\").innerHTML = \"Please fill in the isbn\";\n  } else if (pages === \"\") {\n    document.getElementById(\"pagesValidation\").innerHTML = \"Please fill in the pages\";\n  } else {\n    var book = new _library__WEBPACK_IMPORTED_MODULE_0__.Book(bookId, title, author, isbn, pages, read);\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.addBookToLocalStorage)(book);\n    loadLibraryIntoDiv();\n    showAlert(\"Book registered with success!\");\n\n    //clear fields after \n    document.getElementById('title').value = '';\n    document.getElementById('author').value = '';\n    document.getElementById('isbn').value = '';\n    document.getElementById('pages').value = '';\n  }\n}\nfunction loadLibraryIntoDiv() {\n  var libraryDiv = document.querySelector(\"[data-library]\");\n  libraryDiv.innerHTML = \"\";\n  var myLibrary = (0,_library__WEBPACK_IMPORTED_MODULE_0__.getBooksFromLocalStorage)();\n  myLibrary.forEach(function (book) {\n    var bookDiv = document.createElement(\"div\");\n    bookDiv.classList.add(\"book\");\n    var bookReadButton = book.read === \"Yes\" ? \"Mark as not read\" : \"Mark as read\";\n    bookDiv.innerHTML = \"\\n            <h2>\".concat(book.title, \"</h2>\\n            <p>\").concat(book.author, \"</p>\\n            <p>\").concat(book.isbn, \"</p>\\n            <p>\").concat(book.pages, \"</p>\\n            <p>\").concat(book.read, \"</p>\\n            <button class=\\\"read\\\" type=\\\"button\\\" data-read data-id=\\\"\").concat(book.id, \"\\\" onclick=\\\"changeBookReadStatus(\").concat(book.id, \")\\\">\").concat(bookReadButton, \"</button>\\n            <button class=\\\"delete\\\" type=\\\"button\\\" data-delete data-id=\\\"\").concat(book.id, \"\\\" onclick=\\\"deleteBookFromLibrary(\").concat(book.id, \")\\\">Delete</button>\\n\\n        \");\n    libraryDiv.appendChild(bookDiv);\n  });\n}\nfunction changeBookReadStatus(bookId) {\n  var myLibrary = (0,_library__WEBPACK_IMPORTED_MODULE_0__.getBooksFromLocalStorage)();\n  var bookIndex = myLibrary.findIndex(function (b) {\n    return b.id === bookId;\n  });\n  myLibrary[bookIndex].read = myLibrary[bookIndex].read === \"Yes\" ? \"No\" : \"Yes\";\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.updateBooksInLocalStorage)(myLibrary);\n  loadLibraryIntoDiv();\n  showAlert(\"Status changed successfully!\");\n}\n\n// When the delete button from a book is clicked, the book is deleted from the library\nfunction deleteBookFromLibrary(bookId) {\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.removeBookFromLocalStorage)(bookId);\n  loadLibraryIntoDiv();\n  showAlert(\"Book deleted successfully!\");\n}\n\n//alert message\nfunction showAlert(text) {\n  var validationMessage = document.getElementById(\"message\");\n  validationMessage.innerHTML = text;\n}\nfunction loadPage() {\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.getBooksFromLocalStorage)();\n  loadLibraryIntoDiv();\n}\n__webpack_require__.g.loadLibraryIntoDiv = loadLibraryIntoDiv;\n__webpack_require__.g.changeBookReadStatus = changeBookReadStatus;\n__webpack_require__.g.deleteBookFromLibrary = deleteBookFromLibrary;\nvar form = document.querySelector(\"[data-form]\");\nform.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n  addingBookToLibrary();\n});\nloadPage();\n\n//# sourceURL=webpack://my_app/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;