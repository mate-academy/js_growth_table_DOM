'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
const rows = table.rows;

const MIN_COUNT = 2;
const MAX_COUNT = 10;

appendRow.addEventListener('click', () => {
  if (rows.length < MAX_COUNT) {
    const columns = table.rows[0].children;
    const row = document.createElement('tr');

    [...columns].forEach(() => {
      const cell = document.createElement('td');

      row.append(cell);
    });
    table.appendChild(row);
  }

  checkButtons();
});

removeRow.addEventListener('click', () => {
  if (rows.length > MIN_COUNT) {
    table.deleteRow(-1);
  }

  checkButtons();
});

appendColumn.addEventListener('click', () => {
  if (rows[0].cells.length < MAX_COUNT) {
    [...rows].forEach((row) => {
      const cell = document.createElement('td');

      row.append(cell);
    });
  }

  checkButtons();
});

removeColumn.addEventListener('click', () => {
  if (rows[0].cells.length > MIN_COUNT) {
    [...rows].forEach((row) => {
      row.deleteCell(-1);
    });
  }

  checkButtons();
});

function checkButtons() {
  const rowsCount = rows.length;
  const columnCount = rows[0].cells.length;

  appendRow.disabled = rowsCount >= MAX_COUNT;
  removeRow.disabled = rowsCount <= MIN_COUNT;
  appendColumn.disabled = columnCount >= MAX_COUNT;
  removeColumn.disabled = columnCount <= MIN_COUNT;
}
