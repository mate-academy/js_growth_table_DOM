'use strict';

const MIN_SIZE = 2;
const MAX_SIZE = 10;

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const countRows = () => table.rows.length;
const countColumns = () => table.rows[0].cells.length;

const updateButtons = () => {
  appendRowButton.disabled = countRows() >= MAX_SIZE;
  removeRowButton.disabled = countRows() <= MIN_SIZE;
  appendColumnButton.disabled = countColumns() >= MAX_SIZE;
  removeColumnButton.disabled = countColumns() <= MIN_SIZE;
};

appendRowButton.addEventListener('click', () => {
  if (countRows() >= MAX_SIZE) {
    return;
  }

  const columns = countColumns();
  const row = table.insertRow();

  for (let i = 0; i < columns; i++) {
    row.insertCell();
  }

  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  if (countRows() <= MIN_SIZE) {
    return;
  }

  table.deleteRow(-1);
  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  if (countColumns() >= MAX_SIZE) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  if (countColumns() <= MIN_SIZE) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtons();
});

updateButtons();
