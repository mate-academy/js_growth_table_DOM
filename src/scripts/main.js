/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
'use strict';

const MAX_ROWS = 10;
const MAX_COLS = 10;
const MIN_ROWS = 2;
const MIN_COLS = 2;

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

// no explicit tbody in index.html specified...
const field = document.querySelector('table.field tbody');

let currentNumRows = 0;
let currentNumCols = 0;

if (field) {
  currentNumRows = field.rows.length;
  currentNumCols = field.rows[0]?.cells?.length;
  addButtonEventListeners();
}

function addButtonEventListeners() {
  addRowButton.addEventListener('click', () => handleClick(addRow));
  addColumnButton.addEventListener('click', () => handleClick(addCol));
  removeRowButton.addEventListener('click', () => handleClick(removeRow));
  removeColumnButton.addEventListener('click', () => handleClick(removeCol));
}

function handleClick(callback) {
  callback();
  updateButtons();
}

function updateButtons() {
  addRowButton.disabled = currentNumRows >= MAX_ROWS;
  addColumnButton.disabled = currentNumCols >= MAX_COLS;
  removeRowButton.disabled = currentNumRows <= MIN_ROWS;
  removeColumnButton.disabled = currentNumCols <= MIN_COLS;
}

function addRow() {
  if (currentNumRows >= MAX_ROWS) {
    return;
  }

  const lastRow = field.rows[currentNumRows - 1].cloneNode(true);

  field.append(lastRow);
  currentNumRows++;
}

function removeRow() {
  if (currentNumRows <= MIN_ROWS) {
    return;
  }

  const lastRow = field.rows[currentNumRows - 1];

  lastRow.remove();
  currentNumRows--;
}

function addCol() {
  if (currentNumCols >= MAX_COLS) {
    return;
  }

  const cell = field.rows[0].cells[0];

  [...field.rows].forEach((row) => {
    const newCell = cell.cloneNode(true);

    row.appendChild(newCell);
  });
  currentNumCols++;
}

function removeCol() {
  if (currentNumCols <= MIN_COLS) {
    return;
  }

  const lastColCells = [...field.rows].map(
    (row) => row.cells[currentNumCols - 1],
  );

  lastColCells.forEach((cell) => {
    cell.remove();
  });

  currentNumCols--;
}
