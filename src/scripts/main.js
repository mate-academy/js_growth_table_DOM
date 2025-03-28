'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const maxSize = 10;
  const minSize = 2;

  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  function updateButtonStates() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0]?.cells.length || 0;

    appendRowButton.disabled = rowCount >= maxSize;
    removeRowButton.disabled = rowCount <= minSize;

    appendColumnButton.disabled = columnCount >= maxSize;
    removeColumnButton.disabled = columnCount <= minSize;
  }

  function appendRow() {
    if (table.rows.length >= maxSize) {
      appendRowButton.disabled = true;

      return;
    }

    const newRow = table.insertRow();
    const columnCount = table.rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }
    updateButtonStates();
  }

  function removeRow() {
    if (table.rows.length > minSize) {
      table.deleteRow(-1);
    }
    updateButtonStates();
  }

  function appendColumn() {
    if (table.rows[0].cells.length >= maxSize) {
      appendColumnButton.disabled = true;

      return;
    }

    Array.from(table.rows).forEach((row) => row.insertCell());
    updateButtonStates();
  }

  function removeColumn() {
    if (table.rows[0].cells.length > minSize) {
      Array.from(table.rows).forEach((row) => row.deleteCell(-1));
    }
    updateButtonStates();
  }

  appendRowButton.addEventListener('click', appendRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', appendColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  updateButtonStates();
});
