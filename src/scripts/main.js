'use strict';

const table = document.querySelector('table');

const rows = table.rows;

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const minCells = 2;
const maxCells = 10;

appendRow.onclick = () => {
  if (rows.length < maxCells) {
    const newRow = table.insertRow();

    for (let count = 0; count < rows[0].cells.length; count++) {
      newRow.insertCell(-1);
    }

    removeRow.disabled = false;

    if (rows.length === maxCells) {
      appendRow.disabled = true;
    }
  }
};

removeRow.onclick = () => {
  table.deleteRow(-1);

  appendRow.disabled = false;

  if (rows.length === minCells) {
    removeRow.disabled = true;
  }
};

appendColumn.onclick = () => {
  if (rows[0].cells.length < maxCells) {
    for (let count = 0; count < rows.length; count++) {
      rows[count].insertCell(-1);
    }

    removeColumn.disabled = false;

    if (rows[0].cells.length === maxCells) {
      appendColumn.disabled = true;
    }
  }
};

removeColumn.onclick = () => {
  if (rows[0].cells.length > minCells) {
    for (let count = 0; count < rows.length; count++) {
      rows[count].deleteCell(-1);
    }

    appendColumn.disabled = false;

    if (rows[0].cells.length === minCells) {
      removeColumn.disabled = true;
    }
  }
};
