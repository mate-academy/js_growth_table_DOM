'use strict';

const table = document.querySelector('table');
const tableBody = table ? table.querySelector('tbody') : null;

const btnAppendRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAppendCol = document.querySelector('.append-column');
const btnRemoveCol = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

/**

 */
function updateButtonsState() {
  if (!tableBody || !tableBody.rows.length) {
    return;
  }

  const rowCount = tableBody.rows.length;

  btnAppendRow.disabled = rowCount >= MAX_COUNT;
  btnRemoveRow.disabled = rowCount <= MIN_COUNT;

  if (rowCount === 0) {
    return;
  }

  const colCount = tableBody.rows[0].cells.length;

  btnAppendCol.disabled = colCount >= MAX_COUNT;
  btnRemoveCol.disabled = colCount <= MIN_COUNT;
}

function appendRow() {
  if (!tableBody) {
    return;
  }

  if (tableBody.rows.length < MAX_COUNT) {
    const lastRow = tableBody.lastElementChild;
    const newRow = lastRow.cloneNode(true);

    Array.from(newRow.cells).forEach((cell) => {
      cell.textContent = '';
    });

    tableBody.appendChild(newRow);
    updateButtonsState();
  }
}

function removeRow() {
  if (!tableBody) {
    return;
  }

  if (tableBody.rows.length > MIN_COUNT) {
    tableBody.removeChild(tableBody.lastElementChild);
    updateButtonsState();
  }
}

function appendColumn() {
  if (!tableBody || !table) {
    return;
  }

  if (tableBody.rows[0] && tableBody.rows[0].cells.length < MAX_COUNT) {
    table.querySelectorAll('thead tr, tfoot tr').forEach((row) => {
      const newHeader = document.createElement('th');

      newHeader.textContent = '';
      row.appendChild(newHeader);
    });

    Array.from(tableBody.rows).forEach((row) => {
      const newCell = document.createElement('td');

      newCell.textContent = '';
      row.appendChild(newCell);
    });

    updateButtonsState();
  }
}

function removeColumn() {
  if (!tableBody || !table) {
    return;
  }

  if (tableBody.rows[0] && tableBody.rows[0].cells.length > MIN_COUNT) {
    table.querySelectorAll('thead tr, tfoot tr').forEach((row) => {
      row.removeChild(row.lastElementChild);
    });

    Array.from(tableBody.rows).forEach((row) => {
      row.removeChild(row.lastElementChild);
    });

    updateButtonsState();
  }
}

if (
  table &&
  tableBody &&
  btnAppendRow &&
  btnRemoveRow &&
  btnAppendCol &&
  btnRemoveCol
) {
  btnAppendRow.addEventListener('click', appendRow);
  btnRemoveRow.addEventListener('click', removeRow);
  btnAppendCol.addEventListener('click', appendColumn);
  btnRemoveCol.addEventListener('click', removeColumn);

  updateButtonsState();
}
