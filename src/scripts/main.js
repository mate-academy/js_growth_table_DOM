'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const addRowBtn = document.querySelector('.append-row');
  const deleteRowBtn = document.querySelector('.remove-row');
  const addColumnBtn = document.querySelector('.append-column');
  const deleteColumnBtn = document.querySelector('.remove-column');
  const table = document.querySelector('table');

  function updateButtonStates() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    addRowBtn.disabled = rowCount >= 10;
    deleteRowBtn.disabled = rowCount <= 2;
    addColumnBtn.disabled = columnCount >= 10;
    deleteColumnBtn.disabled = columnCount <= 2;
  }

  addRowBtn.addEventListener('click', function (ev) {
    if (table.rows.length < 10) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }
    }
    updateButtonStates();
  });

  deleteRowBtn.addEventListener('click', function (ev) {
    if (table.rows.length > 2) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  });

  addColumnBtn.addEventListener('click', function (ev) {
    for (const row of table.rows) {
      if (row.cells.length < 10) {
        row.insertCell();
      }
    }
    updateButtonStates();
  });

  deleteColumnBtn.addEventListener('click', function (ev) {
    const canDelete = Array.from(table.rows).every(
      (row) => row.cells.length > 2,
    );

    if (canDelete) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
    }
    updateButtonStates();
  });

  updateButtonStates();
});
