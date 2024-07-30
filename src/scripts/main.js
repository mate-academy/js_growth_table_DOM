'use strict';

const addRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const remColumn = document.querySelector('.remove-column');

const MAX_ROWS = 10;
const MAX_COLUMNS = 10;
const MIN_ROWS = 2;
const MIN_COLUMNS = 2;

const table = document.querySelector('.field');
let currentRows = table.rows.length;
let currentColumns = table.rows[0].cells.length;

addRow.addEventListener('click', () => {
  addNewRow();
});

remRow.addEventListener('click', () => {
  remNewRow();
});

addColumn.addEventListener('click', () => {
  addNewColumns();
});

remColumn.addEventListener('click', () => {
  remNewColumns();
});

function addNewRow() {
  if (currentRows < MAX_ROWS) {
    const newRow = table.insertRow();

    for (let i = 0; i < currentColumns; i++) {
      newRow.insertCell();
    }
  }

  currentRows++;
  updateButtonColor();
}

function remNewRow() {
  if (currentRows > MIN_ROWS) {
    table.deleteRow(-1);
  }

  currentRows--;
  updateButtonColor();
}

function addNewColumns() {
  if (currentColumns < MAX_COLUMNS) {
    for (const row of table.rows) {
      row.insertCell();
    }
  }

  currentColumns++;
  updateButtonColor();
}

function remNewColumns() {
  if (currentColumns > MIN_COLUMNS) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
  }

  currentColumns--;
  updateButtonColor();
}

function updateButtonColor() {
  addRow.disabled = currentRows === MAX_ROWS;
  remRow.disabled = currentRows <= MIN_ROWS;
  addColumn.disabled = currentColumns === MAX_COLUMNS;
  remColumn.disabled = currentColumns <= MIN_COLUMNS;
}
