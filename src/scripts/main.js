'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  const MIN = 2;
  const MAX = 10;

  function updateButtons() {
    const rowsCount = table.rows.length;
    const colsCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowsCount >= MAX;
    removeRowBtn.disabled = rowsCount <= MIN;
    appendColBtn.disabled = colsCount >= MAX;
    removeColBtn.disabled = colsCount <= MIN;
  }

  appendRowBtn.addEventListener('click', () => {
    const colsCount = table.rows[0].cells.length;

    if (table.rows.length < MAX) {
      const newRow = table.insertRow();

      for (let i = 0; i < colsCount; i++) {
        newRow.insertCell().textContent = '';
      }
    }
    updateButtons();
  });

  removeRowBtn.addEventListener('click', () => {
    if (table.rows.length > MIN) {
      table.deleteRow(table.rows.length - 1);
    }
    updateButtons();
  });

  appendColBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length < MAX) {
      for (const row of table.rows) {
        row.insertCell().textContent = '';
      }
    }
    updateButtons();
  });

  removeColBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length > MIN) {
      for (const row of table.rows) {
        row.deleteCell(row.cells.length - 1);
      }
    }
    updateButtons();
  });

  updateButtons();
});
