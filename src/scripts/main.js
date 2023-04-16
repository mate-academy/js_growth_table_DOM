'use strict';

// write code here
const container = document.querySelector('.container');
const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', e => {
  e.preventDefault();

  const item = e.target;
  let rowsLength = table.rows.length;
  let cellsLength = table.rows[0].cells.length;

  if (!item.classList.contains('button')) {
    return;
  }

  if (item.classList.contains('append-row')) {
    const newRow = table.insertRow(rowsLength);

    [...table.rows[0].cells].forEach((el, index) => {
      newRow.insertCell(index);
    });
  }

  if (item.classList.contains('remove-row') && table.rows.length > 1) {
    table.deleteRow(rowsLength - 1);
  }

  if (item.classList.contains('append-column')) {
    [...table.rows].forEach((el, index) => {
      el.insertCell(cellsLength);
    });
  }

  if (item.classList.contains('remove-column') && cellsLength > 1) {
    [...table.rows].forEach((row, i) => {
      row.deleteCell(cellsLength - 1);
    });
  }

  rowsLength = table.rows.length;
  cellsLength = table.rows[0].cells.length;

  appendRow.disabled = rowsLength === 10;
  removeRow.disabled = rowsLength === 2;

  appendColumn.disabled = cellsLength === 10;
  removeColumn.disabled = cellsLength === 2;
});
