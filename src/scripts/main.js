'use strict';

const btnAppendRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAppendColumn = document.querySelector('.append-column');
const btnRemoveColumn = document.querySelector('.remove-column');

const table = document.querySelector('table');
let rowsCount = document.querySelectorAll('tr').length;
const firstRow = document.querySelector('table tr');
let colsCount = firstRow ? firstRow.querySelectorAll('td, th').length : 0;

const maxCount = 10;
const minCount = 2;

function updateButtons() {
  btnAppendRow.disabled = rowsCount >= maxCount;
  btnRemoveRow.disabled = rowsCount <= minCount;
  btnAppendColumn.disabled = colsCount >= maxCount;
  btnRemoveColumn.disabled = colsCount <= minCount;
}

btnAppendRow.addEventListener('click', (e) => {
  const newRow = document.createElement('tr');

  if (rowsCount < maxCount) {
    for (let i = 0; i < colsCount; i++) {
      newRow.appendChild(document.createElement('td'));
    }

    const tbody = table.querySelector('tbody') || table;

    tbody.appendChild(newRow);
    rowsCount++;
  }
  updateButtons();
});

btnAppendColumn.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tr');

  if (colsCount < maxCount) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].appendChild(document.createElement('td'));
    }
    colsCount++;
  }
  updateButtons();
});

btnRemoveRow.addEventListener('click', (e) => {
  if (rowsCount > minCount) {
    const rows = document.querySelectorAll('tr');

    rows[rows.length - 1].remove();
    rowsCount--;
  }
  updateButtons();
});

btnRemoveColumn.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tr');

  if (colsCount > minCount) {
    for (const row of rows) {
      const cells = row.querySelectorAll('td, th');

      if (cells.length > 0) {
        cells[cells.length - 1].remove();
      }
    }
    colsCount--;
  }
  updateButtons();
});

updateButtons();
