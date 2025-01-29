'use strict';

const buttonRemoveColumn = document.querySelector('.remove-column');
const buttonAddColumn = document.querySelector('.append-column');

buttonAddColumn.addEventListener('click', () => {
  const firstRow = document.querySelector('tr');

  if (firstRow.cells.length >= 10) {
    buttonAddColumn.disabled = true;

    return;
  }
  buttonRemoveColumn.disabled = false;

  document.querySelectorAll('tr').forEach((row) => {
    const firstCell = row.cells[0];

    if (!firstCell) {
      return;
    }

    const cloneCell = firstCell.cloneNode(true);

    row.appendChild(cloneCell);
  });
});

const buttonAddRow = document.querySelector('.append-row');

buttonAddRow.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows.length >= 10) {
    buttonAddRow.disabled = true;

    return;
  }
  buttonRemoveRow.disabled = false;

  const firstRow = rows[0];
  const cloneRow = firstRow.cloneNode(true);

  firstRow.parentNode.appendChild(cloneRow);
});

const buttonRemoveRow = document.querySelector('.remove-row');

buttonRemoveRow.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows.length <= 2) {
    buttonRemoveRow.disabled = true;

    return;
  }
  buttonAddRow.disabled = false;
  rows[rows.length - 1].remove();
});

buttonRemoveColumn.addEventListener('click', () => {
  const firstRow = document.querySelector('tr');

  if (firstRow.cells.length <= 2) {
    buttonRemoveColumn.disabled = true;

    return;
  }
  buttonAddColumn.disabled = false;

  document.querySelectorAll('tr').forEach((row) => {
    const lastCell = row.cells[row.cells.length - 1];

    lastCell.remove();
  });
});
