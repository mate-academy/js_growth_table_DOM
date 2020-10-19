'use strict';

const tableBody = document.querySelector('.field').tBodies[0];

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const maxLength = 10;
const minLength = 2;

addRowButton.addEventListener('click', (event) => {
  const row = document.createElement('tr');

  for (let i = 0; i < tableBody.rows[0].cells.length; i++) {
    row.append(document.createElement('td'));
  }

  tableBody.append(row);
  removeRowButton.disabled = false;

  if (tableBody.rows.length >= maxLength) {
    addRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', (event) => {
  tableBody.removeChild(tableBody.lastElementChild);
  addRowButton.disabled = false;

  if (tableBody.rows.length <= minLength) {
    removeRowButton.disabled = true;
  }
});

addColumnButton.addEventListener('click', (event) => {
  for (const row of tableBody.rows) {
    row.append(document.createElement('td'));
  }

  removeColumnButton.disabled = false;

  if (tableBody.rows[0].cells.length >= maxLength) {
    addColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', (event) => {
  for (const row of tableBody.rows) {
    row.removeChild(row.lastElementChild);
  }

  addColumnButton.disabled = false;

  if (tableBody.rows[0].cells.length <= minLength) {
    removeColumnButton.disabled = true;
  }
});
