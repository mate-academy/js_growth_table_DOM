'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

if (table && tbody) {
  addRowButton.addEventListener('click', () => {
    const { rows, cells } = getRowsAndCells();

    if (rows.length >= 10) {
      return;
    }

    const newRow = document.createElement('tr');

    for (let i = 0; i < cells.length; i++) {
      const newTd = document.createElement('td');

      newRow.appendChild(newTd);
    }

    tbody.appendChild(newRow);

    updateButton();
  });

  removeRowButton.addEventListener('click', () => {
    const { rows } = getRowsAndCells();

    if (rows.length <= 2) {
      return;
    }

    const lastRow = rows[rows.length - 1];

    lastRow.remove();

    updateButton();
  });

  addColumnButton.addEventListener('click', () => {
    const { rows, cells } = getRowsAndCells();

    if (cells.length >= 10) {
      return;
    }

    for (const row of rows) {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    }

    updateButton();
  });

  removeColumnButton.addEventListener('click', () => {
    const { rows, cells } = getRowsAndCells();

    if (cells.length <= 2) {
      return;
    }

    for (const row of rows) {
      const cellsInRow = row.querySelectorAll('td');
      const lastCell = cellsInRow[cellsInRow.length - 1];

      lastCell.remove();
    }

    updateButton();
  });
}

function getRowsAndCells() {
  const rows = tbody.querySelectorAll('tr');
  const cells = rows.length ? rows[0].querySelectorAll('td') : [];

  return { rows, cells };
}

function updateButton() {
  const { rows, cells } = getRowsAndCells();

  removeRowButton.disabled = rows.length === 2;
  addRowButton.disabled = rows.length === 10;
  removeColumnButton.disabled = cells.length === 2;
  addColumnButton.disabled = cells.length === 10;
}
