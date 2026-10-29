'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const row = table.querySelector('tr');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const cell = table.querySelector('td');
const minCount = 2;
const maxCount = 10;

addRow.addEventListener('click', () => {
  const allRows = table.querySelectorAll('tr');

  if (allRows.length < maxCount) {
    const cloneRow = row.cloneNode(true);

    row.parentNode.append(cloneRow);
  }

  const updatedRows = table.querySelectorAll('tr');

  removeRow.disabled = updatedRows.length <= minCount;
  addRow.disabled = updatedRows.length >= maxCount;
});

removeRow.addEventListener('click', () => {
  const allRows = table.querySelectorAll('tr');
  const lastRow = allRows[allRows.length - 1];

  if (allRows.length > minCount) {
    lastRow.remove();
  }

  const updatedRows = table.querySelectorAll('tr');

  removeRow.disabled = updatedRows.length <= minCount;
  addRow.disabled = updatedRows.length >= maxCount;
});

addColumn.addEventListener('click', () => {
  const currentColumns = [...table.querySelectorAll('tr')];

  currentColumns.forEach((el) => {
    const allCells = el.querySelectorAll('td');

    if (allCells.length < maxCount) {
      const cloneCell = cell.cloneNode(true);

      el.append(cloneCell);
    }
  });

  const firstCells = currentColumns[0].querySelectorAll('td');

  removeColumn.disabled = firstCells.length <= minCount;
  addColumn.disabled = firstCells.length >= maxCount;
});

removeColumn.addEventListener('click', () => {
  const currentColumns = [...table.querySelectorAll('tr')];

  currentColumns.forEach((el) => {
    const allCells = el.querySelectorAll('td');
    const lastCell = allCells[allCells.length - 1];

    if (allCells.length > minCount) {
      lastCell.remove();
    }
  });

  const firstCells = currentColumns[0].querySelectorAll('td');

  removeColumn.disabled = firstCells.length <= minCount;
  addColumn.disabled = firstCells.length >= maxCount;
});
