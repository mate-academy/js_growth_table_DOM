'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  const MAX_ROWS_COLUMNS = 10;
  const MIN_ROWS_COLUMNS = 2;

  function updateButtonStates() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0] ? table.rows[0].cells.length : 0;

    appendRowButton.disabled = rowCount >= MAX_ROWS_COLUMNS;
    removeRowButton.disabled = rowCount <= MIN_ROWS_COLUMNS;
    appendColumnButton.disabled = columnCount >= MAX_ROWS_COLUMNS;
    removeColumnButton.disabled = columnCount <= MIN_ROWS_COLUMNS;
  }

  function addRow() {
    const row = table.insertRow();
    const columnCount = table.rows[0] ? table.rows[0].cells.length : 0;

    for (let i = 0; i < columnCount; i++) {
      row.insertCell();
    }
    updateButtonStates();
  }

  function removeRow() {
    if (table.rows.length > MIN_ROWS_COLUMNS) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  }

  function addColumn() {
    for (const row of table.rows) {
      row.insertCell();
    }
    updateButtonStates();
  }

  function removeColumn() {
    if (table.rows[0].cells.length > MIN_ROWS_COLUMNS) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
      updateButtonStates();
    }
  }

  appendRowButton.addEventListener('click', addRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', addColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  updateButtonStates();
});
