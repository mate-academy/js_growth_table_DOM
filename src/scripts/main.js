'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');

  const appendRow = document.querySelector('.append-row');

  const removeRow = document.querySelector('.remove-row');

  const appendColumn = document.querySelector('.append-column');

  const removeColumn = document.querySelector('.remove-column');

  const maxRow = 10;
  const maxColumn = 10;
  const minRow = 2;
  const minColumn = 2;

  function updateButton() {
    const currentRow = table.rows.length;
    const currentColumn = currentRow > 0 ? table.rows[0].cells.length : 0;

    appendRow.disabled = currentRow >= maxRow;
    removeRow.disabled = currentRow <= minRow;
    appendColumn.disabled = currentColumn >= maxColumn || currentRow === 0;
    removeColumn.disabled = currentColumn <= minColumn || currentRow === 0;
  }

  appendRow.addEventListener('click', () => {
    if (table.rows.length < maxRow) {
      const newRow = table.insertRow();
      const numColumn = table.rows[0].cells.length;

      for (let i = 0; i < numColumn; i++) {
        newRow.insertCell();
      }
      updateButton();
    }
  });

  removeRow.addEventListener('click', () => {
    if (table.rows.length > minRow) {
      table.deleteRow(table.rows.length - 1);
      updateButton();
    }
  });

  appendColumn.addEventListener('click', () => {
    if (table.rows.length > 0 && table.rows[0].cells.length < maxColumn) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
      }
      updateButton();
    }
  });

  removeColumn.addEventListener('click', () => {
    if (table.rows.length > 0 && table.rows[0].cells.length > minColumn) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(table.rows[i].cells.length - 1);
      }
      updateButton();
    }
  });
});
