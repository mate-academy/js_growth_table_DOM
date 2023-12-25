'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  const maxRowsColumns = 10;
  const minRowsColumns = 2;

  let rowCount = table.rows.length;
  let columnCount = table.rows[0].cells.length;

  function appendRow() {
    if (rowCount < maxRowsColumns) {
      const newRow = table.insertRow();

      for (let i = 0; i < columnCount; i++) {
        newRow.insertCell();
      }
      rowCount++;
      updateButtonsState();
    }
  }

  function removeRow() {
    if (rowCount > minRowsColumns) {
      table.deleteRow(-1);
      rowCount--;
      updateButtonsState();
    }
  }

  function appendColumn() {
    if (columnCount < maxRowsColumns) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].insertCell();
      }
      columnCount++;
      updateButtonsState();
    }
  }

  function removeColumn() {
    if (columnCount > minRowsColumns) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(-1);
      }
      columnCount--;
      updateButtonsState();
    }
  }

  function updateButtonsState() {
    appendRowBtn.disabled = rowCount >= maxRowsColumns;
    removeRowBtn.disabled = rowCount <= minRowsColumns;
    appendColumnBtn.disabled = columnCount >= maxRowsColumns;
    removeColumnBtn.disabled = columnCount <= minRowsColumns;
  }

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColumnBtn.addEventListener('click', appendColumn);
  removeColumnBtn.addEventListener('click', removeColumn);

  updateButtonsState();
});
