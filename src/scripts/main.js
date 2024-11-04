'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const maxRows = 10;
  const minRows = 2;
  const maxColumns = 10;
  const minColumns = 2;

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= maxRows;
    removeRowBtn.disabled = rowCount <= minRows;
    appendColumnBtn.disabled = colCount >= maxColumns;
    removeColumnBtn.disabled = colCount <= minColumns;
  }

  appendRowBtn.addEventListener('click', () => {
    const rowCount = table.rows.length;

    if (rowCount < maxRows) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }
      updateButtons();
    }
  });

  removeRowBtn.addEventListener('click', () => {
    const rowCount = table.rows.length;

    if (rowCount > minRows) {
      table.deleteRow(-1);
      updateButtons();
    }
  });

  appendColumnBtn.addEventListener('click', () => {
    const colCount = table.rows[0].cells.length;

    if (colCount < maxColumns) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
      }
      updateButtons();
    }
  });

  removeColumnBtn.addEventListener('click', () => {
    const colCount = table.rows[0].cells.length;

    if (colCount > minColumns) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
      updateButtons();
    }
  });

  updateButtons();
});
