'use strict';

const ROW_MIN_LIMIT = 2;
const ROW_MAX_LIMIT = 10;

const COLUMN_MIN_LIMIT = 2;
const COLUMN_MAX_LIMIT = 10;

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const tableBody = document.querySelector('table tbody');

appendRow.addEventListener('click', () => {
  handleLine(appendRow, removeRow, () => {
    const newRow = document.createElement('tr');
    const columnCount = tableBody.rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    tableBody.appendChild(newRow);
  });
});

removeRow.addEventListener('click', () => {
  handleLine(
    removeRow,
    appendRow,
    () => {
      tableBody.deleteRow(-1);
    },
    false,
  );
});

appendColumn.addEventListener('click', () => {
  handleLine(appendColumn, removeColumn, () => {
    const rowCount = tableBody.rows.length;

    for (let i = 0; i < rowCount; i++) {
      const newCell = document.createElement('td');

      tableBody.rows[i].appendChild(newCell);
    }
  });
});

removeColumn.addEventListener('click', () => {
  handleLine(
    removeColumn,
    appendColumn,
    () => {
      const rowCount = tableBody.rows.length;

      for (let i = 0; i < rowCount; i++) {
        tableBody.rows[i].deleteCell(-1);
      }
    },
    false,
  );
});

/**
 * Handles adding or removing a line (row or column) in the table
 * @param {Element} button - The button that triggered the action
 * @param {Element} oppositeButton - The opposite button
 * @param {function} cb - The callback to execute the action
 * @param {boolean} isAdding - True if adding, false if removing
 */
function handleLine(button, oppositeButton, cb, isAdding = true) {
  const type =
    button.classList.contains('append-row') ||
    button.classList.contains('remove-row')
      ? 'row'
      : 'column';

  const getRowOrCellCount = () =>
    type === 'row' ? tableBody.rows.length : tableBody.rows[0].cells.length;

  let rowOrCellCount = getRowOrCellCount();

  const minLimit = type === 'row' ? ROW_MIN_LIMIT : COLUMN_MIN_LIMIT;
  const maxLimit = type === 'row' ? ROW_MAX_LIMIT : COLUMN_MAX_LIMIT;

  if (isAdding ? rowOrCellCount < maxLimit : rowOrCellCount > minLimit) {
    cb();
    rowOrCellCount = getRowOrCellCount();
  }

  button.disabled = isAdding
    ? rowOrCellCount >= maxLimit
    : rowOrCellCount <= minLimit;

  oppositeButton.disabled = isAdding
    ? rowOrCellCount <= minLimit
    : rowOrCellCount >= maxLimit;
}
