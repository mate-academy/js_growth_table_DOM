'use strict';

  const table = document.querySelector('.field');
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');

  const maxRows = 10;
  const minRows = 2;
  const maxColumns = 10;
  const minColumns = 2;

  function updateButtonState() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    appendRow.disabled = rowCount >= maxRows;
    removeRow.disabled = rowCount <= minRows;
    appendColumn.disabled = columnCount >= maxColumns;
    removeColumn.disabled = columnCount <= minColumns;
  }

  appendRow.addEventListener('click', () => {
    if (table.rows.length < maxRows) {
      const newRow = table.insertRow();
      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }
      updateButtonState();
    }
  });

  removeRow.addEventListener('click', () => {
    if (table.rows.length > minRows) {
      table.deleteRow(-1);
      updateButtonState();
    }
  });

  appendColumn.addEventListener('click', () => {
    if (table.rows[0].cells.length < maxColumns) {
      for (let row of table.rows) {
        row.insertCell();
      }
      updateButtonState();
    }
  });

  removeColumn.addEventListener('click', () => {
    if (table.rows[0].cells.length > minColumns) {
      for (let row of table.rows) {
        row.deleteCell(-1);
      }
      updateButtonState();
    }
  });
