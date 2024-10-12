'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');
  const table = document.querySelector('table');
  const tableBody = table.querySelector('tbody');

  const maxRows = 10;
  const minRows = 2;
  const maxColumns = 10;
  const minColumns = 2;

  function updateButtons() {
    const rowCount = tableBody.rows.length;
    const columnCount = tableBody.rows[0].cells.length;

    appendRowButton.disabled = rowCount >= maxRows;
    removeRowButton.disabled = rowCount <= minRows;
    appendColumnButton.disabled = columnCount >= maxColumns;
    removeColumnButton.disabled = columnCount <= minColumns;
  }

  appendRowButton.addEventListener('click', () => {
    const rowCount = tableBody.rows.length;

    if (rowCount < maxRows) {
      const columnCount = tableBody.rows[0].cells.length;
      const newRow = document.createElement('tr');

      for (let i = 0; i < columnCount; i++) {
        const newCell = document.createElement('td');

        newRow.appendChild(newCell);
      }

      tableBody.appendChild(newRow);
      updateButtons();
    }
  });

  removeRowButton.addEventListener('click', () => {
    const rowCount = tableBody.rows.length;

    if (rowCount > minRows) {
      tableBody.deleteRow(-1);
      updateButtons();
    }
  });

  appendColumnButton.addEventListener('click', () => {
    const columnCount = tableBody.rows[0].cells.length;

    if (columnCount < maxColumns) {
      for (let i = 0; i < tableBody.rows.length; i++) {
        const newCell = document.createElement('td');

        tableBody.rows[i].appendChild(newCell);
      }
      updateButtons();
    }
  });

  removeColumnButton.addEventListener('click', () => {
    const columnCount = tableBody.rows[0].cells.length;

    if (columnCount > minColumns) {
      for (let i = 0; i < tableBody.rows.length; i++) {
        tableBody.rows[i].deleteCell(-1);
      }
      updateButtons();
    }
  });

  updateButtons();
});
