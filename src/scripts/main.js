'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('.field');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const MAX_ROWS = 10;
  const MIN_ROWS = 2;
  const MAX_COLUMNS = 10;
  const MIN_COLUMNS = 2;

  function updateButtonStates() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    appendRowButton.disabled = rowCount >= MAX_ROWS;
    removeRowButton.disabled = rowCount <= MIN_ROWS;
    appendColumnButton.disabled = columnCount >= MAX_COLUMNS;
    removeColumnButton.disabled = columnCount <= MIN_COLUMNS;
  }

  appendRowButton.addEventListener('click', function() {
    if (table.rows.length < MAX_ROWS) {
      const newRow = table.insertRow();
      const columns = table.rows[0].cells.length;

      for (let i = 0; i < columns; i++) {
        newRow.insertCell();
      }

      updateButtonStates();
    }
  });

  removeRowButton.addEventListener('click', function() {
    if (table.rows.length > MIN_ROWS) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  });

  appendColumnButton.addEventListener('click', function() {
    if (table.rows[0].cells.length < MAX_COLUMNS) {
      Array.from(table.rows).forEach((row) => row.insertCell());
      updateButtonStates();
    }
  });

  removeColumnButton.addEventListener('click', function() {
    if (table.rows[0].cells.length > MIN_COLUMNS) {
      Array.from(table.rows).forEach((row) => row.deleteCell(-1));
      updateButtonStates();
    }
  });

  // Initial button state update
  updateButtonStates();
});
