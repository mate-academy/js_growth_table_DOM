'use strict';

// write code here
const table = document.querySelectorAll('.field tr');
let rowsCount = 4;
let columnCount = 4;

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

addRowButton.addEventListener('click', event => {
  document.querySelector('table tbody').append(table[0].cloneNode(true));
  rowsCount++;

  addRowButton.disabled = (rowsCount >= 10);
  removeRowButton.disabled = (rowsCount <= 2);
});

removeRowButton.addEventListener('click', event => {
  document.querySelector('table').lastElementChild.lastElementChild.remove();
  rowsCount--;

  addRowButton.disabled = (rowsCount >= 10);
  removeRowButton.disabled = (rowsCount <= 2);
});

addColumnButton.addEventListener('click', event => {
  columnCount++;

  document.querySelectorAll('.field tr').forEach((item, i) => {
    item.append(item.lastElementChild.cloneNode());
  });

  addColumnButton.disabled = (columnCount >= 10);
  removeColumnButton.disabled = (columnCount <= 2);
});

removeColumnButton.addEventListener('click', event => {
  columnCount--;

  document.querySelectorAll('.field tr').forEach(item => {
    item.lastElementChild.remove();
  });

  addColumnButton.disabled = (columnCount >= 10);
  removeColumnButton.disabled = (columnCount <= 2);
});
