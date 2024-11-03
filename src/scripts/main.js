'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const MIN = 2;
  const MAX = 10;

  function updateButtons() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    appendRowButton.disabled = rowCount >= MAX;
    removeRowButton.disabled = rowCount <= MIN;
    appendColumnButton.disabled = columnCount >= MAX;
    removeColumnButton.disabled = columnCount <= MIN;
  }

  function appendRow() {
    if (table.rows.length < MAX) {
      const row = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        row.insertCell();
      }

      updateButtons();
    }
  }

  function removeRow() {
    if (table.rows.length > MIN) {
      table.deleteRow(-1);
      updateButtons();
    }
  }

  function appendColumn() {
    if (table.rows[0].cells.length < MAX) {
      Array.from(table.rows).forEach((row) => {
        row.insertCell();
      });

      updateButtons();
    }
  }

  function removeColumn() {
    if (table.rows[0].cells.length > MIN) {
      Array.from(table.rows).forEach((row) => {
        row.deleteCell(-1);
      });

      updateButtons();
    }
  }

  appendRowButton.addEventListener('click', appendRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', appendColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  updateButtons();
});
