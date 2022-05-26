
let myLibrary = [];

function Book(name, author, pages, readStatus){
    this.name = name
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}
//adding function to prototype
Book.prototype.changeReadStatus = function(){
    if(this.readStatus === "read"){
        this.readStatus = "unread";
    }else{
        this.readStatus = "read";
    }
}

// function to add a new book object to library
function addBookToLibrary(){
    resetForm();
    container.style.opacity = 1;
    form.style.display = "none";

    //making new book object and adding to array
    let book = new Book(title.value, author.value, pages.value, readStatus.value);
    library.push(book);

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
// function to return form to its initial state
function resetForm(){
    title.value = "";
    author.value = "";
    pages.value = "";
    readStatus.value = "";
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

//inputs
let title = document.querySelector("[name='title']");
let author = document.querySelector("[name='author']");
let pages = document.querySelector("[name='pages']");
let readStatus = document.querySelector("[name='readStatus']");
