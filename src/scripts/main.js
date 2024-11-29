'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const table = document.querySelector('.field');

  const MAX_ROWS = 10;
  const MIN_ROWS = 2;
  const MAX_COLUMNS = 10;
  const MIN_COLUMNS = 2;

  const updateButtonsState = () => {
    const rowCount = table.rows.length;
    const columnCount = rowCount > 0 ? table.rows[0].cells.length : 0;

    appendRowButton.disabled = rowCount >= MAX_ROWS;
    removeRowButton.disabled = rowCount <= MIN_ROWS;

    appendColumnButton.disabled = columnCount >= MAX_COLUMNS;
    removeColumnButton.disabled = columnCount <= MIN_COLUMNS;
  };

  appendRowButton.addEventListener('click', () => {
    const rowCount = table.rows.length;
    const columnCount = rowCount > 0 ? table.rows[0].cells.length : 0;

    if (rowCount < MAX_ROWS) {
      const newRow = table.insertRow();

      for (let i = 0; i < columnCount; i++) {
        newRow.insertCell();
      }
    }

    updateButtonsState();
  });

  removeRowButton.addEventListener('click', () => {
    const rowCount = table.rows.length;

    if (rowCount > MIN_ROWS) {
      table.deleteRow(-1);
    }

    updateButtonsState();
  });

  appendColumnButton.addEventListener('click', () => {
    const columnCount = table.rows[0]?.cells.length || 0;

    if (columnCount < MAX_COLUMNS) {
      Array.from(table.rows).forEach((row) => {
        row.insertCell();
      });
    }

    updateButtonsState();
  });

  removeColumnButton.addEventListener('click', () => {
    const columnCount = table.rows[0]?.cells.length || 0;

    if (columnCount > MIN_COLUMNS) {
      Array.from(table.rows).forEach((row) => {
        row.deleteCell(-1);
      });
    }
    updateButtonsState();
  });

  updateButtonsState();
});
