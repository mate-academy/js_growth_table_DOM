'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');
const tableBody = table.tBodies[0];

appendRow.addEventListener('click', () => {
  if (tableBody.rows.length >= 10) {
    return;
  }

  const rows = [...tableBody.children];
  const cells = rows[0].cells;
  const newRow = document.createElement('tr');

  for (let i = 0; i < cells.length; i += 1) {
    const cell = document.createElement('td');

    newRow.appendChild(cell);
  }

  tableBody.appendChild(newRow);

  if (tableBody.rows.length >= 10) {
    appendRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  if (tableBody.rows.length < 3) {
    return;
  }

  const rows = [...tableBody.children];

  rows[rows.length - 1].remove();

  if (tableBody.rows.length <= 2) {
    removeRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  if (tableBody.rows[0].cells.length >= 10) {
    return;
  }

  const rows = [...tableBody.children];

  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];
    const cell = document.createElement('td');

    row.appendChild(cell);
  }

  if (tableBody.rows[0].cells.length >= 10) {
    appendColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  if (tableBody.rows[0].cells.length < 3) {
    return;
  }

  const rows = [...tableBody.children];

  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];
    const cells = [...row.cells];

    cells[cells.length - 1].remove();
  }

  if (tableBody.rows[0].cells.length <= 2) {
    removeColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }
});
