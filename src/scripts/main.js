'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.field');
  const addRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const addColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  let rowCount = table.rows.length;
  let colCount = table.rows[0].cells.length;

  const MIN_SIZE = 2;
  const MAX_SIZE = 10;

  function updateButtons() {
    removeRowBtn.disabled = rowCount <= MIN_SIZE;
    addRowBtn.disabled = rowCount >= MAX_SIZE;
    removeColBtn.disabled = colCount <= MIN_SIZE;
    addColBtn.disabled = colCount >= MAX_SIZE;
  }

  addRowBtn.addEventListener('click', function () {
    if (rowCount < MAX_SIZE) {
      const newRow = table.insertRow();

      for (let i = 0; i < colCount; i++) {
        newRow.insertCell();
      }
      rowCount++;
      updateButtons();
    }
  });

  removeRowBtn.addEventListener('click', function () {
    if (rowCount > MIN_SIZE) {
      table.deleteRow(rowCount - 1);
      rowCount--;
      updateButtons();
    }
  });

  addColBtn.addEventListener('click', function () {
    if (colCount < MAX_SIZE) {
      for (const row of table.rows) {
        row.insertCell();
      }
      colCount++;
      updateButtons();
    }
  });

  removeColBtn.addEventListener('click', function () {
    if (colCount > MIN_SIZE) {
      for (const row of table.rows) {
        row.deleteCell(colCount - 1);
      }
      colCount--;
      updateButtons();
    }
  });

  updateButtons();
});
