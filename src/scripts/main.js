'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const MAX_SIZE = 10;
  const MIN_SIZE = 2;

  function updateButtonStates() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0]?.cells.length || 0;

    appendRowButton.disabled = rowCount >= MAX_SIZE;
    removeRowButton.disabled = rowCount <= MIN_SIZE;
    appendColumnButton.disabled = colCount >= MAX_SIZE;
    removeColumnButton.disabled = colCount <= MIN_SIZE;
  }

  function appendRow() {
    const newRow = table.insertRow();
    const colCount = table.rows[0]?.cells.length || 0;

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }

    updateButtonStates();
  }

  function removeRow() {
    if (table.rows.length > MIN_SIZE) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  }

  function appendColumn() {
    const rowCount = table.rows.length;

    for (let i = 0; i < rowCount; i++) {
      table.rows[i].insertCell();
    }

    updateButtonStates();
  }

  function removeColumn() {
    const rowCount = table.rows.length;

    if (rowCount > 0 && table.rows[0].cells.length > MIN_SIZE) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(-1);
      }

      updateButtonStates();
    }
  }

  appendRowButton.addEventListener('click', appendRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', appendColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  updateButtonStates();
});
