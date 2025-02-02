'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  const maxRows = 10;
  const minRows = 2;
  const maxColumns = 10;
  const minColumns = 2;

  const updateButtonState = () => {
    removeRowButton.disabled = table.rows.length <= minRows;
    appendRowButton.disabled = table.rows.length >= maxRows;

    const columnCount = table.rows[0].cells.length;

    removeColumnButton.disabled = columnCount <= minColumns;
    appendColumnButton.disabled = columnCount >= maxColumns;
  };

  appendRowButton.addEventListener('click', () => {
    if (table.rows.length < maxRows) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }
      updateButtonState();
    }
  });

  removeRowButton.addEventListener('click', () => {
    if (table.rows.length > minRows) {
      table.deleteRow(-1);
      updateButtonState();
    }
  });

  appendColumnButton.addEventListener('click', () => {
    const columnCount = table.rows[0].cells.length;

    if (columnCount < maxColumns) {
      for (const row of table.rows) {
        row.insertCell();
      }
      updateButtonState();
    }
  });

  removeColumnButton.addEventListener('click', () => {
    const columnCount = table.rows[0].cells.length;

    if (columnCount > minColumns) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
      updateButtonState();
    }
  });

  updateButtonState();
});
