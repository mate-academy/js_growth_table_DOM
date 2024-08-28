'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  const minRows = 2;
  const maxRows = 10;
  const minColumns = 2;
  const maxColumns = 10;

  function recountButtons() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    appendRow.disabled = rowCount >= maxRows;
    removeRow.disabled = rowCount <= minRows;
    appendColumn.disabled = columnCount >= maxColumns;
    removeColumn.disabled = columnCount <= minColumns;
  }

  appendRow.addEventListener('click', () => {
    const newRow = table.insertRow();
    const columnCount = table.rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }
    recountButtons();
  });

  removeRow.addEventListener('click', () => {
    if (table.rows.length > minRows) {
      table.deleteRow(-1);
      recountButtons();
    }
  });

  appendColumn.addEventListener('click', () => {
    if (table.rows[0].cells.length < maxColumns) {
      Array.from(table.rows).forEach((row) => row.insertCell());
      recountButtons();
    }
  });

  removeColumn.addEventListener('click', () => {
    if (table.rows[0].cells.length > minColumns) {
      Array.from(table.rows).forEach((row) => row.deleteCell(-1));
      recountButtons();
    }
  });

  recountButtons();
});
