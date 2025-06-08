'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.table-container table');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const maxSize = 10;
  const minSize = 2;

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0]?.cells.length || 0;

    appendRowBtn.disabled = rowCount >= maxSize;
    removeRowBtn.disabled = rowCount <= minSize;
    appendColumnBtn.disabled = colCount >= maxSize;
    removeColumnBtn.disabled = colCount <= minSize;
  }

  function appendRow() {
    const row = table.insertRow();
    const colCount = table.rows[0].cells.length;

    for (let i = 0; i < colCount; i++) {
      row.insertCell().textContent = '';
    }
    updateButtons();
  }

  function removeRow() {
    if (table.rows.length > minSize) {
      table.deleteRow(-1);
      updateButtons();
    }
  }

  function appendColumn() {
    if (table.rows.length > 0) {
      Array.from(table.rows).forEach((row) => {
        row.insertCell().textContent = '';
      });
    }
    updateButtons();
  }

  function removeColumn() {
    if (table.rows[0].cells.length > minSize) {
      Array.from(table.rows).forEach((row) => row.deleteCell(-1));
      updateButtons();
    }
  }

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColumnBtn.addEventListener('click', appendColumn);
  removeColumnBtn.addEventListener('click', removeColumn);

  updateButtons();
});
