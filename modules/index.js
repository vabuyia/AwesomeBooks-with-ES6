import printTime from "./currentDate.js";
import Books from "./classBooks.js";
import navigation from "./navigation.js";

const list = document.querySelector('ul');
const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const modalContainer = document.querySelector('.modal-container');

const books = new Books();

function checkIfEmpty() {
  if (books.bookList.length !== 0) {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}

function addToLocalStorage(books) {
  localStorage.setItem('books', JSON.stringify(books));
}

function appendBooksToList() {
  list.innerHTML = '';
  books.bookList.forEach((book, index) => {
    const li = document.createElement('li');

    if (index % 2 === 1) {
      li.classList = 'bg-white';
    }

    li.innerHTML = `
    <p>"<span>${book.title}</span>" </p>
    <p>by ${book.author}</p>
    <button class="remove">Remove</button>
    `;
    list.appendChild(li);
  });
}

function updateDomAndLocalStorage() {
  appendBooksToList();
  localStorage.clear();
  addToLocalStorage(books);
  checkIfEmpty();
}

function removeBook() {
  const removeButtons = document.getElementsByClassName('remove');
  for (let i = 0; i < removeButtons.length; i += 1) {
    const button = removeButtons[i];
    button.addEventListener('click', (event) => {
      const element = event.target.parentElement.firstElementChild.firstElementChild.innerText;
      books.removeBooksFromList(element);
      updateDomAndLocalStorage();
      removeBook();
    });
  }
}

/* eslint max-classes-per-file: ["error", 2] */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function getFromLocalStorage() {
  if (localStorage.length !== 0) {
    const booksFromLocStg = JSON.parse(localStorage.getItem('books'));
    booksFromLocStg.bookList.forEach((book) => {
      books.bookList.push(book);
    });
    updateDomAndLocalStorage();
    removeBook();
  }
}

getFromLocalStorage();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newBook = new Book(title.value, author.value);
  title.value = '';
  author.value = '';
  books.addNewBook(newBook);
  updateDomAndLocalStorage();
  modalContainer.style.display = 'flex';
  setTimeout(() => {
    modalContainer.style.display = 'none';
  }, 2000);
  removeBook();
});

navigation();

setInterval(printTime, 1000);