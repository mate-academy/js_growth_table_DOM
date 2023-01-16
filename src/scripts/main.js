'use strict';

// write code here
const table = document.querySelector('.field');
const rows = table.rows;

const addRowButton = document.querySelector('.append-row');
const addColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

addRowButton.addEventListener('click', (e) => {
  removeRowButton.disabled = false;
  table.append(rows[0].cloneNode(true));

  if (rows.length > 9) {
    e.target.disabled = true;
  }
});

removeRowButton.addEventListener('click', (e) => {
  addRowButton.disabled = false;
  rows[rows.length - 1].remove();

  if (rows.length <= 2) {
    e.target.disabled = true;
  }
});

addColumnButton.addEventListener('click', (e) => {
  removeColumnButton.disabled = false;

  for (const row of rows) {
    row.append(row.lastElementChild.cloneNode(false));
  }

  if (rows[0].childElementCount > 9) {
    e.target.disabled = true;
  }
});

removeColumnButton.addEventListener('click', (e) => {
  addColumnButton.disabled = false;

  for (const row of rows) {
    row.lastElementChild.remove();
  }

  if (rows[0].childElementCount < 3) {
    e.target.disabled = true;
  }
});
