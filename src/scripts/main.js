'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  const maxRows = 10;
  const maxColumns = 10;
  const minRows = 2;
  const minColumns = 2;

  function updateButtons() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    appendRowButton.disabled = rowCount >= maxRows;
    removeRowButton.disabled = rowCount <= minRows;
    appendColumnButton.disabled = columnCount >= maxColumns;
    removeColumnButton.disabled = columnCount <= minColumns;
  }

  appendRowButton.addEventListener('click', () => {
    const newRow = table.insertRow();
    const columnCount = table.rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }
    updateButtons();
  });

  removeRowButton.addEventListener('click', () => {
    if (table.rows.length > minRows) {
      table.deleteRow(-1);
    }
    updateButtons();
  });

  appendColumnButton.addEventListener('click', () => {
    for (const row of table.rows) {
      row.insertCell();
    }
    updateButtons();
  });

  removeColumnButton.addEventListener('click', () => {
    if (table.rows[0].cells.length > minColumns) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
    }
    updateButtons();
  });

  updateButtons();
});
