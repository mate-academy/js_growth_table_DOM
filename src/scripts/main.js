'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  const maxSizeTable = 10;
  const minSizeTable = 2;

  let rowCount = table.rows.length;
  let columnCount = table.rows[0]?.cells.length || 0;

  function updateButtonState() {
    rowCount = table.rows.length;
    columnCount = table.rows[0].cells.length;

    if (rowCount >= maxSizeTable) {
      appendRow.disabled = true;
      removeRow.disabled = false;
    } else if (rowCount <= minSizeTable) {
      removeRow.disabled = true;
      appendRow.disabled = false;
    } else {
      appendRow.disabled = false;
      removeRow.disabled = false;
    }

    if (columnCount >= maxSizeTable) {
      appendColumn.disabled = true;
      removeColumn.disabled = false;
    } else if (columnCount <= minSizeTable) {
      removeColumn.disabled = true;
      appendColumn.disabled = false;
    } else {
      appendColumn.disabled = false;
      removeColumn.disabled = false;
    }
  }

  appendRow.addEventListener('click', () => {
    if (rowCount < maxSizeTable) {
      const newRow = table.insertRow();

      for (let i = 0; i < columnCount; i++) {
        newRow.insertCell();
      }
      updateButtonState();
    }
  });

  removeRow.addEventListener('click', () => {
    if (rowCount > minSizeTable) {
      table.deleteRow(table.rows.length - 1);
      updateButtonState();
    }
  });

  appendColumn.addEventListener('click', () => {
    if (columnCount < maxSizeTable) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].insertCell();
      }
      updateButtonState();
    }
  });

  removeColumn.addEventListener('click', () => {
    if (columnCount > minSizeTable) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(table.rows[i].cells.length - 1);
      }
      updateButtonState();
    }
  });
});
