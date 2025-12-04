'use strict';

const table = document.querySelector('.field');
const tBody = table.querySelector('tbody');
const rows = tBody.rows;
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MAX_COUNT_ROWS_OR_COL = 10;
const MIN_COUNT_ROWS_OR_COL = 2;

let currentRowCount;
let currentColumnCount;

lengthCount();

addRowButton.addEventListener('click', () => {
  addRow();
});

removeRowButton.addEventListener('click', () => {
  removeRow();
});

addColumnButton.addEventListener('click', () => {
  addColumn();
});

removeColumnButton.addEventListener('click', () => {
  removeColumn();
});

function addColumn() {
  [...rows].forEach((element) => {
    const newTd = document.createElement('td');

    element.appendChild(newTd);
  });

  lengthCount();
}

function removeColumn() {
  [...rows].forEach((element) => {
    const cells = element.cells;

    const lastCell = cells[cells.length - 1];

    lastCell.remove();
  });

  lengthCount();
}

function addRow() {
  const tableRow = rows[0];
  const tableRowCope = tableRow.cloneNode(true);

  tBody.appendChild(tableRowCope);

  lengthCount();
}

function removeRow() {
  const row = tBody.lastElementChild;

  row.remove();

  lengthCount();
}

function lengthCount() {
  currentRowCount = rows.length;
  currentColumnCount = rows[0].cells.length;

  removeRowButton.disabled = currentRowCount <= MIN_COUNT_ROWS_OR_COL;
  addRowButton.disabled = currentRowCount >= MAX_COUNT_ROWS_OR_COL;

  removeColumnButton.disabled = currentColumnCount <= MIN_COUNT_ROWS_OR_COL;
  addColumnButton.disabled = currentColumnCount >= MAX_COUNT_ROWS_OR_COL;
}
