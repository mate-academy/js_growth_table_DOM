'use strict';

const table = document.querySelector('table');

const addRowButton = document.querySelector('.append-row');
const addColButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColButton = document.querySelector('.remove-column');

function buttonState() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  const MAX_ROWS = 10;
  const MIN_ROWS = 2;
  const MAX_COLS = 10;
  const MIN_COLS = 2;

  addRowButton.disabled = rowCount >= MAX_ROWS;
  removeRowButton.disabled = rowCount <= MIN_ROWS;

  addColButton.disabled = colCount >= MAX_COLS;
  removeColButton.disabled = colCount <= MIN_COLS;
}

document.addEventListener('click', (e) => {
  if (e.target === addRowButton) {
    const rowCount = table.rows.length;

    if (rowCount < 10) {
      const newRow = document.createElement('tr');
      const colCount = rowCount > 0 ? table.rows[0].cells.length : 0;

      for (let i = 0; i < colCount; i++) {
        newRow.appendChild(document.createElement('td'));
      }

      table.appendChild(newRow);
      buttonState();
    }
  }

  if (e.target === addColButton) {
    const rowCount = table.rows.length;

    if (rowCount > 0) {
      Array.from(table.rows).forEach((row) => {
        row.appendChild(document.createElement('td'));
      });
      buttonState();
    }
  }

  if (e.target === removeRowButton) {
    const rowCount = table.rows.length;

    if (rowCount > 2) {
      table.deleteRow(-1);
      buttonState();
    }
  }

  if (e.target === removeColButton) {
    const rowCount = table.rows.length;
    const colCount = rowCount > 0 ? table.rows[0].cells.length : 0;

    if (colCount > 2) {
      Array.from(table.rows).forEach((row) => {
        row.deleteCell(-1);
      });
      buttonState();
    }
  }
});
