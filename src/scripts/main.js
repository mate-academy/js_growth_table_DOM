'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

function updateButtons() {
  const allRows = document.querySelectorAll('tr');
  const rowsCount = allRows.length;

  const colsCount = allRows[0].cells.length;

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;

  appendColumn.disabled = colsCount >= 10;
  removeColumn.disabled = colsCount <= 2;
}

appendRow.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;
  const newRow = document.createElement('tr');

  if (document.querySelectorAll('tr').length >= 10) {
    return '';
  }

  for (let i = 0; i < colCount; i++) {
    const td = document.createElement('td');

    newRow.append(td);
  }

  tbody.append(newRow);

  updateButtons();
});

removeRow.addEventListener('click', () => {
  const rows = tbody.rows;

  if (rows.length > 2) {
    tbody.lastElementChild.remove();
  }
  updateButtons();
});

appendColumn.addEventListener('click', () => {
  const allRows = document.querySelectorAll('tr');

  if (allRows[0].cells.length >= 10) {
    return '';
  }

  allRows.forEach((row) => {
    const newCell = document.createElement('td');

    row.append(newCell);
  });

  updateButtons();
});

removeColumn.addEventListener('click', () => {
  const allRows = document.querySelectorAll('tr');
  const firstRowCells = allRows[0].cells;

  if (firstRowCells.length > 2) {
    allRows.forEach((row) => {
      row.lastElementChild.remove();
    });
  }
  updateButtons();
});
