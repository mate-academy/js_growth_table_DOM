'use strict';

const tableBody = document.querySelector('.field').tBodies[0];
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
let rows = tableBody.children.length;
let columns = tableBody.firstElementChild.children.length;

appendRow.addEventListener('click', () => {
  tableBody.append(tableBody.firstElementChild.cloneNode(true));
  rows++;
  removeRow.disabled = false;

  if (rows === 10) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  tableBody.lastElementChild.remove();
  rows--;
  appendRow.disabled = false;

  if (rows === 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', ev => {
  const box = document.createElement('td');

  [...tableBody.children].forEach(row => row.append(box.cloneNode()));
  columns++;
  removeColumn.disabled = false;

  if (columns === 10) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', ev => {
  [...tableBody.children].forEach(row => row.lastElementChild.remove());
  columns--;
  appendColumn.disabled = false;

  if (columns === 2) {
    removeColumn.disabled = true;
  }
});
