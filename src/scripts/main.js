'use strict';

// write code here
const MAX_COUNT = 10;
const MIN_COUNT = 2;

const table = document.querySelector('tbody');

const addRow = document.querySelector('.append-row');
const deleteRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const deleteColumn = document.querySelector('.remove-column');

const updateButton = () => {
  const rowCount = table.querySelectorAll('tr').length;
  const colCount = table
    .querySelector('tr:first-child')
    .querySelectorAll('td').length;

  addRow.disabled = rowCount >= MAX_COUNT;
  deleteRow.disabled = rowCount <= MIN_COUNT;
  addColumn.disabled = colCount >= MAX_COUNT;
  deleteColumn.disabled = colCount <= MIN_COUNT;
};

addRow.addEventListener('click', () => {
  if (table.querySelectorAll('tr').length < MAX_COUNT) {
    const lastRow = table.querySelector('tr:last-child');
    const newRow = lastRow.cloneNode(true);

    table.appendChild(newRow);
    updateButton();
  }
});

deleteRow.addEventListener('click', () => {
  if (table.querySelectorAll('tr').length > MIN_COUNT) {
    table.deleteRow(-1);
    updateButton();
  }
});

addColumn.addEventListener('click', () => {
  if (
    table.querySelector('tr:first-child').querySelectorAll('td').length <
    MAX_COUNT
  ) {
    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];

      const lastCell = row.cells[row.cells.length - 1];
      const newCell = lastCell.cloneNode(true);

      row.appendChild(newCell);
      updateButton();
    }
  }
});

deleteColumn.addEventListener('click', () => {
  if (
    table.querySelector('tr:first-child').querySelectorAll('td').length >
    MIN_COUNT
  ) {
    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];

      row.deleteCell(-1);
      updateButton();
    }
  }
});
