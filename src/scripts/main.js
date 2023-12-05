'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const maxRowCount = 10;
  const minRowCount = 2;
  const maxColumnCount = 10;
  const minColumnCount = 2;

  updateButtons();

  appendRowBtn.addEventListener('click', function() {
    if (table.rows.length < maxRowCount) {
      const newRow = table.insertRow(-1);

      addCellsToRow(newRow, table.rows[0].cells.length);
    }
    updateButtons();
  });

  removeRowBtn.addEventListener('click', function() {
    if (table.rows.length > minRowCount) {
      table.deleteRow(-1);
    }
    updateButtons();
  });

  appendColumnBtn.addEventListener('click', function() {
    if (table.rows[0].cells.length < maxColumnCount) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell(-1);
      }
    }
    updateButtons();
  });

  removeColumnBtn.addEventListener('click', function() {
    if (table.rows[0].cells.length > minColumnCount) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
    }
    updateButtons();
  });

  function addCellsToRow(row, count) {
    for (let i = 0; i < count; i++) {
      row.insertCell(-1);
    }
  }

  function updateButtons() {
    appendRowBtn.disabled = table.rows.length >= maxRowCount;
    removeRowBtn.disabled = table.rows.length <= minRowCount;
    appendColumnBtn.disabled = table.rows[0].cells.length >= maxColumnCount;
    removeColumnBtn.disabled = table.rows[0].cells.length <= minColumnCount;
  }
});
