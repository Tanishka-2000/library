
let myLibrary = [];

// function Book(name, author, pages, readStatus, position){
//     this.name = name
//     this.author = author
//     this.pages = pages
//     this.readStatus = readStatus
//     this.position = position
// }
// //adding function to prototype
// Book.prototype.changeReadStatus = function(){
//     this.readStatus = !this.readStatus;
// }
// using classes instead of constructor function
class Book{
    constructor(name, author, pages, readStatus, position){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
        this.position = position;
    }
    changeReadStatus(){
        this.readStatus = !this.readStatus;
    }
}

// function to add a new book object to library
function addBookToLibrary(){

    // hide form and display books
    container.style.opacity = 1;
    form.style.display = "none";

    //making new book object and adding to array
    let book = new Book(title.value, author.value, pages.value, readStatus.checked, myLibrary.length);
    myLibrary.push(book);

    //after adding new book object to array
    addBook(book);
    // reseting value of inputs to null
    resetForm();
}

// function to show up form
function showForm(){
    container.style.opacity = 0;
    form.style.display = "block";
}

// function to delete card and book object
function deleteBook(e){
    let button = e.target.getAttribute("data-position") ? e.target: e.target.parentElement;
    let pos = button.getAttribute("data-position");

    myLibrary.splice(pos, 1);
    let cards = container.querySelectorAll(".card");
    container.removeChild(cards[pos]);
}

// function to change read status of book
function changeStatus(e){
    let button = e.target.getAttribute("data-position") ? e.target: e.target.parentElement;
    let pos = button.getAttribute("data-position");

    myLibrary[pos].changeReadStatus();
    let cards = container.querySelectorAll(".card");
    let paras = cards[pos].querySelectorAll("p");
    let rStatus = myLibrary[pos].readStatus ? "read" : "unread";
    paras[2].textContent = "Book: " + rStatus;
}

// function to add new card to the library
function addBook(book){
    // create div with card class
    let card = document.createElement("div");
    card.className = "card";
    // create h2 with book title as text
    let heading = document.createElement("h2");
    heading.appendChild(document.createTextNode(book.name));
    // append h2 to div.card
    card.appendChild(heading);

    // create p with book author as text
    let para = document.createElement("p");
    para.appendChild(document.createTextNode(`by ${book.author}`));
    // append p to div.card
    card.appendChild(para);

    // create p with book pages as text
    para = document.createElement("p");
    para.appendChild(document.createTextNode(`The book contains ${book.pages} pages`));
    // append p to div.card
    card.appendChild(para);

    // create p with book read status as text
    let rStatus = book.readStatus ? "read" : "unread";
    para = document.createElement("p");
    para.appendChild(document.createTextNode(`Book: ${rStatus}`));
    // append p to div.card
    card.appendChild(para);


    // create button to change book read status
    let changeButton = document.createElement("button");
    changeButton.setAttribute("data-position", book.position);
    changeButton.className = "change-button";
    changeButton.appendChild(document.createTextNode("Change read status"));
    let icon = document.createElement("span");
    icon.className = "material-symbols-outlined change";
    icon.appendChild(document.createTextNode("cached"));
    changeButton.appendChild(icon);
    // adding event listener
    changeButton.addEventListener("click",changeStatus);
    card.appendChild(changeButton);

    // create button to delete books
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("data-position", book.position);
    deleteButton.className = "del-button";
    deleteButton.appendChild(document.createTextNode("Delete"));
    icon = document.createElement("span");
    icon.className = "material-symbols-outlined delete";
    icon.appendChild(document.createTextNode("delete"))
    deleteButton.appendChild(icon);
    // adding event listener
    deleteButton.addEventListener("click", deleteBook);
    card.appendChild(deleteButton);

    // appending book to screen
    container.appendChild(card);
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
let cardDeleteButton = document.querySelectorAll(".del-button");
let changeStatusButton = document.querySelectorAll(".change-button");

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
