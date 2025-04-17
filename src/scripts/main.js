'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MAX_SIZE = 10;
const MIN_SIZE = 2;

function getRowCount() {
  return table.rows?.length || 0;
}

function getColCount() {
  return table.rows[0]?.cells.length || 0;
}

function updateButtonState() {
  appendRow.disabled = getRowCount() >= MAX_SIZE;
  removeRow.disabled = getRowCount() <= MIN_SIZE;
  appendColumn.disabled = getColCount() >= MAX_SIZE;
  removeColumn.disabled = getColCount() <= MIN_SIZE;
}

appendRow.addEventListener('click', () => {
  if (getRowCount() < MAX_SIZE) {
    const newRow = table.insertRow();

    for (let i = 0; i < getColCount(); i++) {
      newRow.insertCell();
    }
  }

  updateButtonState();
});

removeRow.addEventListener('click', () => {
  if (getRowCount() > MIN_SIZE) {
    table.deleteRow(getRowCount() - 1);
  }

  updateButtonState();
});

appendColumn.addEventListener('click', () => {
  if (getColCount() < MAX_SIZE) {
    [...table.rows].forEach((row) => row.insertCell());
  }

  updateButtonState();
});

removeColumn.addEventListener('click', () => {
  if (getColCount() > MIN_SIZE) {
    [...table.rows].forEach((row) => row.deleteCell(getColCount() - 1));
  }

  updateButtonState();
});
