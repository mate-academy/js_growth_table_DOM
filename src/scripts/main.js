'use strict';

// write code here
const table = document.querySelector('tbody');
const rows = document.getElementsByTagName('tr');

const appendRowButton = document.querySelector('.append-row');
const deleteRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const deleteColumnButton = document.querySelector('.remove-column');

const growthTable = () => {
  appendRowButton.addEventListener('click', () => {
    const lastRow = rows[rows.length - 1];
    const cloneRows = lastRow.cloneNode(true);

    table.appendChild(cloneRows);

    if (rows.length >= 10) {
      appendRowButton.setAttribute('disabled', '');
    }

    if (rows.length > 2) {
      deleteRowButton.removeAttribute('disabled');
    }
  });

  deleteRowButton.addEventListener('click', () => {
    table.removeChild(rows[rows.length - 1]);

    if (rows.length === 2) {
      deleteRowButton.setAttribute('disabled', '');
    }

    if (rows.length <= 10) {
      appendRowButton.removeAttribute('disabled');
    }
  });

  appendColumnButton.addEventListener('click', () => {
    const firstRowCells = rows[0].getElementsByTagName('td');

    if (firstRowCells.length + 1 >= 10) {
      appendColumnButton.setAttribute('disabled', '');
    }

    if (firstRowCells.length + 1 > 2) {
      deleteColumnButton.removeAttribute('disabled');
    }

    Array.from(rows).forEach((row) => {
      const newCell = document.createElement('td');

      newCell.textContent = '';

      row.appendChild(newCell);
    });
  });

  deleteColumnButton.addEventListener('click', () => {
    const firstRowCells = rows[0].getElementsByTagName('td');

    if (firstRowCells.length < 10) {
      appendColumnButton.removeAttribute('disabled');
    }

    if (firstRowCells.length - 1 === 2) {
      deleteColumnButton.setAttribute('disabled', '');
    }

    Array.from(rows).forEach((row) => {
      const cells = row.getElementsByTagName('td');

      if (cells.length > 0) {
        row.removeChild(cells[cells.length - 1]);
      }
    });
  });
};

growthTable();
