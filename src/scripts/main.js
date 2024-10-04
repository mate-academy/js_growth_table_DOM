'use strict';

const table = document.querySelector('.field');

document.querySelector('.append-row').addEventListener('click', () => {
  const row = document.createElement('tr');
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    const cell = document.createElement('td');

    row.appendChild(cell);
  }
  table.appendChild(row);
});

document.querySelector('.remove-column').addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }
});

document.querySelector('.append-column').addEventListener('click', () => {
  const rows = document.querySelectorAll('.field tr');

  rows.forEach((row) => {
    const cell = document.createElement('td');

    row.appendChild(cell);
  });
});

document.querySelector('.remove-row').addEventListener('click', () => {
  const rows = document.querySelectorAll('.field tr');

  rows.forEach((row) => {
    if (row.cells.length > 2) {
      row.deleteCell(-1);
    }
  });
});
