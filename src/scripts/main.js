'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const table = document.querySelector('table');
  const templateRow = document.querySelector('table tr');

  const newTr = document.createElement('tr');

  table.appendChild(newTr);

  for (let i = 0; i < templateRow.cells.length; i++) {
    const newTd = document.createElement('td');

    newTr.appendChild(newTd);
  }

  const rowCount = table.rows.length;

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
});

removeRow.addEventListener('click', () => {
  const table = document.querySelector('table');
  const rowCount = table.rows.length;

  if (rowCount > 2) {
    const lastRow = table.rows[table.rows.length - 1];

    lastRow.remove();
  }

  const updatedRowCount = table.rows.length;

  appendRow.disabled = updatedRowCount >= 10;
  removeRow.disabled = updatedRowCount <= 2;
});

appendColumn.addEventListener('click', () => {
  const table = document.querySelector('table');
  const firstRow = table.rows[0];
  const columnCount = firstRow ? firstRow.cells.length : 0;

  if (columnCount >= 10) {
    return;
  }

  Array.from(table.rows).forEach((row) => {
    const newTd = document.createElement('td');

    row.appendChild(newTd);
  });

  const updatedColCount = table.rows[0]?.cells.length ?? 0;

  appendColumn.disabled = updatedColCount >= 10;
  removeColumn.disabled = updatedColCount <= 2;
});

removeColumn.addEventListener('click', () => {
  const table = document.querySelector('table');
  const firstRow = table.rows[0];
  const columnCount = firstRow ? firstRow.cells.length : 0;

  if (columnCount > 2) {
    Array.from(table.rows).forEach((row) => {
      row.deleteCell(-1);
    });
  }

  const updatedColCount = table.rows[0]?.cells.length ?? 0;

  appendColumn.disabled = updatedColCount >= 10;
  removeColumn.disabled = updatedColCount <= 2;
});
