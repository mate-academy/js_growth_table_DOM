'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const MAX_ROWS = 10;
  const MIN_ROWS = 2;
  const MAX_COLUMNS = 10;
  const MIN_COLUMNS = 2;

  const updateButtonsState = () => {
    const rowCount = table.rows.length;
    const colCount = table.rows[0]?.cells.length || 0;

    appendRowButton.disabled = rowCount >= MAX_ROWS;
    removeRowButton.disabled = rowCount <= MIN_ROWS;
    appendColumnButton.disabled = colCount >= MAX_COLUMNS;
    removeColumnButton.disabled = colCount <= MIN_COLUMNS;
  };

  const appendRow = () => {
    const colCount = table.rows[0]?.cells.length || 0;

    if (colCount > 0 && table.rows.length < MAX_ROWS) {
      const newRow = table.insertRow();

      for (let i = 0; i < colCount; i++) {
        const cell = newRow.insertCell();

        cell.textContent = '';
      }
      updateButtonsState();
    }
  };

  const removeRow = () => {
    if (table.rows.length > MIN_ROWS) {
      table.deleteRow(-1);
      updateButtonsState();
    }
  };

  const appendColumn = () => {
    if (table.rows.length > 0 && table.rows[0].cells.length < MAX_COLUMNS) {
      for (const row of table.rows) {
        const cell = row.insertCell();

        cell.textContent = '';
      }
      updateButtonsState();
    }
  };

  const removeColumn = () => {
    if (table.rows.length > 0 && table.rows[0].cells.length > MIN_COLUMNS) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
      updateButtonsState();
    }
  };

  appendRowButton.addEventListener('click', appendRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', appendColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  updateButtonsState();
});
