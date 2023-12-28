'use strict';

// write code here
const table = document.querySelector('.field');
const tBody = table.tBodies[0];
const rowPlus = document.querySelector('.append-row');
const rowMinus = document.querySelector('.remove-row');
const columnPlus = document.querySelector('.append-column');
const columnMinus = document.querySelector('.remove-column');

document.addEventListener('click', (e) => {
  switch (e.target) {
    case rowPlus:
      addRow();
      break;
    case rowMinus:
      deleteRow();
      break;

    case columnPlus:
      addColumn();
      break;

    case columnMinus:
      deleteColumn();
      break;

    default:
      break;
  }
});

function addRow() {
  const tRow = document.createElement('tr');
  const numberOfColumns = tBody.rows[0].children.length;

  for (let i = 0; i < numberOfColumns; i++) {
    const cell = document.createElement('td');

    tRow.append(cell);
  }

  tBody.append(tRow);

  if (tBody.children.length >= 10) {
    rowPlus.setAttribute('disabled', '');
  }

  if (tBody.children.length >= 2) {
    rowMinus.removeAttribute('disabled');
  }
}

function deleteRow() {
  const lastRow = tBody.children[tBody.children.length - 1];

  tBody.removeChild(lastRow);

  if (tBody.children.length < 10) {
    rowPlus.removeAttribute('disabled');
  }

  if (tBody.children.length === 2) {
    rowMinus.setAttribute('disabled', '');
  }
}

function addColumn() {
  const numberOfRows = tBody.children.length;

  for (let i = 0; i < numberOfRows; i++) {
    const cell = document.createElement('td');
    const tRow = tBody.children[i];

    tRow.append(cell);
  }

  if (tBody.rows[0].cells.length >= 10) {
    columnPlus.setAttribute('disabled', '');
  }

  if (tBody.rows[0].cells.length >= 2) {
    columnMinus.removeAttribute('disabled');
  }
}

function deleteColumn() {
  const numberOfRows = tBody.children.length;
  const lastCellIndex = tBody.rows[0].cells.length - 1;

  for (let i = 0; i < numberOfRows; i++) {
    const tRow = tBody.children[i];
    const cell = tRow.cells[lastCellIndex];

    tRow.removeChild(cell);
  }

  if (tBody.rows[0].cells.length < 10) {
    columnPlus.removeAttribute('disabled');
  }

  if (tBody.rows[0].cells.length === 2) {
    columnMinus.setAttribute('disabled', '');
  }
}
