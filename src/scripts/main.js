'use strict';

// write code here
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

const justRows = () => tableBodyElement.rows;
const rowsCount = () => tableBodyElement.rows.length;
const cellsCount = () => tableBodyElement.rows[0].cells.length;

function disabledClass() {
  appendRow.disabled = rowsCount() >= MAX_ROWS;
  removeRow.disabled = rowsCount() <= MIN_ROWS;
  appendColumn.disabled = cellsCount() >= MAX_CELLS;
  removeColumn.disabled = cellsCount() <= MIN_CELLS;
}
disabledClass();

appendRow.addEventListener('click', (el) => {
  el.preventDefault();

  if (rowsCount() >= MAX_ROWS) {
    return;
  }

  const childTable = tableBodyElement.lastElementChild;

  tableBodyElement.appendChild(childTable.cloneNode(true));

  disabledClass();
});

removeRow.addEventListener('click', (el) => {
  el.preventDefault();

  if (rowsCount() <= MIN_ROWS) {
    return;
  }
  tableBodyElement.removeChild(tableBodyElement.lastElementChild);

  disabledClass();
});

appendColumn.addEventListener('click', (el) => {
  el.preventDefault();

  if (cellsCount() >= MAX_CELLS) {
    return;
  }

  [...justRows()].forEach((item) => {
    item.appendChild(item.lastElementChild.cloneNode(true));
  });
  disabledClass();
});

removeColumn.addEventListener('click', (el) => {
  el.preventDefault();

  if (cellsCount() <= MIN_CELLS) {
    return;
  }

  [...justRows()].forEach((item) => {
    item.removeChild(item.lastElementChild);
  });
  disabledClass();
});
