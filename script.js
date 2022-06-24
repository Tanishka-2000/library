
let myLibrary = [];

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

function validateForm(){

    if(!title.checkValidity()){
        title.reportValidity();
        return false;
    }
    if(!author.checkValidity()){
        author.reportValidity();
        return false;
    }
    if(!pages.checkValidity()){
        pages.reportValidity();
        return false;
    }
    return true;
}

// function to add a new book object to library
function addBookToLibrary(){
    if(validateForm()){
        //making new book object and adding to array
        let book = new Book(title.value, author.value, pages.value, readStatus.checked, myLibrary.length);
        // clearing out screen
        cancelForm();
        myLibrary.push(book);

        //after adding new book object to array
        addBook(book);
    }
}

// function to show up form
function showForm(){
    container.style.opacity = 0;
    form.style.display = "block";
}
// function to cancel form
function cancelForm(){
    hideForm();
    resetForm();
}
// function to hide form
function hideForm(){
    container.style.opacity = 1;
    form.style.display = "none";
}
// function to return form to its initial state
function resetForm(){
    title.value = "";
    author.value = "";
    pages.value = "";
    readStatus.checked = false;
}
// function to delete card and book object
function deleteBook(e){
    let button = e.target.getAttribute("data-position") ? e.target: e.target.parentElement;
    let pos = button.getAttribute("data-position");
    let libPos;
    myLibrary.forEach((book, i) => {
        if(book.position === pos) libPos = i;
    });
    myLibrary.splice(libPos, 1);
    let cards = container.querySelectorAll(".card");
    container.removeChild(button.parentElement);
}

// function to change read status of book
function changeStatus(e){
    let button = e.target.getAttribute("data-position") ? e.target: e.target.parentElement;
    let pos = button.getAttribute("data-position");
    let changedBook;

    myLibrary.forEach(book => {
        if(pos == book.position){
            book.changeReadStatus();
            changedBook = book;
        }
    });
    let status = changedBook.readStatus ? 'read': 'unread';
    button.previousElementSibling.textContent = 'Book: ' + status;

}

// function to add new card to the library
function addBook(book){
    let newBook = template.content.cloneNode('true');
    // heading
    newBook.querySelector('h2').textContent = book.name;
    // paragraphs
    let paras = newBook.querySelectorAll('p');
    paras[0].textContent = `by ${book.author}`;
    paras[1].textContent = `contains ${book.pages} pages`;
    let status = book.readStatus ? 'read' : 'unread';
    paras[2].textContent = `Book: ${status}`;
    // buttons
    let btns = newBook.querySelectorAll('button');
    btns[0].setAttribute('data-position', book.position);
    btns[0].addEventListener('click',changeStatus);

    btns[1].setAttribute('data-position', book.position);
    btns[1].addEventListener('click',deleteBook);
    container.append(newBook);

}

// buttons
let addButton = document.querySelector(".add-book");
let formSubmitButton = document.querySelector(".submit-form");
let formCancelButton = document.querySelector(".cancel-form");

// adding event listeners to buttons
addButton.addEventListener("click", showForm);
formSubmitButton.addEventListener("click", addBookToLibrary);
formCancelButton.addEventListener("click", cancelForm);

// divs
let container = document.querySelector(".container");
let form = document.querySelector("form");
let template = document.querySelector("#book-template");

//inputs
let title = document.querySelector("[name='title']");
let author = document.querySelector("[name='author']");
let pages = document.querySelector("[name='pages']");
let readStatus = document.querySelector("[name='readStatus']");
