'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tableBodyElement = table.querySelector('tbody');

const MIN_ROWS = 2;
const MAX_ROWS = 10;
const MIN_CELLS = 2;
const MAX_CELLS = 10;

const rowsCount = () => tableBodyElement.rows.length;
const colsCount = () => tableBodyElement.rows[0].cells.length;

function updateButtons() {
  appendRow.disabled = rowsCount() >= MAX_ROWS;
  removeRow.disabled = rowsCount() <= MIN_ROWS;
  appendColumn.disabled = colsCount() >= MAX_CELLS;
  removeColumn.disabled = colsCount() <= MIN_CELLS;
}

appendRow.addEventListener('click', (e) => {
  e.preventDefault();

  if (rowsCount() >= MAX_ROWS) {
    return;
  }

  const tableRow = tableBodyElement.lastElementChild;

  tableBodyElement.appendChild(tableRow.cloneNode(true));
  updateButtons();
});

removeRow.addEventListener('click', (e) => {
  e.preventDefault();

  if (rowsCount() <= MIN_ROWS) {
    return;
  }
  tableBodyElement.removeChild(tableBodyElement.lastElementChild);
  updateButtons();
});

appendColumn.addEventListener('click', (e) => {
  e.preventDefault();

  if (colsCount() >= MAX_CELLS) {
    return;
  }

  [...tableBodyElement.rows].forEach((item) => {
    item.appendChild(item.lastElementChild.cloneNode(true));
  });
  updateButtons();
});

removeColumn.addEventListener('click', (e) => {
  e.preventDefault();

  if (colsCount() <= MIN_CELLS) {
    return;
  }

  [...tableBodyElement.rows].forEach((item) => {
    item.removeChild(item.lastElementChild);
  });
  updateButtons();
});
