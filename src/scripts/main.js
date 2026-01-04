'use strict';

const body = document.querySelector('tbody');
const table = document.querySelector('.field');
const rows = table.rows;
const MAX = 10;
const MIN = 2;

const addRowButton = document.querySelector('.append-row');
const deleteRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const deleteColumnButton = document.querySelector('.remove-column');

const updateButton = () => {
  const rowsLength = rows.length;
  const columnsLength = rows[0].cells.length;

  addRowButton.disabled = rowsLength >= MAX;
  deleteRowButton.disabled = rowsLength <= MIN;
  addColumnButton.disabled = columnsLength >= MAX;
  deleteColumnButton.disabled = columnsLength <= MIN;
};

addRowButton.addEventListener('click', () => {
  if (rows.length >= MAX) {
    return;
  }

  const row = body.children[0].cloneNode(true);

  body.append(row);
  updateButton();
});

deleteRowButton.addEventListener('click', () => {
  if (rows.length <= MIN) {
    return;
  }

  body.deleteRow(-1);
  updateButton();
});

addColumnButton.addEventListener('click', () => {
  if (rows[0].cells.length >= MAX) {
    return;
  }

  for (const row of rows) {
    row.insertCell(-1);
  }
  updateButton();
});

deleteColumnButton.addEventListener('click', () => {
  if (rows[0].cells.length <= MIN) {
    return;
  }

  for (const row of rows) {
    row.deleteCell(-1);
  }
  updateButton();
});

updateButton();
