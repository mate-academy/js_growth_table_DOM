'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');

let rowCount = table.rows.length;
let columnCount = table.rows[0].cells.length;

appendRow.addEventListener('click', () => {
  if (rowCount < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }

    rowCount++;
  }

  buttonChecker();
});

removeRow.addEventListener('click', () => {
  if (rowCount > 2) {
    table.deleteRow(-1);

    rowCount--;
  }

  buttonChecker();
});

appendColumn.addEventListener('click', () => {
  if (columnCount < 10) {
    for (const row of table.rows) {
      row.insertCell();
    }

    columnCount++;
  }

  buttonChecker();
});

removeColumn.addEventListener('click', () => {
  if (columnCount > 2) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }

    columnCount--;
  }

  buttonChecker();
});

function buttonChecker() {
  if (rowCount < 10) {
    appendRow.disabled = false;
  } else {
    appendRow.disabled = true;
  }

  if (rowCount > 2) {
    removeRow.disabled = false;
  } else {
    removeRow.disabled = true;
  }

  if (columnCount < 10) {
    appendColumn.disabled = false;
  } else {
    appendColumn.disabled = true;
  }

  if (columnCount > 2) {
    removeColumn.disabled = false;
  } else {
    removeColumn.disabled = true;
  }
}
