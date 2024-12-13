'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('#growth-table');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const MAX_ROWS = 10;
  const MIN_ROWS = 2;
  const MAX_COLUMNS = 10;
  const MIN_COLUMNS = 2;

  function updateButtonState() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0]?.cells.length || 0;

    // Update row buttons
    if (rowCount >= MAX_ROWS) {
      appendRowButton.disabled = true;
    } else {
      appendRowButton.disabled = false;
    }

    if (rowCount <= MIN_ROWS) {
      removeRowButton.disabled = true;
    } else {
      removeRowButton.disabled = false;
    }

    // Update column buttons
    if (columnCount >= MAX_COLUMNS) {
      appendColumnButton.disabled = true;
    } else {
      appendColumnButton.disabled = false;
    }

    if (columnCount <= MIN_COLUMNS) {
      removeColumnButton.disabled = true;
    } else {
      removeColumnButton.disabled = false;
    }
  }

  // Add a row to the table
  appendRowButton.addEventListener('click', () => {
    const rowCount = table.rows.length;

    if (rowCount < MAX_ROWS) {
      const newRow = table.insertRow();
      const columnCount = table.rows[0].cells.length;

      for (let i = 0; i < columnCount; i++) {
        const newCell = newRow.insertCell();

        newCell.textContent = `Row ${rowCount + 1}, Cell ${i + 1}`;
      }
      updateButtonState();
    }
  });

  // Remove the last row from the table
  removeRowButton.addEventListener('click', () => {
    const rowCount = table.rows.length;

    if (rowCount > MIN_ROWS) {
      table.deleteRow(rowCount - 1);
      updateButtonState();
    }
  });

  // Add a column to the table
  appendColumnButton.addEventListener('click', () => {
    const columnCount = table.rows[0]?.cells.length || 0;

    if (columnCount < MAX_COLUMNS) {
      Array.from(table.rows).forEach((row, index) => {
        const newCell = row.insertCell();

        newCell.textContent = `Row ${index + 1}, Cell ${columnCount + 1}`;
      });
      updateButtonState();
    }
  });

  // Remove the last column from the table
  removeColumnButton.addEventListener('click', () => {
    const columnCount = table.rows[0]?.cells.length || 0;

    if (columnCount > MIN_COLUMNS) {
      Array.from(table.rows).forEach((row) => {
        row.deleteCell(row.cells.length - 1);
      });
      updateButtonState();
    }
  });

  // Initial button state check
  updateButtonState();
});
