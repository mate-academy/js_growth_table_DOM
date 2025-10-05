'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');

  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  const MIN_ROWS = 2;
  const MAX_ROWS = 10;
  const MIN_COLS = 2;
  const MAX_COLS = 10;

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= MAX_ROWS;
    removeRowBtn.disabled = rowCount <= MIN_ROWS;
    appendColBtn.disabled = colCount >= MAX_COLS;
    removeColBtn.disabled = colCount <= MIN_COLS;
  }

  function appendRow() {
    const rowCount = table.rows.length;

    if (rowCount >= MAX_ROWS) {
      return;
    }

    const colCount = table.rows[0].cells.length;
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      const newCell = newRow.insertCell();

      newCell.textContent = '';
    }

    updateButtons();
  }

  function removeRow() {
    const rowCount = table.rows.length;

    if (rowCount > MIN_ROWS) {
      table.deleteRow(rowCount - 1);
    }
    updateButtons();
  }

  function appendColumn() {
    const colCount = table.rows[0].cells.length;

    if (colCount >= MAX_COLS) {
      return;
    }

    const rowCount = table.rows.length;

    for (let i = 0; i < rowCount; i++) {
      const row = table.rows[i];
      const newCell = row.insertCell();

      newCell.textContent = '';
    }

    updateButtons();
  }

  function removeColumn() {
    const colCount = table.rows[0].cells.length;

    if (colCount > MIN_COLS) {
      const rowCount = table.rows.length;

      for (let i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(colCount - 1);
      }
    }
    updateButtons();
  }

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColBtn.addEventListener('click', appendColumn);
  removeColBtn.addEventListener('click', removeColumn);

  updateButtons();
});
