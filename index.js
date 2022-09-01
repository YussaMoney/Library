let myLibrary = [];
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const read = document.querySelector('input[type=checkbox]:checked'); 
const addNewBookBtn = document.querySelector('.new-book');
const addBookBtn = document.querySelector('.add-book');
const table = document.querySelector('tbody');

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayForm() {
  let form = document.querySelector('#form');
  form.style.display = 'block';
}

function displayBookPage() {
  row = table.insertRow();

  for (const key in myLibrary.at(-1)) {
    const value = myLibrary.at(-1)[key];
    let cell = row.insertCell();
    cell.innerHTML = value;
  }

  let cell = row.insertCell();
  let removeBtn = document.createElement('button');
  removeBtn.innerText = 'X'
  removeBtn.setAttribute('style', 
                                  `font-size: 1rem; 
                                  background-color: red; 
                                  padding: 0.2rem 1.3rem 0; 
                                  font-weight: bolder; cursor: pointer;`);
  

  function removeBook() {
    confirm('Are You Sure?');
    let removed =  document.querySelector('#removed');
    removed.style.display = 'block';
    setTimeout(() => {
      removed.style.display = 'none';
    }, 1500);
    row.remove();
  }

  removeBtn.addEventListener('click', removeBook);
  cell.appendChild(removeBtn);
}

function addToBookInfo() {
  
  let author = document.querySelector('#author');
  let title = document.querySelector('#title');
  let pages = document.querySelector('#pages');
  let read = document.querySelector('input[type=checkbox]:checked'); 
  let form = document.querySelector('#form');
  
  author = author.value;
  title = title.value;
  pages = pages.value;
  read = read.value;

  form.style.display = 'none';
  form.reset();

  let added =  document.querySelector('#added');
  added.style.display = 'block';
  setTimeout(() => {
    added.style.display = 'none';
  }, 2500);

  let book = new Book(author, title, pages, read);
  setTimeout(() => {
    addBookToLibrary(book);
    displayBookPage()
  }, 3000);
}

addNewBookBtn.addEventListener('click', displayForm);
addBookBtn.addEventListener('click', addToBookInfo);

let book1 = new Book('Chinua Achebe', 'Things Fall Apart', 225, 'Yes');
addBookToLibrary(book1);
displayBookPage()

let book2 = new Book('Elie Wiesel', 'Night', 116, 'No');
addBookToLibrary(book2);
displayBookPage()

let book3 = new Book('Ola Rotimi', 'The Gods Are Not To Blame', 72, 'No');
addBookToLibrary(book3);
displayBookPage()

let book4 = new Book('Keye Abiona', 'Even Kins Are Guilty', 85, 'Yes');
addBookToLibrary(book4);
displayBookPage()

