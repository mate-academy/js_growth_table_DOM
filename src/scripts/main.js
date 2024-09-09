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
    const rows = table.rows.length;
    const columns = table.rows[0]?.cells.length || 0;

    appendRowButton.disabled = rows >= MAX_SIZE;
    removeRowButton.disabled = rows <= MIN_SIZE;
    appendColumnButton.disabled = columns >= MAX_SIZE;
    removeColumnButton.disabled = columns <= MIN_SIZE;
  }

  function addRow() {
    const rows = table.rows.length;
    const columns = table.rows[0]?.cells.length || 0;
    const newRow = table.insertRow();

    if (rows < MAX_SIZE) {
      for (let i = 0; i < columns; i++) {
        newRow.insertCell().textContent = '';
      }
    }
    updateButtonStates();
  }

  function removeRow() {
    const rows = table.rows.length;

    if (rows > MIN_SIZE) {
      table.deleteRow(-1);
    }

    updateButtonStates();
  }

  function addColumn() {
    const columns = table.rows[0]?.cells.length || 0;
    const rows = table.rows.length;

    if (columns < MAX_SIZE) {
      for (let i = 0; i < rows; i++) {
        table.rows[i].insertCell().textContent = '';
      }
    }
    updateButtonStates();
  }

  function removeColumn() {
    const rows = table.rows.length;

    if (rows > 0) {
      for (let i = 0; i < rows; i++) {
        const row = table.rows[i];

        if (row.cells.length > MIN_SIZE) {
          row.deleteCell(-1);
        }
      }
    }

    updateButtonStates();
  }

  appendRowButton.addEventListener('click', addRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', addColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  updateButtonStates();
});
