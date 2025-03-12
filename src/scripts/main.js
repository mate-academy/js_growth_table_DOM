'use strict';

const container = document.querySelector('.container');
const ROWS_AND_COLUMNS_MAX_LIMIT = 10;
const ROWS_AND_COLUMNS_MIN_LIMIT = 2;

container.addEventListener('click', (e) => {
  const tableBody = document.querySelector('.field');
  const fieldRows = tableBody.rows;

  if (e.target.classList.contains('append-row')) {
    appendRow(tableBody, fieldRows);
  }

  if (e.target.classList.contains('remove-row')) {
    removeRow(fieldRows);
  }

  if (e.target.classList.contains('append-column')) {
    appendColumn(fieldRows);
  }

  if (e.target.classList.contains('remove-column')) {
    removeColumn(fieldRows);
  }
});

function appendRow(tableBody, fieldRows) {
  const newRow = fieldRows[0].cloneNode(true);

  tableBody.appendChild(newRow);

  updateButtonStates(fieldRows);
}

function removeRow(fieldRows) {
  const lastRow = fieldRows[fieldRows.length - 1];

  lastRow.remove();

  updateButtonStates(fieldRows);
}

function appendColumn(fieldRows) {
  const fieldRowsArray = [...fieldRows];

  fieldRowsArray.forEach((row) => {
    const rowColumns = row.cells;
    const newColumn = rowColumns[0].cloneNode(true);

    row.appendChild(newColumn);
  });

  updateButtonStates(fieldRows);
}

function removeColumn(fieldRows) {
  const fieldRowsArray = [...fieldRows];

  fieldRowsArray.forEach((row) => {
    const rowColumns = row.cells;
    const lastColumn = rowColumns[rowColumns.length - 1];

    lastColumn.remove();
  });

  updateButtonStates(fieldRows);
}

function updateButtonStates(fieldRows) {
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColButton = document.querySelector('.append-column');
  const removeColButton = document.querySelector('.remove-column');

  const rowsCount = fieldRows.length;
  const colsCount = fieldRows[0].cells.length;

  appendRowButton.disabled = rowsCount >= ROWS_AND_COLUMNS_MAX_LIMIT;
  removeRowButton.disabled = rowsCount <= ROWS_AND_COLUMNS_MIN_LIMIT;
  appendColButton.disabled = colsCount >= ROWS_AND_COLUMNS_MAX_LIMIT;
  removeColButton.disabled = colsCount <= ROWS_AND_COLUMNS_MIN_LIMIT;
}

const initialRows = document.querySelector('.field').rows;

updateButtonStates(initialRows);
