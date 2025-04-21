'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const rowAppend = document.querySelector('.append-row');
  const rowRemove = document.querySelector('.remove-row');
  const colAppend = document.querySelector('.append-column');
  const colRemove = document.querySelector('.remove-column');

  const table = document.querySelector('.field tbody');

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    rowAppend.disabled = rowCount >= 10;
    rowRemove.disabled = rowCount <= 2;

    colAppend.disabled = colCount >= 10;
    colRemove.disabled = colCount <= 2;
  }

  rowAppend.addEventListener('click', () => {
    if (rowAppend.disabled) {
      return;
    }

    const newRow = document.createElement('tr');

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const cell = document.createElement('td');

      newRow.appendChild(cell);
    }

    table.appendChild(newRow);
    updateButtons();
  });

  rowRemove.addEventListener('click', () => {
    const lastRow = table.rows[table.rows.length - 1];

    table.deleteRow(lastRow.rowIndex);
    updateButtons();
  });

  colAppend.addEventListener('click', () => {
    if (colAppend.disabled) {
      return;
    }

    const rowCount = table.rows.length;

    for (let i = 0; i < rowCount; i++) {
      const newCell = document.createElement('td');

      table.rows[i].appendChild(newCell);
    }

    updateButtons();
  });

  colRemove.addEventListener('click', () => {
    const rowCount = table.rows.length;

    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(table.rows[i].cells.length - 1);
    }

    updateButtons();
  });

  updateButtons();
});
