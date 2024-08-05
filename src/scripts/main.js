'use strict';

// write code here
const container = document.querySelector('.container');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;

function updateButtonState() {
  const rowCount = document.querySelectorAll('tr').length;
  const columnCount = table.rows[0].cells.length;

  appendRow.disabled = rowCount >= MAX_ROWS;
  removeRow.disabled = rowCount <= MIN_ROWS;
  appendColumn.disabled = columnCount >= MAX_COLUMNS;
  removeColumn.disabled = columnCount <= MIN_COLUMNS;
}

container.addEventListener('click', function (e) {
  if (
    !e.target.classList.contains('append-row') &&
    !e.target.classList.contains('remove-row') &&
    !e.target.classList.contains('append-column') &&
    !e.target.classList.contains('remove-column')
  ) {
    return;
  }

  if (e.target.classList.contains('append-row')) {
    const newRow = document.createElement('tr');
    const numberOfColumns = table.rows[0].cells.length;

    for (let i = 0; i < numberOfColumns; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }

    table.append(newRow);
  }

  if (e.target.classList.contains('remove-row')) {
    const rows = document.querySelectorAll('tr');

    if (rows.length > MIN_ROWS) {
      rows[rows.length - 1].remove();
    }
  }

  if (e.target.classList.contains('append-column')) {
    const rows = document.querySelectorAll('tr');

    for (const row of rows) {
      const newCell = document.createElement('td');

      row.append(newCell);
      table.append(row);
    }
  }

  if (e.target.classList.contains('remove-column')) {
    const rows = document.querySelectorAll('tr');

    for (const row of rows) {
      if (row.cells.length > MIN_COLUMNS) {
        row.deleteCell(-1);
      }
    }
  }

  updateButtonState();
});
