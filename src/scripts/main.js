'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

appendRow.addEventListener('click', () => {
  const allRows = tbody.querySelectorAll('tr');

  if (allRows.length >= 10) {
    return;
  }

  const rowToClone = tbody.querySelector('tr');
  const clonedRow = rowToClone.cloneNode(true);

  tbody.appendChild(clonedRow);

  updateButtons();
});

removeRow.addEventListener('click', () => {
  const allRows = tbody.querySelectorAll('tr');
  const rowToRemove = tbody.querySelector('tr:last-child');

  if (allRows.length > 2) {
    tbody.removeChild(rowToRemove);
  }

  updateButtons();
});

appendColumn.addEventListener('click', () => {
  const firstRow = tbody.rows[0];
  const columnCount = firstRow?.cells.length || 0;

  if (columnCount >= 10) {
    return;
  }

  for (const row of tbody.rows) {
    row.insertCell(-1);
  }

  updateButtons();
});

removeColumn.addEventListener('click', () => {
  const cells = tbody.rows[0].cells;
  const cellsLength = cells.length;

  for (const row of tbody.rows) {
    if (cellsLength <= 2) {
      return;
    }

    row.deleteCell(-1);
  }

  updateButtons();
});

function updateButtons() {
  const rowCount = tbody.rows.length;
  const columnCount = tbody.rows[0]?.cells.length || 0;

  const MIN_ROWS = 2;
  const MAX_ROWS = 10;
  const MIN_COLS = 2;
  const MAX_COLS = 10;

  appendRow.disabled = rowCount >= MAX_ROWS;
  removeRow.disabled = rowCount <= MIN_ROWS;

  appendColumn.disabled = columnCount >= MAX_COLS;
  removeColumn.disabled = columnCount <= MIN_COLS;
}
