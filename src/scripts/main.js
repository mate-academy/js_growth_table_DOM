'use strict';

// write code here
const MAX_LENGTH = 9;
const MAX_WIDTH = 9;
const MIN_LENGTH = 2;
const MIN_WIDTH = 2;

const table = document.querySelector('.field');
const rows = table.rows;

const addRowButton = document.querySelector('.append-row');
const addColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

addRowButton.addEventListener('click', (e) => {
  removeRowButton.disabled = false;
  table.append(rows[0].cloneNode(true));

  if (rows.length > MAX_LENGTH) {
    e.target.disabled = true;
  }
});

removeRowButton.addEventListener('click', (e) => {
  addRowButton.disabled = false;
  rows[rows.length - 1].remove();

  if (rows.length <= MIN_LENGTH) {
    e.target.disabled = true;
  }
});

addColumnButton.addEventListener('click', (e) => {
  removeColumnButton.disabled = false;

  for (const row of rows) {
    row.append(row.lastElementChild.cloneNode(false));
  }

  if (rows[0].childElementCount > MAX_WIDTH) {
    e.target.disabled = true;
  }
});

removeColumnButton.addEventListener('click', (e) => {
  addColumnButton.disabled = false;

  for (const row of rows) {
    row.lastElementChild.remove();
  }

  if (rows[0].childElementCount <= MIN_WIDTH) {
    e.target.disabled = true;
  }
});
