'use strict';

const rowPlus = document.querySelector('.append-row');
const rowMinus = document.querySelector('.remove-row');
const columnPlus = document.querySelector('.append-column');
const columnMinus = document.querySelector('.remove-column');
const field = document.querySelector('.field').firstElementChild;
const rowsCollection = document.getElementsByTagName('tr');
const columnsCollection = rowsCollection[0].children;

rowPlus.addEventListener('click', () => {
  rowMinus.disabled = false;

  if (rowsCollection.length >= 9) {
    rowPlus.setAttribute('disabled', '');
  }
  field.append(field.firstElementChild.cloneNode(true));
});

rowMinus.addEventListener('click', () => {
  rowPlus.disabled = false;

  if (rowsCollection.length <= 3) {
    rowMinus.setAttribute('disabled', '');
  }

  field.lastElementChild.remove();
});

columnPlus.addEventListener('click', () => {
  columnMinus.disabled = false;

  if (columnsCollection.length >= 9) {
    columnPlus.setAttribute('disabled', '');
  }

  [...field.children].forEach(item =>
    item.append(item.firstElementChild.cloneNode(true)));
});

columnMinus.addEventListener('click', () => {
  columnPlus.disabled = false;

  if (columnsCollection.length <= 3) {
    columnMinus.setAttribute('disabled', '');
  }

  [...field.children].forEach(item => item.lastElementChild.remove());
});
