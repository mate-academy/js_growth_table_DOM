'use strict';

// write code here
const field = document.querySelector('.field');
const rows = field.rows;
const container = document.querySelector('.container');
const ROW = 'row';
const COLUMN = 'column';

function append(action) {
  switch (action) {
    case ROW:
      const lastRow = rows[rows.length - 1];
      const newRow = lastRow.cloneNode(true);

      field.appendChild(newRow);
      break;

    case COLUMN:
      for (const row of rows) {
        const newCell = document.createElement('td');

        row.appendChild(newCell);
      }
      break;
  }
  updateButtonsState();
}

function remove(action) {
  switch (action) {
    case ROW:
      const lastRow = rows[rows.length - 1];

      lastRow.remove();
      break;

    case COLUMN:
      for (const row of rows) {
        const lastColumn = row.cells[row.cells.length - 1];

        lastColumn.remove();
      }
      break;
  }
  updateButtonsState();
}

function clickActionButton(e) {
  const IS_APPEND_ROW = e.target.classList.contains('append-row');
  const IS_REMOVE_ROW = e.target.classList.contains('remove-row');
  const IS_APPEND_COLUMN = e.target.classList.contains('append-column');
  const IS_REMOVE_COLUMN = e.target.classList.contains('remove-column');

  const arr = [
    IS_APPEND_ROW,
    IS_REMOVE_ROW,
    IS_APPEND_COLUMN,
    IS_REMOVE_COLUMN,
  ];

  const result = arr.findIndex((item) => item === true);

  switch (result) {
    case 0:
      append(ROW);
      break;
    case 1:
      remove(ROW);
      break;
    case 2:
      append(COLUMN);
      break;
    case 3:
      remove(COLUMN);
      break;
  }
}

function updateButtonsState() {
  const appendRow = document.querySelector('.append-row');
  const appendColumn = document.querySelector('.append-column');
  const removeRow = document.querySelector('.remove-row');
  const removeColumn = document.querySelector('.remove-column');

  const trList = field.querySelectorAll('tr');

  const allRows = [...trList];
  const allCols = field.querySelector('tr').children;

  removeRow.disabled = allRows.length <= 2;
  appendRow.disabled = allRows.length >= 10;
  removeColumn.disabled = allCols.length <= 2;
  appendColumn.disabled = allCols.length >= 10;
}

updateButtonsState();
container.addEventListener('click', clickActionButton);
