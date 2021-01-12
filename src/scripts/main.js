'use strict';

const tableBody = document.querySelector('.field').tBodies[0];
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
let rows = tableBody.children.length;
let columns = tableBody.firstElementChild.children.length;
const minSize = 2;
const maxSize = 10;

appendRow.addEventListener('click', () => {
  tableBody.append(tableBody.firstElementChild.cloneNode(true));
  rows++;
  removeRow.disabled = false;

  if (rows === maxSize) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  tableBody.lastElementChild.remove();
  rows--;
  appendRow.disabled = false;

  if (rows === minSize) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', ev => {
  const box = document.createElement('td');

  [...tableBody.children].forEach(row => row.append(box.cloneNode()));
  columns++;
  removeColumn.disabled = false;

  if (columns === maxSize) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', ev => {
  [...tableBody.children].forEach(row => row.lastElementChild.remove());
  columns--;
  appendColumn.disabled = false;

  if (columns === minSize) {
    removeColumn.disabled = true;
  }
});
