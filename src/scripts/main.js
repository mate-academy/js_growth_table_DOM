'use strict';

// write code here
const rowCreate = document.querySelector('.append-row');
const rowDelete = document.querySelector('.remove-row');
const columnCreate = document.querySelector('.append-column');
const columnDelete = document.querySelector('.remove-column');
const table = document.querySelector('.field');

// function for disable buttons, if rows or columns more or less then maxCount
const MAX_COUNT = 10;
const MIN_COUNT = 2;

function updateButtonStates() {
  const rowCount = document.querySelectorAll('.field tr').length;
  const columnCount = document.querySelector('.field tr').children.length;

  rowCreate.disabled = rowCount >= MAX_COUNT;
  rowDelete.disabled = rowCount <= MIN_COUNT;

  columnCreate.disabled = columnCount >= MAX_COUNT;
  columnDelete.disabled = columnCount <= MIN_COUNT;
}

// creating event listeners
rowCreate.addEventListener('click', () => {
  const lastRow = document.querySelector('.field tr:last-child');
  const clonedRow = lastRow.cloneNode(true);

  table.append(clonedRow);
  updateButtonStates();
});

rowDelete.addEventListener('click', () => {
  const lastRow = document.querySelector('.field tr:last-child');

  lastRow.remove();
  updateButtonStates();
});

columnCreate.addEventListener('click', () => {
  const tableRows = document.querySelectorAll('.field tr');

  tableRows.forEach((row) => {
    const lastColumn = row.querySelector('td:last-child');
    const clonedColumn = lastColumn.cloneNode(true);

    row.append(clonedColumn);
    updateButtonStates();
  });
});

columnDelete.addEventListener('click', () => {
  const tableRows = document.querySelectorAll('.field tr');

  tableRows.forEach((row) => {
    const lastColumn = row.querySelector('td:last-child');

    lastColumn.remove();
    updateButtonStates();
  });
});
