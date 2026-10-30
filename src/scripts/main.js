'use strict';

const MAX_SIZE = 10;
const MIN_SIZE = 2;

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateButtons() {
  const rowsCount = table.rows.length;
  const columnsCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowsCount >= MAX_SIZE;
  removeRowButton.disabled = rowsCount <= MIN_SIZE;
  appendColumnButton.disabled = columnsCount >= MAX_SIZE;
  removeColumnButton.disabled = columnsCount <= MIN_SIZE;
}

appendRowButton.addEventListener('click', () => {
  const newRow = table.rows[table.rows.length - 1].cloneNode(true);

  table.rows[table.rows.length - 1].parentNode.append(newRow);

  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  table.rows[table.rows.length - 1].remove();

  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  for (const row of table.rows) {
    row.append(document.createElement('td'));
  }

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  for (const row of table.rows) {
    row.cells[row.cells.length - 1].remove();
  }

  updateButtons();
});

updateButtons();
