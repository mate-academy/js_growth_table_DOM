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

  if (currentColumnCount >= MAX_COUNT_ROWS_OR_COL) {
    addColumnButton.disabled = true;
  }

  if (currentColumnCount > MIN_COUNT_ROWS_OR_COL) {
    removeColumnButton.disabled = false;
  }
}

function removeColumn() {
  [...rows].forEach((element) => {
    const cells = element.cells;

    const lastCell = cells[cells.length - 1];

    lastCell.remove();
  });

  lengthCount();

  if (currentColumnCount <= MIN_COUNT_ROWS_OR_COL) {
    removeColumnButton.disabled = true;
  }

  if (currentColumnCount < MAX_COUNT_ROWS_OR_COL) {
    addColumnButton.disabled = false;
  }
}

function addRow() {
  const tableRow = rows[0];
  const tableRowCope = tableRow.cloneNode(true);

  tBody.appendChild(tableRowCope);

  lengthCount();

  if (currentRowCount >= MAX_COUNT_ROWS_OR_COL) {
    addRowButton.disabled = true;
  }

  if (currentColumnCount > MIN_COUNT_ROWS_OR_COL) {
    removeRowButton.disabled = false;
  }
}

function removeRow() {
  const row = tBody.lastElementChild;

  row.remove();

  lengthCount();

  if (currentRowCount <= MIN_COUNT_ROWS_OR_COL) {
    removeRowButton.disabled = true;
  }

  if (currentRowCount < MAX_COUNT_ROWS_OR_COL) {
    addRowButton.disabled = false;
  }
}

function lengthCount() {
  currentRowCount = rows.length;
  currentColumnCount = rows[0].cells.length;
}
