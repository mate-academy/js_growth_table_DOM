'use strict';

// write code here
const MIN_VALUE = 2;
const MAX_VALUE = 10;

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');

  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= MAX_VALUE;
    removeRowBtn.disabled = rowCount <= MIN_VALUE;
    appendColBtn.disabled = colCount >= MAX_VALUE;
    removeColBtn.disabled = colCount <= MIN_VALUE;
  }

  appendRowBtn.addEventListener('click', () => {
    if (table.rows.length < MAX_VALUE) {
      const newRow = table.insertRow();
      const colCount = table.rows[0].cells.length;

      for (let i = 0; i < colCount; i++) {
        newRow.insertCell();
      }
    }

    updateButtons();
  });

  removeRowBtn.addEventListener('click', () => {
    if (table.rows.length > MIN_VALUE) {
      table.deleteRow(-1);
    }

    updateButtons();
  });

  appendColBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length < MAX_VALUE) {
      for (const row of table.rows) {
        row.insertCell();
      }
    }

    updateButtons();
  });

  removeColBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length > MIN_VALUE) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
    }

    updateButtons();
  });

  updateButtons();
});
