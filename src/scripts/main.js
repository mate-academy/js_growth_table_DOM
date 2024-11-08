'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const remColumn = document.querySelector('.remove-column');
const firstRow = table.rows[0];

function updateButtonState() {
  addRow.disabled = !canAddRow();
  remRow.disabled = !canRemRow();
  addColumn.disabled = !canAddColumn();
  remColumn.disabled = !canRemColumn();
}

function canAddRow() {
  return table.rows.length < 10;
}

function canRemRow() {
  return table.rows.length > 2;
}

function canAddColumn() {
  return table.rows[0].cells.length < 10;
}

function canRemColumn() {
  return table.rows[0].cells.length > 2;
}

addRow.addEventListener('click', () => {
  if (canAddRow()) {
    const row = table.insertRow();

    for (let i = 0; i < firstRow.cells.length; i++) {
      row.insertCell(i);
    }
    updateButtonState();
  }
});

remRow.addEventListener('click', () => {
  if (canRemRow()) {
    table.deleteRow(table.rows.length - 1);
    updateButtonState();
  }
});

addColumn.addEventListener('click', () => {
  if (canAddColumn()) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].insertCell(-1);
    }
    updateButtonState();
  }
});

remColumn.addEventListener('click', () => {
  if (canRemColumn()) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
    updateButtonState();
  }
});

updateButtonState();
