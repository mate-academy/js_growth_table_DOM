'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRows = document.querySelector('.append-row');
  const removeRows = document.querySelector('.remove-row');
  const appendCols = document.querySelector('.append-column');
  const removeCols = document.querySelector('.remove-column');
  const min = 2;
  const max = 10;

  function updateButtonStates() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRows.disabled = rowCount >= max;
    removeRows.disabled = rowCount <= min;
    appendCols.disabled = colCount >= max;
    removeCols.disabled = colCount <= min;
  }

  appendRows.addEventListener('click', () => {
    const colCount = table.rows[0].cells.length;
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }

    updateButtonStates();
  });

  removeRows.addEventListener('click', () => {
    if (table.rows.length > min) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  });

  appendCols.addEventListener('click', () => {
    for (const row of table.rows) {
      row.insertCell();
    }

    updateButtonStates();
  });

  removeCols.addEventListener('click', () => {
    const colCount = table.rows[0].cells.length;

    if (colCount > min) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }

      updateButtonStates();
    }
  });

  updateButtonStates();
});
