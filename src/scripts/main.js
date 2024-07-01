'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  const MAX_COUNT = 10;
  const MIN_COUNT = 2;

  function updateButtonState() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowButton.disabled = rowCount >= MAX_COUNT;
    removeRowButton.disabled = rowCount <= MIN_COUNT;
    appendColumnButton.disabled = colCount >= MAX_COUNT;
    removeColumnButton.disabled = colCount <= MIN_COUNT;
  }

  appendRowButton.addEventListener('click', () => {
    if (table.rows.length < MAX_COUNT) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }
    }
    updateButtonState();
  });

  removeRowButton.addEventListener('click', () => {
    if (table.rows.length > MIN_COUNT) {
      table.deleteRow(-1);
    }
    updateButtonState();
  });

  appendColumnButton.addEventListener('click', () => {
    if (table.rows[0].cells.length < MAX_COUNT) {
      for (const row of table.rows) {
        row.insertCell();
      }
    }
    updateButtonState();
  });

  removeColumnButton.addEventListener('click', () => {
    if (table.rows[0].cells.length > MIN_COUNT) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
    }
    updateButtonState();
  });

  updateButtonState();
});
