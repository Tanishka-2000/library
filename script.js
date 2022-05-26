
let myLibrary = [];

function Book(name, author, pages, readStatus){
    this.name = name
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

// function to add a new book object to library
function addBookToLibrary(){
    container.style.opacity = 1;
    form.style.display = "none";

    //after adding new book object to array
    addCard();
}

// function to show up form
function showForm(){
    container.style.opacity = 0;
    form.style.display = "block";
}

// function to delete card and book object
function deleteBook(){

}

// function to add new card to the library
function addCard(){

}

// buttons
let addButton = document.querySelector(".add-book");
let formSubmitButton = document.querySelector(".submit-form");
let cardDeleteButton = document.querySelectorAll(".delete");

// adding event listeners to buttons
addButton.addEventListener("click", showForm);
formSubmitButton.addEventListener("click", addBookToLibrary);

for (let i = 0; i < cardDeleteButton.length; i++) {
    cardDeleteButton[i].addEventListener("click", deleteBook);
}

// divs
let container = document.querySelector(".container");
let form = document.querySelector("form");
