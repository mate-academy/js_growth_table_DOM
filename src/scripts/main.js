'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let rowCount = 4;
  let colCount = 4;

  const appendRow = document.querySelector('.append-row');
  const minusRow = document.querySelector('.remove-row');
  const appendCol = document.querySelector('.append-column');
  const minusCol = document.querySelector('.remove-column');
  const table =
    document.querySelector('.field tbody') || document.querySelector('.field');

  function addRow() {
    if (rowCount >= 10) {
      return;
    }

    const newRow = document.createElement('tr');

    for (let i = 0; i < colCount; i++) {
      const cell = document.createElement('td');

      newRow.appendChild(cell);
    }
    table.appendChild(newRow);
    rowCount++;

    if (rowCount >= 10) {
      appendRow.disabled = true;
    }

    minusRow.disabled = false;
  }

  function addCol() {
    if (colCount >= 10) {
      return;
    }

    const rows = table.querySelectorAll('tr');

    rows.forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });

    colCount++;

    if (colCount >= 10) {
      appendCol.disabled = true;
    }

    minusCol.disabled = false;
  }

  function removeRow() {
    if (rowCount <= 2) {
      return;
    }

    const lastRow = table.querySelector('tr:last-child');

    if (lastRow) {
      lastRow.remove();
      rowCount--;
    }

    if (rowCount < 10) {
      appendRow.disabled = false;
    }

    if (rowCount <= 2) {
      minusRow.disabled = true;
    }
  }

  function removeCol() {
    if (colCount <= 2) {
      return;
    }

    const rows = table.querySelectorAll('tr');

    rows.forEach((row) => {
      const lastCell = row.querySelector('td:last-child');

      if (lastCell) {
        lastCell.remove();
      }
    });

    colCount--;

    if (colCount < 10) {
      appendCol.disabled = false;
    }

    if (colCount <= 2) {
      minusCol.disabled = true;
    }
  }

  appendRow.addEventListener('click', addRow);
  appendCol.addEventListener('click', addCol);
  minusRow.addEventListener('click', removeRow);
  minusCol.addEventListener('click', removeCol);
});
