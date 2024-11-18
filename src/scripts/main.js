'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const maxRows = 10;
  const minRows = 2;
  const maxColumns = 10;
  const minColumns = 2;

  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  const updateButtonStates = () => {
    const rowCount = table.rows.length;
    let columnCount = 0;

    if (table.rows.length > 0 && table.rows[0].cells.length > 0) {
      columnCount = table.rows[0].cells.length;
    } else {
      columnCount = 0;
    }

    appendRowButton.disabled = rowCount >= maxRows;
    removeRowButton.disabled = rowCount <= minRows;
    appendColumnButton.disabled = columnCount >= maxColumns;
    removeColumnButton.disabled = columnCount <= minColumns;
  };

  const addRow = () => {
    const columnCount = table.rows[0]?.cells.length || 0;

    if (table.rows.length < maxRows && columnCount > 0) {
      const newRow = table.insertRow();

      for (let i = 0; i < columnCount; i++) {
        newRow.insertCell();
      }
    }

    updateButtonStates();
  };

  const removeRow = () => {
    if (table.rows.length > minRows) {
      table.deleteRow(-1);
    }

    updateButtonStates();
  };

  const addColumn = () => {
    const rows = document.querySelectorAll('table tr');

    if (rows[0].cells.length < maxColumns) {
      rows.forEach((row) => {
        row.insertCell();
      });
    }

    updateButtonStates();
  };

  const remoweColumn = () => {
    const rows = document.querySelectorAll('table tr');

    if (rows[0].cells.length > 2) {
      rows.forEach((row) => {
        row.deleteCell(-1);
      });
    }

    updateButtonStates();
  };

  appendRowButton.addEventListener('click', addRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', addColumn);
  removeColumnButton.addEventListener('click', remoweColumn);

  updateButtonStates();
});
