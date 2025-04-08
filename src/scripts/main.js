'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');

  const btnAddRow = document.querySelector('.append-row');
  const btnRemoveRow = document.querySelector('.remove-row');
  const btnAddCol = document.querySelector('.append-column');
  const btnRemoveCol = document.querySelector('.remove-column');

  const MAX = 10;
  const MIN = 2;

  function updateButtonStates() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    btnAddRow.disabled = rowCount >= MAX;
    btnRemoveRow.disabled = rowCount <= MIN;
    btnAddCol.disabled = colCount >= MAX;
    btnRemoveCol.disabled = colCount <= MIN;
  }

  btnAddRow.addEventListener('click', function () {
    const colCount = table.rows[0].cells.length;
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }
    updateButtonStates();
  });

  btnRemoveRow.addEventListener('click', function () {
    if (table.rows.length > MIN) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  });

  btnAddCol.addEventListener('click', function () {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    if (colCount < MAX) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].insertCell();
      }
      updateButtonStates();
    }
  });

  btnRemoveCol.addEventListener('click', function () {
    const colCount = table.rows[0].cells.length;

    if (colCount > MIN) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
      updateButtonStates();
    }
  });

  updateButtonStates();
});
