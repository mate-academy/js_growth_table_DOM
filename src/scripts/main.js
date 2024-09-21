'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  const maxRows = 10;
  const minRows = 2;
  const maxColumns = 10;
  const minColumns = 2;

  function updateButtonStates() {
    const numRows = table.rows.length;
    const numColumns = table.rows[0].cells.length;

    appendRowBtn.disabled = numRows >= maxRows;
    removeRowBtn.disabled = numRows <= minRows;
    appendColumnBtn.disabled = numColumns >= maxColumns;
    removeColumnBtn.disabled = numColumns <= minColumns;
  }

  appendRowBtn.addEventListener('click', function () {
    if (table.rows.length < maxRows) {
      const newRow = table.insertRow();
      const numColumns = table.rows[0].cells.length;

      for (let i = 0; i < numColumns; i++) {
        newRow.insertCell();
      }
      updateButtonStates();
    }
  });

  removeRowBtn.addEventListener('click', function () {
    if (table.rows.length > minRows) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  });

  appendColumnBtn.addEventListener('click', function () {
    if (table.rows.length > 0 && table.rows[0].cells.length < maxColumns) {
      Array.from(table.rows).forEach((row) => {
        row.insertCell();
      });
      updateButtonStates();
    }
  });

  removeColumnBtn.addEventListener('click', function () {
    if (table.rows.length > 0 && table.rows[0].cells.length > minColumns) {
      Array.from(table.rows).forEach((row) => {
        row.deleteCell(-1);
      });
      updateButtonStates();
    }
  });

  updateButtonStates();
});
