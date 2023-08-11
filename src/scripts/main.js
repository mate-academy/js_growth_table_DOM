'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('.field');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const minRows = 2;
  const maxRows = 10;
  const minColumns = 2;
  const maxColumns = 10;

  updateButtons();

  appendRowButton.addEventListener('click', function() {
    if (table.rows.length < maxRows) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }

      updateButtons();
    }
  });

  removeRowButton.addEventListener('click', function() {
    if (table.rows.length > minRows) {
      table.deleteRow(-1);

      updateButtons();
    }
  });

  appendColumnButton.addEventListener('click', function() {
    if (table.rows[0].cells.length < maxColumns) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
      }

      updateButtons();
    }
  });

  removeColumnButton.addEventListener('click', function() {
    if (table.rows[0].cells.length > minColumns) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }

      updateButtons();
    }
  });

  function updateButtons() {
    appendRowButton.disabled = table.rows.length >= maxRows;
    removeRowButton.disabled = table.rows.length <= minRows;
    appendColumnButton.disabled = table.rows[0].cells.length >= maxColumns;
    removeColumnButton.disabled = table.rows[0].cells.length <= minColumns;
  }
});
