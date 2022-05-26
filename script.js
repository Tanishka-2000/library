
let myLibrary = [];

function Book(name, author, pages, readStatus){
    this.name = name
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

// function to add a new book object to library
function addBookToLibrary(){

}

// function to show up form
function showForm(){

}

// function to delete card and book object
function deleteBook(){

}

// function to add new card to the library
function addCard(){

}

// buttons
let addButton = document.querySelector(".add-button");
let formSubmitButton = document.querySelector(".submit-form");
let cardDeleteButton = document.querySelector(".delete");

addButton.addEventListener("click", showForm);
formSubmitButton.addEventListener("click", addBookToLibrary);
cardDeleteButton.addEventListener("click", deleteBook);
