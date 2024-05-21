'use strict';

const MIN_COUNT = 2;
const MAX_COUNT = 10;
const APPEND_ROW = 'append-row';
const APPEND_COLUMN = 'append-column';
const REMOVE_ROW = 'remove-row';
const REMOVE_COLUMN = 'remove-column';

const container = document.querySelector('.container');
const tableBody = container.querySelector('.field').children[0];
const btnRemoveRow = container.querySelector('.remove-row');
const btnRemoveColumn = container.querySelector('.remove-column');
const btnAppendRow = container.querySelector('.append-row');
const btnAppendColumn = container.querySelector('.append-column');

function createCell() {
  return document.createElement('td');
}

function createRow(cellsCount) {
  const row = document.createElement('tr');

  for (let i = 0; i < cellsCount; i++) {
    row.appendChild(createCell());
  }

  return row;
}

function appendRow(currentColCount) {
  const newRow = createRow(currentColCount);

  tableBody.appendChild(newRow);

  return tableBody.children.length;
}

function appendColumn(rows) {
  rows.forEach((row) => {
    row.appendChild(createCell());
  });

  return rows[0].children.length;
}

function removeRow(rows, currentRowCount) {
  tableBody.removeChild(rows[currentRowCount - 1]);

  return tableBody.children.length;
}

function removeColumn(rows) {
  rows.forEach((row) => {
    row.removeChild(row.children[rows[0].children.length - 1]);
  });

  return rows[0].children.length;
}

function updateButtonState(button, condition) {
  button.disabled = condition;
}

container.addEventListener('click', (e) => {
  const button = e.target.closest('.button');

  if (!button) {
    return;
  }

  const currentBtnActionName = button.classList[0];
  const rows = tableBody.querySelectorAll('tr');
  let currentRowCount = rows.length;
  let currentColCount = rows[0].children.length;

  switch (currentBtnActionName) {
    case APPEND_ROW:
      if (currentRowCount < MAX_COUNT) {
        currentRowCount = appendRow(currentColCount);
      }

      if (currentRowCount >= MAX_COUNT) {
        updateButtonState(button, true);
      }

      if (btnRemoveRow.disabled) {
        updateButtonState(btnRemoveRow, false);
      }

      break;

    case APPEND_COLUMN:
      if (currentColCount < MAX_COUNT) {
        currentColCount = appendColumn(rows);
      }

      if (currentColCount >= MAX_COUNT) {
        updateButtonState(button, true);
      }

      if (btnRemoveColumn.disabled) {
        updateButtonState(btnRemoveColumn, false);
      }

      break;

    case REMOVE_ROW:
      currentRowCount = removeRow(rows, currentRowCount);

      if (currentRowCount <= MIN_COUNT) {
        updateButtonState(button, true);
      }

      if (btnAppendRow.disabled) {
        updateButtonState(btnAppendRow, false);
      }

      break;

    case REMOVE_COLUMN:
      currentColCount = removeColumn(rows);

      if (currentColCount <= MIN_COUNT) {
        updateButtonState(button, true);
      }

      if (btnAppendColumn.disabled) {
        updateButtonState(btnAppendColumn, false);
      }

      break;

    default:
      break;
  }
});
