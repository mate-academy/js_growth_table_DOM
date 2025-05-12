'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const MAX_ROWS = 10;
  const MIN_ROWS = 2;
  const MAX_COLS = 10;
  const MIN_COLS = 2;

  const updateButtonState = () => {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    appendRowButton.disabled = rowCount >= MAX_ROWS;
    removeRowButton.disabled = rowCount <= MIN_ROWS;

    appendColumnButton.disabled = columnCount >= MAX_COLS;
    removeColumnButton.disabled = columnCount <= MIN_COLS;
  };

  const appendRow = () => {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    const newRow = table.insertRow(rowCount);

    for (let i = 0; i < columnCount; i++) {
      const cell = newRow.insertCell(i);

      cell.textContent = `New row, column ${i + 1}`;
    }

    updateButtonState();
  };

  const removeRow = () => {
    const rowCount = table.rows.length;

    if (rowCount > MIN_ROWS) {
      table.deleteRow(rowCount - 1);
      updateButtonState();
    }
  };

  const appendColumn = () => {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    for (let i = 0; i < rowCount; i++) {
      const newCell = table.rows[i].insertCell(columnCount);

      newCell.textContent = `New column, ${columnCount + 1}`;
    }

    updateButtonState();
  };

  const removeColumn = () => {
    const colCount = table.rows[0].cells.length;

    if (colCount > MIN_COLS) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(colCount - 1);
      }
      updateButtonState();
    }
  };

  appendRowButton.addEventListener('click', appendRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', appendColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  updateButtonState();
});
