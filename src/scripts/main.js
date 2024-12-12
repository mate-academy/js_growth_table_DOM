'use strict';

const table = document.querySelector('.field');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const rows = table.rows;

  removeRow.disabled = false;

  if (rows.length < 10) {
    const row = rows[0];

    table.append(row.cloneNode(true));
  }

  appendRow.disabled = table.rows.length === 10;
});

removeRow.addEventListener('click', () => {
  const rows = table.rows;

  appendRow.disabled = false;

  if (rows.length > 2) {
    rows[rows.length - 1].remove();
  }

  removeRow.disabled = rows.length === 2;
});

appendColumn.addEventListener('click', () => {
  const rows = [...table.rows];

  removeColumn.disabled = false;

  if (rows[0].cells.length < 10) {
    rows.forEach((row) => {
      const cell = row.cells[0];

      row.append(cell.cloneNode(true));
    });
  }

  appendColumn.disabled = rows[0].cells.length === 10;
});

removeColumn.addEventListener('click', () => {
  const rows = [...table.rows];

  appendColumn.disabled = false;

  if (rows[0].cells.length > 2) {
    rows.forEach((row) => {
      row.cells[row.cells.length - 1].remove();
    });
  }

  removeColumn.disabled = rows[0].cells.length === 2;
});
