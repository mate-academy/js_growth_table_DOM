'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table.field');
  let tbody = table.querySelector('tbody');

  // if table has no tbody, create one and move rows into it
  if (!tbody) {
    tbody = document.createElement('tbody');

    while (table.firstChild) {
      tbody.appendChild(table.firstChild);
    }
    table.appendChild(tbody);
  }

  const buttonAddRow = document.querySelector('.append-row');
  const buttonRemoveRow = document.querySelector('.remove-row');
  const buttonAddColumn = document.querySelector('.append-column');
  const buttonRemoveColumn = document.querySelector('.remove-column');

  const MIN_SIZE = 2;
  const MAX_SIZE = 10;

  function updateButtons() {
    const rowCount = tbody.rows.length;
    const colCount = tbody.rows[0]?.cells.length || 0;

    buttonAddRow.disabled = rowCount >= MAX_SIZE;
    buttonRemoveRow.disabled = rowCount <= MIN_SIZE;
    buttonAddColumn.disabled = colCount >= MAX_SIZE;
    buttonRemoveColumn.disabled = colCount <= MIN_SIZE;
  }

  const createCell = () => document.createElement('td');

  buttonAddRow.addEventListener('click', () => {
    if (tbody.rows.length < MAX_SIZE) {
      const newRow = document.createElement('tr');
      const numberOfCells = tbody.rows[0].cells.length;

      for (let i = 0; i < numberOfCells; i++) {
        newRow.appendChild(createCell());
      }
      tbody.appendChild(newRow);
    }
    updateButtons();
  });

  buttonRemoveRow.addEventListener('click', () => {
    if (tbody.rows.length > MIN_SIZE) {
      tbody.deleteRow(-1);
    }
    updateButtons();
  });

  buttonAddColumn.addEventListener('click', () => {
    const colCount = tbody.rows[0].cells.length;

    if (colCount < MAX_SIZE) {
      Array.from(tbody.rows).forEach((row) => row.appendChild(createCell()));
    }
    updateButtons();
  });

  buttonRemoveColumn.addEventListener('click', () => {
    const colCount = tbody.rows[0].cells.length;

    if (colCount > MIN_SIZE) {
      Array.from(tbody.rows).forEach((row) => row.deleteCell(-1));
    }
    updateButtons();
  });

  updateButtons();
});
