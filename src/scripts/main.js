'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const MAX_COUNT = 10;
  const MIN_COUNT = 2;

  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  const updateButtonsState = () => {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    appendRowButton.disabled = rowCount >= MAX_COUNT;
    removeRowButton.disabled = rowCount <= MIN_COUNT;
    appendColumnButton.disabled = columnCount >= MAX_COUNT;
    removeColumnButton.disabled = columnCount <= MIN_COUNT;
  };

  const appendRow = () => {
    const newRow = table.insertRow();
    const columnCount = table.rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }
    updateButtonsState();
  };

  const removeRow = () => {
    if (table.rows.length > MIN_COUNT) {
      table.deleteRow(-1);
      updateButtonsState();
    }
  };

  const appendColumn = () => {
    for (const row of table.rows) {
      row.insertCell();
    }
    updateButtonsState();
  };

  const removeColumn = () => {
    if (table.rows[0].cells.length > MIN_COUNT) {
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
});
