let myLibrary = [];
let index = 0;
const addNewBookBtn = document.querySelector('.new-book');
const addBookBtn = document.querySelector('.add-book');
const table = document.querySelector('tbody');

function Book(author, title, pages, read) {
  return {
    author, title, pages, read,
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayForm() {
  const form = document.querySelector('#form');
  form.style.display = 'block';
  addNewBookBtn.style.display = 'none';
}

function displayBookPage() {
  let text = '';

  let index = 0;
  for (let i = 0; i < myLibrary.length; i++) {
    index++;
    const book = myLibrary[i];
    text += `<tr data-index='${i}'>`;
    text += `<td>${book.author}</td>`;
    text += `<td>${book.title}</td>`;
    text += `<td>${book.pages}</td>`;
    text += `<td>${book.read}</td>`;
    text += `<td><button onclick='removeBook()' data-index='${i}' type='button' class='removeBtn'>X</button></td>`;
    text += '</tr>';
  }
  table.innerHTML = text;
}

function removeBook() {
  confirm('Are You Sure?');
  const removed = document.querySelector('#removed');
  removed.style.display = 'block';
  setTimeout(() => {
    removed.style.display = 'none';
  }, 1500);

  const rows = document.querySelectorAll('tr');
  rows.forEach((row) => row.addEventListener('click', (e) => {
    index = e.target.getAttribute('data-index');
    myLibrary.splice(index, 1);
    displayBookPage();
  }));
}

function addToBookInfo() {
  const author = document.querySelector('#author-text').value;
  const title = document.querySelector('#title-text').value;
  const pages = document.querySelector('#pages-text').value;
  const read = document.querySelector('input[type=radio]:checked').value;
  const form = document.querySelector('#form');

  form.style.display = 'none';
  addNewBookBtn.style.display = 'block';

  const added = document.querySelector('#added');
  added.style.display = 'block';
  setTimeout(() => {
    added.style.display = 'none';
  }, 1500);

  const book = Book(author, title, pages, read);
  addBookToLibrary(book);
  displayBookPage();
}

addNewBookBtn.addEventListener('click', displayForm);
addBookBtn.addEventListener('click', addToBookInfo);

myLibrary = [
  Book('Chinua Achebe', 'Things Fall Apart', 225, 'Yes'),
  Book('Elie Wiesel', 'Night', 116, 'No'),
  Book('Ola Rotimi', 'The Gods Are Not To Blame', 72, 'No'),
  Book('Keye Abiona', 'Even Kins Are Guilty', 85, 'Yes'),
];
displayBookPage();
