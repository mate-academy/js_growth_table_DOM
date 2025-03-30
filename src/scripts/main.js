'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  const MAX = 10;
  const MIN = 2;

  function updateButtonsState() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0]?.cells.length || 0;

    appendRowBtn.disabled = rowCount >= MAX;
    removeRowBtn.disabled = rowCount <= MIN;
    appendColBtn.disabled = colCount >= MAX;
    removeColBtn.disabled = colCount <= MIN;
  }

  function appendRow() {
    const colCount = table.rows[0]?.cells.length || 0;

    if (table.rows.length < MAX) {
      const newRow = document.createElement('tr');

      for (let i = 0; i < colCount; i++) {
        newRow.appendChild(document.createElement('td'));
      }
      table.appendChild(newRow);
    }
    updateButtonsState();
  }

  function removeRow() {
    if (table.rows.length > MIN) {
      table.deleteRow(-1);
    }
    updateButtonsState();
  }

  function appendColumn() {
    if (table.rows[0].cells.length < MAX) {
      for (const row of table.rows) {
        row.appendChild(document.createElement('td'));
      }
    }
    updateButtonsState();
  }

  function removeColumn() {
    if (table.rows[0].cells.length > MIN) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
    }
    updateButtonsState();
  }

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColBtn.addEventListener('click', appendColumn);
  removeColBtn.addEventListener('click', removeColumn);

  updateButtonsState();
});
