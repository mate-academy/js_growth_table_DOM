'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  function updateButtonStates() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= 10;
    removeRowBtn.disabled = rowCount <= 2;

    appendColumnBtn.disabled = columnCount >= 10;
    removeColumnBtn.disabled = columnCount <= 2;
  }

  appendRowBtn.addEventListener('click', function() {
    if (table.rows.length < 10) {
      const newRow = table.insertRow(-1);
      const cellsQuantity = table.rows[0].cells.length;

      for (let i = 0; i < cellsQuantity; i++) {
        newRow.insertCell(i);
      }
      updateButtonStates();
    }
  });

  removeRowBtn.addEventListener('click', function() {
    if (table.rows.length > 2) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  });

  appendColumnBtn.addEventListener('click', function() {
    if (table.rows[0].cells.length < 10) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell(-1);
      }
      updateButtonStates();
    }
  });

  removeColumnBtn.addEventListener('click', function() {
    if (table.rows[0].cells.length > 2) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
      updateButtonStates();
    }
  });

  updateButtonStates();
});
