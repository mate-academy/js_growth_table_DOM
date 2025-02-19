'use strict';
// eslint-disable-next-line

const table = document.querySelector('table');
const buttonRemoveColumn = document.querySelector('.remove-column');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');

function ensureTbodyExists() {
  if (!table.querySelector('tbody')) {
    const tbody = document.createElement('tbody');

    table.appendChild(tbody);

    const rows = [...table.rows];

    rows.forEach((row, index) => {
      if (index > 0) {
        tbody.appendChild(row);
      }
    });
  }
}

function appendColumn() {
  ensureTbodyExists();

  [...table.rows].forEach((row, index) => {
    row.insertCell();
  });

  updateButtonsState();
}

function appendRow() {
  ensureTbodyExists();

  const newRow = table.querySelector('tbody').insertRow();
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    newRow.insertCell();
  }

  updateButtonsState();
}

function removeColumn() {
  [...table.rows].forEach((row, index) => {
    if (row.cells.length > 2) {
      row.deleteCell(row.cells.length - 1);
    }
  });

  updateButtonsState();
}

function removeRow() {
  if (table.rows.length > 2) {
    table.deleteRow(table.rows.length - 1);
  }
  updateButtonsState();
}

function updateButtonsState() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  buttonRemoveRow.disabled = rowCount <= 2;
  buttonAppendRow.disabled = rowCount >= 10;

  buttonRemoveColumn.disabled = columnCount <= 2;
  buttonAppendColumn.disabled = columnCount >= 10;
}

buttonAppendColumn.addEventListener('click', appendColumn);
buttonRemoveColumn.addEventListener('click', removeColumn);
buttonAppendRow.addEventListener('click', appendRow);
buttonRemoveRow.addEventListener('click', removeRow);
updateButtonsState();
